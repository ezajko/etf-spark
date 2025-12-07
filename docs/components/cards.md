# Card Components

Cards are the primary container for main content, providing a flexible and extensible content container with multiple variants and options.

## Components

### `ContentCard.astro`
The main multipurpose card component used for displaying news, events, projects, and general content items.

*   **Props**:
    *   `title` (string, required): Card title.
    *   `href` (string, required): Link destination.
    *   `image` (string): Image URL.
    *   `excerpt` (string): Short summary text.
    *   `layout` ('horizontal' | 'vertical'): Layout orientation.
    *   `imagePosition` ('left' | 'right'): Image side in horizontal layout.
    *   `isEvent` (boolean): Enables date overlay styling.
    *   `category` (string): Category label.
    *   `status` (string): Status label (e.g., "In Progress").

### `ProfileCard.astro`
Specialized card for staff profiles, contacts, or team members.
*   **Props**: `name`, `title`, `image`, `email`, `phone`, `room`.

### `ProgramCard.astro`
Card designed for listing study programs.
*   **Props**: `title`, `degree`, `cycle`, `duration`.

### `CardGroup.astro`
A wrapper for creating a responsive grid of cards.
*   **Props**: `cols` (number): Number of columns (1-4).
