// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
   dts({
  insertTypesEntry: true,
  outDir: "dist",
  include: ["src"]
})
  ],

  build: {
    lib: {
      entry: "./src/index.ts",
      name: "ComponentLibrary",
      formats: ["es", "cjs"],
      fileName: (format) => `component-library.${format}.js`
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});

