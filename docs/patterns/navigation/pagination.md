# Pagination

A responsive, multi-page navigation component based on Bootstrap's pagination.

## Component

**`Pagination.astro`**
*   **Location**: `src/site/components/navigation/Pagination.astro`
*   **SCSS**: `src/scss/overrides/navigation/_pagination.scss`

## Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `currentPage` | `number` | The current active page index (1-based). |
| `totalPages` | `number` | Total number of pages available. |
| `baseUrl` | `string` | Base path for links. Links will be `baseUrl` + `/` + `page`. |

## Behavior

*   Automatically generates "Previous" and "Next" buttons.
*   Disables buttons at boundaries (page 1 or last page).
*   Implements an ellipsis logic to handle large numbers of pages, keeping the start, end, and current neighborhood visible.

## Usage

```astro
<Pagination 
  currentPage={1} 
  totalPages={10} 
  baseUrl="/examples/news" 
/>
```
