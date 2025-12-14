# Main Navigation

The **Main Navigation** is the primary horizontal menu located in the site header. It is designed to handle complex hierarchy through standard dropdowns and mega-menus.

## Component

**`HeaderNav.astro`**
*   **Location**: `src/site/components/navigation/HeaderNav.astro`
*   **SCSS**: `src/scss/components/navigation/_site-nav-main.scss`
*   **Class**: `.site-nav-main`

## Features

1.  **Standard Links**: Simple direct links.
2.  **Dropdowns**: Single-column vertical lists.
3.  **Mega Menus**: Full-width panels containing columns of links.
4.  **Tabbed Mega Menus**: Advanced structure allowing switching content within the menu via tabs (e.g., "Studij", "Upis").

## Usage

This component is automatically included in `Header.astro`. It relies on Bootstrap's collapse plugin for mobile responsiveness.
