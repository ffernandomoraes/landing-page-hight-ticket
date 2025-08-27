import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  GraduationCap, 
  Calendar, 
  Rocket, 
  Users, 
  TrendingUp, 
  Target,
  BookOpen,
  Zap,
  DollarSign,
  Crown,
  Calendar as CalendarIcon,
  HandHeart,
  Sparkles,
  Trophy,
  Timer,
  Flame,
  Percent,
  Star,
  HeartHandshake
} from "lucide-react";

interface StrategyPackage {
  id: number;
  title: string;
  subtitle: string;
  description: Array<{
    text: string;
    icon: React.ComponentType<any>;
  }>;
  benefit: string;
  cta: string;
  icon: React.ComponentType<any>;
  titleGradient: string;
}

const strategicPackages: StrategyPackage[] = [
  {
    id: 1,
    title: "Curso + Evento Presencial + High Ticket",
    subtitle: "Autoridade e exclusividade na mesma oferta",
    description: [
      { text: "Curso digital que educa e qualifica seu público", icon: BookOpen },
      { text: "Evento presencial exclusivo para criar conexão real", icon: Users },
      { text: "Oferta high ticket para clientes mais comprometidos", icon: Crown }, 
      { text: "Sistema completo que funciona 24/7", icon: Zap }
    ],
    benefit: "maior autoridade da marca e conversão potencializada pela relação direta no evento.",
    cta: "Personalize este pacote",
    icon: GraduationCap,
    titleGradient: "from-brand-blue to-brand-yellow"
  },
  {
    id: 2,
    title: "Assinatura + Evento Presencial + High Ticket",
    subtitle: "Receita recorrente e upsell de valor elevado",
    description: [
      { text: "Receita recorrente que cresce todo mês no automático", icon: DollarSign },
      { text: "Eventos exclusivos só para assinantes VIP", icon: Trophy },
      { text: "Oferta high ticket apresentada pessoalmente", icon: Sparkles },
      { text: "Previsibilidade total de faturamento", icon: TrendingUp }
    ],
    benefit: "previsibilidade de caixa com assinaturas e oportunidade de upsell no evento.",
    cta: "Saiba como implementar",
    icon: TrendingUp,
    titleGradient: "from-brand-blue to-emerald-400"
  },
  {
    id: 3,
    title: "Lançamento pago + Evento Presencial + High Ticket",
    subtitle: "Impacto imediato e relacionamento profundo",
    description: [
      { text: "Lançamento que já gera receita desde o primeiro dia", icon: Rocket },
      { text: "Evento presencial para fortalecer relacionamentos", icon: HandHeart },
      { text: "High ticket vendido com alta conversão pós-evento", icon: Percent },
      { text: "Ciclo de vendas rápido com resultados garantidos", icon: Timer }
    ],
    benefit: "geração de receita antes do evento e maior taxa de conversão no high ticket devido ao envolvimento presencial.",
    cta: "Fale com um estrategista",
    icon: Rocket,
    titleGradient: "from-brand-blue to-sky-300"
  },
  {
    id: 4,
    title: "Evento Presencial + High Ticket",
    subtitle: "Experiência intensa e conversão máxima",
    description: [
      { text: "Evento presencial de alto impacto e exclusividade", icon: Flame },
      { text: "Venda direta com taxa de conversão premium", icon: Percent },
      { text: "Experiência imersiva que gera transformação real", icon: Star },
      { text: "Suporte completo: do planejamento à execução", icon: HeartHandshake }
    ],
    benefit: "conversão elevada pela experiência presencial e percepção de valor premium.",
    cta: "Converse com nosso gerente",
    icon: Users,
    titleGradient: "from-brand-blue to-purple-400"
  }
];

const StrategicPackagesSection = () => {
  return (
    <section className="bg-background py-28">
      <div className="container mx-auto px-4 py-2">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="mb-4 h-10 px-4 bg-transparent border-brand-blue border text-brand-blue">
              <Target className="w-4 h-4 mr-2" color="#3b88ed" />
              High Ticket
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 leading-tight">
            Pacotes Estratégicos:
          </h2>
          <p className="text-[28px] md:text-[34px] lg:text-[40px] font-thin text-brand-blue leading-tight">
            Personalização total para você vender mais
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto py-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-8">
              {strategicPackages.map((pkg) => {
                const IconComponent = pkg.icon;
                return (
                  <CarouselItem key={pkg.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-2">
                    <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border flex flex-col">
                      <CardHeader className="pb-6 pt-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg font-bold mb-2 leading-tight">
                              <span className={`bg-gradient-to-r ${pkg.titleGradient} bg-clip-text text-transparent`}>
                                {pkg.title}
                              </span>
                            </CardTitle>
                            <p className="text-sm font-medium text-primary">
                              {pkg.subtitle}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-8 flex flex-col flex-1">
                        <div className="flex flex-col h-full">
                          <ul className="text-sm text-muted-foreground space-y-3 mb-6">
                            {pkg.description.map((item, index) => {
                              const IconComponent = item.icon;
                              return (
                                <div key={index}>
                                  <li className="flex items-start gap-3">
                                    <IconComponent className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                    <span className="leading-relaxed">{item.text}</span>
                                  </li>
                                  {index < pkg.description.length - 1 && (
                                    <hr className="border-border mt-3" />
                                  )}
                                </div>
                              );
                            })}
                          </ul>
                          
                          <div className="bg-accent/50 p-3 rounded-lg mb-6 mt-auto">
                            <p className="text-xs text-foreground leading-tight">
                              <span className="font-semibold">Benefício exclusivo:</span> {pkg.benefit}
                            </p>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Target className="w-3 h-3 mr-2" />
                            {pkg.cta}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12 rounded-full" />
            <CarouselNext className="hidden md:flex -right-12 rounded-full" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StrategicPackagesSection;