import { Button } from "@/components/ui/button";
import { CirclePlus, ArrowRight, Star } from "lucide-react";

const FinalCTASection = () => {
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
              Crie sua conta{" "}
              <span className="text-secondary">gratuitamente</span>
              {" "}e dê o primeiro passo rumo ao seu{" "}
              <span className="text-secondary">high ticket</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Junte-se aos milhares de empreendedores que já transformaram seus negócios 
              digitais com nossa plataforma completa e integrada.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 min-h-[56px]"
              onClick={() => window.open('https://accounts.eduzz.com/', '_blank')}
            >
              <CirclePlus className="w-5 h-5" />
              Criar conta gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="white"
              size="lg"
              className="text-lg px-8 py-4 min-h-[56px]"
            >
              Ver demonstração
            </Button>
          </div>

          {/* Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CirclePlus className="w-6 h-6" strokeWidth={1} />
              </div>
              <h3 className="font-semibold mb-2">Setup em minutos</h3>
              <p className="text-white/70 text-sm">Configure sua conta e comece a vender hoje mesmo</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6" strokeWidth={1} />
              </div>
              <h3 className="font-semibold mb-2">Suporte premium</h3>
              <p className="text-white/70 text-sm">Atendimento humanizado 24/7 para seu sucesso</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6" strokeWidth={1} />
              </div>
              <h3 className="font-semibold mb-2">Resultados rápidos</h3>
              <p className="text-white/70 text-sm">Aumente suas vendas desde o primeiro mês</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;