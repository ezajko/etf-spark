# Icons

We use **Bootstrap Icons** as our standard icon library.

## 1. Bootstrap Icons (Standard)
The system currently uses **Bootstrap Icons**.
Since v1.0, icons are bundled locally within `site.css`.

Usage:
```html
<i class="bi bi-search"></i>
<i class="bi bi-arrow-right-circle-fill text-primary"></i>
```

## 2. Custom Icons (SVG Masking)
For custom logos or specific icons not in Bootstrap, we use a CSS Masking technique.
This allows the icon to take the color of its parent text (`currentColor`).

### Usage
```html
<span class="site-icon site-icon-logo"></span>
```

### Adding New Icons
1.  Place SVG in `src/assets/icons/`.
2.  Define class in `src/scss/base/_icons.scss` mapping to the file URL.
<i class="bi bi-box-arrow-right"></i>

## Integration

The library is imported globally via CSS in `src/scss/_site-custom.scss` (or via CDN in development).

## Components with Icon Support

Many of our components accept an `icon` prop which takes the class string directly.

*   `InfoWidget`
*   `SimpleListItem`
*   `SidebarWidget`

Example:
```astro
<InfoWidget title="Settings" icon="bi-gear">
  ...
</InfoWidget>
```

For a full list of icons, see the official [Bootstrap Icons](https://icons.getbootstrap.com/) gallery.
