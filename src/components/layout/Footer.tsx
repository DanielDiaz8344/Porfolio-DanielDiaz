import { Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.04.86.11V9a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.16 8.16 0 0 0 4.77 1.52V6.88a4.84 4.84 0 0 1-1.01-.19z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a]">
      <Separator className="bg-[#1f1f1f]" />
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#737373] font-body">
            &copy; 2026 Daniel Designs
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse-red" />
          <span className="text-xs text-[#737373]">Disponible para freelance</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/bydanieldiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#737373] hover:text-[#E53935] transition-colors duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@bydanieldiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#737373] hover:text-[#E53935] transition-colors duration-300"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
