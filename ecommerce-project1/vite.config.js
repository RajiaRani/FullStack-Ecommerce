import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // This should ensure proper handling of external CSS files
        additionalData: '@import "react-inner-image-zoom/dist/style.css";',
      },
    },
  },
});
