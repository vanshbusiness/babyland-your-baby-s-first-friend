import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add the proxy configuration here:
    proxy: {
      '/babyland_patient.apk': {
        target: 'https://github.com/vanshbusiness/babyland-your-baby-s-first-friend/releases/download/newbabyapprelease/app-release.apk',
        changeOrigin: true,
        followRedirects: true,
        rewrite: () => '' 
      }
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
