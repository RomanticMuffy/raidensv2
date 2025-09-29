import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import solid1 from "@/assets/1.jpeg";
import solid2 from "@/assets/2.jpeg";
import solid3 from "@/assets/3.jpeg";
import solid4 from "@/assets/4.jpeg";
import solid5 from "@/assets/5.jpeg";
import solid6 from "@/assets/6.jpeg";
import solid7 from "@/assets/7.jpeg";
import solid8 from "@/assets/8.jpeg";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [solid1, solid2, solid3, solid4, solid5, solid6, solid7, solid8];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[700px] rounded-xl overflow-hidden robo-glow bg-card border border-border">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Projeto ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="sm"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm border border-border/50 hover:bg-primary/20"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm border border-border/50 hover:bg-primary/20"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;