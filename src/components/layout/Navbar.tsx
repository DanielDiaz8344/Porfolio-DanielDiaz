import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GradientText from '@/components/reactbits/GradientText';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileOpen ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1f1f1f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick('#hero')} className="cursor-pointer">
          <GradientText
            colors={['#E53935', '#FF6B6B', '#8B0000', '#FF2D2D']}
            animationSpeed={6}
            className="text-lg sm:text-xl font-heading font-bold"
          >
            ByDanielDiaz
          </GradientText>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Magnet key={link.href} padding={50} magnetStrength={3}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300 font-body"
              >
                {link.label}
              </button>
            </Magnet>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse-red" />
            <span className="text-xs text-[#737373]">Disponible</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#f5f5f5] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[57px] bg-[#0a0a0a]/98 backdrop-blur-2xl transition-all duration-400 ease-in-out ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 pt-8 gap-2">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-2xl font-heading font-semibold text-[#a3a3a3] hover:text-[#f5f5f5] active:text-[#E53935] transition-colors duration-300 py-3 border-b border-[#1f1f1f]/50"
              style={{
                transform: mobileOpen ? 'translateY(0)' : `translateY(${20 + index * 10}px)`,
                opacity: mobileOpen ? 1 : 0,
                transition: `all 0.4s ease ${index * 0.05}s`,
              }}
            >
              {link.label}
            </button>
          ))}
          <div
            className="flex items-center gap-2 pt-6"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: 'opacity 0.4s ease 0.35s',
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] animate-pulse-red" />
            <span className="text-sm text-[#737373] font-body">Disponible para freelance</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
