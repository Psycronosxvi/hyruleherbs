import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  Ban,
  Bell,
  BookOpen,
  Briefcase,
  ChartColumn,
  Command,
  FileText,
  History,
  KeyRound,
  Link2,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShieldOff,
  ShoppingBag,
  UserCog,
  Users,
  X,
} from "lucide-react";

export const Route = createFileRoute("/office")({
  head: () => ({
    meta: [
      { title: "Office · Hyrule Apothecary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Office,
});

type ProductRow = {
  slug: string;
  name: string;
  type: string;
  category: string;
  price_cents: number;
  short: string;
  description: string;
  image_url?: string | null;
  cj_product_id?: string | null;
  cj_variant_id?: string | null;
  status: string;
  uses?: string[] | null;
  ingredients?: string[] | null;
  badge?: string | null;
  format?: string | null;
};

type OrderRow = {
  id: number;
  user_email?: string | null;
  total_cents: number;
  status: string;
  fulfillment_status?: string | null;
  cj_order_id?: string | null;
  created_at: string;
  order_items?: Array<{ product_slug: string; quantity: number; unit_price_cents: number }>;
};

type MarketingLink = {
  id: number;
  employee_name: string;
  link_code: string;
  clicks: number;
  conversions: number;
  revenue_generated: number;
};

type UserRow = {
  id: string;
  email: string;
  full_name?: string | null;
  role: string;
  rupees: number;
  active: boolean;
  blocked?: boolean;
  last_ip?: string | null;
  created_at: string;
};

type BannedIp = {
  id: number;
  ip_address: string;
  reason?: string | null;
  created_by?: string | null;
  created_at: string;
};

type AuditDocument = {
  id: number;
  title: string;
  description?: string | null;
  file_url: string;
  uploaded_by?: string | null;
  created_at: string;
};

type AnalyticsData = {
  totalViews: number;
  views24h: number;
  views7d: number;
  uniqueVisitors7d: number;
  topPages: Array<{ label: string; count: number }>;
  topSources: Array<{ label: string; count: number }>;
  daily: Array<{ date: string; views: number }>;
};

type RupeeEventRow = {
  id: number;
  event_type: string;
  rupees_awarded: number;
  created_at: string;
  referrer?: { email?: string | null; full_name?: string | null } | null;
  referred?: { email?: string | null; full_name?: string | null } | null;
};

type BookOfRootsAdminEntry = {
  id: number;
  name: string;
  image_url?: string | null;
  traditions: string[];
  purposes: string[];
  ingredient_type: "Herbs" | "Roots" | "Flowers" | "Oils" | "Resins" | "Bark";
  description: string;
  how_to_use: string;
  product_id: number | null;
  product_slug: string | null;
};

type OfficeData = {
  me: { email: string; role: string; isPresident: boolean };
  allowedTabs: string[];
  products: ProductRow[];
  orders: OrderRow[];
  marketingLinks: MarketingLink[];
  users: UserRow[];
  tabAccess: Array<{ id: number; user_email: string; tab_id: string }>;
  announcement: { message: string; active: boolean; audience?: string };
  auditLog: Array<{ id: number; user_email?: string; action_type: string; details: unknown; created_at: string }>;
  nightbloomPdfs: NightbloomPdf[];
  bookOfRoots: BookOfRootsAdminEntry[];
  bannedIps: BannedIp[];
  auditDocuments: AuditDocument[];
  analytics: AnalyticsData;
  guildApplications: GuildApplication[];
};

type GuildApplication = {
  id: number;
  full_name: string;
  email: string;
  job_id?: string | null;
  job_title?: string | null;
  portfolio_url?: string | null;
  message: string;
  status: string;
  created_at: string;
};

type NightbloomPdf = {
  id: number;
  title: string;
  blurb: string;
  pdf_url: string;
  cover_image_url?: string | null;
  price_cents: number;
  status: string;
  sort_order: number;
};

const tabDefs = [
  { id: "dashboard", label: "Dashboard", icon: ShieldCheck },
  { id: "products", label: "Products", icon: Package },
  { id: "orders", label: "Orders", icon: ShoppingBag },
  { id: "marketing", label: "Marketing", icon: Link2 },
  { id: "users", label: "Users", icon: Users },
  { id: "access", label: "Access", icon: KeyRound },
  { id: "announcements", label: "Announcements", icon: Bell },
  { id: "nightbloom", label: "Night Bloom", icon: BookOpen },
  { id: "command", label: "Command", icon: Command },
  { id: "audit", label: "Audit", icon: UserCog },
  { id: "revenue", label: "Revenue", icon: ChartColumn },
  { id: "book_of_roots", label: "Book of Roots", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: Activity },
  { id: "guild", label: "Guild", icon: Briefcase },
] as const;

const officeTabOptions = tabDefs.map((tab) => tab.id);

function Office() {
  const [data, setData] = useState<OfficeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const visibleTabs = tabDefs.filter((tab) => data?.allowedTabs.includes(tab.id));
  const [tab, setTab] = useState("dashboard");

  async function refresh() {
    setLoading(true);
    try {
      const response = await fetch("/api/office");
      const next = (await response.json()) as OfficeData & { message?: string };
      if (!response.ok) throw new Error(next.message || "Office access unavailable.");
      setData(next);
      setTab((current) => (next.allowedTabs.includes(current) ? current : next.allowedTabs[0] || "dashboard"));
      setMessage("");
    } catch (error) {
      setData(null);
      setMessage(error instanceof Error ? error.message : "Office access unavailable.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  if (loading) return <Gate title="Opening office" body="Loading your role and permissions." />;
  if (!data) {
    return (
      <Gate
        title="Office access required"
        body={message || "Sign in with an account that has office permissions."}
        action={<Link to="/signin" search={{ redirectTo: "/office" }} className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">Sign in</Link>}
      />
    );
  }

  return (
    <div className="office-console mx-auto max-w-7xl px-4 py-8">
      <header className="mb-6 rounded-lg border border-gold/40 bg-forest p-6 text-parchment shadow-scroll">
        <div className="text-xs uppercase tracking-[0.22em] text-gold">{data.me.role}</div>
        <h1 className="mt-2 font-display text-4xl text-gold">Office Console</h1>
        <p className="mt-2 text-sm text-parchment">Signed in as {data.me.email}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
        <nav className="parchment-card h-fit rounded-lg p-2">
          {visibleTabs.map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm ${
                tab === item.id ? "bg-gold text-forest" : "text-forest hover:bg-parchment-dark/40"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="space-y-6">
          {tab === "dashboard" && <Dashboard data={data} />}
          {tab === "products" && <Products products={data.products} refresh={refresh} setMessage={setMessage} />}
          {tab === "orders" && <Orders orders={data.orders} products={data.products} />}
          {tab === "marketing" && <Marketing data={data} refresh={refresh} setMessage={setMessage} />}
          {tab === "users" && <UsersTab users={data.users} bannedIps={data.bannedIps} refresh={refresh} setMessage={setMessage} />}
          {tab === "access" && <AccessTab access={data.tabAccess} refresh={refresh} setMessage={setMessage} />}
          {tab === "announcements" && <Announcements data={data} refresh={refresh} setMessage={setMessage} />}
          {tab === "nightbloom" && <NightbloomManager rows={data.nightbloomPdfs} refresh={refresh} setMessage={setMessage} />}
          {tab === "book_of_roots" && (
            <BookOfRootsAdmin entries={data.bookOfRoots} products={data.products} refresh={refresh} setMessage={setMessage} />
          )}
          {tab === "command" && <CommandWindow setMessage={setMessage} />}
          {tab === "audit" && (
            <Audit rows={data.auditLog} documents={data.auditDocuments} orders={data.orders} refresh={refresh} setMessage={setMessage} />
          )}
          {tab === "revenue" && <Revenue orders={data.orders} />}
          {tab === "analytics" && <Analytics analytics={data.analytics} />}
          {tab === "guild" && <Guild applications={data.guildApplications} refresh={refresh} setMessage={setMessage} />}
          {message && <p className="rounded-md border border-gold/40 bg-forest px-4 py-3 text-sm text-parchment">{message}</p>}
        </div>
      </div>
    </div>
  );
}

function Gate({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-lg place-items-center px-4 py-16">
      <div className="parchment-card rounded-lg p-8 text-center">
        <KeyRound className="mx-auto h-8 w-8 text-gold" />
        <h1 className="mt-4 font-display text-3xl text-forest">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{body}</p>
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  );
}

function Dashboard({ data }: { data: OfficeData }) {
  const revenue = data.orders.reduce((sum, order) => sum + order.total_cents, 0) / 100;
  const manual = data.orders.filter((order) => order.fulfillment_status !== "sent_to_cj").length;
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Metric label="Revenue" value={`$${revenue.toFixed(2)}`} />
      <Metric label="Orders" value={String(data.orders.length)} />
      <Metric label="Manual fulfillment" value={String(manual)} />
      <Metric label="Marketing links" value={String(data.marketingLinks.length)} />
    </div>
  );
}

function Products({ products, refresh, setMessage }: { products: ProductRow[]; refresh: () => Promise<void>; setMessage: (value: string) => void }) {
  const PAGE = 8;
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(q) ||
        product.slug.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q),
    );
  }, [products, query]);

  useEffect(() => {
    setVisible(PAGE);
  }, [query]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible((current) => Math.min(current + PAGE, filtered.length));
        }
      },
      { rootMargin: "320px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [filtered.length]);

  const shown = filtered.slice(0, visible);

  async function save(product: ProductRow, form: HTMLFormElement) {
    const formData = new FormData(form);
    const response = await fetch("/api/office/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        slug: product.slug,
        name: formData.get("name"),
        short: formData.get("short"),
        description: formData.get("description"),
        category: formData.get("category"),
        type: formData.get("type"),
        price: formData.get("price"),
        image_url: formData.get("image_url"),
        badge: formData.get("badge"),
        format: formData.get("format"),
        status: formData.get("status"),
        uses: formData.get("uses"),
        ingredients: formData.get("ingredients"),
        cj_product_id: formData.get("cj_product_id"),
        cj_variant_id: formData.get("cj_variant_id"),
      }),
    });
    const data = await response.json().catch(() => ({}));
    setMessage(data.message || (response.ok ? "Saved." : "Could not save product."));
    await refresh();
  }

  return (
    <Panel title="Products">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products by name, slug, or category"
          className="min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
        />
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Showing {Math.min(shown.length, filtered.length)} of {filtered.length}
        </span>
      </div>
      <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
        {shown.map((product) => (
          <form
            key={product.slug}
            onSubmit={(event) => {
              event.preventDefault();
              void save(product, event.currentTarget);
            }}
            className="rounded-md border border-gold/25 bg-parchment/70 p-4"
          >
            <div className="grid gap-4 lg:grid-cols-[160px_1fr]">
              <div>
                <div className="aspect-square overflow-hidden rounded-md border border-gold/30 bg-parchment-dark/40">
                  {product.image_url ? (
                    <img src={product.image_url} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full place-items-center px-3 text-center text-xs text-muted-foreground">
                      No custom image
                    </div>
                  )}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{product.slug}</div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Name
                  <input name="name" defaultValue={product.name} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Price
                  <input name="price" defaultValue={(product.price_cents / 100).toFixed(2)} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Category
                  <input name="category" defaultValue={product.category} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Type
                  <select name="type" defaultValue={product.type} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest">
                    {["ingredient", "blend", "kit", "book"].map((type) => <option key={type}>{type}</option>)}
                  </select>
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
                  Product image URL
                  <input name="image_url" defaultValue={product.image_url ?? ""} placeholder="https://..." className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
                  Short description
                  <input name="short" defaultValue={product.short} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
                  Full description
                  <textarea name="description" defaultValue={product.description} className="mt-1 h-24 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Uses
                  <textarea name="uses" defaultValue={(product.uses ?? []).join("\n")} className="mt-1 h-24 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Ingredients
                  <textarea name="ingredients" defaultValue={(product.ingredients ?? []).join("\n")} className="mt-1 h-24 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Badge
                  <input name="badge" defaultValue={product.badge ?? ""} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Format
                  <input name="format" defaultValue={product.format ?? ""} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  CJ Product ID
                  <input name="cj_product_id" defaultValue={product.cj_product_id ?? ""} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  CJ Variant ID
                  <input name="cj_variant_id" defaultValue={product.cj_variant_id ?? ""} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-widest text-forest">
                  Status
                  <select name="status" defaultValue={product.status} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest">
                    {["active", "draft", "archived"].map((status) => <option key={status}>{status}</option>)}
                  </select>
                </label>
                <div className="flex items-end justify-end">
                  <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">Save product</button>
                </div>
              </div>
            </div>
          </form>
        ))}
        {filtered.length === 0 && (
          <p className="rounded-md border border-gold/25 bg-parchment/70 p-4 text-sm text-muted-foreground">
            No products match your search.
          </p>
        )}
        {shown.length < filtered.length && (
          <div ref={sentinelRef} className="py-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Loading more products...
          </div>
        )}
      </div>
    </Panel>
  );
}

function Orders({ orders, products }: { orders: OrderRow[]; products: ProductRow[] }) {
  const cjReady = new Map(products.map((product) => [product.slug, Boolean(product.cj_product_id && product.cj_variant_id)]));
  return (
    <Panel title="Orders">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase tracking-widest text-muted-foreground">
            <tr><th className="py-2">Order</th><th>Customer</th><th>Total</th><th>Status</th><th>Fulfillment Status</th><th>Date</th></tr>
          </thead>
          <tbody className="divide-y divide-gold/20">
            {orders.map((order) => {
              const manual = order.order_items?.some((item) => !cjReady.get(item.product_slug));
              const fulfillment = manual ? "Manual" : order.cj_order_id ? order.cj_order_id : order.fulfillment_status === "sent_to_cj" ? "Sent to CJ" : "Manual";
              return (
                <tr key={order.id}>
                  <td className="py-3 font-medium text-forest">#{order.id}</td>
                  <td>{order.user_email || "Guest"}</td>
                  <td>${(order.total_cents / 100).toFixed(2)}</td>
                  <td>{order.status}</td>
                  <td><span className="rounded-full bg-forest px-2 py-0.5 text-xs text-parchment">{fulfillment}</span></td>
                  <td>{new Date(order.created_at).toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

const guildStatuses = ["new", "reviewing", "contacted", "archived"] as const;

function Guild({ applications, refresh, setMessage }: { applications: GuildApplication[]; refresh: () => Promise<void>; setMessage: (value: string) => void }) {
  const [filter, setFilter] = useState<string>("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: applications.length };
    for (const status of guildStatuses) map[status] = 0;
    for (const app of applications) map[app.status] = (map[app.status] ?? 0) + 1;
    return map;
  }, [applications]);

  const shown = useMemo(
    () => (filter === "all" ? applications : applications.filter((app) => app.status === filter)),
    [applications, filter],
  );

  async function updateStatus(id: number, status: string) {
    const response = await fetch("/api/office/guild", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || (response.ok ? "Application updated." : "Could not update application."));
    await refresh();
  }

  async function remove(id: number) {
    if (!confirm("Remove this application permanently?")) return;
    const response = await fetch(`/api/office/guild?id=${id}`, { method: "DELETE" });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || (response.ok ? "Application removed." : "Could not remove application."));
    await refresh();
  }

  return (
    <Panel title="Guild Applications">
      <div className="mb-4 flex flex-wrap gap-2">
        {(["all", ...guildStatuses] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
              filter === status ? "bg-gold text-forest" : "bg-parchment-dark/40 text-forest hover:bg-parchment-dark/60"
            }`}
          >
            {status} ({counts[status] ?? 0})
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {shown.map((app) => {
          const open = expanded === app.id;
          return (
            <div key={app.id} className="rounded-md border border-gold/25 bg-parchment/70 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <button onClick={() => setExpanded(open ? null : app.id)} className="text-left">
                  <div className="font-semibold text-forest">{app.full_name}</div>
                  <div className="text-xs text-muted-foreground">
                    {app.email}
                    {app.job_title ? ` · ${app.job_title}` : ""}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {new Date(app.created_at).toLocaleDateString()}
                  </div>
                </button>
                <div className="flex items-center gap-2">
                  <select
                    value={app.status}
                    onChange={(event) => void updateStatus(app.id, event.target.value)}
                    className="rounded-md border border-gold/40 bg-parchment px-2 py-1 text-xs text-forest"
                  >
                    {guildStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => void remove(app.id)}
                    className="rounded-md border border-gold/40 p-1.5 text-forest hover:bg-parchment-dark/40"
                    aria-label="Remove application"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              {open && (
                <div className="mt-3 space-y-2 border-t border-gold/20 pt-3 text-sm text-forest">
                  <p className="whitespace-pre-wrap">{app.message}</p>
                  {app.portfolio_url && (
                    <a
                      href={app.portfolio_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-forest underline"
                    >
                      <Link2 className="h-4 w-4" /> Portfolio
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {shown.length === 0 && (
          <p className="rounded-md border border-gold/25 bg-parchment/70 p-4 text-sm text-muted-foreground">
            No applications in this view.
          </p>
        )}
      </div>
    </Panel>
  );
}

function Marketing({ data, refresh, setMessage }: { data: OfficeData; refresh: () => Promise<void>; setMessage: (value: string) => void }) {
  async function create(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/office/marketing", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ employee_name: form.get("employee_name"), employee_email: form.get("employee_email") }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "Marketing link updated.");
    await refresh();
  }
  return (
    <Panel title="Marketing Analytics">
      {data.me.isPresident && (
        <form onSubmit={create} className="mb-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <input name="employee_name" required placeholder="Employee name" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
          <input name="employee_email" type="email" placeholder="Employee email (optional)" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
          <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">Generate</button>
        </form>
      )}
      <Table headers={["Employee", "Link", "Clicks", "Conversions", "Rate", "Revenue"]}>
        {data.marketingLinks.map((link) => (
          <tr key={link.id}>
            <td className="py-3 font-medium text-forest">{link.employee_name}</td>
            <td><code>https://hyruleherb.xyz?src={link.link_code}</code></td>
            <td>{link.clicks}</td>
            <td>{link.conversions}</td>
            <td>{link.clicks ? ((link.conversions / link.clicks) * 100).toFixed(1) : "0.0"}%</td>
            <td>${Number(link.revenue_generated || 0).toFixed(2)}</td>
          </tr>
        ))}
      </Table>
    </Panel>
  );
}

function UsersTab({ users, bannedIps, refresh, setMessage }: { users: UserRow[]; bannedIps: BannedIp[]; refresh: () => Promise<void>; setMessage: (value: string) => void }) {
  const [amounts, setAmounts] = useState<Record<string, string>>({});
  const [manualIp, setManualIp] = useState("");
  const [manualReason, setManualReason] = useState("");
  const bannedSet = useMemo(() => new Set(bannedIps.map((row) => row.ip_address)), [bannedIps]);

  async function banIp(ip: string, action: "ban" | "unban", reason?: string) {
    const response = await fetch("/api/office/ban-ip", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ip_address: ip, action, reason }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || (response.ok ? "IP updated." : "Could not update IP."));
    await refresh();
  }
  const [allAmount, setAllAmount] = useState("");
  const [historyUser, setHistoryUser] = useState<UserRow | null>(null);
  const [history, setHistory] = useState<RupeeEventRow[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  async function update(user: UserRow, payload: Record<string, unknown>) {
    const response = await fetch("/api/office/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: user.id, ...payload }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "User updated.");
    await refresh();
  }

  async function adjustRupees(user: UserRow, action: "add" | "subtract" | "set") {
    const amount = Number(amounts[user.id] || 0);
    const response = await fetch("/api/office/rupees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: user.id, action, amount }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || (response.ok ? "Rupees updated." : "Could not update rupees."));
    await refresh();
  }

  async function giveAll(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/office/rupees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action: "all", amount: Number(allAmount || 0) }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || (response.ok ? "Rupees awarded." : "Could not award rupees."));
    if (response.ok) setAllAmount("");
    await refresh();
  }

  async function openHistory(user: UserRow) {
    setHistoryUser(user);
    setHistory([]);
    setHistoryLoading(true);
    try {
      const response = await fetch(`/api/office/rupee-history?id=${encodeURIComponent(user.id)}`);
      const result = (await response.json().catch(() => ({}))) as { events?: RupeeEventRow[]; message?: string };
      if (!response.ok) throw new Error(result.message || "Could not load rupee history.");
      setHistory(Array.isArray(result.events) ? result.events : []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not load rupee history.");
    } finally {
      setHistoryLoading(false);
    }
  }

  return (
    <Panel title="User Management">
      <form onSubmit={giveAll} className="mb-4 flex flex-wrap items-end gap-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-forest">
          Give rupees to all
          <input
            type="number"
            min="1"
            step="1"
            required
            value={allAmount}
            onChange={(event) => setAllAmount(event.target.value)}
            className="mt-1 w-36 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
          />
        </label>
        <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">
          Give Rupees to All
        </button>
      </form>
      <Table headers={["User", "Role", "Rupees", "Status", "Last IP", "Actions"]}>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-3"><div className="font-medium text-forest">{user.full_name || user.email}</div><div className="text-xs text-muted-foreground">{user.email}</div></td>
            <td>
              <select value={user.role} onChange={(event) => void update(user, { role: event.target.value })} className="rounded-md border border-gold/40 bg-parchment px-2 py-1 text-sm text-forest">
                {["user", "marketing", "it_coordinator", "admin"].map((role) => <option key={role}>{role}</option>)}
              </select>
            </td>
            <td>
              <div className="flex min-w-[260px] flex-wrap items-center gap-2">
                <span className="min-w-12 font-semibold text-forest">{user.rupees}</span>
                <button type="button" onClick={() => void adjustRupees(user, "subtract")} aria-label={`Subtract rupees from ${user.email}`} className="grid h-8 w-8 place-items-center rounded-md border border-gold/40 text-forest">
                  <Minus className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => void adjustRupees(user, "add")} aria-label={`Add rupees to ${user.email}`} className="grid h-8 w-8 place-items-center rounded-md border border-gold/40 text-forest">
                  <Plus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={amounts[user.id] ?? ""}
                  onChange={(event) => setAmounts((current) => ({ ...current, [user.id]: event.target.value }))}
                  placeholder="Amount"
                  className="w-24 rounded-md border border-gold/40 bg-parchment px-2 py-1.5 text-sm text-forest"
                />
                <button type="button" onClick={() => void adjustRupees(user, "set")} className="rounded-md border border-gold/40 px-3 py-1.5 text-xs font-semibold text-forest">
                  Set
                </button>
                <button type="button" onClick={() => void openHistory(user)} className="inline-flex items-center gap-1 rounded-md border border-gold/40 px-3 py-1.5 text-xs font-semibold text-forest">
                  <History className="h-3.5 w-3.5" />
                  Rupee History
                </button>
              </div>
            </td>
            <td>
              {user.blocked ? (
                <span className="rounded-full bg-ember px-2 py-0.5 text-xs font-semibold text-parchment">Blocked</span>
              ) : (
                <span className={user.active ? "text-forest" : "text-muted-foreground"}>{user.active ? "Active" : "Inactive"}</span>
              )}
            </td>
            <td className="text-xs text-muted-foreground">
              {user.last_ip ? (
                <div className="flex items-center gap-2">
                  <code>{user.last_ip}</code>
                  {bannedSet.has(user.last_ip) ? (
                    <span className="text-[10px] uppercase tracking-widest text-ember">banned</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => void banIp(user.last_ip as string, "ban", `Banned via user ${user.email}`)}
                      className="inline-flex items-center gap-1 rounded-md border border-gold/40 px-2 py-1 text-[11px] font-semibold text-forest"
                    >
                      <Ban className="h-3 w-3" /> Ban IP
                    </button>
                  )}
                </div>
              ) : (
                "—"
              )}
            </td>
            <td>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => void update(user, { active: !user.active })} className="rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest">{user.active ? "Deactivate" : "Activate"}</button>
                <button
                  onClick={() => void update(user, { blocked: !user.blocked })}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold ${user.blocked ? "border border-gold/40 text-forest" : "bg-ember text-parchment"}`}
                >
                  {user.blocked ? <><ShieldOff className="h-3.5 w-3.5" /> Unblock</> : <><Ban className="h-3.5 w-3.5" /> Block / Kick</>}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </Table>

      <div className="mt-8 rounded-md border border-gold/25 bg-parchment/70 p-4">
        <h3 className="font-display text-xl text-forest">Banned IP Addresses</h3>
        <p className="mt-1 text-sm text-muted-foreground">Banned visitors are blocked from the site on their next page load.</p>
        <form
          className="mt-3 flex flex-wrap items-end gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            if (!manualIp.trim()) return;
            void banIp(manualIp.trim(), "ban", manualReason.trim() || undefined);
            setManualIp("");
            setManualReason("");
          }}
        >
          <input value={manualIp} onChange={(event) => setManualIp(event.target.value)} placeholder="123.45.67.89" className="w-44 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
          <input value={manualReason} onChange={(event) => setManualReason(event.target.value)} placeholder="Reason (optional)" className="min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
          <button className="inline-flex items-center gap-1 rounded-md bg-ember px-4 py-2 text-sm font-semibold text-parchment"><Ban className="h-4 w-4" /> Ban IP</button>
        </form>
        {bannedIps.length > 0 ? (
          <Table headers={["IP Address", "Reason", "Banned By", "Actions"]}>
            {bannedIps.map((row) => (
              <tr key={row.id}>
                <td className="py-3"><code className="text-forest">{row.ip_address}</code></td>
                <td className="text-sm text-muted-foreground">{row.reason || "—"}</td>
                <td className="text-xs text-muted-foreground">{row.created_by || "system"}</td>
                <td><button onClick={() => void banIp(row.ip_address, "unban")} className="rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest">Unban</button></td>
              </tr>
            ))}
          </Table>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">No IP addresses are banned.</p>
        )}
      </div>
      {historyUser && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-forest/70 px-4">
          <div className="parchment-card max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-lg">
            <div className="flex items-start justify-between gap-4 border-b border-gold/25 p-5">
              <div>
                <h3 className="font-display text-2xl text-forest">Rupee History</h3>
                <p className="mt-1 text-sm text-muted-foreground">{historyUser.full_name || historyUser.email}</p>
              </div>
              <button type="button" onClick={() => setHistoryUser(null)} aria-label="Close rupee history" className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 text-forest">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-auto p-5">
              {historyLoading ? (
                <p className="text-sm text-muted-foreground">Loading rupee history...</p>
              ) : history.length === 0 ? (
                <p className="text-sm text-muted-foreground">No rupee transactions yet.</p>
              ) : (
                <Table headers={["Date", "Type", "Rupees", "From", "To"]}>
                  {history.map((event) => (
                    <tr key={event.id}>
                      <td className="py-3">{new Date(event.created_at).toLocaleString()}</td>
                      <td className="font-medium text-forest">{event.event_type}</td>
                      <td>{event.rupees_awarded}</td>
                      <td>{event.referrer?.full_name || event.referrer?.email || "system"}</td>
                      <td>{event.referred?.full_name || event.referred?.email || "unknown"}</td>
                    </tr>
                  ))}
                </Table>
              )}
            </div>
          </div>
        </div>
      )}
    </Panel>
  );
}

function AccessTab({ access, refresh, setMessage }: { access: OfficeData["tabAccess"]; refresh: () => Promise<void>; setMessage: (value: string) => void }) {
  async function submit(form: HTMLFormElement, action: "grant" | "revoke") {
    const formData = new FormData(form);
    const response = await fetch("/api/office/access", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ user_email: formData.get("user_email"), tab_id: formData.get("tab_id"), action }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "Access updated.");
    await refresh();
  }
  return (
    <Panel title="Access Control">
      <form className="mb-4 grid gap-3 md:grid-cols-[1fr_220px_auto_auto]" onSubmit={(event) => {
        event.preventDefault();
        void submit(event.currentTarget, "grant");
      }}>
        <input name="user_email" type="email" required placeholder="user@email.com" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
        <select name="tab_id" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest">
          {officeTabOptions.map((tab) => <option key={tab}>{tab}</option>)}
        </select>
        <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">Grant</button>
        <button type="button" onClick={(event) => event.currentTarget.form && void submit(event.currentTarget.form, "revoke")} className="rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-forest">Revoke</button>
      </form>
      <Table headers={["Email", "Tab"]}>
        {access.map((row) => <tr key={row.id}><td className="py-3 text-forest">{row.user_email}</td><td>{row.tab_id}</td></tr>)}
      </Table>
    </Panel>
  );
}

function Announcements({ data, refresh, setMessage }: { data: OfficeData; refresh: () => Promise<void>; setMessage: (value: string) => void }) {
  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/office/announcement", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        message: form.get("message"),
        active: form.get("active") === "on",
        audience: form.get("audience") || "site",
      }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "Announcement saved.");
    await refresh();
  }
  const audience = data.announcement.audience === "employees" ? "employees" : "site";
  return (
    <Panel title="Site Announcements">
      <form onSubmit={save} className="space-y-4">
        <textarea name="message" defaultValue={data.announcement.message} placeholder="Announcement message shown in the site banner" className="h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
        <fieldset className="space-y-2">
          <legend className="text-xs font-semibold uppercase tracking-widest text-forest">Audience</legend>
          <label className="flex items-start gap-2 text-sm text-forest">
            <input type="radio" name="audience" value="site" defaultChecked={audience === "site"} className="mt-1" />
            <span><span className="font-semibold">Site-wide</span> — visible to every visitor.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-forest">
            <input type="radio" name="audience" value="employees" defaultChecked={audience === "employees"} className="mt-1" />
            <span><span className="font-semibold">Employees only</span> — visible only to users with office access.</span>
          </label>
        </fieldset>
        <label className="flex items-center gap-2 text-sm text-forest"><input type="checkbox" name="active" defaultChecked={data.announcement.active} /> Active</label>
        <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">Save banner</button>
      </form>
    </Panel>
  );
}

