// ETF UNSA - Button Component Stories (Legacy Migration)
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later
// Migrated from legacy/design/components/buttons.html

export default {
    title: 'Components/Button',
    tags: ['autodocs'],
};

// Solid Buttons (iz legacy)
export const SolidButtons = {
    render: () => `
    <div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
  `,
};

// Outline Buttons (iz legacy)
export const OutlineButtons = {
    render: () => `
    <div>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>
  `,
};

// Sizes (iz legacy)
export const Sizes = {
    render: () => `
    <div>
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
      <button type="button" class="btn btn-primary">Default button</button>
      <button type="button" class="btn btn-primary btn-sm">Small button</button>
    </div>
  `,
};

// Disabled State (iz legacy)
export const Disabled = {
    render: () => `
    <div>
      <button type="button" class="btn btn-primary" disabled>Disabled Primary</button>
      <button type="button" class="btn btn-outline-primary" disabled>Disabled Outline</button>
    </div>
  `,
};

// ez- class variants
export const EZButton = {
    render: () => `
    <div class="d-flex gap-2">
      <button class="ez-btn ez-btn--primary">Primary</button>
      <button class="ez-btn ez-btn--secondary">Secondary</button>
      <button class="ez-btn ez-btn--success">Success</button>
      <button class="ez-btn ez-btn--danger">Danger</button>
    </div>
  `,
};

export const EZSizes = {
    render: () => `
    <div class="d-flex gap-2">
      <button class="ez-btn ez-btn--primary ez-btn--sm">Small</button>
      <button class="ez-btn ez-btn--primary">Default</button>
      <button class="ez-btn ez-btn--primary ez-btn--lg">Large</button>
    </div>
  `,
};
