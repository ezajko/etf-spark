// ETF UNSA - Hero Component Stories (Legacy Migration)
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later
// Migrated from legacy/design/components/hero.html

export default {
    title: 'Components/Hero',
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Naslov hero sekcije',
        },
        subtitle: {
            control: 'text',
            description: 'Podnaslov',
        },
        buttonText: {
            control: 'text',
            description: 'Tekst dugmeta',
        },
        imageUrl: {
            control: 'text',
            description: 'Background slika',
        },
    },
};

// Glavni ETF hero (iz legacy/design/components/hero.html)
export const ETFWelcome = {
    render: () => `
    <div class="p-5 mb-4 bg-light rounded-3 hero-example" 
         style="background-image: url('/images/news_1.png'); background-size: cover; background-position: center; position: relative; min-height: 400px;">
      <div class="container-fluid py-5 position-relative" style="z-index: 2;">
        <h1 class="display-5 fw-bold text-white">Dobrodošli na ETF</h1>
        <p class="col-md-8 fs-4 text-white">Vodeća visokoškolska ustanova u oblasti elektrotehnike i računarstva.</p>
        <button class="btn btn-primary btn-lg" type="button">Saznaj više</button>
      </div>
      <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1; border-radius: 0.3rem;"></div>
    </div>
  `,
};

// Customizable Hero
const createHero = ({ title, subtitle, buttonText, imageUrl }) => {
    return `
    <div class="p-5 mb-4 bg-light rounded-3 hero-example" 
         style="background-image: url('${imageUrl}'); background-size: cover; background-position: center; position: relative; min-height: 400px;">
      <div class="container-fluid py-5 position-relative" style="z-index: 2;">
        <h1 class="display-5 fw-bold text-white">${title}</h1>
        <p class="col-md-8 fs-4 text-white">${subtitle}</p>
        <button class="btn btn-primary btn-lg" type="button">${buttonText}</button>
      </div>
      <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1; border-radius: 0.3rem;"></div>
    </div>
  `;
};

export const Custom = {
    args: {
        title: 'Dobrodošli',
        subtitle: 'Opis hero sekcije koja privlači pažnju.',
        buttonText: 'Akcija',
        imageUrl: '/images/news_1.png',
    },
    render: createHero,
};

// Hero sa primjenom ez- klasa
export const WithEZClasses = {
    render: () => `
    <div class="ez-hero" style="background-image: url('/images/news_1.png');">
      <div class="ez-hero__overlay"></div>
      <div class="ez-hero__content">
        <h1 class="ez-hero__title">ETF UNSA</h1>
        <p class="ez-hero__subtitle">Vodeća institucija u BiH</p>
        <div class="ez-hero__cta">
          <button class="ez-btn ez-btn--primary">Saznaj više</button>
        </div>
      </div>
    </div>
  `,
};
