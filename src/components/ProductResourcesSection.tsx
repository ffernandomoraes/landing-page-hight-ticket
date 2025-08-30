import { Users, School, CreditCard, Presentation, Shield, Check, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import saasEducationPlatform from "@/assets/saas-education-platform.jpg";
import saasPaymentSystem from "@/assets/saas-payment-system.jpg";
import saasPresentationTools from "@/assets/saas-presentation-tools.jpg";
import saasSecurityDashboard from "@/assets/saas-security-dashboard.jpg";
import saasTeamManagement from "@/assets/saas-team-management.jpg";
import { useState } from "react";

const ProductResourcesSection = () => {
  const [activeTab, setActiveTab] = useState("membros");

  const resources = [
    {
      id: "membros",
      title: "Área de membros white label",
      description: "Crie a escola com a sua marca e engaje seus alunos",
      icon: School,
      imageUrl: saasEducationPlatform,
      features: [
        "Crie a escola com a sua marca",
        "Gamificação e Ranking",
        "Vitrine pública para vender mais",
        "Relatórios de engajamento",
        "Múltiplas escolas, um acesso"
      ],
      tabLabel: "Área de Membros"
    },
    {
      id: "pagamento",
      title: "Diversas possibilidades de pagamento",
      description: "Métodos de pagamento que maximizam suas vendas",
      icon: CreditCard,
      imageUrl: saasPaymentSystem,
      features: [
        "Pix",
        "Pix + Cartão de crédito",
        "Cartão de crédito à vista",
        "Cartão de crédito parcelado em até 18x*",
        "Boleto"
      ],
      comingSoon: [
        "TMB parcelado (em breve)",
        "Pix Automático (em breve)",
        "Pix Parcelado (em breve)"
      ],
      tabLabel: "Pagamentos"
    },
    {
      id: "eventos",
      title: "Performance para pitch nos eventos",
      description: "Produtos físicos, parceiros, recorrência e muito mais",
      icon: Presentation,
      imageUrl: saasPresentationTools,
      features: [
        "QR code do seu checkout",
        "Maquininha (PagLive)",
        "Split para parceiros automático"
      ],
      comingSoon: [
        "Vitrine com todas as ofertas dos pitchs (em breve)"
      ],
      tabLabel: "Eventos"
    },
    {
      id: "seguranca",
      title: "Segurança e credibilidade",
      description: "Máxima segurança e confiabilidade para seu negócio",
      icon: Shield,
      imageUrl: saasSecurityDashboard,
      features: [
        "Estabilidade",
        "Suporte humanizado",
        "Grupo de WhatsApp exclusivo",
        "Derrubada de checkouts e páginas falsas*"
      ],
      comingSoon: [
        "Verificação de links e rastreamento em grupos de lançamento (em breve)"
      ],
      tabLabel: "Segurança"
    },
    {
      id: "vendas",
      title: "Gestão para a sua equipe de vendas",
      description: "Controle completo da sua equipe e processos de venda",
      icon: Users,
      imageUrl: saasTeamManagement,
      features: [
        "Controle de acesso",
        "Criação de links de pagamentos via App",
        "Gestão de leads",
        "Relatórios completos",
        "Taxa diferenciada por volume de vendas*"
      ],
      tabLabel: "Equipe de Vendas"
    }
  ];

  const activeResource = resources.find(r => r.id === activeTab);

  return (
    <section className="py-0">
      {/* Section Header */}
      <div className="bg-stone-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Recursos para cada Estratégia
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ferramentas especializadas para potencializar cada estratégia do seu negócio
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs Navigation */}
          <div className="bg-white border-b">
            <div className="container mx-auto px-4">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto bg-transparent p-0">
                {resources.map((resource) => {
                  const IconComponent = resource.icon;
                  return (
                    <TabsTrigger
                      key={resource.id}
                      value={resource.id}
                      className="flex flex-col items-center gap-2 p-6 rounded-none border-b-2 border-transparent data-[state=active]:border-brand-blue data-[state=active]:bg-brand-blue/5 data-[state=active]:text-brand-blue transition-all duration-300 hover:bg-stone-50"
                    >
                      <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                      <span className="text-sm font-medium text-center leading-tight">
                        {resource.tabLabel}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </div>

          {/* Tab Content */}
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            
            return (
              <TabsContent key={resource.id} value={resource.id} className="mt-0">
                <div className="relative min-h-screen flex items-center">
                  {/* Full Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={resource.imageUrl}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/60"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto">
                      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                        <CardContent className="p-8 lg:p-12">
                          <div className="flex items-start gap-6 mb-8">
                            <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4 leading-tight">
                                {resource.title}
                              </h3>
                              <p className="text-lg text-stone-600 leading-relaxed">
                                {resource.description}
                              </p>
                            </div>
                          </div>

                          {/* Features Grid */}
                          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                            {resource.features.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex}
                                className="flex items-start gap-3 group"
                              >
                                <div className="mt-1 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-200">
                                  <Check className="w-3 h-3 text-green-600" strokeWidth={2} />
                                </div>
                                <span className="text-stone-700 leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}

                            {/* Coming Soon Features */}
                            {resource.comingSoon?.map((feature, featureIndex) => (
                              <div 
                                key={`coming-${featureIndex}`}
                                className="flex items-start gap-3 group"
                              >
                                <div className="mt-1 w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors duration-200">
                                  <Clock className="w-3 h-3 text-amber-600" strokeWidth={2} />
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-stone-600 leading-relaxed">
                                    {feature.replace(" (em breve)", "")}
                                  </span>
                                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">
                                    Em breve
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <div className="text-center">
                            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3">
                              Saiba mais sobre {resource.tabLabel}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductResourcesSection;