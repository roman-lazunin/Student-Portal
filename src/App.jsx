import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CourseRegistrationProvider } from './context/CourseRegistrationContext';
import Home from './pages/Home';
import Courses from './pages/Courses';
import News from './pages/News';
import MyRegistrations from './pages/MyRegistrations';
import Navbar from './components/Navbar';
import CourseDetail from './pages/CourseDetail';

// Import styles in correct order
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/colors.css';
import './styles/global.css';
import './styles/main.css';

// Create Material UI theme with consistent colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#0d6efd',
      dark: '#0b5ed7',
      light: '#6ea8fe',
    },
    secondary: {
      main: '#6c757d',
      dark: '#5c636a', 
      light: '#adb5bd',
    },
    success: {
      main: '#198754',
      dark: '#146c43',
      light: '#75b798',
    },
    error: {
      main: '#dc3545',
      dark: '#b02a37',
      light: '#e86674',
    },
    warning: {
      main: '#ffc107',
      dark: '#cc9a06',
      light: '#ffcd39',
    },
    info: {
      main: '#0dcaf0',
      dark: '#087990',
      light: '#6edff6',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    // Remove any gradient overrides
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '0.5rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem',
          boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CourseRegistrationProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-fill">
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetail />} />
                  <Route path="/my-registrations" element={<MyRegistrations />} />
                  <Route path="/news" element={<News />} />
                </Routes>
              </div>
            </main>
          </div>
        </Router>
      </CourseRegistrationProvider>
    </ThemeProvider>
  )
}

export default App
