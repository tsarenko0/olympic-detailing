import { r as __toESM } from "../_runtime.mjs";
import { a as PRIVACY_PATH } from "./amg-data-DwVEGIVM.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SITE_ORIGIN, c as homeHeadMeta, i as SEO_BRAND, l as privacyHeadMeta, n as DEFAULT_DESCRIPTION, o as absoluteUrl, r as DEFAULT_TITLE, t as Button } from "./seo-BbTbQUEE.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-N8__i-Y3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DF76q1_A.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var COOKIE_CONSENT_STORAGE_KEY = "amg-cookie-consent";
var COOKIE_CONSENT_ACCEPTED = "accepted";
function hasCookieConsent() {
	if (typeof window === "undefined") return false;
	try {
		return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === COOKIE_CONSENT_ACCEPTED;
	} catch {
		return false;
	}
}
function acceptCookieConsent() {
	try {
		window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, COOKIE_CONSENT_ACCEPTED);
	} catch {}
}
var YANDEX_METRIKA_ID = 111493941;
var YANDEX_METRIKA_SCRIPT = `
(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`.trim();
/** Loads Yandex.Metrika only after cookie consent. */
function YandexMetrika() {
	(0, import_react.useEffect)(() => {
		const marker = `ym-counter-${YANDEX_METRIKA_ID}`;
		if (document.getElementById(marker)) return;
		const script = document.createElement("script");
		script.id = marker;
		script.type = "text/javascript";
		script.text = YANDEX_METRIKA_SCRIPT;
		document.head.appendChild(script);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: `https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`,
		style: {
			position: "absolute",
			left: "-9999px"
		},
		alt: ""
	}) }) });
}
var COOKIE_BANNER_TEXT = "Этот сайт использует файлы cookie и сервисы веб-аналитики для сбора технической статистики и улучшения работы сайта. Продолжая использовать сайт, вы выражаете своё согласие на их обработку.";
function CookieConsent() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [accepted, setAccepted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setAccepted(hasCookieConsent());
		setReady(true);
	}, []);
	const handleAccept = () => {
		acceptCookieConsent();
		setAccepted(true);
	};
	if (!ready) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [accepted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YandexMetrika, {}) : null, !accepted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-live": "polite",
		"aria-label": "Согласие на использование cookie",
		className: "fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 p-4 shadow-[0_-12px_40px_-20px_oklch(0.2_0.02_30_/_0.28)] backdrop-blur-md md:p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-3xl text-sm leading-relaxed text-muted-foreground",
				children: [
					COOKIE_BANNER_TEXT,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: PRIVACY_PATH,
						className: "underline underline-offset-2 transition-colors hover:text-primary",
						children: "Политика конфиденциальности"
					}),
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				onClick: handleAccept,
				className: "h-11 shrink-0 px-6 text-xs font-bold uppercase tracking-[0.2em] shadow-crimson",
				children: "Принять"
			})]
		})
	}) : null] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => {
		const canonical = absoluteUrl("/");
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: DEFAULT_TITLE },
				{
					name: "description",
					content: DEFAULT_DESCRIPTION
				},
				{
					name: "robots",
					content: "index, follow"
				},
				{
					property: "og:locale",
					content: "ru_RU"
				},
				{
					property: "og:site_name",
					content: SEO_BRAND
				},
				{
					property: "og:title",
					content: DEFAULT_TITLE
				},
				{
					property: "og:description",
					content: DEFAULT_DESCRIPTION
				},
				{
					property: "og:type",
					content: "website"
				},
				...canonical ? [{
					property: "og:url",
					content: canonical
				}] : [],
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
				},
				{
					rel: "icon",
					href: "/favicon.ico",
					type: "image/x-icon"
				},
				{
					rel: "icon",
					href: "/favicon.png",
					type: "image/png"
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png"
				},
				...canonical ? [{
					rel: "canonical",
					href: canonical
				}] : []
			]
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ru",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				theme: "light"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {})
		]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-BxBTEofJ.mjs");
var Route$2 = createFileRoute("/")({
	head: () => homeHeadMeta(),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./privacy-BLTZsjP3.mjs");
var Route$1 = createFileRoute("/privacy")({
	head: () => privacyHeadMeta(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function buildSitemapXml(origin) {
	const base = origin.replace(/\/$/, "");
	const lastmod = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${base}/privacy</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;
}
var Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const origin = SITE_ORIGIN || new URL(request.url).origin;
	return new Response(buildSitemapXml(origin), { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	PrivacyRoute: Route$1.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$3
	}),
	SitemapDotxmlRoute: Route.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
