import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import type { BookOfRootsEntry } from "./lib/book-of-roots";
import { products } from "./lib/products";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type D1Database = {
  prepare: (query: string) => {
    bind: (...values: unknown[]) => {
      run: () => Promise<unknown>;
    };
  };
};

type WorkerEnv = {
  DB?: D1Database;
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;
  SUPABASE_PUBLISHABLE_KEY?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  VITE_SUPABASE_URL?: string;
  VITE_SUPABASE_ANON_KEY?: string;
  AUTH_GOOGLE_ID?: string;
  AUTH_GOOGLE_SECRET?: string;
  AUTH_GOOGLE_REDIRECT_URI?: string;
  AUTH_GOOGLE_SCOPE?: string;
  AUTH_SESSION_SECRET?: string;
  PRESIDENT_EMAIL?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  CJ_API_KEY?: string;
  ANTHROPIC_API_KEY?: string;
};

type CloudflareRuntimeRequest = Request & {
  runtime?: {
    cloudflare?: {
      env?: unknown;
      context?: unknown;
    };
  };
};

type SessionUser = {
  email?: string;
  name?: string;
  picture?: string;
  sub?: string;
  exp?: number;
};

type Profile = {
  id: string;
  email: string;
  full_name?: string | null;
  role?: string | null;
  referral_code?: string | null;
  rupees?: number | null;
  referred_by?: string | null;
  active?: boolean | null;
};

type ProductApiRow = {
  slug: string;
  name: string;
  category: string;
  type: string;
  price_cents: number;
  short: string;
  description: string;
  image_url?: string | null;
  status: string;
  stock?: number | null;
  uses?: string[] | null;
  ingredients?: string[] | null;
  badge?: string | null;
  format?: string | null;
};

const DEFAULT_PRODUCT_IMAGE_URL =
  "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=800&q=80";

type OfficeTab =
  | "dashboard"
  | "products"
  | "orders"
  | "marketing"
  | "users"
  | "access"
  | "announcements"
  | "audit"
  | "revenue"
  | "nightbloom"
  | "command"
  | "book_of_roots"
  | "analytics"
  | "guild";

const DEFAULT_PRESIDENT_EMAIL = "blackhatterxvi@gmail.com";

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function readCookie(request: Request, name: string) {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
}

function encodeBase64Url(value: string | ArrayBuffer) {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

async function signSession(payload: Record<string, unknown>, secret: string) {
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(encodedPayload));
  return `${encodedPayload}.${encodeBase64Url(signature)}`;
}

function decodeBase64Url(value: string) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function base64UrlToBytes(value: string) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), "=");
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}

async function verifySessionCookie(request: Request, secret?: string) {
  const session = readCookie(request, "ha_session");
  if (!session || !secret) return undefined;

  const [payload, signature] = session.split(".");
  if (!payload || !signature) return undefined;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );

  const signatureBytes = base64UrlToBytes(signature);
  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    signatureBytes,
    new TextEncoder().encode(payload),
  );

  if (!valid) return undefined;

  const parsed = JSON.parse(decodeBase64Url(payload)) as {
    email?: string;
    name?: string;
    picture?: string;
    exp?: number;
  };

  if (!parsed.exp || parsed.exp < Math.floor(Date.now() / 1000)) return undefined;
  return parsed;
}

function createCookie(name: string, value: string, maxAgeSeconds: number) {
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAgeSeconds}`;
}

function presidentEmail(env: WorkerEnv) {
  return (env.PRESIDENT_EMAIL || DEFAULT_PRESIDENT_EMAIL).trim().toLowerCase();
}

function getSupabaseUrl(env: WorkerEnv) {
  return (env.SUPABASE_URL || env.VITE_SUPABASE_URL)?.replace(/\/$/, "");
}

function getSupabaseServerKey(env: WorkerEnv) {
  return (
    env.SUPABASE_SERVICE_ROLE_KEY ||
    env.SUPABASE_ANON_KEY ||
    env.VITE_SUPABASE_ANON_KEY ||
    env.SUPABASE_PUBLISHABLE_KEY
  );
}

function getSupabasePublicKey(env: WorkerEnv) {
  return (
    env.SUPABASE_ANON_KEY ||
    env.VITE_SUPABASE_ANON_KEY ||
    env.SUPABASE_PUBLISHABLE_KEY ||
    env.SUPABASE_SERVICE_ROLE_KEY
  );
}

function supabaseHeaders(key: string, prefer?: string) {
  const headers: Record<string, string> = {
    apikey: key,
    authorization: `Bearer ${key}`,
    "content-type": "application/json",
  };
  if (prefer) headers.prefer = prefer;
  return headers;
}

function getSupabaseAdmin(env: WorkerEnv) {
  const url = getSupabaseUrl(env);
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : undefined;
}

function eq(value: string) {
  return encodeURIComponent(value);
}

function profileIdFromGoogleSub(sub: string) {
  const tail = sub.slice(-12).padStart(12, "0").replace(/[^0-9]/g, "0");
  return `00000000-0000-4000-8000-${tail}`.replace(/0{12}$/, "000000000001");
}

function referralCodeFromId(id: string) {
  return `HH${id.replace(/-/g, "").slice(0, 10).toUpperCase()}`;
}

async function supabaseJson<T>(
  env: WorkerEnv,
  path: string,
  init: RequestInit & { prefer?: string } = {},
) {
  const admin = getSupabaseAdmin(env);
  if (!admin) throw new Error("Supabase service role is not configured.");
  const response = await fetch(`${admin.url}${path}`, {
    ...init,
    headers: {
      ...supabaseHeaders(admin.key, init.prefer),
      ...init.headers,
    },
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Supabase ${path} failed: ${response.status} ${detail}`);
  }
  if (response.status === 204) return undefined as T;
  return (await response.json().catch(() => undefined)) as T;
}

async function audit(env: WorkerEnv, userEmail: string | null | undefined, action: string, details: unknown) {
  try {
    await supabaseJson(env, "/rest/v1/audit_log", {
      method: "POST",
      body: JSON.stringify({ user_email: userEmail ?? null, action_type: action, details }),
    });
  } catch (error) {
    console.warn(error);
  }
}

async function getProfileByEmail(env: WorkerEnv, email: string) {
  const rows = await supabaseJson<Profile[]>(
    env,
    `/rest/v1/profiles?select=*&email=eq.${eq(email.trim().toLowerCase())}&limit=1`,
  ).catch(() => []);
  return rows[0];
}

async function getProfileByReferralCode(env: WorkerEnv, code: string) {
  const rows = await supabaseJson<Profile[]>(
    env,
    `/rest/v1/profiles?select=*&referral_code=eq.${eq(code.trim().toUpperCase())}&limit=1`,
  ).catch(() => []);
  return rows[0];
}

async function ensureProfile(
  env: WorkerEnv,
  user: { sub: string; email: string; name?: string; picture?: string },
  referralCode?: string,
) {
  const email = user.email.trim().toLowerCase();
  const existing = await getProfileByEmail(env, email);
  if (existing) {
    await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(existing.id)}`, {
      method: "PATCH",
      body: JSON.stringify({
        full_name: user.name ?? existing.full_name ?? null,
        avatar_url: user.picture ?? null,
        updated_at: new Date().toISOString(),
      }),
    }).catch(() => undefined);
    return existing;
  }

  const id = profileIdFromGoogleSub(user.sub);
  const referrer =
    referralCode && referralCode.trim()
      ? await getProfileByReferralCode(env, referralCode).catch(() => undefined)
      : undefined;
  const role = email === presidentEmail(env) ? "president" : "user";
  const profile = {
    id,
    email,
    full_name: user.name ?? null,
    avatar_url: user.picture ?? null,
    role,
    referral_code: referralCodeFromId(id),
    referred_by: referrer?.id ?? null,
  };
  await supabaseJson(env, "/rest/v1/profiles", {
    method: "POST",
    prefer: "return=representation",
    body: JSON.stringify(profile),
  });
  if (referrer?.id && referrer.id !== id) {
    await supabaseJson(env, "/rest/v1/referral_events?on_conflict=referrer_id,referred_id,event_type", {
      method: "POST",
      headers: { prefer: "resolution=ignore-duplicates" },
      body: JSON.stringify({
        referrer_id: referrer.id,
        referred_id: id,
        event_type: "signup",
        rupees_awarded: 0,
      }),
    }).catch(() => undefined);
  }
  return profile;
}

async function getCurrentUser(request: Request, env: WorkerEnv) {
  const session = (await verifySessionCookie(request, env.AUTH_SESSION_SECRET)) as SessionUser | undefined;
  const email = session?.email?.trim().toLowerCase();
  const profile = email ? await getProfileByEmail(env, email).catch(() => undefined) : undefined;
  const role = email === presidentEmail(env) ? "president" : profile?.role || "user";
  return { session, email, profile, role, isPresident: role === "president" || email === presidentEmail(env) };
}

function getClientIp(request: Request) {
  const headers = request.headers;
  const candidate =
    headers.get("cf-connecting-ip") ||
    headers.get("x-real-ip") ||
    (headers.get("x-forwarded-for") || "").split(",")[0]?.trim();
  return candidate || null;
}

function cleanSecret(value: string | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  return trimmed.replace(/^["']|["']$/g, "");
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function listFromInput(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value !== "string") return [];
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function nullableString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function centsFromDollars(value: unknown) {
  const number = typeof value === "number" ? value : Number(String(value ?? "").replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(number) || number < 0) return 0;
  return Math.round(number * 100);
}

function mapBookOfRootsEntry(value: unknown): BookOfRootsEntry | undefined {
  if (!value || typeof value !== "object") return undefined;
  const row = value as Record<string, unknown>;
  const joinedProduct = row.products;
  const productSlug =
    joinedProduct && typeof joinedProduct === "object" && "slug" in joinedProduct
      ? (joinedProduct as { slug?: unknown }).slug
      : undefined;

  if (
    (typeof row.id !== "number" && typeof row.id !== "string") ||
    typeof row.name !== "string" ||
    !isStringArray(row.traditions) ||
    !isStringArray(row.purposes) ||
    typeof row.ingredient_type !== "string" ||
    typeof row.description !== "string" ||
    typeof row.how_to_use !== "string"
  ) {
    return undefined;
  }

  return {
    id: row.id,
    name: row.name,
    image_url: typeof row.image_url === "string" ? row.image_url : null,
    traditions: row.traditions,
    purposes: row.purposes,
    ingredient_type: row.ingredient_type,
    description: row.description,
    how_to_use: row.how_to_use,
    product_id: typeof row.product_id === "number" ? row.product_id : null,
    product_slug: typeof productSlug === "string" ? productSlug : null,
    created_at: typeof row.created_at === "string" ? row.created_at : undefined,
  };
}

async function requirePresident(request: Request, env: WorkerEnv) {
  const session = await verifySessionCookie(request, env.AUTH_SESSION_SECRET);
  return session?.email?.trim().toLowerCase() === presidentEmail(env);
}

async function handleBookOfRootsList(request: Request, env: WorkerEnv) {
  if (request.method !== "GET") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "GET" } });
  }

  const supabaseUrl = getSupabaseUrl(env);
  const supabaseKey = getSupabasePublicKey(env);
  if (!supabaseUrl || !supabaseKey) {
    return json({ entries: [], backend: "supabase" });
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/book_of_roots?select=*,products(slug)&order=name.asc`,
    { headers: supabaseHeaders(supabaseKey) },
  );

  if (!response.ok) {
    console.error(
      JSON.stringify({ message: "Book of Roots list failed", status: response.status }),
    );
    return json({ entries: [], backend: "supabase" });
  }

  const rows = (await response.json().catch(() => [])) as unknown;
  const entries = Array.isArray(rows)
    ? rows.map(mapBookOfRootsEntry).filter((entry): entry is BookOfRootsEntry => Boolean(entry))
    : [];
  return json({ entries, backend: "supabase" });
}

