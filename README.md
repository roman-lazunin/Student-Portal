# Student Portal

A modern, responsive student portal application built with React, Vite, and Bootstrap 5. This application provides course registration functionality with a clean, mobile-first interface.

## Features

- **Responsive Design**: Built with Bootstrap 5 grid system and responsive utilities
- **Course Management**: Browse available courses and register/unregister
- **User Dashboard**: View registered courses and student information
- **News Section**: Stay updated with the latest announcements
- **Material-UI Integration**: Enhanced components with Material-UI icons and functionality
- **Mobile-First**: Optimized for all device sizes

## Technology Stack

- **Frontend**: React 19, Vite 6
- **UI Framework**: Bootstrap 5.3.6
- **Component Library**: Material-UI 7.1.1
- **Routing**: React Router DOM 7.6.2
- **State Management**: React Context API
- **Styling**: Custom CSS with Bootstrap integration

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd student-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── CourseRegistrationDialog.jsx
├── pages/              # Page components
│   ├── Home.jsx        # Dashboard/landing page
│   ├── Courses.jsx     # Course listing page
│   ├── CourseDetail.jsx # Individual course details
│   ├── MyRegistrations.jsx # User's registered courses
│   └── News.jsx        # News and announcements
├── context/            # React Context providers
│   └── CourseRegistrationContext.jsx
├── styles/             # CSS and styling
│   ├── colors.css      # Color system and CSS variables
│   ├── global.css      # Global utility classes
│   ├── main.css        # Main stylesheet
│   └── pages/          # Page-specific styles
└── utils/              # Utilities and constants
    └── constants.js    # Application constants and data
```

## Bootstrap Integration

This application uses Bootstrap 5 for responsive design and UI components:

### Grid System
- Responsive layouts using Bootstrap's 12-column grid
- Mobile-first approach with breakpoints at sm, md, lg, xl
- Flexible container classes (`container-fluid` with max-width constraints)

### Components Used
- **Cards**: For displaying courses, news items, and information panels
- **Navigation**: Responsive navbar with collapsible menu
- **Buttons**: Enhanced with hover effects and loading states
- **Alerts**: For user feedback and notifications
- **Badges**: For status indicators and counts

### Custom Enhancements
- Custom CSS variables for brand colors
- Enhanced hover effects and transitions
- Gradient backgrounds and text effects
- Responsive typography scaling
- Accessibility improvements

## Responsive Design

The application is fully responsive across all device sizes:

- **Mobile (< 576px)**: Single column layout, stacked navigation
- **Tablet (576px - 991px)**: Two-column grid where appropriate
- **Desktop (992px+)**: Multi-column layouts with enhanced spacing
- **Large Desktop (1200px+)**: Constrained max-width with centered content

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices/screen sizes
5. Submit a pull request

## License

This project is licensed under the MIT License.
