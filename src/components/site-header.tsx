import { Link } from "@tanstack/react-router";
import { ShoppingBasket, Menu, X, ShieldCheck, Gem } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { BrandMark } from "@/components/brand-mark";
import { useSession } from "@/lib/session";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/nightbloom", label: "Nightbloom" },
  { to: "/book-of-roots", label: "Book of Roots" },
  { to: "/oracle", label: "Oracle" },
  { to: "/about", label: "Our Lore" },
  { to: "/careers", label: "Join the Guild" },
];

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const session = useSession();

  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 backdrop-blur-md bg-[oklch(0.14_0.03_155)]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <BrandMark />
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl tracking-wide text-gold">
              Hyrule Apothecary
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-parchment/95">
              Herbs · Remedies · Lore
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-parchment/95 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SessionPill />
          {session?.authenticated && (
            <Link
              to="/account"
              className="hidden lg:inline-flex items-center gap-1 rounded-md border border-gold/50 px-2.5 py-1.5 text-sm font-semibold text-gold"
              title="Rupee balance"
            >
              <Gem className="h-4 w-4" />
              {session.rupees ?? 0}
            </Link>
          )}
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-md border border-gold/50 bg-gradient-to-br from-gold/20 to-transparent px-3 py-2 text-parchment hover:rune-glow transition-shadow"
          >
            <ShoppingBasket className="h-5 w-5 text-gold" />
            <span className="hidden sm:inline text-sm font-medium text-parchment">Satchel</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 grid h-5 min-w-5 place-items-center rounded-full bg-ember px-1 text-[11px] font-bold text-parchment">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-parchment/95"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-gold/30 bg-parchment/95 px-4 py-3 flex flex-col gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-2 text-forest/95 hover:text-ember"
              activeProps={{ className: "text-forest font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
          {session?.authenticated ? (
            <>
              <Link
                to="/account"
                onClick={() => setOpen(false)}
                className="py-2 text-forest/95 hover:text-ember"
              >
                My Account
              </Link>
              {(session.isPresident || (session.officeTabs?.length ?? 0) > 0 || session.role === "marketing" || session.role === "it_coordinator" || session.role === "admin") && (
                <Link
                  to="/office"
                  onClick={() => setOpen(false)}
                  className="py-2 text-forest/95 hover:text-ember"
                >
                  President's Office
                </Link>
              )}
              <a href="/api/auth/signout" className="py-2 text-forest/95 hover:text-ember">
                Sign out
              </a>
            </>
          ) : (
            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="py-2 text-forest/95 hover:text-ember"
            >
              Sign in
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}

function SessionPill() {
  const session = useSession();

  if (!session) {
    return (
      <span className="hidden sm:inline-block w-24 h-9 rounded-md bg-parchment-dark/30 animate-pulse" />
    );
  }

  if (!session.authenticated) {
    return (
      <Link
        to="/signin"
        className="hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium text-forest hover:text-ember transition-colors"
      >
        Sign in
      </Link>
    );
  }

  const initial = (session.name || session.email || "?").trim().slice(0, 1).toUpperCase();

  return (
    <Link
      to="/account"
      className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gold/50 bg-parchment px-2.5 py-1.5 text-sm font-medium text-forest hover:bg-parchment-dark/40"
      title={session.email ?? undefined}
    >
      {session.picture ? (
        <img
          src={session.picture}
          alt=""
          className="h-6 w-6 rounded-full border border-gold/40 object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-[11px] font-bold text-parchment">
          {initial}
        </span>
      )}
      <span className="max-w-[10ch] truncate">
        {session.name?.split(" ")[0] || session.email?.split("@")[0]}
      </span>
      {session.isPresident && (
        <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-label="President" />
      )}
      <span className="inline-flex items-center gap-1 text-gold">
        <Gem className="h-3.5 w-3.5" />
        {session.rupees ?? 0}
      </span>
    </Link>
  );
}
