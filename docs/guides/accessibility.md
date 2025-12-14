# Accessibility (a11y) Guidelines

## Introduction

This document contains guidelines for implementing accessibility in the ETF Spark design system. The goal is to ensure all components and layouts are accessible to all users, including those who use assistive technologies such as screen readers.

## Semantic HTML Structure

### Basic Page Structure

```html
<header role="banner">
  <h1>Site Title</h1>
  <nav role="navigation" aria-label="Main navigation">
    <!-- Navigation -->
  </nav>
</header>

<main role="main">
  <div class="container">
    <!-- Main content -->
  </div>
</main>

<footer role="contentinfo">
  <!-- Copyright and author information -->
</footer>
```

### Using `<article>` and `<aside>`

- `<article>`: For standalone content that makes sense when separated (e.g., news, blog posts, comments)
- `<aside>`: For additional content related to the main content but can stand alone (e.g., sidebars, notes, additional information)

#### Using `<aside>` within `<article>`

It is allowed to use `<aside>` within `<article>` if the content is only related to that specific article:

```html
<article>
  <header>
    <h1>Article Title</h1>
  </header>
  <p>Main content...</p>
  
  <aside aria-labelledby="aside-title">
    <h2 id="aside-title">Additional Information</h2>
    <!-- Card with additional info relevant only to this article -->
    <div class="card">
      <div class="card-body">
        <!-- Additional info -->
      </div>
    </div>
  </aside>
  
  <p>Article continuation...</p>
</article>
```

### Sidebar Navigation

For hierarchical navigation in sidebars use appropriate ARIA roles and structure:

```html
<aside role="complementary" aria-label="Sidebar navigation">
  <nav aria-label="Hierarchical navigation">
    <ul class="nav-tree" role="tree" aria-orientation="vertical">
      <li role="treeitem" aria-level="1" aria-expanded="false">
        <a href="/link" aria-expanded="false" aria-controls="submenu-1">
          Main Category
        </a>
        <ul id="submenu-1" role="group">
          <li role="treeitem" aria-level="2">
            <a href="/link/subcategory">Subcategory</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>
```

## Heading Hierarchy

Maintain logical heading hierarchy:

- `<h1>`: Document title (one per page)
- `<h2>`: Main sections
- `<h3>`: Subsections
- etc.

Don't skip levels (e.g., directly from `<h2>` to `<h4>`).

## ARIA Attributes

### Basic ARIA Attributes

- `aria-label`: When the label is not visible
- `aria-labelledby`: When using an existing element as the label
- `aria-describedby`: For additional descriptions
- `role="region"`: For marking semantically significant regions
- `aria-hidden="true"`: For hiding decorative elements from screen readers

### ARIA for Interactive Elements

- `aria-expanded`, `aria-controls`: For expandable/collapsible elements
- `aria-current`: For marking the current page in navigation
- `aria-live`: For dynamically changing content

## Focus Management

### Focus Styles

Ensure clear and visible focus indicators:

```scss
// In CSS/SCSS
*:focus {
  outline: 2px solid var(--site-theme-primary);
  outline-offset: 2px;
}
```

### Focus Management

- When a modal opens, focus moves to the first focusable element
- When a modal closes, focus returns to the element that initiated the opening
- Limit focus movement to within the modal (trap focus)

## Keyboard Navigation

- All interactive elements must be accessible via keyboard
- Logical navigation order (Tab order)
- Ensure no "keyboard traps"

## Contrast and Color

### Minimum Contrast Requirements

- Text and background: 4.5:1 (AA) or 7:1 (AAA) for normal fonts
- Large text (18pt+): 3:1 (AA) or 4.5:1 (AAA)

### Don't Use Color as the Only Means of Communication

- Additional indicators (e.g., text or icons) alongside color
- Information should be clear without color

## Forms

### Label for Each Input

```html
<label for="name">First and Last Name</label>
<input type="text" id="name" name="name" required>
```

### Error Messages

- Clear and descriptive error messages
- Linking error messages to input fields
- Auto focus to first error on submit

## Images

### Alt Text

- Descriptive `alt` text for informative images
- Empty `alt=""` for decorative images
- Long description in `longdesc` or `aria-describedby` if needed

## Tables

### Table Structure

```html
<table>
  <thead>
    <tr>
      <th scope="col">Column Title</th>
      <th scope="col">Column Title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

## Testing

### Automated Testing

- Use tools like axe-core, Lighthouse
- Integrate into CI/CD pipeline
- Regular testing with WAVE tool

### Manual Testing

- Test with NVDA/JAWS screen readers
- Test keyboard-only navigation
- Verify focus order and structure clarity

## Component Documentation

When documenting components, include:

- How the component appears with assistive technologies
- What ARIA attributes are used
- How to use with keyboard
- Examples of good and bad practices