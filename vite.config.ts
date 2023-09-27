import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    manifest:{
      short_name:"Isofi",
      name: "Isofi App",
      icons:[
        {
          "src": "logo.png",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
        },
        {
          "src": "logo.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "logo.png",
          "type": "image/png",
          "sizes": "512x512"
        }
      ],
      start_url:".",
      display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
    
    }
  }),
    react()],
  server: {port: 3000}
})
