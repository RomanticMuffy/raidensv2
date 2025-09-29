import SocialButton from "@/components/UI/SocialButton";
import { Instagram, Youtube, Github } from "lucide-react";
import logoMono from "@/assets/logo_mono.png";

const Sobre = () => {
  return (
    <main className="min-h-screen pt-24 pb-32 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl space-y-12 lg:space-y-16">
        <section className="text-center animate-slide-up">
          <br></br><br></br><br></br><br></br>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Venha conhecer um pouquinho da gente
          </h1>
        </section>

        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-fade-in text-center lg:text-left">
          <div className="flex-1 space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos os RAIDENS, a equipe de robótica do SESI-SP de Alumínio, unida por sonhos, tecnologia e muita amizade.
              Participamos de grandes torneios como a FLL, a OBR (Teórica e Prática) e a MNR, levando sempre nosso espírito de equipe a cada desafio.
              Já conquistamos prêmios incríveis, como o troféu de Core Values Regional e de Melhor Robô Nacional na FLL, além de medalhas na OBR em nível nacional.
            </p>
          </div>

          <div className="w-56 h-56 md:w-64 md:h-64 flex items-center justify-center robo-glow bg-card border border-border rounded-xl p-8">
            <img
              src={logoMono}
              alt="Logo da equipe monocromática"
              className="max-w-full max-h-full object-contain animate-float opacity-80"
            />
          </div>
        </section>

        <section className="animate-slide-up">
          <p className="text-lg md:text-xl text-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Mas mais do que troféus e medalhas, somos uma família apaixonada por aprender e crescer juntos.
            Cada projeto, cada programação e cada competição é uma oportunidade de superar limites e criar memórias inesquecíveis.
            Vem conhecer mais sobre nós e embarcar nessa jornada cheia de energia, criatividade e trabalho em equipe!
          </p>
        </section>

        <section className="flex justify-center gap-6 animate-fade-in">
          <SocialButton
            icon={Instagram}
            label="Instagram"
            url="https://www.instagram.com/sesiraidens/"
          />
          <SocialButton
            icon={Github}
            label="GitHub"
            url="https://github.com/sesiraidens"
          />
        </section>

        <div className="h-16" />
      </div>
    </main>
  );
};

export default Sobre;