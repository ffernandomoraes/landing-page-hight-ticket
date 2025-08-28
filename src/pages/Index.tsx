import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StrategicPackagesSection from "@/components/StrategicPackagesSection";
import ConversionResourcesSection from "@/components/ConversionResourcesSection";
import ProductResourcesSection from "@/components/ProductResourcesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SuccessCasesSection from "@/components/SuccessCasesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StrategicPackagesSection />
      <ConversionResourcesSection />
      <SuccessCasesSection />
      <ProductResourcesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;