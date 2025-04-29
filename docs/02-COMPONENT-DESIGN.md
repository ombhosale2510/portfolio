# Component Design Documentation

Last Updated: April 28, 2025

## Purpose
This document outlines the design patterns, component structure, and best practices for maintaining consistency across all project components.

## Project Component Template
Each project component follows this standard structure:

```jsx
// Imports
import React from "react";
import { useImageModal } from './utils/useImageModal';
import ImageModal from './utils/ImageModal';

// Image paths
const projectImages = [
  `${process.env.PUBLIC_URL}/images/ProjectName/image1.png`,
  // Add more images...
];

const ProjectComponent = () => {
  // Image modal hook
  const { selectedImage, isModalOpen, handleImageClick, closeModal } = useImageModal();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* 1. Header Section */}
      <header className="text-center mb-12">...</header>

      {/* 2. Project Overview */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">...</section>

      {/* 3. Technical Implementation */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">...</section>

      {/* 4. Project Impact */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">...</section>

      {/* 5. Project Visualizations */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Visualizations</h2>
        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4">...</div>
      </section>

      {/* 6. Project Resources */}
      <section className="mb-12">...</section>

      {/* Image Modal */}
      <ImageModal {...modalProps} />
    </div>
  );
};
```

## Section Guidelines

### 1. Header Section
- Project title in large, bold text
- Subtitle with project type and role
- Consistent spacing (mb-12)
- Blue accent color for title

### 2. Project Overview
- Brief project description
- Key achievements in grid layout
- Technical stack with tag-style display
- Consistent use of padding and margins

### 3. Technical Implementation
- Two-column grid layout
- Left column for features/architecture
- Right column for metrics/performance
- Consistent use of lists and spacing

### 4. Project Impact
- Key contributions
- Future directions
- Consistent grid layout
- Bullet points for easy reading

### 5. Project Visualizations
- Horizontal scrollable gallery
- Three images visible at once
- Click to enlarge functionality
- Consistent image dimensions

### 6. Project Resources
- GitHub repository link
- Project documentation link
- Consistent button styling
- Icon integration

## Styling Conventions
- Use Tailwind utility classes
- Maintain consistent spacing:
  - Section margins: mb-12
  - Inner padding: p-6
  - Grid gaps: gap-6
- Color scheme:
  - Headers: text-blue-600
  - Background: bg-gray-100
  - Cards: bg-white
  - Tags: bg-blue-100

## When to Update This Document
- When changing component structure
- When updating styling conventions
- When adding new section types
- When modifying shared components
- When implementing new design patterns

## Common Component Features
- Error boundary wrapped
- Responsive design patterns
- Consistent image handling
- Standardized section structure

## Testing Guidelines
- Test image modal functionality
- Verify responsive behavior
- Check accessibility features
- Validate link behavior

This document should be referenced when:
- Creating new project components
- Updating existing components
- Implementing design changes
- Ensuring consistency across projects