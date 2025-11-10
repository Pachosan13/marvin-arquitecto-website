import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppCTA from '../ui/WhatsAppCTA';

interface LayoutProps {
  readonly children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-text">
      <Header />
      <main id="contenido" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}

export default Layout;
