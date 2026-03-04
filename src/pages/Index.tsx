import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import VCMessage from "@/components/VCMessage";
import CollegesSection from "@/components/CollegesSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <VCMessage />
      <CollegesSection />
      <StatsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;