import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StrategicPackagesSection from "@/components/StrategicPackagesSection";
import ConversionResourcesSection from "@/components/ConversionResourcesSection";
import ProductResourcesSection from "@/components/ProductResourcesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import UnifiedCTASection from "@/components/UnifiedCTASection";
import Footer from "@/components/Footer";
import SuccessCasesSection from "@/components/SuccessCasesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="solucoes">
        <FeaturesSection />
      </section>
      <section id="casos-sucesso">
        <SuccessCasesSection />
      </section>
      <section id="estrategias">
        <StrategicPackagesSection />
      </section>
      <ConversionResourcesSection />
      <section id="recursos">
        <ProductResourcesSection />
      </section>
      <section id="depoimentos">
        <TestimonialsSection />
      </section>
      <NewsletterSection />
      <UnifiedCTASection />
      <Footer />
    </div>
  );
};

export default Index;