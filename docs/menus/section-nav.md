# Section Navigation (Quick Links)

The **Section Navigation** is a simplified vertical list of links, often appearing as "Brzi linkovi" (Quick Links) in a sidebar widget. It provides fast access to key pages within a department or topic.

## Component

**`SectionLinksMenu.astro`**
*   **Location**: `src/components/SectionLinksMenu.astro`
*   **SCSS**: `src/scss/components/navigation/_ez-nav-section.scss`
*   **Class**: `.ez-nav-section`

## Structure

It is typically wrapped in an `InfoWidget` but applies specific styling to list items:
*   **Hover Effect**: subtle slide-right animation.
*   **Active State**: Solid primary background color.

## Usage

```astro
<SectionLinksMenu 
  title="Brzi linkovi"
  links={[
    { label: "Osoblje", link: "/staff" },
    { label: "Predmeti", link: "/courses" }
  ]}
/>
```
