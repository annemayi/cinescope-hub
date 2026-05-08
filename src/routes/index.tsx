import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MovieGallery } from "@/components/MovieGallery";
import { ReviewSection } from "@/components/ReviewSection";
import { AsideSection } from "@/components/AsideSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MovieGallery />
        <ReviewSection />
        <AsideSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
