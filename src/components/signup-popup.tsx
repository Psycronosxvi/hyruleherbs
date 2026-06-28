import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const KEY = "ha_signup_dismissed_v1";

export function SignupPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 8000);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !localStorage.getItem(KEY)) setOpen(true);
    };
    document.addEventListener("mouseleave", onLeave);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(KEY, "1");
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-forest/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="parchment-card relative w-full max-w-md rounded-lg p-7 md:p-9 animate-in zoom-in-95 duration-300">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-parchment-dark/60"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-gradient-to-br from-gold/40 to-transparent rune-glow">
            <Sparkles className="h-7 w-7 text-forest" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-forest mb-2">
            Open Your Adventurer's Pouch
          </h3>
          <p className="text-sm text-muted-foreground mb-1">
            Create a free account to save your favorite herbs, track every order, and unlock first
            access to small-batch releases.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-gold mt-3 mb-5">
            — a gift from the apothecary —
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              to="/signin"
              onClick={dismiss}
              className="flex-1 rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-parchment hover:bg-forest/90 transition-colors"
            >
              Create free account
            </Link>
            <button
              onClick={dismiss}
              className="flex-1 rounded-md border border-gold/50 bg-transparent px-4 py-2.5 text-sm text-forest hover:bg-parchment-dark/40"
            >
              Maybe later
            </button>
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            No spells, no spam. Unsubscribe any time.
          </p>
        </div>
      </div>
    </div>
  );
}
