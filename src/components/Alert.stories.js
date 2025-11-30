// ETF UNSA - Alert Component Stories
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later

export default {
    title: 'Components/Alerts',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
            description: 'Alert color variant',
        },
        heading: {
            control: 'text',
            description: 'Alert heading (optional)',
        },
        message: {
            control: 'text',
            description: 'Alert message',
        },
        dismissible: {
            control: 'boolean',
            description: 'Can be dismissed',
        },
        icon: {
            control: 'text',
            description: 'Bootstrap icon class (e.g., "bi-info-circle")',
        },
    },
};

const createAlert = ({ variant, heading, message, dismissible, icon }) => {
    const dismissClass = dismissible ? 'alert-dismissible fade show' : '';
    const iconHtml = icon ? `<i class="bi ${icon} me-2"></i>` : '';
    const headingHtml = heading ? `<h5 class="alert-heading">${iconHtml}${heading}</h5>` : '';
    const dismissButton = dismissible
        ? '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>'
        : '';

    return `
    <div class="alert alert-${variant} ${dismissClass}" role="alert">
      ${dismissButton}
      ${headingHtml}
      ${!heading && iconHtml ? iconHtml : ''}${message}
    </div>
  `;
};

export const Primary = {
    args: {
        variant: 'primary',
        message: 'Ovo je primarna obavijest.',
        dismissible: false,
    },
    render: createAlert,
};

export const Success = {
    args: {
        variant: 'success',
        heading: 'Uspješno!',
        message: 'Vaša prijava je uspješno poslana.',
        icon: 'bi-check-circle-fill',
        dismissible: true,
    },
    render: createAlert,
};

export const Danger = {
    args: {
        variant: 'danger',
        heading: 'Greška!',
        message: 'Došlo je do greške prilikom obrade vašeg zahtjeva.',
        icon: 'bi-exclamation-triangle-fill',
        dismissible: true,
    },
    render: createAlert,
};

export const Warning = {
    args: {
        variant: 'warning',
        heading: 'Upozorenje',
        message: 'Molimo provjerite svoje podatke prije slanja.',
        icon: 'bi-exclamation-circle-fill',
        dismissible: false,
    },
    render: createAlert,
};

export const Info = {
    args: {
        variant: 'info',
        message: 'Prijavljivanje za zimski semestar počinje 1. oktobra.',
        icon: 'bi-info-circle-fill',
        dismissible: false,
    },
    render: createAlert,
};

export const WithLink = {
    render: () => `
    <div class="alert alert-primary" role="alert">
      <i class="bi bi-info-circle-fill me-2"></i>
      Nova obavijest o prijemnom ispitu. 
      <a href="#" class="alert-link">Pogledajte detalje</a>.
    </div>
  `,
};

export const DetailedAlert = {
    render: () => `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <h5 class="alert-heading">
        <i class="bi bi-check-circle-fill me-2"></i>Uspješna registracija!
      </h5>
      <p>Vaš nalog je uspješno kreiran. Aktivacijski link je poslan na vašu email adresu.</p>
      <hr>
      <p class="mb-0">
        Ako ne vidite email, provjerite spam folder ili 
        <a href="#" class="alert-link">pošaljite ponovo</a>.
      </p>
    </div>
  `,
};
