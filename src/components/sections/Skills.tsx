import ScrollReveal from '@/components/reactbits/ScrollReveal';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import FadeContent from '@/components/reactbits/FadeContent';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Adobe Suite',
    color: '#FF2D2D',
    skills: ['Photoshop', 'Illustrator', 'Lightroom', 'Premiere'],
  },
  {
    title: 'Diseño Web',
    color: '#E53935',
    skills: ['Figma', 'Framer', 'WordPress', 'FlutterFlow'],
  },
  {
    title: 'Multimedia',
    color: '#FF6B6B',
    skills: ['CapCut', 'Filmora', 'Fotografía', 'Video'],
  },
  {
    title: 'Otros',
    color: '#8B0000',
    skills: ['HTML/CSS', 'IA Creativa', 'Branding', 'UI/UX'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal
          containerClassName="mb-16"
          textClassName="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
        >
          Herramientas y Skills
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <AnimatedContent
              key={category.title}
              distance={50}
              duration={0.6}
              delay={catIndex * 0.15}
            >
              <div className="rounded-2xl border border-[#1f1f1f] bg-[#141414] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-lg font-heading font-semibold text-[#f5f5f5]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <FadeContent
                      key={skill}
                      blur
                      duration={600}
                      delay={200 + skillIndex * 100}
                    >
                      <Badge
                        variant="outline"
                        className="border-[#1f1f1f] bg-[#0a0a0a] text-[#a3a3a3] hover:border-[#E53935]/30 hover:text-[#E53935] hover:bg-[#E53935]/5 transition-all duration-300 px-4 py-2 text-sm font-body cursor-default"
                      >
                        {skill}
                      </Badge>
                    </FadeContent>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
