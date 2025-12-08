# Icons

We use **Bootstrap Icons** as our standard icon library.

## Usage

Icons can be used via the `<i>` tag with the appropriate class name.

```html
<i class="bi bi-alarm"></i>
<i class="bi bi-box-arrow-right"></i>
```

## Integration

The library is imported globally via CSS in `src/scss/_ez-custom.scss` (or via CDN in development).

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
