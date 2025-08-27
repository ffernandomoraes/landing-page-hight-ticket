import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard,
  BarChart3,
  Users,
  ArrowRight
} from "lucide-react";

interface Resource {
  id: number;
  title: string;
  description: string;
  cta: string;
  icon: React.ComponentType<any>;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Recursos para aumentar a conversão",
    description: "Melhore suas vendas com tecnologia de ponta. Use um checkout otimizado com diversas formas de pagamento (Pix e cartão em até 18×) para reduzir abandono e aumentar a conversão. Potencialize o alcance integrando redes de afiliados e influenciadores.",
    cta: "Falar com nosso gerente de contas",
    icon: CreditCard
  },
  {
    id: 2,
    title: "Gestão completa do seu negócio",
    description: "Administre tudo em um só lugar com o apoio de especialistas. Centralize a gestão de cursos, eventos, assinaturas e consultorias, definindo lotes, check-ins, participantes e obtendo relatórios de performance em tempo real. Conte com autonomia total e um acompanhamento 360° do time Eduzz.",
    cta: "Saiba mais",
    icon: BarChart3
  },
  {
    id: 3,
    title: "Mais engajamento e retenção de alunos",
    description: "Crie experiências exclusivas que fidelizam seu público. Ofereça uma área de membros white‑label com design premium e gamificação, além de app móvel para que alunos consumam conteúdo onde quiserem. Estimule comunidades engajadas e amplie a permanência de estudantes.",
    cta: "Converse com um especialista",
    icon: Users
  }
];

const ConversionResourcesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[hsl(210_95%_20%)] to-[hsl(210_95%_10%)] py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                        <IconComponent 
                          className="w-6 h-6 text-white" 
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-white leading-tight">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-8">
                    <div className="space-y-6">
                      <p className="text-white/80 leading-relaxed text-sm">
                        {resource.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-white border-white/30 hover:bg-white hover:text-brand-blue transition-all duration-300 group-hover:border-white/50"
                      >
                        {resource.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionResourcesSection;