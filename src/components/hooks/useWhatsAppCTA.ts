import { useEffect, useState } from 'react';

const CTA_VISIBLE_OFFSET = 240;

function useWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > CTA_VISIBLE_OFFSET);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isVisible };
}

export default useWhatsAppCTA;
