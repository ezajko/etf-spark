// ETF UNSA - Alert Component Stories (Legacy Migration)
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later
// Migrated from legacy/design/components/alerts.html

export default {
    title: 'Components/Alerts',
    tags: ['autodocs'],
};

// Simple alerts (iz legacy)
export const Primary = {
    render: () => `
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
  `,
};

export const Secondary = {
    render: () => `
    <div class="alert alert-secondary" role="alert">
      A simple secondary alert—check it out!
    </div>
  `,
};

export const Success = {
    render: () => `
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  `,
};

export const Danger = {
    render: () => `
    <div class="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>
  `,
};

export const Warning = {
    render: () => `
    <div class="alert alert-warning" role="alert">
      A simple warning alert—check it out!
    </div>
  `,
};

export const Info = {
    render: () => `
    <div class="alert alert-info" role="alert">
      A simple info alert—check it out!
    </div>
  `,
};
