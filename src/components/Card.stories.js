// ETF UNSA - Card Component Stories (Legacy Migration)
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later
// Migrated from legacy/design/components/cards.html

export default {
    title: 'Components/Card',
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Naslov kartice',
        },
        text: {
            control: 'text',
            description: 'Tekst kartice',
        },
        imageUrl: {
            control: 'text',
            description: 'URL slike',
        },
        buttonText: {
            control: 'text',
            description: 'Tekst dugmeta',
        },
        variant: {
            control: 'select',
            options: ['default', 'shadow-sm', 'shadow', 'shadow-lg'],
            description: 'Sjena kartice',
        },
    },
};

const createCard = ({ title, text, imageUrl, buttonText, variant }) => {
    const variantClass = variant !== 'default' ? variant : '';
    const imageHtml = imageUrl
        ? `<img src="${imageUrl}" class="card-img-top" alt="${title}">`
        : '';
    const buttonHtml = buttonText
        ? `<a href="#" class="btn btn-primary">${buttonText}</a>`
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

// Osnovna Kartica (iz legacy)
export const Basic = {
    args: {
        title: 'Naslov Kartice',
        text: 'Primjer teksta koji gradi naslov kartice i čini većinu sadržaja.',
        imageUrl: '/images/news_1.png',
        buttonText: 'Idi negdje',
        variant: 'default',
    },
    render: createCard,
};

// Sa zaglavljem i podnožjem
export const WithHeaderFooter = {
    render: () => `
    <div class="card text-center" style="width: 18rem;">
      <div class="card-header">
        Zaglavlje
      </div>
      <div class="card-body">
        <h5 class="card-title">Tretman posebnog naslova</h5>
        <p class="card-text">Sa pratećim tekstom ispod kao prirodnim uvodom u dodatni sadržaj.</p>
        <a href="#" class="btn btn-primary">Idi negdje</a>
      </div>
      <div class="card-footer text-muted">
        Prije 2 dana
      </div>
    </div>
  `,
};

// Horizontalna kartica
export const Horizontal = {
    render: () => `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="/images/news_1.png" class="img-fluid rounded-start h-100" 
               style="object-fit: cover;" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Naslov kartice</h5>
            <p class="card-text">Ovo je šira kartica sa pratećim tekstom ispod kao prirodnim uvodom u dodatni sadržaj.</p>
            <p class="card-text"><small class="text-muted">Ažurirano prije 3 minute</small></p>
          </div>
        </div>
      </div>
    </div>
  `,
};

// Lista u kartici
export const WithList = {
    render: () => `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Zaglavlje
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Stavka 1</li>
        <li class="list-group-item">Stavka 2</li>
        <li class="list-group-item">Stavka 3</li>
      </ul>
    </div>
  `,
};

// Slika sa preklapanjem
export const ImageOverlay = {
    render: () => `
    <div class="card text-bg-dark" style="width: 18rem;">
      <img src="/images/news_1.png" class="card-img" alt="..." 
           style="max-height: 300px; object-fit: cover; opacity: 0.5;">
      <div class="card-img-overlay">
        <h5 class="card-title">Naslov kartice</h5>
        <p class="card-text">Ovo je šira kartica sa pratećim tekstom ispod kao prirodnim uvodom u dodatni sadržaj.</p>
        <p class="card-text"><small>Ažurirano prije 3 minute</small></p>
      </div>
    </div>
  `,
};

// Border variants
export const BorderPrimary = {
    args: {
        title: 'Primary card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        variant: 'border-primary',
    },
    render: ({ title, text, variant }) => `
    <div class="card ${variant} mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body text-primary">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
      </div>
    </div>
  `,
};

export const BorderSuccess = {
    args: {
        title: 'Success card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        variant: 'border-success',
    },
    render: ({ title, text, variant }) => `
    <div class="card ${variant} mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body text-success">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
      </div>
    </div>
  `,
};

// Shadows (iz legacy)
export const SmallShadow = {
    args: {
        title: 'Mala Sjena',
        text: 'shadow-sm',
        variant: 'shadow-sm',
    },
    render: createCard,
};

export const MediumShadow = {
    args: {
        title: 'Srednja Sjena',
        text: 'shadow',
        variant: 'shadow',
    },
    render: createCard,
};

export const LargeShadow = {
    args: {
        title: 'Velika Sjena',
        text: 'shadow-lg',
        variant: 'shadow-lg',
    },
    render: createCard,
};
