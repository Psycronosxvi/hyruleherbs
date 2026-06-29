globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-vJNXOq9X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"751-hQ68CYZTFFQMlGPOXTcla6j66LA\"",
		"mtime": "2026-06-29T03:27:45.115Z",
		"size": 1873,
		"path": "../client/assets/about-vJNXOq9X.js"
	},
	"/assets/account-BU6EIpus.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9e-7k2r9W5nn5TQIvp3BuGkWKBeuLQ\"",
		"mtime": "2026-06-29T03:27:45.115Z",
		"size": 7070,
		"path": "../client/assets/account-BU6EIpus.js"
	},
	"/assets/book-of-roots-BecEbFp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee88-ddWv4rwuHWuhL1fD5I4gzRngszs\"",
		"mtime": "2026-06-29T03:27:45.115Z",
		"size": 61064,
		"path": "../client/assets/book-of-roots-BecEbFp_.js"
	},
	"/assets/book-open-D4Uq009i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-cPS0MNkjqRwCjFx8sxFvhGROaro\"",
		"mtime": "2026-06-29T03:27:45.115Z",
		"size": 268,
		"path": "../client/assets/book-open-D4Uq009i.js"
	},
	"/assets/careers-C3Xks4o8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ad9-7CR4LGrvns/VUtf28tRXQCrp138\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 6873,
		"path": "../client/assets/careers-C3Xks4o8.js"
	},
	"/assets/cart-41ibV92R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c7-75KvqmQcoMnI0Wh62kuAQ2+txNc\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 5063,
		"path": "../client/assets/cart-41ibV92R.js"
	},
	"/assets/cat-flowers-BsrzwQRG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d4c7-K2N4wun3yMRDF3FjWh2KbPYyXb0\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 120007,
		"path": "../client/assets/cat-flowers-BsrzwQRG.jpg"
	},
	"/assets/cat-herbs-BfWvkTIP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1323a-H0AqUXTWzMOUUm5wKjaIhldfjRI\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 78394,
		"path": "../client/assets/cat-herbs-BfWvkTIP.jpg"
	},
	"/assets/cat-kits-DzYLH2Zf.jpg": {
		"type": "image/jpeg",
		"etag": "\"15c62-erk6RjulMc5nJ2jJOROTRFmVT4A\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 89186,
		"path": "../client/assets/cat-kits-DzYLH2Zf.jpg"
	},
	"/assets/cat-oils-DtJMbh37.jpg": {
		"type": "image/jpeg",
		"etag": "\"15ef6-FpCqHt4pzb3wZa2dKzjd0M0v6yo\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 89846,
		"path": "../client/assets/cat-oils-DtJMbh37.jpg"
	},
	"/assets/cat-teas-CisC-6TL.jpg": {
		"type": "image/jpeg",
		"etag": "\"15fda-fmHvavGsQ7w6oe27pQjjZK2Q2+E\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 90074,
		"path": "../client/assets/cat-teas-CisC-6TL.jpg"
	},
	"/assets/file-text-CMBqSiW6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"263-oyuarm5gz3yn4CDJSBJwHbW8Wgw\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 611,
		"path": "../client/assets/file-text-CMBqSiW6.js"
	},
	"/assets/cat-tinctures-nu5luYGH.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d36-Pmy5mNqNoR9rThixtm5HHwJuyg0\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 93494,
		"path": "../client/assets/cat-tinctures-nu5luYGH.jpg"
	},
	"/assets/hero-apothecary-BOUIDkAR.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ac09-6vrDeEVs7dqdxnOGHMKing3pO64\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 240649,
		"path": "../client/assets/hero-apothecary-BOUIDkAR.jpg"
	},
	"/assets/join-DzLNde1r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dc-0zVvv/XyuiJmueZ/xXEuZz3OEjg\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 1244,
		"path": "../client/assets/join-DzLNde1r.js"
	},
	"/assets/jsx-runtime-DUAcabCT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42a-6CWT3JsIzkgrrMo5qQ6L1UWEbvM\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 1066,
		"path": "../client/assets/jsx-runtime-DUAcabCT.js"
	},
	"/assets/leaf-gVr1V7nj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-nnPRxDZ8I0dlKmeSWQnTlbyC5Mc\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 254,
		"path": "../client/assets/leaf-gVr1V7nj.js"
	},
	"/assets/link-8bud9NQ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6890-gqgnTJkPogIdR3URQ/rqcsy43IA\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 26768,
		"path": "../client/assets/link-8bud9NQ9.js"
	},
	"/assets/lock-CCqrqFeb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-SRTgc+c+QKad20/fEj7aNAnQgVY\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 374,
		"path": "../client/assets/lock-CCqrqFeb.js"
	},
	"/assets/logo-crest-DsdeJ21C.jpg": {
		"type": "image/jpeg",
		"etag": "\"30337-/kOOzQ3ZkHgLDATR76kaQX6KJaU\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 197431,
		"path": "../client/assets/logo-crest-DsdeJ21C.jpg"
	},
	"/assets/minus-VtsGNqM9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a-WIQlAlP+VCJ0PIMyNu1EUM45x+E\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 106,
		"path": "../client/assets/minus-VtsGNqM9.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"29-dhpfRqlJKbts1JRy4qmglCSclTY\"",
		"mtime": "2026-06-29T03:27:46.167Z",
		"size": 41,
		"path": "../client/robots.txt"
	},
	"/assets/index-ByakYuag.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65a95-+ZhibrOFJ48iYvi2cX/brvJpLVM\"",
		"mtime": "2026-06-29T03:27:45.115Z",
		"size": 416405,
		"path": "../client/assets/index-ByakYuag.js"
	},
	"/assets/nightbloom-DwWRTBKK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dfa-rpy++wdsC461D2dkSG1Ilbh8JC0\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 3578,
		"path": "../client/assets/nightbloom-DwWRTBKK.js"
	},
	"/assets/oracle-yAZLJ2yP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ae9-8xch6KAOI34EPJGZTPdQke/oykk\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 6889,
		"path": "../client/assets/oracle-yAZLJ2yP.js"
	},
	"/assets/plus-C4reUJBo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-OibknfbRCw8XWI/M3Ee81OgLQWY\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 142,
		"path": "../client/assets/plus-C4reUJBo.js"
	},
	"/assets/product-card-BQdTYfpz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"874-G8pdi9taF7QDXUijIsVOVDo2zug\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 2164,
		"path": "../client/assets/product-card-BQdTYfpz.js"
	},
	"/assets/product._slug--BOuSWIB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-CSMqxo867WhiORsEZdzo6PFzw+0\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 426,
		"path": "../client/assets/product._slug--BOuSWIB.js"
	},
	"/assets/product._slug-Cf1_84RV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a1-6Ce52BxFm1GIrqf0yS0jAR4vdhg\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 6049,
		"path": "../client/assets/product._slug-Cf1_84RV.js"
	},
	"/assets/product._slug-XUfW_Y0G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-FffuCZiPBudh67jLwwHGtOySovg\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 261,
		"path": "../client/assets/product._slug-XUfW_Y0G.js"
	},
	"/assets/react-DbyrFoBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-mi2wZUq39ijUTZDJBuXqznfenBA\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 7527,
		"path": "../client/assets/react-DbyrFoBd.js"
	},
	"/assets/routes-BSNS_3ob.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a0-EaIB0LN4a8E7irRvcXVICXVyT0M\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 5536,
		"path": "../client/assets/routes-BSNS_3ob.js"
	},
	"/assets/shop-NGgmGjkr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd6-r02/QBwLjPSdYVgYrah6gx5p3Iw\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 3286,
		"path": "../client/assets/shop-NGgmGjkr.js"
	},
	"/assets/shopping-bag-BgwDlq8t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"149-9CTQFandhyw8ENwVOgb9syrMgj8\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 329,
		"path": "../client/assets/shopping-bag-BgwDlq8t.js"
	},
	"/assets/signin-DtTdtXJq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbc-rPwKBM05E+cCy6EDLPrNObI6SEs\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 3004,
		"path": "../client/assets/signin-DtTdtXJq.js"
	},
	"/assets/styles-VthvloAO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19355-+4NQSj+dCsdGyBKkwVyfmXhbHSo\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 103253,
		"path": "../client/assets/styles-VthvloAO.css"
	},
	"/assets/nightbloom-BCob8UA3.jpg": {
		"type": "image/jpeg",
		"etag": "\"3cbc9-xrx3xnRqPv+8yc6PUZgLxJfRsog\"",
		"mtime": "2026-06-29T03:27:45.127Z",
		"size": 248777,
		"path": "../client/assets/nightbloom-BCob8UA3.jpg"
	},
	"/assets/office-DV07wyYB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6600d-d8gqZ0BesRTwVPsNBNdnMdprC8w\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 417805,
		"path": "../client/assets/office-DV07wyYB.js"
	},
	"/assets/Herb Moon Caravan (1)-DEpzGz1I.mp3": {
		"type": "audio/mpeg",
		"etag": "\"5259fd-QQzDiogJTTPF8k11kVnBunCulb4\"",
		"mtime": "2026-06-29T03:27:45.119Z",
		"size": 5396989,
		"path": "../client/assets/Herb Moon Caravan (1)-DEpzGz1I.mp3"
	},
	"/assets/Herb Moon Caravan-DQCwYu2J.mp3": {
		"type": "audio/mpeg",
		"etag": "\"4c5e06-ysE4OA1cxt09EGYpjRCDUo+vfRU\"",
		"mtime": "2026-06-29T03:27:45.123Z",
		"size": 5004806,
		"path": "../client/assets/Herb Moon Caravan-DQCwYu2J.mp3"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_lru-cache@11.5.1_miniflare@4.20260625.0_2cd6d201fda5f50f7611cd5a26383f97/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_4i5Anp = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_4i5Anp
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_lru-cache@11.5.1_miniflare@4.20260625.0_2cd6d201fda5f50f7611cd5a26383f97/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_lru-cache@11.5.1_miniflare@4.20260625.0_2cd6d201fda5f50f7611cd5a26383f97/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_lru-cache@11.5.1_miniflare@4.20260625.0_2cd6d201fda5f50f7611cd5a26383f97/node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_lru-cache@11.5.1_miniflare@4.20260625.0_2cd6d201fda5f50f7611cd5a26383f97/node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
