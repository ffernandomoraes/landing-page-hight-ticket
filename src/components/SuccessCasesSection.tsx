import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Users, TrendingUp, Award, Target, Calendar, DollarSign, PlayCircle, Star, X } from "lucide-react";
import { useState } from "react";

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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos cases de sucesso e como ajudamos profissionais 
            a alcançarem resultados extraordinários em seus negócios
          </p>
        </div>

        {/* Seção do Slider com Subtítulo */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Mais Cases de Sucesso
          </h3>
          <p className="text-muted-foreground">
            Descubra como outros profissionais transformaram seus negócios
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto py-2 mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-8">
              {successCases.map((case_) => (
                <CarouselItem key={case_.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-2">
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-0">
                      <div className="relative h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={case_.image}
                            alt={case_.name}
                            className="w-full h-full object-cover object-top transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900" />
                          {/* Blue overlay that disappears on hover */}
                          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-all duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                          {/* Top Space for Photo */}
                          <div className="flex-1 min-h-[200px]"></div>

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
            
            <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 rounded-full" />
            <CarouselNext className="hidden md:flex -right-16 w-12 h-12 rounded-full" />
          </Carousel>
        </div>

        {/* Card de Destaque com Vídeo */}
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Lado do Vídeo */}
                <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-video md:aspect-auto bg-slate-900 flex items-center justify-center cursor-pointer group">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                      <div className="relative z-10 text-center text-white">
                        <PlayCircle className="w-20 h-20 mx-auto mb-4 text-primary group-hover:text-primary/80 transition-colors" />
                        <p className="text-sm text-slate-300">Assista ao depoimento completo</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                    <div className="relative aspect-video w-full bg-black">
                      <button
                        onClick={() => setIsVideoModalOpen(false)}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&showinfo=0&rel=0"
                        title="Case de Sucesso - Carlos Mendes"
                        className="w-full h-full"
                        allowFullScreen
                        allow="autoplay; encrypted-media"
                      />
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Lado do Conteúdo */}
                <div className="p-8 bg-background">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src="/lovable-uploads/professional-1.jpg"
                          alt="Carlos Mendes"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Carlos Mendes</h3>
                        <p className="text-muted-foreground">Marketing Digital</p>
                        <div className="flex items-center gap-2 text-primary">
                          <div className="flex">
                            {[1,2,3,4,5].map((i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm">45K seguidores</span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-lg text-foreground italic border-l-4 border-primary pl-4">
                      "Com as estratégias da Eduzz, consegui escalar meu negócio de R$ 50K para R$ 2.5M em 18 meses. O suporte foi fundamental em cada etapa."
                    </blockquote>

                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">2.5M</div>
                        <div className="text-sm text-muted-foreground">Faturamento</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">500</div>
                        <div className="text-sm text-muted-foreground">Participantes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">3K+</div>
                        <div className="text-sm text-muted-foreground">Alunos</div>
                      </div>
                    </div>

                    <Button className="w-full">
                      Ver Case Completo
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;