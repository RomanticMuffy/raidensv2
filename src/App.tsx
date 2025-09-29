import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Download from "./pages/Download";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Layout/Navigation";
import AnimatedBackground from "./components/Layout/AnimatedBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="dark">
        <AnimatedBackground />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/download" element={<Download />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
