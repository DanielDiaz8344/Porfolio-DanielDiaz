import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Magnet from '@/components/reactbits/Magnet';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        ref={navBarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0e0e0e]/70 backdrop-blur-lg shadow-lg py-1 sm:py-2'
            : 'bg-transparent py-2 sm:py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleNavClick('#hero')} className="cursor-pointer">
              <span className="text-lg sm:text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E53935] via-[#FF6B6B] to-[#E53935] bg-[length:200%_100%] animate-[gradient-shift_6s_ease_infinite]">
                ByDanielDiaz
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Magnet key={link.href} padding={20} magnetStrength={4}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-white/[0.06] group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E53935] rounded-full transition-all duration-300 group-hover:w-1/2" />
                  </button>
                </Magnet>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse-red" />
                <span className="text-xs text-[#737373]">Disponible</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 text-[#f5f5f5] ${
                mobileOpen ? 'bg-[#E53935]/10' : 'bg-white/[0.06] hover:bg-white/[0.1]'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Floating card like subeconpepe */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0a0a0a]/80" onClick={() => setMobileOpen(false)} />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 sm:top-24 left-3 right-3 sm:left-4 sm:right-4 bg-[#141414]/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-white/[0.08] p-4 sm:p-6"
            >
              <div className="flex flex-col gap-0.5 sm:gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-heading text-base sm:text-lg font-semibold text-[#a3a3a3] py-3 sm:py-4 px-4 sm:px-5 rounded-xl sm:rounded-2xl hover:bg-white/[0.06] hover:text-[#f5f5f5] active:text-[#E53935] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="border-t border-white/[0.08] my-2 sm:my-3" />

                {/* Disponible badge */}
                <div className="flex items-center justify-center gap-2.5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] animate-pulse-red" />
                  <span className="text-sm text-[#737373] font-body">Disponible para freelance</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
