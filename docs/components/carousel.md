# Carousel & Hero

Components for rotating content, slides, and hero banners.

## General Carousel

A generic wrapper for Bootstrap carousels.

### `Carousel.astro`
The main container.

*   **Props**:
    *   `id` (string): Unique identifier for the carousel instance.
    *   `fade` (boolean, default: `false`): Enables crossfade transition instead of slide.
    *   `autoplay` (boolean, default: `true`): Auto-cycle slides.
    *   `interval` (number, default: `5000`): Time in ms between slides.
    *   `controls` (boolean, default: `true`): Show Previous/Next arrows.
    *   `indicators` (boolean, default: `true`): Show bottom dot indicators.

### `CarouselItem.astro`
Individual slide within a generic carousel.

*   **Props**:
    *   `active` (boolean): Set `true` for the starting slide.
    *   `image` (string): URL of the background image.
    *   `alt` (string): Alt text for the image.

**Usage:**

```astro
<Carousel id="myCarousel">
  <CarouselItem active={true} image="/img1.jpg" alt="Slide 1">
     <h3>Slide Title</h3>
     <p>Slide content...</p>
  </CarouselItem>
  <CarouselItem image="/img2.jpg" alt="Slide 2">
     ...
  </CarouselItem>
</Carousel>
```

## Hero Carousel

### `HeroCarousel.astro`
A **specialized implementation** optimized for the homepage "Hero" section.

**Differences from Generic Carousel:**
1.  **Composition**: It *uses* `Carousel.astro` internally as a wrapper but fills it with `Hero.astro` components as slides.
2.  **Specialized Styling**: Includes custom CSS overrides for indicators (positioning, size, shadow) to ensure visibility against complex backgrounds.
3.  **Content Structure**: Slides are pre-structured with `Hero` content (Title, Subtitle, CTA buttons) rather than accepting arbitrary children.

*   **Props**:
    *   `slides` (Array): List of slide objects.

**Slide Object Structure:**
```typescript
{
  image: string;      // Background image path
  title: string;      // Main headline
  subtitle: string;   // Subheadline
  link: string;       // URL for the primary button
  linkText: string;   // Label for the primary button
}
```

**Usage:**

```astro
<HeroCarousel slides={[
  {
    image: '/images/hero1.jpg',
    title: 'Welcome to ETF',
    subtitle: 'Excellence in Engineering',
    link: '/about',
    linkText: 'Learn More'
  }
]} />
```
