import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { Gift } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [{ title: "Join Hyrule Apothecary · Referral" }],
  }),
  component: JoinPage,
});

function JoinPage() {
  const search = useSearch({ from: "/join" }) as { ref?: string };

  return (
    <div className="mx-auto grid min-h-[60vh] max-w-2xl place-items-center px-4 py-16">
      <section className="parchment-card rounded-lg p-8 text-center">
        <Gift className="mx-auto h-10 w-10 text-gold" />
        <h1 className="mt-4 font-display text-3xl text-forest">Join the apothecary</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Your referral code{search.ref ? ` ${search.ref}` : ""} has been saved for this browser.
          Sign in with Google to create your account.
        </p>
        <Link
          to="/signin"
          search={{ redirectTo: "/account" }}
          className="mt-6 inline-flex rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-parchment hover:bg-forest/90"
        >
          Continue with Google
        </Link>
      </section>
    </div>
  );
}
