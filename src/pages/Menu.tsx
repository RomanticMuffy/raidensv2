import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/UI/ImageCarousel";
import logoColor from "@/assets/logo_color.png";

const Menu = () => {
  return (
    <main className="min-h-screen pt-24 pb-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl space-y-16 lg:space-y-24">
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-slide-up text-center lg:text-left">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              RAIDENS
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olá, bem-vindo ao nosso site! Aqui você poderá navegar por nossos 
              projetos realizados para a OBR (Olimpíada Brasileira de Robótica) 
              e a MNR (Mostra Nacional de Robótica), além de baixar os arquivos de cada projeto.
            </p>
          </div>

          <div className="w-60 h-60 lg:w-80 lg:h-80 flex items-center justify-center">
            <img
              src={logoColor}
              alt="Logo da equipe colorida"
              className="max-w-full max-h-full object-contain animate-float drop-shadow-2xl"
            />
          </div>
        </section>

        <section className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            PROJETOS REALIZADOS POR NÓS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aqui você pode ver um pouquinho do que já fizemos e baixar os arquivos.
          </p>
        </section>

        <section className="animate-slide-up">
          <ImageCarousel />
        </section>

        <section className="flex justify-center animate-fade-in">
          <Link to="/download">
            <Button
              size="lg"
              className="text-base md:text-lg px-6 py-4 md:px-8 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground 
                         transition-all duration-300 hover:scale-105 animate-pulse-glow
                         shadow-xl hover:shadow-2xl"
            >
              CLIQUE PARA BAIXAR NOSSOS PROJETOS
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Menu;