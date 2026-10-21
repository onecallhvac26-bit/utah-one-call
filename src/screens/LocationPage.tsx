import { SectionReveal } from "@/components/SectionReveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { KeywordContentSection } from "@/components/KeywordContentSection";
import { PageFaqSection } from "@/components/PageFaqSection";
import { PageQuickAnswerSection } from "@/components/PageAnswersSection";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { CountyCoverageSection } from "./location/CountyCoverageSection";
import { LocationHeroSection } from "./location/LocationHeroSection";
import { FooterShell } from "./services/FooterShell";
import { HeaderShell } from "./services/HeaderShell";
import {
  locationAnswersContent,
  locationKeywordContent,
} from "./location/location-data";

export default function LocationPage() {
  return (
    <div className="one-call-services one-call-location">
      <HeaderShell />
      <main>
        <SectionReveal index={0}>
          <LocationHeroSection />
        </SectionReveal>
        <SectionReveal index={1}>
          <GoogleReviewsSection />
        </SectionReveal>
        <SectionReveal index={2}>
          <CountyCoverageSection />
        </SectionReveal>
        <SectionReveal index={3}>
          <KeywordContentSection content={locationKeywordContent} />
        </SectionReveal>
        <SectionReveal index={4}>
          <PageQuickAnswerSection content={locationAnswersContent} />
        </SectionReveal>
        <SectionReveal index={5}>
          <PageFaqSection content={locationAnswersContent} />
        </SectionReveal>
        <SectionReveal index={6}>
          <RelatedPagesSection page="location" />
        </SectionReveal>
      </main>
      <SectionReveal index={7}>
        <FooterShell />
      </SectionReveal>
    </div>
  );
}
