import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Entregable-3-CSS/", 

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'map_page.html'),
      },
    },
  },
});
