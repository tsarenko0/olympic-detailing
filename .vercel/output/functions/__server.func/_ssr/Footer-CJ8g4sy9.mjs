import { a as PRIVACY_PATH, i as NAV_LINKS, o as cn, t as CONTACT } from "./amg-data-DwVEGIVM.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Phone, l as Instagram, o as MessageCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-CJ8g4sy9.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: cn("flex min-w-0 items-center", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-base font-bold uppercase leading-none tracking-[0.14em] sm:text-lg md:text-2xl md:tracking-[0.18em]",
			children: "Olympic\xA0Detailing"
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
						children: "Премиальный детейлинг в Минске: плёнка, керамика, полировка и шумоизоляция."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-semibold uppercase tracking-[0.3em] text-primary",
					children: "Разделы"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-4 flex flex-col gap-2.5",
					children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "w-fit text-sm font-semibold text-primary transition-colors hover:text-crimson-glow",
						children: link.label
					}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: PRIVACY_PATH,
						className: "w-fit text-sm text-muted-foreground transition-colors hover:text-primary",
						children: "Политика конфиденциальности"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-semibold uppercase tracking-[0.3em] text-primary",
					children: "Связь"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CONTACT.phoneHref,
							className: "flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-3.5 shrink-0 text-primary",
								"aria-hidden": true
							}), CONTACT.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CONTACT.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-3.5 shrink-0 text-primary",
								"aria-hidden": true
							}), "WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CONTACT.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
								className: "size-3.5 shrink-0 text-primary",
								"aria-hidden": true
							}), "Instagram"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: CONTACT.hoursShort
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CONTACT.mapsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "block text-muted-foreground transition-colors hover:text-primary",
							children: CONTACT.address
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[11px] uppercase tracking-[0.2em] md:flex-row md:items-center md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Olympic Detailing"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: PRIVACY_PATH,
					className: "text-muted-foreground transition-colors hover:text-primary",
					children: "Политика конфиденциальности"
				})]
			})
		})]
	});
}
//#endregion
export { Logo as n, Footer as t };
