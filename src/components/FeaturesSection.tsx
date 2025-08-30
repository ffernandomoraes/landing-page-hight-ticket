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
                Escale infoprodutos com estratégias validadas
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
              Aplicamos táticas dos principais Players. Eventos, pitch de alta conversão, engajamento e construção de audiência fiel para ampliar suas margens e gerar crescimento previsível. E você conta com atendimento humano, próximo e consultivo em cada etapa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;