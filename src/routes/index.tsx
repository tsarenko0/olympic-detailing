import { createFileRoute } from "@tanstack/react-router";
import { LeadModalProvider } from "@/components/site/LeadModalProvider";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MotionMarquee } from "@/components/site/MotionMarquee";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Faq } from "@/components/site/Faq";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
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
