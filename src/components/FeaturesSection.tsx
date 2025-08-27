const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFBC00] to-[#FFD700] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* First Column - Main Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Tudo o que você precisa para criar, vender e escalar <span className="text-brand-blue">infoprodutos de alto valor</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Gestão completa de cursos, eventos e consultorias, com pagamentos flexíveis e área de membros premium
            </p>
          </div>
          
          {/* Second Column - Stats and Details */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue flex items-center gap-2">
                  <span className="border border-brand-blue text-brand-blue w-6 h-6 flex items-center justify-center text-sm rounded">+</span> 
                  50 Bilhões
                </div>
                <div className="text-gray-800 text-xs">De reais em vendas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue flex items-center gap-2">
                  <span className="border border-brand-blue text-brand-blue w-6 h-6 flex items-center justify-center text-sm rounded">+</span> 
                  25 Milhões
                </div>
                <div className="text-gray-800 text-xs">De compradores</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue flex items-center gap-2">
                  <span className="border border-brand-blue text-brand-blue w-6 h-6 flex items-center justify-center text-sm rounded">+</span> 
                  <span>200<br/>Mil</span>
                </div>
                <div className="text-gray-800 text-xs">Produtores vendendo aqui</div>
              </div>
            </div>
            
            <p className="text-base text-gray-800 leading-relaxed">
              Na Eduzz, você reúne em um único lugar a gestão de cursos online e eventos presenciais, com opções de pagamento via Pix ou cartão (parcelado em até 18 x) e uma área de membros white‑label com a sua marca. Tenha relatórios detalhados de desempenho e escale negócios de alto valor com segurança e praticidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;