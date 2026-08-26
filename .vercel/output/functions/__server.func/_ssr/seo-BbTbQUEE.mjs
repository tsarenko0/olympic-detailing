import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as FAQ_ITEMS, o as cn, t as CONTACT } from "./amg-data-DwVEGIVM.mjs";
import { _ as require_jsx_runtime, p as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-BbTbQUEE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
/** Production origin without trailing slash, e.g. https://example.com */
var SITE_ORIGIN = String({
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SITE_URL": "https://amg-krd.ru"
}["VITE_SITE_URL"] ?? "").replace(/\/$/, "");
var SEO_BRAND = "Olympic Detailing";
var SEO_ALTERNATE_NAMES = [
	"Olympic",
	"Olympic Detailing",
	"Олимпик Детейлинг",
	"Олимпик детейлинг",
	"Olympic Detailing Минск",
	"Олимпик Детейлинг Минск",
	"детейлинг Минск"
];
var HOME_TITLE = "Olympic Detailing Минск — детейлинг, оклейка плёнкой и шумоизоляция";
var HOME_DESCRIPTION = "Olympic Detailing в Минске: оклейка антигравийной плёнкой, шумоизоляция, керамика и полировка. Студия на Михаловская 18. Ежедневно 9:30–19:00. Звоните: +375 29 314 5777.";
var HOME_KEYWORDS = [
	"Olympic Detailing",
	"Олимпик детейлинг",
	"Olympic Detailing Минск",
	"детейлинг Минск",
	"оклейка плёнкой Минск",
	"антигравийная плёнка Минск",
	"шумоизоляция авто Минск",
	"керамика кузова Минск",
	"полировка авто Минск",
	"Olympic Detailing Михаловская"
].join(", ");
var PRIVACY_TITLE = "Политика конфиденциальности — Olympic Detailing Минск";
var PRIVACY_DESCRIPTION = "Политика конфиденциальности Olympic Detailing (Минск): как обрабатываем имя и телефон из заявок на сайте.";
var DEFAULT_TITLE = "Olympic Detailing — детейлинг в Минске";
var DEFAULT_DESCRIPTION = "Olympic Detailing в Минске: оклейка плёнкой, шумоизоляция, керамика и полировка. Михаловская 18.";
function absoluteUrl(path = "/") {
	if (!SITE_ORIGIN) return void 0;
	if (path === "/") return `${SITE_ORIGIN}/`;
	return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
function buildHomeJsonLd() {
	const pageUrl = absoluteUrl("/");
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "AutomotiveBusiness",
				"@id": pageUrl ? `${pageUrl}#business` : void 0,
				name: SEO_BRAND,
				alternateName: [...SEO_ALTERNATE_NAMES],
				description: HOME_DESCRIPTION,
				url: pageUrl,
				telephone: CONTACT.phoneHref.replace("tel:", ""),
				image: absoluteUrl("/favicon.png"),
				address: {
					"@type": "PostalAddress",
					streetAddress: "Михаловская 18",
					addressLocality: "Минск",
					addressCountry: "BY"
				},
				openingHoursSpecification: [{
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday"
					],
					opens: "09:30",
					closes: "19:00"
				}],
				sameAs: [CONTACT.instagram],
				areaServed: {
					"@type": "City",
					name: "Минск"
				},
				priceRange: "BYN",
				knowsAbout: [
					"детейлинг",
					"оклейка антигравийной плёнкой",
					"шумоизоляция автомобиля",
					"керамическое покрытие",
					"полировка кузова",
					"жидкое бронирование"
				]
			},
			{
				"@type": "WebSite",
				"@id": pageUrl ? `${pageUrl}#website` : void 0,
				name: SEO_BRAND,
				alternateName: [...SEO_ALTERNATE_NAMES],
				url: pageUrl,
				inLanguage: "ru-RU",
				publisher: { "@id": pageUrl ? `${pageUrl}#business` : void 0 }
			},
			{
				"@type": "WebPage",
				"@id": pageUrl ? `${pageUrl}#webpage` : void 0,
				url: pageUrl,
				name: HOME_TITLE,
				description: HOME_DESCRIPTION,
				inLanguage: "ru-RU",
				isPartOf: { "@id": pageUrl ? `${pageUrl}#website` : void 0 },
				about: { "@id": pageUrl ? `${pageUrl}#business` : void 0 },
				primaryImageOfPage: absoluteUrl("/favicon.png")
			},
			{
				"@type": "FAQPage",
				"@id": pageUrl ? `${pageUrl}#faq` : void 0,
				mainEntity: FAQ_ITEMS.map((item) => ({
					"@type": "Question",
					name: item.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.a
					}
				}))
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Главная — Olympic Detailing Минск",
					item: pageUrl
				}]
			}
		].map((node) => stripUndefined(node))
	};
}
function stripUndefined(value) {
	return JSON.parse(JSON.stringify(value));
}
function homeHeadMeta() {
	const canonical = absoluteUrl("/");
	const ogImage = absoluteUrl("/favicon.png");
	return {
		meta: [
			{ title: HOME_TITLE },
			{
				name: "description",
				content: HOME_DESCRIPTION
			},
			{
				name: "keywords",
				content: HOME_KEYWORDS
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1"
			},
			{
				name: "author",
				content: SEO_BRAND
			},
			{
				name: "geo.region",
				content: "BY-MI"
			},
			{
				name: "geo.placename",
				content: "Минск"
			},
			{
				property: "og:locale",
				content: "ru_RU"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: SEO_BRAND
			},
			{
				property: "og:title",
				content: HOME_TITLE
			},
			{
				property: "og:description",
				content: HOME_DESCRIPTION
			},
			...canonical ? [{
				property: "og:url",
				content: canonical
			}] : [],
			...ogImage ? [{
				property: "og:image",
				content: ogImage
			}] : [],
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: HOME_TITLE
			},
			{
				name: "twitter:description",
				content: HOME_DESCRIPTION
			},
			...ogImage ? [{
				name: "twitter:image",
				content: ogImage
			}] : []
		],
		links: canonical ? [{
			rel: "canonical",
			href: canonical
		}] : []
	};
}
function privacyHeadMeta() {
	const canonical = absoluteUrl("/privacy");
	return {
		meta: [
			{ title: PRIVACY_TITLE },
			{
				name: "description",
				content: PRIVACY_DESCRIPTION
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
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: SEO_BRAND
			},
			{
				property: "og:title",
				content: PRIVACY_TITLE
			},
			{
				property: "og:description",
				content: PRIVACY_DESCRIPTION
			},
			...canonical ? [{
				property: "og:url",
				content: canonical
			}] : []
		],
		links: canonical ? [{
			rel: "canonical",
			href: canonical
		}] : []
	};
}
//#endregion
export { SITE_ORIGIN as a, homeHeadMeta as c, SEO_BRAND as i, privacyHeadMeta as l, DEFAULT_DESCRIPTION as n, absoluteUrl as o, DEFAULT_TITLE as r, buildHomeJsonLd as s, Button as t };
