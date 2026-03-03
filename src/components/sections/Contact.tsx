import { MessageCircle, Mail, Instagram } from 'lucide-react';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import StarBorder from '@/components/reactbits/StarBorder';
import FadeContent from '@/components/reactbits/FadeContent';
import Magnet from '@/components/reactbits/Magnet';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.04.86.11V9a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.16 8.16 0 0 0 4.77 1.52V6.88a4.84 4.84 0 0 1-1.01-.19z" />
  </svg>
);

export default function Contact() {
  const whatsappLink = `https://wa.me/584242984028?text=${encodeURIComponent('Hola Daniel, me interesa trabajar contigo.')}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0e0e0e]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Impact phrase */}
        <ScrollReveal
          containerClassName="mb-12"
          textClassName="text-[clamp(2rem,6vw,4rem)] font-heading font-bold text-[#f5f5f5] leading-tight"
        >
          Tu marca merece ser vista.
        </ScrollReveal>

        {/* CTA Buttons */}
        <FadeContent blur duration={800} delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <StarBorder
              as="a"
              color="#E53935"
              speed="5s"
              className="cursor-pointer"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2 font-heading font-semibold">
                <MessageCircle size={20} />
                WhatsApp
              </span>
            </StarBorder>

            <StarBorder
              as="a"
              color="#FF6B6B"
              speed="6s"
              className="cursor-pointer"
              href="mailto:danieldiaz8344@gmail.com"
            >
              <span className="flex items-center gap-2 font-heading font-semibold">
                <Mail size={20} />
                Email
              </span>
            </StarBorder>
          </div>
        </FadeContent>

        {/* Social Links */}
        <FadeContent blur duration={800} delay={500}>
          <div className="flex items-center justify-center gap-6">
            <Magnet padding={60} magnetStrength={2}>
              <a
                href="https://www.instagram.com/bydanieldiaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#737373] hover:text-[#E53935] transition-colors duration-300"
              >
                <Instagram size={24} />
                <span className="text-sm font-body">@bydanieldiaz</span>
              </a>
            </Magnet>

            <Magnet padding={60} magnetStrength={2}>
              <a
                href="https://www.tiktok.com/@bydanieldiaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#737373] hover:text-[#E53935] transition-colors duration-300"
              >
                <TikTokIcon />
                <span className="text-sm font-body">@bydanieldiaz</span>
              </a>
            </Magnet>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
