// /app/page.tsx
import Navbar from "./ui/navbar";
import HeroSection from "./ui/landing-page/hero-section";
import ImageSection from "./ui/landing-page/image-hero-section";
import ServiceHeroSection from "./ui/landing-page/service-hero-section";
import TestimonialsSection from "./ui/landing-page/testimonials-section";
import StatsSection from "./ui/landing-page/stats-section";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="mt-4 flex flex-1 flex-col gap-4 md:flex-row">
          <HeroSection />
          <ImageSection />
        </div>
        <ServiceHeroSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
