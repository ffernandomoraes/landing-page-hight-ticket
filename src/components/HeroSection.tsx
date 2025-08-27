import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[hsl(210_95%_20%)] to-[hsl(210_95%_10%)] flex items-center pt-12">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-[1fr,auto,400px] gap-12 items-center">
          
          {/* Hero Content */}
          <div className="text-white space-y-8 animate-fade-in max-w-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Eleve seu negócio digital com a Eduzz
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-lg">
              Estratégias exclusivas para produtos de alto valor, eventos e cursos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://accounts.eduzz.com/', '_blank')}
              >
                Crie sua conta
              </Button>
              <Button 
                variant="outline"
                size="lg"
              >
                Cases de Sucesso
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-white/70 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Grátis para começar</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
          
          {/* Center space for background image */}
          <div className="hidden lg:block">
            {/* Space reserved for background image PNG */}
          </div>
          
          {/* Sign Up Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-slide-up">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Crie sua conta agora.
              </h2>
              <p className="text-muted-foreground">
                É gratuito
              </p>
            </div>
            
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button variant="tertiary" className="h-12 rounded-2xl bg-gray-50 border-gray-200 hover:bg-gray-100">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.36 7.75 12.11 7.75C12.85 7.75 14.28 6.68 15.89 6.84C16.57 6.87 18.42 7.16 19.47 8.93C19.38 8.99 17.69 10.06 17.71 12.4C17.74 15.22 20.05 16.16 20.07 16.17C20.04 16.27 19.67 17.57 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
              </Button>
              <Button variant="tertiary" className="h-12 rounded-2xl bg-gray-50 border-gray-200 hover:bg-gray-100">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EB4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </Button>
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-muted-foreground">Ou</span>
              </div>
            </div>
            
            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-gray-50 border-gray-200 rounded-2xl placeholder:text-gray-500"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-gray-50 border-gray-200 rounded-2xl placeholder:text-gray-500"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12 bg-gray-50 border-gray-200 rounded-2xl placeholder:text-gray-500 pr-12"
                  placeholder="Digite uma senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Ao me cadastrar, declaro que sou maior de idade, li e concordo 
                com os <a href="#" className="underline">Termos e as Políticas</a> da plataforma.
              </p>
              
              <Button 
                variant="secondary"
                type="submit" 
                className="w-full"
              >
                Cadastre-se agora
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;