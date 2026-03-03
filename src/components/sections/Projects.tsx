import ScrollReveal from '@/components/reactbits/ScrollReveal';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import GradientText from '@/components/reactbits/GradientText';
import { Folder } from 'lucide-react';

const placeholderProjects = [
  { title: 'Branding Corporativo', tag: 'Identidad Visual' },
  { title: 'Social Media Pack', tag: 'Redes Sociales' },
  { title: 'Sitio Web Creativo', tag: 'Diseño Web' },
  { title: 'Video Promocional', tag: 'Edición de Video' },
  { title: 'Sesión Fotográfica', tag: 'Fotografía' },
  { title: 'Campaña Digital', tag: 'Marketing' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal
          containerClassName="mb-6"
          textClassName="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
        >
          Proyectos
        </ScrollReveal>

        <AnimatedContent distance={30} duration={0.5}>
          <div className="mb-12 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#E53935]" />
            <GradientText
              colors={['#E53935', '#FF6B6B', '#FF2D2D']}
              animationSpeed={5}
              className="text-lg font-heading font-medium"
            >
              Próximamente con casos reales
            </GradientText>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project, index) => (
            <AnimatedContent
              key={project.title}
              distance={60}
              duration={0.6}
              delay={index * 0.1}
              threshold={0.05}
            >
              <SpotlightCard
                className="h-full flex flex-col gap-4 group cursor-pointer"
                spotlightColor="rgba(229, 57, 53, 0.12)"
              >
                {/* Image placeholder */}
                <div className="aspect-video rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center group-hover:border-[#E53935]/20 transition-colors duration-300">
                  <Folder
                    size={32}
                    className="text-[#1f1f1f] group-hover:text-[#E53935]/30 transition-colors duration-300"
                  />
                </div>

                <div>
                  <span className="text-xs text-[#E53935] font-body uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-[#f5f5f5] mt-1 group-hover:text-[#E53935] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
