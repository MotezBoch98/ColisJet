import Navbar from "./ui/navbar";
import HeroSection from "./ui/landing/hero-section";
import ImageSection from "./ui/landing/image-hero-section";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <HeroSection />
        <ImageSection />
      </div>
    </main>
  );
}
