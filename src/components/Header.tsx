import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
      <div className="fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none backdrop-blur-md bg-white/10" />
      
      <header className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-background/90 backdrop-blur-lg rounded-xl shadow-lg border border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={edu22Logo} alt="edu22" className="h-8 w-auto" />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucoes" className="text-foreground hover:text-brand-blue transition-colors">
              Soluções
            </a>
            <a href="#recursos" className="text-foreground hover:text-brand-blue transition-colors">
              Recursos
            </a>
            <a href="#precos" className="text-foreground hover:text-brand-blue transition-colors">
              Preços
            </a>
            <a href="#contato" className="text-foreground hover:text-brand-blue transition-colors">
              Contato
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="tertiary" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button variant="primary">
              Começar Grátis
            </Button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;