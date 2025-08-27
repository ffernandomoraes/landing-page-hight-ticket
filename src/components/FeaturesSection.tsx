const FeaturesSection = () => {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Entre agora para a <span className="text-[#E85A4F]">maior</span>{" "}
              <span className="text-[#E85A4F]">plataforma de produtos digitais</span>{" "}
              do mundo.
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Na Eduzz, você encontra todas as ferramentas para criar, vender e escalar infoprodutos, eventos e consultorias de alto valor.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">+ 50 Bilhões</div>
                <div className="text-white/70 text-sm">De reais em vendas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">+ 25 Milhões</div>
                <div className="text-white/70 text-sm">De compradores</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">+ 200 Mil</div>
                <div className="text-white/70 text-sm">Produtores vendendo aqui</div>
              </div>
            </div>
            
            <p className="text-base text-white/70 leading-relaxed mt-8">
              Nossa plataforma reúne gestão de cursos, eventos presenciais, pagamentos flexíveis (Pix e cartão parcelado em até 18×) e área de membros premium com sua marca, além de relatórios de desempenho detalhados.
            </p>
          </div>
          
          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-white/30 text-6xl">🚀</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/4 -left-8 text-white/30 text-2xl">✦</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;