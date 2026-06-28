import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SignupPopup } from "@/components/signup-popup";
import { AmbientMusic } from "@/components/ambient-music";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="parchment-card max-w-md rounded-lg p-10 text-center">
        <h1 className="font-display text-6xl text-forest">404</h1>
        <h2 className="mt-3 font-display text-xl text-forest">This path is off the map</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you seek has wandered into the Lost Woods.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-forest px-4 py-2 text-sm font-medium text-parchment hover:bg-forest/90"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="parchment-card max-w-md rounded-lg p-10 text-center">
        <h1 className="font-display text-xl text-forest">A spell misfired</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try once more, traveler.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-forest px-4 py-2 text-sm font-medium text-parchment hover:bg-forest/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-gold/50 px-4 py-2 text-sm font-medium text-forest hover:bg-parchment-dark/40"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies" },
      {
        name: "description",
        content:
          "A Zelda-inspired apothecary stocked with herbs, dried flowers, tinctures, teas, and essential oils. Small-batch remedies brewed with care.",
      },
      { property: "og:title", content: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies" },
      {
        property: "og:description",
        content:
          "A Zelda-inspired apothecary stocked with herbs, dried flowers, tinctures, teas, and essential oils. Small-batch remedies brewed with care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies" },
      {
        name: "twitter:description",
        content:
          "A Zelda-inspired apothecary stocked with herbs, dried flowers, tinctures, teas, and essential oils. Small-batch remedies brewed with care.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a1c46ba9-d792-46bb-a52c-723aec63384b",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a1c46ba9-d792-46bb-a52c-723aec63384b",
      },
      { name: "description", content: "A small-batch apothecary stocked with hundreds of dried herbs, wildflowers, hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label hand-sta" },
      { property: "og:description", content: "A small-batch apothecary stocked with hundreds of dried herbs, wildflowers, hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label hand-sta" },
      { name: "twitter:description", content: "A small-batch apothecary stocked with hundreds of dried herbs, wildflowers, hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label hand-sta" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/73180511-3a27-4f5f-bc68-395532092369" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/73180511-3a27-4f5f-bc68-395532092369" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const src = url.searchParams.get("src");
    const ref = url.searchParams.get("ref");
    if (src) {
      void fetch("/api/marketing/click", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ code: src }),
      });
    }
    if (ref) {
      void fetch("/api/referral/capture", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ code: ref }),
      });
    }
    void fetch("/api/announcement")
      .then((response) => response.json())
      .then((data) => setAnnouncement(typeof data.message === "string" ? data.message : ""))
      .catch(() => setAnnouncement(""));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          {announcement && (
            <div className="border-b border-gold/40 bg-forest px-4 py-2 text-center text-sm font-semibold text-parchment">
              {announcement}
            </div>
          )}
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <SignupPopup />
        <AmbientMusic />
      </CartProvider>
    </QueryClientProvider>
  );
}
