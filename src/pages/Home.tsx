import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ValueStrip from '../components/ValueStrip';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Process from '../components/Process';
import Results from '../components/Results';
import MaterialBoard from '../components/MaterialBoard';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a section parameter in the URL
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    
    if (section) {
      // Use requestAnimationFrame to ensure element is available
      const scrollToElement = () => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found, try again on next frame
          requestAnimationFrame(scrollToElement);
        }
      };
      requestAnimationFrame(scrollToElement);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <ValueStrip />
      <Services />
      <BeforeAfter />
      <Process />
      <Results />
      <MaterialBoard />
      <Testimonials />
      <ContactForm />
      <FAQ />
    </main>
  );
};

export default Home;