function NightbloomManager({ rows, refresh, setMessage }: { rows: NightbloomPdf[]; refresh: () => Promise<void>; setMessage: (value: string) => void }) {
  const [editing, setEditing] = useState<NightbloomPdf | null>(null);

  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/office/nightbloom", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: editing?.id,
        title: form.get("title"),
        blurb: form.get("blurb"),
        pdf_url: form.get("pdf_url"),
        cover_image_url: form.get("cover_image_url"),
        price: form.get("price"),
        status: form.get("status"),
        sort_order: form.get("sort_order"),
      }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "Night Bloom PDF saved.");
    setEditing(null);
    event.currentTarget.reset();
    await refresh();
  }

  async function remove(id: number) {
    const response = await fetch(`/api/office/nightbloom/${id}`, { method: "DELETE" });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "Night Bloom PDF deleted.");
    await refresh();
  }

  return (
    <Panel title="Night Bloom PDFs">
      <form onSubmit={save} className="mb-6 grid gap-3 rounded-md border border-gold/25 bg-parchment/70 p-4 md:grid-cols-2">
        <input name="title" key={`title-${editing?.id ?? "new"}`} defaultValue={editing?.title ?? ""} required placeholder="PDF title" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
        <input name="price" key={`price-${editing?.id ?? "new"}`} defaultValue={editing ? (editing.price_cents / 100).toFixed(2) : "0"} placeholder="Price" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
        <input name="pdf_url" key={`url-${editing?.id ?? "new"}`} defaultValue={editing?.pdf_url ?? ""} required placeholder="PDF URL" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2" />
        <input name="cover_image_url" key={`cover-${editing?.id ?? "new"}`} defaultValue={editing?.cover_image_url ?? ""} placeholder="Cover image URL" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2" />
        <textarea name="blurb" key={`blurb-${editing?.id ?? "new"}`} defaultValue={editing?.blurb ?? ""} placeholder="Description" className="h-24 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2" />
        <select name="status" key={`status-${editing?.id ?? "new"}`} defaultValue={editing?.status ?? "active"} className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest">
          {["active", "draft", "archived"].map((status) => <option key={status}>{status}</option>)}
        </select>
        <input name="sort_order" key={`sort-${editing?.id ?? "new"}`} defaultValue={editing?.sort_order ?? 0} placeholder="Sort order" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
        <div className="flex gap-2 md:col-span-2">
          <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">
            {editing ? "Save changes" : "Add PDF"}
          </button>
          {editing && (
            <button type="button" onClick={() => setEditing(null)} className="rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-forest">
              Cancel
            </button>
          )}
        </div>
      </form>
      <Table headers={["Title", "URL", "Status", "Actions"]}>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="py-3 font-medium text-forest">{row.title}</td>
            <td><code>{row.pdf_url}</code></td>
            <td>{row.status}</td>
            <td className="space-x-2">
              <button onClick={() => setEditing(row)} className="rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest">Edit</button>
              <button onClick={() => void remove(row.id)} className="rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest">Delete</button>
            </td>
          </tr>
        ))}
      </Table>
    </Panel>
  );
}

