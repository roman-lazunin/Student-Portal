import React from "react";
import { Link } from "react-router-dom";
import {
  Chip
} from "@mui/material";
import { 
  School, 
  Article, 
  MenuBook, 
  CheckCircle,
  ArrowForward
} from "@mui/icons-material";
import { useCourseRegistration } from "../context/CourseRegistrationContext";
import { COURSES } from "../utils/constants";
import "../styles/pages/home.css";

export default function Home() {
  const { registeredCourses } = useCourseRegistration();

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold text-primary mb-3">
              Välkommen till Studentportalen
            </h1>
            <p className="lead text-muted">
              Din plats för kursregistrering och akademisk information
            </p>
          </div>
        </div>
      </div>

      {/* Registered Courses Section */}
      {registeredCourses.length > 0 && (
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="h3 mb-4 d-flex align-items-center">
              <CheckCircle className="text-success me-2" />
              Dina Registrerade Kurser
            </h2>
            <div className="row g-3">
              {registeredCourses.map((course) => (
                <div className="col-12 col-sm-6 col-lg-4" key={course.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h5 className="card-title mb-0">
                          {course.name || course.title}
                        </h5>
                        <Chip
                          icon={<CheckCircle />}
                          label="Registrerad"
                          color="success"
                          size="small"
                        />
                      </div>
                      <p className="card-text text-muted">
                        {course.description}
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <Link
                        to={`/courses/${course.id}`}
                        className="btn btn-outline-primary btn-sm d-flex align-items-center"
                      >
                        Visa detaljer
                        <ArrowForward className="ms-2" fontSize="small" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {registeredCourses.length === 0 && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="alert alert-info d-flex align-items-center" role="alert">
              <School className="me-2" />
              Du har inte registrerat dig för några kurser ännu. Gå till kurssidan för att registrera dig!
            </div>
          </div>
        </div>
      )}

      {/* Quick Menu Section */}
      <div className="row">
        <div className="col-12">
          <h2 className="h3 mb-4">Snabbmeny</h2>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <Link to="/courses" className="text-decoration-none">
                <div className="card h-100 text-center hover-card border-0 shadow-sm">
                  <div className="card-body py-5">
                    <MenuBook className="text-primary mb-3" style={{ fontSize: '4rem' }} />
                    <h3 className="card-title h4 text-primary">Kurser</h3>
                    <p className="card-text text-muted">
                      Utforska och registrera dig för tillgängliga kurser
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/news" className="text-decoration-none">
                <div className="card h-100 text-center hover-card border-0 shadow-sm">
                  <div className="card-body py-5">
                    <Article className="text-primary mb-3" style={{ fontSize: '4rem' }} />
                    <h3 className="card-title h4 text-primary">Nyheter</h3>
                    <p className="card-text text-muted">
                      Läs de senaste nyheterna och uppdateringarna
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
