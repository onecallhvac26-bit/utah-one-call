import { SectionReveal } from "@/components/SectionReveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { KeywordContentSection } from "@/components/KeywordContentSection";
import { PageFaqSection } from "@/components/PageFaqSection";
import { PageQuickAnswerSection } from "@/components/PageAnswersSection";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { HeaderShell } from "./about/HeaderShell";
import { OneCrewSection } from "./about/OneCrewSection";
import { PeopleSection } from "./about/PeopleSection";
import { MeetJesseSection } from "./about/MeetJesseSection";
import { ValuesSection } from "./about/ValuesSection";
import { CompanyFactSheetSection } from "./about/CompanyFactSheetSection";
import { ServiceAreaSection } from "./about/ServiceAreaSection";
import { WorkWithOneCallSection } from "./about/WorkWithOneCallSection";
import { FooterShell } from "./about/FooterShell";
import {
  aboutAnswersContent,
  aboutKeywordContent,
} from "./about/about-data";

export default function AboutPage() {
  return (
    <div className="one-call-about">
      <HeaderShell />
      <main>
        <SectionReveal index={0}><OneCrewSection /></SectionReveal>
        <SectionReveal index={1}><GoogleReviewsSection /></SectionReveal>
        <SectionReveal index={2}><MeetJesseSection /></SectionReveal>
        <SectionReveal index={3}><ValuesSection /></SectionReveal>
        <SectionReveal index={4}><KeywordContentSection content={aboutKeywordContent} /></SectionReveal>
        <SectionReveal index={5}><PeopleSection /></SectionReveal>
        <SectionReveal index={6}><CompanyFactSheetSection /></SectionReveal>
        <SectionReveal index={7}><ServiceAreaSection /></SectionReveal>
        <SectionReveal index={8}><WorkWithOneCallSection /></SectionReveal>
        <SectionReveal index={9}><PageQuickAnswerSection content={aboutAnswersContent} /></SectionReveal>
        <SectionReveal index={10}><PageFaqSection content={aboutAnswersContent} /></SectionReveal>
        <SectionReveal index={11}><RelatedPagesSection page="about" /></SectionReveal>
      </main>
      <SectionReveal index={12}><FooterShell /></SectionReveal>
    </div>
  );
}
