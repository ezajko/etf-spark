export default {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        // Import custom SCSS
        return {
            ...config,
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `@import "../src/scss/_ez-custom.scss";`
                    }
                }
            }
        };
    }
};
