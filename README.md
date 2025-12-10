# ETF UNSA Web

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

Web stranica i dizajn sistem Elektrotehničkog fakulteta Univerziteta u Sarajevu.

## Tech Stack

- **Framework**: Astro
- **Build Tool**: Vite
- **Styling**: SCSS (Bootstrap Italia inspired)
- **Icons**: Bootstrap Icons
- **Containerization**: Podman
- **Package Manager**: npm

## Prerequisites

- Podman installed (for containerized development)
- OR Node.js 20+ and npm (for local development)

## Development (Podman)

Recommended for consistent environment.

```bash
# Start development environment
podman-compose up

# Access: http://localhost:4321
```

## Development (Local)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
www-ng/
├── legacy/                 # Preserved original static site
├── src/
│   ├── components/        # Astro components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routes (file-based)
│   ├── scss/              # Styles
│   │   ├── base/         # Variables, mixins
│   │   ├── components/   # Component styles (ez- prefix)
│   │   └── utilities/    # Utilities
│   └── scripts/           # JavaScript modules
├── public/                # Static assets (images, fonts)
├── Containerfile          # Container definition
└── podman-compose.yml     # Container orchestration
```

## Design System

- **Prefix**: `ez-` (e.g., `ez-btn`, `ez-card`)
- **Convention**: BEM (Block Element Modifier)

## Deployment

The project is deployed to **GitHub Pages**.

- **Workflow**: `.github/workflows/deploy.yml`
- **Base URL**: `/etf-spark/`
- **Branch**: `gh-pages`

### Handling Paths
To ensure links work correctly in the subdirectory deployment, use `import.meta.env.BASE_URL`:

```astro
const base = import.meta.env.BASE_URL;
<a href={base + "my-page"}>Link</a>
<img src={base + "images/logo.png"} />
```

## Code Quality

```bash
# Run linters
npm run lint

# Format code
npm run format
```

## License

GPL-2.0-or-later


## Author

Ernedin Zajko <ezajko@root.ba>
