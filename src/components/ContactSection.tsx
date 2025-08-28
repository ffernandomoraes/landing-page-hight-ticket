import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Calendar,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [consultationEmail, setConsultationEmail] = useState("");

  const handleConsultationRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation request:", consultationEmail);
    // Handle consultation request logic here
    setConsultationEmail("");
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/eduzz",
      description: "Siga-nos para mais conteúdos high ticket"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/eduzz",
      description: "Assista aos bastidores dos eventos"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/eduzz",
      description: "Conecte-se com nossa comunidade profissional"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info & Social */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Vamos conversar sobre seu{" "}
              <span className="text-primary">próximo high ticket</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe está pronta para ajudar você a alcançar seus objetivos. 
              Entre em contato conosco através dos canais abaixo.
            </p>

            {/* Help Center Link */}
            <div className="mb-8">
              <a 
                href="https://ajuda.eduzz.com/hc/pt-br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-4 bg-white border border-stone-200 rounded-2xl hover:border-primary transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <HelpCircle className="w-6 h-6 text-primary" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Central de Ajuda</h3>
                  <p className="text-muted-foreground text-sm">Encontre respostas para suas dúvidas</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1} />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Siga-nos nas redes sociais
              </h3>
              
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white border border-stone-200 rounded-2xl hover:border-primary transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <IconComponent className="w-5 h-5 text-stone-600 group-hover:text-primary transition-colors" strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{social.name}</h4>
                      <p className="text-muted-foreground text-sm">{social.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Agende uma consultoria gratuita
              </h3>
              <p className="text-muted-foreground">
                Receba atendimento personalizado para seu negócio high ticket
              </p>
            </div>

            <form onSubmit={handleConsultationRequest} className="space-y-4 mb-6">
              <Input
                type="email"
                value={consultationEmail}
                onChange={(e) => setConsultationEmail(e.target.value)}
                placeholder="Seu e-mail para contato"
                className="h-12 bg-stone-50 border-stone-200 rounded-2xl"
                required
              />
              <Button 
                type="submit"
                variant="primary"
                size="default"
                className="w-full"
              >
                <Calendar className="w-4 h-4" />
                Solicitar consultoria
              </Button>
            </form>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-stone-500 text-sm mb-4">
                <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
                <span>ou</span>
                <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
              </div>
              
              <Button 
                variant="outline"
                size="default"
                className="w-full"
                onClick={() => {
                  // This would typically open a chat widget
                  console.log("Opening live chat");
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Iniciar chat ao vivo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-center gap-6 text-stone-600 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Resposta em até 2h</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Atendimento humanizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;