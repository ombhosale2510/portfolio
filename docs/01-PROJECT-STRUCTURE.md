# Project Structure Documentation

Last Updated: April 28, 2025

## Purpose
This document details the organization of the project's codebase, explaining the purpose of each directory and key files. Reference this when adding new features or components to maintain consistent organization.

## Directory Structure Explained

### `/src` Directory
Core application source code.

#### Components (`/src/components`)
- **ErrorBoundary.js**: Catches and handles React errors gracefully
- **projects/**: Individual project showcase components
  - Each project has its own file (e.g., `MRIClassification.js`)
  - All project components follow the same structure:
    1. Header section
    2. Project Overview
    3. Technical Implementation
    4. Project Impact
    5. Project Visualizations (horizontal scrollable gallery)
    6. Project Resources

#### Utils (`/src/components/projects/utils`)
Shared utility components for projects:
- **ImageGallery.jsx**: Reusable image gallery component
- **ImageModal.jsx**: Modal component for enlarged image view
- **useImageModal.js**: Custom hook for image modal functionality

### `/public` Directory
Static assets and public files.

#### Images (`/public/images`)
- Project-specific directories (e.g., `/MRI`, `/XAI`)
- Each project should have its own directory
- Recommended image types:
  - Architecture diagrams
  - Performance charts
  - UI screenshots
  - System visualizations

### Root Files
- **App.js**: Main application component, handles routing
- **ProjectDetails.js**: Dynamic project routing and rendering
- **projects.js**: Project metadata and descriptions
- **index.css**: Global styles and Tailwind imports

## File Naming Conventions
- Component files: PascalCase (e.g., `MRIClassification.js`)
- Utility files: camelCase (e.g., `useImageModal.js`)
- Image files: lowercase with underscores (e.g., `model_performance.png`)

## When to Update This Document
- When adding new directories
- When changing file organization
- When implementing new file naming conventions
- When adding new types of components
- When modifying the project structure

## Adding New Projects
1. Create component file in `/src/components/projects`
2. Create image directory in `/public/images`
3. Add project metadata to `projects.js`
4. Follow existing component structure for consistency

## Common Patterns
- All project components use the same layout structure
- Image galleries are placed before resource links
- Each project has its own dedicated image folder
- Unit tests accompany utility components

This document should be referenced when:
- Starting work on a new feature
- Adding a new project
- Reorganizing existing code
- Onboarding new developers