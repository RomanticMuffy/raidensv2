import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  downloadUrl: string;
}

const ProjectCard = ({ image, title, subtitle, downloadUrl }: ProjectCardProps) => {
  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="flex items-center gap-8 p-6 bg-card border border-border rounded-xl robo-glow animate-slide-up">
      {/* Text Content - Left Side */}
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
        <Button 
          onClick={handleDownload}
          className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-primary/25"
        >
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>

      {/* Image - Right Side */}
      <div className="w-48 h-48 rounded-lg overflow-hidden border border-border">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ProjectCard;