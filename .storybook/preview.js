// CSS imports moved to preview-head.html (CDN)
// This allows Storybook/Vite to work without node_modules resolution issues

export default {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
