import { Link, useLocation } from "react-router-dom";
import logoNome from "@/assets/logo_nome.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Menu", path: "/" },
    { name: "Download projeto", path: "/download" },
    { name: "Sobre a equipe", path: "/sobre" },
  ];

  return (
    <>
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer Logo */}
      <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="robo-glow bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
          <img 
            src={logoNome} 
            alt="Logo da equipe" 
            className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </footer>
    </>
  );
};

export default Navigation;