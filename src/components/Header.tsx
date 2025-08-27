import { Button } from "@/components/ui/button";

const edu22Logo = "/lovable-uploads/67f13901-3e61-4b23-afdb-64e96b3c0eb7.png";

const Header = () => {
  return (
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
            <Button variant="ghost">
              Entrar
            </Button>
            <Button 
              variant="hero"
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>}
            >
              Começar Grátis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;