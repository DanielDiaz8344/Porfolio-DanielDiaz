import { ExternalLink, ArrowUpRight } from 'lucide-react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';

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
    tag: 'Branding & Identidad',
    description:
      'Identidad visual completa para empresa de soluciones tecnológicas. Diseño de logotipo con concepto de diamante, variaciones cromáticas y aplicaciones de marca en múltiples formatos.',
    image: '/projects/kyra-logo.jpg',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    title: 'Sube con Pepe',
    tag: 'Landing Page & Branding',
    description:
      'Diseño y desarrollo de landing page para aplicación de transporte. Creación de mascota ilustrada, manual de marca completo y diseño web responsivo con animaciones interactivas.',
    image: '/projects/sube-con-pepe.png',
    link: 'https://subeconpepe.vercel.app',
    tools: ['Figma', 'Illustrator', 'React', 'Tailwind'],
  },
  {
    title: 'Kyra Wallet',
    tag: 'Diseño de Producto',
    description:
      'Branding y diseño visual para billetera digital dentro del ecosistema Kyra. Banner promocional, logo de producto, avatar de marca y material gráfico para redes sociales.',
    image: '/projects/kyra-wallet.jpg',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
  },
  {
    title: 'Zona Elite',
    tag: 'Logo Design',
    description:
      'Diseño de logotipo minimalista con estilo geométrico para marca deportiva. Concepto de lobo dentro de un hexágono con degradado cyan-púrpura, transmitiendo fuerza y exclusividad.',
    image: '/projects/zona-elite.png',
    tools: ['Illustrator'],
  },
  {
    title: 'Kyra Wallet Logo',
    tag: 'Identidad de Producto',
    description:
      'Diseño de isotipo para producto digital. Ícono de billetera con el diamante Kyra integrado, optimizado para uso en apps, favicon y redes sociales.',
    image: '/projects/kyra-wallet-logo.jpg',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    title: 'Catálogos Digitales',
    tag: 'Diseño Editorial',
    description:
      'Diseño de catálogos profesionales para e-commerce, servicios tecnológicos, sistemas y páginas web. Piezas de venta con identidad visual coherente para Kyra VE Soluciones.',
    image: '/projects/kyra-wallet-avatar.jpg',
    tools: ['Photoshop', 'Illustrator', 'Canva'],
  },
  {
    title: 'Kyra VE — Variante Green',
    tag: 'Identidad Visual',
    description:
      'Extensión de la identidad de Kyra VE Soluciones con variante cromática en verde esmeralda. Adaptación del logotipo para aplicaciones específicas y submarcas del ecosistema.',
    image: '/projects/kyra-green.jpg',
    tools: ['Illustrator'],
  },
];

export default function Projects() {
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

        {/* Projects Stack */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <AnimatedContent
                key={project.title}
                distance={60}
                duration={0.6}
                delay={0.1}
                threshold={0.1}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(229,57,53,0.06)]">
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.03)_55%,transparent_60%)] group-hover:animate-[shimmer_1.5s_ease-in-out] pointer-events-none z-10" />

                  <div
                    className={`flex flex-col ${
                      imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative md:w-1/2 aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-transparent ${
                          imageLeft ? 'md:bg-gradient-to-r' : 'md:bg-gradient-to-l'
                        }`}
                      />

                      {/* Tag pill on image */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/[0.1] text-xs font-body text-[#f5f5f5]">
                        {project.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#f5f5f5] group-hover:text-[#E53935] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={20}
                          className="text-[#737373] shrink-0 mt-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        />
                      </div>

                      <p className="text-[#a3a3a3] font-body text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-body text-[#E53935]/70 bg-[#E53935]/[0.06] border border-[#E53935]/10 rounded-md px-2.5 py-1"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-2 text-sm font-body font-medium text-[#E53935] hover:text-[#FF6B6B] transition-colors duration-300 w-fit"
                        >
                          <ExternalLink size={14} />
                          Ver proyecto en vivo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
