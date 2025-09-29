import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  url: string;
  color?: string;
}

const SocialButton = ({ icon: Icon, label, url, color = "primary" }: SocialButtonProps) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="lg"
      className={`
        group relative overflow-hidden border-2 transition-all duration-300
        hover:scale-105 hover:shadow-lg robo-glow
        ${color === "primary" ? "border-primary hover:bg-primary hover:text-primary-foreground" : ""}
      `}
    >
      <Icon className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-medium">{label}</span>
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
};

export default SocialButton;