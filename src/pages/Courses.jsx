import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Chip,
  Snackbar,
  Alert
} from "@mui/material";
import { School, CheckCircle, PersonAdd } from "@mui/icons-material";
import { useCourseRegistration } from "../context/CourseRegistrationContext";
import CourseRegistrationDialog from "../components/CourseRegistrationDialog";
import { COURSES } from "../utils/constants";
import "./Courses.css";

export default function Courses() {
  const { unregisterCourse, isRegistered, loading, error, clearError } = useCourseRegistration();
  const [registrationDialogOpen, setRegistrationDialogOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setSnackbarOpen(true);
    }
  }, [error]);

  const handleRegisterClick = (courseId) => {
    setSelectedCourseId(courseId);
    setRegistrationDialogOpen(true);
  };

  const handleUnregister = (courseId) => {
    unregisterCourse(courseId);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    clearError();
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 fw-bold text-primary mb-4 d-flex align-items-center">
            <School className="me-3" style={{ fontSize: '3rem' }} />
            Tillgängliga Kurser
          </h1>
          
          <p className="lead text-muted mb-5">
            Utforska våra kurser och registrera dig för de som intresserar dig.
          </p>
        </div>
      </div>
      
      <div className="row g-4">            {COURSES.map((course) => {
          const registered = isRegistered(course.id);
          
          return (
            <div className="col-12 col-sm-6 col-lg-4" key={course.id}>
              <div className="card h-100 shadow-sm border-0 position-relative course-card">
                {registered && (
                  <div className="position-absolute top-0 end-0 p-2" style={{ zIndex: 1 }}>
                    <Chip
                      icon={<CheckCircle />}
                      label="Registrerad"
                      color="success"
                      size="small"
                    />
                  </div>
                )}
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary mb-3">
                    {course.name}
                  </h5>
                  <p className="card-text text-muted flex-grow-1">
                    {course.description}
                  </p>
                </div>
                
                <div className="card-footer bg-transparent border-0 pt-0">
                  <div className="d-flex gap-2">
                    <Link
                      to={`/courses/${course.id}`}
                      className="btn btn-outline-primary btn-sm flex-fill"
                    >
                      Detaljer
                    </Link>
                    
                    {registered ? (
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleUnregister(course.id)}
                        disabled={loading}
                      >
                        Avregistrera
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary btn-sm d-flex align-items-center"
                        onClick={() => handleRegisterClick(course.id)}
                        disabled={loading}
                      >
                        <PersonAdd className="me-1" fontSize="small" />
                        Registrera
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CourseRegistrationDialog
        open={registrationDialogOpen}
        onClose={() => setRegistrationDialogOpen(false)}
        preselectedCourseId={selectedCourseId}
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
