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
  Target,
  BookOpen,
  Zap,
  DollarSign,
  Crown,
  HandHeart,
  Sparkles,
  Trophy,
  Timer,
  Flame,
  Percent,
  Star,
  HeartHandshake,
  Users,
  TrendingUp,
  Rocket,
  ArrowRight
} from "lucide-react";
import LordIcon from "./LordIcon";

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
  lordIcon: {
    src: string;
    colors: string;
  };
  titleGradient: string;
  borderGradient: string;
  benefitBg: string;
  buttonClasses: string;
  dividerColor: string;
}

const strategicPackages: StrategyPackage[] = [
  {
    id: 1,
    title: "Curso + Evento Presencial\n+ High Ticket",
    subtitle: "Autoridade e exclusividade na mesma oferta",
    description: [
      { text: "Curso digital que educa e qualifica seu público", icon: BookOpen },
      { text: "Evento presencial exclusivo e de alto impacto", icon: Users },
      { text: "High ticket para clientes premium", icon: Crown }, 
      { text: "Sistema completo que funciona 24/7", icon: Zap }
    ],
    benefit: "maior autoridade da marca e conversão potencializada pela relação direta no evento.",
    cta: "Personalize este pacote",
    lordIcon: {
      src: "https://cdn.lordicon.com/amdfceua.json",
      colors: "primary:#012445,secondary:#FFBC00"
    },
    titleGradient: "from-brand-blue to-brand-yellow",
    borderGradient: "from-brand-yellow/30 to-brand-blue/30 hover:from-brand-yellow hover:to-brand-blue",
    benefitBg: "bg-brand-yellow/10",
    buttonClasses: "bg-brand-yellow text-white border-brand-yellow hover:bg-brand-yellow/80 hover:shadow-lg transition-all duration-200",
    dividerColor: "border-brand-yellow/30"
  },
  {
    id: 2,
    title: "Assinatura + Evento Presencial\n+ High Ticket",
    subtitle: "Receita recorrente mensal automática",
    description: [
      { text: "Receita recorrente mensal automática", icon: DollarSign },
      { text: "Eventos exclusivos só para assinantes VIP", icon: Trophy },
      { text: "High ticket apresentado pessoalmente", icon: Sparkles },
      { text: "Previsibilidade total de faturamento", icon: TrendingUp }
    ],
    benefit: "previsibilidade de caixa com assinaturas e oportunidade de upsell no evento.",
    cta: "Saiba como implementar",
    lordIcon: {
      src: "https://cdn.lordicon.com/alwzvvks.json",
      colors: "primary:#012445,secondary:#10B981"
    },
    titleGradient: "from-brand-blue to-emerald-400",
    borderGradient: "from-emerald-400/30 to-brand-blue/30 hover:from-emerald-400 hover:to-brand-blue",
    benefitBg: "bg-emerald-400/10",
    buttonClasses: "bg-emerald-400 text-white border-emerald-400 hover:bg-emerald-500 hover:shadow-lg transition-all duration-200",
    dividerColor: "border-emerald-400/30"
  },
  {
    id: 3,
    title: "Lançamento pago + Evento Presencial + High Ticket",
    subtitle: "Lançamento que gera receita desde o primeiro dia",
    description: [
      { text: "Lançamento com receita imediata", icon: Rocket },
      { text: "Evento para fortalecer relacionamentos", icon: HandHeart },
      { text: "High ticket com conversão elevada", icon: Percent },
      { text: "Ciclo de vendas rápido e eficaz", icon: Timer }
    ],
    benefit: "geração de receita antes do evento e maior taxa de conversão no high ticket devido ao envolvimento presencial.",
    cta: "Fale com um estrategista",
    lordIcon: {
      src: "https://cdn.lordicon.com/rqmwejgl.json",
      colors: "primary:#012445,secondary:#0EA5E9"
    },
    titleGradient: "from-brand-blue to-sky-300",
    borderGradient: "from-sky-300/30 to-brand-blue/30 hover:from-sky-300 hover:to-brand-blue",
    benefitBg: "bg-sky-300/10",
    buttonClasses: "bg-sky-300 text-white border-sky-300 hover:bg-sky-400 hover:shadow-lg transition-all duration-200",
    dividerColor: "border-sky-300/30"
  },
  {
    id: 4,
    title: "Evento Presencial\n+ High Ticket",
    subtitle: "Experiência intensa e conversão máxima",
    description: [
      { text: "Evento presencial de alto impacto", icon: Flame },
      { text: "Venda direta com conversão premium", icon: Percent },
      { text: "Experiência imersiva transformadora", icon: Star },
      { text: "Suporte completo: planejamento à execução", icon: HeartHandshake }
    ],
    benefit: "conversão elevada pela experiência presencial e percepção de valor premium.",
    cta: "Converse com nosso gerente",
    lordIcon: {
      src: "https://cdn.lordicon.com/xzafublo.json",
      colors: "primary:#012445,secondary:#A855F7"
    },
    titleGradient: "from-brand-blue to-purple-400",
    borderGradient: "from-purple-400/30 to-brand-blue/30 hover:from-purple-400 hover:to-brand-blue",
    benefitBg: "bg-purple-400/10",
    buttonClasses: "bg-purple-400 text-white border-purple-400 hover:bg-purple-500 hover:shadow-lg transition-all duration-200",
    dividerColor: "border-purple-400/30"
  }
];

