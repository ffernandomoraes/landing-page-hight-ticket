import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import checkoutImage from "/lovable-uploads/49db7150-2d16-4b59-af8a-6e6be12f8df8.png";
import dashboardImage from "/lovable-uploads/1fe8623b-e221-4876-955e-adac3af32256.png";
import learningImage from "/lovable-uploads/8f95db36-a8a6-45a9-9a22-5f9b8bea8cdd.png";
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
      colors: "primary:#2c2c2c,secondary:#2c2c2c"
    },
    image: checkoutImage
  },
  {
    id: 2,
    title: "Gestão completa do seu negócio",
    description: "Centralize cursos, eventos e assinaturas em um só lugar. Relatórios em tempo real e acompanhamento 360° com especialistas.",
    cta: "Saiba mais",
    lordIcon: {
      src: "https://cdn.lordicon.com/oarboftc.json",
      colors: "primary:#2c2c2c,secondary:#2c2c2c"
    },
    image: dashboardImage
  },
  {
    id: 3,
    title: "Mais engajamento e retenção",
    description: "Área de membros white-label com gamificação e app móvel. Experiências exclusivas que fidelizam e aumentam permanência.",
    cta: "Converse com especialista",
    lordIcon: {
      src: "https://cdn.lordicon.com/gsqvcbfd.json",
      colors: "primary:#2c2c2c,secondary:#2c2c2c"
    },
    image: learningImage
  }
];

const ConversionResourcesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[hsl(210_95%_20%)] to-[hsl(210_95%_10%)] py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Soluções que impulsionam cada etapa do seu negócio
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              return (
                <Card key={resource.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group min-h-[420px] flex flex-col">
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
                        trigger="manual"
                        stroke="regular"
                        colors={resource.lordIcon.colors}
                        style={{
                          width: "63px",
                          height: "63px"
                        }}
                      />
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="text-xl font-bold text-white leading-tight">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-white/80 leading-relaxed text-sm mb-6">
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