async function resolveProductId(productSlug: unknown, env: WorkerEnv) {
  if (typeof productSlug !== "string" || !productSlug.trim()) return null;
  const supabaseUrl = getSupabaseUrl(env);
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !key) return null;

  const response = await fetch(
    `${supabaseUrl}/rest/v1/products?select=id&slug=eq.${encodeURIComponent(productSlug.trim())}&limit=1`,
    { headers: supabaseHeaders(key) },
  );
  if (!response.ok) return null;
  const rows = (await response.json().catch(() => [])) as Array<{ id?: unknown }>;
  return typeof rows[0]?.id === "number" ? rows[0].id : null;
}

async function handleBookOfRootsUpsert(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }
  if (!(await requirePresident(request, env))) {
    return json({ message: "President access required." }, { status: 403 });
  }

  const supabaseUrl = getSupabaseUrl(env);
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !key) {
    return json({ message: "Supabase service role is not configured." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (
    !body ||
    typeof body.name !== "string" ||
    !body.name.trim() ||
    !isStringArray(body.traditions) ||
    !isStringArray(body.purposes) ||
    typeof body.ingredient_type !== "string" ||
    typeof body.description !== "string" ||
    typeof body.how_to_use !== "string"
  ) {
    return json({ message: "Complete all required Book of Roots fields." }, { status: 400 });
  }

  const productId = await resolveProductId(body.product_slug, env);
  const payload = {
    name: body.name.trim(),
    image_url:
      typeof body.image_url === "string" && body.image_url.trim() ? body.image_url.trim() : null,
    traditions: body.traditions,
    purposes: body.purposes,
    ingredient_type: body.ingredient_type,
    description: body.description.trim(),
    how_to_use: body.how_to_use.trim(),
    product_id: productId,
  };

  const id = typeof body.id === "number" ? body.id : undefined;
  const endpoint = id
    ? `${supabaseUrl}/rest/v1/book_of_roots?id=eq.${id}`
    : `${supabaseUrl}/rest/v1/book_of_roots`;
  const response = await fetch(endpoint, {
    method: id ? "PATCH" : "POST",
    headers: supabaseHeaders(key, "return=representation"),
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(
      JSON.stringify({ message: "Book of Roots upsert failed", status: response.status, detail }),
    );
    return json({ message: "Could not save this entry." }, { status: 502 });
  }

  return json({ message: id ? "Entry updated." : "Entry created." });
}

async function handleBookOfRootsDelete(request: Request, env: WorkerEnv, id: string) {
  if (request.method !== "DELETE") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "DELETE" } });
  }
  if (!(await requirePresident(request, env))) {
    return json({ message: "President access required." }, { status: 403 });
  }
  if (!/^\d+$/.test(id)) return json({ message: "Invalid entry id." }, { status: 400 });

  const supabaseUrl = getSupabaseUrl(env);
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !key) {
    return json({ message: "Supabase service role is not configured." }, { status: 503 });
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/book_of_roots?id=eq.${id}`, {
    method: "DELETE",
    headers: supabaseHeaders(key),
  });
  if (!response.ok) return json({ message: "Could not delete this entry." }, { status: 502 });
  return json({ message: "Entry deleted." });
}

async function handleBookOfRootsNotify(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const email = body?.email;
  const ingredient =
    typeof body?.ingredient === "string" ? body.ingredient.trim().slice(0, 80) : "ingredient";
  if (!isEmail(email)) return json({ message: "Enter a valid email address." }, { status: 400 });

  const normalizedEmail = email.trim().toLowerCase();
  const source = `book-of-roots:${ingredient.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  if (await upsertSupabaseSubscriber(normalizedEmail, source, env)) {
    return json({ message: `We'll write when ${ingredient} is available.` });
  }

  if (env.DB) {
    await env.DB.prepare(
      `insert into subscribers (email, source, status, created_at, updated_at)
       values (?, ?, 'active', datetime('now'), datetime('now'))
       on conflict(email) do update set source = excluded.source, status = 'active', updated_at = datetime('now')`,
    )
      .bind(normalizedEmail, source)
      .run();
    return json({ message: `We'll write when ${ingredient} is available.` });
  }

  return json({ message: "The waitlist is not configured yet." }, { status: 503 });
}

async function upsertSupabaseSubscriber(email: string, source: string, env: WorkerEnv) {
  const supabaseUrl = getSupabaseUrl(env);
  const supabaseKey = getSupabaseServerKey(env);

  if (!supabaseUrl || !supabaseKey) return false;

  const response = await fetch(`${supabaseUrl}/rest/v1/subscribers?on_conflict=email`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      authorization: `Bearer ${supabaseKey}`,
      "content-type": "application/json",
      prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify({
      email,
      source,
      status: "active",
      updated_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(`Supabase subscriber upsert failed: ${response.status} ${detail}`);
    return false;
  }

  return true;
}

async function handleNewsletter(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }

  const body = await request.json().catch(() => null);
  const email = body && typeof body === "object" && "email" in body ? body.email : undefined;
  const source =
    body && typeof body === "object" && "source" in body && typeof body.source === "string"
      ? body.source
      : "site";

  if (!isEmail(email)) {
    return json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (await upsertSupabaseSubscriber(normalizedEmail, source, env)) {
    return json({ message: "You are on the list.", stored: true, backend: "supabase" });
  }

  if (!env.DB) {
    console.warn(
      "Newsletter signup accepted without Supabase or DB binding. Add Supabase env vars or DB in wrangler.toml to persist subscribers.",
    );
    return json(
      {
        message: "You are on the list. Connect Supabase or Cloudflare D1 to persist signups.",
        stored: false,
      },
      { status: 202 },
    );
  }

  await env.DB.prepare(
    `insert into subscribers (email, source, status, created_at, updated_at)
       values (?, ?, 'active', datetime('now'), datetime('now'))
       on conflict(email) do update set
         source = excluded.source,
         status = 'active',
         updated_at = datetime('now')`,
  )
    .bind(normalizedEmail, source)
    .run();

  return json({ message: "You are on the list.", stored: true });
}

async function handleSession(request: Request, env: WorkerEnv) {
  const { session, email, profile, role, isPresident } = await getCurrentUser(request, env);
  const delegatedTabs = email
    ? await supabaseJson<Array<{ tab_id: OfficeTab }>>(
        env,
        `/rest/v1/office_tab_access?select=tab_id&user_email=eq.${eq(email)}`,
      ).catch(() => [])
    : [];

  return json({
    authenticated: Boolean(email),
    email: email ?? null,
    name: session?.name ?? null,
    picture: session?.picture ?? null,
    isPresident,
    role,
    rupees: profile?.rupees ?? 0,
    referralCode: profile?.referral_code ?? null,
    officeTabs: delegatedTabs.map((row) => row.tab_id),
  });
}

async function handleProductsList(env: WorkerEnv) {
  const supabaseUrl = getSupabaseUrl(env);
  const supabaseKey = getSupabasePublicKey(env);
  if (!supabaseUrl || !supabaseKey) return json({ products: [], backend: "supabase" });

  async function fetchProducts(path: string) {
    const response = await fetch(`${supabaseUrl}${path}`, { headers: supabaseHeaders(supabaseKey) });
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`Supabase products list failed: ${response.status} ${detail}`);
    }
    return (await response.json().catch(() => [])) as ProductApiRow[];
  }

  let rows: ProductApiRow[] = [];
  try {
    rows = await fetchProducts(
      "/rest/v1/products?select=slug,name,category,type,price_cents,short,description,image_url,status,stock,uses,ingredients,badge,format&status=eq.active&order=name.asc",
    );
  } catch (error) {
    console.warn(error);
    rows = await fetchProducts(
      "/rest/v1/products?select=slug,name,category,type,price_cents,short,description,image_url,status,uses,ingredients,badge,format&status=eq.active&order=name.asc",
    ).catch(() => []);
  }

  const products = rows.map((row) => {
    const imageUrl =
      typeof row.image_url === "string" && row.image_url.trim()
        ? row.image_url.trim()
        : DEFAULT_PRODUCT_IMAGE_URL;

    return {
      ...row,
      image_url: imageUrl,
    };
  });

  return json({ products, backend: "supabase" });
}

type NightbloomRow = {
  id: number;
  title: string;
  blurb: string;
  pdf_url: string;
  cover_image_url?: string | null;
  price_cents: number;
  status: string;
  sort_order?: number;
  created_at?: string;
};

async function handleNightbloomList(request: Request, env: WorkerEnv) {
  const rows = await supabaseJson<NightbloomRow[]>(
    env,
    `/rest/v1/nightbloom_pdfs?select=*&order=sort_order.asc,created_at.desc&status=eq.active`,
  ).catch(() => []);

  const user = await getCurrentUser(request, env);
  const purchasedIds = user.email ? await getPurchasedPdfIds(env, user.email) : new Set<number>();

  // Never expose the raw PDF URL in the public list. Access is decided server-side and the
  // file is only handed out through the gated download endpoint.
  const pdfs = rows.map((row) => {
    const isFree = (row.price_cents ?? 0) === 0;
    const unlocked = isFree ? Boolean(user.email) : purchasedIds.has(row.id);
    return {
      id: row.id,
      title: row.title,
      blurb: row.blurb,
      cover_image_url: row.cover_image_url ?? null,
      price_cents: row.price_cents ?? 0,
      status: row.status,
      unlocked,
    };
  });

  return json({ pdfs, authenticated: Boolean(user.email) });
}

async function getPurchasedPdfIds(env: WorkerEnv, email: string) {
  const rows = await supabaseJson<Array<{ pdf_id: number }>>(
    env,
    `/rest/v1/pdf_purchases?select=pdf_id&buyer_email=eq.${eq(email.trim().toLowerCase())}`,
  ).catch(() => []);
  return new Set(rows.map((row) => row.pdf_id));
}

async function handleNightbloomDownload(request: Request, env: WorkerEnv) {
  const id = Number(new URL(request.url).searchParams.get("id"));
  if (!Number.isInteger(id) || id < 1) return json({ message: "Invalid PDF id." }, { status: 400 });
  const user = await getCurrentUser(request, env);
  if (!user.email) return json({ message: "Please sign in to access this PDF." }, { status: 401 });

  const rows = await supabaseJson<NightbloomRow[]>(
    env,
    `/rest/v1/nightbloom_pdfs?select=id,pdf_url,price_cents,status&id=eq.${id}&limit=1`,
  ).catch(() => []);
  const pdf = rows[0];
  if (!pdf || pdf.status !== "active") return json({ message: "PDF not found." }, { status: 404 });

  const isFree = (pdf.price_cents ?? 0) === 0;
  if (!isFree) {
    const purchased = await getPurchasedPdfIds(env, user.email);
    if (!purchased.has(pdf.id) && !user.isPresident) {
      return json({ message: "Purchase this PDF to download it." }, { status: 403 });
    }
  }
  return json({ url: pdf.pdf_url });
}

async function handleNightbloomCheckout(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }
  const stripeSecretKey = cleanSecret(env.STRIPE_SECRET_KEY);
  if (!stripeSecretKey || (!stripeSecretKey.startsWith("sk_") && !stripeSecretKey.startsWith("rk_"))) {
    return json({ message: "Stripe is not configured yet." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { id?: number } | null;
  const id = Number(body?.id);
  if (!Number.isInteger(id) || id < 1) return json({ message: "Invalid PDF id." }, { status: 400 });

  const rows = await supabaseJson<NightbloomRow[]>(
    env,
    `/rest/v1/nightbloom_pdfs?select=*&id=eq.${id}&limit=1`,
  ).catch(() => []);
  const pdf = rows[0];
  if (!pdf || pdf.status !== "active") return json({ message: "PDF not found." }, { status: 404 });
  if ((pdf.price_cents ?? 0) < 1) return json({ message: "This PDF is free for members." }, { status: 400 });

  const user = await getCurrentUser(request, env);
  if (!user.email) return json({ message: "Please sign in before purchasing." }, { status: 401 });

  const alreadyOwned = await getPurchasedPdfIds(env, user.email);
  if (alreadyOwned.has(id)) return json({ message: "You already own this PDF." }, { status: 400 });

  const origin = new URL(request.url).origin;
  const params = new URLSearchParams({
    mode: "payment",
    success_url: `${origin}/nightbloom?purchase=success`,
    cancel_url: `${origin}/nightbloom?purchase=cancelled`,
    customer_email: user.email,
    "metadata[kind]": "nightbloom_pdf",
    "metadata[pdf_id]": String(id),
    "metadata[user_email]": user.email,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(pdf.price_cents),
    "line_items[0][price_data][product_data][name]": pdf.title.slice(0, 255),
    "line_items[0][price_data][product_data][description]": (pdf.blurb || "Night Bloom Library PDF").slice(0, 255),
    "line_items[0][price_data][product_data][metadata][pdf_id]": String(id),
  });

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      authorization: `Bearer ${stripeSecretKey}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    body: params,
  }).catch(() => null);

  const stripeData = (await stripeResponse?.json().catch(() => null)) as { url?: string; error?: { message?: string } } | null;
  if (!stripeResponse?.ok || !stripeData?.url) {
    return json({ message: stripeData?.error?.message || "Stripe could not create checkout." }, { status: 502 });
  }
  return json({ url: stripeData.url });
}

async function handleGuildApply(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }
  const body = (await request.json().catch(() => null)) as {
    full_name?: string;
    email?: string;
    job_id?: string;
    job_title?: string;
    portfolio_url?: string;
    message?: string;
  } | null;

  const fullName = body?.full_name?.trim();
  const email = body?.email?.trim().toLowerCase();
  if (!fullName) return json({ message: "Your name is required." }, { status: 400 });
  if (!email || !isEmail(email)) return json({ message: "A valid email is required." }, { status: 400 });
  if (!body?.message?.trim()) return json({ message: "Please tell us why this role calls to you." }, { status: 400 });

  try {
    await supabaseJson(env, "/rest/v1/guild_applications", {
      method: "POST",
      body: JSON.stringify({
        full_name: fullName,
        email,
        job_id: nullableString(body.job_id),
        job_title: nullableString(body.job_title),
        portfolio_url: nullableString(body.portfolio_url),
        message: body.message.trim(),
        status: "new",
      }),
    });
  } catch (error) {
    console.error(JSON.stringify({ message: "Guild application save failed", detail: error instanceof Error ? error.message : String(error) }));
    return json({ message: "We could not record your application. Please try again." }, { status: 502 });
  }
  await audit(env, email, "guild.apply", { job_title: body.job_title ?? null });
  return json({ message: "Application received." });
}

async function handleStripeCheckout(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }

  const stripeSecretKey = cleanSecret(env.STRIPE_SECRET_KEY);

  if (!stripeSecretKey) {
    console.error(
      JSON.stringify({
        message: "Stripe checkout unavailable: STRIPE_SECRET_KEY binding is missing",
        route: "/api/checkout",
      }),
    );
    return json(
      { message: "Stripe is not configured yet. Add STRIPE_SECRET_KEY in Cloudflare." },
      { status: 503 },
    );
  }

  if (!stripeSecretKey.startsWith("sk_") && !stripeSecretKey.startsWith("rk_")) {
    console.error(
      JSON.stringify({
        message:
          "Stripe checkout unavailable: STRIPE_SECRET_KEY does not look like a Stripe secret key",
        route: "/api/checkout",
      }),
    );
    return json({ message: "Stripe secret key is not valid." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const rawItems = body && typeof body === "object" && "items" in body ? body.items : undefined;

  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    return json({ message: "Your satchel is empty." }, { status: 400 });
  }

  const items = rawItems
    .map((item) => {
      if (!item || typeof item !== "object") return undefined;
      const slug = "slug" in item && typeof item.slug === "string" ? item.slug : "";
      const qty = "qty" in item && typeof item.qty === "number" ? Math.floor(item.qty) : 0;
      const product = products.find((p) => p.slug === slug);
      if (!product || qty < 1) return undefined;
      return { product, qty: Math.min(qty, 99) };
    })
    .filter(Boolean) as { product: (typeof products)[number]; qty: number }[];

  if (items.length === 0) {
    return json({ message: "No checkout-ready products were found." }, { status: 400 });
  }

  const url = new URL(request.url);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = subtotal > 50 ? 0 : 6;
  const currentUser = await getCurrentUser(request, env);
  const marketingCode = readCookie(request, "ha_marketing_src");
  const params = new URLSearchParams({
    mode: "payment",
    success_url: `${url.origin}/cart?checkout=success`,
    cancel_url: `${url.origin}/cart?checkout=cancelled`,
    "automatic_tax[enabled]": "true",
    billing_address_collection: "auto",
    "shipping_address_collection[allowed_countries][0]": "US",
    "metadata[source]": "hyrule-herb-apothecary",
    "metadata[items]": JSON.stringify(items.map(({ product, qty }) => ({ slug: product.slug, qty }))).slice(0, 500),
    "metadata[user_email]": currentUser.email ?? "",
    "metadata[marketing_link_code]": marketingCode ?? "",
  });

  if (currentUser.email) params.set("customer_email", currentUser.email);

  items.forEach(({ product, qty }, index) => {
    params.set(`line_items[${index}][quantity]`, String(qty));
    params.set(`line_items[${index}][price_data][currency]`, "usd");
    params.set(
      `line_items[${index}][price_data][unit_amount]`,
      String(Math.round(product.price * 100)),
    );
    params.set(`line_items[${index}][price_data][product_data][name]`, product.name);
    params.set(
      `line_items[${index}][price_data][product_data][description]`,
      product.short.slice(0, 255),
    );
    params.set(`line_items[${index}][price_data][product_data][metadata][slug]`, product.slug);
  });

  if (shipping > 0) {
    const index = items.length;
    params.set(`line_items[${index}][quantity]`, "1");
    params.set(`line_items[${index}][price_data][currency]`, "usd");
    params.set(`line_items[${index}][price_data][unit_amount]`, String(shipping * 100));
    params.set(`line_items[${index}][price_data][product_data][name]`, "Standard shipping");
  }

  let stripeResponse: Response;
  try {
    stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        authorization: `Bearer ${stripeSecretKey}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: params,
    });
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "Stripe checkout request failed before receiving a response",
        detail: error instanceof Error ? error.message : String(error),
      }),
    );
    return json({ message: "Stripe could not be reached." }, { status: 502 });
  }

  const stripeData = (await stripeResponse.json().catch(() => null)) as {
    url?: string;
    error?: { message?: string };
  } | null;

  if (!stripeResponse.ok || !stripeData?.url) {
    console.error(
      JSON.stringify({
        message: "Stripe checkout session creation failed",
        status: stripeResponse.status,
        detail: stripeData?.error?.message ?? "Stripe response did not include a checkout URL",
      }),
    );
    return json(
      { message: stripeData?.error?.message || "Stripe could not create checkout." },
      { status: 502 },
    );
  }

  return json({ url: stripeData.url });
}

