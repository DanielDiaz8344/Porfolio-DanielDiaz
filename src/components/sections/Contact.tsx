import { MessageCircle, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.04.86.11V9a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.16 8.16 0 0 0 4.77 1.52V6.88a4.84 4.84 0 0 1-1.01-.19z" />
  </svg>
);

export default function Contact() {
  const whatsappLink = `https://wa.me/584242984028?text=${encodeURIComponent('Hola Daniel, me interesa trabajar contigo.')}`;

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,90vw)] h-[min(500px,90vw)] bg-[#E53935]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <AnimatedContent distance={60} duration={0.6} threshold={0.1}>
          <DecryptedText
            text="Tu marca merece ser vista."
            speed={60}
            maxIterations={20}
            sequential
            revealDirection="start"
            animateOn="view"
            className="text-[clamp(2rem,6vw,4rem)] font-heading font-bold text-[#f5f5f5] leading-tight"
            encryptedClassName="text-[#E53935]/40"
          />
        </AnimatedContent>

        {/* Subtitle */}
        <AnimatedContent distance={40} duration={0.6} delay={0.15} threshold={0.1}>
          <p className="mt-5 text-[#737373] font-body text-base sm:text-lg max-w-xl mx-auto">
            Hablemos de tu proyecto. Diseño, estrategia y contenido para llevar tu marca al siguiente nivel.
          </p>
        </AnimatedContent>

        {/* Divider */}
        <AnimatedContent distance={30} duration={0.6} delay={0.25} threshold={0.1}>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent mx-auto mt-8 mb-10" />
        </AnimatedContent>

        {/* CTA Buttons */}
        <AnimatedContent distance={40} duration={0.6} delay={0.3} threshold={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E53935] text-white font-heading font-semibold text-sm hover:bg-[#d32f2f] hover:shadow-[0_0_40px_rgba(229,57,53,0.25)] active:scale-[0.98] transition-all duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp
              <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a
              href="mailto:danieldiaz8344@gmail.com"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/[0.08] text-[#f5f5f5] font-heading font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.15] active:scale-[0.98] transition-all duration-300"
            >
              <Mail size={18} />
              Email
              <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>
        </AnimatedContent>

        {/* Social Links */}
        <AnimatedContent distance={30} duration={0.6} delay={0.4} threshold={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/bydanieldiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[#737373] hover:text-[#f5f5f5] hover:border-[#E53935]/30 hover:bg-[#E53935]/[0.06] transition-all duration-300"
            >
              <Instagram size={18} />
              <span className="text-sm font-body">@bydanieldiaz</span>
            </a>

            <a
              href="https://www.tiktok.com/@bydanieldiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[#737373] hover:text-[#f5f5f5] hover:border-[#E53935]/30 hover:bg-[#E53935]/[0.06] transition-all duration-300"
            >
              <TikTokIcon />
              <span className="text-sm font-body">@bydanieldiaz</span>
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
