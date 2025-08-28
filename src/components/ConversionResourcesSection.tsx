import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import conversionImage from "@/assets/conversion-resources.jpg";
import managementImage from "@/assets/business-management.jpg";
import engagementImage from "@/assets/student-engagement.jpg";
import LordIcon from "@/components/LordIcon";

interface Resource {
  id: number;
  title: string;
  description: string;
  cta: string;
  lordIcon: {
    src: string;
    colors: string;
  };
  image: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Recursos para aumentar a conversão",
    description: "Integração com redes de afiliados e influenciadores para potencializar alcance e reduzir abandono.",
    cta: "Falar com gerente",
    lordIcon: {
      src: "https://cdn.lordicon.com/lnpwcryl.json",
      colors: "primary:#2878e0,secondary:#ffbc00"
    },
    image: conversionImage
  },
  {
    id: 2,
    title: "Gestão completa do seu negócio",
    description: "Centralize cursos, eventos e assinaturas em um só lugar. Relatórios em tempo real e acompanhamento 360° com especialistas.",
    cta: "Saiba mais",
    lordIcon: {
      src: "https://cdn.lordicon.com/oarboftc.json",
      colors: "primary:#2878e0,secondary:#ffbc00"
    },
    image: managementImage
  },
  {
    id: 3,
    title: "Mais engajamento e retenção",
    description: "Área de membros white-label com gamificação e app móvel. Experiências exclusivas que fidelizam e aumentam permanência.",
    cta: "Converse com especialista",
    lordIcon: {
      src: "https://cdn.lordicon.com/gsqvcbfd.json",
      colors: "primary:#2878e0,secondary:#ffbc00"
    },
    image: engagementImage
  }
];

const ConversionResourcesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[hsl(210_95%_20%)] to-[hsl(210_95%_10%)] py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Soluções que impulsionam cada etapa do seu negócio
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              return (
                <Card key={resource.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group min-h-[520px] flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* LordIcon positioned over image */}
                    <div className="absolute top-4 left-4">
                      <LordIcon
                        src={resource.lordIcon.src}
                        trigger="hover"
                        stroke="regular"
                        colors={resource.lordIcon.colors}
                        style={{
                          width: "40px",
                          height: "40px"
                        }}
                      />
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="text-lg font-bold text-white leading-tight">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-6 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <p className="text-white/80 leading-relaxed text-sm">
                        {resource.description}
                      </p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-white border-white/30 hover:bg-white hover:text-brand-blue transition-all duration-300 group-hover:border-white/50 mt-auto"
                    >
                      {resource.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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