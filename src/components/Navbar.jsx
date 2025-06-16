import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@mui/material';
import { School, Home, Article, MenuBook, Assignment } from '@mui/icons-material';
import { useCourseRegistration } from '../context/CourseRegistrationContext';
import { APP_CONFIG } from '../utils/constants';

const Navbar = () => {
  const location = useLocation();
  const { registeredCourses } = useCourseRegistration();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Hem', icon: <Home /> },
    { path: '/courses', label: 'Kurser', icon: <MenuBook /> },
    { path: '/my-registrations', label: 'Mina Kurser', icon: <Assignment /> },
    { path: '/news', label: 'Nyheter', icon: <Article /> }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <School className="me-2" />
          {APP_CONFIG.name}
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link d-flex align-items-center ${isActive(item.path) ? 'active' : ''}`}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="me-2">
                    {(item.path === '/courses' || item.path === '/my-registrations') ? (
                      <Badge badgeContent={registeredCourses.length} color="secondary">
                        {item.icon}
                      </Badge>
                    ) : (
                      item.icon
                    )}
                  </span>
                  <span className="d-lg-none d-xl-inline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
