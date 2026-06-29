import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-1jcq4G_V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var cached;
var inflight;
var listeners = /* @__PURE__ */ new Set();
async function fetchSession() {
	if (inflight) return inflight;
	inflight = (async () => {
		try {
			const res = await fetch("/api/session", { credentials: "same-origin" });
			if (!res.ok) throw new Error(`session ${res.status}`);
			const data = await res.json();
			cached = data;
			return data;
		} catch {
			const fallback = {
				authenticated: false,
				email: null,
				name: null,
				picture: null,
				isPresident: false
			};
			cached = fallback;
			return fallback;
		} finally {
			inflight = void 0;
		}
	})();
	return inflight;
}
/** Subscribe to the current Google session. Returns undefined while loading. */
function useSession() {
	const [state, setState] = (0, import_react.useState)(cached);
	(0, import_react.useEffect)(() => {
		let active = true;
		listeners.add(setState);
		if (!cached) fetchSession().then((s) => {
			if (active) setState(s);
			listeners.forEach((l) => l(s));
		});
		return () => {
			active = false;
			listeners.delete(setState);
		};
	}, []);
	return state;
}
/** Force a refetch of the session (e.g. after sign out). */
async function refreshSession() {
	cached = void 0;
	const next = await fetchSession();
	listeners.forEach((l) => l(next));
	return next;
}
//#endregion
export { useSession as n, refreshSession as t };
