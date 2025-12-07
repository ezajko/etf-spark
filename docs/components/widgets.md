# Widget Components

Widgets are sidebar blocks used to display auxiliary information. They consistently wrap `SidebarWidget.astro`.

## Base Component

### `SidebarWidget.astro`
The generic wrapper for all widgets.
*   **Props**:
    *   `title` (string, required): Header title.
    *   `icon` (string): Bootstrap icon class name (e.g., `bi-link`).
    *   `class` (string): Extra classes.
*   **SCSS**: `_ez-sidebar-widget.scss`.

## Implementations

### `InfoWidget.astro`
A general-purpose container for lists or text.
*   **Usage**: Wraps content in `.ez-list-group.list-group.list-group-flush`.
*   **Common Use Cases**: Quick Links, Categories, Metadata lists.

### `ContactWidget.astro`
Displays contact information for people or departments.
*   **Props**:
    *   `title` (string): Header title.
    *   `contacts` (Contact[]): Array of objects with `name`, `role`, `email`, `phone`, `image`.

### `DocumentWidget.astro`
Displays a list of downloadable documents with icons indicating file type.
*   **Props**:
    *   `title` (string): Header title.
    *   `documents` (Document[]): Array of objects with `title`, `format`, `size`, `link`.

### `CalendarWidget.astro`
An interactive monthly calendar component.
*   **Props**:
    *   `initialDate` (Date): The month to show initially.
    *   `events` (Event[]): Array of objects `{ date: Date, url: string }`.
