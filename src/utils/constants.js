// Application constants and shared data

// Course data - centralized to avoid duplication
export const COURSES = [
  {
    id: 1,
    name: 'Matematik',
    title: 'Matematik',
    description: 'Grundläggande matematik för gymnasiet.',
    fullDescription: 'Denna kurs täcker grundläggande matematiska koncept inklusive algebra, geometri och statistik. Studenter kommer att utveckla problemlösningsförmågor och matematiskt tänkande.',
    instructor: 'Dr. Anna Karlsson',
    schedule: 'Mån, Ons, Fre 09:00-10:30',
    credits: '15 hp',
    duration: '20 veckor',
    prerequisites: 'Grundläggande matematik från grundskolan',
    status: 'Öppen för registrering'
  },
  {
    id: 2,
    name: 'Programmering',
    title: 'Programmering',
    description: 'Introduktion till programmering och problemlösning.',
    fullDescription: 'En introduktionskurs i programmering som täcker grundläggande koncept som variabler, loopar, funktioner och objektorienterad programmering. Studenter kommer att arbeta med praktiska projekt.',
    instructor: 'Prof. Erik Johansson',
    schedule: 'Tis, Tors 13:00-16:00',
    credits: '22.5 hp',
    duration: '20 veckor',
    prerequisites: 'Grundläggande datorkunnighet',
    status: 'Öppen för registrering'
  },
  {
    id: 3,
    name: 'Historia',
    title: 'Historia',
    description: 'Världshistoria från antiken till nutid.',
    fullDescription: 'En omfattande kurs som täcker viktiga historiska händelser och utvecklingar från antiken till modern tid. Fokus på kritiskt tänkande och källanalys.',
    instructor: 'Dr. Maria Lindström',
    schedule: 'Mån, Ons 14:00-15:30',
    credits: '15 hp',
    duration: '20 veckor',
    prerequisites: 'Grundläggande kunskaper i samhällskunskap',
    status: 'Öppen för registrering'
  }
];

// Application navigation items
export const NAV_ITEMS = [
  { path: '/', label: 'Hem', icon: 'Home' },
  { path: '/courses', label: 'Kurser', icon: 'MenuBook' },
  { path: '/my-registrations', label: 'Mina Kurser', icon: 'Assignment' },
  { path: '/news', label: 'Nyheter', icon: 'Article' }
];

// News data
export const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Ny kursperiod startar i januari',
    content: 'Vi är glada att meddela att registreringen för vårterminen 2025 nu är öppen. Registrera dig innan 15 december för att säkra din plats.',
    date: '2024-11-15',
    category: 'Kursregistrering',
    author: 'Studentservice'
  },
  {
    id: 2,
    title: 'Uppdaterat kursmaterial tillgängligt',
    content: 'Nytt kursmaterial för programmering och matematik är nu tillgängligt i studentportalen. Kontrollera era kursresurser.',
    date: '2024-11-10',
    category: 'Akademiskt',
    author: 'Akademisk personal'
  },
  {
    id: 3,
    title: 'Tentamensschema för december',
    content: 'Tentamenschemat för december är nu publicerat. Kontrollera era tentamensdatum och salar i studentportalen.',
    date: '2024-11-08',
    category: 'Tentamen',
    author: 'Examensavdelningen'
  }
];

// Application settings
export const APP_CONFIG = {
  name: 'StudentPortal',
  version: '1.0.0',
  description: 'Student Portal för kursregistrering och information',
  supportEmail: 'support@studentportal.se',
  maxRegistrations: 5,
  registrationDeadline: '2024-12-15'
};
