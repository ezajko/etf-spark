# Structural & Content Components

Helper components to organize page content.

## Headers

### `PageHeader.astro`
Top-of-page banner/hero section.
*   **Props**:
    *   `title`: Main heading.
    *   `subtitle`: Secondary text.
    *   `bgClass`: Background utility class (e.g., `bg-primary`, `bg-dark`).

### `SectionHeader.astro`
A standard header for page sections to ensure consistent spacing and typography.
*   **Props**: `title`, `level` (h2, h3).

## Interactive

### `Accordion.astro`
Wrapper for standard Bootstrap accordion functionality.
*   **Props**:
    *   `id` (string): Unique identifier.
*   **Sub-components**: `AccordionItem.astro`.

### `Tabs.astro`
Generates Bootstrap navigation tabs.
*   **Props**:
    *   `id` (string): Unique group ID.
    *   `tabs` (Array): Objects with `{ id, label, active? }`.
*   **Usage**: Used with `TabItem.astro` for content panels.

## Tables

### `ez-table`
We use standard HTML `<table>` elements with the `.ez-table` class for styling.

```html
<div class="ez-table-responsive">
  <table class="ez-table ez-table--hover">
    ...
  </table>
</div>
```
