import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import ServiceTemplate from './pages/services/ServiceTemplate';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-base">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<ServiceTemplate />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
