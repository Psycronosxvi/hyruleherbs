import { useState, type FormEvent } from "react";

type State = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ source = "footer" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "The list is resting. Try again in a moment.");
      }

      setState("success");
      setEmail("");
      setMessage(data.message || "You are on the list.");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error ? error.message : "The list is resting. Try again in a moment.",
      );
    }
  }

  return (
    <form onSubmit={subscribe} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@realm.com"
          className="min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest placeholder:text-forest/70 outline-none focus:border-gold"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="rounded-md bg-forest px-3 py-2 text-sm font-medium text-parchment hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? "Joining" : "Join"}
        </button>
      </div>
      {message && (
        <p className={`text-xs ${state === "error" ? "text-ember" : "text-forest"}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}
