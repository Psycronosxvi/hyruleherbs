import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Download, Lock, ShoppingBag, Sparkles } from "lucide-react";
import nightbloomImg from "@/assets/nightbloom.jpg";
import { useSession } from "@/lib/session";

export const Route = createFileRoute("/nightbloom")({
  head: () => ({
    meta: [
      { title: "Night Bloom Library · Hyrule Apothecary" },
      {
        name: "description",
        content: "Owner-created PDFs, guides, and member library releases from Hyrule Apothecary.",
      },
      { property: "og:title", content: "Night Bloom Library" },
      { property: "og:image", content: nightbloomImg },
    ],
  }),
  component: Nightbloom,
});

type NightbloomPdf = {
  id: number;
  title: string;
  blurb: string;
  cover_image_url?: string | null;
  price_cents: number;
  status: string;
  unlocked: boolean;
};

function Nightbloom() {
  const session = useSession();
  const isMember = session?.authenticated ?? false;
  const [pdfs, setPdfs] = useState<NightbloomPdf[]>([]);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let active = true;
    void fetch("/api/nightbloom")
      .then((response) => response.json())
      .then((data) => {
        if (active) setPdfs(Array.isArray(data.pdfs) ? data.pdfs : []);
      })
      .catch(() => {
        if (active) setPdfs([]);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("purchase") === "success") {
      setNotice("Thank you! Your PDF is unlocked below.");
    } else if (params.get("purchase") === "cancelled") {
      setNotice("Checkout cancelled. Your card was not charged.");
    }
  }, []);

  async function openPdf(book: NightbloomPdf) {
    setBusyId(book.id);
    try {
      const response = await fetch(`/api/nightbloom/download?id=${book.id}`);
      const data = (await response.json()) as { url?: string; message?: string };
      if (response.ok && data.url) {
        window.open(data.url, "_blank", "noopener,noreferrer");
      } else {
        setNotice(data.message || "Could not open this PDF.");
      }
    } finally {
      setBusyId(null);
    }
  }

  async function buyPdf(book: NightbloomPdf) {
    if (!isMember) {
      window.location.href = "/signin?redirectTo=/nightbloom";
      return;
    }
    setBusyId(book.id);
    try {
      const response = await fetch("/api/nightbloom/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: book.id }),
      });
      const data = (await response.json()) as { url?: string; message?: string };
      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        setNotice(data.message || "Could not start checkout.");
        setBusyId(null);
      }
    } catch {
      setNotice("Could not start checkout.");
      setBusyId(null);
    }
  }

  return (
    <div className="bg-gradient-to-b from-[oklch(0.16_0.03_155)] to-[oklch(0.10_0.02_155)] text-parchment">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url(${nightbloomImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-sm border border-gold/50 bg-parchment/10 px-2 py-1 text-[11px] uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Owner-created library
            </div>
            <h1 className="font-display text-5xl leading-tight text-gold md:text-6xl">
              Night Bloom Library
            </h1>
            <p className="mt-5 max-w-xl text-lg text-parchment">
              A private shelf for original guides, PDFs, recipes, research notes, and member
              releases created by the owner.
            </p>
            {!isMember && (
              <Link
                to="/signin"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-[oklch(0.18_0.03_150)] hover:opacity-90"
              >
                <Lock className="h-4 w-4" /> Sign in to unlock
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-gold" />
          <h2 className="font-display text-3xl text-gold">Member PDFs</h2>
        </div>
        {notice && (
          <div className="mb-6 rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold" role="status">
            {notice}
          </div>
        )}
        {pdfs.length === 0 ? (
          <div className="rounded-lg border border-gold/30 bg-black/35 p-8 text-parchment">
            No PDFs have been published yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {pdfs.map((book) => (
              <article
                key={book.id}
                className="overflow-hidden rounded-lg border border-gold/30 bg-black/40 backdrop-blur-sm"
              >
                {book.cover_image_url && (
                  <img
                    src={book.cover_image_url}
                    alt=""
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <h3 className="font-display text-xl text-gold">{book.title}</h3>
                  <p className="mt-2 text-sm text-parchment">{book.blurb}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-display text-2xl text-gold">
                      {book.price_cents ? `$${(book.price_cents / 100).toFixed(2)}` : "Member"}
                    </span>
                    {book.unlocked ? (
                      <button
                        type="button"
                        onClick={() => void openPdf(book)}
                        disabled={busyId === book.id}
                        className="inline-flex items-center gap-2 rounded-md border border-gold/50 px-3 py-1.5 text-sm font-medium text-gold hover:bg-gold/10 disabled:opacity-60"
                      >
                        <Download className="h-4 w-4" /> {busyId === book.id ? "Opening..." : "Open PDF"}
                      </button>
                    ) : book.price_cents > 0 ? (
                      <button
                        type="button"
                        onClick={() => void buyPdf(book)}
                        disabled={busyId === book.id}
                        className="inline-flex items-center gap-2 rounded-md bg-gold px-3 py-1.5 text-sm font-semibold text-[oklch(0.18_0.03_150)] hover:opacity-90 disabled:opacity-60"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        {busyId === book.id ? "Starting..." : isMember ? "Buy & unlock" : "Sign in to buy"}
                      </button>
                    ) : (
                      <Link
                        to="/signin"
                        search={{ redirectTo: "/nightbloom" }}
                        className="inline-flex items-center gap-1 rounded-md border border-gold/50 px-3 py-1.5 text-sm font-medium text-gold hover:bg-gold/10"
                      >
                        <Lock className="h-3 w-3" /> Sign in to unlock
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
