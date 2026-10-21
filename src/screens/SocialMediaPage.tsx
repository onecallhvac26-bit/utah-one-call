import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { KeywordContentSection } from "@/components/KeywordContentSection";
import { PageFaqSection } from "@/components/PageFaqSection";
import { PageQuickAnswerSection } from "@/components/PageAnswersSection";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { SectionReveal } from "@/components/SectionReveal";
import { FooterShell } from "./services/FooterShell";
import { HeaderShell } from "./services/HeaderShell";
import { SocialMediaHeroSection } from "./social-media/SocialMediaHeroSection";
import {
  HomeownerUpdateSection,
  SocialContentTopicsSection,
} from "./social-media/SocialMediaSections";
import {
  socialMediaAnswersContent,
  socialMediaKeywordContent,
} from "./social-media/social-media-data";

export default function SocialMediaPage() {
  return (
    <div className="one-call-services one-call-social-media">
      <HeaderShell />
      <main>
        <SectionReveal index={0}><SocialMediaHeroSection /></SectionReveal>
        <SectionReveal index={1}><GoogleReviewsSection /></SectionReveal>
        <SectionReveal index={2}><SocialContentTopicsSection /></SectionReveal>
        <SectionReveal index={3}><HomeownerUpdateSection /></SectionReveal>
        <SectionReveal index={4}><KeywordContentSection content={socialMediaKeywordContent} /></SectionReveal>
        <SectionReveal index={5}><PageQuickAnswerSection content={socialMediaAnswersContent} /></SectionReveal>
        <SectionReveal index={6}><PageFaqSection content={socialMediaAnswersContent} /></SectionReveal>
        <SectionReveal index={7}><RelatedPagesSection page="socialMedia" /></SectionReveal>
      </main>
      <SectionReveal index={8}><FooterShell /></SectionReveal>
    </div>
  );
}
