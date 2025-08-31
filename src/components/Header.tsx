import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Trophy, Target, Lightbulb, BookOpen, MessageSquare } from "lucide-react";

const edu22Logo = "/lovable-uploads/67f13901-3e61-4b23-afdb-64e96b3c0eb7.png";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Blur overlay that affects content passing under header */}
      <div className="fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none backdrop-blur-md" 
           style={{
             maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
           }} />
      
      <header className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-background/90 backdrop-blur-lg rounded-xl shadow-lg border border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={edu22Logo} alt="edu22" className="h-8 w-auto" />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#casos-sucesso" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <Trophy size={16} strokeWidth={1} className="text-brand-blue group-hover:text-brand-yellow transition-colors" />
              Cases de Sucesso
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#estrategias" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <Target size={16} strokeWidth={1} className="text-brand-blue group-hover:text-brand-yellow transition-colors" />
              Estratégias
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#solucoes" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <Lightbulb size={16} strokeWidth={1} className="text-brand-blue group-hover:text-brand-yellow transition-colors" />
              Soluções
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#recursos" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <BookOpen size={16} strokeWidth={1} className="text-brand-blue group-hover:text-brand-yellow transition-colors" />
              Recursos
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#depoimentos" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <MessageSquare size={16} strokeWidth={1} className="text-brand-blue group-hover:text-brand-yellow transition-colors" />
              Depoimentos
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Button variant="primary">
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;