import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  Bell,
  BookOpen,
  ChevronDown,
  Download,
  FileText,
  Leaf,
  Lock,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import herbsImg from "@/assets/cat-herbs.jpg";
import flowersImg from "@/assets/cat-flowers.jpg";
import oilsImg from "@/assets/cat-oils.jpg";
import { bookOfWritzEntries } from "@/lib/book-of-writz";
import { culturalBooks, pdfStoreCategories, type CulturalBook } from "@/lib/cultural-books";
import {
  ingredientTypeOptions,
  purposeOptions,
  starterBookOfRoots,
  traditionOptions,
  type BookOfRootsEntry,
} from "@/lib/book-of-roots";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { useLiveProducts } from "@/hooks/use-product-overrides";

export const Route = createFileRoute("/book-of-roots")({
  head: () => ({
    meta: [
      { title: "The Book of Roots — Hyrule Apothecary" },
      {
        name: "description",
        content:
          "Explore herbs, roots, flowers, oils, resins, and bark across spiritual and healing traditions.",
      },
    ],
  }),
  component: BookOfRootsPage,
});

function BookOfRootsPage() {
  const [entries, setEntries] = useState<BookOfRootsEntry[]>([]);
  const [entriesLoading, setEntriesLoading] = useState(true);
  const [tradition, setTradition] = useState("All");
  const [purpose, setPurpose] = useState("All");
  const [ingredientType, setIngredientType] = useState("All");

  useEffect(() => {
    const controller = new AbortController();

    void fetch("/api/book-of-roots", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Book of Roots API unavailable");
        return (await response.json()) as { entries?: BookOfRootsEntry[] };
      })
      .then((data) => {
        // Use live Supabase entries when present; otherwise fall back to the bundled archive
        // so the page is never empty for visitors.
        setEntries(data.entries && data.entries.length > 0 ? data.entries : starterBookOfRoots);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setEntries(starterBookOfRoots);
      })
      .finally(() => setEntriesLoading(false));

    return () => controller.abort();
  }, []);

  const filteredEntries = useMemo(
    () =>
      entries.filter(
        (entry) =>
          (tradition === "All" || entry.traditions.includes(tradition)) &&
          (purpose === "All" || entry.purposes.includes(purpose)) &&
          (ingredientType === "All" || entry.ingredient_type === ingredientType),
      ),
    [entries, ingredientType, purpose, tradition],
  );

  const clearFilters = () => {
    setTradition("All");
    setPurpose("All");
    setIngredientType("All");
  };

  return (
    <main className="dark-page">
      <section className="relative overflow-hidden bg-forest text-parchment">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,var(--color-gold),transparent_35%),radial-gradient(circle_at_80%_70%,var(--color-gold),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-parchment/10 rune-glow">
            <BookOpen className="h-7 w-7 text-gold" />
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">A living plant archive</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl">The Book of Roots</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-parchment/80 md:text-base">
            An educational field guide to plants used across world spiritual and healing traditions,
            gathered with curiosity, cultural respect, and practical care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="parchment-card rounded-lg p-4 md:p-6">
          <FilterBar
            label="Tradition / Culture"
            options={traditionOptions}
            value={tradition}
            onChange={setTradition}
          />
          <FilterBar
            label="Purpose"
            options={purposeOptions}
            value={purpose}
            onChange={setPurpose}
          />
          <FilterBar
            label="Ingredient Type"
            options={ingredientTypeOptions}
            value={ingredientType}
            onChange={setIngredientType}
            last
          />
        </div>

        <div className="mb-6 mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-forest">{filteredEntries.length}</span> of{" "}
            {entries.length} entries
          </p>
          {(tradition !== "All" || purpose !== "All" || ingredientType !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-forest underline decoration-gold underline-offset-4"
            >
              Clear all filters
            </button>
          )}
        </div>

        {entriesLoading ? (
          <div className="parchment-card rounded-lg p-10 text-center">
            <Leaf className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-2xl text-forest">Gathering the root archive</h2>
            <p className="mt-2 text-sm text-muted-foreground">Unrolling the plant scrolls for you.</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="parchment-card rounded-lg p-10 text-center">
            <Leaf className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-2xl text-forest">New roots are being gathered</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fresh entries are on the way—check back soon for more plants and traditions.
            </p>
          </div>
        ) : filteredEntries.length ? (
          <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredEntries.map((entry) => (
              <RootCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <div className="parchment-card rounded-lg p-10 text-center">
            <Leaf className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-2xl text-forest">No leaves on this branch yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">Try broadening one of the filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment"
            >
              Show every entry
            </button>
          </div>
        )}

        <aside className="mt-12 rounded-lg border border-gold/40 bg-forest px-5 py-6 text-parchment md:px-8">
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <div>
              <h2 className="font-display text-xl">Study with care</h2>
              <p className="mt-2 text-sm leading-6 text-parchment/75">
                These entries are cultural and historical education, not medical advice. Traditions
                are not interchangeable; learn from practitioners within each lineage, verify plant
                identity, and consult a qualified clinician before ingesting herbs or combining them
                with medication.
              </p>
            </div>
          </div>
        </aside>

        <CulturalBooksSection />
        <BookOfWritzSection />
        <SubscriberRecipesSection />
        <PdfStoreSection />
      </section>
    </main>
  );
}

function CulturalBooksSection() {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Cultural healing books
        </p>
        <h2 className="mt-2 font-display text-3xl text-forest">Tradition by tradition</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {culturalBooks.map((book) => (
          <article key={book.slug} className="parchment-card overflow-hidden rounded-lg">
            <div className="grid gap-4 md:grid-cols-[180px_1fr]">
              <img src={book.coverImage} alt="" className="h-full min-h-52 w-full object-cover" />
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {book.tradition}
                </div>
                <h3 className="mt-1 font-display text-2xl text-forest">{book.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{book.origin}</p>
                <p className="mt-3 text-sm leading-6">{book.overview}</p>
                <MiniList label="Key herbs" items={book.herbs} />
                <MiniList label="Used for" items={book.conditions} />
                <details className="mt-4 rounded-md border border-gold/35 bg-parchment/60">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-sm font-semibold text-forest">
                    Evidence / proof of concept
                    <ChevronDown className="h-4 w-4" />
                  </summary>
                  <ul className="space-y-2 border-t border-gold/25 px-3 py-3 text-sm text-muted-foreground">
                    {book.evidence.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </details>
                <Link
                  to="/product/$slug"
                  params={{ slug: book.pdfProductSlug }}
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment"
                >
                  <Download className="h-4 w-4" />
                  PDF download option
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MiniList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-3 text-sm">
      <span className="font-semibold text-forest">{label}: </span>
      <span className="text-muted-foreground">{items.join(", ")}</span>
    </div>
  );
}

function BookOfWritzSection() {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Book of Writz</p>
        <h2 className="mt-2 font-display text-3xl text-forest">
          Natural medicine and sacred plant reference
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          An alphabetized educational reference of natural medicines, healing plants, sacred herbs,
          ritual ingredients, fungi, resins, and minerals documented across human history. Entries
          preserve cultural origin, avoid synthetic compounds, and mark modern scientific validation
          where it exists.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {bookOfWritzEntries.map((entry) => (
          <article
            key={entry.name}
            className="rounded-lg border border-gold/30 bg-parchment/70 p-4"
          >
            <div className="flex flex-wrap items-start gap-4">
              <div className="relative h-20 w-20 flex-none overflow-hidden rounded-md border border-gold/30 bg-parchment/60">
                <img
                  src={writzImageUrlFromName(entry.name)}
                  alt={entry.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = fallbackImageForWritzEntryForm(entry.formUsed);
                  }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-forest">{entry.name}</h3>
                  {entry.validated && (
                    <span className="rounded-full bg-forest px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-parchment">
                      Modern validation
                    </span>
                  )}
                </div>

                <dl className="mt-3 space-y-2 text-sm leading-6">
                  <div>
                    <dt className="inline font-semibold text-forest">Origin culture: </dt>
                    <dd className="inline text-muted-foreground">{entry.originCulture}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-forest">Traditional use: </dt>
                    <dd className="inline text-muted-foreground">{entry.traditionalUse}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-forest">
                      Proven or documented significance:{" "}
                    </dt>
                    <dd className="inline text-muted-foreground">{entry.significance}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-forest">Form used: </dt>
                    <dd className="inline text-muted-foreground">{entry.formUsed}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SubscriberRecipesSection() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setUnlocked(localStorage.getItem("ha_recipe_subscriber") === "1");
  }, []);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, source: "subscriber-recipes" }),
    });
    const data = (await response.json().catch(() => ({}))) as { message?: string };
    if (response.ok) {
      localStorage.setItem("ha_recipe_subscriber", "1");
      setUnlocked(true);
      setMessage(data.message || "Subscriber recipes unlocked.");
      return;
    }
    setMessage(data.message || "Could not unlock recipes.");
  }

  return (
    <section className="mt-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Subscriber recipes
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest">Cultural recipe archive</h2>
        </div>
        {!unlocked && (
          <form onSubmit={unlock} className="flex w-full gap-2 sm:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="subscriber@email.com"
              className="min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-forest"
            />
            <button className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment">
              Unlock
            </button>
          </form>
        )}
      </div>
      {message && <p className="mb-4 text-sm font-semibold text-forest">{message}</p>}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {culturalBooks.map((book) => (
          <article key={book.slug} className="rounded-lg border border-gold/30 bg-parchment/70 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
              {!unlocked && <Lock className="h-3.5 w-3.5" />}
              {book.tradition}
            </div>
            <h3 className="mt-2 font-display text-xl text-forest">{book.subscriberRecipe.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{book.subscriberRecipe.preview}</p>
            {unlocked ? (
              <p className="mt-3 text-sm leading-6">{book.subscriberRecipe.full}</p>
            ) : (
              <div className="mt-3 rounded-md border border-gold/30 bg-forest/5 p-3 text-sm text-muted-foreground">
                Subscribe to unlock the full preparation notes.
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function PdfStoreSection() {
  const { add } = useCart();
  const [addedSlug, setAddedSlug] = useState("");
  const { products, loading } = useLiveProducts();
  const books = culturalBooks.flatMap((book): { book: CulturalBook; product: Product }[] => {
    const product = products.find((item) => item.slug === book.pdfProductSlug);
    return product ? [{ book, product }] : [];
  });

  function buy(slug: string) {
    add(slug, 1);
    setAddedSlug(slug);
  }

  return (
    <section className="mt-12">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Booklet store</p>
        <h2 className="mt-2 font-display text-3xl text-forest">PDF shelves</h2>
      </div>
      <div className="mb-5 grid gap-3 md:grid-cols-3">
        <CategoryShelf title="By tradition" items={pdfStoreCategories.tradition} />
        <CategoryShelf title="By purpose" items={pdfStoreCategories.purpose} />
        <CategoryShelf title="By ingredient type" items={pdfStoreCategories.ingredientType} />
      </div>
      {loading ? (
        <div className="parchment-card rounded-lg p-8 text-center">
          <p className="font-display text-xl text-forest">Loading PDF shelves...</p>
          <p className="mt-2 text-sm text-muted-foreground">Pulling the latest booklets onto the shelf.</p>
        </div>
      ) : books.length === 0 ? (
        <div className="parchment-card rounded-lg p-8 text-center">
          <p className="font-display text-xl text-forest">New booklets are coming soon.</p>
          <p className="mt-2 text-sm text-muted-foreground">Our cultural recipe PDFs are being prepared—check back shortly.</p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {books.map(({ book, product }) => (
          <article key={product.slug} className="parchment-card overflow-hidden rounded-lg">
            <img src={book.coverImage} alt="" className="aspect-[4/3] w-full object-cover" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl leading-tight text-forest">{product.name}</h3>
                <span className="font-semibold text-forest">${product.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{product.short}</p>
              <div className="mt-3 rounded-md border border-gold/30 bg-parchment/70 p-3 text-xs leading-5 text-muted-foreground">
                <FileText className="mb-2 h-4 w-4 text-gold" />
                Free first page: {book.firstPagePreview}
              </div>
              <div className="mt-3 rounded-md bg-forest/5 p-3 text-xs text-muted-foreground">
                Full content unlocks after purchase.
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => buy(product.slug)}
                  className="rounded-md bg-forest px-3 py-2 text-sm font-semibold text-parchment"
                >
                  Buy PDF
                </button>
                <Link
                  to="/cart"
                  className="rounded-md border border-gold/40 px-3 py-2 text-center text-sm font-semibold text-forest"
                >
                  Satchel
                </Link>
              </div>
              {addedSlug === product.slug && (
                <p className="mt-2 text-xs font-semibold text-forest">Added to satchel.</p>
              )}
            </div>
          </article>
          ))}
        </div>
      )}
    </section>
  );
}

function CategoryShelf({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-lg border border-gold/30 bg-parchment/70 p-4">
      <div className="font-display text-lg text-forest">{title}</div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-forest/10 px-2.5 py-1 text-xs text-forest">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FilterBar({
  label,
  options,
  value,
  onChange,
  last = false,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  last?: boolean;
}) {
  return (
    <fieldset className={last ? "" : "mb-5 border-b border-gold/25 pb-5"}>
      <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              value === option
                ? "border-forest bg-forest text-parchment shadow-sm"
                : "border-gold/40 bg-parchment/60 text-forest hover:border-gold hover:bg-parchment-dark/40"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function RootCard({ entry }: { entry: BookOfRootsEntry }) {
  const [showNotify, setShowNotify] = useState(false);
  const image = entry.image_url || fallbackImage(entry.ingredient_type);

  return (
    <article className="parchment-card overflow-hidden rounded-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-forest/10">
        <img
          src={image}
          alt={entry.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-gold/60 bg-forest/90 px-3 py-1 text-[11px] uppercase tracking-wider text-parchment">
          {entry.ingredient_type}
        </span>
      </div>
      <div className="p-5">
        <h2 className="font-display text-2xl text-forest">{entry.name}</h2>
        <TagGroup items={entry.traditions} variant="tradition" />
        <TagGroup items={entry.purposes} variant="purpose" />
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{entry.description}</p>

        <details className="group mt-5 rounded-md border border-gold/35 bg-parchment/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-forest">
            How to Use
            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <p className="border-t border-gold/25 px-4 py-3 text-sm leading-6 text-muted-foreground">
            {entry.how_to_use}
          </p>
        </details>

        <div className="mt-5">
          {entry.product_slug ? (
            <Link
              to="/product/$slug"
              params={{ slug: entry.product_slug }}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-parchment transition hover:bg-forest/90"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop This Ingredient
            </Link>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowNotify((current) => !current)}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-forest px-4 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-parchment"
              >
                <Bell className="h-4 w-4" />
                Notify Me When Available
              </button>
              {showNotify && <NotifyForm ingredient={entry.name} />}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

function TagGroup({ items, variant }: { items: string[]; variant: "tradition" | "purpose" }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
            variant === "tradition" ? "bg-forest/10 text-forest" : "bg-gold/20 text-gold-foreground"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function NotifyForm({ ingredient }: { ingredient: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/book-of-roots/notify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, ingredient }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Could not save your request.");
      setMessage(data.message || "You are on the list.");
      setStatus("sent");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not save your request.");
      setStatus("error");
    }
  }

  if (status === "sent") return <p className="mt-3 text-sm font-semibold text-forest">{message}</p>;

  return (
    <form onSubmit={submit} className="mt-3 space-y-2">
      <label htmlFor={`notify-${ingredient}`} className="sr-only">
        Email address
      </label>
      <input
        id={`notify-${ingredient}`}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-forest"
      />
      <button
        disabled={status === "sending"}
        className="w-full rounded-md bg-forest px-3 py-2 text-sm font-semibold text-parchment disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Join the waitlist"}
      </button>
      {status === "error" && <p className="text-xs text-destructive">{message}</p>}
    </form>
  );
}

function writzImageUrlFromName(name: string) {
  return `/images/ingredients/${kebabCase(name)}.jpg`;
}

function fallbackImageForWritzEntryForm(formUsed: string) {
  const f = formUsed.toLowerCase();
  if (f.includes("flower") || f.includes("petal")) return flowersImg;
  if (f.includes("oil") || f.includes("essential")) return oilsImg;
  if (f.includes("tea")) return oilsImg; // best-effort; most teas ship under herbs/oils category images
  if (f.includes("resin") || f.includes("tincture") || f.includes("elixir")) return oilsImg;
  return herbsImg;
}

function kebabCase(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function fallbackImage(ingredientType: string) {
  if (ingredientType === "Flowers") return flowersImg;
  if (ingredientType === "Oils") return oilsImg;
  return herbsImg;
}
