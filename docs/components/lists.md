# List & Item Components

Reusable list items designed for specific content types. They are primarily used inside `InfoWidget` or `SectionLinksMenu`.

## Components

### `SimpleListItem.astro`
A basic text link or item for lists.
*   **Props**:
    *   `label` (string): The text to display.
    *   `link` (string): URL.
    *   `icon` (string): Optional leading icon.
    *   `active` (boolean): Highlights the item (used in Section Navigation).

### `KeyValueListItem.astro`
Displays a label and a value, useful for metadata panels (e.g., "ECTS: 180").
*   **Props**:
    *   `label` (string): The key.
    *   `value` (string): The value.
    *   `icon` (string): Icon next to the key.
    *   `badgeClass` (string): CSS class for the value if it should be a badge.

### `IconListItem.astro`
List item with a prominent large icon on the left. Used heavily in `DocumentWidget`.
*   **Props**:
    *   `icon` (string): Bootstrap icon class.
    *   `value` (string): Main title text.
    *   `label` (string): Subtext/Description.
    *   `link` (string): URL.

### `ImageListItem.astro`
List item with an avatar or image on the left. Used in `ContactWidget`.
*   **Props**:
    *   `image` (string): Image URL.
    *   `value` (string): Main name/title.
    *   `label` (string): Role/Subtitle.
    *   `subtext` (string): Additional info (e.g., email).
