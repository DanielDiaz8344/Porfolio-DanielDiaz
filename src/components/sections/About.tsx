import ScrollReveal from '@/components/reactbits/ScrollReveal';
import FadeContent from '@/components/reactbits/FadeContent';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { Badge } from '@/components/ui/badge';

const badges = ['Freelancer', 'Venezuela', 'Disponible'];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal
          containerClassName="mb-12"
          textClassName="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
        >
          Sobre Mí
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <FadeContent blur duration={800} delay={200}>
              <p className="text-lg text-[#a3a3a3] leading-relaxed font-body">
                Soy Daniel Diaz, diseñador visual con experiencia en branding,
                interfaces digitales y edición audiovisual. Domino herramientas como
                Photoshop, Illustrator, Lightroom y Premiere para crear contenido
                visual impactante.
              </p>
            </FadeContent>

            <FadeContent blur duration={800} delay={400}>
              <p className="text-lg text-[#a3a3a3] leading-relaxed font-body">
                Trabajo con Figma, Framer y plataformas como WordPress y FlutterFlow
                para diseñar y desarrollar sitios web funcionales. Integro inteligencia
                artificial en mis procesos creativos para optimizar tiempos y potenciar
                ideas visuales.
              </p>
            </FadeContent>

            <AnimatedContent distance={50} duration={0.6} delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-2">
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="outline"
                    className="border-[#E53935]/30 text-[#E53935] bg-[#E53935]/5 hover:bg-[#E53935]/10 px-4 py-1.5 text-sm font-body"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </AnimatedContent>
          </div>

          {/* Photo placeholder */}
          <AnimatedContent distance={80} direction="horizontal" duration={0.8}>
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl border border-[#1f1f1f] bg-[#141414] overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#E53935]/10 border border-[#E53935]/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-[#E53935]">DD</span>
                </div>
                <p className="text-sm text-[#737373] font-body">Foto próximamente</p>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E53935]/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E53935]/30" />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
