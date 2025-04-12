import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import gzipPlugin from 'rollup-plugin-gzip'
import dotenv from 'dotenv'
dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/portfolio-me',
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
			plugins: [
				gzipPlugin({
					filter: /\.(js|css|html|json|svg)$/,
					minSize: 1024,
				}),
			],
		},
	},
})
