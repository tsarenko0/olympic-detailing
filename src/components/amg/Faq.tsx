import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/amg-data";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="relative border-y border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold leading-[0.95] md:text-5xl">
            Вопросы
            <br />
            <span className="text-gradient-crimson">и ответы</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Собрали то, о чём чаще всего спрашивают перед записью. Не нашли ответ — позвоните,
            консультация бесплатна.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-border/80"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold uppercase tracking-wide hover:text-primary hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
