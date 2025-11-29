// ETF UNSA - Button Component Stories
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later

export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger'],
            description: 'Button color variant',
        },
        size: {
            control: 'select',
            options: ['sm', 'default', 'lg'],
            description: 'Button size',
        },
        label: {
            control: 'text',
            description: 'Button text',
        },
        icon: {
            control: 'text',
            description: 'Bootstrap icon class (e.g., "bi-star")',
        },
    },
};

const createButton = ({ variant, size, label, icon }) => {
    const variantClass = variant ? `ez-btn--${variant}` : '';
    const sizeClass = size && size !== 'default' ? `ez-btn--${size}` : '';
    const iconHtml = icon ? `<i class="bi ${icon} ez-btn__icon"></i>` : '';

    return `
    <button class="ez-btn ${variantClass} ${sizeClass}">
      ${iconHtml}${label}
    </button>
  `;
};

export const Primary = {
    args: {
        variant: 'primary',
        size: 'default',
        label: 'Primary Button',
    },
    render: createButton,
};

export const Secondary = {
    args: {
        variant: 'secondary',
        size: 'default',
        label: 'Secondary Button',
    },
    render: createButton,
};

export const Success = {
    args: {
        variant: 'success',
        size: 'default',
        label: 'Success Button',
    },
    render: createButton,
};

export const Danger = {
    args: {
        variant: 'danger',
        size: 'default',
        label: 'Danger Button',
    },
    render: createButton,
};

export const Small = {
    args: {
        variant: 'primary',
        size: 'sm',
        label: 'Small Button',
    },
    render: createButton,
};

export const Large = {
    args: {
        variant: 'primary',
        size: 'lg',
        label: 'Large Button',
    },
    render: createButton,
};

export const WithIcon = {
    args: {
        variant: 'primary',
        size: 'default',
        label: 'Download',
        icon: 'bi-download',
    },
    render: createButton,
};
