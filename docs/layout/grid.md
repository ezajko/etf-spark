# Grid System

We utilize the standard **Bootstrap 5 Grid System** for all layout requirements. This provides a responsive, mobile-first 12-column system.

## Basic Usage

The grid is built with flexbox and is fully responsive.

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```

## Containers

*   `.container`: Sets a max-width at each responsive breakpoint.
*   `.container-fluid`: Width: 100% at all breakpoints.

## Key Concepts

*   **Rows** are wrappers for columns.
*   **Columns** (`.col-*`) indicate the number of columns (out of 12) you want to span.
*   **Gutters** are the gaps between column content, created by horizontal padding.

For full documentation, refer to the [Bootstrap Grid Documentation](https://getbootstrap.com/docs/5.3/layout/grid/).
