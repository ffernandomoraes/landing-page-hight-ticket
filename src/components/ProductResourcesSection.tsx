import { Calendar, Users, School, Crown, CreditCard, Banknote, Presentation, QrCode, Shield, Verified, Settings, Check, Clock } from "lucide-react";

const ProductResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "Gestão de eventos",
      description: "Tudo para seu produto digital com ferramentas completas de gestão de eventos",
      icon: Calendar,
      image: "🎯",
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
      image: "🎓", 
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
      image: "💳",
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
      image: "📈",
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
      image: "🔒",
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
      image: "👥",
      features: [
        "Controle de acesso",
        "Criação de links de pagamentos"
      ],
      comingSoon: ["Gestão de leads (em breve)"]
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and bubble effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Bubble effects */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-slate-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-100/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-slate-100/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6">
            Recursos do Produto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo para seu produto digital com ferramentas completas e integradas
          </p>
        </div>

        {/* Resource Blocks */}
        <div className="space-y-20">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={resource.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image/Icon Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative group">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white/60 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <div className="text-8xl md:text-9xl group-hover:scale-110 transition-transform duration-300">
                        {resource.image}
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Connector line for desktop */}
                    {index < resources.length - 1 && (
                      <div className={`hidden lg:block absolute top-1/2 ${isEven ? '-right-10' : '-left-10'} w-20 h-px bg-gradient-to-r ${isEven ? 'from-primary/30 to-transparent' : 'from-transparent to-primary/30'}`}></div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {resource.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {resource.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/80 leading-relaxed">
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
                          <Clock className="w-3 h-3 text-amber-600" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                        <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">
                          Em breve
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductResourcesSection;