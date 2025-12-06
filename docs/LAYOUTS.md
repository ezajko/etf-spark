# Layouts

The project uses Astro's layout system to ensure consistent page structures. Layouts are located in `src/layouts/`.

## Base Layouts

### `BaseLayout.astro`
The root layout (HTML shell).
*   **Responsibility**: Defines `<head>`, meta tags, favicon, global CSS imports, and the basic `<body>` structure with `Header` and `Footer`.
*   **Props**: `title` (Page title meta tag).

### `PageLayout.astro`
The standard page wrapper.
*   **Extends**: `BaseLayout`.
*   **Responsibility**: Adds breadcrumb navigation and handles general page flow.
*   **Slots**:
    *   `banner`: For `PageHeader` visuals.
    *   `default`: Main content area.

## Section Layouts

Section layouts are specialized for specific page types (e.g., Department pages, Article lists) to enforce consistent sidebar positioning and grid structures.

### `SectionRightSidebar.astro`
Standard layout for content pages with a sidebar on the right.
*   **Structure**: Bootstrap Grid (`col-lg-8` content, `col-lg-4` sidebar).
*   **Slots**:
    *   `default`: Main content.
    *   `sidebar`: Content for the right sidebar.
    *   `banner`: Page header area.

### `SectionLeftSidebar.astro`
Standard layout for "section" landing pages or areas requiring navigation on the left.
*   **Structure**: Bootstrap Grid (`col-lg-3` sidebar, `col-lg-9` content).
*   **Slots**:
    *   `default`: Main content.
    *   `sidebar`: Content for the left sidebar (e.g., filters, navigation).
    *   `banner`: Page header area.
