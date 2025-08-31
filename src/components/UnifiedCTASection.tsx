import { Button } from "@/components/ui/button";
import { CirclePlus, ArrowRight, Star, MessageCircle } from "lucide-react";

const UnifiedCTASection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de solicitar uma consultoria sobre high ticket.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(210_95%_20%)] to-[hsl(210_95%_10%)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" strokeWidth={1} />
              <span>Mais de 50.000 empreendedores confiam na Eduzz</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vamos conversar sobre seu{" "}
              <span className="text-secondary">próximo high ticket</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Nossa equipe está pronta para ajudar você a alcançar seus objetivos. 
              Aplique táticas usadas pelos principais players e veja impacto real em conversão e margem.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 min-h-[56px]"
            >
              <CirclePlus className="w-5 h-5" />
              Começar teste gratuito
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="white"
              size="lg"
              className="text-lg px-8 py-4 min-h-[56px]"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar consultoria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedCTASection;