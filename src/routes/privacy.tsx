import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/amg/Footer";
import { Logo } from "@/components/amg/Logo";
import { CONTACT } from "@/lib/amg-data";

const title = "Политика конфиденциальности — AMG Detailing";
const description =
  "Политика обработки персональных данных AMG Detailing: какие данные собираем и как используем.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Logo />
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-crimson-glow"
          >
            На главную
          </Link>
        </div>
      </header>

      <main className="px-5 py-16 md:px-8 md:py-24">
        <article className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
              Документы
            </p>
            <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">
              Политика конфиденциальности
            </h1>
            <p className="text-sm text-muted-foreground">
              AMG Detailing · Краснодар · {CONTACT.address}
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            <section className="space-y-2">
              <h2 className="text-base font-semibold uppercase tracking-wide text-foreground">
                1. Общие положения
              </h2>
              <p>
                Настоящая политика описывает порядок обработки персональных данных, которые вы
                передаёте через сайт AMG Detailing при отправке заявки на консультацию или запись.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold uppercase tracking-wide text-foreground">
                2. Какие данные мы собираем
              </h2>
              <p>При заполнении формы заявки мы можем получить:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>имя;</li>
                <li>номер телефона.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold uppercase tracking-wide text-foreground">
                3. Цели обработки
              </h2>
              <p>
                Данные используются только для связи с вами по заявке: консультации, уточнения
                деталей услуг и записи в студию. Мы не продаём персональные данные третьим лицам.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold uppercase tracking-wide text-foreground">
                4. Хранение и защита
              </h2>
              <p>
                Данные обрабатываются в объёме, необходимом для обработки заявки, и хранятся
                в течение срока, нужного для связи с вами и выполнения обязательств. Доступ к
                ним ограничен сотрудниками, которым это необходимо для работы.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold uppercase tracking-wide text-foreground">
                5. Ваши права
              </h2>
              <p>
                Вы можете запросить уточнение, обновление или удаление своих данных, а также
                отозвать согласие на обработку. Для этого напишите или позвоните по контактам
                студии:{" "}
                <a href={CONTACT.phoneHref} className="text-foreground underline underline-offset-2">
                  {CONTACT.phone}
                </a>
                .
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold uppercase tracking-wide text-foreground">
                6. Контакты
              </h2>
              <p>
                По вопросам обработки персональных данных обращайтесь в AMG Detailing:{" "}
                {CONTACT.address}, {CONTACT.phone}, режим работы {CONTACT.hoursShort}.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
