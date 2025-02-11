import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ command }) => ({
	build: {
		emptyOutDir: true,
		minify: true,
		cssCodeSplit: true,
		reportCompressedSize: true,
		sourcemap: false,
		output: {
			sourcemap: true,
		},
	},
	base: '/', // command === 'serve' ? '/' : '/iterav.github.io/',
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
		preserveSymlinks: true,
	},
}));
