import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools(),
    mode === "development" && componentTagger(),
    mode === "production" && VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,webp,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/i\.ytimg\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "youtube-thumbnails",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
      manifest: {
        name: "Robótica BSB",
        short_name: "Robótica BSB",
        theme_color: "#ffd900",
        background_color: "#ffffff",
        display: "browser",
        icons: [
          { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
        ],
      },
    }),
    mode === "production" && viteCompression({ algorithm: "gzip", threshold: 1024 }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    esbuildOptions: {
      drop: ["console", "debugger"],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          radix: ["@radix-ui/react-accordion", "@radix-ui/react-tooltip", "@radix-ui/react-toast"],
        },
      },
    },
  },
}));
