import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://etf-unsa.github.io',
    base: '/www-ng',
    integrations: [sitemap()],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // Auto-import variables in all SCSS files
                    additionalData: `@import "./src/scss/base/_variables.scss";`
                }
            }
        }
    }
});
