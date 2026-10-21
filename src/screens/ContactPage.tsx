import { SectionReveal } from "@/components/SectionReveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { KeywordContentSection } from "@/components/KeywordContentSection";
import { PageFaqSection } from "@/components/PageFaqSection";
import { PageQuickAnswerSection } from "@/components/PageAnswersSection";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { HeaderShell } from "./contact/HeaderShell";
import { ContactHeroSection } from "./contact/ContactHeroSection";
import { ContactDetailsSection } from "./contact/ContactDetailsSection";
import { ServiceAreaSection } from "./contact/ServiceAreaSection";
import { FooterShell } from "./contact/FooterShell";
import {
  contactAnswersContent,
  contactKeywordContent,
} from "./contact/contact-data";

export default function ContactPage() {
  return (
    <div className="one-call-contact">
      <HeaderShell />
      <main>
        <SectionReveal index={0}><ContactHeroSection /></SectionReveal>
        <SectionReveal index={1}><ContactDetailsSection /></SectionReveal>
        <SectionReveal index={2}><GoogleReviewsSection /></SectionReveal>
        <SectionReveal index={3}><ServiceAreaSection /></SectionReveal>
        <SectionReveal index={4}><KeywordContentSection content={contactKeywordContent} /></SectionReveal>
        <SectionReveal index={5}><PageQuickAnswerSection content={contactAnswersContent} /></SectionReveal>
        <SectionReveal index={6}><PageFaqSection content={contactAnswersContent} /></SectionReveal>
        <SectionReveal index={7}><RelatedPagesSection page="contact" /></SectionReveal>
      </main>
      <SectionReveal index={8}><FooterShell /></SectionReveal>
    </div>
  );
}
