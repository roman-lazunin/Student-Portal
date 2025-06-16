# Student Portal - Color System Documentation

## Color Palette

The Student Portal uses a clean, simple color system based on Bootstrap's default color palette. All gradients have been removed in favor of solid, accessible colors.

### Primary Colors

- **Primary Blue**: `#0d6efd` (Bootstrap primary)
- **Primary Dark**: `#0b5ed7` (hover states)
- **Primary Light**: `#6ea8fe` (accents)

### Secondary Colors

- **Secondary Gray**: `#6c757d` (Bootstrap secondary)
- **Secondary Dark**: `#5c636a` (hover states)
- **Secondary Light**: `#adb5bd` (muted text)

### Status Colors

- **Success Green**: `#198754` (Bootstrap success)
- **Info Cyan**: `#0dcaf0` (Bootstrap info)
- **Warning Yellow**: `#ffc107` (Bootstrap warning)
- **Danger Red**: `#dc3545` (Bootstrap danger)

### Neutral Colors

- **White**: `#ffffff`
- **Light Background**: `#f8f9fa` (page background)
- **Light Border**: `#dee2e6`
- **Dark Text**: `#212529`
- **Medium Gray**: `#6c757d`
- **Muted Text**: `#adb5bd`

## Usage Guidelines

1. **Consistency**: All colors are defined as CSS custom properties in `styles/colors.css`
2. **No Gradients**: All backgrounds, borders, and text use solid colors only
3. **Accessibility**: Color combinations meet WCAG contrast requirements
4. **Bootstrap Integration**: Colors align with Bootstrap's utility classes
5. **Material-UI Theme**: Consistent with the MUI theme configuration

## Files Updated

- `src/styles/colors.css` - Color variable definitions
- `src/styles/main.css` - Main stylesheet with clean styles
- `src/App.jsx` - Material-UI theme configuration
- `src/pages/Courses.css` - Standardized button colors
- `src/styles/pages/home.css` - Updated color references
- `src/styles/pages/news.css` - Updated color references
- `public/vite.svg` - Replaced gradient SVG with solid colors

## Benefits

- **Performance**: Faster rendering without gradient calculations
- **Maintenance**: Centralized color management
- **Consistency**: Unified color palette across all components
- **Accessibility**: Better contrast ratios and readability
- **Modern**: Clean, professional appearance
