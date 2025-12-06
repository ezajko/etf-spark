# Style Architecture (SCSS)

# Style Architecture (SCSS)

The styling system is designed as an **extension of the Bootstrap 5 framework**. Rather than overriding Bootstrap defaults destructively, we build upon its utility classes and grid system, adding a layer of custom semantic components prefixed with `ez-`. This approach ensures compatibility with standard Bootstrap documentation while providing a unique brand identity.

## File Structure (`src/scss/`)

*   `_ez-custom.scss`: Main entry point. Imports all partials.
*   `base/`:
    *   `_variables.scss`: Global variables (Colors, Fonts, Spacing). Key configuration file.
    *   `_mixins.scss`: Helper mixins.
    *   `_bootstrap-overrides.scss`: Customizations to Bootstrap defaults.
*   `components/`:
    *   `_ez-card.scss`: Card styles (`.ez-card`, `.ez-card__header`, etc.).
    *   `_ez-button.scss`: Button variants (`.ez-btn`).
    *   `_ez-header.scss`: Site header and branding styles.
    *   `_ez-footer.scss`: Site footer styles.
    *   `_ez-navbar.scss`: Navigation menu styles.
*   `utilities/`:
    *   `_colors.scss`: Custom color utilities (if any).

## The `ez-` Convention

We use the `ez-` prefix to avoid conflicts with Bootstrap or other libraries and to explicitly denote custom components.

### Cards (`.ez-card`)
Replaces Bootstrap's `.card`.
*   `.ez-card`: Base container. Flex column layout.
*   `.ez-card__header`: Primary colored header.
*   `.ez-card__body`: Content area with padding.
*   `.ez-card__footer`: Footer area.

### Usage Example
```html
<div class="ez-card">
  <div class="ez-card__header">Title</div>
  <div class="ez-card__body">Content</div>
</div>
```

### Avatars (`.ez-avatar`)
Utility for round profile images/icons.
*   Sizes: `--sm`, `--md`, `--xl`.