function CommandWindow({ setMessage }: { setMessage: (value: string) => void }) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  async function run(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/office/command", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ command }),
    });
    const result = await response.json().catch(() => ({}));
    const line = `> ${command}\n${result.message || "No response."}`;
    setHistory((current) => [line, ...current].slice(0, 8));
    setMessage(result.message || (response.ok ? "Command complete." : "Command failed."));
    setCommand("");
  }

  return (
    <Panel title="President Command Window">
      <div className="mb-4 rounded-md border border-gold/40 bg-forest p-4 text-sm text-parchment">
        Safe commands only. Type <code className="rounded bg-parchment/20 px-1.5 py-0.5 font-mono text-gold">help</code> for the current command list.
      </div>
      <form onSubmit={run} className="flex gap-2">
        <input
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          placeholder='announcement set message="Shipping delay today" active=true'
          className="min-w-0 flex-1 rounded-md border border-gold/50 bg-parchment px-3 py-2 font-mono text-sm text-forest placeholder:text-forest/50"
        />
        <button className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-forest">Run</button>
      </form>
      <div className="mt-4 space-y-2 rounded-md border border-gold/30 bg-forest p-3">
        {history.length === 0 ? (
          <p className="px-1 py-2 font-mono text-xs text-parchment/70">Command output will appear here.</p>
        ) : (
          history.map((line) => (
            <pre key={line} className="whitespace-pre-wrap rounded-md bg-parchment/10 p-3 font-mono text-xs leading-relaxed text-parchment">{line}</pre>
          ))
        )}
      </div>
    </Panel>
  );
}