async function verifyStripeWebhook(rawBody: string, signatureHeader: string | null, secret?: string) {
  const webhookSecret = cleanSecret(secret);
  if (!webhookSecret) return true;
  if (!signatureHeader) return false;
  const timestamp = signatureHeader.match(/(?:^|,)t=([^,]+)/)?.[1];
  const signature = signatureHeader.match(/(?:^|,)v1=([^,]+)/)?.[1];
  if (!timestamp || !signature) return false;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(webhookSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${timestamp}.${rawBody}`),
  );
  const expected = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return expected === signature;
}

async function getCjAccessToken(env: WorkerEnv) {
  const key = cleanSecret(env.CJ_API_KEY);
  if (!key) throw new Error("CJ_API_KEY is not configured.");
  const response = await fetch(
    "https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: key, password: key, accessToken: key, cjApiKey: key }),
    },
  );
  const data = (await response.json().catch(() => ({}))) as {
    data?: { accessToken?: string };
    result?: boolean;
    message?: string;
  };
  const token = data.data?.accessToken;
  if (!response.ok || !token) throw new Error(data.message || "Could not get CJ access token.");
  return token;
}

async function createCjOrder(
  env: WorkerEnv,
  order: { id: string | number; shippingName?: string | null; shippingAddress?: Record<string, unknown> | null },
  items: Array<{ slug: string; qty: number; cj_product_id?: string | null; cj_variant_id?: string | null }>,
) {
  const token = await getCjAccessToken(env);
  const address = order.shippingAddress ?? {};
  const payload = {
    orderNumber: String(order.id),
    shippingZip: address.postal_code ?? "",
    shippingCountry: address.country ?? "US",
    shippingProvince: address.state ?? "",
    shippingCity: address.city ?? "",
    shippingAddress: [address.line1, address.line2].filter(Boolean).join(" "),
    shippingCustomerName: order.shippingName ?? "Hyrule Herb customer",
    products: items.map((item) => ({
      vid: item.cj_variant_id,
      pid: item.cj_product_id,
      quantity: item.qty,
    })),
  };
  const response = await fetch(
    "https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrder",
    {
      method: "POST",
      headers: { "content-type": "application/json", "CJ-Access-Token": token },
      body: JSON.stringify(payload),
    },
  );
  const data = (await response.json().catch(() => ({}))) as {
    data?: { orderId?: string; id?: string };
    message?: string;
  };
  const cjOrderId = data.data?.orderId || data.data?.id;
  if (!response.ok || !cjOrderId) throw new Error(data.message || "CJ order creation failed.");
  return cjOrderId;
}

async function maybeAwardReferral(env: WorkerEnv, email: string | null | undefined) {
  if (!email) return;
  const profile = await getProfileByEmail(env, email).catch(() => undefined);
  if (!profile?.id || !profile.referred_by) return;
  const existing = await supabaseJson<Array<{ id: number }>>(
    env,
    `/rest/v1/referral_events?select=id&referred_id=eq.${eq(profile.id)}&event_type=eq.purchase&limit=1`,
  ).catch(() => []);
  if (existing.length) return;

  await supabaseJson(env, "/rest/v1/referral_events", {
    method: "POST",
    body: JSON.stringify({
      referrer_id: profile.referred_by,
      referred_id: profile.id,
      event_type: "purchase",
      rupees_awarded: 50,
    }),
  });
  const referrer = await supabaseJson<Profile[]>(
    env,
    `/rest/v1/profiles?select=rupees&id=eq.${eq(profile.referred_by)}&limit=1`,
  ).catch(() => []);
  const current = referrer[0]?.rupees ?? 0;
  await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(profile.referred_by)}`, {
    method: "PATCH",
    body: JSON.stringify({ rupees: current + 50, updated_at: new Date().toISOString() }),
  });
}

