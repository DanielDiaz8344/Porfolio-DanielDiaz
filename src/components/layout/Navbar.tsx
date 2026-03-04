import { useState, useEffect, useRef } from 'react';
import Magnet from '@/components/reactbits/Magnet';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className="block h-[2px] w-full bg-[#f5f5f5] rounded-full transition-all duration-400 origin-center"
        style={{
          transform: open ? 'translateY(9px) rotate(45deg)' : 'none',
          backgroundColor: open ? '#E53935' : '#f5f5f5',
        }}
      />
      <span
        className="block h-[2px] w-full bg-[#f5f5f5] rounded-full transition-all duration-300"
        style={{
          opacity: open ? 0 : 1,
          transform: open ? 'scaleX(0)' : 'scaleX(1)',
        }}
      />
      <span
        className="block h-[2px] w-full bg-[#f5f5f5] rounded-full transition-all duration-400 origin-center"
        style={{
          transform: open ? 'translateY(-9px) rotate(-45deg)' : 'none',
          backgroundColor: open ? '#E53935' : '#f5f5f5',
        }}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (navBarRef.current) setNavHeight(navBarRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

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

  const showGlass = scrolled || mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showGlass
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      {/* Subtle red glow at top edge when scrolled */}
      {showGlass && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/20 to-transparent" />
      )}

      <div ref={navBarRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <button onClick={() => handleNavClick('#hero')} className="cursor-pointer">
          <span className="text-lg sm:text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E53935] via-[#FF6B6B] to-[#E53935] bg-[length:200%_100%] animate-[gradient-shift_6s_ease_infinite]">
            ByDanielDiaz
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Magnet key={link.href} padding={20} magnetStrength={4}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300 font-body px-3 py-1.5 rounded-lg hover:bg-white/[0.05] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E53935] rounded-full group-hover:w-4/5 transition-all duration-300" />
              </button>
            </Magnet>
          ))}
          <div className="flex items-center gap-2 ml-3 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse-red" />
            <span className="text-xs text-[#737373]">Disponible</span>
          </div>
        </div>

        {/* Mobile Toggle - Glass pill */}
        <button
          className="lg:hidden p-2.5 -mr-1 rounded-xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-md active:scale-95 transition-transform duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile Menu - Glass overlay */}
      <div
        style={{ top: navHeight }}
        className={`lg:hidden fixed inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-2xl" />

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#E53935]/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative flex flex-col px-6 pt-8 gap-3 h-full">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="group text-left rounded-xl bg-white/[0.03] border border-white/[0.06] px-5 py-4 transition-all duration-300 active:scale-[0.98] hover:bg-white/[0.06] hover:border-white/[0.12]"
              style={{
                transform: mobileOpen ? 'translateY(0)' : `translateY(${30 + index * 8}px)`,
                opacity: mobileOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]/40 group-hover:bg-[#E53935] transition-colors duration-300" />
                  <span className="text-xl font-heading font-semibold text-[#a3a3a3] group-hover:text-[#f5f5f5] transition-colors duration-300">
                    {link.label}
                  </span>
                </div>
                <span className="text-xs font-body text-[#737373]/50 group-hover:text-[#737373] transition-colors duration-300">
                  0{index + 1}
                </span>
              </div>
            </button>
          ))}

          {/* Disponible badge */}
          <div
            className="flex items-center justify-center gap-2.5 mt-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
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
