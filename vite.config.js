import { defineConfig } from 'vite';
import { resolve} from 'path';

export default defineConfig({
    root:'/', // Project root directory
    build: {
        outDir: 'dist', // Output directory for the production build
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'), // Main entry point
            },
        },
    },
    server: {
        port: 3000, // Development server port
        open: true, // To automatically open page on browser
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src') // Alias for the src directory
        }
    }
})