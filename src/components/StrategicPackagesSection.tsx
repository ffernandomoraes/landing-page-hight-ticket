import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Target 
} from "lucide-react";

interface StrategyPackage {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  benefit: string;
  cta: string;
  icon: React.ComponentType<any>;
}

const strategicPackages: StrategyPackage[] = [
  {
    id: 1,
    title: "Curso + Evento Presencial + High Ticket",
    subtitle: "Autoridade e exclusividade na mesma oferta",
    description: [
      "Combine venda de curso digital com evento presencial premium",
      "O curso prepara o público para o evento",
      "Evento gera confiança e exclusividade", 
      "High ticket converte os mais comprometidos"
    ],
    benefit: "maior autoridade da marca e conversão potencializada pela relação direta no evento.",
    cta: "Personalize este pacote",
    icon: GraduationCap
  },
  {
    id: 2,
    title: "Assinatura + Evento Presencial + High Ticket",
    subtitle: "Receita recorrente e upsell de valor elevado",
    description: [
      "Modelo de assinatura gera receita contínua",
      "Convite para evento presencial exclusivo",
      "Apresente oferta high ticket no evento",
      "Pagamentos flexíveis e gestão automatizada"
    ],
    benefit: "previsibilidade de caixa com assinaturas e oportunidade de upsell no evento.",
    cta: "Saiba como implementar",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Lançamento pago + Evento Presencial + High Ticket",
    subtitle: "Impacto imediato e relacionamento profundo",
    description: [
      "Lançamento pago capta leads qualificados",
      "Evento presencial para relacionamento",
      "Oferta high ticket após o evento",
      "Ciclo de vendas curto com ticket médio alto"
    ],
    benefit: "geração de receita antes do evento e maior taxa de conversão no high ticket devido ao envolvimento presencial.",
    cta: "Fale com um estrategista",
    icon: Rocket
  },
  {
    id: 4,
    title: "Evento Presencial + High Ticket",
    subtitle: "Experiência intensa e conversão máxima",
    description: [
      "Evento presencial exclusivo",
      "Venda direta do high ticket",
      "Foco em imersão e networking",
      "Suporte completo para lotes e check-in"
    ],
    benefit: "conversão elevada pela experiência presencial e percepção de valor premium.",
    cta: "Converse com nosso gerente",
    icon: Users
  }
];

const StrategicPackagesSection = () => {
  return (
    <section className="bg-background py-28">
      <div className="container mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Pacotes Estratégicos High Ticket: <br />
            <span className="text-brand-blue">personalização total para você vender mais</span>
          </h2>
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
                            <CardTitle className="text-lg font-bold text-foreground mb-2 leading-tight">
                              {pkg.title}
                            </CardTitle>
                            <p className="text-sm font-medium text-primary">
                              {pkg.subtitle}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-8 flex flex-col flex-1">
                        <div className="flex flex-col h-full">
                          <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                            {pkg.description.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
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
            
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StrategicPackagesSection;