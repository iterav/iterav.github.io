import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import eslintPlugin from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: './src',
  build: {
	emptyOutDir: true,
	outDir: '../public',
  },
  plugins: [
      vue(),
      tailwindcss(),
      eslintPlugin({
        cache: false,
        include: [
          './src/**/*.vue',
        ],
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
