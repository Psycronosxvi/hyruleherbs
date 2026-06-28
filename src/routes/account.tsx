import { createFileRoute, Link } from "@tanstack/react-router";
import { useSession, refreshSession } from "@/lib/session";
import { ShieldCheck, LogOut, ShoppingBag, Sparkles, Gem, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [{ title: "My Account · Hyrule Apothecary" }],
  }),
  component: AccountPage,
});

function AccountPage() {
  const session = useSession();
  const [account, setAccount] = useState<{
    referralLink?: string;
    profile?: { rupees?: number; referral_code?: string | null };
    referrals?: Array<{
      event_type: string;
      rupees_awarded: number;
      created_at: string;
      referred?: { email?: string; full_name?: string | null } | null;
    }>;
  } | null>(null);

  useEffect(() => {
    if (!session?.authenticated) return;
    void fetch("/api/account")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => setAccount(data))
      .catch(() => setAccount(null));
  }, [session?.authenticated]);

  if (!session) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="parchment-card rounded-lg p-10 text-center">
          <p className="text-muted-foreground">Reading your scroll…</p>
        </div>
      </div>
    );
  }

  if (!session.authenticated) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="parchment-card rounded-lg p-10 text-center">
          <h1 className="font-display text-3xl text-forest">Sign in required</h1>
          <p className="mt-3 text-muted-foreground">
            Sign in with Google to view your account, purchases, and subscription.
          </p>
          <Link
            to="/signin"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-parchment hover:bg-forest/90"
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="parchment-card rounded-xl p-8 md:p-10">
        <div className="flex items-center gap-5">
          {session.picture ? (
            <img
              src={session.picture}
              alt=""
              className="h-16 w-16 rounded-full border border-gold/60 object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="grid h-16 w-16 place-items-center rounded-full bg-forest text-2xl font-bold text-parchment">
              {(session.name || session.email || "?").slice(0, 1).toUpperCase()}
            </div>
          )}
          <div className="flex-1">
            <h1 className="font-display text-3xl text-forest flex items-center gap-2">
              {session.name || "Traveler"}
              {session.isPresident && (
                <ShieldCheck className="h-6 w-6 text-gold" aria-label="President" />
              )}
            </h1>
            <p className="text-sm text-muted-foreground">{session.email}</p>
            {session.isPresident && (
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">
                President · Full Access
              </p>
            )}
          </div>
          <form
            action="/api/auth/signout"
            method="post"
            onSubmit={() => {
              setTimeout(() => refreshSession(), 250);
            }}
          >
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md border border-gold/50 px-3 py-2 text-sm font-medium text-forest hover:bg-parchment-dark/40"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="parchment-card rounded-lg p-6 md:col-span-2">
          <h2 className="font-display text-xl text-forest flex items-center gap-2">
            <Gem className="h-5 w-5 text-gold" /> Rupee referrals
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-[220px_1fr]">
            <div className="rounded-md border border-gold/30 bg-parchment/70 p-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Balance
              </div>
              <div className="mt-2 font-display text-3xl text-forest">
                {account?.profile?.rupees ?? session.rupees ?? 0} rupees
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Referral link
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <code className="min-w-0 flex-1 rounded-md border border-gold/30 bg-parchment/70 px-3 py-2 text-sm text-forest">
                  {account?.referralLink ?? "Loading..."}
                </code>
                <button
                  type="button"
                  onClick={() => account?.referralLink && navigator.clipboard?.writeText(account.referralLink)}
                  className="inline-flex items-center gap-2 rounded-md bg-forest px-3 py-2 text-sm font-semibold text-parchment"
                >
                  <Copy className="h-4 w-4" /> Copy
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="py-2">Referred</th>
                  <th>Event</th>
                  <th>Rupees</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/20">
                {(account?.referrals ?? []).map((event) => (
                  <tr key={`${event.event_type}-${event.created_at}`}>
                    <td className="py-3 text-forest">
                      {event.referred?.full_name || event.referred?.email || "New member"}
                    </td>
                    <td className="capitalize">{event.event_type}</td>
                    <td>{event.rupees_awarded}</td>
                    <td>{new Date(event.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
                {account?.referrals?.length === 0 && (
                  <tr>
                    <td className="py-3 text-muted-foreground" colSpan={4}>
                      No referrals yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
        <section className="parchment-card rounded-lg p-6">
          <h2 className="font-display text-xl text-forest flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" /> Recent orders
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Your order history will appear here once your purchases are linked to this
            account.
          </p>
          <Link
            to="/shop"
            className="mt-4 inline-flex text-sm font-medium text-ember hover:underline"
          >
            Continue shopping →
          </Link>
        </section>
        <section className="parchment-card rounded-lg p-6">
          <h2 className="font-display text-xl text-forest flex items-center gap-2">
            <Sparkles className="h-5 w-5" /> Subscription
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            You are not currently subscribed. Subscribers unlock the Nightbloom vault and
            members-only PDFs.
          </p>
          <Link
            to="/nightbloom"
            className="mt-4 inline-flex text-sm font-medium text-ember hover:underline"
          >
            Visit the Nightbloom vault →
          </Link>
        </section>
      </div>

      {session.isPresident && (
        <div className="mt-8 parchment-card rounded-lg p-6 border-gold/60">
          <h2 className="font-display text-xl text-forest flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gold" /> President's Tools
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            You have full access to manage the apothecary.
          </p>
          <Link
            to="/office"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment hover:bg-forest/90"
          >
            Open the Office
          </Link>
        </div>
      )}
    </div>
  );
}
