import { createFileRoute } from "@tanstack/react-router";
import { LeadModalProvider } from "@/components/amg/LeadModalProvider";
import { Navbar } from "@/components/amg/Navbar";
import { Hero } from "@/components/amg/Hero";
import { MotionMarquee } from "@/components/amg/MotionMarquee";
import { Services } from "@/components/amg/Services";
import { WhyUs } from "@/components/amg/WhyUs";
import { Faq } from "@/components/amg/Faq";
import { InstagramGrid } from "@/components/amg/InstagramGrid";
import { Contacts } from "@/components/amg/Contacts";
import { Footer } from "@/components/amg/Footer";
import { JsonLd } from "@/components/amg/JsonLd";
import { buildHomeJsonLd, homeHeadMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => homeHeadMeta(),
  component: Index,
});

function Index() {
  return (
    <LeadModalProvider>
      <JsonLd data={buildHomeJsonLd()} />
      <Navbar />
      <main className="min-w-0">
        <Hero />
        <MotionMarquee />
        <Services />
        <WhyUs />
        <Faq />
        <InstagramGrid />
        <Contacts />
      </main>
      <Footer />
    </LeadModalProvider>
  );
}
