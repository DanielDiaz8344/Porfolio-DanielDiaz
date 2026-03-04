import { Instagram } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.04.86.11V9a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.16 8.16 0 0 0 4.77 1.52V6.88a4.84 4.84 0 0 1-1.01-.19z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Glass top border with red accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E53935]/20 to-transparent" />

      {/* Glass background */}
      <div className="relative bg-white/[0.02] backdrop-blur-xl border-t border-white/[0.06]">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,57,53,0.03),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left: copyright + badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span className="text-sm text-[#737373] font-body">
              &copy; 2026 ByDanielDiaz
            </span>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse-red" />
              <span className="text-xs text-[#737373]">Disponible para freelance</span>
            </div>
          </div>

          {/* Right: social icons in glass pills */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/bydanieldiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-[0_0_16px_rgba(229,57,53,0.12)]"
            >
              <Instagram size={18} className="text-[#737373] group-hover:text-[#E53935] transition-colors duration-300" />
            </a>
            <a
              href="https://www.tiktok.com/@bydanieldiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-[0_0_16px_rgba(229,57,53,0.12)]"
            >
              <span className="text-[#737373] group-hover:text-[#E53935] transition-colors duration-300">
                <TikTokIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
