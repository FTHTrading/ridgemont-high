import { PromoBanner } from "@/components/landing/promo-banner";
import { HeroSection } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { StatsSection } from "@/components/landing/stats-section";
import { MeetTeachers } from "@/components/landing/meet-teachers";
import { LabShowcase } from "@/components/landing/lab-showcase";
import { CurrentEventsPreview } from "@/components/landing/current-events-preview";
import { CourseTracks } from "@/components/landing/course-tracks";
import { TrustSection } from "@/components/landing/trust-section";
import { CtaSection } from "@/components/landing/cta-section";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ridgemont-offBlack-900">
      <PromoBanner />
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <StatsSection />
        <MeetTeachers />
        <LabShowcase />
        <CurrentEventsPreview />
        <CourseTracks />
        <TrustSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
