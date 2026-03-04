import { Palette, TrendingUp, Share2, Users, Video, Camera } from 'lucide-react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import ScrollVelocity from '@/components/reactbits/ScrollVelocity';
import Magnet from '@/components/reactbits/Magnet';
import ClickSpark from '@/components/reactbits/ClickSpark';

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
    description: 'Creación de contenido para redes sociales con identidad visual coherente e impactante.',
  },
  {
    icon: Users,
    title: 'Community Manager',
    description: 'Gestión de comunidades digitales, interacción con tu audiencia y crecimiento orgánico.',
  },
  {
    icon: Video,
    title: 'Edición de Video',
    description: 'Edición profesional y contenido audiovisual que atrapa y convierte.',
  },
  {
    icon: Camera,
    title: 'Fotografía',
    description: 'Fotografía profesional, retoque y producción visual para marcas y productos.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-8">
          <DecryptedText
            text="Lo que hago"
            speed={60}
            maxIterations={20}
            sequential
            revealDirection="start"
            animateOn="view"
            className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
            encryptedClassName="text-[#E53935]/40"
          />
        </div>
      </div>

      {/* Scrolling banner */}
      <div className="mb-14 overflow-hidden">
        <ScrollVelocity
          texts={['DISEÑO · MARKETING · VIDEO · FOTO · SOCIAL · BRANDING']}
          velocity={80}
          className="text-[clamp(1.2rem,3vw,2rem)] font-heading font-bold text-[#E53935]/10 tracking-widest uppercase"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedContent
              key={service.title}
              distance={80}
              duration={0.6}
              delay={index * 0.12}
              threshold={0.05}
              className="h-full"
            >
              <ClickSpark sparkColor="#E53935" sparkSize={10} sparkRadius={20} sparkCount={6} duration={400}>
                <div className="group relative h-full rounded-2xl bg-[#141414] border border-[#1f1f1f] p-6 flex flex-col gap-5 transition-all duration-500 hover:border-[#E53935]/30 hover:bg-[#161616] hover:scale-[1.02] overflow-hidden cursor-pointer">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Glow behind card on hover */}
                  <div className="absolute -inset-px rounded-2xl bg-[#E53935]/0 group-hover:bg-[#E53935]/[0.03] transition-all duration-500 -z-10 blur-xl" />

                  {/* Number indicator */}
                  <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-[#E53935]/[0.07] leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Icon with Magnet */}
                  <Magnet padding={60} magnetStrength={3}>
                    <div className="relative w-14 h-14 rounded-xl bg-[#E53935]/10 border border-[#E53935]/20 flex items-center justify-center group-hover:bg-[#E53935]/20 group-hover:border-[#E53935]/40 group-hover:shadow-[0_0_20px_rgba(229,57,53,0.15)] transition-all duration-500">
                      <service.icon size={26} className="text-[#E53935] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </Magnet>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-[#f5f5f5]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#737373] font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ClickSpark>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
