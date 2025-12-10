import { HeroSection } from "@/components/landing/hero-section";
import { ContentSection } from "@/components/landing/content-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContentSection />
      <CtaSection />
    </main>
  );
}
