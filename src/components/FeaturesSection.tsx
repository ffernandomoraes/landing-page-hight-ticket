const FeaturesSection = () => {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* First Column - Main Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Entre agora para a <span className="text-[#E85A4F]">maior</span>{" "}
              <span className="text-[#E85A4F]">plataforma de produtos digitais</span>{" "}
              do mundo.
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Na Eduzz, você encontra todas as ferramentas para criar, vender e escalar infoprodutos, eventos e consultorias de alto valor.
            </p>
          </div>
          
          {/* Second Column - Stats and Details */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-bold text-white">+ 50 Bilhões</div>
                <div className="text-white/70 text-xs">De reais em vendas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-bold text-white">+ 25 Milhões</div>
                <div className="text-white/70 text-xs">De compradores</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-bold text-white">+ 200 Mil</div>
                <div className="text-white/70 text-xs">Produtores vendendo aqui</div>
              </div>
            </div>
            
            <p className="text-base text-white/70 leading-relaxed">
              Nossa plataforma reúne gestão de cursos, eventos presenciais, pagamentos flexíveis (Pix e cartão parcelado em até 18×) e área de membros premium com sua marca, além de relatórios de desempenho detalhados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;