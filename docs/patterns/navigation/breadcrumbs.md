# Breadcrumbs

Indicates the current page's location within a navigational hierarchy.

### `Breadcrumbs.astro`

A wrapper around the standard Bootstrap breadcrumb component.

*   **Props**:
    *   `items` (Array): List of breadcrumb items.
        *   `label` (string): Text to display.
        *   `href` (string): URL.
        *   `active` (boolean, optional): If true, marks as current page and disables link.

**Usage:**

```astro
---
import Breadcrumbs from '../components/navigation/Breadcrumbs.astro';

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Department', href: '/department' },
  { label: 'Staff', href: '#', active: true }
];
---

<Breadcrumbs items={crumbs} />
```

**Output:**

Home / Department / **Staff**
