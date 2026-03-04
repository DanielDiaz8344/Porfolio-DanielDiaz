import { useEffect, useRef, useState } from 'react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import FadeContent from '@/components/reactbits/FadeContent';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import Magnet from '@/components/reactbits/Magnet';
import { Badge } from '@/components/ui/badge';

const badges = ['Freelancer', 'Venezuela'];

const stats = [
  { value: 3, suffix: '+', label: 'Años' },
  { value: 50, suffix: '+', label: 'Proyectos' },
  { value: 30, suffix: '+', label: 'Clientes' },
  { value: 6, suffix: '', label: 'Servicios' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-12">
          <DecryptedText
            text="Sobre Mí"
            speed={60}
            maxIterations={20}
            sequential
            revealDirection="start"
            animateOn="view"
            className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
            encryptedClassName="text-[#E53935]/40"
          />
        </div>

        {/* 2-column: Photo left, Text + Stats right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 sm:gap-8 md:gap-14 items-start">

          {/* Photo */}
          <AnimatedContent distance={60} duration={0.7}>
            <SpotlightCard
              className="!p-0 !rounded-2xl overflow-hidden"
              spotlightColor="rgba(229, 57, 53, 0.15)"
            >
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
                <img
                  src="/daniel-diaz.jpg"
                  alt="Daniel Diaz"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E53935]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E53935]/30" />
              </div>
            </SpotlightCard>
          </AnimatedContent>

          {/* Text + Badges + Stats */}
          <div className="flex flex-col gap-6">
            <FadeContent blur duration={800} delay={200}>
              <p className="text-lg text-[#a3a3a3] leading-relaxed font-body">
                Soy Daniel Diaz, <span className="text-[#f5f5f5] font-medium">diseñador visual</span> con
                experiencia en branding, interfaces digitales y edición audiovisual.
                Domino herramientas como Photoshop, Illustrator, Lightroom y Premiere
                para crear contenido visual impactante.
              </p>
            </FadeContent>

            <FadeContent blur duration={800} delay={400}>
              <p className="text-lg text-[#a3a3a3] leading-relaxed font-body">
                Trabajo con Figma, Framer y plataformas como WordPress y FlutterFlow
                para diseñar y desarrollar sitios web funcionales. Integro{' '}
                <span className="text-[#f5f5f5] font-medium">inteligencia artificial</span> en
                mis procesos creativos para optimizar tiempos y potenciar ideas visuales.
              </p>
            </FadeContent>

            {/* Badges */}
            <AnimatedContent distance={30} duration={0.5} delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <Magnet key={badge} padding={15} magnetStrength={3}>
                    <Badge
                      variant="outline"
                      className="border-[#E53935]/30 text-[#E53935] bg-[#E53935]/5 hover:bg-[#E53935]/10 px-4 py-1.5 text-sm font-body cursor-default"
                    >
                      {badge}
                    </Badge>
                  </Magnet>
                ))}
              </div>
            </AnimatedContent>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {stats.map((stat, index) => (
                <AnimatedContent
                  key={stat.label}
                  distance={30}
                  duration={0.4}
                  delay={0.3 + index * 0.08}
                  threshold={0.1}
                >
                  <div className="bg-[#141414] border border-[#1f1f1f] rounded-lg px-4 py-3">
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-[#E53935]">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </span>
                    <p className="text-xs text-[#737373] font-body mt-1">{stat.label}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
