import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  Chip
} from '@mui/material';
import {
  School,
  CheckCircle,
  Cancel,
  ArrowForward,
  Person,
  Schedule
} from '@mui/icons-material';
import { useCourseRegistration } from '../context/CourseRegistrationContext';

// Extended course data that matches CourseDetail
const courseDetails = {
  1: {
    instructor: 'Dr. Anna Karlsson',
    duration: '16 veckor',
    credits: '15 hp',
    schedule: 'Måndag och onsdag 9:00-12:00'
  },
  2: {
    instructor: 'Prof. Erik Johansson',
    duration: '20 veckor',
    credits: '22.5 hp',
    schedule: 'Tisdag och torsdag 13:00-17:00'
  },
  3: {
    instructor: 'Dr. Maria Lindström',
    duration: '18 veckor',
    credits: '15 hp',
    schedule: 'Fredag 9:00-15:00'
  }
};

export default function MyRegistrations() {
  const { registeredCourses, unregisterCourse, loading } = useCourseRegistration();

  const handleUnregister = (courseId) => {
    unregisterCourse(courseId);
  };

  if (registeredCourses.length === 0) {
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <h1 className="display-5 fw-bold text-primary mb-4 d-flex align-items-center">
              <School className="me-3" style={{ fontSize: '3rem' }} />
              Mina Kursregistreringar
            </h1>
            
            <Alert severity="info" className="mb-4">
              Du har inte registrerat dig för några kurser ännu.
            </Alert>
            
            <Link
              to="/courses"
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
            >
              <School className="me-2" />
              Utforska Kurser
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalCredits = registeredCourses.reduce((sum, course) => {
    const details = courseDetails[course.id];
    return sum + (details ? parseFloat(details.credits) : 0);
  }, 0);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 fw-bold text-primary mb-4 d-flex align-items-center">
            <School className="me-3" style={{ fontSize: '3rem' }} />
            Mina Kursregistreringar
          </h1>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="bg-primary text-white rounded-3 p-4">
            <div className="row text-center">
              <div className="col-6 col-md-3">
                <h3 className="display-6 fw-bold mb-1">{registeredCourses.length}</h3>
                <p className="mb-0 opacity-75">Totalt antal kurser</p>
              </div>
              <div className="col-6 col-md-3">
                <h3 className="display-6 fw-bold mb-1">{totalCredits}</h3>
                <p className="mb-0 opacity-75">Högskolepoäng</p>
              </div>
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <h3 className="display-6 fw-bold mb-1">Aktiv</h3>
                <p className="mb-0 opacity-75">Status</p>
              </div>
              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <h3 className="display-6 fw-bold mb-1">2025</h3>
                <p className="mb-0 opacity-75">Studieår</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registered Courses */}
      <div className="row">
        <div className="col-12">
          <h2 className="h4 mb-4">Registrerade Kurser</h2>
          <div className="row g-4">
            {registeredCourses.map((course) => {
              const details = courseDetails[course.id];
              
              return (
                <div className="col-12 col-lg-6" key={course.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="card-title text-primary mb-1">
                            {course.name || course.title}
                          </h5>
                          <Chip
                            icon={<CheckCircle />}
                            label="Registrerad"
                            color="success"
                            size="small"
                          />
                        </div>
                      </div>

                      <p className="card-text text-muted mb-3">
                        {course.description}
                      </p>

                      {details && (
                        <div className="small text-muted mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <Person className="me-2" style={{ fontSize: '1rem' }} />
                            <span>{details.instructor}</span>
                          </div>
                          <div className="d-flex align-items-center mb-1">
                            <Schedule className="me-2" style={{ fontSize: '1rem' }} />
                            <span>{details.schedule}</span>
                          </div>
                          <div className="fw-semibold">
                            {details.credits} • {details.duration}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="card-footer bg-transparent border-0">
                      <div className="d-flex gap-2">
                        <Link
                          to={`/courses/${course.id}`}
                          className="btn btn-outline-primary btn-sm flex-fill"
                        >
                          <ArrowForward className="me-1" style={{ fontSize: '1rem' }} />
                          Visa detaljer
                        </Link>
                        
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleUnregister(course.id)}
                          disabled={loading}
                        >
                          <Cancel className="me-1" style={{ fontSize: '1rem' }} />
                          Avregistrera
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
