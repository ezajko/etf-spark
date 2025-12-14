# Call To Action (CTA)

A prominent content block designed to drive users toward a specific primary action.

## Component

**`CallToAction.astro`**
*   **Location**: `src/site/components/common/CallToAction.astro`
*   **SCSS**: `src/scss/overrides/_cta.scss`

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | - | The main headline. |
| `description` | `string` | - | Supporting text. |
| `actionLabel` | `string` | - | Text for the button. |
| `actionUrl` | `string` | - | URL for the button. |
| `variant` | `'light' \| 'primary' \| 'dark'` | `'light'` | Color theme. |
| `centered` | `boolean` | `false` | Centers content and text. |
| `icon` | `string` | - | Optional icon class next to title. |

## Usage

```astro
<CallToAction
  title="Apply for Enrollment"
  description="Applications for the 2024/2025 academic year are now open."
  actionLabel="Start Application"
  actionUrl="/apply"
  variant="primary"
  icon="bi-pencil-square"
/>
```