const StrategicPackagesSection = () => {
  return (
    <section className="bg-background py-20 pb-10">
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
                return (
                  <CarouselItem key={pkg.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-2">
                    <div className={`h-full p-[1px] rounded-lg bg-gradient-to-b from-slate-200/30 to-brand-blue/30 hover:${pkg.borderGradient.replace('from-', 'from-').replace('to-', 'to-')} group hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                      <Card className="h-full bg-card rounded-lg flex flex-col border-0">
                      <CardHeader className="pb-6 pt-8">
                        <div className="flex items-start gap-4 mb-4">
                          <LordIcon
                            src={pkg.lordIcon.src}
                            trigger="hover"
                            stroke="regular"
                            colors={pkg.lordIcon.colors}
                            style={{
                              width: "49px",
                              height: "49px"
                            }}
                          />
                          <div className="flex-1">
                            <CardTitle className="text-lg font-bold mb-2 leading-tight whitespace-pre-line">
                              <span className={`bg-gradient-to-r from-slate-600 to-brand-blue group-hover:${pkg.titleGradient} bg-clip-text text-transparent transition-all duration-300`}>
                                {pkg.title}
                              </span>
                            </CardTitle>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-primary">
                          {pkg.subtitle}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-8 flex flex-col flex-1">
                        <div className="flex flex-col h-full">
                          <ul className="text-sm text-muted-foreground space-y-3 mb-6">
                            {pkg.description.map((item, index) => {
                              const IconComponent = item.icon;
                              return (
                                <div key={index}>
                                  <li className="flex items-start gap-3">
                                    <IconComponent className="w-4 h-4 text-slate-500 group-hover:text-primary mt-0.5 flex-shrink-0 transition-colors duration-300" strokeWidth={1.5} />
                                    <span className="leading-relaxed">{item.text}</span>
                                  </li>
                                   {index < pkg.description.length - 1 && (
                                     <hr className={`border-slate-200 group-hover:${pkg.dividerColor} mt-3 transition-colors duration-300`} />
                                   )}
                                </div>
                              );
                            })}
                          </ul>
                          
                          <div className={`bg-slate-50 group-hover:${pkg.benefitBg} p-3 rounded-lg mb-6 mt-auto transition-colors duration-300`}>
                            <p className="text-xs text-foreground leading-tight">
                              <span className="font-semibold">Benefício exclusivo:</span> {pkg.benefit}
                            </p>
                          </div>
                          
                          <Button 
                            size="sm" 
                            className={`w-full text-xs transition-all duration-300 bg-brand-blue text-white hover:shadow-lg group-hover:${pkg.buttonClasses.replace('border-brand-yellow', '').replace('border-emerald-400', '').replace('border-sky-300', '').replace('border-purple-400', '')}`}
                          >
                            {pkg.cta}
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 rounded-full" />
            <CarouselNext className="hidden md:flex -right-16 w-12 h-12 rounded-full" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StrategicPackagesSection;