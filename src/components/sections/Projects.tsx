import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { AnimatePresence, motion } from 'motion/react';

interface Project {
  title: string;
  tag: string;
  description: string;
  image: string;
  link?: string;
  tools: string[];
}

const projects: Project[] = [
  {
    title: 'Kyra VE Soluciones',
    tag: 'Branding',
    description:
      'Identidad visual completa para empresa de soluciones tecnológicas. Diseño de logotipo, variaciones de color y aplicaciones de marca.',
    image: '/projects/kyra-logo.jpg',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    title: 'Kyra Wallet',
    tag: 'Diseño de Producto',
    description:
      'Branding y diseño visual para billetera digital dentro del ecosistema Kyra. Banner promocional, avatar e identidad de producto.',
    image: '/projects/kyra-wallet.jpg',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
  },
  {
    title: 'Zona Elite',
    tag: 'Logo Design',
    description:
      'Diseño de logotipo minimalista con estilo geométrico para marca deportiva. Concepto de lobo en hexágono con degradado cyan-púrpura.',
    image: '/projects/zona-elite.png',
    tools: ['Illustrator'],
  },
  {
    title: 'Sube con Pepe',
    tag: 'Landing Page',
    description:
      'Diseño y desarrollo de landing page para app de transporte. Incluye manual de marca, mascota ilustrada y diseño web responsivo.',
    image: '/projects/sube-con-pepe.png',
    link: 'https://subeconpepe.vercel.app',
    tools: ['Figma', 'Illustrator', 'HTML/CSS'],
  },
  {
    title: 'Catálogos Digitales',
    tag: 'Diseño Editorial',
    description:
      'Diseño de catálogos profesionales para e-commerce, servicios, sistemas y páginas web. Piezas de venta para Kyra VE Soluciones.',
    image: '/projects/kyra-wallet-avatar.jpg',
    tools: ['Photoshop', 'Illustrator', 'Canva'],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-14">
          <DecryptedText
            text="Proyectos"
            speed={60}
            maxIterations={20}
            sequential
            revealDirection="start"
            animateOn="view"
            className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
            encryptedClassName="text-[#E53935]/40"
          />
        </div>

        {/* Project Grid - Bento-like */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.title}
              distance={60}
              duration={0.6}
              delay={index * 0.1}
              threshold={0.05}
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <button
                onClick={() => setSelected(project)}
                className={`group relative w-full overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(229,57,53,0.08)] text-left cursor-pointer ${
                  index === 0 ? 'md:grid md:grid-cols-2' : 'flex flex-col'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? 'aspect-video md:aspect-auto md:h-full'
                      : 'aspect-video'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />

                  {/* Tag pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/[0.1] text-xs font-body text-[#f5f5f5]">
                    {project.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-heading font-semibold text-[#f5f5f5] group-hover:text-[#E53935] transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ExternalLink
                        size={16}
                        className="text-[#737373] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                  </div>

                  <p className="text-sm text-[#737373] font-body leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-body text-[#E53935]/70 bg-[#E53935]/[0.06] border border-[#E53935]/10 rounded-md px-2 py-0.5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </AnimatedContent>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#141414]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/[0.08] shadow-[0_16px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-md border border-white/[0.1] text-[#737373] hover:text-[#f5f5f5] transition-colors duration-200"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 -mt-8 relative">
                <span className="text-xs text-[#E53935] font-body uppercase tracking-wider">
                  {selected.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#f5f5f5] mt-2">
                  {selected.title}
                </h3>
                <p className="text-[#a3a3a3] font-body leading-relaxed mt-4">
                  {selected.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {selected.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-body text-[#E53935]/80 bg-[#E53935]/[0.08] border border-[#E53935]/15 rounded-lg px-3 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-[#E53935]/10 border border-[#E53935]/20 text-[#E53935] text-sm font-body font-medium hover:bg-[#E53935]/20 hover:border-[#E53935]/40 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Ver proyecto
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
