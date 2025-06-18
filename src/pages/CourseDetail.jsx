import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Chip,
  Alert,
  CircularProgress,
  Snackbar
} from '@mui/material';
import { 
  ArrowBack, 
  School, 
  Schedule, 
  Person, 
  CheckCircle,
  Cancel,
  PersonAdd
} from '@mui/icons-material';
import { useCourseRegistration } from '../context/CourseRegistrationContext';
import CourseRegistrationDialog from '../components/CourseRegistrationDialog';
import { COURSES } from '../utils/constants';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { unregisterCourse, isRegistered, loading, error, clearError, getRegisteredCourse } = useCourseRegistration();
  const [registrationDialogOpen, setRegistrationDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const course = COURSES.find((c) => String(c.id) === String(id));

  useEffect(() => {
    if (error) {
      setSnackbarOpen(true);
    }
  }, [error]);

  if (!course) {
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <Alert severity="error" className="mb-3">
              Kursen hittades inte.
            </Alert>
            <button 
              className="btn btn-outline-primary d-flex align-items-center"
              onClick={() => navigate('/courses')}
            >
              <ArrowBack className="me-2" />
              Tillbaka till kurser
            </button>
          </div>
        </div>
      </div>
    );
  }

  const registered = isRegistered(course.id);
  const registeredCourse = getRegisteredCourse(course.id);

  const handleRegisterClick = () => {
    setRegistrationDialogOpen(true);
  };

  const handleUnregister = () => {
    unregisterCourse(course.id);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    clearError();
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <button 
            className="btn btn-outline-primary d-flex align-items-center mb-4"
            onClick={() => navigate('/courses')}
          >
            <ArrowBack className="me-2" />
            Tillbaka till kurser
          </button>

          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3 flex-wrap">
                <School className="text-primary me-3" style={{ fontSize: '2.5rem' }} />
                <h1 className="display-5 fw-bold text-primary mb-0 me-3">
                  {course.title}
                </h1>
                {registered && (
                  <Chip
                    icon={<CheckCircle />}
                    label="Registrerad"
                    color="success"
                    className="mt-2 mt-md-0"
                  />
                )}
              </div>

              <p className="lead text-muted mb-4">
                {course.description}
              </p>

              <p className="mb-4">
                {course.fullDescription}
              </p>

              <div className="row g-4 mb-4">
                <div className="col-12 col-md-6">
                  <div className="bg-light p-4 rounded-3">
                    <h3 className="h5 mb-3">Kursinformation</h3>
                    <div className="d-flex align-items-center mb-2">
                      <Person className="text-muted me-2" />
                      <span><strong>Lärare:</strong> {course.instructor}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <Schedule className="text-muted me-2" />
                      <span><strong>Varaktighet:</strong> {course.duration}</span>
                    </div>
                    <div className="mb-2">
                      <strong>Poäng:</strong> {course.credits}
                    </div>
                    <div>
                      <strong>Schema:</strong> {course.schedule}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="bg-light p-4 rounded-3">
                    <h3 className="h5 mb-3">Förkunskaper</h3>
                    <p className="mb-0">
                      {course.prerequisites}
                    </p>
                  </div>
                </div>
              </div>

              {/* Show student info if registered */}
              {registered && registeredCourse?.studentInfo && (
                <div className="alert alert-success">
                  <h5 className="alert-heading">Din registrering</h5>
                  <p className="mb-1">
                    <strong>Namn:</strong> {registeredCourse.studentInfo.name}
                  </p>
                  <p className="mb-1">
                    <strong>E-post:</strong> {registeredCourse.studentInfo.email}
                  </p>
                  <p className="mb-0">
                    <strong>Registrerad:</strong> {new Date(registeredCourse.studentInfo.registrationDate).toLocaleDateString('sv-SE')}
                  </p>
                </div>
              )}

              <div className="d-flex gap-3 mt-4">
                {registered ? (
                  <button
                    className="btn btn-outline-danger d-flex align-items-center"
                    onClick={handleUnregister}
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={20} className="me-2" />
                    ) : (
                      <Cancel className="me-2" />
                    )}
                    Avregistrera dig
                  </button>
                ) : (
                  <button
                    className="btn btn-primary d-flex align-items-center"
                    onClick={handleRegisterClick}
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={20} className="me-2" />
                    ) : (
                      <PersonAdd className="me-2" />
                    )}
                    Registrera dig
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseRegistrationDialog
        open={registrationDialogOpen}
        onClose={() => setRegistrationDialogOpen(false)}
        courseId={course.id}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="error" 
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
