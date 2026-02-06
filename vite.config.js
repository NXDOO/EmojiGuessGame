// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true
  },
  base: './', // Use relative paths for assets
});
