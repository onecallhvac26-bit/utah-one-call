import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { KeywordContentSection } from "@/components/KeywordContentSection";
import { PageFaqSection } from "@/components/PageFaqSection";
import { PageQuickAnswerSection } from "@/components/PageAnswersSection";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { SectionReveal } from "@/components/SectionReveal";
import { EmergencyHeroSection } from "./emergency/EmergencyHeroSection";
import {
  EmergencyResponseSection,
  EmergencySituationsSection,
} from "./emergency/EmergencySections";
import {
  emergencyAnswersContent,
  emergencyKeywordContent,
} from "./emergency/emergency-data";
import { FooterShell } from "./services/FooterShell";
import { HeaderShell } from "./services/HeaderShell";

export default function EmergencyPage() {
  return (
    <div className="one-call-services one-call-emergency">
      <HeaderShell />
      <main>
        <SectionReveal index={0}><EmergencyHeroSection /></SectionReveal>
        <SectionReveal index={1}><EmergencySituationsSection /></SectionReveal>
        <SectionReveal index={2}><EmergencyResponseSection /></SectionReveal>
        <SectionReveal index={3}><GoogleReviewsSection /></SectionReveal>
        <SectionReveal index={4}><KeywordContentSection content={emergencyKeywordContent} /></SectionReveal>
        <SectionReveal index={5}><PageQuickAnswerSection content={emergencyAnswersContent} /></SectionReveal>
        <SectionReveal index={6}><PageFaqSection content={emergencyAnswersContent} /></SectionReveal>
        <SectionReveal index={7}><RelatedPagesSection page="emergency" /></SectionReveal>
      </main>
      <SectionReveal index={8}><FooterShell /></SectionReveal>
    </div>
  );
}
