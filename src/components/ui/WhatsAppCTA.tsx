import { MessageCircle } from 'lucide-react';
import useWhatsAppCTA from '../hooks/useWhatsAppCTA';

const WHATSAPP_URL = 'https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar';

function WhatsAppCTA() {
  const { isVisible } = useWhatsAppCTA();

  return (
    <div
      className={`fixed bottom-6 right-4 z-40 transition-all duration-300 md:right-8 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-text shadow-xl transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Abrir conversación de WhatsApp con Marvin Pérez de Obaldía"
      >
        <MessageCircle className="h-5 w-5 text-primary transition-transform group-hover:scale-110" aria-hidden />
        Cotizar por WhatsApp
      </a>
    </div>
  );
}

export default WhatsAppCTA;
