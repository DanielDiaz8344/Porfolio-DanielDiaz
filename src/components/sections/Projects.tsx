import { useState } from 'react';
import { ExternalLink, ArrowUpRight, ChevronDown, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';

interface Project {
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  images?: string[];
  link?: string;
  linkLabel?: string;
  pdf?: string;
  video?: string;
  imageBg?: string;
  tools: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Aircool',
    tag: 'UX/UI Design',
    shortDesc:
      'Sistema de inventario moderno diseñado para reemplazar procesos obsoletos basados en Excel, priorizando la simplicidad y usabilidad.',
    fullDesc:
      'Proyecto de modernización del sistema de inventario para Aircool, una empresa que manejaba todo su inventario de manera tradicional usando Excel y procesos manuales. El desafío consistía en digitalizar y optimizar sus flujos de trabajo mediante el diseño de interfaces intuitivas y funcionales. Se desarrollaron las interfaces completas utilizando Figma, con especial atención a crear flujos de usuario sencillos y comprensibles para facilitar la transición del equipo. Se adaptó cuidadosamente la paleta de colores basándose en el logo existente de Aircool, asegurando coherencia visual y evitando la saturación que pudiera cansar la vista durante jornadas largas de trabajo. Las interfaces finales fueron documentadas y compartidas con el equipo de desarrollo para garantizar una implementación fiel al diseño.',
    image: '/projects/aircool.png',
    imageBg: '#e8e8e8',
    video: 'https://drive.google.com/file/d/1dFc3ZJCI1TDfVFUI3cIeqgc9REjR3XMZ/preview',
    tools: ['Figma'],
    tags: ['UX/UI', 'Figma'],
  },
  {
    title: 'Kyra Wallet',
    tag: 'Branding',
    shortDesc:
      'Identidad visual integral para billetera digital innovadora, incluyendo logo, banner y elementos gráficos para presencia digital.',
    fullDesc:
      'Proyecto de identidad visual integral para Kyra Wallet, una billetera digital innovadora. El desarrollo incluyó investigación orgánica del mercado fintech, análisis de competencia y definición de conceptos visuales utilizando inteligencia artificial para optimizar el proceso creativo. Se diseñó un logotipo distintivo con formas geométricas que transmiten confianza y modernidad, un banner promocional con ilustraciones vectoriales personalizadas, y elementos gráficos coherentes para la presencia digital. El uso de IA permitió explorar múltiples variaciones conceptuales y refinar rápidamente las propuestas visuales según las necesidades del cliente, logrando una identidad sólida que posiciona a Kyra Wallet como una solución financiera digital confiable y moderna.',
    image: '/projects/kyra-wallet.jpg',
    images: ['/projects/kyra-wallet.jpg', '/projects/kyra-wallet-logo.jpg', '/projects/kyra-wallet-avatar.jpg'],
    tools: ['Illustrator', 'Photoshop', 'IA'],
    tags: ['Branding', 'Identidad Visual'],
  },
  {
    title: 'Landing Page Kyra',
    tag: 'Landing Page',
    shortDesc:
      'Desarrollo completo de landing page para empresa tecnológica venezolana, aplicando psicología del consumidor y estrategias de conversión.',
    fullDesc:
      'Proyecto integral de landing page para Kyra Soluciones Venezuela, empresa líder en desarrollo web, sistemas IA y equipos tecnológicos. El proceso incluyó investigación exhaustiva sobre las necesidades del cliente, análisis de su audiencia objetivo y aplicación de principios de psicología del consumidor para maximizar conversiones. Se utilizó inteligencia artificial para optimizar el copy, la estructura visual y los elementos persuasivos. El diseño se creó utilizando Framer, Figma y Canva. El landing presenta secciones optimizadas de hero, servicios, testimonios y contacto, con un enfoque en generar confianza y credibilidad.',
    image: '/projects/landing-kyra.png',
    link: 'https://landing-kyra.vercel.app/es',
    linkLabel: 'Ver Landing',
    tools: ['Framer', 'Figma', 'Canva', 'IA'],
    tags: ['Landing', 'Web Design'],
  },
  {
    title: 'Diseño de Cartas',
    tag: 'Diseño Gráfico',
    shortDesc:
      'Cartas con temática cyberpunk retro para mazo de blackjack, combinando investigación visual y diseño digital especializado.',
    fullDesc:
      'Proyecto de diseño de cartas con temática cyberpunk retro para un mazo completo de blackjack. El proceso comenzó con investigación intensiva sobre la estética cyberpunk, analizando referencias visuales, paletas de colores características, tipografías futuristas y elementos gráficos del género. Se creó un concepto visual cohesivo que combina elementos retro-futuristas con la funcionalidad tradicional del blackjack, utilizando gradientes neón, texturas digitales y geometrías angulares propias del estilo cyberpunk. Las herramientas principales fueron Canva para la conceptualización y composición inicial, y Photoshop para refinamientos avanzados, efectos especiales y optimización final.',
    image: '/projects/cartas.png',
    tools: ['Canva', 'Photoshop'],
    tags: ['Cartas', 'Cyberpunk'],
  },
  {
    title: 'Catálogo Kyra',
    tag: 'Diseño Editorial',
    shortDesc:
      'Catálogo corporativo creado con paleta de colores oscura y integración del logo Kyra, enfocado en presentación empresarial profesional.',
    fullDesc:
      'Desarrollo de catálogo corporativo completo para presentación de servicios empresariales. El proyecto se basó en una reunión detallada con el cliente donde explicó exhaustivamente las actividades y servicios de su empresa. Se utilizó el logo de Kyra, previamente diseñado por mí, como elemento central de la identidad visual del catálogo. La paleta de colores se construyó sobre tonos oscuros complementados con los colores característicos del logo, creando una estética profesional y moderna. El diseño se realizó principalmente en Canva, aprovechando su versatilidad para composiciones complejas y gestión eficiente de elementos gráficos.',
    image: '/projects/portafolio-portada.png',
    pdf: '/projects/Manual de Marca Sube con Pepe.pdf',
    tools: ['Canva', 'Photoshop'],
    tags: ['Branding', 'Editorial'],
  },
  {
    title: 'Logo Daniel Designs',
    tag: 'Branding Personal',
    shortDesc:
      'Logo personal que refleja identidad como diseñador profesional, usando negro y rojo como paleta base.',
    fullDesc:
      'Creación de mi logo personal "Daniel Designs", un proyecto que refleja mi identidad como diseñador profesional. El proceso comenzó con la generación del concepto base utilizando inteligencia artificial, explorando diferentes enfoques tipográficos y compositivos. Posteriormente se aplicaron retoques especializados usando Canva y Photoshop para refinamientos avanzados. La paleta de colores se basó en mis dos colores favoritos: negro y rojo, creando un contraste potente que transmite elegancia y energía. El resultado es un logo limpio, moderno y memorable que funciona perfectamente en diferentes aplicaciones.',
    image: '/projects/kyra-logo.jpg',
    tools: ['Canva', 'Photoshop', 'IA'],
    tags: ['Branding', 'Logo'],
  },
  {
    title: 'Sube con Pepe',
    tag: 'Landing Page & Branding',
    shortDesc:
      'Diseño y desarrollo de landing page para app de transporte con mascota ilustrada y manual de marca completo.',
    fullDesc:
      'Diseño y desarrollo de landing page para aplicación de transporte. Creación de mascota ilustrada, manual de marca completo y diseño web responsivo con animaciones interactivas. El proyecto abarcó desde la conceptualización de la identidad visual hasta la implementación del sitio web con React y Tailwind CSS.',
    image: '/projects/sube-con-pepe.png',
    link: 'https://subeconpepe.vercel.app',
    linkLabel: 'Ver Landing',
    tools: ['Figma', 'Illustrator', 'React', 'Tailwind'],
    tags: ['Landing', 'Branding'],
  },
  {
    title: 'Zona Elite',
    tag: 'Logo Design',
    shortDesc:
      'Logotipo minimalista con estilo geométrico para marca deportiva. Concepto de lobo en hexágono con degradado cyan-púrpura.',
    fullDesc:
      'Diseño de logotipo minimalista con estilo geométrico para marca deportiva. Concepto de lobo dentro de un hexágono con degradado cyan-púrpura, transmitiendo fuerza y exclusividad. El diseño funciona en múltiples formatos y tamaños, desde favicon hasta impresión de gran formato.',
    image: '/projects/zona-elite.png',
    tools: ['Illustrator'],
    tags: ['Logo', 'Branding'],
  },
];

