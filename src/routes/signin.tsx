import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Sparkles } from "lucide-react";
import { z } from "zod";

const search = z.object({
  auth: z.string().optional(),
  redirectTo: z.string().optional(),
});

export const Route = createFileRoute("/signin")({
  validateSearch: search,
  head: () => ({ meta: [{ title: "Sign in — Hyrule Apothecary" }] }),
  component: SignIn,
});

function SignIn() {
  const { auth, redirectTo = "/" } = Route.useSearch();
  const notice =
    auth === "google-not-configured"
      ? "Google sign-in is temporarily unavailable. Please try again soon."
      : auth === "google-signed-in"
        ? "Google sign-in worked. Your session is active on this device."
        : auth === "google-callback-ready"
          ? "Google returned successfully. Please continue to your account."
          : auth === "google-state-mismatch"
            ? "Google sign-in could not be verified. Please try again."
            : auth === "google-token-failed" || auth === "google-profile-failed"
              ? "Google sign-in could not be completed. Please try again."
              : auth === "google-cancelled"
                ? "Google sign-in was cancelled."
                : "";

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="parchment-card rounded-lg p-8 text-center">
        <Sparkles className="mx-auto h-7 w-7 text-gold" />
        <h1 className="mt-3 font-display text-3xl text-forest">Open your pouch</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Save items, track orders, access first-batch releases, and unlock digital field guides.
        </p>
        {notice && (
          <p className="mt-4 rounded-md border border-gold/40 bg-parchment-dark/30 px-3 py-2 text-xs text-forest">
            {notice}
          </p>
        )}
        <a
          href={`/api/auth/google?redirectTo=${encodeURIComponent(redirectTo)}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-gold/50 bg-parchment px-4 py-2.5 text-sm font-semibold text-forest hover:bg-parchment-dark/40"
        >
          <Mail className="h-4 w-4" />
          Continue with Google
        </a>
        <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px flex-1 bg-gold/30" />
          <span>Email backup</span>
          <span className="h-px flex-1 bg-gold/30" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Email and password accounts are not open yet. Please continue with Google.");
          }}
          className="space-y-3 text-left"
        >
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
          />
          <button className="w-full rounded-md bg-forest px-4 py-2.5 font-semibold text-parchment hover:bg-forest/90">
            Create account
          </button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link to="/signin" className="text-forest underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