function Audit({
  rows,
  documents,
  orders,
  refresh,
  setMessage,
}: {
  rows: OfficeData["auditLog"];
  documents: AuditDocument[];
  orders: OrderRow[];
  refresh: () => Promise<void>;
  setMessage: (value: string) => void;
}) {
  const paid = orders.filter((order) => order.status === "paid");
  const grossRevenue = orders.reduce((sum, order) => sum + order.total_cents, 0) / 100;
  const paidRevenue = paid.reduce((sum, order) => sum + order.total_cents, 0) / 100;
  const avgOrder = orders.length ? grossRevenue / orders.length : 0;
  const ytd = orders
    .filter((order) => new Date(order.created_at).getFullYear() === new Date().getFullYear())
    .reduce((sum, order) => sum + order.total_cents, 0) / 100;

  async function uploadDoc(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const response = await fetch("/api/office/audit-doc", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: data.get("title"),
        description: data.get("description"),
        file_url: data.get("file_url"),
      }),
    });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || (response.ok ? "Audit document uploaded." : "Could not upload document."));
    if (response.ok) form.reset();
    await refresh();
  }

  async function removeDoc(id: number) {
    const response = await fetch(`/api/office/audit-doc?id=${id}`, { method: "DELETE" });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "Audit document removed.");
    await refresh();
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Metric label="Gross revenue" value={`$${grossRevenue.toFixed(2)}`} />
        <Metric label="Confirmed (paid)" value={`$${paidRevenue.toFixed(2)}`} />
        <Metric label="Revenue YTD" value={`$${ytd.toFixed(2)}`} />
        <Metric label="Avg order value" value={`$${avgOrder.toFixed(2)}`} />
      </div>

      <Panel title="Audit Documents">
        <form onSubmit={uploadDoc} className="mb-5 grid gap-3 rounded-md border border-gold/25 bg-parchment/70 p-4 md:grid-cols-2">
          <input name="title" required placeholder="Document title (e.g. Q3 Financial Statement)" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
          <input name="file_url" required type="url" placeholder="PDF URL (https://...)" className="rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
          <textarea name="description" placeholder="Description (optional)" className="h-20 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2" />
          <div className="md:col-span-2">
            <button className="inline-flex items-center gap-1 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment"><FileText className="h-4 w-4" /> Upload document</button>
          </div>
        </form>
        {documents.length > 0 ? (
          <Table headers={["Title", "Description", "Uploaded By", "Document", "Actions"]}>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="py-3 font-medium text-forest">{doc.title}</td>
                <td className="text-sm text-muted-foreground">{doc.description || "—"}</td>
                <td className="text-xs text-muted-foreground">{doc.uploaded_by || "system"}</td>
                <td><a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-forest underline">Open PDF</a></td>
                <td><button onClick={() => void removeDoc(doc.id)} className="rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest">Delete</button></td>
              </tr>
            ))}
          </Table>
        ) : (
          <p className="text-sm text-muted-foreground">No audit documents uploaded yet.</p>
        )}
      </Panel>

      <Panel title="Audit Log">
        <Table headers={["Time", "User", "Action", "Details"]}>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="py-3">{new Date(row.created_at).toLocaleString()}</td>
              <td>{row.user_email || "system"}</td>
              <td className="font-medium text-forest">{row.action_type}</td>
              <td><code className="text-xs text-muted-foreground">{JSON.stringify(row.details)}</code></td>
            </tr>
          ))}
        </Table>
      </Panel>
    </div>
  );
}