const INITIAL_COUNT = 5;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  const openProject = (project: Project) => {
    setSelected(project);
    setActiveImage(0);
  };

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
        <div className="flex flex-col gap-5">
          {visible.map((project, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <AnimatedContent
                key={project.title}
                distance={60}
                duration={0.6}
                delay={0.1}
                threshold={0.1}
              >
                <div
                  onClick={() => openProject(project)}
                  className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(229,57,53,0.06)] cursor-pointer"
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.03)_55%,transparent_60%)] group-hover:animate-[shimmer_1.5s_ease-in-out] pointer-events-none z-10" />

                  <div
                    className={`flex flex-col ${
                      imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Image */}
                    <div
                      className="relative md:w-[40%] aspect-video md:aspect-auto md:h-[220px] overflow-hidden"
                      style={project.imageBg ? { backgroundColor: project.imageBg } : undefined}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                          project.imageBg ? 'object-contain p-6' : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />

                      {/* Tag pill on image */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/[0.1] text-xs font-body text-[#f5f5f5]">
                        {project.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-[60%] p-5 sm:p-6 flex flex-col justify-center gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#f5f5f5] group-hover:text-[#E53935] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={20}
                          className="text-[#737373] shrink-0 mt-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        />
                      </div>

                      <p className="text-[#a3a3a3] font-body text-sm leading-relaxed line-clamp-2">
                        {project.shortDesc}
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
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>

        {/* Ver más / Ver menos button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-body font-medium text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer"
            >
              {showAll ? 'Ver menos' : 'Ver más proyectos'}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180 group-hover:-translate-y-0.5' : 'group-hover:translate-y-0.5'}`}
              />
            </button>
          </div>
        )}
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
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#141414]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/[0.08] shadow-[0_16px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-md border border-white/[0.1] text-[#737373] hover:text-[#f5f5f5] transition-colors duration-200 cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Video or Image(s) */}
              {selected.video ? (
                <div className="relative aspect-video overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-black">
                  <iframe
                    src={selected.video}
                    title={selected.title}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-video overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  <img
                    src={
                      selected.images
                        ? selected.images[activeImage]
                        : selected.image
                    }
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                </div>
              )}

              {/* Image thumbnails */}
              {selected.images && selected.images.length > 1 && (
                <div className="flex gap-2 px-6 sm:px-8 -mt-6 relative z-10">
                  {selected.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                        i === activeImage
                          ? 'border-[#E53935] shadow-[0_0_12px_rgba(229,57,53,0.3)]'
                          : 'border-white/[0.1] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${selected.title} ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-[#E53935] bg-[#E53935]/[0.08] border border-[#E53935]/15 rounded-full px-3 py-0.5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#f5f5f5]">
                  {selected.title}
                </h3>

                <p className="text-[#a3a3a3] font-body leading-relaxed mt-4">
                  {selected.fullDesc}
                </p>

                {/* Tools */}
                <div className="mt-6">
                  <span className="text-xs text-[#737373] font-body uppercase tracking-wider">
                    Herramientas
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selected.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-body text-[#a3a3a3] bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
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
                    {selected.linkLabel || 'Ver proyecto'}
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
