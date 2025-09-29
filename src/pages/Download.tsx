import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/UI/ProjectCard";
import { Download as DownloadIcon } from "lucide-react";
import solidBlack from "@/assets/solid_black.png";
import solidRed from "@/assets/solid_red.png";
import solidWhite from "@/assets/solid_white.png";

const Download = () => {
  const projects = [
    {
      id: 1,
      image: solidBlack,
      title: "Download programação",
      subtitle: "Repositório da equipe RAIDENS – SESI Alumínio 192 para a MNR 2025 (Mostra Virtual). Contém códigos em Python com OpenCV para seguimento de linha, detecção de verde/vermelho, arquivos de calibração LAB, módulos auxiliares e documentação comentada de todo o processo.",
      downloadUrl: "https://github.com/sesiraidens/raidens_mnr/archive/refs/heads/main.zip"
    },
    {
      id: 2,
      image: solidRed,
      title: "2",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Códigos fonte e esquemas do sistema de controle desenvolvido pela nossa equipe.",
      downloadUrl: "https://example.com/download2"
    },
    {
      id: 3,
      image: solidWhite,
      title: "3",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Guia completo de operação e manutenção dos nossos robôs com procedimentos detalhados.",
      downloadUrl: "https://example.com/download3"
    },
    {
      id: 4,
      image: solidWhite,
      title: "4",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Guia completo de operação e manutenção dos nossos robôs com procedimentos detalhados.",
      downloadUrl: "https://example.com/download4"
    }
  ];

  const handleDownloadAll = () => {
    window.open("https://example.com/download-all", "_blank");
  };

  return (
    <main className="min-h-screen pt-24 pb-32 px-6">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Page Title */}
        <section className="text-center animate-slide-up">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Página de download do portifólio de nosso projeto
          </h1>
        </section>

        {/* Project Cards */}
        <section className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                downloadUrl={project.downloadUrl}
              />
            </div>
          ))}
        </section>

        {/* Download All Button */}
        <section className="flex justify-center pt-8 animate-fade-in">
          <Button
            onClick={handleDownloadAll}
            size="lg"
            className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground
                       transition-all duration-300 hover:scale-105 animate-pulse-glow
                       shadow-xl hover:shadow-2xl"
          >
            <DownloadIcon className="mr-3 h-6 w-6" />
            Download de Todos os Projetos (.zip)
          </Button>
        </section>

        {/* Aesthetic Footer Spacer */}
        <div className="h-16" />
      </div>
    </main>
  );
};

export default Download;