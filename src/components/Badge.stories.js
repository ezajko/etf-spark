// ETF UNSA - Badge Component Stories  
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later

export default {
    title: 'Components/Badges',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'Badge color variant',
        },
        text: {
            control: 'text',
            description: 'Badge text',
        },
        pill: {
            control: 'boolean',
            description: 'Rounded pill style',
        },
    },
};

const createBadge = ({ variant, text, pill }) => {
    const pillClass = pill ? 'rounded-pill' : '';
    return `<span class="badge bg-${variant} ${pillClass}">${text}</span>`;
};

export const Primary = {
    args: {
        variant: 'primary',
        text: 'Novo',
        pill: false,
    },
    render: createBadge,
};

export const Success = {
    args: {
        variant: 'success',
        text: 'Aktivan',
        pill: false,
    },
    render: createBadge,
};

export const Danger = {
    args: {
        variant: 'danger',
        text: 'Zatvoren',
        pill: false,
    },
    render: createBadge,
};

export const PillBadge = {
    args: {
        variant: 'info',
        text: 'Informacija',
        pill: true,
    },
    render: createBadge,
};

export const Counter = {
    args: {
        variant: 'danger',
        text: '99+',
        pill: true,
    },
    render: createBadge,
};

export const InButton = {
    render: () => `
    <button type="button" class="btn btn-primary">
      Obavijesti <span class="badge bg-light text-dark ms-2">4</span>
    </button>
  `,
};

export const InHeading = {
    render: () => `
    <h3>
      Studijski program 
      <span class="badge bg-secondary">2024/25</span>
    </h3>
  `,
};

export const MultipleBadges = {
    render: () => `
    <div class="d-flex gap-2 flex-wrap">
      <span class="badge bg-primary">JavaScript</span>
      <span class="badge bg-primary">Python</span>
      <span class="badge bg-primary">Java</span>
      <span class="badge bg-primary">C++</span>
      <span class="badge bg-secondary">SQL</span>
      <span class="badge bg-success">Git</span>
    </div>
  `,
};