async function incrementMarketingConversion(env: WorkerEnv, code: string | null | undefined, totalCents: number) {
  if (!code) return;
  const rows = await supabaseJson<Array<{ id: number; conversions: number; revenue_generated: number }>>(
    env,
    `/rest/v1/marketing_links?select=id,conversions,revenue_generated&link_code=eq.${eq(code)}&limit=1`,
  ).catch(() => []);
  const link = rows[0];
  if (!link) return;
  await supabaseJson(env, `/rest/v1/marketing_links?id=eq.${link.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      conversions: (link.conversions ?? 0) + 1,
      revenue_generated: Number(link.revenue_generated ?? 0) + totalCents / 100,
    }),
  });
}

async function handleStripeWebhook(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }
  const rawBody = await request.text();
  const valid = await verifyStripeWebhook(rawBody, request.headers.get("stripe-signature"), env.STRIPE_WEBHOOK_SECRET);
  if (!valid) return json({ message: "Invalid Stripe signature." }, { status: 400 });
  const event = JSON.parse(rawBody) as { type?: string; data?: { object?: Record<string, unknown> } };
  if (event.type !== "checkout.session.completed") return json({ received: true });

  const session = event.data?.object ?? {};
  const metadata = (session.metadata && typeof session.metadata === "object" ? session.metadata : {}) as Record<string, string>;
  const sessionId = String(session.id ?? "");
  if (!sessionId) return json({ message: "Missing checkout session id." }, { status: 400 });
  const itemRefs = JSON.parse(metadata.items || "[]") as Array<{ slug: string; qty: number }>;
  const email =
    typeof session.customer_details === "object" && session.customer_details
      ? String((session.customer_details as Record<string, unknown>).email ?? metadata.user_email ?? "")
      : metadata.user_email || null;
  // Night Bloom PDF purchases are digital: record the unlock and skip the physical order pipeline.
  if (metadata.kind === "nightbloom_pdf") {
    const pdfId = Number(metadata.pdf_id);
    if (Number.isInteger(pdfId) && email) {
      await supabaseJson(env, "/rest/v1/pdf_purchases?on_conflict=pdf_id,buyer_email", {
        method: "POST",
        prefer: "resolution=merge-duplicates",
        body: JSON.stringify({
          pdf_id: pdfId,
          buyer_email: email.trim().toLowerCase(),
          stripe_checkout_session_id: sessionId,
          amount_cents: Number(session.amount_total ?? 0),
        }),
      }).catch(() => undefined);
      await maybeAwardReferral(env, email);
    }
    return json({ received: true, pdfId });
  }

  const shippingDetails =
    typeof session.shipping_details === "object" && session.shipping_details
      ? (session.shipping_details as Record<string, unknown>)
      : {};
  const shippingAddress =
    typeof shippingDetails.address === "object" && shippingDetails.address
      ? (shippingDetails.address as Record<string, unknown>)
      : null;
  const totalCents = Number(session.amount_total ?? 0);
  const subtotalCents = Number(session.amount_subtotal ?? totalCents);
  const orderRows = await supabaseJson<Array<{ id: number }>>(env, "/rest/v1/orders?on_conflict=stripe_checkout_session_id", {
    method: "POST",
    prefer: "resolution=merge-duplicates,return=representation",
    body: JSON.stringify({
      user_email: email || null,
      stripe_checkout_session_id: sessionId,
      status: "paid",
      subtotal_cents: subtotalCents,
      total_cents: totalCents,
      marketing_link_code: metadata.marketing_link_code || null,
      shipping_name: typeof shippingDetails.name === "string" ? shippingDetails.name : null,
      shipping_address: shippingAddress,
      updated_at: new Date().toISOString(),
    }),
  });
  const orderId = orderRows[0]?.id;
  if (!orderId) return json({ message: "Order could not be recorded." }, { status: 502 });

  const productRows = await supabaseJson<Array<{ slug: string; cj_product_id?: string | null; cj_variant_id?: string | null; price_cents?: number }>>(
    env,
    `/rest/v1/products?select=slug,cj_product_id,cj_variant_id,price_cents&slug=in.(${itemRefs.map((item) => `"${item.slug}"`).join(",")})`,
  ).catch(() => []);
  const bySlug = new Map(productRows.map((row) => [row.slug, row]));
  await Promise.all(
    itemRefs.map((item) =>
      supabaseJson(env, "/rest/v1/order_items", {
        method: "POST",
        body: JSON.stringify({
          order_id: orderId,
          product_slug: item.slug,
          quantity: item.qty,
          unit_price_cents: bySlug.get(item.slug)?.price_cents ?? 0,
        }),
      }).catch(() => undefined),
    ),
  );

  const fulfillable = itemRefs.map((item) => ({ ...item, ...bySlug.get(item.slug) }));
  const allCj = fulfillable.length > 0 && fulfillable.every((item) => item.cj_product_id && item.cj_variant_id);
  if (allCj) {
    try {
      const cjOrderId = await createCjOrder(
        env,
        { id: orderId, shippingName: typeof shippingDetails.name === "string" ? shippingDetails.name : null, shippingAddress },
        fulfillable,
      );
      await supabaseJson(env, `/rest/v1/orders?id=eq.${orderId}`, {
        method: "PATCH",
        body: JSON.stringify({ cj_order_id: cjOrderId, fulfillment_status: "sent_to_cj", updated_at: new Date().toISOString() }),
      });
    } catch (error) {
      console.error(error);
      await supabaseJson(env, `/rest/v1/orders?id=eq.${orderId}`, {
        method: "PATCH",
        body: JSON.stringify({ fulfillment_status: "manual", updated_at: new Date().toISOString() }),
      }).catch(() => undefined);
    }
  }

  await maybeAwardReferral(env, email);
  await incrementMarketingConversion(env, metadata.marketing_link_code, totalCents);
  return json({ received: true, orderId });
}

const roleTabs: Record<string, OfficeTab[]> = {
  president: [
    "dashboard",
    "products",
    "orders",
    "marketing",
    "users",
    "access",
    "announcements",
    "audit",
    "revenue",
    "nightbloom",
    "command",
    "book_of_roots",
    "analytics",
    "guild",
  ],
  admin: [
    "dashboard",
    "products",
    "orders",
    "marketing",
    "users",
    "access",
    "announcements",
    "audit",
    "revenue",
    "nightbloom",
    "command",
    "book_of_roots",
    "analytics",
    "guild",
  ],
};

async function allowedTabsForUser(env: WorkerEnv, email: string | undefined, role: string) {
  const tabs = new Set(roleTabs[role] ?? []);
  if (email) {
    const delegated = await supabaseJson<Array<{ tab_id: OfficeTab }>>(
      env,
      `/rest/v1/office_tab_access?select=tab_id&user_email=eq.${eq(email)}`,
    ).catch(() => []);
    delegated.forEach((row) => tabs.add(row.tab_id));
  }
  return [...tabs];
}

async function requireOfficeAccess(request: Request, env: WorkerEnv, tab?: OfficeTab) {
  const user = await getCurrentUser(request, env);
  if (!user.email) return { ok: false as const, response: json({ message: "Sign in required." }, { status: 401 }), user };
  if (user.profile?.active === false) return { ok: false as const, response: json({ message: "Account is inactive." }, { status: 403 }), user };
  const tabs = await allowedTabsForUser(env, user.email, user.role);
  if (tab && !tabs.includes(tab)) {
    return { ok: false as const, response: json({ message: "Office tab access required." }, { status: 403 }), user };
  }
  if (!tab && tabs.length === 0) {
    return { ok: false as const, response: json({ message: "Office access required." }, { status: 403 }), user };
  }
  return { ok: true as const, user, tabs };
}

async function handleMarketingClick(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") return json({ message: "Method not allowed" }, { status: 405 });
  const body = (await request.json().catch(() => null)) as { code?: string } | null;
  const code = body?.code?.trim();
  if (!code) return json({ tracked: false });
  const rows = await supabaseJson<Array<{ id: number; clicks: number }>>(
    env,
    `/rest/v1/marketing_links?select=id,clicks&link_code=eq.${eq(code)}&limit=1`,
  ).catch(() => []);
  const link = rows[0];
  if (link) {
    await supabaseJson(env, `/rest/v1/marketing_links?id=eq.${link.id}`, {
      method: "PATCH",
      body: JSON.stringify({ clicks: (link.clicks ?? 0) + 1 }),
    }).catch(() => undefined);
  }
  return json(
    { tracked: Boolean(link) },
    { headers: { "set-cookie": `ha_marketing_src=${encodeURIComponent(code)}; Path=/; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}` } },
  );
}

async function handleReferralCapture(request: Request) {
  if (request.method !== "POST") return json({ message: "Method not allowed" }, { status: 405 });
  const body = (await request.json().catch(() => null)) as { code?: string } | null;
  const code = body?.code?.trim().toUpperCase();
  return json(
    { captured: Boolean(code) },
    code
      ? { headers: { "set-cookie": `ha_ref=${encodeURIComponent(code)}; Path=/; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}` } }
      : undefined,
  );
}

async function handleAnnouncement(request: Request, env: WorkerEnv) {
  const rows = await supabaseJson<Array<{ message: string; active: boolean; audience?: string }>>(
    env,
    "/rest/v1/site_announcements?select=message,active,audience&id=eq.1&limit=1",
  ).catch(() => []);
  const announcement = rows[0];
  if (!announcement?.active || !announcement.message) {
    return json({ message: "", audience: "site" });
  }
  const audience = announcement.audience === "employees" ? "employees" : "site";
  // Employees-only announcements are withheld from the public unless the viewer has office access.
  if (audience === "employees") {
    const user = await getCurrentUser(request, env);
    const tabs = user.email ? await allowedTabsForUser(env, user.email, user.role) : [];
    if (tabs.length === 0) return json({ message: "", audience });
  }
  return json({ message: announcement.message, audience });
}

async function handleOfficeData(request: Request, env: WorkerEnv) {
  if (request.method !== "GET") return json({ message: "Method not allowed" }, { status: 405 });
  const access = await requireOfficeAccess(request, env);
  if (!access.ok) return access.response;

  const [
    productsRows,
    orders,
    marketingLinks,
    users,
    tabAccess,
    announcement,
    auditRows,
    nightbloomPdfs,
    bookOfRoots,
    bannedIps,
    auditDocuments,
    pageViews,
    guildApplications,
  ] = await Promise.all([
    supabaseJson(
      env,
      "/rest/v1/products?select=slug,name,type,category,price_cents,short,description,image_url,cj_product_id,cj_variant_id,status,uses,ingredients,badge,format&order=name.asc",
    ).catch(() => []),
    supabaseJson(env, "/rest/v1/orders?select=*,order_items(*)&order=created_at.desc&limit=100").catch(() => []),
    supabaseJson(env, "/rest/v1/marketing_links?select=*&order=created_at.desc").catch(() => []),
    supabaseJson(env, "/rest/v1/profiles?select=id,email,full_name,role,rupees,active,blocked,last_ip,created_at&order=created_at.desc").catch(() => []),
    supabaseJson(env, "/rest/v1/office_tab_access?select=*").catch(() => []),
    supabaseJson(env, "/rest/v1/site_announcements?select=message,active,audience&id=eq.1&limit=1").catch(() => []),
    supabaseJson(env, "/rest/v1/audit_log?select=*&order=created_at.desc&limit=100").catch(() => []),
    supabaseJson(env, "/rest/v1/nightbloom_pdfs?select=*&order=sort_order.asc,created_at.desc").catch(() => []),
    supabaseJson(
      env,
      "/rest/v1/book_of_roots?select=id,name,image_url,traditions,purposes,ingredient_type,description,how_to_use,product_id,products:product_id(slug)&order=created_at.desc",
    ).catch(() => []),
    supabaseJson(env, "/rest/v1/banned_ips?select=*&order=created_at.desc").catch(() => []),
    supabaseJson(env, "/rest/v1/audit_documents?select=*&order=created_at.desc").catch(() => []),
    supabaseJson(env, "/rest/v1/page_views?select=path,source,referrer,user_email,created_at&order=created_at.desc&limit=1000").catch(() => []),
    supabaseJson(env, "/rest/v1/guild_applications?select=*&order=created_at.desc&limit=200").catch(() => []),
  ]);

  return json({
    me: { email: access.user.email, role: access.user.role, isPresident: access.user.isPresident },
    allowedTabs: access.tabs,
    products: productsRows,
    orders,
    marketingLinks,
    users,
    tabAccess,
    announcement: Array.isArray(announcement)
      ? announcement[0] ?? { message: "", active: false, audience: "site" }
      : { message: "", active: false, audience: "site" },
    auditLog: auditRows,
    nightbloomPdfs,
    bookOfRoots,
    bannedIps,
    auditDocuments,
    analytics: buildAnalytics(Array.isArray(pageViews) ? pageViews : []),
    guildApplications,
  });
}

function buildAnalytics(rows: Array<{ path?: string; source?: string | null; referrer?: string | null; user_email?: string | null; created_at?: string }>) {
  const now = Date.now();
  const last24h = rows.filter((row) => row.created_at && now - new Date(row.created_at).getTime() <= 86_400_000);
  const last7d = rows.filter((row) => row.created_at && now - new Date(row.created_at).getTime() <= 7 * 86_400_000);
  const tally = (items: string[]) => {
    const map = new Map<string, number>();
    items.forEach((item) => map.set(item, (map.get(item) ?? 0) + 1));
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([label, count]) => ({ label, count }));
  };
  const byDay = new Map<string, number>();
  last7d.forEach((row) => {
    const key = new Date(row.created_at as string).toISOString().slice(0, 10);
    byDay.set(key, (byDay.get(key) ?? 0) + 1);
  });
  return {
    totalViews: rows.length,
    views24h: last24h.length,
    views7d: last7d.length,
    uniqueVisitors7d: new Set(last7d.map((row) => row.user_email || "anon")).size,
    topPages: tally(last7d.map((row) => row.path || "/")),
    topSources: tally(last7d.map((row) => row.source || row.referrer || "direct")),
    daily: [...byDay.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([date, views]) => ({ date, views })),
  };
}

async function handleOfficeProduct(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "products");
  if (!access.ok) return access.response;
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body?.slug) return json({ message: "Product slug is required." }, { status: 400 });
  const priceCents = "price" in body ? centsFromDollars(body.price) : undefined;
  const payload: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };
  if (typeof body.name === "string") payload.name = body.name.trim();
  if (typeof body.short === "string") payload.short = body.short.trim();
  if (typeof body.description === "string") payload.description = body.description.trim();
  if (typeof body.category === "string") payload.category = body.category.trim();
  if (typeof body.type === "string") payload.type = body.type.trim();
  if (typeof body.status === "string") payload.status = body.status.trim();
  if (priceCents !== undefined) payload.price_cents = priceCents;
  if ("image_url" in body) payload.image_url = nullableString(body.image_url);
  if ("badge" in body) payload.badge = nullableString(body.badge);
  if ("format" in body) payload.format = nullableString(body.format);
  if ("uses" in body) payload.uses = listFromInput(body.uses);
  if ("ingredients" in body) payload.ingredients = listFromInput(body.ingredients);
  if ("cj_product_id" in body) payload.cj_product_id = nullableString(body.cj_product_id);
  if ("cj_variant_id" in body) payload.cj_variant_id = nullableString(body.cj_variant_id);

  await supabaseJson(env, `/rest/v1/products?slug=eq.${eq(body.slug)}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
  await audit(env, access.user.email, "product.cj_update", { slug: body.slug });
  return json({ message: "Product saved." });
}

