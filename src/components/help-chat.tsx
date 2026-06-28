import { useEffect, useMemo, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";

type Role = "member" | "agent" | "system";
type Msg = { id: string; role: Role; text: string; ts: number };

const LS_KEY = "ha_helpchat_dismissed_v1";

function getCstLocalParts(d: Date) {
  // America/Chicago == CST/CDT depending on DST; acceptable for “CST” requirement in practice.
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hour12: false,
  });

  const parts = fmt.formatToParts(d);
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;

  // weekday like Mon..Sun
  const weekday = map.weekday;
  const hour = Number(map.hour);
  const minute = Number(map.minute);
  return { weekday, hour, minute };
}

function isAgentAvailableNow(now = new Date()) {
  const { weekday, hour } = getCstLocalParts(now);

  const allowedDays = new Set(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
  if (!allowedDays.has(weekday)) return false;

  // 10:00 to 22:00 inclusive start; exclusive end at 22:00+
  if (hour < 10) return false;
  if (hour >= 22) return false;
  return true;
}

function formatAgentReply(userText: string) {
  const t = userText.toLowerCase();
  if (t.includes("shipping") || t.includes("ship") || t.includes("delivery")) {
    return "For shipping times, we usually dispatch quickly after your order. If you share your order number (if you have one), I’ll point you to the latest status.";
  }
  if (t.includes("refund") || t.includes("return")) {
    return "Returns and remedies are handled with care. Tell me what you’d like to return (and why), and I’ll guide you through the next steps.";
  }
  if (t.includes("ingredients") || t.includes("allergy") || t.includes("allerg")) {
    return "Thanks for checking! Share the product name(s) and any sensitivities, and I’ll help you interpret ingredients and suitability.";
  }
  return "Absolutely—what would you like to know? If you mention the product name, I’ll respond with the best guidance I can.";
}

function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

export function HelpChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [dismissed, setDismissed] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      id: "sys-welcome",
      role: "system",
      text: "Welcome to Hyrule Apothecary support. Ask a question and we’ll help as quickly as we can.",
      ts: Date.now(),
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const available = useMemo(() => isAgentAvailableNow(), []);

  useEffect(() => {
    const onOpen = (_e: Event) => {
      if (dismissed) return;
      setOpen(true);
    };
    const onClose = (_e: Event) => setOpen(false);

    window.addEventListener("ha_helpchat_open", onOpen);
    window.addEventListener("ha_helpchat_close", onClose);
    return () => {
      window.removeEventListener("ha_helpchat_open", onOpen);
      window.removeEventListener("ha_helpchat_close", onClose);
    };
  }, [dismissed]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const v = localStorage.getItem(LS_KEY);
    if (v) setDismissed(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [open, messages]);

  const status = available ? "Connected" : "Offline";
  const statusLine = available
    ? "We’re available right now (Mon–Sun, 10am–10pm CST)."
    : "Our apothecary is currently offline. Leave a message and we’ll reply soon.";

  const send = () => {
    const text = input.trim();
    if (!text) return;

    const memberMsg: Msg = { id: makeId("m"), role: "member", text, ts: Date.now() };
    setMessages((prev: Msg[]) => [...prev, memberMsg]);
    setInput("");

    if (available) {
      const agentMsg: Msg = {
        id: makeId("a"),
        role: "agent",
        text: formatAgentReply(text),
        ts: Date.now() + 250,
      };
      window.setTimeout(() => setMessages((prev: Msg[]) => [...prev, agentMsg]), 350);
    } else {
      const systemMsg: Msg = {
        id: makeId("o"),
        role: "system",
        text: "Message received. We’ll reply soon during apothecary hours.",
        ts: Date.now() + 200,
      };
      window.setTimeout(() => setMessages((prev: Msg[]) => [...prev, systemMsg]), 450);
    }
  };

  const close = () => {
    setOpen(false);
  };

  const dismissPermanently = () => {
    localStorage.setItem(LS_KEY, "1");
    setDismissed(true);
    setOpen(false);
  };

  // Not floating: in-flow panel anchored to where it renders (root layout under header/main/footer).
  return (
    <section className="w-full">
      {/* Inline open toggle lives in header/footer; this keeps the panel present but collapsed when closed */}
      {open && (
        <div className="mx-auto max-w-7xl px-4 pb-6 md:pb-8">
          <div className="parchment-card rounded-lg border-gold/40 p-4 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <div className="font-display font-semibold text-forest">Help & Live Chat</div>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-forest">{status}.</span> {statusLine}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={dismissPermanently}
                  className="rounded-md border border-gold/50 px-2.5 py-1 text-xs text-forest hover:bg-parchment-dark/40"
                >
                  Dismiss
                </button>
                <button
                  onClick={close}
                  aria-label="Close chat"
                  className="rounded-full p-2 hover:bg-parchment-dark/40"
                >
                  <X className="h-4 w-4 text-forest" />
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-md border border-border/60 bg-parchment-dark/20">
              <div className="h-[260px] overflow-auto p-3 md:p-4">
                {messages.map((msg: Msg) => (
                  <div
                    key={msg.id}
                    className={[
                      "mb-2 last:mb-0",
                      msg.role === "member" ? "text-right" : "text-left",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "inline-block rounded-lg px-3 py-2",
                        msg.role === "member"
                          ? "bg-forest/15 text-forest border border-gold/30"
                          : msg.role === "agent"
                            ? "bg-parchment-dark/35 text-forest border border-gold/30"
                            : "bg-transparent text-muted-foreground",
                      ].join(" ")}
                    >
                      <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                    </div>
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>

              <div className="border-t border-border/60 p-3 md:p-4">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput((e.target as HTMLInputElement).value)}
                    onKeyDown={(e) => {
                      if ((e as KeyboardEvent).key === "Enter") send();
                    }}
                    placeholder={available ? "Type your question…" : "Leave a message…"}
                    className="flex-1 rounded-md border border-gold/40 bg-background/40 px-3 py-2 text-sm text-forest placeholder:text-forest/70 outline-none focus:ring-2 focus:ring-ring/60"
                    aria-label="Message input"
                  />
                  <button
                    onClick={send}
                    className="inline-flex items-center justify-center rounded-md bg-forest px-3 py-2 text-sm font-semibold text-parchment hover:bg-forest/90"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </button>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {available ? "We’ll respond instantly with a helpful reply (mock)." : "Your message is saved locally (mock)."}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* If dismissed, do not render panel at all */}
      {dismissed && null}
    </section>
  );
}
