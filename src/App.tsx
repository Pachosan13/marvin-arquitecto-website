import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/services/ServicesOverview'));
const ApartmentRemodelPage = lazy(() => import('./pages/services/ApartmentRemodel'));
const HouseRemodelPage = lazy(() => import('./pages/services/HouseRemodel'));
const OfficeRemodelPage = lazy(() => import('./pages/services/OfficeRemodel'));
const DesignBuildPage = lazy(() => import('./pages/services/DesignBuild'));
const ProjectsPage = lazy(() => import('./pages/projects/ProjectsIndex'));
const ProjectDetailPage = lazy(() => import('./pages/projects/ProjectDetail'));
const BlogIndexPage = lazy(() => import('./pages/blog/BlogIndex'));
const BlogPostPage = lazy(() => import('./pages/blog/BlogPost'));
const ContactPage = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="flex items-center justify-center py-20 text-lg text-primary" aria-live="polite">Cargando experiencia...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/remodelacion-apartamentos" element={<ApartmentRemodelPage />} />
            <Route path="/servicios/remodelacion-casas" element={<HouseRemodelPage />} />
            <Route path="/servicios/remodelacion-oficinas" element={<OfficeRemodelPage />} />
            <Route path="/servicios/diseno-y-construccion" element={<DesignBuildPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/sobre-el-arquitecto" element={<Navigate to="/sobre" replace />} />
            <Route path="/servicios/:slug" element={<Navigate to="/servicios" replace />} />
            <Route path="/agenda" element={<Navigate to="/contacto" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
