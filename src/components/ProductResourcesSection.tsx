import { Calendar, Users, School, CreditCard, Presentation, Shield, Check, Clock } from "lucide-react";

const ProductResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "Gestão de eventos",
      description: "Tudo para seu produto digital com ferramentas completas de gestão de eventos",
      icon: Calendar,
      imageUrl: "/lovable-uploads/professional-1.jpg",
      features: [
        "Crie seu evento",
        "Personalize a venda de lotes e ingressos", 
        "Gerenciamento de participantes",
        "Check-in próprio",
        "Integrações"
      ]
    },
    {
      id: 2,
      title: "Área de membro white label",
      description: "Crie a escola com a sua marca e engaje seus alunos",
      icon: School,
      imageUrl: "/lovable-uploads/professional-2.jpg",
      features: [
        "Crie a escola com a sua marca",
        "Utilize gamificação para engajar os alunos",
        "Vitrine pública para vender mais"
      ]
    },
    {
      id: 3,
      title: "Diversas possibilidades de pagamento",
      description: "Múltiplas formas de pagamento para maximizar suas vendas",
      icon: CreditCard,
      imageUrl: "/lovable-uploads/professional-3.jpg",
      features: [
        "Pix",
        "Pagamento combinado Pix + Cartão de crédito",
        "Cartão de crédito parcelado (à vista e parcelado em até 18x*)"
      ],
      comingSoon: ["TMB parcelado (em breve)"]
    },
    {
      id: 4,
      title: "Performance para pitch nos eventos",
      description: "Produtos físicos, parceiros, recorrência e muito mais",
      icon: Presentation,
      imageUrl: "/lovable-uploads/professional-4.jpg",
      features: [
        "Gere o qr code do checkout",
        "Vitrine com todas as ofertas dos pitchs",
        "Maquininha (PagLive)",
        "Comissione seus parceiros"
      ]
    },
    {
      id: 5,
      title: "Segurança e credibilidade",
      description: "Máxima segurança e confiabilidade para seu negócio",
      icon: Shield,
      imageUrl: "/lovable-uploads/professional-5.jpg",
      features: [
        "Estabilidade",
        "Suporte humanizado",
        "Derrubada de checkouts e páginas falsas*"
      ],
      comingSoon: ["Verificação de links e rastreamento em grupos de lançamento (em breve)"]
    },
    {
      id: 6,
      title: "Gestão para a sua equipe de vendas",
      description: "Controle completo da sua equipe e processos de venda",
      icon: Users,
      imageUrl: "/lovable-uploads/professional-6.jpg",
      features: [
        "Controle de acesso",
        "Criação de links de pagamentos"
      ],
      comingSoon: ["Gestão de leads (em breve)"]
    }
  ];

  return (
    <section className="py-0">
      {/* Section Header */}
      <div className="bg-stone-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Recursos do Produto
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Tudo para seu produto digital com ferramentas completas e integradas
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
              className={`min-h-screen flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Side - Full Height */}
              <div className="flex-1 relative overflow-hidden">
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
                  <IconComponent className="w-8 h-8 text-stone-700" />
                </div>
              </div>

              {/* Content Side - Full Height */}
              <div className="flex-1 bg-stone-50 flex items-center">
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
                            <Check className="w-4 h-4 text-stone-700" />
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
                            <Clock className="w-4 h-4 text-amber-600" />
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