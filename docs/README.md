# ETF Spark

**ETF Spark** is a comprehensive **Bootstrap Design System** for the Faculty of Electrical Engineering Sarajevo (ETF UNSA). Currently implemented as an extension of **Bootstrap 5**, it provides a robust toolkit for building consistent and modern interfaces.

## Technical Overview

The project is built using **Astro**, a static site generator optimized for content-heavy websites.

### Core Stack
*   **Framework**: [Astro](https://astro.build/) (v4.0+)
*   **Styling**: **Extension of Bootstrap 5**. We use the standard Bootstrap framework as a foundation and extend it with custom SCSS components (`ez-`) to meet specific design requirements.
*   **Icons**: Bootstrap Icons (via CDN/local integration).
*   **Package Manager**: `pnpm` (configured), `npm` (fallback).

### Directory Structure

*   `src/components`: UI components (Cards, Widgets, Lists, Navigation).
*   `src/layouts`: Page layouts (Base, Page, Section).
*   `src/pages`: URL routes and example templates.
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

The project uses a custom component library prefix `ez-` class names to separate custom styles from generic Bootstrap utilities.

*   `ez-card`: Standard content container.
*   `ez-button`: Custom button styles.
## Documentation

The project documentation is organized as follows:
- **[Foundations](docs/foundations/)**: Core design elements (Colors, Typography, Icons, Grid).
- **[Components](docs/components/)**: Reusable UI elements:
    - [Cards](docs/components/cards.md) & [Lists](docs/components/lists.md)
    - [Carousel](docs/components/carousel.md) & [Hero](docs/components/carousel.md#herocarouselastro)
    - [Call To Action](docs/components/cta.md)
    - [Pagination](docs/components/pagination.md)
    - [Widgets](docs/components/widgets.md)
- **[Patterns](docs/patterns/)**: Complex UI organisms and layouts:
    - **Navigation**: [Main](docs/patterns/navigation/main-nav.md), [Sidebar](docs/patterns/navigation/sidebar-nav.md), [Section](docs/patterns/navigation/section-nav.md)
    - **Layouts**: [Page Templates](docs/patterns/layouts.md)
