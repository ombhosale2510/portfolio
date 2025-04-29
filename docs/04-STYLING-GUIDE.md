# Styling Guidelines Documentation

Last Updated: April 28, 2025

## Purpose
This document outlines the styling conventions, color schemes, and Tailwind CSS usage patterns across the portfolio website. It ensures visual consistency and maintainable styling code.

## Color Palette

### Primary Colors
```css
/* Main Theme Colors */
- Primary Blue: text-blue-600 (#2563EB)
- Background Gray: bg-gray-100 (#F3F4F6)
- White: bg-white (#FFFFFF)
- Text Gray: text-gray-700 (#374151)
```

### Accent Colors
```css
/* Tag and Button Colors */
- Tag Background: bg-blue-100 (#DBEAFE)
- Tag Text: text-blue-800 (#1E40AF)
- Success Green: bg-green-600 (#059669)
- Success Hover: hover:bg-green-700 (#047857)
```

## Typography

### Headings
```css
/* Page Title */
text-4xl font-bold text-blue-600

/* Section Headers */
text-2xl font-semibold text-gray-800

/* Subsection Headers */
text-xl font-semibold text-gray-800
```

### Body Text
```css
/* Main Content */
text-gray-700

/* Subtitles */
text-gray-600
```

## Layout Components

### Section Cards
```css
/* Standard Section */
.mb-12 bg-white p-6 rounded-lg shadow-md

/* Grid Layouts */
.grid md:grid-cols-2 gap-6
```

### Image Gallery
```css
/* Gallery Container */
.flex flex-nowrap gap-4 overflow-x-auto pb-4

/* Image Container */
.flex-shrink-0 w-[calc(33%-0.5rem)] min-w-[300px]

/* Images */
.h-64 w-full object-cover rounded-lg
```

## Interactive Elements

### Buttons
```css
/* Primary Button */
.bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700

/* Secondary Button */
.bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700
```

### Tags
```css
/* Technology Tags */
.bg-blue-100 text-blue-800 px-3 py-1 rounded-full
```

## Spacing Conventions

### Vertical Spacing
- Page Sections: mb-12
- Headers to Content: mb-4 or mb-6
- List Items: space-y-2
- Grid Gaps: gap-6

### Padding
- Section Cards: p-6
- Buttons: px-6 py-3
- Tags: px-3 py-1

## Responsive Design

### Breakpoints
```css
/* Tailwind Default Breakpoints */
sm: 640px   /* @media (min-width: 640px) */
md: 768px   /* @media (min-width: 768px) */
lg: 1024px  /* @media (min-width: 1024px) */
xl: 1280px  /* @media (min-width: 1280px) */
```

### Common Responsive Patterns
```css
/* Grid Columns */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

/* Button Groups */
flex-col sm:flex-row

/* Image Sizing */
min-w-[300px] md:min-w-[250px]
```

## Animation and Transitions

### Hover Effects
```css
/* Button Hover */
transition-colors hover:bg-blue-700

/* Image Hover */
transition-opacity hover:opacity-90
```

### Modal Transitions
```css
/* Modal Backdrop */
bg-black bg-opacity-75

/* Modal Content */
transition-transform duration-300
```

## Best Practices

### Class Organization
1. Layout Properties (display, position)
2. Spacing (margin, padding)
3. Dimensions (width, height)
4. Visual Properties (colors, shadows)
5. Interactive States (hover, focus)

### Maintainability
- Use consistent class ordering
- Group related classes
- Avoid custom CSS when possible
- Leverage Tailwind's utility classes

## When to Update This Document
- When adding new color schemes
- When changing spacing conventions
- When updating responsive breakpoints
- When modifying animation patterns
- When implementing new components

## Common Style Patterns

### Cards and Sections
```css
/* Standard Card */
bg-white p-6 rounded-lg shadow-md

/* Section Spacing */
mb-12
```

### Lists and Grids
```css
/* List Spacing */
space-y-2 list-disc pl-6

/* Grid Layout */
grid md:grid-cols-2 gap-6
```

This document should be referenced when:
- Styling new components
- Updating existing styles
- Maintaining consistency
- Implementing responsive design