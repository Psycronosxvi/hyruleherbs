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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"29-dhpfRqlJKbts1JRy4qmglCSclTY\"",
		"mtime": "2026-06-29T04:01:54.790Z",
		"size": 41,
		"path": "../client/robots.txt"
	},
	"/assets/about-hdaXIx7m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"751-PS+GQZHKKYQp1p8Z1aknX+/apMU\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 1873,
		"path": "../client/assets/about-hdaXIx7m.js"
	},
	"/assets/account-SH_Ac5Yd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9e-WLrteuZM8+XktQuqsrO2JqRxt58\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 7070,
		"path": "../client/assets/account-SH_Ac5Yd.js"
	},
	"/assets/book-open-TGroVMrd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-CNPW8p2YemS9Ri0NR9A9WxMBvVc\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 268,
		"path": "../client/assets/book-open-TGroVMrd.js"
	},
	"/assets/book-of-roots-BQAMXOKB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12039-2iPdIE+jf9rRDZ8zGWyL9xvzvD0\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 73785,
		"path": "../client/assets/book-of-roots-BQAMXOKB.js"
	},
	"/assets/briefcase-D1PZ1t1c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-KH2H6vjvj2NKNl9IBwzoBg27rzQ\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 209,
		"path": "../client/assets/briefcase-D1PZ1t1c.js"
	},
	"/assets/careers-ENsG1u0n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1da4-y4ewRvd0DNWizE4OLeQkIdU0jtQ\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 7588,
		"path": "../client/assets/careers-ENsG1u0n.js"
	},
	"/assets/cart-ChDOgDsO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c7-KOPkmfhty+bZHnvKWtayg/HTrC8\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 5063,
		"path": "../client/assets/cart-ChDOgDsO.js"
	},
	"/assets/cat-flowers-BsrzwQRG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d4c7-K2N4wun3yMRDF3FjWh2KbPYyXb0\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 120007,
		"path": "../client/assets/cat-flowers-BsrzwQRG.jpg"
	},
	"/assets/cat-herbs-BfWvkTIP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1323a-H0AqUXTWzMOUUm5wKjaIhldfjRI\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 78394,
		"path": "../client/assets/cat-herbs-BfWvkTIP.jpg"
	},
	"/assets/cat-kits-DzYLH2Zf.jpg": {
		"type": "image/jpeg",
		"etag": "\"15c62-erk6RjulMc5nJ2jJOROTRFmVT4A\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 89186,
		"path": "../client/assets/cat-kits-DzYLH2Zf.jpg"
	},
	"/assets/cat-oils-DtJMbh37.jpg": {
		"type": "image/jpeg",
		"etag": "\"15ef6-FpCqHt4pzb3wZa2dKzjd0M0v6yo\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 89846,
		"path": "../client/assets/cat-oils-DtJMbh37.jpg"
	},
	"/assets/cat-teas-CisC-6TL.jpg": {
		"type": "image/jpeg",
		"etag": "\"15fda-fmHvavGsQ7w6oe27pQjjZK2Q2+E\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 90074,
		"path": "../client/assets/cat-teas-CisC-6TL.jpg"
	},
	"/assets/cat-tinctures-nu5luYGH.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d36-Pmy5mNqNoR9rThixtm5HHwJuyg0\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 93494,
		"path": "../client/assets/cat-tinctures-nu5luYGH.jpg"
	},
	"/assets/file-text-BxvbL4Vi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"263-hUNlZLmhIpDd3ttTnq/iFtKYJZg\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 611,
		"path": "../client/assets/file-text-BxvbL4Vi.js"
	},
	"/assets/hero-apothecary-BOUIDkAR.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ac09-6vrDeEVs7dqdxnOGHMKing3pO64\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 240649,
		"path": "../client/assets/hero-apothecary-BOUIDkAR.jpg"
	},
	"/assets/index-C8lijRVp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65abd-x778b8nQEeE24lJ9VwmC8NAXkXw\"",
		"mtime": "2026-06-29T04:01:53.626Z",
		"size": 416445,
		"path": "../client/assets/index-C8lijRVp.js"
	},
	"/assets/african-herbalism-CG_4W2JV.png": {
		"type": "image/png",
		"etag": "\"16c38f-Z6HYjR+VFhsrUqvLTg/fTME0140\"",
		"mtime": "2026-06-29T04:01:53.638Z",
		"size": 1491855,
		"path": "../client/assets/african-herbalism-CG_4W2JV.png"
	},
	"/assets/ayurvedic-indian-medicine-Cr2gTj7H.png": {
		"type": "image/png",
		"etag": "\"138616-iaxRk5EEPiQdr4UrMT4RPAYX9RA\"",
		"mtime": "2026-06-29T04:01:53.642Z",
		"size": 1279510,
		"path": "../client/assets/ayurvedic-indian-medicine-Cr2gTj7H.png"
	},
	"/assets/cajun-folk-remedies-Bjc2xH1R.png": {
		"type": "image/png",
		"etag": "\"168cee-G4hP6q2uS2Sb+p6SUILkTSu1cbk\"",
		"mtime": "2026-06-29T04:01:53.642Z",
		"size": 1477870,
		"path": "../client/assets/cajun-folk-remedies-Bjc2xH1R.png"
	},
	"/assets/caribbean-rastafarian-herbalism-PUMDo5tX.png": {
		"type": "image/png",
		"etag": "\"159bd4-P5TVErLuwLm9bUBQ/hEIsD7i1xI\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 1416148,
		"path": "../client/assets/caribbean-rastafarian-herbalism-PUMDo5tX.png"
	},
	"/assets/chinese-traditional-medicine-Cp2lnYll.png": {
		"type": "image/png",
		"etag": "\"17cf0d-t/FdG+PnIyQwsYWkOsPKZe0y9ro\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 1560333,
		"path": "../client/assets/chinese-traditional-medicine-Cp2lnYll.png"
	},
	"/assets/appalachian-folk-medicine-Dim5wdMf.png": {
		"type": "image/png",
		"etag": "\"18739a-o4SyVRazmUopn3kQjBBj+ywmVmU\"",
		"mtime": "2026-06-29T04:01:53.642Z",
		"size": 1602458,
		"path": "../client/assets/appalachian-folk-medicine-Dim5wdMf.png"
	},
	"/assets/join-CnUMe0z6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dc-B+oWvqCfqEOHdfXm9KeK8URmZjI\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 1244,
		"path": "../client/assets/join-CnUMe0z6.js"
	},
	"/assets/jsx-runtime-DUAcabCT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42a-6CWT3JsIzkgrrMo5qQ6L1UWEbvM\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 1066,
		"path": "../client/assets/jsx-runtime-DUAcabCT.js"
	},
	"/assets/leaf-Ol9xfOWB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-K7zCmNrqYSvaHCDVfOT1fk/7jaE\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 254,
		"path": "../client/assets/leaf-Ol9xfOWB.js"
	},
	"/assets/link-8bud9NQ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6890-gqgnTJkPogIdR3URQ/rqcsy43IA\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 26768,
		"path": "../client/assets/link-8bud9NQ9.js"
	},
	"/assets/lock-DgU3GwCO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-3QUK1OWiRH8pe4zBmwSrS/m8Oy0\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 374,
		"path": "../client/assets/lock-DgU3GwCO.js"
	},
	"/assets/logo-crest-DsdeJ21C.jpg": {
		"type": "image/jpeg",
		"etag": "\"30337-/kOOzQ3ZkHgLDATR76kaQX6KJaU\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 197431,
		"path": "../client/assets/logo-crest-DsdeJ21C.jpg"
	},
	"/assets/minus-CMm1wy6w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a-a558FcoOjbkpyjfeRdALzbcCaso\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 106,
		"path": "../client/assets/minus-CMm1wy6w.js"
	},
	"/assets/nightbloom-C3V3Yz8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"141a-UoWLesSIi7FBBG87GfixMPIgOjw\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 5146,
		"path": "../client/assets/nightbloom-C3V3Yz8Y.js"
	},
	"/assets/nightbloom-BCob8UA3.jpg": {
		"type": "image/jpeg",
		"etag": "\"3cbc9-xrx3xnRqPv+8yc6PUZgLxJfRsog\"",
		"mtime": "2026-06-29T04:01:53.650Z",
		"size": 248777,
		"path": "../client/assets/nightbloom-BCob8UA3.jpg"
	},
	"/assets/oracle-CwI9dO2z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2793-4QUBqFUMvpgWaX+Teps3+Ezjxzs\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 10131,
		"path": "../client/assets/oracle-CwI9dO2z.js"
	},
	"/assets/plus-CIQbdozt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-yV5WXS6rLu6pHAqeTOW/mcrXLSU\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 142,
		"path": "../client/assets/plus-CIQbdozt.js"
	},
	"/assets/office-CesQPXQ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66cc4-mqlY10Wwpnjmk4y+A4mmy0v4ijk\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 421060,
		"path": "../client/assets/office-CesQPXQ0.js"
	},
	"/assets/product-card-C7W0-oJy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"874-bTNjCP4eIA8bvljvZwKJcylB/Gw\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 2164,
		"path": "../client/assets/product-card-C7W0-oJy.js"
	},
	"/assets/product._slug--BOuSWIB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-CSMqxo867WhiORsEZdzo6PFzw+0\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 426,
		"path": "../client/assets/product._slug--BOuSWIB.js"
	},
	"/assets/product._slug-CYqlGxIL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a1-1gCuGoTOrmRaA59UdM8UDFBG9ho\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 6049,
		"path": "../client/assets/product._slug-CYqlGxIL.js"
	},
	"/assets/product._slug-XUfW_Y0G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-FffuCZiPBudh67jLwwHGtOySovg\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 261,
		"path": "../client/assets/product._slug-XUfW_Y0G.js"
	},
	"/assets/react-DbyrFoBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-mi2wZUq39ijUTZDJBuXqznfenBA\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 7527,
		"path": "../client/assets/react-DbyrFoBd.js"
	},
	"/assets/routes-CdG5dGp1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a0-rnO8DT78ucdzzgHLJml9rKqjrpQ\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 5536,
		"path": "../client/assets/routes-CdG5dGp1.js"
	},
	"/assets/native-american-plant-medicine-B1EM8hF8.png": {
		"type": "image/png",
		"etag": "\"16cc88-6yXeUlRBzt6WkBgeZ6Vw4QOkiME\"",
		"mtime": "2026-06-29T04:01:53.646Z",
		"size": 1494152,
		"path": "../client/assets/native-american-plant-medicine-B1EM8hF8.png"
	},
	"/assets/shop-CxrP_IKt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd6-wQ/z4TMYYoMQCBjrbE3qcF5ljvk\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 3286,
		"path": "../client/assets/shop-CxrP_IKt.js"
	},
	"/assets/shopping-bag-diOWmocK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"149-VriE791LmMkgxO8VUUMUZpOwJ5I\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 329,
		"path": "../client/assets/shopping-bag-diOWmocK.js"
	},
	"/assets/signin-C_B_bmUX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbc-/iwTKdxIfe8/yw1aCYXReLCFlSU\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 3004,
		"path": "../client/assets/signin-C_B_bmUX.js"
	},
	"/assets/oracle-madame-writz-BNf0LYQI.png": {
		"type": "image/png",
		"etag": "\"16b18b-9ANQ8ILAu96FeuDzTABhcWjVkhY\"",
		"mtime": "2026-06-29T04:01:53.650Z",
		"size": 1487243,
		"path": "../client/assets/oracle-madame-writz-BNf0LYQI.png"
	},
	"/assets/styles-BVC1832k.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b4c2-dU/rnfLSh3L3Iucr4wWA4OG/xx8\"",
		"mtime": "2026-06-29T04:01:53.650Z",
		"size": 111810,
		"path": "../client/assets/styles-BVC1832k.css"
	},
	"/assets/Herb Moon Caravan-DQCwYu2J.mp3": {
		"type": "audio/mpeg",
		"etag": "\"4c5e06-ysE4OA1cxt09EGYpjRCDUo+vfRU\"",
		"mtime": "2026-06-29T04:01:53.634Z",
		"size": 5004806,
		"path": "../client/assets/Herb Moon Caravan-DQCwYu2J.mp3"
	},
	"/assets/Herb Moon Caravan (1)-DEpzGz1I.mp3": {
		"type": "audio/mpeg",
		"etag": "\"5259fd-QQzDiogJTTPF8k11kVnBunCulb4\"",
		"mtime": "2026-06-29T04:01:53.630Z",
		"size": 5396989,
		"path": "../client/assets/Herb Moon Caravan (1)-DEpzGz1I.mp3"
	},
	"/assets/wiccan-earth-based-healing--cm5gP66.png": {
		"type": "image/png",
		"etag": "\"19d4e6-fveId+Kct//JViw9IUZoYPL9JBY\"",
		"mtime": "2026-06-29T04:01:53.650Z",
		"size": 1692902,
		"path": "../client/assets/wiccan-earth-based-healing--cm5gP66.png"
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
