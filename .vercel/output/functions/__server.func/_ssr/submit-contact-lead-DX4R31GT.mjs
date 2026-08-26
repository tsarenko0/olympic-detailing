import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-contact-lead-DX4R31GT.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var TELEGRAM_API_BASE = "https://api.telegram.org";
var leadSchema = objectType({
	name: stringType().trim().min(1, "Укажите имя").max(100),
	phone: stringType().trim().min(5, "Укажите телефон").max(40)
});
var submitContactLead_createServerFn_handler = createServerRpc({
	id: "d3e5d78746fef4f74fcb04c73a82ec539db56a2d2d15e40e3b0f255be1fa9845",
	name: "submitContactLead",
	filename: "src/lib/submit-contact-lead.ts"
}, (opts) => submitContactLead.__executeServer(opts));
var submitContactLead = createServerFn({ method: "POST" }).validator(leadSchema).handler(submitContactLead_createServerFn_handler, async ({ data }) => {
	const token = process.env["TELEGRAM_BOT_TOKEN"];
	const chatId = process.env["TELEGRAM_CHAT_ID"];
	if (!token || !chatId) throw new Error("Telegram is not configured on the server");
	const text = [
		"🆕 Новая заявка с сайта Olympic Detailing",
		"",
		`👤 Имя: ${data.name}`,
		`📞 Телефон: ${data.phone}`
	].join("\n");
	const response = await fetch(`${TELEGRAM_API_BASE}/bot${token}/sendMessage`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			chat_id: chatId,
			text,
			disable_web_page_preview: true
		})
	});
	if (!response.ok) {
		const details = await response.text();
		console.error("Telegram sendMessage failed:", details);
		throw new Error("Не удалось отправить заявку. Попробуйте позже.");
	}
	return { ok: true };
});
//#endregion
export { submitContactLead_createServerFn_handler };
