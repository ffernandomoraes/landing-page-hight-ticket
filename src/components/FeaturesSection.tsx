import AnimatedStatsCard from "@/components/AnimatedStatsCard";
import { TrendingUp, Users, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFBC00] to-[#FFD700] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* First Column - Main Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">
                Tudo o que você precisa para criar, vender e escalar infoprodutos de alto valor
              </span>
            </h2>
            
            <Button 
              variant="outline"
              size="default"
            >
              Fale com um Gerente de Contas da Eduzz
            </Button>
          </div>
          
          {/* Second Column - Stats and Details */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <AnimatedStatsCard
                number={50}
                unit="Bilhões"
                description="De reais em vendas"
                lordIcon={{
                  src: "https://cdn.lordicon.com/ihkpbcjb.json",
                  size: 50
                }}
                suffix="Bilhões"
                colorClass="text-blue-900"
              />
              <AnimatedStatsCard
                number={25}
                unit="Milhões"
                description="De compradores"
                lordIcon={{
                  src: "https://cdn.lordicon.com/ipkvjmpu.json",
                  size: 50
                }}
                suffix="Milhões"
                colorClass="text-blue-700"
              />
              <AnimatedStatsCard
                number={200}
                unit="Mil"
                description="Produtores vendendo aqui"
                lordIcon={{
                  src: "https://cdn.lordicon.com/jdnoclpe.json",
                  size: 50
                }}
                suffix="Mil"
                colorClass="text-blue-500"
              />
            </div>
            
            <p className="text-base text-gray-800 leading-relaxed">
              Na Eduzz, você reúne em um único lugar a gestão de cursos online e eventos presenciais, com opções de pagamento via Pix ou cartão (parcelado em até 18 x) e uma área de membros white‑label com a sua marca. Tenha relatórios detalhados de desempenho e escale negócios de alto valor com segurança e praticidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;