# ETF UNSA Web - Modern Tooling

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

Elektrotehnički fakultet Univerziteta u Sarajevu - Web stranica i dizajn sistem.

## 🚀 Technology Stack

- **Framework**: [Astro](https://astro.build/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: SCSS (Bootstrap Italia inspired)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Component Library**: [Storybook](https://storybook.js.org/)
- **Containerization**: Podman
- **Package Manager**: pnpm

## 📋 Prerequisites

- [Podman](https://podman.io/) installed
- OR Node.js 20+ and pnpm (for local development)

## 🐳 Development with Podman (Recommended)

```bash
# Build and start development containers
podman-compose up

# Access:
# - Astro dev server: http://localhost:4321
# - Storybook: http://localhost:6006
```

## 💻 Local Development (Without Podman)

```bash
# Install dependencies
pnpm install

# Start Astro dev server
pnpm run dev

# Start Storybook
pnpm run storybook

# Build for production
pnpm run build
```

## 📁 Project Structure

```
www-ng/
├── legacy/                 # Original static site (preserved)
├── src/
│   ├── components/        # Astro components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routes (file-based routing)
│   ├── scss/              # SCSS with ez- prefix components
│   │   ├── base/         # Variables, mixins
│   │   ├── components/   # Component styles  (_ez-button, _ez-card, etc.)
│   │   ├── layouts/      # Layout styles
│   │   └── utilities/    # Utility classes
│   └── scripts/           # JavaScript modules
├── public/                # Static assets (images, fonts)
├── .storybook/            # Storybook configuration
├── Containerfile          # Podman container definition
└── podman-compose.yml     # Development orchestration
```

## 🎨 Design System

Component prefix: `ez-` (e.g., `ez-btn`, `ez-card`)

Naming convention: BEM (Block Element Modifier)
- Block: `.ez-btn`
- Element: `.ez-btn__icon`
- Modifier: `.ez-btn--primary`

## 📚 Documentation

- Component documentation: Run Storybook (`pnpm run storybook`)
- Legacy site: Open `legacy/index.html` in browser

## 🧪 Code Quality

```bash
# Run linters
pnpm run lint

# Format code
pnpm run format
```

## 📝 License

GPL-2.0-or-later

Copyright (C) 2024 Elektrotehnički fakultet Univerziteta u Sarajevu

## 👤 Author

Ernedin Zajko <ezajko@root.ba>

## 🔧 Build Commands

```bash
# Development
pnpm run dev              # Start Astro dev server
pnpm run storybook        # Start Storybook

# Production
pnpm run build            # Build for production
pnpm run preview          # Preview production build
pnpm run build-storybook  # Build Storybook static site
```

## 🐋 Container Commands

```bash
# Development
podman-compose up         # Start all services
podman-compose down       # Stop all services

# Production build
podman build -t etf-unsa-web:latest .
podman run -p 80:80 etf-unsa-web:latest
```