function makeLinkCode(name: string) {
  const base = name.toUpperCase().replace(/[^A-Z0-9]+/g, "").slice(0, 10) || "MARKET";
  return `${base}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

async function handleOfficeMarketing(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "marketing");
  if (!access.ok) return access.response;
  const body = (await request.json().catch(() => null)) as { employee_name?: string; employee_email?: string } | null;
  if (!body?.employee_name?.trim()) return json({ message: "Employee name is required." }, { status: 400 });
  const employeeName = body.employee_name.trim();
  const employeeEmail = body.employee_email?.trim().toLowerCase();

  // Ensure the employee exists in the users list so names + emails surface there.
  let employee = employeeEmail ? await getProfileByEmail(env, employeeEmail).catch(() => undefined) : undefined;
  if (employeeEmail && isEmail(employeeEmail) && !employee) {
    const id = crypto.randomUUID();
    const created = await supabaseJson<Profile[]>(env, "/rest/v1/profiles?on_conflict=email", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=representation",
      body: JSON.stringify({
        id,
        email: employeeEmail,
        full_name: employeeName,
        role: "marketing",
        referral_code: referralCodeFromId(id),
      }),
    }).catch(() => []);
    employee = created[0] ?? (await getProfileByEmail(env, employeeEmail).catch(() => undefined));
  } else if (employee && employee.role === "user") {
    await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(employee.id)}`, {
      method: "PATCH",
      body: JSON.stringify({ role: "marketing", full_name: employee.full_name || employeeName, updated_at: new Date().toISOString() }),
    }).catch(() => undefined);
  }

  const linkCode = makeLinkCode(employeeName);
  await supabaseJson(env, "/rest/v1/marketing_links", {
    method: "POST",
    body: JSON.stringify({
      employee_id: employee?.id ?? null,
      employee_name: employeeName,
      link_code: linkCode,
    }),
  });
  await audit(env, access.user.email, "marketing_link.create", { employee_name: employeeName, employee_email: employeeEmail ?? null, link_code: linkCode });
  return json({ message: "Marketing link created.", linkCode });
}

