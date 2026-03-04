import { type ReactNode } from 'react';
import { Pencil } from 'lucide-react';
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
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremier,
  TbBrandAdobeAfterEffect,
} from 'react-icons/tb';
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

const CapCutIcon = () => (
  <svg viewBox="0 0 512 510" fill="currentColor" className="w-[1.25em] h-[1.25em]">
    <path d="M109.1 181.5c2.2-19.5 18.3-34.6 38-35.5l167.2 0a40.6 40.6 0 0130.1 17.4 42.2 42.2 0 016.4 14.9l49.1-24.4a2.2 2.2 0 013.1 1.7v27.6a4.6 4.6 0 01-2.8 4.2l-135.6 67.3 135.3 67a4.7 4.7 0 013.1 4.1v27.7a2.3 2.3 0 01-3.6 1.8c-16.1-8.2-32.5-15.9-48.5-24.2a63.5 63.5 0 01-4.3 11.2 40.8 40.8 0 01-26.1 20.1 45 45 0 01-11.2.9l-155.8 0c-3.5 0-7 0-10.5-.3-18.1-2.7-32-17.4-33.9-35.6v-26.8a5.9 5.9 0 014.1-4.9c27.8-13.7 55.5-27.6 83.4-41.3l-84.2-41.7a5.4 5.4 0 01-3.2-4.9c0-8.9-.2-17.8 0-26.7zm31 .2a10.1 10.1 0 00-9.3 5.5c-1.7 3.4-.9 7.3-1 10.9 30.6 15.1 61 30.3 91.5 45.3l90.6-44.9c0-2.7.1-5.4 0-8.2a10.2 10.2 0 00-10.1-8.7l-161.6 0zm-1 135.4c.1 3.7-.7 7.6 1.1 11a10.2 10.2 0 009.3 5.4l161.7 0a10.1 10.1 0 008.8-5.1c2-3.6 1.1-7.9 1.3-11.8l-90.8-44.9-91.4 45.3z" />
  </svg>
);

const NanoBananaIcon = () => (
  <span className="text-[1.1em] leading-none">🍌</span>
);

interface Tool {
  name: string;
  icon: ReactNode;
  color: string;
}

const toolSections: { category: string; tools: Tool[] }[] = [
  {
    category: 'Diseño',
    tools: [
      { name: 'Photoshop', icon: <TbBrandAdobePhotoshop />, color: '#31A8FF' },
      { name: 'Illustrator', icon: <TbBrandAdobeIllustrator />, color: '#FF9A00' },
      { name: 'Figma', icon: <SiFigma />, color: '#A259FF' },
      { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
    ],
  },
  {
    category: 'Video & Foto',
    tools: [
      { name: 'Premiere', icon: <TbBrandAdobePremier />, color: '#9999FF' },
      { name: 'After Effects', icon: <TbBrandAdobeAfterEffect />, color: '#9999FF' },
      { name: 'Lightroom', icon: <Abbr color="#31A8FF">Lr</Abbr>, color: '#31A8FF' },
      { name: 'CapCut', icon: <CapCutIcon />, color: '#FFFFFF' },
      { name: 'Veo 3', icon: <Abbr color="#4285F4">V3</Abbr>, color: '#4285F4' },
    ],
  },
  {
    category: 'Web & Desarrollo',
    tools: [
      { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
      { name: 'FlutterFlow', icon: <SiFlutter />, color: '#02569B' },
      { name: 'Framer', icon: <SiFramer />, color: '#0099FF' },
      { name: 'HTML/CSS', icon: <SiHtml5 />, color: '#E44D26' },
      { name: 'Pencil Dev', icon: <Pencil size={20} />, color: '#6366F1' },
    ],
  },
  {
    category: 'IA & Creación',
    tools: [
      { name: 'ChatGPT', icon: <SiOpenai />, color: '#10A37F' },
      { name: 'Claude Code', icon: <SiClaude />, color: '#D97757' },
      { name: 'Midjourney', icon: <Abbr color="#FFFFFF">Mj</Abbr>, color: '#FFFFFF' },
      { name: 'Nano Banana', icon: <NanoBananaIcon />, color: '#FFD60A' },
    ],
  },
  {
    category: 'Productividad',
    tools: [
      { name: 'Notion', icon: <SiNotion />, color: '#FFFFFF' },
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
