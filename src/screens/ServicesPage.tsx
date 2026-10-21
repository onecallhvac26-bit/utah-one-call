import { SectionReveal } from "@/components/SectionReveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { KeywordContentSection } from "@/components/KeywordContentSection";
import { PageFaqSection } from "@/components/PageFaqSection";
import { PageQuickAnswerSection } from "@/components/PageAnswersSection";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { HeaderShell } from "./services/HeaderShell";
import { ServicesHeroSection } from "./services/ServicesHeroSection";
import { ServiceToc } from "./services/ServiceToc";
import {
  InstallSection,
  MaintenanceSection,
  RepairSection,
  ServiceTuneUpSection,
} from "./services/ServiceSections";
import { BundleSection } from "./services/BundleSection";
import { ServiceDecisionSection } from "./services/ServiceDecisionSection";
import { ServicePlanningResourceSection } from "./services/ServicePlanningResourceSection";
import { FooterShell } from "./services/FooterShell";
import {
  servicesAnswersContent,
  servicesKeywordContent,
} from "./services/services-data";

export default function ServicesPage() {
  return (
    <div className="one-call-services">
      <HeaderShell />
      <main>
        <SectionReveal index={0}><ServicesHeroSection /></SectionReveal>
        <SectionReveal index={1}><GoogleReviewsSection /></SectionReveal>
        <SectionReveal index={2}><ServiceToc /></SectionReveal>
        <SectionReveal index={3}><InstallSection /></SectionReveal>
        <SectionReveal index={4}><RepairSection /></SectionReveal>
        <SectionReveal index={5}><ServiceTuneUpSection /></SectionReveal>
        <SectionReveal index={6}><MaintenanceSection /></SectionReveal>
        <SectionReveal index={7}><ServiceDecisionSection /></SectionReveal>
        <SectionReveal index={8}><BundleSection /></SectionReveal>
        <SectionReveal index={9}><ServicePlanningResourceSection /></SectionReveal>
        <SectionReveal index={10}><KeywordContentSection content={servicesKeywordContent} /></SectionReveal>
        <SectionReveal index={11}><PageQuickAnswerSection content={servicesAnswersContent} /></SectionReveal>
        <SectionReveal index={12}><PageFaqSection content={servicesAnswersContent} /></SectionReveal>
        <SectionReveal index={13}><RelatedPagesSection page="services" /></SectionReveal>
      </main>
      <SectionReveal index={14}><FooterShell /></SectionReveal>
    </div>
  );
}
