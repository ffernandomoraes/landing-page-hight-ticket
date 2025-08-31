import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp } from "lucide-react";
import { useState } from "react";
import LordIcon from "@/components/LordIcon";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Handle newsletter signup logic here
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 via-white to-stone-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <LordIcon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              stroke="light"
              style={{ width: "80px", height: "80px" }}
              colors="primary:#3B82F6,secondary:#60A5FA"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fique por dentro do{" "}
            <span className="text-blue-600">mercado digital</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Receba insights e guias para ofertas high ticket, direto no seu e-mail. 
            Estratégias exclusivas, cases de sucesso e tendências do mercado.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 h-12 bg-white border-stone-200 rounded-2xl placeholder:text-stone-500"
                required
              />
              <Button 
                type="submit"
                variant="primary"
                size="default"
                className="whitespace-nowrap"
              >
                <TrendingUp className="w-4 h-4" />
                Quero receber
              </Button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-stone-600 text-sm">
            <span>100% gratuito</span>
            <span>Conteúdo exclusivo</span>
            <span>Sem spam</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;