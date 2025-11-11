const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-105"
      aria-label="Chatear por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.182.586 4.227 1.605 5.99L4 29l8.258-1.573C13.934 28.457 14.94 29 16 29c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-.926 0-1.83-.13-2.69-.383l-.55-.162-.563.107-4.375.834.835-4.375.107-.563-.162-.55C8.13 19.83 8 18.926 8 18c0-5.514 4.486-10 10-10zm-3.09 4.59a1 1 0 00-.715 1.717l1.64 1.64a1 1 0 010 1.414l-.464.463a1 1 0 000 1.414l3.535 3.535a1 1 0 001.414 0l.464-.464a1 1 0 011.414 0l1.64 1.64a1 1 0 001.717-.715c.22-1.26-.072-2.6-1.254-3.782-1.181-1.181-3.73-2.414-5.52-2.414-.544 0-1.02.1-1.4.304l-.7-.7c.204-.38.304-.856.304-1.4 0-1.79-1.233-4.339-2.414-5.52a3.35 3.35 0 00-2.378-.972z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
