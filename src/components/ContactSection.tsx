import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de solicitar uma consultoria sobre high ticket.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos conversar sobre seu{" "}
            <span className="text-primary">próximo high ticket</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Nossa equipe está pronta para ajudar você a alcançar seus objetivos. 
            Fale diretamente conosco no WhatsApp.
          </p>

          <Button 
            variant="primary"
            size="lg"
            className="text-lg px-8 py-4 min-h-[56px]"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar consultoria
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;