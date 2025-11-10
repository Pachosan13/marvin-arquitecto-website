import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import ServiceTemplate from './pages/services/ServiceTemplate';
import Agenda from './pages/Agenda';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bg">
        <Header />
        <Routes>
          <Route path="/sobre-el-arquitecto" element={<About />} />
          <Route path="/servicios/:slug" element={<ServiceTemplate />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;