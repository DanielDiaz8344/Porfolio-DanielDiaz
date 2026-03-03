import ScrollReveal from '@/components/reactbits/ScrollReveal';
import FadeContent from '@/components/reactbits/FadeContent';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { Badge } from '@/components/ui/badge';

const badges = ['Freelancer', 'Venezuela', 'Disponible'];

const stats = [
  { value: '+3', label: 'Años de experiencia' },
  { value: '+50', label: 'Proyectos completados' },
  { value: '+30', label: 'Clientes satisfechos' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal
          containerClassName="mb-12"
          textClassName="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
        >
          Sobre Mí
        </ScrollReveal>

        <FadeContent blur duration={800} delay={200}>
          <p className="text-lg md:text-xl text-[#a3a3a3] leading-relaxed font-body mb-6">
            Soy Daniel Diaz, diseñador visual con experiencia en branding,
            interfaces digitales y edición audiovisual. Domino herramientas como
            Photoshop, Illustrator, Lightroom y Premiere para crear contenido
            visual impactante.
          </p>
        </FadeContent>

        <FadeContent blur duration={800} delay={400}>
          <p className="text-lg md:text-xl text-[#a3a3a3] leading-relaxed font-body mb-8">
            Trabajo con Figma, Framer y plataformas como WordPress y FlutterFlow
            para diseñar y desarrollar sitios web funcionales. Integro inteligencia
            artificial en mis procesos creativos para optimizar tiempos y potenciar
            ideas visuales.
          </p>
        </FadeContent>

        <AnimatedContent distance={50} duration={0.6} delay={0.3}>
          <div className="flex flex-wrap gap-3 mb-12">
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedContent
              key={stat.label}
              distance={40}
              duration={0.5}
              delay={index * 0.15}
            >
              <div className="text-center md:text-left rounded-2xl border border-[#1f1f1f] bg-[#141414] p-5 md:p-6">
                <span className="text-2xl md:text-4xl font-heading font-bold text-[#E53935]">
                  {stat.value}
                </span>
                <p className="text-xs md:text-sm text-[#737373] font-body mt-1">
                  {stat.label}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
