# Image Guidelines Documentation

Last Updated: April 28, 2025

## Purpose
This document provides comprehensive guidelines for managing project images, including organization, formatting, optimization, and implementation details.

## Image Organization

### Directory Structure
```
public/
└── images/
    ├── MRI/
    │   ├── model_performance.png
    │   ├── confusion_matrix.png
    │   └── architecture.png
    ├── FallAlert/
    │   ├── app_interface.png
    │   ├── sensor_data.png
    │   └── system_architecture.png
    └── [ProjectName]/
        ├── image1.png
        └── image2.png
```

## Image Requirements

### Technical Specifications
- **Dimensions**: 
  - Recommended: 800x600px (4:3 ratio)
  - Minimum: 600x450px
  - Maximum: 1600x1200px
- **File Size**: 
  - Optimal: Under 200KB
  - Maximum: 500KB
- **File Formats**:
  - PNG: For diagrams, charts, and screenshots
  - JPG: For photographs and complex images
  - WebP: For next-gen optimization (if supported)

### Image Types Per Project
Each project should include 3-4 key visualizations:
1. System Architecture/Flow Diagram
2. Performance Metrics/Results
3. UI Screenshots/Interfaces (if applicable)
4. Technical Diagrams/Methodology

## Implementation Guidelines

### Image Import Pattern
```javascript
const projectImages = [
  `${process.env.PUBLIC_URL}/images/ProjectName/image1.png`,
  `${process.env.PUBLIC_URL}/images/ProjectName/image2.png`,
  `${process.env.PUBLIC_URL}/images/ProjectName/image3.png`,
];
```

### Gallery Implementation
```jsx
<section className="mb-12 bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Visualizations</h2>
  <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4">
    {projectImages.map((img, index) => (
      <div 
        key={index}
        className="flex-shrink-0 w-[calc(33%-0.5rem)] min-w-[300px]"
        onClick={() => handleImageClick(img)}
      >
        <img
          src={img}
          alt={`Visualization ${index + 1}`}
          className="h-64 w-full object-cover rounded-lg cursor-pointer"
        />
      </div>
    ))}
  </div>
</section>
```

## Image Optimization Best Practices

### Before Adding Images
1. Resize to recommended dimensions
2. Compress using tools like:
   - TinyPNG
   - ImageOptim
   - Squoosh
3. Ensure correct aspect ratio
4. Verify file size limits

### Image Loading Optimization
- Implement lazy loading for galleries
- Use appropriate image dimensions
- Provide meaningful alt text
- Consider WebP format with fallbacks

## Accessibility Guidelines

### Alt Text Requirements
- Be descriptive and specific
- Include relevant data for charts
- Mention key features for diagrams
- Keep under 125 characters

### Modal View Considerations
- Keyboard navigation support
- Screen reader compatibility
- Clear close button
- Focus management

## When to Update Images

### Update Triggers
1. Project updates with new features
2. Performance improvements
3. UI/UX changes
4. Methodology changes
5. Better visualizations available

### Update Process
1. Prepare new images following guidelines
2. Optimize before adding to project
3. Update component image arrays
4. Test modal functionality
5. Verify responsive behavior

## When to Update This Document
- When changing image requirements
- When updating directory structure
- When modifying gallery implementation
- When adding new image types
- When implementing new optimization techniques

## Common Issues and Solutions

### Large File Sizes
- Use appropriate compression
- Choose correct format
- Resize to recommended dimensions
- Consider WebP conversion

### Display Issues
- Verify aspect ratios
- Check responsive behavior
- Test different screen sizes
- Validate modal display

### Loading Performance
- Implement lazy loading
- Optimize file sizes
- Use appropriate dimensions
- Consider caching strategies

This document should be referenced when:
- Adding new project images
- Updating existing visuals
- Implementing image galleries
- Optimizing website performance