async function handleOfficeUser(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "users");
  if (!access.ok) return access.response;
  const body = (await request.json().catch(() => null)) as { id?: string; role?: string; active?: boolean; blocked?: boolean } | null;
  if (!body?.id) return json({ message: "User id is required." }, { status: 400 });
  const payload: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (body.role && ["user", "marketing", "it_coordinator", "admin", "president"].includes(body.role)) payload.role = body.role;
  if (typeof body.active === "boolean") payload.active = body.active;
  if (typeof body.blocked === "boolean") {
    payload.blocked = body.blocked;
    // Blocking a user also deactivates their session access.
    if (body.blocked) payload.active = false;
  }
  await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(body.id)}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
  await audit(env, access.user.email, "user.update", { id: body.id, ...payload });
  return json({ message: "User updated." });
}

async function handleOfficeBanIp(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "users");
  if (!access.ok) return access.response;
  const body = (await request.json().catch(() => null)) as { ip_address?: string; reason?: string; action?: "ban" | "unban" } | null;
  const ip = body?.ip_address?.trim();
  if (!ip) return json({ message: "IP address is required." }, { status: 400 });
  if (body?.action === "unban") {
    await supabaseJson(env, `/rest/v1/banned_ips?ip_address=eq.${eq(ip)}`, { method: "DELETE" });
    await audit(env, access.user.email, "ip.unban", { ip_address: ip });
    return json({ message: "IP address unbanned." });
  }
  await supabaseJson(env, "/rest/v1/banned_ips?on_conflict=ip_address", {
    method: "POST",
    prefer: "resolution=merge-duplicates",
    body: JSON.stringify({ ip_address: ip, reason: nullableString(body?.reason), created_by: access.user.email }),
  });
  await audit(env, access.user.email, "ip.ban", { ip_address: ip, reason: body?.reason ?? null });
  return json({ message: "IP address banned." });
}

async function handleOfficeAuditDoc(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "audit");
  if (!access.ok) return access.response;
  if (request.method === "DELETE") {
    const id = new URL(request.url).searchParams.get("id");
    if (!id || !/^\d+$/.test(id)) return json({ message: "Invalid document id." }, { status: 400 });
    await supabaseJson(env, `/rest/v1/audit_documents?id=eq.${id}`, { method: "DELETE" });
    await audit(env, access.user.email, "audit_document.delete", { id });
    return json({ message: "Audit document removed." });
  }
  const body = (await request.json().catch(() => null)) as { title?: string; description?: string; file_url?: string } | null;
  if (!body?.title?.trim() || !body.file_url?.trim()) {
    return json({ message: "Title and file URL are required." }, { status: 400 });
  }
  await supabaseJson(env, "/rest/v1/audit_documents", {
    method: "POST",
    body: JSON.stringify({
      title: body.title.trim(),
      description: nullableString(body.description),
      file_url: body.file_url.trim(),
      uploaded_by: access.user.email,
    }),
  });
  await audit(env, access.user.email, "audit_document.upload", { title: body.title.trim() });
  return json({ message: "Audit document uploaded." });
}

async function handleAnalyticsTrack(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") return json({ message: "Method not allowed" }, { status: 405 });
  const ip = getClientIp(request);
  if (ip) {
    const banned = await supabaseJson<Array<{ id: number }>>(
      env,
      `/rest/v1/banned_ips?select=id&ip_address=eq.${eq(ip)}&limit=1`,
    ).catch(() => []);
    if (banned.length) return json({ banned: true }, { status: 403 });
  }
  const body = (await request.json().catch(() => null)) as { path?: string; referrer?: string; source?: string } | null;
  const path = typeof body?.path === "string" ? body.path.slice(0, 300) : "/";
  const user = await getCurrentUser(request, env);
  await supabaseJson(env, "/rest/v1/page_views", {
    method: "POST",
    body: JSON.stringify({
      path,
      referrer: nullableString(body?.referrer),
      source: nullableString(body?.source),
      ip_address: ip,
      user_email: user.email ?? null,
      user_agent: request.headers.get("user-agent")?.slice(0, 400) ?? null,
    }),
  }).catch(() => undefined);
  // Record the visitor's most recent IP on their profile for moderation.
  if (user.profile?.id && ip) {
    await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(user.profile.id)}`, {
      method: "PATCH",
      body: JSON.stringify({ last_ip: ip }),
    }).catch(() => undefined);
  }
  return json({ ok: true });
}

function integerFromInput(value: unknown) {
  const number = typeof value === "number" ? value : Number(String(value ?? "").trim());
  if (!Number.isFinite(number)) return undefined;
  return Math.trunc(number);
}

async function logRupeeAdjustment(env: WorkerEnv, actorId: string, targetId: string, amount: number) {
  await supabaseJson(env, "/rest/v1/referral_events", {
    method: "POST",
    body: JSON.stringify({
      referrer_id: actorId,
      referred_id: targetId,
      event_type: "admin_adjustment",
      rupees_awarded: amount,
    }),
  });
}

async function handleOfficeRupees(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "users");
  if (!access.ok) return access.response;
  if (!access.user.isPresident || !access.user.profile?.id) {
    return json({ message: "President access is required for rupee controls." }, { status: 403 });
  }
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }

  const body = (await request.json().catch(() => null)) as {
    id?: string;
    action?: "add" | "subtract" | "set" | "all";
    amount?: unknown;
  } | null;
  const amount = integerFromInput(body?.amount);
  if (
    !body?.action ||
    !["add", "subtract", "set", "all"].includes(body.action) ||
    amount === undefined ||
    amount < 0
  ) {
    return json({ message: "Enter a non-negative rupee amount." }, { status: 400 });
  }

  const now = new Date().toISOString();
  const actorId = access.user.profile.id;

  if (body.action === "all") {
    if (amount === 0) return json({ message: "Enter an amount greater than zero." }, { status: 400 });
    const users = await supabaseJson<Array<{ id: string; rupees?: number | null }>>(
      env,
      "/rest/v1/profiles?select=id,rupees",
    );
    await Promise.all(
      users.map(async (user) => {
        const next = Math.max(0, (user.rupees ?? 0) + amount);
        await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(user.id)}`, {
          method: "PATCH",
          body: JSON.stringify({ rupees: next, updated_at: now }),
        });
        await logRupeeAdjustment(env, actorId, user.id, amount);
      }),
    );
    await audit(env, access.user.email, "rupees.award_all", { amount, count: users.length });
    return json({ message: `Gave ${amount} rupees to ${users.length} users.` });
  }

  if (!body.id) return json({ message: "User id is required." }, { status: 400 });
  const rows = await supabaseJson<Array<{ id: string; rupees?: number | null }>>(
    env,
    `/rest/v1/profiles?select=id,rupees&id=eq.${eq(body.id)}&limit=1`,
  );
  const user = rows[0];
  if (!user) return json({ message: "User not found." }, { status: 404 });

  const current = user.rupees ?? 0;
  const next =
    body.action === "set"
      ? amount
      : body.action === "subtract"
        ? Math.max(0, current - amount)
        : current + amount;
  const delta = next - current;

  await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(user.id)}`, {
    method: "PATCH",
    body: JSON.stringify({ rupees: next, updated_at: now }),
  });
  if (delta !== 0) await logRupeeAdjustment(env, actorId, user.id, delta);
  await audit(env, access.user.email, "rupees.adjust", {
    id: user.id,
    action: body.action,
    amount,
    previous: current,
    next,
    delta,
  });
  return json({ message: `Rupees updated to ${next}.`, rupees: next });
}

async function handleOfficeRupeeHistory(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "users");
  if (!access.ok) return access.response;
  if (!access.user.isPresident) {
    return json({ message: "President access is required for rupee history." }, { status: 403 });
  }
  if (request.method !== "GET") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "GET" } });
  }
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) return json({ message: "User id is required." }, { status: 400 });

  const events = await supabaseJson(
    env,
    `/rest/v1/referral_events?select=id,event_type,rupees_awarded,created_at,referrer:referrer_id(email,full_name),referred:referred_id(email,full_name)&or=(referrer_id.eq.${eq(id)},referred_id.eq.${eq(id)})&order=created_at.desc`,
  );
  return json({ events });
}

async function handleOfficeAccess(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "access");
  if (!access.ok) return access.response;
  const body = (await request.json().catch(() => null)) as { user_email?: string; tab_id?: OfficeTab; action?: "grant" | "revoke" } | null;
  if (!body?.user_email || !body.tab_id) return json({ message: "Email and tab are required." }, { status: 400 });
  if (body.action === "revoke") {
    await supabaseJson(env, `/rest/v1/office_tab_access?user_email=eq.${eq(body.user_email)}&tab_id=eq.${eq(body.tab_id)}`, { method: "DELETE" });
  } else {
    await supabaseJson(env, "/rest/v1/office_tab_access?on_conflict=user_email,tab_id", {
      method: "POST",
      prefer: "resolution=merge-duplicates",
      body: JSON.stringify({ user_email: body.user_email.trim().toLowerCase(), tab_id: body.tab_id, granted_by: access.user.email }),
    });
  }
  await audit(env, access.user.email, `access.${body.action === "revoke" ? "revoke" : "grant"}`, body);
  return json({ message: "Access updated." });
}

async function handleOfficeAnnouncementSave(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "announcements");
  if (!access.ok) return access.response;
  const body = (await request.json().catch(() => null)) as { message?: string; active?: boolean; audience?: string } | null;
  const audience = body?.audience === "employees" ? "employees" : "site";
  await supabaseJson(env, "/rest/v1/site_announcements?id=eq.1", {
    method: "PATCH",
    body: JSON.stringify({
      message: body?.message ?? "",
      active: Boolean(body?.active),
      audience,
      updated_by: access.user.email,
      updated_at: new Date().toISOString(),
    }),
  });
  await audit(env, access.user.email, "announcement.update", body ?? {});
  return json({ message: "Announcement saved." });
}

async function handleOfficeNightbloom(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "nightbloom");
  if (!access.ok) return access.response;
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body?.title || !body.pdf_url) return json({ message: "Title and PDF URL are required." }, { status: 400 });
  const id = typeof body.id === "number" ? body.id : undefined;
  const payload = {
    title: String(body.title).trim(),
    blurb: String(body.blurb ?? "").trim(),
    pdf_url: String(body.pdf_url).trim(),
    cover_image_url: nullableString(body.cover_image_url),
    price_cents: centsFromDollars(body.price ?? 0),
    status: typeof body.status === "string" ? body.status : "active",
    sort_order: Number(body.sort_order ?? 0) || 0,
    updated_at: new Date().toISOString(),
  };
  await supabaseJson(env, id ? `/rest/v1/nightbloom_pdfs?id=eq.${id}` : "/rest/v1/nightbloom_pdfs", {
    method: id ? "PATCH" : "POST",
    body: JSON.stringify(payload),
  });
  await audit(env, access.user.email, id ? "nightbloom.update" : "nightbloom.create", { id, title: payload.title });
  return json({ message: "Night Bloom PDF saved." });
}

async function handleOfficeNightbloomDelete(request: Request, env: WorkerEnv, id: string) {
  const access = await requireOfficeAccess(request, env, "nightbloom");
  if (!access.ok) return access.response;
  if (!/^\d+$/.test(id)) return json({ message: "Invalid PDF id." }, { status: 400 });
  await supabaseJson(env, `/rest/v1/nightbloom_pdfs?id=eq.${id}`, { method: "DELETE" });
  await audit(env, access.user.email, "nightbloom.delete", { id });
  return json({ message: "Night Bloom PDF deleted." });
}

async function handleOfficeGuild(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "guild");
  if (!access.ok) return access.response;
  if (request.method === "DELETE") {
    const id = new URL(request.url).searchParams.get("id");
    if (!id || !/^\d+$/.test(id)) return json({ message: "Invalid application id." }, { status: 400 });
    await supabaseJson(env, `/rest/v1/guild_applications?id=eq.${id}`, { method: "DELETE" });
    await audit(env, access.user.email, "guild.delete", { id });
    return json({ message: "Application removed." });
  }
  const body = (await request.json().catch(() => null)) as { id?: number; status?: string } | null;
  if (!body?.id) return json({ message: "Application id is required." }, { status: 400 });
  const status = ["new", "reviewing", "contacted", "archived"].includes(body.status ?? "") ? body.status : "new";
  await supabaseJson(env, `/rest/v1/guild_applications?id=eq.${body.id}`, {
    method: "PATCH",
    body: JSON.stringify({ status, updated_at: new Date().toISOString() }),
  });
  await audit(env, access.user.email, "guild.update", { id: body.id, status });
  return json({ message: "Application updated." });
}

function parseCommand(input: string) {
  const [command, ...rest] = input.trim().split(/\s+/);
  return { command: command?.toLowerCase(), rest: rest.join(" ") };
}

function parseKeyValueArgs(input: string) {
  const args: Record<string, string> = {};
  const pattern = /(\w+)=("[^"]*"|'[^']*'|[^\s]+)/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(input))) {
    args[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
  return args;
}

async function handleOfficeCommand(request: Request, env: WorkerEnv) {
  const access = await requireOfficeAccess(request, env, "command");
  if (!access.ok) return access.response;
  if (!access.user.isPresident) {
    return json({ message: "President access is required for the command window." }, { status: 403 });
  }
  const body = (await request.json().catch(() => null)) as { command?: string } | null;
  const raw = body?.command?.trim() ?? "";
  if (!raw) return json({ message: "Type a command first." }, { status: 400 });
  const { command, rest } = parseCommand(raw);
  const args = parseKeyValueArgs(rest);

  if (command === "help") {
    return json({
      message:
        "Commands: announcement set message=\"...\" active=true | announcement clear | product image slug=... url=... | product status slug=... status=active|draft|archived | nightbloom add title=\"...\" url=https://... price=19",
    });
  }

  if (command === "announcement" && rest.startsWith("clear")) {
    await supabaseJson(env, "/rest/v1/site_announcements?id=eq.1", {
      method: "PATCH",
      body: JSON.stringify({ message: "", active: false, updated_by: access.user.email, updated_at: new Date().toISOString() }),
    });
    await audit(env, access.user.email, "command.announcement_clear", {});
    return json({ message: "Announcement cleared." });
  }

  if (command === "announcement" && rest.startsWith("set")) {
    await supabaseJson(env, "/rest/v1/site_announcements?id=eq.1", {
      method: "PATCH",
      body: JSON.stringify({
        message: args.message ?? "",
        active: args.active !== "false",
        updated_by: access.user.email,
        updated_at: new Date().toISOString(),
      }),
    });
    await audit(env, access.user.email, "command.announcement_set", args);
    return json({ message: "Announcement updated." });
  }

  if (command === "product" && rest.startsWith("image") && args.slug && args.url) {
    await supabaseJson(env, `/rest/v1/products?slug=eq.${eq(args.slug)}`, {
      method: "PATCH",
      body: JSON.stringify({ image_url: args.url, updated_at: new Date().toISOString() }),
    });
    await audit(env, access.user.email, "command.product_image", args);
    return json({ message: `Product image updated for ${args.slug}.` });
  }

  if (command === "product" && rest.startsWith("status") && args.slug && args.status) {
    await supabaseJson(env, `/rest/v1/products?slug=eq.${eq(args.slug)}`, {
      method: "PATCH",
      body: JSON.stringify({ status: args.status, updated_at: new Date().toISOString() }),
    });
    await audit(env, access.user.email, "command.product_status", args);
    return json({ message: `Product status updated for ${args.slug}.` });
  }

  if (command === "nightbloom" && rest.startsWith("add") && args.title && args.url) {
    await supabaseJson(env, "/rest/v1/nightbloom_pdfs", {
      method: "POST",
      body: JSON.stringify({
        title: args.title,
        blurb: args.blurb ?? "",
        pdf_url: args.url,
        cover_image_url: args.cover ?? null,
        price_cents: centsFromDollars(args.price ?? 0),
        status: "active",
      }),
    });
    await audit(env, access.user.email, "command.nightbloom_add", args);
    return json({ message: `Night Bloom PDF added: ${args.title}.` });
  }

  await audit(env, access.user.email, "command.rejected", { raw });
  return json({ message: "Command not recognized. Type help for the safe command list." }, { status: 400 });
}

async function handleAccountData(request: Request, env: WorkerEnv) {
  const { email, profile } = await getCurrentUser(request, env);
  if (!email || !profile) return json({ message: "Sign in required." }, { status: 401 });
  const referrals = await supabaseJson(
    env,
    `/rest/v1/referral_events?select=event_type,rupees_awarded,created_at,referred:referred_id(email,full_name)&referrer_id=eq.${eq(profile.id)}&order=created_at.desc`,
  ).catch(() => []);
  return json({ profile, referralLink: `https://hyruleherb.xyz/join?ref=${profile.referral_code}`, referrals });
}

