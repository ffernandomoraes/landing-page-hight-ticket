import { Calendar, Users, School, CreditCard, Presentation, Shield, Check, Clock } from "lucide-react";
import saasEventManagement from "@/assets/saas-event-management.jpg";
import saasEducationPlatform from "@/assets/saas-education-platform.jpg";
import saasPaymentSystem from "@/assets/saas-payment-system.jpg";
import saasPresentationTools from "@/assets/saas-presentation-tools.jpg";
import saasSecurityDashboard from "@/assets/saas-security-dashboard.jpg";
import saasTeamManagement from "@/assets/saas-team-management.jpg";

const ProductResourcesSection = () => {
  const resources = [
    {
      id: 1,
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
      ]
    },
    {
      id: 2,
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
      ]
    },
    {
      id: 3,
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
      ]
    },
    {
      id: 4,
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
      ]
    },
    {
      id: 5,
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
      ]
    }
  ];

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

      {/* Resource Blocks */}
      <div>
        {resources.map((resource, index) => {
          const IconComponent = resource.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={resource.id}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Side */}
              <div className="flex-1 relative overflow-hidden h-96 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200">
                  <img 
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-stone-800/20"></div>
                </div>
                
                {/* Icon Overlay */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <IconComponent className="w-8 h-8 text-stone-700" strokeWidth={1} />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 bg-stone-50 flex items-center py-16 lg:py-20">
                <div className="w-full px-8 lg:px-16 py-16">
                  <div className="max-w-2xl">
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                      {resource.title}
                    </h3>
                    <p className="text-xl text-stone-600 leading-relaxed mb-8">
                      {resource.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-4 mb-8">
                      {resource.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-start gap-4 group"
                        >
                          <div className="mt-1 w-6 h-6 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-stone-300 transition-colors duration-200">
                            <Check className="w-4 h-4 text-stone-700" strokeWidth={1} />
                          </div>
                          <span className="text-stone-700 text-lg leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}

                      {/* Coming Soon Features */}
                      {resource.comingSoon?.map((feature, featureIndex) => (
                        <div 
                          key={`coming-${featureIndex}`}
                          className="flex items-start gap-4 group"
                        >
                          <div className="mt-1 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors duration-200">
                            <Clock className="w-4 h-4 text-amber-600" strokeWidth={1} />
                          </div>
                          <span className="text-stone-600 text-lg leading-relaxed">
                            {feature}
                          </span>
                          <span className="ml-2 px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full font-medium">
                            Em breve
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductResourcesSection;