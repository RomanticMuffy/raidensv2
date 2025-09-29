import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated patterns */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            transition: "transform 0.3s ease-out"
          }}
        />
        
        {/* Floating orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)",
            left: `${20 + mousePosition.x * 0.05}%`,
            top: `${10 + mousePosition.y * 0.05}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.6s ease-out",
          }}
        />
        
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)",
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${20 + mousePosition.y * 0.03}%`,
            transform: "translate(50%, 50%)",
            transition: "all 0.8s ease-out",
          }}
        />
        
        <div 
          className="absolute w-48 h-48 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.5), transparent 70%)",
            left: `${60 - mousePosition.x * 0.02}%`,
            top: `${70 - mousePosition.y * 0.02}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.4s ease-out",
          }}
        />
      </div>
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;