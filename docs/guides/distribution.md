# Asset Distribution Guide

This project includes a standalone build configuration to generate a distributable asset bundle for use in generic HTML/PHP/CMS projects, independent of the Astro framework.

## 1. Generating the Bundle

Run the following command to build the library:

```bash
npm run build:lib
```

This will create a `dist-lib/` directory containing:
*   `css/site.css`: All compiled styles (Bootstrap + Themes + Fonts + Icons).
*   `js/main.js`: Bootstrap JS bundle.
*   `assets/`: Font files and other referenced assets.

## 2. Usage in Generic Projects

Copy the `dist-lib` folder to your project (e.g., rename to `assets`).

### HTML Structure

```html
<!DOCTYPE html>
<html lang="bs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ETF UNSA Page</title>

    <!-- Import Main Stylesheet -->
    <link rel="stylesheet" href="assets/css/site.css">
</head>
<body data-site-theme="blue">

    <!-- Content -->
    <div class="site-header">...</div>
    
    <main class="container py-5">
        <h1>Hello World</h1>
        <button class="btn btn-primary">Primary Button</button>
        <i class="bi bi-heart-fill text-danger"></i>
    </main>

    <!-- Import Main Script -->
    <script type="module" src="assets/js/main.js"></script>
</body>
</html>
```

## 3. Fonts and Icons

*   **Fonts**: IBM Plex fonts are embedded/linked within `site.css`. Copy the `assets/` folder alongside `css/` to ensure font files are found.
*   **Icons**: Bootstrap Icons are included in `site.css`. Use standard `<i class="bi bi-name"></i>` syntax.
