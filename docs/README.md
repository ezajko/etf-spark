# ETF Spark

**ETF Spark** is a comprehensive **Bootstrap Design System** for the Faculty of Electrical Engineering Sarajevo (ETF UNSA). Currently implemented as an extension of **Bootstrap 5**, it provides a robust toolkit for building consistent and modern interfaces.

## Technical Overview

The project is built using **Astro**, a static site generator optimized for content-heavy websites.

### Core Stack
*   **Framework**: [Astro](https://astro.build/) (v4.0+)
*   **Styling**: **Extension of Bootstrap 5**. We use the standard Bootstrap framework as a foundation and extend it with custom SCSS components (`site-`) to meet specific design requirements.
*   **Icons**: Bootstrap Icons (via CDN/local integration).
*   **Package Manager**: `pnpm` (configured), `npm` (fallback).

### Directory Structure

*   `src/site/components`: UI components (Cards, Widgets, Lists, Navigation).
*   `src/site/layouts`: Page layouts (Base, Page, Section).
*   `src/site/pages`: URL routes and example templates.
*   `src/scss`: Styling source files.
*   `public`: Static assets (images, fonts).
*   `legacy`: Archived files from the previous website version.

## Getting Started

### Prerequisites
*   Node.js (LTS version recommended)
*   npm or pnpm

### Development

Start the local development server:

```bash
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:4321`.

### Build

Build the project for production:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

## Design System Convention

The project uses a custom component library prefix `site-` class names to separate custom styles from generic Bootstrap utilities.

*   `site-card`: Standard content container.
*   `site-button`: Custom button styles.
## Documentation

The project documentation is organized as follows:
- **[Foundations](docs/foundations/)**: Core design elements (Colors, Typography, Icons, Grid).
- **[Components](docs/components/)**: Reusable UI elements:
    - [Cards](docs/components/cards.md) & [Lists](docs/components/lists.md)
    - [Carousel](docs/components/carousel.md) & [Hero](docs/components/carousel.md#herocarouselastro)
    - [Call To Action](docs/components/cta.md)
    - [Widgets](docs/components/widgets.md)
- **[Patterns](docs/patterns/)**: Complex UI organisms and layouts:
    - **Navigation**:
        - [Main Menu](docs/patterns/navigation/main-nav.md)
        - [Sidebar](docs/patterns/navigation/sidebar-nav.md)
        - [Section Links](docs/patterns/navigation/section-nav.md)
        - [Breadcrumbs](docs/patterns/navigation/breadcrumbs.md)
        - [Pagination](docs/patterns/navigation/pagination.md)
    - **Layouts**: [Page Templates](docs/patterns/layouts.md)
- **[Guides](docs/guides/)**: Development and implementation guidelines:
    - [Accessibility (a11y)](docs/guides/accessibility.md): Guidelines for accessible design and implementation
