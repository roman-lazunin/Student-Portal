# CSS Architecture Documentation

## Overview
The CSS has been cleaned up and reorganized to eliminate duplicates, improve maintainability, and create a consistent design system.

## File Structure

### Core Files

#### `/src/styles/colors.css`
- **Purpose**: Centralized color definitions and CSS custom properties
- **Contains**: All color variables, Bootstrap compatibility variables
- **Usage**: Import this first to ensure all color variables are available

#### `/src/styles/global.css`
- **Purpose**: Global utility classes and Bootstrap overrides
- **Contains**: Utility classes, button/alert/card overrides, navigation styles
- **Dependencies**: Requires colors.css

#### `/src/styles/main.css`
- **Purpose**: Main stylesheet with base styles and components
- **Contains**: Base styles, typography, layout components, utilities, animations
- **Dependencies**: Requires colors.css

#### `/src/styles/bootstrap-custom.css`
- **Purpose**: Bootstrap-specific customizations and enhancements
- **Contains**: Bootstrap component overrides, hover effects, responsive utilities
- **Dependencies**: Requires colors.css

### Component Files

#### `/src/styles/components/common.css`
- **Purpose**: Common component-specific styles
- **Contains**: Button hover effects, card enhancements, loading states
- **Cleaned**: Removed duplicates, kept only unique component styles

### Page-Specific Files

#### `/src/pages/Courses.css`
- **Purpose**: Course page specific styles
- **Contains**: Course card styles, filters, grid layouts
- **Updated**: Now uses CSS variables instead of hardcoded colors

#### `/src/styles/pages/home.css`
- **Purpose**: Home page specific styles
- **Contains**: Hero section, hover cards, animations
- **Updated**: Uses CSS variables, improved organization

#### `/src/styles/pages/news.css`
- **Purpose**: News page specific styles
- **Contains**: News card styles, badges, responsive layouts
- **Updated**: Uses CSS variables, removed duplicates

### Layout Files

#### `/src/responsive.css`
- **Purpose**: Responsive design utilities
- **Contains**: Breakpoint-specific styles, grid helpers, print styles
- **Cleaned**: Removed duplicates, fixed syntax errors

#### `/src/index.css`
- **Purpose**: Global base styles
- **Contains**: Basic reset, typography, root styles
- **Simplified**: Removed color duplicates, relies on colors.css

#### `/src/App.css`
- **Purpose**: App-level styles
- **Contains**: Root container styles
- **Simplified**: Minimal styles, uses CSS variables

## Removed Files
- `/src/styles/index.css` (empty file)
- `/src/styles/pages/courses.css` (empty file)

## Key Improvements

### 1. Eliminated Duplicates
- **Color definitions**: All colors now centralized in colors.css
- **Button styles**: Consolidated into global.css and main.css
- **Card styles**: Unified across all files
- **Utility classes**: Removed duplicates across files
- **Responsive breakpoints**: Consolidated in responsive.css

### 2. CSS Variables Implementation
- All hardcoded colors replaced with CSS custom properties
- Consistent naming convention: `--color-{name}-{variant}`
- Bootstrap compatibility variables included
- Easy theme switching capability

### 3. Improved Organization
- Clear separation of concerns
- Logical file structure
- Consistent commenting
- Better maintainability

### 4. Performance Optimizations
- Reduced CSS file sizes
- Eliminated redundant styles
- Faster loading times
- Better browser caching

## CSS Variables Reference

### Primary Colors
```css
--color-primary: #0d6efd
--color-primary-dark: #0b5ed7
--color-primary-light: #6ea8fe
--color-primary-rgb: 13, 110, 253
```

### Background Colors
```css
--color-bg-default: #f8f9fa
--color-bg-paper: #ffffff
--color-bg-muted: #e9ecef
```

### Text Colors
```css
--color-text-primary: #1a1a1a
--color-text-secondary: #4a4a4a
--color-text-muted: #6c757d
--color-text-inverse: #ffffff
```

### Border Colors
```css
--color-border-light: #dee2e6
--color-border-default: #ced4da
--color-border-dark: #adb5bd
```

## Best Practices

### 1. Use CSS Variables
```css
/* Good */
color: var(--color-text-primary);
background-color: var(--color-bg-paper);

/* Avoid */
color: #1a1a1a;
background-color: #ffffff;
```

### 2. Follow File Organization
- Colors and variables → `colors.css`
- Global utilities → `global.css`
- Component styles → `components/`
- Page styles → `pages/`
- Responsive → `responsive.css`

### 3. Maintain Consistency
- Use established color variables
- Follow existing naming conventions
- Keep responsive breakpoints consistent
- Maintain animation and transition standards

## Migration Notes
- All existing components should continue to work
- Color references updated to use CSS variables
- Removed files may need import statement updates
- Improved performance and maintainability

## Future Considerations
- Consider CSS-in-JS migration for dynamic theming
- Implement dark mode using CSS variables
- Add CSS Grid utilities for advanced layouts
- Consider PostCSS for additional optimizations
