# Cloudflare Store Setup

This app can stay on the existing Cloudflare Worker hosting. The preferred hosted backend can be Supabase for relational data and auth, while Cloudflare R2 remains a good fit for protected PDF books. The earlier Cloudflare D1 path still works as a fallback.

## Supabase

Run `supabase/schema.sql` in the Supabase SQL editor for the project.

For local development, copy `.dev.vars.example` to `.dev.vars` and fill in:

```txt
SUPABASE_URL
VITE_SUPABASE_URL
SUPABASE_PUBLISHABLE_KEY
SUPABASE_ANON_KEY
VITE_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

Do not commit `.dev.vars`; it is ignored by git. The service role key is server-only and should never be used in browser code.

The Worker accepts both `SUPABASE_URL` / `SUPABASE_ANON_KEY` and the browser-style
`VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` aliases. If you add a browser
Supabase client later, initialize it only from the `VITE_*` values.

For Cloudflare production, set secrets:

```sh
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_PUBLISHABLE_KEY
npx wrangler secret put SUPABASE_ANON_KEY
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
```

You can also set the public Supabase URL and anon key in `wrangler.toml` under
`[vars]` or in the Cloudflare dashboard. Keep the service role key as an
encrypted secret.

Because the service role key was shared outside the Supabase dashboard, rotate it in Supabase before production.

Newsletter signups use Supabase first when these variables are present. If Supabase is not configured, the Worker falls back to D1.

## Resources

Create a D1 database:

```sh
npx wrangler d1 create hyrule-herb-apothecary
```

Put the returned `database_id` into the commented `[[d1_databases]]` block in `wrangler.toml`, then apply the schema:

```sh
npx wrangler d1 migrations apply hyrule-herb-apothecary --remote
```

Create an R2 bucket for digital books:

```sh
npx wrangler r2 bucket create hyrule-herb-books
```

Put the bucket name into the commented `[[r2_buckets]]` block in `wrangler.toml`.

## Google Sign-In

Create an OAuth client in Google Cloud Console with this redirect URI:

```txt
https://your-domain.example/api/auth/google/callback
```

For local development, copy `.dev.vars.example` to `.dev.vars` and fill in your values. `.dev.vars` is ignored by git.

Set the Google client ID and client secret as Cloudflare secrets:

```sh
npx wrangler secret put AUTH_GOOGLE_ID
npx wrangler secret put AUTH_GOOGLE_SECRET
```

Optional override if your production callback differs from the request origin:

```sh
npx wrangler secret put AUTH_GOOGLE_REDIRECT_URI
```

Set a long random value for signed app sessions:

```sh
npx wrangler secret put AUTH_SESSION_SECRET
```

The current `/api/auth/google` endpoint redirects to Google, verifies the callback state, exchanges the code server-side, stores the Google profile in D1 when the `DB` binding exists, and sets a signed session cookie when `AUTH_SESSION_SECRET` is configured.

The callback URL must match exactly in Google Cloud Console:

```txt
https://hyruleherb.xyz/api/auth/google/callback
```

If you use Supabase Auth for Google in a future browser flow, also enable the
Google provider in the Supabase dashboard and add the matching Supabase callback
URL there. This app's current production sign-in flow is Worker-owned so the
`ha_session` cookie can protect `/office`.

If an OAuth client secret was shared outside your private password manager or Cloudflare dashboard, rotate it in Google Cloud Console before production use.

## Next Payments Step

Stripe Checkout is wired through `/api/checkout`. Set your Stripe secret key in Cloudflare:

```sh
npx wrangler secret put STRIPE_SECRET_KEY
```

Use a test key first, then replace it with the live key when the Stripe account is fully verified.
The key must be read as `env.STRIPE_SECRET_KEY` in the Worker. Never expose it
through `VITE_*`, `import.meta.env`, or frontend code.

The current checkout flow creates a hosted Stripe Checkout Session from the Worker. A later webhook should write completed orders into D1 and unlock R2 PDF downloads:

```sh
npx wrangler secret put STRIPE_WEBHOOK_SECRET
```

## President's Office

The `/office` route is hidden from public navigation and gated through the signed Google session. By default, only this email opens the office:

```txt
blackhatterxvi@gmail.com
```

To change or confirm it in Cloudflare:

```sh
npx wrangler secret put PRESIDENT_EMAIL
```

The office is intentionally not a public route link. Visit `/office` directly after signing in with the presidential Google account.

## Brand, Product Images, and Music

The office has a Media tab for:

- Setting the global logo image.
- Drafting product image replacements.
- Preparing the four brand images: Nightbloom label, apothecary shelf, global logo, and minimal wordmark.

Current uploads are browser previews so you can inspect artwork quickly. For production permanence, upload final images to R2, then store the public/protected image URL in D1 using the `brand_assets.image_url` or `products.image_url` fields from `0002_brand_media.sql`.

The public site includes an original Web Audio ambient music control. It does not autoplay; visitors choose whether to play the positive mystical chime bed.
