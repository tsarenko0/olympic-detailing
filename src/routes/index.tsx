import { createFileRoute } from "@tanstack/react-router";
import { LeadModalProvider } from "@/components/amg/LeadModalProvider";
import { Navbar } from "@/components/amg/Navbar";
import { Hero } from "@/components/amg/Hero";
import { Services } from "@/components/amg/Services";
import { Faq } from "@/components/amg/Faq";
import { InstagramGrid } from "@/components/amg/InstagramGrid";
import { Contacts } from "@/components/amg/Contacts";

const title = "AMG — премиальный детейлинг авто в Краснодаре";
const description =
  "Детейлинг-студия AMG в Краснодаре: оклейка защитными плёнками, шумоизоляция, полировка и керамика, химчистка салона. Ежедневно 9:30–19:00.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LeadModalProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Faq />
        <InstagramGrid />
        <Contacts />
      </main>
    </LeadModalProvider>
  );
}
