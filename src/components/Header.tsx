import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Trophy, Target, Lightbulb, BookOpen, MessageSquare, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const edu22Logo = "/lovable-uploads/67f13901-3e61-4b23-afdb-64e96b3c0eb7.png";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { href: "#casos-sucesso", text: "Cases de Sucesso", icon: Trophy },
    { href: "#estrategias", text: "Estratégias", icon: Target },
    { href: "#solucoes", text: "Soluções", icon: Lightbulb },
    { href: "#recursos", text: "Recursos", icon: BookOpen },
    { href: "#depoimentos", text: "Depoimentos", icon: MessageSquare },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Blur overlay that affects content passing under header */}
      <div className="fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none backdrop-blur-md" 
           style={{
             maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
           }} />
      
      <header className="fixed top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50">
      <div className="bg-background/90 backdrop-blur-lg rounded-xl shadow-lg border border-white/10">
        <div className="container mx-auto px-4 lg:px-6 h-14 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={edu22Logo} alt="edu22" className="h-6 md:h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-foreground/80 hover:text-brand-blue transition-colors text-base font-medium relative group flex items-center gap-2"
                >
                  <IconComponent size={16} strokeWidth={1} className="text-brand-blue group-hover:text-[#1158af] transition-colors" />
                  {link.text}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              );
            })}
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button variant="primary" size="default">
              Fale com um Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b">
                    <img src={edu22Logo} alt="edu22" className="h-6 w-auto" />
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex-1">
                    <div className="space-y-1">
                      {navigationLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                          >
                            <IconComponent size={18} strokeWidth={1} className="text-brand-blue" />
                            {link.text}
                          </a>
                        );
                      })}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t">
                    <Button variant="primary" size="default" className="w-full">
                      Fale com um Especialista
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;