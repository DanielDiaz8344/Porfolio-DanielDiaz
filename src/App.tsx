import { lazy, Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

// Lazy-loaded below-the-fold sections (code splitting)
const About    = lazy(() => import('@/components/sections/About'));
const Services = lazy(() => import('@/components/sections/Services'));
const Skills   = lazy(() => import('@/components/sections/Skills'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Contact  = lazy(() => import('@/components/sections/Contact'));

function SectionFallback() {
  return <div aria-hidden="true" style={{ minHeight: '50dvh', background: '#0a0a0a' }} />;
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#E53935] focus:text-white focus:text-sm focus:font-heading">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
