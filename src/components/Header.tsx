import { Button } from "@/components/ui/button";
import edu22Logo from "@/assets/edu22-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
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
          <Button variant="ghost" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button variant="hero" className="bg-gradient-cta text-primary-foreground hover:opacity-90 transition-opacity">
            Começar Grátis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;