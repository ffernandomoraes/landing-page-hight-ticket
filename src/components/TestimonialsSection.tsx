import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Carolina Silva",
    role: "Empreendedora Digital",
    company: "ACS Consultoria",
    content: "A Eduzz transformou completamente meu negócio digital. Com as ferramentas integradas, consegui aumentar minhas vendas em 300% em apenas 6 meses. O suporte é excepcional!",
    rating: 5,
    avatar: "/lovable-uploads/professional-1.jpg"
  },
  {
    id: 2,
    name: "Roberto Fernandes",
    role: "Coach de Negócios",
    company: "RF Academy",
    content: "Depois de testar várias plataformas, a Eduzz se destacou pela facilidade de uso e recursos completos. Meus eventos online nunca foram tão organizados e lucrativos.",
    rating: 5,
    avatar: "/lovable-uploads/professional-2.jpg"
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Mentora Financeira",
    company: "Riqueza Feminina",
    content: "A área de membros white label foi um divisor de águas para minha escola online. Meus alunos adoram a experiência personalizada e o engajamento aumentou significativamente.",
    rating: 5,
    avatar: "/lovable-uploads/professional-3.jpg"
  },
  {
    id: 4,
    name: "Diego Santos",
    role: "Consultor de Marketing",
    company: "Digital Growth",
    content: "As múltiplas opções de pagamento da Eduzz me ajudaram a converter muito mais clientes. O checkout é super otimizado e a taxa de abandono caiu drasticamente.",
    rating: 5,
    avatar: "/lovable-uploads/professional-4.jpg"
  },
  {
    id: 5,
    name: "Juliana Oliveira",
    role: "Especialista em Vendas",
    company: "Vendas Online Pro",
    content: "A segurança e credibilidade que a Eduzz oferece são incomparáveis. Meus clientes confiam mais na plataforma e isso se reflete diretamente nos resultados.",
    rating: 5,
    avatar: "/lovable-uploads/professional-5.jpg"
  },
  {
    id: 6,
    name: "Carlos Mendes",
    role: "Gestor de Equipes",
    company: "Team Excellence",
    content: "O controle de acesso para equipe de vendas revolucionou nosso processo. Agora conseguimos gerenciar tudo de forma centralizada e os resultados melhoraram muito.",
    rating: 5,
    avatar: "/lovable-uploads/professional-6.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Mais de 50.000 empreendedores já transformaram seus negócios com a Eduzz. 
            Veja alguns depoimentos reais de quem alcançou resultados extraordinários.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-stone-300" strokeWidth={1} />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                          <Star 
                            key={index} 
                            className="w-5 h-5 text-yellow-400 fill-yellow-400" 
                            strokeWidth={1}
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-stone-700 text-lg leading-relaxed mb-6 flex-grow">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-200 flex-shrink-0">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-stone-800">
                            {testimonial.name}
                          </div>
                          <div className="text-stone-600 text-sm">
                            {testimonial.role}
                          </div>
                          <div className="text-stone-500 text-xs">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 rounded-full" />
            <CarouselNext className="hidden md:flex -right-16 w-12 h-12 rounded-full" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;