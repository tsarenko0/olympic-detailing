import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const TELEGRAM_API_BASE = "https://api.telegram.org";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(100),
  phone: z.string().trim().min(5, "Укажите телефон").max(40),
});

export type ContactLeadInput = z.infer<typeof leadSchema>;

export const submitContactLead = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    const chatId = process.env["TELEGRAM_CHAT_ID"];

    if (!token || !chatId) {
      throw new Error("Telegram is not configured on the server");
    }

    const text = [
      "🆕 Новая заявка с сайта AMG",
      "",
      `👤 Имя: ${data.name}`,
      `📞 Телефон: ${data.phone}`,
    ].join("\n");

    const response = await fetch(`${TELEGRAM_API_BASE}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Telegram sendMessage failed:", details);
      throw new Error("Не удалось отправить заявку. Попробуйте позже.");
    }

    return { ok: true as const };
  });
