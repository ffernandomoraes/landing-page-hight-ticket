import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Trophy, Target, Lightbulb, BookOpen, MessageSquare, Menu, X } from "lucide-react";

const edu22Logo = "/lovable-uploads/67f13901-3e61-4b23-afdb-64e96b3c0eb7.png";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#casos-sucesso" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <Trophy size={16} strokeWidth={1} className="text-brand-blue group-hover:text-[#1158af] transition-colors" />
              Cases de Sucesso
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#estrategias" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <Target size={16} strokeWidth={1} className="text-brand-blue group-hover:text-[#1158af] transition-colors" />
              Estratégias
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#solucoes" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <Lightbulb size={16} strokeWidth={1} className="text-brand-blue group-hover:text-[#1158af] transition-colors" />
              Soluções
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#recursos" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <BookOpen size={16} strokeWidth={1} className="text-brand-blue group-hover:text-[#1158af] transition-colors" />
              Recursos
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#depoimentos" className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2">
              <MessageSquare size={16} strokeWidth={1} className="text-brand-blue group-hover:text-[#1158af] transition-colors" />
              Depoimentos
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-brand-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="primary">
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-40 md:hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 p-6">
          <nav className="space-y-4">
            <a 
              href="#casos-sucesso" 
              className="flex items-center gap-3 p-3 text-foreground/80 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Trophy size={20} strokeWidth={1} className="text-brand-blue" />
              Cases de Sucesso
            </a>
            <a 
              href="#estrategias" 
              className="flex items-center gap-3 p-3 text-foreground/80 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Target size={20} strokeWidth={1} className="text-brand-blue" />
              Estratégias
            </a>
            <a 
              href="#solucoes" 
              className="flex items-center gap-3 p-3 text-foreground/80 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Lightbulb size={20} strokeWidth={1} className="text-brand-blue" />
              Soluções
            </a>
            <a 
              href="#recursos" 
              className="flex items-center gap-3 p-3 text-foreground/80 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookOpen size={20} strokeWidth={1} className="text-brand-blue" />
              Recursos
            </a>
            <a 
              href="#depoimentos" 
              className="flex items-center gap-3 p-3 text-foreground/80 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageSquare size={20} strokeWidth={1} className="text-brand-blue" />
              Depoimentos
            </a>
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border">
              <Button variant="primary" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Fale com um Especialista
              </Button>
            </div>
          </nav>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;