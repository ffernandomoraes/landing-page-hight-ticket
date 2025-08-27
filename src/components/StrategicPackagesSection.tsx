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
  description: string;
  benefit: string;
  cta: string;
  icon: React.ComponentType<any>;
  platforms?: string[];
}

const strategicPackages: StrategyPackage[] = [
  {
    id: 1,
    title: "Curso + Evento Presencial + High Ticket",
    subtitle: "Autoridade e exclusividade na mesma oferta",
    description: "Combine a venda de um curso digital com um evento presencial premium e um produto high ticket. O curso prepara o público, o evento presencial gera confiança e exclusividade, e o high ticket converte os mais comprometidos.",
    benefit: "maior autoridade da marca e conversão potencializada pela relação direta no evento.",
    cta: "Personalize este pacote — fale com nosso gerente de contas para montar seu funil.",
    icon: GraduationCap,
    platforms: ["hotmart.com"]
  },
  {
    id: 2,
    title: "Assinatura + Evento Presencial + High Ticket",
    subtitle: "Receita recorrente e upsell de valor elevado",
    description: "Ofereça um modelo de assinatura que gera receita contínua e convide assinantes para um evento presencial exclusivo. No evento, apresente sua oferta high ticket e maximize o LTV. Pagamentos flexíveis e gestão automatizada garantem previsibilidade.",
    benefit: "previsibilidade de caixa com assinaturas e oportunidade de upsell no evento.",
    cta: "Saiba como implementar — nosso time comercial te ajuda a estruturar a jornada.",
    icon: TrendingUp,
    platforms: ["hotmart.com", "kiwify.com.br"]
  },
  {
    id: 3,
    title: "Lançamento pago + Evento Presencial + High Ticket",
    subtitle: "Impacto imediato e relacionamento profundo",
    description: "Realize um lançamento pago para captar leads qualificados, seguido de um evento presencial para relacionamento e, por fim, ofereça seu produto high ticket. Ideal para quem busca um ciclo de vendas mais curto e um ticket médio mais alto.",
    benefit: "geração de receita antes do evento e maior taxa de conversão no high ticket devido ao envolvimento presencial.",
    cta: "Fale com um estrategista — desenhamos o cronograma completo com você.",
    icon: Rocket
  },
  {
    id: 4,
    title: "Evento Presencial + High Ticket",
    subtitle: "Experiência intensa e conversão máxima",
    description: "Planeje um evento presencial exclusivo e utilize-o para vender diretamente seu high ticket. Foco em imersão e networking, com suporte completo para lotes, check-in e integração de pagamentos.",
    benefit: "conversão elevada pela experiência presencial e percepção de valor premium.",
    cta: "Converse com nosso gerente — veja como a Eduzz apoia seu evento do início ao fim.",
    icon: Users,
    platforms: ["kiwify.com.br"]
  }
];

const StrategicPackagesSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Pacotes Estratégicos High Ticket: <br />
            <span className="text-brand-blue">personalização total para você vender mais</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {strategicPackages.map((pkg) => {
                const IconComponent = pkg.icon;
                return (
                  <CarouselItem key={pkg.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                      <CardHeader className="pb-4">
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
                      
                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {pkg.description}
                          </p>
                          
                          {pkg.platforms && (
                            <div className="flex flex-wrap gap-2">
                              {pkg.platforms.map((platform) => (
                                <span 
                                  key={platform}
                                  className="inline-flex items-center px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-md"
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="bg-accent/50 p-3 rounded-lg">
                            <p className="text-xs text-foreground">
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