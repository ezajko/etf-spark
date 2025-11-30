// ETF UNSA - Card Component Stories
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later

export default {
    title: 'Components/Card',
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Card title',
        },
        text: {
            control: 'text',
            description: 'Card body text',
        },
        imageUrl: {
            control: 'text',
            description: 'URL to card image',
        },
        buttonText: {
            control: 'text',
            description: 'Button label',
        },
        variant: {
            control: 'select',
            options: ['default', 'border', 'shadow', 'shadow-sm', 'shadow-lg'],
            description: 'Card styling variant',
        },
    },
};

const createCard = ({ title, text, imageUrl, buttonText, variant }) => {
    const variantClass = variant !== 'default' ? variant : '';
    const imageHtml = imageUrl
        ? `<img src="${imageUrl}" class="card-img-top" alt="${title}">`
        : '';
    const buttonHtml = buttonText
        ? `<a href="#" class="btn btn-outline-primary">${buttonText}</a>`
        : '';

    return `
    <div class="card ${variantClass}" style="width: 18rem;">
      ${imageHtml}
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
        ${buttonHtml}
      </div>
    </div>
  `;
};

export const Default = {
    args: {
        title: 'Card Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
        variant: 'default',
    },
    render: createCard,
};

export const WithImage = {
    args: {
        title: 'News Article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        imageUrl: '/images/news_1.png',
        buttonText: 'Pročitaj više',
        variant: 'shadow-sm',
    },
    render: createCard,
};

export const WithButton = {
    args: {
        title: 'Department Info',
        text: 'Automatika i elektronika - Moderni programi iz oblasti automatike, robotike i elektronike.',
        buttonText: 'Saznaj više',
        variant: 'default',
    },
    render: createCard,
};

export const WithBorder = {
    args: {
        title: 'Bordered Card',
        text: 'This card has a border style applied to it.',
        variant: 'border',
    },
    render: createCard,
};

export const WithShadow = {
    args: {
        title: 'Shadow Card',
        text: 'This card has a shadow effect for better visual hierarchy.',
        variant: 'shadow',
    },
    render: createCard,
};

export const Department = {
    args: {
        title: 'Računarstvo i informatika',
        text: 'Savremeni studijski programi iz oblasti računarskih nauka, softverskog inženjerstva i umjetne inteligencije.',
        imageUrl: '/images/dept_ri.png',
        buttonText: 'Više informacija',
        variant: 'shadow-sm',
    },
    render: createCard,
};
