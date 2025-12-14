# Layouts

The project uses Astro's layout system to ensure consistent page structures. Layouts are located in `src/site/layouts/`.

## Base Layouts

### `Base.astro`
The root layout (HTML shell).
*   **Responsibility**: Defines `<head>`, meta tags, favicon, Global CSS imports (`_site.scss`), and the basic `<body>` structure with `Header` and `Footer`.
*   **Props**: `title`, `description`.

### `Default.astro`
The standard page wrapper.
*   **Extends**: `Base.astro`.
*   **Responsibility**: Adds breadcrumb navigation, main content wrapper, and optional grid system.
*   **Slots**:
    *   `banner`: For `PageHeader` visuals.
    *   `default`: Main content area.
    *   `content-before` / `content-after`: Slots outside the main grid.

## Sidebar Layouts

Layouts specialized for content pages requiring sidebars.

### `SidebarRight.astro`
Standard layout for content pages with a sidebar on the right.
*   **Extends**: `Default.astro`.
*   **Structure**: Bootstrap Grid (`col-lg-9` content, `col-lg-3` sidebar).
*   **Slots**:
    *   `default`: Main content.
    *   `sidebar`: Content for the right sidebar.
    *   `banner`: Page header area.

### `SidebarLeft.astro`
Standard layout for areas requiring navigation or filters on the left.
*   **Extends**: `Default.astro`.
*   **Structure**: Bootstrap Grid (`col-lg-3` sidebar, `col-lg-9` content).
*   **Slots**:
    *   `default`: Main content.
    *   `sidebar`: Content for the left sidebar.
    *   `banner`: Page header area.