function safeRedirectPath(value: string | null | undefined, origin: string) {
  if (!value) return "/";

  try {
    const target = new URL(value, origin);
    if (target.origin !== origin) return "/";
    if (target.pathname.startsWith("/api/auth/")) return "/";
    return `${target.pathname}${target.search}${target.hash}`;
  } catch {
    return "/";
  }
}

function authRedirect(origin: string, status: string, redirectTo = "/signin") {
  const target = new URL(redirectTo, origin);
  target.searchParams.set("auth", status);
  return target;
}

function readOauthStateCookie(request: Request) {
  const storedState = readCookie(request, "ha_oauth_state");
  if (!storedState) return undefined;

  try {
    const parsed = JSON.parse(decodeBase64Url(storedState)) as {
      nonce?: unknown;
      redirectTo?: unknown;
    };
    if (typeof parsed.nonce !== "string") return undefined;
    return {
      nonce: parsed.nonce,
      redirectTo: typeof parsed.redirectTo === "string" ? parsed.redirectTo : "/",
    };
  } catch {
    return { nonce: storedState, redirectTo: "/" };
  }
}

function parseOracleHerb(text: string) {
  const herbMatch = text.match(/^\s*HERB:\s*(.+)$/im);
  const herb = herbMatch?.[1]?.trim() || null;
  const reading = text
    .replace(/^\s*HERB:\s*.+$/im, "")
    .trim()
    .replace(/\n{3,}/g, "\n\n");
  return { reading, herb };
}

