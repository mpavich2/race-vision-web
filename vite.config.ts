import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePluginRadar } from "vite-plugin-radar"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePluginRadar({
      analytics: {
        id: "G-9VHQ8VPQBX",
      },
      enableDev: true
    }),
  ],
})
