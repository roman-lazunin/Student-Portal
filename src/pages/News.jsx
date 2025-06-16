import React from "react";
import { Article, CalendarToday } from "@mui/icons-material";
import "../styles/pages/news.css";

const news = [
  { 
    id: 1, 
    title: "Välkommen till nya portalen!", 
    content: "Vi har lanserat en ny version av studentportalen med förbättrad användarvänlighet och nya funktioner för att underlätta dina studier.",
    date: "2025-06-15",
    category: "System"
  },
  { 
    id: 2, 
    title: "Tentamensschema publicerat", 
    content: "Nu finns vårens tentamensschema tillgängligt. Kontrollera dina kurser och boka tentamenstider i god tid.",
    date: "2025-06-14",
    category: "Tentamen"
  },
  { 
    id: 3, 
    title: "Ny kursregistrering öppnad", 
    content: "Registrering för höstterminens kurser är nu öppen. Glöm inte att registrera dig innan deadline den 30 juni.",
    date: "2025-06-10",
    category: "Kursregistrering"
  },
  { 
    id: 4, 
    title: "Biblioteket utökar öppettider", 
    content: "Under tentamensperioden kommer biblioteket att ha utökade öppettider för att ge er bättre studietillfällen.",
    date: "2025-06-08",
    category: "Campus"
  }
];

export default function News() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 fw-bold text-primary mb-4">Nyheter / Blogg</h1>
        </div>
      </div>
      
      <div className="row g-4">
        {news.map((item) => (
          <div className="col-12 col-md-6 col-xl-4" key={item.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-end align-items-start mb-2">
                  <small className="text-muted d-flex align-items-center">
                    <CalendarToday sx={{ fontSize: 12 }} className="me-1" />
                    {new Date(item.date).toLocaleDateString('sv-SE')}
                  </small>
                </div>
                
                <h5 className="card-title text-dark fw-semibold mb-3">
                  {item.title}
                </h5>
                
                <p className="card-text text-muted flex-grow-1 lh-base">
                  {item.content}
                </p>
                
                <div className="mt-auto pt-3">
                  <button className="btn btn-outline-primary btn-sm w-100">
                    Läs mer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {news.length === 0 && (
        <div className="row">
          <div className="col-12 text-center py-5">
            <div className="text-muted">
              <Article sx={{ fontSize: 64 }} className="mb-3 d-block mx-auto" />
              <h4>Inga nyheter just nu</h4>
              <p>Kom tillbaka senare för uppdateringar!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
