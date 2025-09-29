import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  /**
   * Define o caminho base para a aplicação.
   * Essencial para o deploy em um subdiretório, como no GitHub Pages.
   */
  base: '/raidensv1/',

  /**
   * Configurações do servidor de desenvolvimento.
   */
  server: {
    host: "::", // Permite acesso na rede local
    port: 8080,
  },

  /**
   * Lista de plugins.
   * O 'componentTagger' é adicionado apenas em modo de desenvolvimento.
   */
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean), // .filter(Boolean) remove valores falsos (como o componentTagger em produção)

  /**
   * Configura os aliases de caminho para importações mais limpas.
   * Ex: import MyComponent from '@/components/MyComponent';
   */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));