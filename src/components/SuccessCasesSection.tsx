import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, TrendingUp, Award, Target, Calendar, DollarSign } from "lucide-react";

interface SuccessCase {
  id: number;
  name: string;
  area: string;
  followers: string;
  image: string;
  metrics: {
    icon: React.ElementType;
    label: string;
    value: string;
  }[];
  strategy: string;
}

const successCases: SuccessCase[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    area: "Marketing Digital",
    followers: "45K",
    image: "/lovable-uploads/professional-1.jpg",
    metrics: [
      { icon: Calendar, label: "Evento", value: "500 participantes" },
      { icon: DollarSign, label: "Vendas", value: "R$ 2.5M" },
      { icon: Users, label: "Alunos", value: "+3.000 formados" }
    ],
    strategy: "Estratégia de funil de vendas com webinars de alta conversão e follow-up automatizado"
  },
  {
    id: 2,
    name: "Ana Costa",
    area: "Consultoria Empresarial",
    followers: "62K",
    image: "/lovable-uploads/professional-2.jpg",
    metrics: [
      { icon: Target, label: "ROI", value: "300% aumento" },
      { icon: TrendingUp, label: "Crescimento", value: "150% MRR" },
      { icon: Award, label: "Cases", value: "80+ empresas" }
    ],
    strategy: "Metodologia proprietária de otimização de processos com mentoria personalizada"
  },
  {
    id: 3,
    name: "Ricardo Silva",
    area: "Infoprodutos",
    followers: "38K",
    image: "/lovable-uploads/professional-3.jpg",
    metrics: [
      { icon: DollarSign, label: "Faturamento", value: "R$ 1.8M" },
      { icon: Users, label: "Comunidade", value: "12K membros" },
      { icon: Calendar, label: "Lançamentos", value: "4 por ano" }
    ],
    strategy: "Sistema de pré-lançamento com storytelling e escassez genuína para maximizar conversões"
  },
  {
    id: 4,
    name: "Mariana Oliveira",
    area: "Coaching Executivo",
    followers: "71K",
    image: "/lovable-uploads/professional-4.jpg",
    metrics: [
      { icon: Award, label: "Certificações", value: "15 programas" },
      { icon: TrendingUp, label: "Ticket Médio", value: "R$ 25K" },
      { icon: Users, label: "Executivos", value: "200+ atendidos" }
    ],
    strategy: "Programa intensivo de transformação com metodologia de resultados mensuráveis"
  },
  {
    id: 5,
    name: "Fernando Santos",
    area: "E-commerce",
    followers: "29K",
    image: "/lovable-uploads/professional-5.jpg",
    metrics: [
      { icon: DollarSign, label: "GMV", value: "R$ 5.2M" },
      { icon: TrendingUp, label: "Crescimento", value: "400% ao ano" },
      { icon: Target, label: "Conversão", value: "8.5% média" }
    ],
    strategy: "Otimização de funil de vendas com automação e personalização baseada em dados"
  },
  {
    id: 6,
    name: "Juliana Ferreira",
    area: "Saúde & Bem-estar",
    followers: "54K",
    image: "/lovable-uploads/professional-6.jpg",
    metrics: [
      { icon: Users, label: "Pacientes", value: "2.5K atendidos" },
      { icon: Award, label: "Especialização", value: "10 anos" },
      { icon: DollarSign, label: "Receita", value: "R$ 180K/mês" }
    ],
    strategy: "Metodologia holística com acompanhamento personalizado e comunidade de apoio"
  }
];

const SuccessCasesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos cases de sucesso e como ajudamos profissionais 
            a alcançarem resultados extraordinários em seus negócios
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {successCases.map((case_) => (
                <CarouselItem key={case_.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={case_.image}
                            alt={case_.name}
                            className="w-full h-full object-cover opacity-40"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/80" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                          {/* Top Space for Photo */}
                          <div className="flex-1 min-h-[120px]"></div>

                          {/* Bottom Content */}
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold">{case_.name}</h3>
                              <div className="flex items-center gap-2 text-slate-300">
                                <span className="text-sm">{case_.area}</span>
                                <span className="text-xs">•</span>
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span className="text-xs">{case_.followers} seguidores</span>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-xs text-slate-200 leading-relaxed mb-4">
                              {case_.strategy}
                            </p>

                            {/* Bottom Metrics */}
                            <div className="space-y-2">
                              {case_.metrics.map((metric, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                                  <metric.icon className="w-4 h-4 text-slate-300" />
                                  <span className="text-sm font-medium">{metric.label}:</span>
                                  <span className="text-sm font-bold text-white">{metric.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;