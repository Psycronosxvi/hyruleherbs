import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-gold/40 bg-forest">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="font-display text-lg text-gold">Hyrule Apothecary</span>
          </div>
          <p className="text-sm text-[#e8dcc8] max-w-xs">
            Herbs, flowers, and remedies gathered from every corner of the realm. Brewed with care
            since the first age.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/shop" className="text-[#e8dcc8] hover:text-gold">
                All goods
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "tinctures" }} className="text-[#e8dcc8] hover:text-gold">
                Tinctures
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "teas" }} className="text-[#e8dcc8] hover:text-gold">
                Teas
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "kits" }} className="text-[#e8dcc8] hover:text-gold">
                Kits
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-3">
            The Guild
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-[#e8dcc8] hover:text-gold">
                Our lore
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-[#e8dcc8] hover:text-gold">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-3">
            Stay in touch
          </h4>
          <p className="text-sm text-[#e8dcc8] mb-3">
            Receive new batches, ingredient notes, and PDF book releases.
          </p>
          <NewsletterForm source="footer" />
        </div>
      </div>
      <div className="border-t border-gold/30 py-5 text-center text-xs text-[#c8bfa8]">
        © {new Date().getFullYear()} Hyrule Apothecary. In remembrance of Perry Hernandez, The Prime
        Minister of Limbo from Trinidad and Tobago. Fan-themed and original. Not affiliated with
        Nintendo.
      </div>
    </footer>
  );
}
