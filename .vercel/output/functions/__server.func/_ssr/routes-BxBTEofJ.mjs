import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as PRIVACY_PATH, i as NAV_LINKS, n as FAQ_ITEMS, o as cn, r as INSTAGRAM_REELS, t as CONTACT } from "./amg-data-DwVEGIVM.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowUpRight, a as Paintbrush, c as MapPin, d as Image, f as Clock, g as ChevronDown, h as ChevronLeft, i as Phone, l as Instagram, m as ChevronRight, n as Sparkles, o as MessageCircle, p as CircleCheck, r as Shield, s as Menu, t as X, u as Info, v as ArrowRight, y as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as Logo, t as Footer } from "./Footer-CJ8g4sy9.mjs";
import { s as buildHomeJsonLd, t as Button } from "./seo-BbTbQUEE.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CMH0ZVTh.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose$1, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BxBTEofJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogClose = DialogClose$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var leadSchema = objectType({
	name: stringType().trim().min(1, "Укажите имя").max(100),
	phone: stringType().trim().min(5, "Укажите телефон").max(40)
});
var submitContactLead = createServerFn({ method: "POST" }).validator(leadSchema).handler(createSsrRpc("d3e5d78746fef4f74fcb04c73a82ec539db56a2d2d15e40e3b0f255be1fa9845"));
var EMPTY_LEAD_VALUES = {
	name: "",
	phone: ""
};
async function submitLeadForm({ values, successTitle, successDescription, onSuccess }) {
	try {
		await submitContactLead({ data: {
			name: values.name,
			phone: values.phone
		} });
		toast.success(successTitle, { description: successDescription });
		onSuccess?.();
		return true;
	} catch {
		toast.error("Не удалось отправить заявку", { description: "Проверьте данные или позвоните нам напрямую." });
		return false;
	}
}
function useLeadFormState(initial = EMPTY_LEAD_VALUES) {
	const [values, setValues] = (0, import_react.useState)(initial);
	const [pending, setPending] = (0, import_react.useState)(false);
	const patchValues = (patch) => {
		setValues((prev) => ({
			...prev,
			...patch
		}));
	};
	const submit = async (options) => {
		if (pending) return false;
		setPending(true);
		try {
			return await submitLeadForm({
				...options,
				values
			});
		} finally {
			setPending(false);
		}
	};
	return {
		values,
		pending,
		patchValues,
		setValues,
		submit
	};
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
function LeadFormFields({ idPrefix, values, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: `${idPrefix}-name`,
				children: "Имя"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: `${idPrefix}-name`,
				required: true,
				value: values.name,
				onChange: (event) => onChange({ name: event.target.value }),
				placeholder: "Александр",
				className: "h-11 bg-background/60",
				autoComplete: "name"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: `${idPrefix}-phone`,
				children: "Телефон"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: `${idPrefix}-phone`,
				type: "tel",
				required: true,
				value: values.phone,
				onChange: (event) => onChange({ phone: event.target.value }),
				placeholder: "+7 (___) ___-__-__",
				className: "h-11 bg-background/60",
				autoComplete: "tel"
			})]
		})]
	});
}
function PrivacyNote({ className, variant = "form" }) {
	if (variant === "link") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-[11px] leading-relaxed text-muted-foreground", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: PRIVACY_PATH,
			className: "underline underline-offset-2 transition-colors hover:text-primary",
			children: "Политика конфиденциальности"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("text-[11px] leading-relaxed text-muted-foreground", className),
		children: [
			"Нажимая кнопку, вы соглашаетесь с",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: PRIVACY_PATH,
				className: "underline underline-offset-2 transition-colors hover:text-primary",
				children: "политикой конфиденциальности"
			}),
			"."
		]
	});
}
function LeadModal({ open, onOpenChange }) {
	const { values, pending, patchValues, setValues, submit } = useLeadFormState();
	(0, import_react.useEffect)(() => {
		if (!open) return;
		setValues(EMPTY_LEAD_VALUES);
	}, [open, setValues]);
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (await submit({
			successTitle: "Спасибо! Мы перезвоним вам",
			successDescription: "Наш мастер свяжется с вами в рабочее время: 9:30 — 19:00.",
			onSuccess: () => onOpenChange(false)
		})) setValues(EMPTY_LEAD_VALUES);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "surface-panel max-w-md border-border/80 sm:rounded-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 top-0 h-px bg-gradient-crimson" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "text-2xl font-bold uppercase tracking-wide",
					children: ["Записаться в ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-crimson",
						children: "Olympic"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-sm text-muted-foreground",
					children: "Оставьте имя и телефон — перезвоним и проконсультируем."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-2 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadFormFields, {
							idPrefix: "lead-modal",
							values,
							onChange: patchValues
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							disabled: pending,
							className: "h-12 w-full text-sm font-bold uppercase tracking-widest shadow-crimson",
							children: pending ? "Отправляем..." : "Отправить заявку"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyNote, {})
					]
				})
			]
		})
	});
}
var LeadModalContext = (0, import_react.createContext)({ open: () => {} });
function useLeadModal() {
	return (0, import_react.useContext)(LeadModalContext);
}
function LeadModalProvider({ children }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const open = (0, import_react.useCallback)(() => {
		setIsOpen(true);
	}, []);
	const value = (0, import_react.useMemo)(() => ({ open }), [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadModalContext.Provider, {
		value,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadModal, {
			open: isOpen,
			onOpenChange: setIsOpen
		})]
	});
}
var SCROLL_SOLID_OFFSET_PX = 48;
function Navbar() {
	const { open } = useLeadModal();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > SCROLL_SOLID_OFFSET_PX);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const solid = scrolled || menuOpen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "nav-enter fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("hidden border-b transition-all duration-500 md:block", solid ? "border-border/70 bg-background/95 backdrop-blur-xl" : "border-white/10 bg-black/25 backdrop-blur-md"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs uppercase tracking-[0.2em] transition-colors duration-500", solid ? "text-muted-foreground" : "text-white/70"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: cn("size-3.5", solid ? "text-primary" : "text-crimson-glow") }), CONTACT.hoursShort]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CONTACT.mapsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "tracking-[0.2em] transition-colors hover:text-primary",
						children: CONTACT.address
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: CONTACT.phoneHref,
						className: cn("flex items-center gap-2 font-semibold transition-colors hover:text-primary", solid ? "text-foreground" : "text-white"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: cn("size-3.5", solid ? "text-primary" : "text-crimson-glow") }), CONTACT.phone]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("border-b transition-all duration-500", solid ? "border-border/80 bg-background/95 backdrop-blur-xl shadow-[0_8px_24px_-18px_oklch(0.2_0.02_30_/_0.35)]" : "border-white/10 bg-black/30 backdrop-blur-md"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-5 md:h-auto md:gap-4 md:px-8 md:py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: cn("shrink min-w-0 transition-colors duration-500", solid ? "text-foreground" : "text-white") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 lg:flex",
						children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: cn("relative text-xs font-bold uppercase tracking-[0.25em] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full", solid ? "text-primary hover:text-crimson-glow" : "text-white/90 hover:text-crimson-glow"),
							children: link.label
						}, link.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-1.5 sm:gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => open(),
							className: "h-9 px-3 text-[10px] font-bold uppercase tracking-[0.14em] shadow-crimson sm:h-10 sm:px-5 sm:text-xs sm:tracking-[0.2em]",
							children: "Получить консультацию"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": menuOpen ? "Закрыть меню" : "Открыть меню",
							"aria-expanded": menuOpen,
							onClick: () => setMenuOpen((v) => !v),
							className: cn("flex size-9 items-center justify-center rounded-md border transition-colors sm:size-10 lg:hidden", solid ? "border-border text-foreground hover:border-primary/50" : "border-white/40 text-white hover:border-white/70"),
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden", menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-4 sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-col",
							children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								onClick: () => setMenuOpen(false),
								className: "border-b border-border/60 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-crimson-glow",
								children: link.label
							}, link.href))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.phoneHref,
								className: "font-semibold text-foreground",
								children: CONTACT.phone
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.hoursShort })]
						})]
					})
				})
			})]
		})]
	});
}
var REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function prefersReducedMotion() {
	return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
var PARALLAX_RANGE_PX = 90;
function useParallax(strength = PARALLAX_RANGE_PX) {
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || prefersReducedMotion()) return;
		let frame = 0;
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const y = window.scrollY;
				const viewport = window.innerHeight || 1;
				const progress = Math.min(Math.max(y / viewport, 0), 1);
				setOffset(progress * strength);
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
		};
	}, [strength]);
	return offset;
}
var SCRAMBLE_GLYPHS = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHJKLMNPQRSTUVWXYZ0123456789◆◇◈";
var PLACEHOLDER_GLYPH = "◆";
var SCRAMBLE_TICK_MS = 32;
var LOCK_STAGGER_MS = 38;
function randomGlyph(seed) {
	return SCRAMBLE_GLYPHS[seed % 68] ?? "А";
}
function groupCellsIntoWords(cells) {
	const words = [];
	let current = [];
	cells.forEach((cell) => {
		if (cell.isSpace) {
			if (current.length > 0) {
				words.push(current);
				current = [];
			}
			return;
		}
		current.push(cell);
	});
	if (current.length > 0) words.push(current);
	return words;
}
function buildCells(lines) {
	const cells = [];
	let letterIndex = 0;
	lines.forEach((line, lineIndex) => {
		[...line.text].forEach((char, charIndex) => {
			const isSpace = char === " ";
			cells.push({
				id: `${lineIndex}-${charIndex}`,
				char,
				isSpace,
				accent: line.accent,
				lineIndex,
				letterIndex: isSpace ? -1 : letterIndex++
			});
		});
	});
	return cells;
}
function KineticHeadline({ lines, className }) {
	const cells = (0, import_react.useMemo)(() => buildCells(lines), [lines]);
	const letterCells = (0, import_react.useMemo)(() => cells.filter((cell) => !cell.isSpace), [cells]);
	const lineIndexes = (0, import_react.useMemo)(() => [...new Set(cells.map((cell) => cell.lineIndex))], [cells]);
	const glyphRefs = (0, import_react.useRef)([]);
	const lockedFlags = (0, import_react.useRef)([]);
	const [armed, setArmed] = (0, import_react.useState)(false);
	const [shockwave, setShockwave] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const glyphs = glyphRefs.current;
		if (prefersReducedMotion()) {
			letterCells.forEach((cell, index) => {
				const glyph = glyphs[index];
				if (glyph) {
					glyph.textContent = cell.char;
					glyph.classList.remove("kinetic-letter-scrambling", "kinetic-letter-locked");
					if (cell.accent) glyph.classList.add("text-gradient-crimson");
				}
			});
			setArmed(true);
			return;
		}
		let cancelled = false;
		let rafId = 0;
		let lastTick = 0;
		let scrambleSeed = Math.floor(Math.random() * 1e3);
		const lockTimers = [];
		lockedFlags.current = letterCells.map(() => false);
		letterCells.forEach((_, index) => {
			const glyph = glyphs[index];
			if (!glyph) return;
			glyph.textContent = PLACEHOLDER_GLYPH;
			glyph.classList.add("kinetic-letter-scrambling");
			glyph.classList.remove("kinetic-letter-locked", "text-gradient-crimson");
		});
		setShockwave(false);
		setArmed(true);
		const tick = (time) => {
			if (cancelled) return;
			if (time - lastTick >= SCRAMBLE_TICK_MS) {
				lastTick = time;
				scrambleSeed += 17;
				for (let index = 0; index < letterCells.length; index += 1) {
					if (lockedFlags.current[index]) continue;
					const glyph = glyphs[index];
					if (!glyph) continue;
					glyph.textContent = randomGlyph(scrambleSeed + index * 13);
				}
			}
			rafId = window.requestAnimationFrame(tick);
		};
		rafId = window.requestAnimationFrame(tick);
		letterCells.forEach((cell, index) => {
			lockTimers.push(window.setTimeout(() => {
				if (cancelled) return;
				lockedFlags.current[index] = true;
				const glyph = glyphs[index];
				if (!glyph) return;
				glyph.textContent = cell.char;
				glyph.classList.remove("kinetic-letter-scrambling");
				glyph.classList.add("kinetic-letter-locked");
				if (cell.accent) glyph.classList.add("text-gradient-crimson");
			}, cell.letterIndex * LOCK_STAGGER_MS));
		});
		const settleAt = letterCells.length * LOCK_STAGGER_MS + 420;
		lockTimers.push(window.setTimeout(() => {
			if (cancelled) return;
			window.cancelAnimationFrame(rafId);
			setShockwave(true);
		}, settleAt));
		return () => {
			cancelled = true;
			window.cancelAnimationFrame(rafId);
			lockTimers.forEach((timer) => window.clearTimeout(timer));
		};
	}, [letterCells]);
	const plainText = lines.map((line) => line.text).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		"aria-label": plainText,
		className: cn("kinetic-headline relative mt-6 max-w-full text-[clamp(1.85rem,8.2vw,4.5rem)] font-bold leading-[1.05]", armed && "kinetic-headline-armed", shockwave && "kinetic-headline-shockwave", className),
		children: lineIndexes.map((lineIndex) => {
			const words = groupCellsIntoWords(cells.filter((cell) => cell.lineIndex === lineIndex));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "kinetic-line",
				children: words.map((word, wordIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kinetic-word",
					children: word.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"aria-hidden": true,
						className: "kinetic-letter",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kinetic-letter-sizer",
							children: cell.char
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: (node) => {
								glyphRefs.current[cell.letterIndex] = node;
							},
							className: "kinetic-letter-glyph kinetic-letter-scrambling",
							onAnimationEnd: (event) => {
								if (event.animationName !== "kinetic-lock") return;
								event.currentTarget.classList.remove("kinetic-letter-locked");
							},
							children: PLACEHOLDER_GLYPH
						})]
					}, cell.id))
				}), wordIndex < words.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kinetic-space",
					"aria-hidden": true,
					children: " "
				}) : null] }, `${lineIndex}-word-${wordIndex}`))
			}, lines[lineIndex]?.text ?? lineIndex);
		})
	});
}
var hero_amg_s63_default = "/assets/hero-amg-s63-C9q6foO6.png";
var HERO_PARALLAX_PX = 90;
var HERO_IMAGE_WIDTH = "110%";
var HERO_IMAGE_SHIFT_X = "-8%";
var HERO_OVERLAY_OPACITY = .28;
var STAT_POP_BASE_DELAY_MS = 2100;
var STAT_POP_STEP_MS = 140;
var SUBCOPY_DELAY_MS = 1750;
var CTA_DELAY_MS = 1900;
var HEADLINE_LINES = [
	{
		text: "Центр оклейки и",
		accent: false
	},
	{
		text: "полимерной реставрации",
		accent: false
	},
	{
		text: "в Минске",
		accent: true
	}
];
var STATS = [
	{
		icon: Shield,
		label: "Бессрочная гарантия на оклейку"
	},
	{
		icon: Sparkles,
		label: "Не пользуемся китайским сырьём"
	},
	{
		icon: Paintbrush,
		label: "Полимерная реставрация лакокрасочного покрытия"
	}
];
function Hero() {
	const { open } = useLeadModal();
	const parallaxY = useParallax(HERO_PARALLAX_PX);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] overflow-hidden pt-32 md:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 will-change-transform",
				style: { transform: `translate3d(0, ${parallaxY}px, 0) scale(${1 + parallaxY * 4e-4})` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-enter absolute inset-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_amg_s63_default,
							alt: "Автомобиль в студии Olympic Detailing",
							width: 880,
							height: 780,
							className: "absolute top-0 left-0 h-full max-w-none object-cover",
							style: {
								width: HERO_IMAGE_WIDTH,
								transform: `translateX(${HERO_IMAGE_SHIFT_X})`
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-orb pointer-events-none absolute -left-[8%] top-[18%] size-[min(42vmax,28rem)] rounded-full",
						style: { background: "radial-gradient(circle, color-mix(in oklch, var(--crimson) 28%, transparent) 0%, transparent 68%)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-orb pointer-events-none absolute -right-[12%] bottom-[10%] size-[min(28vmax,18rem)] rounded-full opacity-70",
						style: {
							background: "radial-gradient(circle, color-mix(in oklch, var(--crimson) 16%, transparent) 0%, transparent 70%)",
							animationDelay: "-4s"
						},
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: `oklch(0.12 0.01 30 / ${HERO_OVERLAY_OPACITY})` },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 top-0 h-[18%]",
						style: { background: "linear-gradient(to bottom, oklch(0.08 0.01 30 / 0.45) 0%, transparent 100%)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(90deg, oklch(0.12 0.01 30 / 0.55) 0%, oklch(0.12 0.01 30 / 0.28) 22%, oklch(0.12 0.01 30 / 0.1) 42%, transparent 62%)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 h-[18%]",
						style: { background: "linear-gradient(to top, var(--background) 0%, color-mix(in oklch, var(--background) 40%, transparent) 55%, transparent 100%)" },
						"aria-hidden": true
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center px-5 pb-24 md:px-8 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KineticHeadline, {
						lines: HEADLINE_LINES,
						className: "text-white text-[clamp(1.75rem,6.5vw,4rem)] leading-[1.08]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-text-enter mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg",
						style: { animationDelay: `${SUBCOPY_DELAY_MS}ms` },
						children: "Защита кузова, оклейка пленками и профессиональная шумоизоляция для вашей машины"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-text-enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
						style: { animationDelay: `${CTA_DELAY_MS}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							onClick: () => open(),
							className: "hero-gleam group h-14 px-8 text-xs font-bold uppercase tracking-[0.2em] shadow-crimson",
							children: ["Узнать подробности", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "transition-transform duration-300 group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "inline-flex h-14 items-center justify-center rounded-md border border-white/45 bg-white/10 px-8 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/18",
							children: "Наши услуги"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3",
						children: STATS.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "hero-stat-pop flex items-center gap-3",
							style: { animationDelay: `${STAT_POP_BASE_DELAY_MS + index * STAT_POP_STEP_MS}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, {
								className: "icon-bob size-5 shrink-0 text-crimson-glow",
								style: { animationDelay: `${index * .35}s` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.15em] text-white/88",
								children: stat.label
							})]
						}, stat.label))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#services",
				"aria-label": "Листать вниз",
				className: "scroll-hint absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-[0.3em]",
					children: "Листать"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4 text-crimson-glow" })]
			})
		]
	});
}
var SERVICES_CATALOG = [
	{
		id: "polymer-chips",
		title: "Полимерная реставрация сколов",
		tag: "Акцент",
		teaser: "Восстанавливаем сколы и повреждения ЛКП полимерной технологией — без полной перекраски детали.",
		details: ["Полимерная реставрация сколов позволяет вернуть целостность лакокрасочного покрытия локально: убираем следы ударов, мелкие дефекты и «кратеры» на кузове.", "Работаем аккуратно и точечно — сохраняем заводской вид детали и защищаем восстановленный участок от дальнейшего разрушения."],
		image: "/assets/service-polymer-chips-BWBZPd3F.png",
		imageAlt: "Полимерная реставрация сколов на кузове",
		featured: true
	},
	{
		id: "ppf",
		title: "Оклейка PPF",
		tag: "Защита",
		teaser: "Полиуретановая антигравийная плёнка защищает кузов от сколов, царапин и реагентов.",
		details: ["PPF — один из лучших способов защитить кузов при городской и трассовой эксплуатации. Используем плотные премиальные плёнки, чтобы сохранить заводской лак.", "Через несколько лет плёнку можно снять — и под ней останется ЛКП в состоянии, близком к новому."],
		image: "/assets/service-ppf-CLdlONff.png",
		imageAlt: "Оклейка кузова защитной плёнкой PPF"
	},
	{
		id: "vinyl",
		title: "Оклейка виниловой плёнкой",
		tag: "Стиль",
		teaser: "Меняем цвет и стиль автомобиля винилом: полный окрас, акценты или защита отдельных зон.",
		details: ["Виниловая оклейка позволяет изменить внешний вид машины без перекраски: матовые, глянцевые и текстурные плёнки под ваш стиль.", "Работаем с полной оклейкой кузова и локальными зонами — капот, крыша, зеркала, акцентные элементы."],
		image: "/assets/service-vinyl-C9ZeKokD.png",
		imageAlt: "Оклейка виниловой плёнкой"
	},
	{
		id: "tinting",
		title: "Тонировка",
		tag: "Стиль",
		teaser: "Профессиональная тонировка стёкол: комфорт, защита от солнца и аккуратный внешний вид.",
		details: ["Тонируем боковые, задние и лобовое стекло с соблюдением технологии: без пузырей, заломов и отслоений.", "Подбираем степень затемнения под задачу — от лёгкой тонировки до более тёмных вариантов в рамках допустимых норм."],
		image: "/assets/service-tinting-DxtkUYwq.png",
		imageAlt: "Тонировка автомобильных стёкол"
	},
	{
		id: "ceramic",
		title: "Керамическое покрытие",
		tag: "Защита",
		teaser: "Керамика усиливает блеск, защищает ЛКП от царапин и реагентов и упрощает мойку.",
		details: ["Керамическое покрытие создаёт дополнительный защитный слой на лаке: меньше пачкается, легче моется, дольше сохраняет глубину цвета.", "Подбираем состав под задачу и режим эксплуатации — от городской езды до интенсивной трассы."],
		image: "/assets/service-ceramic-work-HVyODUTC.png",
		imageAlt: "Нанесение керамического покрытия"
	},
	{
		id: "leather",
		title: "Реставрация кожи",
		tag: "Салон",
		teaser: "Восстанавливаем кожаный салон: потёртости, трещины, цвет и мягкость материала.",
		details: ["Реставрация кожи возвращает сиденьям и элементам салона аккуратный вид: убираем потёртости, восстанавливаем цвет и защищаем поверхность.", "Работаем с рулём, сиденьями, дверными картами и другими кожаными элементами."],
		image: "/assets/service-leather-5llxAUyk.png",
		imageAlt: "Реставрация кожаного салона"
	},
	{
		id: "polishing",
		title: "Полировка",
		tag: "Восстановление",
		teaser: "Возвращаем кузову зеркальный блеск и убираем паутинку, потёртости и следы реагентов.",
		details: ["Полировка устраняет неглубокие царапины, «паутинку» и следы от мойки — поверхность снова выглядит насыщенной и глубокой.", "Подбираем степень абразива под состояние лака, чтобы не снять лишнего и получить чистый блеск."],
		image: "/assets/service-polishing-WxRqGQ0S.png",
		imageAlt: "Полировка кузова машины"
	},
	{
		id: "dry-cleaning",
		title: "Химчистка",
		tag: "Салон",
		teaser: "Глубокая химчистка салона: ткани, кожа, пластик и труднодоступные зоны.",
		details: ["Удаляем загрязнения, запахи и налёт с сидений, потолка, ковров и пластика. Возвращаем салону свежий и ухоженный вид.", "Используем профессиональную химию и оборудование, подходящие для разных типов материалов."],
		image: "/assets/service-dry-cleaning-hOeyKvGs.png",
		imageAlt: "Химчистка салона автомобиля"
	},
	{
		id: "wash",
		title: "Мойка",
		tag: "Уход",
		teaser: "Аккуратная детейлинг-мойка без риска для лака: кузов, диски и труднодоступные места.",
		details: ["Бережная мойка с правильной техникой и материалами — без круговых царапин и агрессивной химии.", "Моем кузов, колёсные диски и детали, которые обычно остаются в тени на обычных мойках."],
		image: "/assets/service-wash-Ba_iapqV.png",
		imageAlt: "Детейлинг-мойка автомобиля"
	}
];
var MARQUEE_ITEMS = [
	...SERVICES_CATALOG.map((service) => service.tag),
	"Olympic Detailing",
	"Минск"
];
function MotionMarquee() {
	const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden border-y border-border/70 bg-surface-2 py-4",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "motion-marquee flex w-max gap-10 whitespace-nowrap",
			children: row.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "◆"
				}), item]
			}, `${item}-${index}`))
		})
	});
}
var work_example_1a_default = "/assets/work-example-1a-4BYCnDBc.jpg";
var work_example_1b_default = "/assets/work-example-1b-DtQ8ckG2.jpg";
var work_example_1c_default = "/assets/work-example-1c-CdJvw364.jpg";
var work_example_1d_default = "/assets/work-example-1d-BTN43TKs.jpg";
var work_example_1e_default = "/assets/work-example-1e-BBD0zzeF.png";
var work_example_2a_default = "/assets/work-example-2a-DBv-CfCi.jpg";
var work_example_2b_default = "/assets/work-example-2b-9GRAu1pC.jpg";
var work_example_2c_default = "/assets/work-example-2c-DXOiJut_.png";
var work_example_2d_default = "/assets/work-example-2d-Ds9aGdaO.jpg";
var work_example_2e_default = "/assets/work-example-2e-B6-2TV6J.jpg";
var work_example_2f_default = "/assets/work-example-2f-BX6EC11d.png";
var work_example_2g_default = "/assets/work-example-2g-B2nSo9EM.png";
var work_example_2h_default = "/assets/work-example-2h-BjT8z0uj.png";
var work_example_3a_default = "/assets/work-example-3a-CvJ_Mu9L.jpg";
var work_example_3b_default = "/assets/work-example-3b-D9wPt2Cq.jpg";
var work_example_3c_default = "/assets/work-example-3c-DvxZ7USD.jpg";
var work_example_3d_default = "/assets/work-example-3d-B4sTFW8t.jpg";
var work_example_3e_default = "/assets/work-example-3e-D_FUNfCC.png";
var work_example_3f_default = "/assets/work-example-3f-DQe7mT3J.png";
var work_example_3g_default = "/assets/work-example-3g-Bln-415y.jpg";
var work_example_4a_default = "/assets/work-example-4a-CTeY1nXS.jpg";
var work_example_4b_default = "/assets/work-example-4b-pIl4cxt3.jpg";
var work_example_4c_default = "/assets/work-example-4c-CsnE9JsA.png";
var work_example_4d_default = "/assets/work-example-4d-DA44pUJa.png";
var work_example_4e_default = "/assets/work-example-4e-DNwrRBPl.png";
var WORK_SLIDESHOW_INTERVAL_MS = 2e3;
var WORK_EXAMPLES = [
	{
		id: "work-1",
		images: [
			work_example_1a_default,
			work_example_1b_default,
			work_example_1c_default,
			work_example_1d_default,
			work_example_1e_default
		],
		alt: "Hyundai Palisade после детейлинга Olympic"
	},
	{
		id: "work-2",
		images: [
			work_example_2a_default,
			work_example_2b_default,
			work_example_2c_default,
			work_example_2d_default,
			work_example_2e_default,
			work_example_2f_default,
			work_example_2g_default,
			work_example_2h_default
		],
		alt: "BMW X7 после детейлинга Olympic"
	},
	{
		id: "work-3",
		images: [
			work_example_3a_default,
			work_example_3b_default,
			work_example_3c_default,
			work_example_3d_default,
			work_example_3e_default,
			work_example_3f_default,
			work_example_3g_default
		],
		alt: "BMW 3 Series после детейлинга Olympic"
	},
	{
		id: "work-4",
		images: [
			work_example_4a_default,
			work_example_4b_default,
			work_example_4c_default,
			work_example_4d_default,
			work_example_4e_default
		],
		alt: "Porsche Macan после детейлинга Olympic"
	}
];
var IN_VIEW_FALLBACK_MS = 1200;
function isInViewport(node) {
	const rect = node.getBoundingClientRect();
	const viewHeight = window.innerHeight || document.documentElement.clientHeight;
	return rect.top < viewHeight * .85 && rect.bottom > viewHeight * .08;
}
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [armed, setArmed] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (prefersReducedMotion()) {
			setArmed(true);
			setVisible(true);
			return;
		}
		if (!node || typeof IntersectionObserver === "undefined") {
			setArmed(true);
			setVisible(true);
			return;
		}
		let cancelled = false;
		let fallbackTimer = 0;
		const show = () => {
			if (cancelled) return;
			setVisible(true);
		};
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				show();
				observer.disconnect();
				window.clearTimeout(fallbackTimer);
			}
		}, {
			threshold: .18,
			rootMargin: "0px 0px -12% 0px"
		});
		const armFrame = window.requestAnimationFrame(() => {
			if (cancelled) return;
			setArmed(true);
			observer.observe(node);
			fallbackTimer = window.setTimeout(() => {
				if (!cancelled && isInViewport(node)) show();
			}, IN_VIEW_FALLBACK_MS);
		});
		return () => {
			cancelled = true;
			observer.disconnect();
			window.cancelAnimationFrame(armFrame);
			window.clearTimeout(fallbackTimer);
		};
	}, []);
	return {
		ref,
		armed,
		visible
	};
}
var VARIANT_PENDING = {
	up: "reveal-pending",
	left: "reveal-pending reveal-pending-left",
	right: "reveal-pending reveal-pending-right",
	scale: "reveal-pending reveal-pending-scale",
	cascade: "reveal-pending reveal-pending-cascade"
};
function Reveal({ children, delay = 0, className, variant = "up", as: As = "div" }) {
	const { ref, armed, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
		className: cn("reveal", armed && !visible && VARIANT_PENDING[variant], visible && "reveal-in", className),
		children
	});
}
function ServiceMedia({ src, alt, className }) {
	if (src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		loading: "lazy",
		width: 960,
		height: 720,
		className: cn("size-full object-cover", className)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex size-full flex-col items-center justify-center gap-3 bg-[linear-gradient(145deg,var(--surface-2),var(--muted)_55%,var(--background))]", className),
		role: "img",
		"aria-label": `${alt} — фото скоро`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-14 items-center justify-center rounded-full border border-primary/40 bg-background/40 text-primary shadow-crimson",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-6" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground",
			children: "Фото скоро"
		})]
	});
}
function ServiceDetailsDialog({ service, open, onOpenChange, onOrder }) {
	if (!service) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[90vh] max-w-2xl flex-col gap-0 overflow-hidden border-border bg-surface p-0 shadow-[0_24px_60px_-28px_oklch(0.2_0.02_30_/_0.45)] sm:rounded-md [&>button]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto aspect-square w-[min(100%,min(42vh,22rem))] shrink-0 overflow-hidden border-b border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceMedia, {
						src: service.image,
						alt: service.imageAlt,
						className: "absolute inset-0 size-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
						className: "absolute right-2.5 top-2.5 z-10 flex size-8 items-center justify-center rounded-md border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Закрыть"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 space-y-4 overflow-y-auto p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
						className: "space-y-2 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px] font-semibold uppercase tracking-[0.3em] text-primary",
								children: service.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-xl font-bold uppercase leading-tight text-foreground md:text-2xl",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
								className: "sr-only",
								children: ["Подробное описание услуги ", service.title]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]",
						children: service.details.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, `${service.id}-${index}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "h-9 w-full text-[10px] font-bold uppercase tracking-[0.18em] shadow-crimson sm:w-auto sm:px-5",
						onClick: () => {
							onOpenChange(false);
							onOrder();
						},
						children: ["Заказать услугу", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})
				]
			})]
		})
	});
}
var FRAME_CLASS = "group relative aspect-square overflow-hidden rounded-md border border-border bg-surface shadow-[0_10px_24px_-20px_oklch(0.2_0.02_30_/_0.4)]";
function WorkExampleVideo({ src, alt }) {
	const videoRef = (0, import_react.useRef)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: FRAME_CLASS,
		"aria-label": alt,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref: videoRef,
			className: "size-full object-cover",
			autoPlay: true,
			muted: true,
			loop: true,
			playsInline: true,
			preload: "metadata",
			onTimeUpdate: (event) => {
				const video = event.currentTarget;
				if (!video.duration) return;
				setProgress(video.currentTime / video.duration);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				src,
				type: "video/mp4"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-2.5 pb-2 pt-6 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 1e3,
				value: Math.round(progress * 1e3),
				"aria-label": "Перемотка видео",
				className: "h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-primary/80 [&::-webkit-slider-thumb]:size-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary/80",
				onChange: (event) => {
					const video = videoRef.current;
					if (!video || !video.duration) return;
					const nextProgress = Number(event.target.value) / 1e3;
					video.currentTime = nextProgress * video.duration;
					setProgress(nextProgress);
				}
			})
		})]
	});
}
function WorkExampleSlideshow({ images, alt }) {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (images.length < 2 || paused || prefersReducedMotion()) return;
		const timerId = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % images.length);
		}, WORK_SLIDESHOW_INTERVAL_MS);
		return () => window.clearInterval(timerId);
	}, [images.length, paused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: FRAME_CLASS,
		"aria-label": alt,
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		onFocusCapture: () => setPaused(true),
		onBlurCapture: () => setPaused(false),
		children: [images.map((src, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			draggable: false,
			loading: index === 0 ? "eager" : "lazy",
			className: cn("absolute inset-0 size-full object-cover transition-opacity duration-300 ease-out", index === activeIndex ? "opacity-100" : "opacity-0")
		}, src)), images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Предыдущее фото",
				onClick: () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length),
				className: "absolute left-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/30 text-white/70 opacity-100 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-black/45 hover:text-white lg:opacity-0 lg:group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Следующее фото",
				onClick: () => setActiveIndex((prev) => (prev + 1) % images.length),
				className: "absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/30 text-white/70 opacity-100 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-black/45 hover:text-white lg:opacity-0 lg:group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 opacity-80",
				children: images.map((src, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Слайд ${index + 1}`,
					onClick: () => setActiveIndex(index),
					className: cn("h-1 rounded-full transition-all duration-300", index === activeIndex ? "w-3 bg-white/70" : "w-1 bg-white/30 hover:bg-white/50")
				}, src))
			})
		] }) : null]
	});
}
function WorkExampleCard({ example }) {
	if (example.video) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkExampleVideo, {
		src: example.video,
		alt: example.alt
	});
	if (example.images?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkExampleSlideshow, {
		images: example.images,
		alt: example.alt
	});
	return null;
}
var CARD_REVEAL_STEP_MS = 90;
function Services() {
	const { open } = useLeadModal();
	const [detailsService, setDetailsService] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "section-grid relative overflow-hidden py-16 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "scale",
				className: "motion-underline max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold uppercase tracking-[0.35em] text-primary",
						children: "Услуги"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-2xl font-bold leading-[0.95] md:text-4xl",
						children: ["Полный спектр ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-crimson",
							children: "детейлинга"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "Выберите направление — откроем детали или сразу примем заявку с нужной услугой."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: SERVICES_CATALOG.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * CARD_REVEAL_STEP_MS,
						variant: index % 2 === 0 ? "left" : "right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("group grid overflow-hidden rounded-md border bg-surface transition-all duration-400 sm:grid-cols-[148px_minmax(0,1fr)] md:grid-cols-[180px_minmax(0,1fr)]", service.featured ? "border-primary/70 shadow-[0_0_0_1px_color-mix(in_oklch,var(--crimson)_45%,transparent),0_0_28px_-2px_color-mix(in_oklch,var(--crimson)_55%,transparent),0_10px_28px_-22px_oklch(0.2_0.02_30_/_0.45)] hover:border-primary hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--crimson)_60%,transparent),0_0_36px_-2px_color-mix(in_oklch,var(--crimson)_65%,transparent)]" : "border-border shadow-[0_10px_28px_-22px_oklch(0.2_0.02_30_/_0.45)] hover:border-primary/45 hover:shadow-crimson"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-square overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceMedia, {
										src: service.image,
										alt: service.imageAlt,
										className: "transition-transform duration-700 ease-out group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-surface/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("absolute left-2.5 top-2.5 flex size-8 items-center justify-center rounded border bg-background/70 font-display text-xs font-bold text-primary backdrop-blur", service.featured ? "border-primary shadow-crimson" : "border-primary/55"),
										children: String(index + 1).padStart(2, "0")
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center gap-3 p-4 md:px-5 md:py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] font-semibold uppercase tracking-[0.3em] text-primary",
										children: service.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1.5 text-lg font-bold uppercase leading-tight text-foreground md:text-xl",
										children: service.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm leading-snug text-muted-foreground",
										children: service.teaser
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => open(),
										className: "h-9 px-4 text-[10px] font-bold uppercase tracking-[0.16em] shadow-crimson",
										children: ["Заказать", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => setDetailsService(service),
										className: "h-9 border-border bg-background/60 px-4 text-[10px] font-bold uppercase tracking-[0.16em] hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3.5" }), "Подробнее"]
									})]
								})]
							})]
						})
					}, service.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					variant: "right",
					className: "lg:sticky lg:top-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] font-semibold uppercase tracking-[0.3em] text-primary",
									children: "Портфолио"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-semibold text-foreground",
									children: "Примеры работ"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#gallery",
									className: "text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary",
									children: "Все"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-2.5",
								children: WORK_EXAMPLES.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkExampleCard, { example }, example.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								asChild: true,
								className: "h-9 w-full border-border bg-background/60 text-[10px] font-bold uppercase tracking-[0.16em] hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#gallery",
									children: ["Смотреть галерею", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})
							})
						]
					})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetailsDialog, {
			service: detailsService,
			open: detailsService !== null,
			onOpenChange: (open) => {
				if (!open) setDetailsService(null);
			},
			onOrder: () => open()
		})]
	});
}
var why_us_1_default = "/assets/why-us-1-Dkuu22c6.png";
var why_us_2_default = "/assets/why-us-2-mQ3PjNQ2.png";
var WHY_ITEMS = [
	{
		title: "Качество",
		text: "Мы используем профессиональное оборудование, инструменты и расходные материалы ведущих европейских и американских производителей. Отсутствие экономии — отсутствие производственного брака."
	},
	{
		title: "Скорость",
		text: "Мы ценим ваше время и выполняем работы точно в оговоренный срок."
	},
	{
		title: "Гарантия",
		text: "Работаем со строгим соблюдением всех технологий и несём гарантийные обязательства практически по каждой детейлинг-услуге, выполненной нашим центром."
	},
	{
		title: "Оплата",
		text: "Принимаем любой удобный способ оплаты — наличные, карта или перевод. Выбирайте тот формат, который комфортен именно вам."
	},
	{
		title: "Специалисты",
		text: "Работы выполняют квалифицированные мастера из постоянного штата — проверенные специалисты, а не разовые подрядчики."
	}
];
function PhotoSlot({ src, alt, className }) {
	if (src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		loading: "lazy",
		className: cn("size-full object-cover", className)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center justify-center bg-surface", className),
		role: "img",
		"aria-label": `${alt} — фото скоро`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-12 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground",
				children: "Фото скоро"
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "why-us",
		className: "relative overflow-hidden border-y border-border py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-[0.35]",
			style: { backgroundImage: "radial-gradient(ellipse 70% 50% at 80% 40%, color-mix(in oklch, var(--crimson) 14%, transparent), transparent 60%)" },
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "left",
				className: "motion-underline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-3 text-3xl font-bold italic leading-none md:text-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-8 w-1.5 -skew-x-12 bg-primary md:h-11",
						"aria-hidden": true
					}), "Почему выбирают нас"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10",
					children: WHY_ITEMS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 90,
						variant: index % 2 === 0 ? "left" : "up",
						...index === WHY_ITEMS.length - 1 && WHY_ITEMS.length % 2 === 1 ? { className: "sm:col-span-2 sm:max-w-md" } : {},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "size-5 shrink-0 text-foreground",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold uppercase tracking-wide md:text-2xl",
									children: item.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground md:text-[15px]",
								children: item.text
							})]
						})
					}, item.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					variant: "right",
					className: "mx-auto w-full max-w-md lg:max-w-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:ml-auto lg:mr-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-0 top-0 h-[72%] w-[78%] overflow-hidden border border-border shadow-[0_16px_40px_-28px_oklch(0.2_0.02_30_/_0.55)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoSlot, {
								src: why_us_2_default,
								alt: "Hyundai Santa Fe у студии Olympic Detailing"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 h-[48%] w-[72%]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-x-1 -bottom-1 -top-1 translate-x-1 translate-y-1 bg-primary",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative size-full overflow-hidden border border-border shadow-[0_12px_32px_-24px_oklch(0.2_0.02_30_/_0.5)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoSlot, {
									src: why_us_1_default,
									alt: "Mini Cooper в студии Olympic Detailing",
									className: "object-cover object-center"
								})
							})]
						})]
					})
				})]
			})]
		})]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "relative overflow-hidden border-y border-border py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute -left-20 bottom-10 size-64 rounded-full opacity-25",
			style: { background: "radial-gradient(circle, color-mix(in oklch, var(--crimson) 18%, transparent), transparent 70%)" },
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "left",
				className: "motion-underline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.4em] text-primary",
						children: "FAQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl font-bold leading-[0.95] md:text-5xl",
						children: [
							"Вопросы",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-crimson",
								children: "и ответы"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
						children: "Собрали то, о чём чаще всего спрашивают перед записью. Не нашли ответ — позвоните, консультация бесплатна."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				variant: "right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "faq-stagger w-full",
					children: FAQ_ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "border-b border-border/80 transition-colors duration-300 hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "py-5 text-left text-base font-semibold uppercase tracking-wide transition-all duration-300 hover:translate-x-1 hover:text-primary hover:no-underline md:text-lg",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "pb-6 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: item.a
						})]
					}, item.q))
				})
			})]
		})]
	});
}
var gallery_6_default = "/assets/gallery-6-BKe8L5qY.jpg";
var REEL_REVEAL_STEP_MS = 160;
function InstagramGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "relative overflow-hidden border-y border-border py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "left",
					className: "motion-underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.4em] text-primary",
							children: "Instagram"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl font-bold leading-[0.95] md:text-5xl",
							children: [
								"Узнавайте о новостях",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-crimson",
									children: "первыми"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "В Instagram публикуем короткие видео с реальных проектов: оклейка, шумоизоляция, полировка и керамика. Именно там первыми появляются все новинки, свежие работы и закулисье студии."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CONTACT.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:gap-3 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "float-slow size-4 text-primary" }), "Перейти в Instagram"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyNote, {
							variant: "link",
							className: "mt-4 max-w-md"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2 sm:gap-3 md:gap-4",
					style: { perspective: "1200px" },
					children: INSTAGRAM_REELS.map((reel, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * REEL_REVEAL_STEP_MS,
						variant: "cascade",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: reel.href,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": reel.title,
							className: "group relative block aspect-[9/16] overflow-hidden rounded-md border border-border bg-surface transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-crimson",
							style: { transitionDelay: `${i * 40}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									className: "size-full object-cover transition-transform duration-700 group-hover:scale-110",
									...i === 1 ? { poster: gallery_6_default } : {},
									src: reel.video,
									autoPlay: true,
									muted: true,
									loop: true,
									playsInline: true,
									preload: "auto"
								}, reel.video),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-55" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute bottom-2 left-2 right-2 flex items-center justify-center gap-1.5 rounded-sm bg-background/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-foreground shadow-sm backdrop-blur transition-transform duration-500 group-hover:-translate-y-1 sm:text-[10px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-3 shrink-0 text-primary" }), "Reels"]
								})
							]
						})
					}, reel.video))
				})]
			})
		})
	});
}
function ContactLeadForm() {
	const { values, pending, patchValues, setValues, submit } = useLeadFormState();
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (await submit({
			successTitle: "Заявка отправлена",
			successDescription: "Мы свяжемся с вами в рабочее время: 9:30 — 19:00."
		})) setValues(EMPTY_LEAD_VALUES);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "flex h-full flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
					children: "Заявка"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl font-bold uppercase tracking-wide",
					children: "Запишитесь на детейлинг"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Укажите имя и телефон — перезвоним и проконсультируем."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadFormFields, {
				idPrefix: "contact-lead",
				values,
				onChange: patchValues
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					disabled: pending,
					className: "h-12 w-full text-xs font-bold uppercase tracking-[0.2em] shadow-crimson",
					children: pending ? "Отправляем..." : "Отправить заявку"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyNote, {})]
			})
		]
	});
}
var YANDEX_MAP_CONTAINER_ID = "olympic-yandex-map";
var YANDEX_MAP_SCRIPT_SRC = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A76d3b56f25ab32d3c027830fedd1395576f2be7eadbed4dc05032d9bebb966b0&width=100%25&height=100%25&lang=ru_RU&scroll=true&id=${YANDEX_MAP_CONTAINER_ID}`;
function YandexMap() {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		document.getElementById(`${YANDEX_MAP_CONTAINER_ID}-script`)?.remove();
		container.replaceChildren();
		const script = document.createElement("script");
		script.id = `${YANDEX_MAP_CONTAINER_ID}-script`;
		script.type = "text/javascript";
		script.charset = "utf-8";
		script.async = true;
		script.src = YANDEX_MAP_SCRIPT_SRC;
		document.body.appendChild(script);
		return () => {
			script.remove();
			container.replaceChildren();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		id: YANDEX_MAP_CONTAINER_ID,
		className: "size-full min-h-[380px]",
		"aria-label": "Карта проезда к Olympic Detailing"
	});
}
var BLOCK_REVEAL_STEP_MS = 140;
var CRIMSON_DROPS = [
	{
		top: "4%",
		left: "6%",
		size: "11rem",
		opacity: .22
	},
	{
		top: "18%",
		left: "28%",
		size: "7rem",
		opacity: .16
	},
	{
		top: "8%",
		left: "58%",
		size: "14rem",
		opacity: .2
	},
	{
		top: "12%",
		left: "82%",
		size: "9rem",
		opacity: .18
	},
	{
		top: "42%",
		left: "2%",
		size: "8rem",
		opacity: .14
	},
	{
		top: "38%",
		left: "40%",
		size: "12rem",
		opacity: .17
	},
	{
		top: "48%",
		left: "72%",
		size: "6.5rem",
		opacity: .15
	},
	{
		top: "62%",
		left: "18%",
		size: "10rem",
		opacity: .19
	},
	{
		top: "68%",
		left: "52%",
		size: "8.5rem",
		opacity: .14
	},
	{
		top: "72%",
		left: "88%",
		size: "13rem",
		opacity: .21
	},
	{
		top: "84%",
		left: "8%",
		size: "7.5rem",
		opacity: .13
	},
	{
		top: "88%",
		left: "36%",
		size: "9.5rem",
		opacity: .16
	},
	{
		top: "78%",
		left: "64%",
		size: "5.5rem",
		opacity: .12
	},
	{
		top: "28%",
		left: "92%",
		size: "6rem",
		opacity: .15
	},
	{
		top: "55%",
		left: "24%",
		size: "5rem",
		opacity: .11
	}
];
function Contacts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contacts",
		className: "section-ember relative overflow-hidden border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 overflow-hidden",
			"aria-hidden": true,
			children: CRIMSON_DROPS.map((drop, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full blur-3xl",
				style: {
					top: drop.top,
					left: drop.left,
					width: drop.size,
					height: drop.size,
					opacity: drop.opacity,
					background: "radial-gradient(circle, color-mix(in oklch, var(--crimson) 55%, transparent) 0%, transparent 72%)",
					transform: "translate(-50%, -50%)"
				}
			}, `${drop.top}-${drop.left}-${index}`))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "scale",
				className: "motion-underline max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.4em] text-primary",
					children: "Контакты"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-3xl font-bold leading-[0.95] md:text-5xl",
					children: ["Приезжайте в ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-crimson",
						children: "Olympic Detailing"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch lg:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: BLOCK_REVEAL_STEP_MS,
						variant: "left",
						className: "relative z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-72 overflow-hidden rounded-md border border-border lg:h-full lg:min-h-[420px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YandexMap, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 280,
						variant: "scale",
						className: "relative z-20 lg:-mx-1.5 lg:-my-1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "surface-panel h-full rounded-md border border-primary/45 p-6 shadow-[0_0_0_1px_color-mix(in_oklch,var(--crimson)_25%,transparent),0_18px_48px_-28px_color-mix(in_oklch,var(--crimson)_35%,transparent),0_12px_32px_-24px_oklch(0.2_0.02_30_/_0.28)] md:p-8 lg:scale-[1.03]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLeadForm, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 420,
						variant: "right",
						className: "relative z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-panel flex h-full flex-col justify-between gap-8 rounded-md border border-border p-6 md:p-8 lg:min-h-[420px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "contact-stagger space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "icon-bob mt-1 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Телефон"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACT.phoneHref,
											className: "font-display text-xl font-bold tracking-wide transition-colors hover:text-primary",
											children: CONTACT.phone
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											className: "icon-bob mt-1 size-5 shrink-0 text-primary",
											style: { animationDelay: "0.4s" }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
												children: "Режим работы"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-xl font-bold tracking-wide",
												children: CONTACT.hoursShort
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: CONTACT.hours
											})
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "icon-bob mt-1 size-5 shrink-0 text-primary",
											style: { animationDelay: "0.8s" }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Адрес"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACT.mapsUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "font-display text-xl font-bold tracking-wide transition-colors hover:text-primary",
											children: CONTACT.address
										})] })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full min-w-0 flex-col gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "h-12 w-full min-w-0 px-4 text-[11px] font-bold uppercase tracking-[0.14em] shadow-crimson transition-transform duration-300 hover:-translate-y-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACT.phoneHref,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Позвонить"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									className: "h-12 w-full min-w-0 border-border bg-transparent px-4 text-[11px] font-bold uppercase tracking-[0.14em] transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-transparent hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACT.whatsapp,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "WhatsApp"]
									})
								})]
							})]
						})
					})
				]
			})]
		})]
	});
}
/** Invisible to users — only for search engines. */
function JsonLd({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadModalProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: buildHomeJsonLd() }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionMarquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramGrid, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacts, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
