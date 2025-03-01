import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';

const manifest:Partial<ManifestOptions> | false = {
  "theme_color":"#000000",
  "background_color":"#ffffff",
  "icons":[
    {"purpose":"maskable","sizes":"512x512","src":"icon512_maskable.png","type":"image/png"},
    {"purpose":"any","sizes":"512x512","src":"icon512_rounded.png","type":"image/png"}
  ],
    "screenshots": [
      {
        "src": '/screenshots/desktop.png',
        "type": 'img/png',
        "sizes": '1320x724',
        "form_factor": 'wide',
      },
      {
        "src": '/screenshots/mobile.png',
        "type": 'img/png',
        "sizes": '634x898',
        "form_factor": 'narrow',
      }
    ],
"orientation":"any"
,"display":"standalone",
"lang":"ru",
"name":"Notes",
"short_name":"Notes",
"start_url":"/"}

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
      manifest: manifest,
    }),
  ],
});



