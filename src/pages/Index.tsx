import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StrategicPackagesSection from "@/components/StrategicPackagesSection";
import ConversionResourcesSection from "@/components/ConversionResourcesSection";
import ProductResourcesSection from "@/components/ProductResourcesSection";
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
    </div>
  );
};

export default Index;