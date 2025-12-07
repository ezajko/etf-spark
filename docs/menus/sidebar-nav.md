# Sidebar Tree Navigation

The **Sidebar Tree Navigation** is a vertical menu used for deep hierarchical traversal, typically found on the left side of section pages or the documentation itself.

## Component

**`SideMenu.astro`**
*   **Location**: `src/components/navigation/SideMenu.astro`
*   **SCSS**: `src/scss/components/navigation/_ez-nav-tree.scss`
*   **Class**: `.ez-nav-tree`

## Features

*   **Collapsible Sections**: Parent items can be expanded/collapsed.
*   **Active State**: Highlights the current page and keeps its parent section open.
*   **Indentation**: Visually indicates depth of hierarchy.

## Usage

Included in layouts specifically handling documentation or complex sub-sections (e.g., `SectionLeftSidebar.astro` when used for navigation).
