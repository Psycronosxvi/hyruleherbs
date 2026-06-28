import { readBrandLogo } from "@/lib/brand-assets";
import { useState, useEffect } from "react";
import crestLogo from "@/assets/logo-crest.jpg";

export function BrandMark() {
  const [logo, setLogo] = useState(crestLogo);

  useEffect(() => {
    const sync = () => setLogo(readBrandLogo() || crestLogo);
    sync();
    window.addEventListener("ha-brand-assets-updated", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("ha-brand-assets-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    // Replace the old “star/mark” look with the same crest image used as the global logo.
    <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-gold/70 bg-black/30 rune-glow">
      <img src={logo} alt="Hyrule Apothecary logo" className="h-full w-full object-cover" />
    </span>
  );
}
