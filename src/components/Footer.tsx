import { Instagram, Youtube, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    produto: [
      { name: "Recursos", href: "#recursos" },
      { name: "Preços", href: "#precos" },
      { name: "Cases de Sucesso", href: "#cases" },
      { name: "Depoimentos", href: "#depoimentos" }
    ],
    suporte: [
      { name: "Central de Ajuda", href: "https://ajuda.eduzz.com/hc/pt-br", external: true },
      { name: "Documentação", href: "#docs" },
      { name: "Status", href: "#status" },
      { name: "Contato", href: "#contato" }
    ],
    empresa: [
      { name: "Sobre nós", href: "#sobre" },
      { name: "Carreiras", href: "#carreiras" },
      { name: "Blog", href: "#blog" },
      { name: "Imprensa", href: "#imprensa" }
    ],
    legal: [
      { name: "Termos de Uso", href: "#termos" },
      { name: "Política de Privacidade", href: "#privacidade" },
      { name: "Cookies", href: "#cookies" },
      { name: "LGPD", href: "#lgpd" }
    ]
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/eduzz"
    },
    {
      name: "YouTube", 
      icon: Youtube,
      href: "https://youtube.com/eduzz"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/eduzz"
    }
  ];

  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-8 md:py-16">
          <div className="grid lg:grid-cols-6 gap-6 md:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/6a9d9601-13d8-4365-b63f-8f72195857ec.png" 
                  alt="Eduzz" 
                  className="h-6 md:h-8 mx-auto lg:mx-0"
                />
              </div>
              <p className="text-stone-600 leading-relaxed mb-4 md:mb-6 max-w-sm mx-auto lg:mx-0 text-sm md:text-base">
                A plataforma completa para criar, vender e escalar seus produtos digitais. 
                Transforme seu conhecimento em um negócio de alto valor.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-10 md:h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-stone-600 hover:text-primary transition-colors" strokeWidth={1} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns - Hidden on mobile, show on md+ */}
            <div className="hidden md:block lg:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                
                {/* Produto */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Produto</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {footerLinks.produto.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-stone-600 hover:text-primary transition-colors duration-200 text-xs md:text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suporte */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Suporte</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {footerLinks.suporte.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="text-stone-600 hover:text-primary transition-colors duration-200 text-xs md:text-sm flex items-center gap-1"
                        >
                          {link.name}
                          {link.external && <ExternalLink className="w-2 h-2 md:w-3 md:h-3" strokeWidth={1} />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empresa */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Empresa</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {footerLinks.empresa.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-stone-600 hover:text-primary transition-colors duration-200 text-xs md:text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-stone-600 hover:text-primary transition-colors duration-200 text-xs md:text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Quick Links */}
            <div className="md:hidden lg:col-span-4 text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#recursos" className="text-stone-600 hover:text-primary text-sm">Recursos</a>
                <a href="#cases" className="text-stone-600 hover:text-primary text-sm">Cases</a>
                <a href="#contato" className="text-stone-600 hover:text-primary text-sm">Contato</a>
                <a href="#ajuda" className="text-stone-600 hover:text-primary text-sm">Ajuda</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 md:py-6 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-stone-500 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Eduzz. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-stone-500 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Sistema operacional</span>
              </div>
              <div className="text-xs">
                Versão 2.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;