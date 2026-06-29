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
	"/assets/about-DeOLZqNx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"751-lzczFZR3Td5m6QPtQ2tmRSyNm1I\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 1873,
		"path": "../client/assets/about-DeOLZqNx.js"
	},
	"/assets/account-Bw4EwxFJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9e-bRB4TD1orgyv6q8igWz1gkaZCq8\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 7070,
		"path": "../client/assets/account-Bw4EwxFJ.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"29-dhpfRqlJKbts1JRy4qmglCSclTY\"",
		"mtime": "2026-06-29T03:31:55.819Z",
		"size": 41,
		"path": "../client/robots.txt"
	},
	"/assets/book-of-roots-BHVUKr6J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12039-Ge0MlRM2+x6RAIwAeHk8mRw8ARM\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 73785,
		"path": "../client/assets/book-of-roots-BHVUKr6J.js"
	},
	"/assets/book-open-DGqTtY1c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-SnYAUQcnLb5ycKK/jbWDmJ8pz+s\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 268,
		"path": "../client/assets/book-open-DGqTtY1c.js"
	},
	"/assets/careers-Xt-1pFyS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ad9-zyjaV1XJDBZkLPDhMbK9Fb4dAyg\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 6873,
		"path": "../client/assets/careers-Xt-1pFyS.js"
	},
	"/assets/cart-CqiiW_d_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c7-TVof6ldOW09D2raovAn3WLGF+9M\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 5063,
		"path": "../client/assets/cart-CqiiW_d_.js"
	},
	"/assets/cat-flowers-BsrzwQRG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d4c7-K2N4wun3yMRDF3FjWh2KbPYyXb0\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 120007,
		"path": "../client/assets/cat-flowers-BsrzwQRG.jpg"
	},
	"/assets/cat-herbs-BfWvkTIP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1323a-H0AqUXTWzMOUUm5wKjaIhldfjRI\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 78394,
		"path": "../client/assets/cat-herbs-BfWvkTIP.jpg"
	},
	"/assets/cat-kits-DzYLH2Zf.jpg": {
		"type": "image/jpeg",
		"etag": "\"15c62-erk6RjulMc5nJ2jJOROTRFmVT4A\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 89186,
		"path": "../client/assets/cat-kits-DzYLH2Zf.jpg"
	},
	"/assets/cat-oils-DtJMbh37.jpg": {
		"type": "image/jpeg",
		"etag": "\"15ef6-FpCqHt4pzb3wZa2dKzjd0M0v6yo\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 89846,
		"path": "../client/assets/cat-oils-DtJMbh37.jpg"
	},
	"/assets/cat-teas-CisC-6TL.jpg": {
		"type": "image/jpeg",
		"etag": "\"15fda-fmHvavGsQ7w6oe27pQjjZK2Q2+E\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 90074,
		"path": "../client/assets/cat-teas-CisC-6TL.jpg"
	},
	"/assets/cat-tinctures-nu5luYGH.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d36-Pmy5mNqNoR9rThixtm5HHwJuyg0\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 93494,
		"path": "../client/assets/cat-tinctures-nu5luYGH.jpg"
	},
	"/assets/file-text-BhbbScj_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"263-SAa6x0mOkceS25EH/dVYXINw0AI\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 611,
		"path": "../client/assets/file-text-BhbbScj_.js"
	},
	"/assets/hero-apothecary-BOUIDkAR.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ac09-6vrDeEVs7dqdxnOGHMKing3pO64\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 240649,
		"path": "../client/assets/hero-apothecary-BOUIDkAR.jpg"
	},
	"/assets/index-B_vaZkLc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65a95-a0GFoHg3TjRhjSfCWt5sYj/iUNU\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 416405,
		"path": "../client/assets/index-B_vaZkLc.js"
	},
	"/assets/join-B1OKcOtY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dc-vnM2UfKJC4LBCTdhd36zKDGTMmU\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 1244,
		"path": "../client/assets/join-B1OKcOtY.js"
	},
	"/assets/ayurvedic-indian-medicine-Cr2gTj7H.png": {
		"type": "image/png",
		"etag": "\"138616-iaxRk5EEPiQdr4UrMT4RPAYX9RA\"",
		"mtime": "2026-06-29T03:31:54.875Z",
		"size": 1279510,
		"path": "../client/assets/ayurvedic-indian-medicine-Cr2gTj7H.png"
	},
	"/assets/cajun-folk-remedies-Bjc2xH1R.png": {
		"type": "image/png",
		"etag": "\"168cee-G4hP6q2uS2Sb+p6SUILkTSu1cbk\"",
		"mtime": "2026-06-29T03:31:54.875Z",
		"size": 1477870,
		"path": "../client/assets/cajun-folk-remedies-Bjc2xH1R.png"
	},
	"/assets/jsx-runtime-DUAcabCT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42a-6CWT3JsIzkgrrMo5qQ6L1UWEbvM\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 1066,
		"path": "../client/assets/jsx-runtime-DUAcabCT.js"
	},
	"/assets/leaf-BovEYWZ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-whGBgH7ZwvGzhW8TxkAcTDxPdPE\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 254,
		"path": "../client/assets/leaf-BovEYWZ0.js"
	},
	"/assets/link-8bud9NQ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6890-gqgnTJkPogIdR3URQ/rqcsy43IA\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 26768,
		"path": "../client/assets/link-8bud9NQ9.js"
	},
	"/assets/caribbean-rastafarian-herbalism-PUMDo5tX.png": {
		"type": "image/png",
		"etag": "\"159bd4-P5TVErLuwLm9bUBQ/hEIsD7i1xI\"",
		"mtime": "2026-06-29T03:31:54.875Z",
		"size": 1416148,
		"path": "../client/assets/caribbean-rastafarian-herbalism-PUMDo5tX.png"
	},
	"/assets/lock-nnbcTee8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-x2o5SDyDFP90taBc0n+6gEdIxOk\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 374,
		"path": "../client/assets/lock-nnbcTee8.js"
	},
	"/assets/logo-crest-DsdeJ21C.jpg": {
		"type": "image/jpeg",
		"etag": "\"30337-/kOOzQ3ZkHgLDATR76kaQX6KJaU\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 197431,
		"path": "../client/assets/logo-crest-DsdeJ21C.jpg"
	},
	"/assets/minus-CUbLYbAv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a-UhB77Hjcap62QXm2Brg4ytXEtXI\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 106,
		"path": "../client/assets/minus-CUbLYbAv.js"
	},
	"/assets/chinese-traditional-medicine-Cp2lnYll.png": {
		"type": "image/png",
		"etag": "\"17cf0d-t/FdG+PnIyQwsYWkOsPKZe0y9ro\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 1560333,
		"path": "../client/assets/chinese-traditional-medicine-Cp2lnYll.png"
	},
	"/assets/nightbloom-BCob8UA3.jpg": {
		"type": "image/jpeg",
		"etag": "\"3cbc9-xrx3xnRqPv+8yc6PUZgLxJfRsog\"",
		"mtime": "2026-06-29T03:31:54.883Z",
		"size": 248777,
		"path": "../client/assets/nightbloom-BCob8UA3.jpg"
	},
	"/assets/nightbloom-BVuzgHON.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dfa-ylSV82A44+KBMIQKCAtbJoP+saA\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 3578,
		"path": "../client/assets/nightbloom-BVuzgHON.js"
	},
	"/assets/oracle-MG5rr9i_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ae9-b5UzEBcH5aBrL9Yf2EYnstxCO3g\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 6889,
		"path": "../client/assets/oracle-MG5rr9i_.js"
	},
	"/assets/plus-09qfNFd7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-+ltzQjZGZW969U583+812fpdkRU\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 142,
		"path": "../client/assets/plus-09qfNFd7.js"
	},
	"/assets/product-card-BRbjhkqn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"874-m8mPrIWPBgN/D40cug81zJljFug\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 2164,
		"path": "../client/assets/product-card-BRbjhkqn.js"
	},
	"/assets/product._slug--BOuSWIB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-CSMqxo867WhiORsEZdzo6PFzw+0\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 426,
		"path": "../client/assets/product._slug--BOuSWIB.js"
	},
	"/assets/product._slug-DlsoVTPg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a1-y8bC9xUXbbajBzit6RXrx+Q3cpA\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 6049,
		"path": "../client/assets/product._slug-DlsoVTPg.js"
	},
	"/assets/product._slug-XUfW_Y0G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-FffuCZiPBudh67jLwwHGtOySovg\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 261,
		"path": "../client/assets/product._slug-XUfW_Y0G.js"
	},
	"/assets/react-DbyrFoBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-mi2wZUq39ijUTZDJBuXqznfenBA\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 7527,
		"path": "../client/assets/react-DbyrFoBd.js"
	},
	"/assets/appalachian-folk-medicine-Dim5wdMf.png": {
		"type": "image/png",
		"etag": "\"18739a-o4SyVRazmUopn3kQjBBj+ywmVmU\"",
		"mtime": "2026-06-29T03:31:54.871Z",
		"size": 1602458,
		"path": "../client/assets/appalachian-folk-medicine-Dim5wdMf.png"
	},
	"/assets/african-herbalism-CG_4W2JV.png": {
		"type": "image/png",
		"etag": "\"16c38f-Z6HYjR+VFhsrUqvLTg/fTME0140\"",
		"mtime": "2026-06-29T03:31:54.871Z",
		"size": 1491855,
		"path": "../client/assets/african-herbalism-CG_4W2JV.png"
	},
	"/assets/office-h-Zw4aGj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6600d-wMtSa/L0qrbz0ldr7iMyI/B2tXI\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 417805,
		"path": "../client/assets/office-h-Zw4aGj.js"
	},
	"/assets/routes-DNTyH7HA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a0-X74xk9zU+QQAoCMHvVHph8YJrYQ\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 5536,
		"path": "../client/assets/routes-DNTyH7HA.js"
	},
	"/assets/native-american-plant-medicine-B1EM8hF8.png": {
		"type": "image/png",
		"etag": "\"16cc88-6yXeUlRBzt6WkBgeZ6Vw4QOkiME\"",
		"mtime": "2026-06-29T03:31:54.879Z",
		"size": 1494152,
		"path": "../client/assets/native-american-plant-medicine-B1EM8hF8.png"
	},
	"/assets/shop-MZ8gifaW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd6-qtEm6x5XSkEVC/IYhS73ag3yWig\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 3286,
		"path": "../client/assets/shop-MZ8gifaW.js"
	},
	"/assets/shopping-bag-DMtXobs2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"149-TJgG+cxR6h3DRt4YgcHGBZKb/9g\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 329,
		"path": "../client/assets/shopping-bag-DMtXobs2.js"
	},
	"/assets/signin-lwsS04yt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbc-RqcMlRNMtsUh0HrCsrP5QJDqLQA\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 3004,
		"path": "../client/assets/signin-lwsS04yt.js"
	},
	"/assets/styles-VthvloAO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19355-+4NQSj+dCsdGyBKkwVyfmXhbHSo\"",
		"mtime": "2026-06-29T03:31:54.883Z",
		"size": 103253,
		"path": "../client/assets/styles-VthvloAO.css"
	},
	"/assets/Herb Moon Caravan-DQCwYu2J.mp3": {
		"type": "audio/mpeg",
		"etag": "\"4c5e06-ysE4OA1cxt09EGYpjRCDUo+vfRU\"",
		"mtime": "2026-06-29T03:31:54.867Z",
		"size": 5004806,
		"path": "../client/assets/Herb Moon Caravan-DQCwYu2J.mp3"
	},
	"/assets/wiccan-earth-based-healing--cm5gP66.png": {
		"type": "image/png",
		"etag": "\"19d4e6-fveId+Kct//JViw9IUZoYPL9JBY\"",
		"mtime": "2026-06-29T03:31:54.883Z",
		"size": 1692902,
		"path": "../client/assets/wiccan-earth-based-healing--cm5gP66.png"
	},
	"/assets/Herb Moon Caravan (1)-DEpzGz1I.mp3": {
		"type": "audio/mpeg",
		"etag": "\"5259fd-QQzDiogJTTPF8k11kVnBunCulb4\"",
		"mtime": "2026-06-29T03:31:54.863Z",
		"size": 5396989,
		"path": "../client/assets/Herb Moon Caravan (1)-DEpzGz1I.mp3"
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