function Revenue({ orders }: { orders: OrderRow[] }) {
  const byDay = useMemo(() => {
    const map = new Map<string, number>();
    orders.forEach((order) => {
      const key = new Date(order.created_at).toISOString().slice(0, 10);
      map.set(key, (map.get(key) ?? 0) + order.total_cents / 100);
    });
    return [...map.entries()].map(([date, revenue]) => ({ date, revenue })).slice(0, 14).reverse();
  }, [orders]);
  const total = orders.reduce((sum, order) => sum + order.total_cents, 0) / 100;
  const average = orders.length ? total / orders.length : 0;
  const productCounts = new Map<string, number>();
  orders.flatMap((order) => order.order_items ?? []).forEach((item) => productCounts.set(item.product_slug, (productCounts.get(item.product_slug) ?? 0) + item.quantity));
  const topProducts = [...productCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Metric label="Total revenue" value={`$${total.toFixed(2)}`} />
        <Metric label="Average order value" value={`$${average.toFixed(2)}`} />
        <Metric label="Orders" value={String(orders.length)} />
      </div>
      <Panel title="Revenue by day">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={byDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#d4af37" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>
      <Panel title="Top selling products">
        <ul className="space-y-2 text-sm">{topProducts.map(([slug, count]) => <li key={slug} className="flex justify-between border-b border-gold/20 pb-2"><span className="text-forest">{slug}</span><span>{count}</span></li>)}</ul>
      </Panel>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="parchment-card rounded-lg p-5">
      <h2 className="mb-4 font-display text-xl text-forest">{title}</h2>
      {children}
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="parchment-card rounded-lg p-4">
      <div className="text-xs uppercase tracking-widest text-[#4a3728]">{label}</div>
      <div className="mt-2 font-display text-2xl text-[#1a1a1a]">{value}</div>
    </div>
  );
}

function Analytics({ analytics }: { analytics: AnalyticsData }) {
  if (!analytics) {
    return <Panel title="Network Analytics"><p className="text-sm text-muted-foreground">No analytics data available yet.</p></Panel>;
  }
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Metric label="Views (24h)" value={String(analytics.views24h)} />
        <Metric label="Views (7d)" value={String(analytics.views7d)} />
        <Metric label="Unique visitors (7d)" value={String(analytics.uniqueVisitors7d)} />
        <Metric label="Total views" value={String(analytics.totalViews)} />
      </div>
      <Panel title="Traffic (last 7 days)">
        {analytics.daily.length > 0 ? (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.daily}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="views" fill="#d4af37" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No visits recorded in the last 7 days.</p>
        )}
      </Panel>
      <div className="grid gap-6 md:grid-cols-2">
        <Panel title="Top pages">
          {analytics.topPages.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {analytics.topPages.map((row) => (
                <li key={row.label} className="flex justify-between border-b border-gold/20 pb-2">
                  <span className="truncate text-forest">{row.label}</span>
                  <span className="font-semibold text-forest">{row.count}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No page data yet.</p>
          )}
        </Panel>
        <Panel title="Traffic sources">
          {analytics.topSources.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {analytics.topSources.map((row) => (
                <li key={row.label} className="flex justify-between border-b border-gold/20 pb-2">
                  <span className="truncate text-forest">{row.label}</span>
                  <span className="font-semibold text-forest">{row.count}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No source data yet.</p>
          )}
        </Panel>
      </div>
    </div>
  );
}

function Table({ headers, children }: { headers: string[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-xs uppercase tracking-widest text-[#1a2e1a]">
          <tr>{headers.map((header) => <th key={header} className="py-2 pr-4">{header}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-gold/20">{children}</tbody>
      </table>
    </div>
  );
}

function BookOfRootsAdmin({
  entries,
  products,
  refresh,
  setMessage,
}: {
  entries: BookOfRootsAdminEntry[];
  products: ProductRow[];
  refresh: () => Promise<void>;
  setMessage: (value: string) => void;
}) {
  const [editing, setEditing] = useState<BookOfRootsAdminEntry | null>(null);

  const traditionOptions = ["Wicca", "Native American", "Santeria", "Voodoo", "Islamic Tibb", "Hoodoo", "Folk Christianity", "Rastafari", "Folk Medicine", "Ayurveda", "Egyptian", "Indigenous South American", "Wicca", "Folk Medicine"];
  const uniqueTraditions = Array.from(new Set(traditionOptions));

  const purposeOptions = [
    "Sleep",
    "Protection",
    "Spiritual Growth",
    "Cleansing",
    "Love & Attraction",
    "Healing",
    "Curse Breaking",
    "Protection",
    "Spiritual Growth",
    "Fertility",
  ];
  const uniquePurposes = Array.from(new Set(purposeOptions));

  const ingredientTypeOptions: BookOfRootsAdminEntry["ingredient_type"][] = ["Herbs", "Roots", "Flowers", "Oils", "Resins", "Bark"];

  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const body = {
      id: editing?.id,
      name: String(form.get("name") ?? "").trim(),
      traditions: String(form.get("traditions") ?? "")
        .split(/\r?\n|,/)
        .map((s) => s.trim())
        .filter(Boolean),
      purposes: String(form.get("purposes") ?? "")
        .split(/\r?\n|,/)
        .map((s) => s.trim())
        .filter(Boolean),
      ingredient_type: String(form.get("ingredient_type") ?? "") as BookOfRootsAdminEntry["ingredient_type"],
      product_slug: String(form.get("product_slug") ?? "").trim() || null,
      image_url: String(form.get("image_url") ?? "").trim() || null,
      description: String(form.get("description") ?? "").trim(),
      how_to_use: String(form.get("how_to_use") ?? "").trim(),
    };

    const response = await fetch("/api/admin/book-of-roots", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json().catch(() => ({}));
    setMessage(result.message || (response.ok ? "Saved." : "Could not save entry."));
    setEditing(null);
    event.currentTarget.reset();
    await refresh();
  }

  async function remove(id: number) {
    const response = await fetch(`/api/admin/book-of-roots/${id}`, { method: "DELETE" });
    const result = await response.json().catch(() => ({}));
    setMessage(result.message || "Entry deleted.");
    await refresh();
  }

  return (
    <Panel title="Book of Roots Admin">
      <div className="space-y-6">
        <form onSubmit={save} className="space-y-4 rounded-md border border-gold/25 bg-parchment/70 p-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
              Name
              <input name="name" defaultValue={editing?.name ?? ""} required className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
            </label>

            <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
              Image URL (optional)
              <input name="image_url" defaultValue={editing?.image_url ?? ""} className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest" />
            </label>

            <label className="text-xs font-semibold uppercase tracking-widest text-forest">
              Ingredient Type
              <select
                name="ingredient_type"
                defaultValue={editing?.ingredient_type ?? "Herbs"}
                className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
              >
                {ingredientTypeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>

            <label className="text-xs font-semibold uppercase tracking-widest text-forest">
              Shop product (optional)
              <select
                name="product_slug"
                defaultValue={editing?.product_slug ?? ""}
                className="mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
              >
                <option value="">— none —</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.name}</option>
                ))}
              </select>
            </label>

            <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
              Traditions (comma/newline separated)
              <textarea
                name="traditions"
                defaultValue={(editing?.traditions ?? []).join("\n")}
                className="mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
              />
            </label>

            <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
              Purposes (comma/newline separated)
              <textarea
                name="purposes"
                defaultValue={(editing?.purposes ?? []).join("\n")}
                className="mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
              />
            </label>

            <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
              Description
              <textarea
                name="description"
                defaultValue={editing?.description ?? ""}
                required
                className="mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
              />
            </label>

            <label className="text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2">
              How to Use
              <textarea
                name="how_to_use"
                defaultValue={editing?.how_to_use ?? ""}
                required
                className="mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
              />
            </label>
          </div>

          <div className="flex gap-2">
            <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">
              {editing ? "Save changes" : "Add entry"}
            </button>
            {editing && (
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-forest"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <Table headers={["Name", "Ingredient", "Traditions", "Purposes", "Actions"]}>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td className="py-3">
                <div className="font-medium text-forest">{entry.name}</div>
              </td>
              <td>{entry.ingredient_type}</td>
              <td className="text-xs text-muted-foreground">{entry.traditions.join(", ")}</td>
              <td className="text-xs text-muted-foreground">{entry.purposes.join(", ")}</td>
              <td className="space-x-2">
                <button
                  type="button"
                  onClick={() => setEditing(entry)}
                  className="rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => void remove(entry.id)}
                  className="rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </Panel>
  );
}
