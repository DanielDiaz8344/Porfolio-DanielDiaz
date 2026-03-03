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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1f1f1f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick('#hero')} className="cursor-pointer">
          <GradientText
            colors={['#E53935', '#FF6B6B', '#8B0000', '#FF2D2D']}
            animationSpeed={6}
            className="text-xl font-heading font-bold"
          >
            Daniel Designs
          </GradientText>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
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
          <div className="flex items-center gap-2 ml-4">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse-red" />
            <span className="text-xs text-[#737373]">Disponible</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#f5f5f5] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#1f1f1f] flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300 py-2 font-body"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-[#1f1f1f]">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse-red" />
            <span className="text-xs text-[#737373]">Disponible para freelance</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
