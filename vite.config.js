import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // Set this to '/your-repo-name/' if you deploy to GitHub Pages
  // under a project subpath instead of a custom domain.
  base: '/',
});
