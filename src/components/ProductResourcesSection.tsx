import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Users, CreditCard, Presentation, Shield, UsersRound } from "lucide-react";

const ProductResourcesSection = () => {
  const resources = [
    {
      id: "events",
      icon: Calendar,
      title: "Gestão de eventos",
      items: [
        "Crie seu evento",
        "Personalize a venda de lotes e ingressos", 
        "Gerenciamento de participantes",
        "Check-in próprio",
        "Integrações"
      ]
    },
    {
      id: "member-area",
      icon: Users,
      title: "Área de membro white label",
      items: [
        "Crie a escola com a sua marca",
        "Utilize gamificação para engajar os alunos",
        "Vitrine pública para vender mais"
      ]
    },
    {
      id: "payment",
      icon: CreditCard,
      title: "Diversas possibilidades de pagamento",
      items: [
        "Pix",
        "Pagamento combinado Pix + Cartão de crédito",
        "Cartão de crédito parcelado (à vista e parcelado em até 18x*)",
        "TMB parcelado (em breve)"
      ]
    },
    {
      id: "pitch-performance",
      icon: Presentation,
      title: "Performance para pitch nos eventos",
      subtitle: "Produto físico, parceiros, recorrência...",
      items: [
        "Gere o qr code do checkout",
        "Vitrine com todas as ofertas dos pitchs",
        "Maquininha (PagLive)",
        "Comissione seus parceiros"
      ]
    },
    {
      id: "security",
      icon: Shield,
      title: "Segurança e credibilidade",
      items: [
        "Estabilidade",
        "Suporte humanizado",
        "Derrubada de checkouts e páginas falsas*",
        "Verificação de links e rastreamento em grupos de lançamento (em breve)"
      ]
    },
    {
      id: "sales-team",
      icon: UsersRound,
      title: "Gestão para a sua equipe de vendas",
      items: [
        "Controle de acesso",
        "Criação de links de pagamentos",
        "Gestão de leads (em breve)"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background bubbles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-slate-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-300/15 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-slate-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/25 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Recursos do Produto
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tudo para seu produto digital - guias, artigos, tutoriais relacionados
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <AccordionItem 
                  key={resource.id} 
                  value={resource.id}
                  className="border-0 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Timeline connector */}
                  {index < resources.length - 1 && (
                    <div className="absolute left-8 top-[72px] w-0.5 h-6 bg-gradient-to-b from-blue-400 to-slate-300 z-10"></div>
                  )}
                  
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group-hover:bg-white/50 transition-colors duration-300">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                          {resource.title}
                        </h3>
                        {resource.subtitle && (
                          <p className="text-sm text-slate-500 mt-1">{resource.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-8 pb-6">
                    <div className="pl-16">
                      <ul className="space-y-3">
                        {resource.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProductResourcesSection;