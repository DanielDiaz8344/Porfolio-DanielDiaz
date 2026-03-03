import { Palette, TrendingUp, Share2, Users, Video, Camera } from 'lucide-react';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';

const services = [
  {
    icon: Palette,
    title: 'Diseño Gráfico',
    description: 'Identidades visuales, logotipos, material publicitario y piezas gráficas que comunican la esencia de tu marca.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estrategias visuales y de contenido que posicionan tu marca y conectan con tu audiencia.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Gestión y creación de contenido para redes sociales con identidad visual coherente e impactante.',
  },
  {
    icon: Users,
    title: 'Community Manager',
    description: 'Construcción y gestión de comunidades digitales, interacción con tu audiencia y crecimiento orgánico.',
  },
  {
    icon: Video,
    title: 'Edición de Video',
    description: 'Edición profesional con Premiere, CapCut y Filmora. Contenido audiovisual que atrapa y convierte.',
  },
  {
    icon: Camera,
    title: 'Fotografía',
    description: 'Fotografía profesional, retoque y producción visual para marcas, productos y redes sociales.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal
          containerClassName="mb-16"
          textClassName="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
        >
          Lo que hago
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedContent
              key={service.title}
              distance={60}
              duration={0.6}
              delay={index * 0.1}
              threshold={0.05}
            >
              <SpotlightCard
                className="h-full flex flex-col gap-4 group"
                spotlightColor="rgba(229, 57, 53, 0.15)"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 border border-[#E53935]/20 flex items-center justify-center group-hover:bg-[#E53935]/20 transition-colors duration-300">
                  <service.icon size={24} className="text-[#E53935]" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#f5f5f5]">
                  <DecryptedText
                    text={service.title}
                    speed={40}
                    maxIterations={15}
                    sequential
                    revealDirection="start"
                    animateOn="hover"
                    className="text-[#f5f5f5]"
                    encryptedClassName="text-[#E53935]/60"
                  />
                </h3>
                <p className="text-[#737373] font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
