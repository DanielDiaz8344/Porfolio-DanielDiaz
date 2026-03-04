import { type ReactNode } from 'react';
import {
  SiFigma,
  SiCanva,
  SiWordpress,
  SiFlutter,
  SiFramer,
  SiHtml5,
  SiOpenai,
  SiClaude,
  SiNotion,
  SiGoogle,
} from 'react-icons/si';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import FadeContent from '@/components/reactbits/FadeContent';

function Abbr({ children, color }: { children: string; color: string }) {
  return (
    <span className="text-sm font-heading font-bold leading-none" style={{ color }}>
      {children}
    </span>
  );
}

interface Tool {
  name: string;
  icon: ReactNode;
  color: string;
}

const toolSections: { category: string; tools: Tool[] }[] = [
  {
    category: 'Diseño',
    tools: [
      { name: 'Photoshop', icon: <Abbr color="#31A8FF">Ps</Abbr>, color: '#31A8FF' },
      { name: 'Illustrator', icon: <Abbr color="#FF9A00">Ai</Abbr>, color: '#FF9A00' },
      { name: 'Figma', icon: <SiFigma />, color: '#A259FF' },
      { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
    ],
  },
  {
    category: 'Video & Foto',
    tools: [
      { name: 'Premiere', icon: <Abbr color="#9999FF">Pr</Abbr>, color: '#9999FF' },
      { name: 'After Effects', icon: <Abbr color="#9999FF">Ae</Abbr>, color: '#9999FF' },
      { name: 'Lightroom', icon: <Abbr color="#31A8FF">Lr</Abbr>, color: '#31A8FF' },
      { name: 'CapCut', icon: <Abbr color="#FFFFFF">Cc</Abbr>, color: '#FFFFFF' },
    ],
  },
  {
    category: 'Web & Desarrollo',
    tools: [
      { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
      { name: 'FlutterFlow', icon: <SiFlutter />, color: '#02569B' },
      { name: 'Framer', icon: <SiFramer />, color: '#0099FF' },
      { name: 'HTML/CSS', icon: <SiHtml5 />, color: '#E44D26' },
    ],
  },
  {
    category: 'IA & Automatización',
    tools: [
      { name: 'ChatGPT', icon: <SiOpenai />, color: '#10A37F' },
      { name: 'Claude Code', icon: <SiClaude />, color: '#D97757' },
      { name: 'Midjourney', icon: <Abbr color="#FFFFFF">Mj</Abbr>, color: '#FFFFFF' },
      { name: 'Pencil Dev', icon: <Abbr color="#6366F1">Pd</Abbr>, color: '#6366F1' },
    ],
  },
  {
    category: 'Productividad',
    tools: [
      { name: 'Notion', icon: <SiNotion />, color: '#FFFFFF' },
      { name: 'Veo 3', icon: <Abbr color="#4285F4">V3</Abbr>, color: '#4285F4' },
      { name: 'Nano Banana', icon: <Abbr color="#FFD60A">Nb</Abbr>, color: '#FFD60A' },
      { name: 'Google Suite', icon: <SiGoogle />, color: '#4285F4' },
    ],
  },
];

const skillSections = [
  {
    category: 'Diseño Visual',
    skills: ['Branding', 'Identidad Visual', 'UI/UX', 'Tipografía'],
  },
  {
    category: 'Marketing & Redes',
    skills: ['Social Media', 'Marketing Digital', 'Community Manager', 'Estrategia de Contenido'],
  },
  {
    category: 'Producción',
    skills: ['Edición de Video', 'Fotografía', 'Motion Graphics', 'Retoque Digital'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6">

        {/* — HERRAMIENTAS — */}
        <div className="mb-20">
          <div className="mb-14">
            <DecryptedText
              text="Herramientas"
              speed={60}
              maxIterations={20}
              sequential
              revealDirection="start"
              animateOn="view"
              className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
              encryptedClassName="text-[#E53935]/40"
            />
          </div>

          <div className="flex flex-col gap-10">
            {toolSections.map((section, secIndex) => (
              <AnimatedContent
                key={section.category}
                distance={40}
                duration={0.5}
                delay={secIndex * 0.1}
                threshold={0.05}
              >
                <div>
                  <h3 className="text-sm font-body text-[#E53935] uppercase tracking-widest mb-4">
                    {section.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {section.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="group flex items-center gap-3 rounded-xl bg-[#141414] border border-[#1f1f1f] px-4 py-3 transition-all duration-400 hover:border-[#E53935]/30 hover:bg-[#161616]"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-400 group-hover:scale-110 text-[1.25rem]"
                          style={{
                            backgroundColor: `${tool.color}15`,
                            color: tool.color,
                            border: `1px solid ${tool.color}30`,
                          }}
                        >
                          {tool.icon}
                        </div>
                        <span className="text-sm font-body text-[#737373] group-hover:text-[#a3a3a3] transition-colors duration-300">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>

        {/* — SKILLS — */}
        <div>
          <div className="mb-14">
            <DecryptedText
              text="Skills"
              speed={60}
              maxIterations={20}
              sequential
              revealDirection="start"
              animateOn="view"
              className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
              encryptedClassName="text-[#E53935]/40"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillSections.map((section, secIndex) => (
              <AnimatedContent
                key={section.category}
                distance={40}
                duration={0.5}
                delay={secIndex * 0.12}
                threshold={0.05}
                className="h-full"
              >
                <div className="rounded-2xl border border-[#1f1f1f] bg-[#141414] p-6 h-full">
                  <h3 className="text-sm font-body text-[#E53935] uppercase tracking-widest mb-5">
                    {section.category}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {section.skills.map((skill, skillIndex) => (
                      <FadeContent
                        key={skill}
                        blur
                        duration={600}
                        delay={200 + skillIndex * 100}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]/50" />
                          <span className="text-[#a3a3a3] font-body text-sm">
                            {skill}
                          </span>
                        </div>
                      </FadeContent>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
