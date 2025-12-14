# ETF UNSA Design System

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

A modern, responsive Design System built on top of **Bootstrap 5**, tailored for the Faculty of Electrical Engineering Sarajevo (ETF UNSA).

> [!IMPORTANT]
> **Proof of Concept (POC)**
> This repository uses **Astro** primarily as a testing ground and Proof of Concept (POC) environment to validate the design system and components. The core product is the **SCSS library** located in `src/scss`, which is intended to be framework-agnostic.

## Core Philosophy

1.  **Native Bootstrap First**: We utilize standard Bootstrap classes (`.card`, `.btn`, `.list-group`) wherever possible. Custom styles are applied via themes and overrides, avoiding unnecessary custom classes.
2.  **Theming Engine**: Visual appearance is controlled via comprehensive SCSS variables (`$site-theme-*`) defined in `src/scss/themes/`.
3.  **Site Prefix**: All custom components and structural layouts use the `site-` prefix (e.g., `.site-header`, `.site-footer`, `.site-nav`) to avoid collisions and clearly denote system-specific elements.

## Project Structure

The core design system lives in the `src/scss` directory:

src/
├── scss/                 # Design System & Theming
│   ├── base/             # Bootstrap overrides & structural variables
│   ├── overrides/        # Bootstrap component customization (Buttons, Cards)
│   ├── themes/           # Theming variables (Colors, Fonts, Spacing)
│   └── _site.scss        # Main entry point
│
└── site/                 # The Astro Application
    ├── pages/            # Routes & Content
    ├── layouts/          # Page Wrappers
    └── components/       # Reusable UI
        ├── common/       # Generic (Accordion, Card, Tabs)
        ├── layout/       # Nav, Footer, Hero
        ├── widgets/      # Calendar, Contact, Info
        ├── features/     # Curriculum, Staff, Profile
        └── lists/        # List Item variations

## Development

You can run the POC environment using Podman (recommended) or locally with Node.js.

### Option A: Podman (Containerized)

```bash
# Start development environment
podman-compose up

# Access: http://localhost:4321
```

### Option B: Local (Node.js)

Prerequisites: Node.js 20+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Naming Conventions

*   **SCSS Variables**: `$site-theme-[category]-[property]` (e.g., `$site-theme-brand-blue`, `$site-theme-spacing-md`)
*   **CSS Variables**: `--site-theme-[name]` (e.g., `--site-theme-color`)
*   **Custom Classes**: `.site-[component]` (e.g., `.site-nav-main`)
*   **Data Attributes**: `data-site-[attribute]` (e.g., `data-site-theme="dark"`)

## License

GPL-2.0-or-later

## Author

Ernedin Zajko <ezajko@root.ba>
