import { SectionReveal } from "@/components/SectionReveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { HeaderShell } from "./home/HeaderShell";
import { HeroSection } from "./home/HeroSection";
import { ServicesSection } from "./home/ServicesSection";
import { LocalCrewSection } from "./home/LocalCrewSection";
import { PricingSection } from "./home/PricingSection";
import { ProcessSection } from "./home/ProcessSection";
import { ServiceAreaSection } from "./home/ServiceAreaSection";
import { HomeQuickAnswerSection } from "./home/HomeQuickAnswerSection";
import { FaqSection } from "./home/FaqSection";
import { HomeQuoteSection } from "./home/HomeQuoteSection";
import { CallToActionSection } from "./home/CallToActionSection";
import { FooterShell } from "./home/FooterShell";

export default function HomePage() {
  return (
    <div className="one-call-page">
      <HeaderShell />
      <main>
        <SectionReveal index={0}><HeroSection /></SectionReveal>
        <SectionReveal index={1}><GoogleReviewsSection /></SectionReveal>
        <SectionReveal index={2}><ServicesSection /></SectionReveal>
        <SectionReveal index={3}><LocalCrewSection /></SectionReveal>
        <SectionReveal index={4}><PricingSection /></SectionReveal>
        <SectionReveal index={5}><ProcessSection /></SectionReveal>
        <SectionReveal index={6}><ServiceAreaSection /></SectionReveal>
        <SectionReveal index={7}><HomeQuoteSection /></SectionReveal>
        <SectionReveal index={8}><CallToActionSection /></SectionReveal>
        <SectionReveal index={9}><HomeQuickAnswerSection /></SectionReveal>
        <SectionReveal index={10}><FaqSection /></SectionReveal>
      </main>
      <SectionReveal index={11}><FooterShell /></SectionReveal>
    </div>
  );
}
