import { Check, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import saasEducationPlatform from "@/assets/saas-education-platform.jpg";
import saasPaymentSystem from "@/assets/saas-payment-system.jpg";
import saasPresentationTools from "@/assets/saas-presentation-tools.jpg";
import saasSecurityDashboard from "@/assets/saas-security-dashboard.jpg";
import saasTeamManagement from "@/assets/saas-team-management.jpg";
import LordIcon from "@/components/LordIcon";
import { useState } from "react";

const ProductResourcesSection = () => {
  const [activeTab, setActiveTab] = useState("membros");

  const resources = [
    {
      id: "membros",
      title: "Área de membros white label",
      description: "Crie a escola com a sua marca e engaje seus alunos",
      lordIcon: {
        src: "https://cdn.lordicon.com/xxmxrhzj.json",
        colors: "primary:#1e40af,secondary:#3b82f6",
        colorsActive: "primary:#ffffff,secondary:#ffffff"
      },
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
      title: "Opções de pagamento",
      description: "Métodos de pagamento que maximizam suas vendas",
      lordIcon: {
        src: "https://cdn.lordicon.com/qwoehyvy.json",
        colors: "primary:#1e40af,secondary:#3b82f6",
        colorsActive: "primary:#ffffff,secondary:#ffffff"
      },
      imageUrl: saasPaymentSystem,
      features: [
        "Pix / Cartão de crédito / Boleto",
        "Pix + Cartão de crédito",
        "Cartão de crédito parcelado em até 18x*"
      ],
      comingSoon: [
        "Boleto parcelado (TMB) (em breve)",
        "Pix Automático e Pix Parcelado (em breve)"
      ],
      tabLabel: "Pagamentos"
    },
    {
      id: "eventos",
      title: "Performance para pitch nos eventos",
      description: "Produtos físicos, parceiros, recorrência e muito mais",
      lordIcon: {
        src: "https://cdn.lordicon.com/gvdzkarq.json",
        colors: "primary:#1e40af,secondary:#3b82f6",
        colorsActive: "primary:#ffffff,secondary:#ffffff"
      },
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
      lordIcon: {
        src: "https://cdn.lordicon.com/pqsiytwi.json",
        colors: "primary:#1e40af,secondary:#3b82f6",
        colorsActive: "primary:#ffffff,secondary:#ffffff"
      },
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
      lordIcon: {
        src: "https://cdn.lordicon.com/jwpaspoo.json",
        colors: "primary:#1e40af,secondary:#3b82f6",
        colorsActive: "primary:#ffffff,secondary:#ffffff"
      },
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
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white">
      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
          Recursos para cada Estratégia
        </h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          Ferramentas especializadas para potencializar cada estratégia do seu negócio
        </p>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs Navigation */}
          <div className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto bg-white rounded-lg p-2 shadow-sm border">
              {resources.map((resource) => {
                return (
                  <TabsTrigger
                    key={resource.id}
                    value={resource.id}
                    className="flex flex-col items-center gap-2 p-4 rounded-md data-[state=active]:bg-brand-blue data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 hover:bg-stone-50 data-[state=active]:hover:bg-brand-blue/90 group"
                  >
                    <LordIcon
                      src={resource.lordIcon.src}
                      trigger="manual"
                      colors={activeTab === resource.id ? resource.lordIcon.colorsActive : resource.lordIcon.colors}
                      style={{
                        width: "40px",
                        height: "40px"
                      }}
                    />
                    <span className="text-xs font-medium text-center leading-tight">
                      {resource.tabLabel}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Tab Content */}
          <div className="relative">
            {resources.map((resource) => {
              return (
                <TabsContent key={resource.id} value={resource.id} className="mt-0">
                  <div className="animate-fade-in">
                    <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-0">
                          {/* Content Column */}
                          <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                                <LordIcon
                                  src={resource.lordIcon.src}
                                  trigger="hover"
                                  colors={resource.lordIcon.colors}
                                  style={{
                                    width: "48px",
                                    height: "48px"
                                  }}
                                />
                              </div>
                              <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-stone-800 leading-tight">
                                  {resource.title}
                                </h3>
                              </div>
                            </div>
                            
                            <p className="text-lg text-stone-600 leading-relaxed mb-8">
                              {resource.description}
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 mb-8">
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
                            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white w-fit">
                              Explorar {resource.tabLabel}
                            </Button>
                          </div>

                          {/* Image Column */}
                          <div className="relative bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center p-8">
                            <div className="relative w-full max-w-md mx-auto">
                              <img 
                                src={resource.imageUrl}
                                alt={resource.title}
                                className="w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductResourcesSection;