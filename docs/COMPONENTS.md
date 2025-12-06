# Component Reference

This document outlines the core reusable components available in `src/components/`.

## Wrapper Components

### `ContentCard.astro`
A flexible card component used for displaying news, events, projects, and general content items.
*   **Props**:
    *   `title` (string, required): Card title.
    *   `href` (string, required): Link destination.
    *   `image` (string): Image URL.
    *   `excerpt` (string): Short summary text.
    *   `layout` ('horizontal' | 'vertical'): Layout orientation.
    *   `imagePosition` ('left' | 'right'): Image side in horizontal layout.
    *   `isEvent` (boolean): Enables date overlay styling.

### `InfoWidget.astro`
A sidebar widget container typically used for quick links or lists.
*   **Props**:
    *   `title` (string, required): Header title.
    *   `icon` (string): Bootstrap icon class name (e.g., `bi-link`).
*   **Usage**: Wraps a list of items (e.g., `SimpleListItem`).

### `ContactWidget.astro`
A specialized card for displaying contact information.
*   **Props**:
    *   `title` (string): Header title.
    *   `contacts` (Contact[]): Array of contact objects (`name`, `role`, `email`, `phone`, `image`).

### `DocumentWidget.astro`
A widget for listing downloadable files.
*   **Props**:
    *   `title` (string): Header title.
    *   `documents` (Document[]): Array of doc objects (`title`, `format`, `size`, `link`).

### `CalendarWidget.astro`
An interactive monthly calendar component.
*   **Props**:
    *   `initialDate` (Date): The month to show initially.
    *   `events` (Event[]): Array of objects `{ date: Date, url: string }`.
*   **Features**:
    *   SSR compatible initial render.
    *   Client-side vanilla JS for month navigation.
    *   Events rendered as clickable links.

## List Items

### `SimpleListItem.astro`
A basic text link or item for lists.
*   **Props**: `label`, `link`, `icon`.

### `KeyValueListItem.astro`
Displays a label and a value (e.g., "ECTS: 180").
*   **Props**: `label`, `value`, `icon`, `badgeClass`.

### `IconListItem.astro`
Displays content with a prominent leading icon. Used in DocumentWidget.
*   **Props**: `icon`, `value` (title), `label` (meta info), `link`.

### `ImageListItem.astro`
Displays content with an avatar or image. Used in ContactWidget.
*   **Props**: `image`, `value` (name), `label` (role), `subtext` (email).

## Structural Components

### `CardGroup.astro`
A wrapper for creating a responsive grid of cards.
*   **Props**: `cols` (number): Number of columns (1-4).

### `SectionHeader.astro`
A standard header for page sections.
*   **Props**: `title`, `level` (h2, h3).

### `PageHeader.astro`
Top-of-page banner/hero section.
*   **Props**: `title`, `subtitle`, `bgClass` (background utility class).

## Content Layout Components

### `Accordion.astro`
Wrapper for standard accordion functionality.
*   **Props**:
    *   `id` (string): Unique identifier.
    *   `class` (string): Extra classes.
*   **Sub-components**: `AccordionItem.astro` (title, parent ID, open state).

### `Tabs.astro`
Generates Bootstrap usage navigation tabs.
*   **Props**:
    *   `id` (string): Unique group ID.
    *   `tabs` (Array): Objects with `{ id, label, active? }`.
    *   `pills` (boolean): Style as pills instead of tabs.
*   **Sub-components**: `TabItem.astro` (wraps content panels).

#### Usage Example
```astro
<Tabs id="myTabs" tabs={[{ id: 'home', label: 'Home', active: true }, { id: 'profile', label: 'Profile' }]} />
<div class="tab-content mt-3">
  <TabItem id="home" active>Home Content</TabItem>
  <TabItem id="profile">Profile Content</TabItem>
</div>
```

## Tables

### `ez-table` (SCSS Class)
We typically use standard HTML `<table>` elements with the `.ez-table` class for styling. A specific Astro wrapper is not required but recommended structure is:

```html
<div class="ez-table-responsive">
  <table class="ez-table ez-table--hover">
    <thead>...</thead>
    <tbody>...</tbody>
  </table>
</div>
```

