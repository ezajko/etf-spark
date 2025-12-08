# Colors

We define a comprehensive color system in `src/scss/base/_variables.scss`. The system is built around a primary blue tonal scale and a multi-brand palette for section differentiation.

## 1. Primary Tonal Scale (Blue)
Base: `#00629B` (Brand Blue)

| Level | Color | Purpose |
| :--- | :--- | :--- |
| **100** | `#E3F2FD` | Backgrounds, very light tints |
| **200** | `#BBDEFB` | Secondary surfaces, hover states |
| **300** | `#64B5F6` | Borders, dividers |
| **400** | `#1E88E5` | Accents, active states |
| **500** | `#00629B` | **Primary Brand Color** |
| **600** | `#003B5C` | High contrast text |

## 2. Multi-Brand / Section Palette
Used for branding different sections or themes.

| Theme | Color | Code | Usage |
| :--- | :--- | :--- | :--- |
| **Blue** | ![#00629B](https://via.placeholder.com/15/00629B/000000?text=+) Blue | `#00629B` | Official / Institutional (Default) |
| **Teal** | ![#00897B](https://via.placeholder.com/15/00897B/000000?text=+) Teal | `#00897B` | Research / Academy |
| **Green** | ![#2E7D32](https://via.placeholder.com/15/2E7D32/000000?text=+) Green | `#2E7D32` | Student Life / Sustainability |
| **Purple** | ![#8E24AA](https://via.placeholder.com/15/8E24AA/000000?text=+) Purple | `#8E24AA` | Innovation / Technology |
| **Orange** | ![#F57F17](https://via.placeholder.com/15/F57F17/000000?text=+) Orange| `#F57F17` | Events / Highlights |
| **Red** | ![#D32F2F](https://via.placeholder.com/15/D32F2F/000000?text=+) Red | `#D32F2F` | Alerts / Urgent |

## Semantic Colors
Mapped to the active theme or specific utility.

*   **Primary**: Dynamic (follows active Theme)
*   **Secondary**: `#63666A` (Dark Grey)
*   **Success**: `#2E7D32` (Green Theme)
*   **Warning**: `#F57F17` (Orange Theme)
*   **Danger**: `#D32F2F` (Red Theme)
*   **Info**: `#00897B` (Teal Theme)

## Dark Mode
The system supports dark mode (`data-bs-theme="dark"`).
*   Backgrounds invert to dark greys (`#212529`).
*   Text becomes light (`#f8f9fa`).
*   Theme colors remain vibrant but legible.
