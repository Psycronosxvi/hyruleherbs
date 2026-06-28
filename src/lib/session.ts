import { useEffect, useState } from "react";

export type Session = {
  authenticated: boolean;
  email: string | null;
  name: string | null;
  picture: string | null;
  isPresident: boolean;
  role?: string;
  rupees?: number;
  referralCode?: string | null;
  officeTabs?: string[];
};

let cached: Session | undefined;
let inflight: Promise<Session> | undefined;
const listeners = new Set<(s: Session) => void>();

async function fetchSession(): Promise<Session> {
  if (inflight) return inflight;
  inflight = (async () => {
    try {
      const res = await fetch("/api/session", { credentials: "same-origin" });
      if (!res.ok) throw new Error(`session ${res.status}`);
      const data = (await res.json()) as Session;
      cached = data;
      return data;
    } catch {
      const fallback: Session = {
        authenticated: false,
        email: null,
        name: null,
        picture: null,
        isPresident: false,
      };
      cached = fallback;
      return fallback;
    } finally {
      inflight = undefined;
    }
  })();
  return inflight;
}

/** Subscribe to the current Google session. Returns undefined while loading. */
export function useSession(): Session | undefined {
  const [state, setState] = useState<Session | undefined>(cached);

  useEffect(() => {
    let active = true;
    listeners.add(setState);
    if (!cached) {
      fetchSession().then((s) => {
        if (active) setState(s);
        listeners.forEach((l) => l(s));
      });
    }
    return () => {
      active = false;
      listeners.delete(setState);
    };
  }, []);

  return state;
}

/** Force a refetch of the session (e.g. after sign out). */
export async function refreshSession() {
  cached = undefined;
  const next = await fetchSession();
  listeners.forEach((l) => l(next));
  return next;
}
