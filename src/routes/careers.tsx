import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, Briefcase, X } from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
};

const jobs: Job[] = [
  {
    id: "head-herbalist",
    title: "Head Herbalist",
    department: "Apothecary",
    location: "Hyrule Town",
    type: "Full-time",
    description:
      "Lead our blending team in formulating new tinctures and teas, with deep knowledge of Western and Eastern herbal traditions.",
    responsibilities: [
      "Formulate small-batch tinctures and teas",
      "Mentor junior herbalists",
      "Source sustainable ingredients",
    ],
  },
  {
    id: "warehouse-lead",
    title: "Warehouse & Fulfillment Lead",
    department: "Operations",
    location: "Hyrule Town",
    type: "Full-time",
    description:
      "Manage inbound stock, fulfillment workflows, and a small team. You keep the satchels of the realm packed and shipped.",
    responsibilities: [
      "Oversee daily fulfillment",
      "Manage inventory accuracy",
      "Lead a 4-person pack team",
    ],
  },
  {
    id: "customer-care",
    title: "Customer Care Companion",
    department: "Support",
    location: "Remote",
    type: "Part-time",
    description:
      "Be the warm voice of the apothecary across email, chat, and the occasional handwritten note.",
    responsibilities: [
      "Reply within 24 hours",
      "Resolve order issues with grace",
      "Document common questions",
    ],
  },
  {
    id: "ecom-designer",
    title: "Brand & Web Designer",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Shape the visual storytelling of every label, page, and seasonal release.",
    responsibilities: [
      "Design seasonal campaigns",
      "Maintain brand system",
      "Collaborate with herbalists on packaging",
    ],
  },
  {
    id: "field-forager",
    title: "Field Forager (Seasonal)",
    department: "Sourcing",
    location: "Faron / Akkala Region",
    type: "Seasonal",
    description:
      "Ethically wildcraft and document seasonal flora. Boots-on-the-ground role for the botanically obsessed.",
    responsibilities: [
      "Identify and harvest target species",
      "Maintain harvest logs",
      "Coordinate with the dry-room",
    ],
  },
  {
    id: "office-manager",
    title: "Royal Office Manager",
    department: "Operations",
    location: "Hyrule Town",
    type: "Full-time",
    description:
      "Run the back-office: scheduling, hiring coordination, and keeping the entire guild moving in one direction.",
    responsibilities: [
      "Coordinate hiring pipelines",
      "Vendor management",
      "Support leadership team",
    ],
  },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Join the Guild — Careers at Hyrule Apothecary" },
      {
        name: "description",
        content:
          "Open roles at Hyrule Apothecary: herbalists, fulfillment leads, designers, foragers, and more.",
      },
      { property: "og:title", content: "Join the Guild — Hyrule Apothecary Careers" },
      {
        property: "og:description",
        content: "Open roles across our apothecary, warehouse, and creative teams.",
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  const [active, setActive] = useState<Job | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submitApplication(event: React.FormEvent<HTMLFormElement>, job: Job) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          full_name: form.get("full_name"),
          email: form.get("email"),
          portfolio_url: form.get("portfolio_url"),
          message: form.get("message"),
          job_id: job.id,
          job_title: job.title,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { message?: string };
      if (!response.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="dark-page mx-auto max-w-5xl px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">— Now Recruiting —</p>
        <h1 className="font-display text-4xl md:text-5xl text-forest">Join the Guild</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          We're hiring across the apothecary, the warehouse, the office, and the field. Every role
          keeps the realm well-stocked.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="parchment-card rounded-lg p-6">
            <div className="text-xs uppercase tracking-widest text-gold mb-2">{job.department}</div>
            <h3 className="font-display text-xl text-forest">{job.title}</h3>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-1">
                <Briefcase className="h-3 w-3" />
                {job.department}
              </span>
            </div>
            <p className="mt-3 text-sm text-foreground/80 line-clamp-2">{job.description}</p>
            <button
              onClick={() => {
                setActive(job);
                setSubmitted(false);
                setError("");
              }}
              className="mt-4 inline-flex rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment hover:bg-forest/90"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-forest/40 backdrop-blur-sm p-4">
          <div className="parchment-card relative w-full max-w-lg rounded-lg p-7 md:p-9 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-parchment-dark/60"
            >
              <X className="h-4 w-4" />
            </button>
            {!submitted ? (
              <>
                <div className="text-xs uppercase tracking-widest text-gold mb-1">
                  {active.department}
                </div>
                <h2 className="font-display text-2xl text-forest">{active.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{active.description}</p>
                <h3 className="mt-4 text-xs uppercase tracking-widest text-gold">What you'll do</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  {active.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-gold">◆</span>
                      {r}
                    </li>
                  ))}
                </ul>
                <form onSubmit={(e) => void submitApplication(e, active)} className="mt-6 space-y-3">
                  <input
                    required
                    name="full_name"
                    placeholder="Full name"
                    className="w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                  <input
                    name="portfolio_url"
                    placeholder="Link to portfolio or resume"
                    className="w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                  <textarea
                    required
                    name="message"
                    placeholder="Why this role calls to you"
                    rows={4}
                    className="w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                  {error && (
                    <p className="rounded-md border border-destructive/40 px-3 py-2 text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-md bg-forest px-4 py-2.5 font-semibold text-parchment hover:bg-forest/90 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send application"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <h2 className="font-display text-2xl text-forest">Application received</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you. We read every one and reply within two weeks.
                </p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-5 rounded-md bg-forest px-5 py-2 text-sm font-semibold text-parchment hover:bg-forest/90"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