async function handleOracle(request: Request, env: WorkerEnv) {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "POST" } });
  }

  if (!env.ANTHROPIC_API_KEY) {
    return json({ message: "The oracle is not configured yet." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const question = typeof body?.question === "string" ? body.question.trim().slice(0, 500) : "";
  const cards = Array.isArray(body?.cards) ? body.cards : [];
  const cardNames = cards
    .map((card) =>
      card && typeof card === "object" && "name" in card && typeof card.name === "string"
        ? card.name.trim()
        : "",
    )
    .filter(Boolean)
    .slice(0, 3);

  if (cardNames.length !== 3) {
    return json({ message: "Draw exactly three cards before asking the oracle." }, { status: 400 });
  }

  const prompt = [
    question ? `Question: ${question}` : "Question: The seeker did not speak a question aloud.",
    `The Past: ${cardNames[0]}`,
    `The Present: ${cardNames[1]}`,
    `The Path: ${cardNames[2]}`,
  ].join("\n");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 520,
      temperature: 0.8,
      system:
        "You are Madame Writz, the mystical oracle reader of Hyrule Herb Apothecary. Respond in a warm, wise, nature-based tone. Weave all three tarot cards into one flowing 200 to 300 word narrative. Do not provide medical, legal, or financial advice. End with a final separate line formatted exactly as HERB: [name] — [reason].",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = (await response.json().catch(() => null)) as {
    content?: Array<{ type?: string; text?: string }>;
    error?: { message?: string };
  } | null;

  if (!response.ok) {
    console.error(
      JSON.stringify({
        message: "Oracle Anthropic request failed",
        status: response.status,
        detail: data?.error?.message,
      }),
    );
    return json({ message: "Madame Writz could not complete the reading." }, { status: 502 });
  }

  const text =
    data?.content
      ?.map((part) => (part.type === "text" && typeof part.text === "string" ? part.text : ""))
      .join("")
      .trim() || "";

  if (!text) {
    return json({ message: "Madame Writz returned no reading." }, { status: 502 });
  }

  return json(parseOracleHerb(text));
}

function handleGoogleAuth(request: Request, env: WorkerEnv) {
  const url = new URL(request.url);
  const clientId = env.AUTH_GOOGLE_ID;
  const redirectUri = env.AUTH_GOOGLE_REDIRECT_URI || `${url.origin}/api/auth/google/callback`;
  const redirectTo = safeRedirectPath(
    url.searchParams.get("redirectTo") || request.headers.get("referer"),
    url.origin,
  );

  if (!clientId) {
    console.error(
      JSON.stringify({
        message: "Google OAuth unavailable: AUTH_GOOGLE_ID binding is missing",
        redirectUri,
      }),
    );
    return Response.redirect(authRedirect(url.origin, "google-not-configured", "/signin"), 302);
  }

  const google = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  google.searchParams.set("client_id", clientId);
  google.searchParams.set("redirect_uri", redirectUri);
  google.searchParams.set("response_type", "code");
  google.searchParams.set("scope", env.AUTH_GOOGLE_SCOPE || "openid email profile");
  google.searchParams.set("access_type", "offline");
  google.searchParams.set("prompt", "select_account");

  const nonce = crypto.randomUUID();
  google.searchParams.set("state", nonce);

  return new Response(null, {
    status: 302,
    headers: {
      location: google.toString(),
      "set-cookie": createCookie(
        "ha_oauth_state",
        encodeBase64Url(JSON.stringify({ nonce, redirectTo })),
        600,
      ),
    },
  });
}

async function handleGoogleCallback(request: Request, env: WorkerEnv) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = readOauthStateCookie(request);
  const redirectTo = safeRedirectPath(storedState?.redirectTo, url.origin);
  const fallbackTarget = "/signin";
  const clientId = env.AUTH_GOOGLE_ID;
  const clientSecret = env.AUTH_GOOGLE_SECRET;
  const redirectUri = env.AUTH_GOOGLE_REDIRECT_URI || `${url.origin}/api/auth/google/callback`;

  if (!code) {
    console.error(JSON.stringify({ message: "Google OAuth callback missing code" }));
    return Response.redirect(
      authRedirect(url.origin, "google-cancelled", fallbackTarget).toString(),
      302,
    );
  }

  if (!state || !storedState?.nonce || state !== storedState.nonce) {
    console.error(
      JSON.stringify({
        message: "Google OAuth state mismatch",
        hasState: Boolean(state),
        hasStoredState: Boolean(storedState?.nonce),
      }),
    );
    return Response.redirect(
      authRedirect(url.origin, "google-state-mismatch", fallbackTarget).toString(),
      302,
    );
  }

  if (!clientId || !clientSecret) {
    console.error(
      JSON.stringify({
        message: "Google OAuth unavailable: client ID or secret binding is missing",
        hasClientId: Boolean(clientId),
        hasClientSecret: Boolean(clientSecret),
        redirectUri,
      }),
    );
    return Response.redirect(
      authRedirect(url.origin, "google-not-configured", fallbackTarget).toString(),
      302,
    );
  }

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
  });

  if (!tokenResponse.ok) {
    const detail = await tokenResponse.text().catch(() => "");
    console.error(
      JSON.stringify({
        message: "Google OAuth token exchange failed",
        status: tokenResponse.status,
        detail,
        redirectUri,
      }),
    );
    return Response.redirect(
      authRedirect(url.origin, "google-token-failed", fallbackTarget).toString(),
      302,
    );
  }

  const tokenData = (await tokenResponse.json()) as { access_token?: string };
  if (!tokenData.access_token) {
    console.error(JSON.stringify({ message: "Google OAuth token response missing access token" }));
    return Response.redirect(
      authRedirect(url.origin, "google-token-failed", fallbackTarget).toString(),
      302,
    );
  }

  const profileResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: { authorization: `Bearer ${tokenData.access_token}` },
  });

  if (!profileResponse.ok) {
    const detail = await profileResponse.text().catch(() => "");
    console.error(
      JSON.stringify({
        message: "Google OAuth profile request failed",
        status: profileResponse.status,
        detail,
      }),
    );
    return Response.redirect(
      authRedirect(url.origin, "google-profile-failed", fallbackTarget).toString(),
      302,
    );
  }

  const profile = (await profileResponse.json()) as {
    sub?: string;
    email?: string;
    name?: string;
    picture?: string;
  };

  if (!profile.sub || !profile.email) {
    console.error(
      JSON.stringify({
        message: "Google OAuth profile missing required identity fields",
        hasSub: Boolean(profile.sub),
        hasEmail: Boolean(profile.email),
      }),
    );
    return Response.redirect(
      authRedirect(url.origin, "google-profile-failed", fallbackTarget).toString(),
      302,
    );
  }

  await ensureProfile(
    env,
    {
      sub: profile.sub,
      email: profile.email,
      name: profile.name,
      picture: profile.picture,
    },
    readCookie(request, "ha_ref"),
  ).catch((error) => {
    console.error(
      JSON.stringify({ message: "Supabase profile upsert failed", detail: String(error) }),
    );
  });

  if (env.DB) {
    await env.DB.prepare(
      `insert into users (provider, provider_id, email, name, avatar_url, created_at, updated_at)
       values ('google', ?, ?, ?, ?, datetime('now'), datetime('now'))
       on conflict(provider, provider_id) do update set
         email = excluded.email,
         name = excluded.name,
         avatar_url = excluded.avatar_url,
         updated_at = datetime('now')`,
    )
      .bind(profile.sub, profile.email, profile.name ?? "", profile.picture ?? "")
      .run();
  }

  const headers = new Headers();
  headers.append("set-cookie", createCookie("ha_oauth_state", "", 0));
  headers.append("set-cookie", createCookie("ha_ref", "", 0));

  if (env.AUTH_SESSION_SECRET) {
    const session = await signSession(
      {
        provider: "google",
        sub: profile.sub,
        email: profile.email,
        name: profile.name ?? "",
        picture: profile.picture ?? "",
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 14,
      },
      env.AUTH_SESSION_SECRET,
    );
    headers.append("set-cookie", createCookie("ha_session", session, 60 * 60 * 24 * 14));
  } else {
    console.error(
      JSON.stringify({
        message:
          "Google OAuth completed but AUTH_SESSION_SECRET is missing; session cookie was not set",
      }),
    );
  }

  headers.set("location", authRedirect(url.origin, "google-signed-in", redirectTo).toString());
  return new Response(null, { status: 302, headers });
}

function handleSignout(request: Request) {
  if (!["GET", "POST"].includes(request.method)) {
    return json({ message: "Method not allowed" }, { status: 405, headers: { allow: "GET, POST" } });
  }
  const origin = new URL(request.url).origin;
  return new Response(null, {
    status: 302,
    headers: {
      location: `${origin}/signin?auth=signed-out`,
      "set-cookie": createCookie("ha_session", "", 0),
    },
  });
}

async function handleApi(request: Request, env: WorkerEnv) {
  const url = new URL(request.url);

  if (url.pathname === "/api/book-of-roots") return handleBookOfRootsList(request, env);
  if (url.pathname === "/api/book-of-roots/notify") return handleBookOfRootsNotify(request, env);
  if (url.pathname === "/api/admin/book-of-roots") return handleBookOfRootsUpsert(request, env);
  if (url.pathname.startsWith("/api/admin/book-of-roots/")) {
    return handleBookOfRootsDelete(
      request,
      env,
      url.pathname.slice("/api/admin/book-of-roots/".length),
    );
  }
  if (url.pathname === "/api/session") return handleSession(request, env);
  if (url.pathname === "/api/products") return handleProductsList(env);
  if (url.pathname === "/api/careers/apply") return handleGuildApply(request, env);
  if (url.pathname === "/api/office/guild") return handleOfficeGuild(request, env);
  if (url.pathname === "/api/nightbloom") return handleNightbloomList(request, env);
  if (url.pathname === "/api/nightbloom/checkout") return handleNightbloomCheckout(request, env);
  if (url.pathname === "/api/nightbloom/download") return handleNightbloomDownload(request, env);
  if (url.pathname === "/api/account") return handleAccountData(request, env);
  if (url.pathname === "/api/announcement") return handleAnnouncement(request, env);
  if (url.pathname === "/api/analytics/track") return handleAnalyticsTrack(request, env);
  if (url.pathname === "/api/referral/capture") return handleReferralCapture(request);
  if (url.pathname === "/api/marketing/click") return handleMarketingClick(request, env);
  if (url.pathname === "/api/newsletter") return handleNewsletter(request, env);
  if (url.pathname === "/api/checkout") return handleStripeCheckout(request, env);
  if (url.pathname === "/api/stripe/webhook") return handleStripeWebhook(request, env);
  if (url.pathname === "/api/office") return handleOfficeData(request, env);
  if (url.pathname === "/api/office/product") return handleOfficeProduct(request, env);
  if (url.pathname === "/api/office/marketing") return handleOfficeMarketing(request, env);
  if (url.pathname === "/api/office/user") return handleOfficeUser(request, env);
  if (url.pathname === "/api/office/ban-ip") return handleOfficeBanIp(request, env);
  if (url.pathname === "/api/office/audit-doc") return handleOfficeAuditDoc(request, env);
  if (url.pathname === "/api/office/rupees") return handleOfficeRupees(request, env);
  if (url.pathname === "/api/office/rupee-history") return handleOfficeRupeeHistory(request, env);
  if (url.pathname === "/api/office/access") return handleOfficeAccess(request, env);
  if (url.pathname === "/api/office/announcement") return handleOfficeAnnouncementSave(request, env);
  if (url.pathname === "/api/office/nightbloom") return handleOfficeNightbloom(request, env);
  if (url.pathname.startsWith("/api/office/nightbloom/")) {
    return handleOfficeNightbloomDelete(request, env, url.pathname.slice("/api/office/nightbloom/".length));
  }
  if (url.pathname === "/api/office/command") return handleOfficeCommand(request, env);
  if (url.pathname === "/api/oracle") return handleOracle(request, env);
  if (url.pathname === "/api/auth/google") return handleGoogleAuth(request, env);
  if (url.pathname === "/api/auth/google/callback") return handleGoogleCallback(request, env);
  if (url.pathname === "/api/auth/signout") return handleSignout(request);

  return undefined;
}

function getRuntimeEnv(request: Request, env: unknown) {
  return (
    env ??
    (request as CloudflareRuntimeRequest).runtime?.cloudflare?.env ??
    (globalThis as typeof globalThis & { __env__?: unknown }).__env__ ??
    {}
  );
}

function getRuntimeContext(request: Request, ctx: unknown) {
  return ctx ?? (request as CloudflareRuntimeRequest).runtime?.cloudflare?.context;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const runtimeEnv = getRuntimeEnv(request, env);
      const runtimeCtx = getRuntimeContext(request, ctx);
      const workerEnv = runtimeEnv as WorkerEnv;
      const apiResponse = await handleApi(request, workerEnv);
      if (apiResponse) return apiResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, runtimeEnv, runtimeCtx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
