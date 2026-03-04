import { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, ChevronDown, X, Loader2, FileText } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';

interface CatalogItem {
  label: string;
  url: string;
}

interface Project {
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  images?: string[];
  link?: string;
  linkLabel?: string;
  catalogs?: CatalogItem[];
  video?: string;
  imageBg?: string;
  tools: string[];
  tags: string[];
}

const projects: Project[] = [
  // 1. PRIMACÍA — Proyecto más completo (diseño + dev + branding + sitio live)
  {
    title: 'Sube con Pepe',
    tag: 'Landing Page & Branding',
    shortDesc:
      'Diseño y desarrollo de landing page para app de transporte con mascota ilustrada y manual de marca completo.',
    fullDesc:
      'Diseño y desarrollo de landing page para Sube con Pepe, una aplicación de transporte. El proyecto abarcó desde la conceptualización de la identidad visual —incluyendo la creación de una mascota ilustrada— hasta la implementación del sitio web con React y Tailwind CSS. Se diseñó un manual de marca completo que define la paleta de colores, tipografías, usos del logo y lineamientos gráficos. La landing page cuenta con diseño responsivo y animaciones interactivas que refuerzan la personalidad de la marca.',
    image: '/projects/sube-con-pepe-landing.png',
    link: 'https://subeconpepe.vercel.app',
    linkLabel: 'Ver Landing',
    catalogs: [
      { label: 'Manual de Marca', url: '/projects/Manual de Marca Sube con Pepe.pdf' },
    ],
    tools: ['Figma', 'Illustrator', 'React', 'Tailwind'],
    tags: ['Landing', 'Branding'],
  },
  // 2. Landing SIE — producto tech con IA
  {
    title: 'SIE',
    tag: 'Landing Page',
    shortDesc:
      'Landing page para Sistema Inteligente Empresarial, un ERP multiplataforma de nueva generación desarrollado en Flutter.',
    fullDesc:
      'Diseño y desarrollo de landing page para SIE (Sistema Inteligente Empresarial), un ERP multiplataforma con módulos de Cajas de Ahorro, Gestión de Condominios y más de 159 módulos planificados. La landing fue creada utilizando Claude AI y Pencil Dev, logrando un diseño limpio y profesional con secciones de servicios, características, beneficios y contacto. El sitio comunica la propuesta de valor del producto: funcionalidad offline-first, seguridad RLS y disponibilidad en 6 plataformas.',
    image: '/projects/sie-landing.png',
    link: 'https://landing-page-sie.vercel.app',
    linkLabel: 'Ver Landing',
    tools: ['Claude AI', 'Pencil Dev'],
    tags: ['Landing', 'ERP', 'IA'],
  },
  // 3. UX/UI con video — muestra proceso profesional
  {
    title: 'Aircool',
    tag: 'UX/UI Design',
    shortDesc:
      'Sistema de inventario moderno diseñado para reemplazar procesos obsoletos basados en Excel, priorizando la simplicidad y usabilidad.',
    fullDesc:
      'Modernización del sistema de inventario para Aircool, reemplazando procesos manuales en Excel por interfaces digitales intuitivas. Se diseñaron flujos completos en Figma con una paleta adaptada del logo existente, priorizando legibilidad y bajo cansancio visual para jornadas extensas.',
    image: '/projects/aircool.png',
    imageBg: '#0a0a0a',
    video: 'https://drive.google.com/file/d/1dFc3ZJCI1TDfVFUI3cIeqgc9REjR3XMZ/preview',
    tools: ['Figma'],
    tags: ['UX/UI', 'Figma'],
  },
  // 3. CONTRASTE — Content creation rompe expectativas, muestra versatilidad
  {
    title: 'Zona Elite TikTok',
    tag: 'Content Creation',
    shortDesc:
      'Creación de contenido para TikTok de marca deportiva: guion, grabación, edición y publicación con enfoque en storytelling.',
    fullDesc:
      'Gestión integral del contenido audiovisual para la cuenta de TikTok de Zona Elite (@zonaeliteve). El proceso abarca desde la conceptualización y escritura de guiones con técnicas de storytelling hasta la grabación, edición y publicación. Cada pieza se diseña para captar atención en los primeros segundos, mantener el engagement con narrativas dinámicas y cerrar con llamados a la acción efectivos. Se trabaja con tendencias actuales de la plataforma, transiciones creativas, música estratégica y copy persuasivo. El objetivo es posicionar a Zona Elite como referente en el nicho deportivo, generando comunidad y reconocimiento de marca a través de contenido auténtico y de alto impacto.',
    image: '/projects/zona-elite-tiktok.gif',
    link: 'https://www.tiktok.com/@zonaeliteve',
    linkLabel: 'Ver TikTok',
    tools: ['CapCut', 'Canva', 'TikTok'],
    tags: ['Content Creation', 'Storytelling', 'Video'],
  },
  // 4. Otro sitio live — refuerza capacidad web
  {
    title: 'Landing Page Kyra',
    tag: 'Landing Page',
    shortDesc:
      'Desarrollo completo de landing page para empresa tecnológica venezolana, aplicando psicología del consumidor y estrategias de conversión.',
    fullDesc:
      'Landing page para Kyra Soluciones Venezuela, empresa de desarrollo web y sistemas IA. Se analizó la audiencia objetivo y se aplicaron principios de psicología del consumidor para maximizar conversiones. Secciones de hero, servicios, testimonios y contacto optimizadas para generar confianza.',
    image: '/projects/kyra-landing.png',
    link: 'https://landing-kyra.vercel.app/es',
    linkLabel: 'Ver Landing',
    tools: ['Framer', 'Figma', 'Canva', 'IA'],
    tags: ['Landing', 'Web Design'],
  },
  // 5. Branding sólido — cierra los 5 visibles con identidad visual
  {
    title: 'Kyra Wallet',
    tag: 'Branding',
    shortDesc:
      'Identidad visual integral para billetera digital innovadora, incluyendo logo, banner y elementos gráficos para presencia digital.',
    fullDesc:
      'Identidad visual para Kyra Wallet, billetera digital fintech. Investigación de mercado, análisis de competencia y creación de logotipo con formas geométricas que transmiten confianza. Se diseñaron banner promocional, ilustraciones vectoriales y elementos gráficos coherentes para toda la presencia digital.',
    image: '/projects/kyra-wallet.jpg',
    images: ['/projects/kyra-wallet.jpg', '/projects/kyra-wallet-logo.jpg', '/projects/kyra-wallet-avatar.jpg'],
    tools: ['Illustrator', 'Photoshop', 'IA'],
    tags: ['Branding', 'Identidad Visual'],
  },
  // --- VER MÁS ---
  // 6. Creativo/sorpresa — mantiene interés
  {
    title: 'Diseño de Cartas',
    tag: 'Diseño Gráfico',
    shortDesc:
      'Cartas con temática cyberpunk retro para mazo de blackjack, combinando investigación visual y diseño digital especializado.',
    fullDesc:
      'Mazo completo de blackjack con temática cyberpunk retro. Investigación de referencias visuales del género para crear un concepto cohesivo con gradientes neón, texturas digitales y geometrías angulares. Cada carta combina funcionalidad tradicional con estética retro-futurista.',
    image: '/projects/cartas.png',
    tools: ['Canva', 'Photoshop'],
    tags: ['Cartas', 'Cyberpunk'],
  },
  // 7. Volumen de trabajo — demuestra confianza del cliente
  {
    title: 'Catálogos Kyra',
    tag: 'Diseño Editorial',
    shortDesc:
      'Colección de catálogos corporativos para Kyra Soluciones, abarcando servicios, e-commerce, sistemas, páginas web y empleado virtual.',
    fullDesc:
      'Desarrollo de una colección completa de catálogos corporativos para Kyra Soluciones Venezuela. Cada catálogo fue diseñado tras reuniones detalladas con el cliente para comprender a fondo cada línea de servicio. Se utilizó el logo de Kyra como elemento central de identidad visual, con una paleta de colores oscura complementada con los colores característicos de la marca. Cada catálogo mantiene coherencia visual pero con personalidad propia según su área: e-commerce, desarrollo de sistemas, páginas web, empleado virtual y servicios generales.',
    image: '/projects/portafolio-portada.png',
    catalogs: [
      { label: 'Servicios', url: '/projects/catalogo-servicios.pdf' },
      { label: 'E-Commerce', url: '/projects/catalogo-ecommerce.pdf' },
      { label: 'Sistemas', url: '/projects/catalogo-sistemas.pdf' },
      { label: 'Página Web', url: '/projects/catalogo-pagina-web.pdf' },
      { label: 'Empleado Virtual', url: '/projects/catalogo-empleado-virtual.pdf' },
    ],
    tools: ['Canva', 'Photoshop'],
    tags: ['Branding', 'Editorial', 'Catálogos'],
  },
  // 8. Logo limpio
  {
    title: 'Zona Elite',
    tag: 'Logo Design',
    shortDesc:
      'Logotipo geométrico de lobo enmarcado en hexágono con degradado cyan a púrpura, diseñado para marca deportiva premium.',
    fullDesc:
      'Logo para Zona Elite, marca deportiva de alto rendimiento. El lobo simboliza liderazgo y disciplina, enmarcado en un hexágono con degradado cyan-púrpura que aporta modernidad. Entregado en versiones para digital e impreso.',
    image: '/projects/zona-elite.png',
    imageBg: '#0a0a0a',
    tools: ['Illustrator'],
    tags: ['Logo', 'Branding'],
  },
  // 9. RECENCIA — Catálogo personal = CTA natural hacia contratación
  {
    title: 'Catálogo Daniel Diaz',
    tag: 'Diseño Editorial',
    shortDesc:
      'Catálogo profesional de servicios creativos propios: diseño web, branding, editorial, publicidad impresa y digital.',
    fullDesc:
      'Catálogo de 6 páginas con mi oferta de servicios: diseño web, branding, editorial y publicidad. Cierra con un flujo de cotización claro: videollamada, propuesta en 48h y arranque del proyecto.',
    image: '/projects/catalogo-daniel-portada.png',
    catalogs: [
      { label: 'Ver Catálogo', url: '/projects/catalogo-daniel-diaz.pdf' },
    ],
    tools: ['Canva', 'Photoshop'],
    tags: ['Editorial', 'Servicios'],
  },
];

const INITIAL_COUNT = 5;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (selected) {
      window.__lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      window.__lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = '';
    };
  }, [selected]);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  const openProject = (project: Project) => {
    setSelected(project);
    setActiveImage(0);
    setVideoLoaded(false);
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
            transition={{ duration: 0.25 }}
            data-lenis-prevent
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overscroll-contain"
          >
            {/* Backdrop with ambient glow */}
            <div
              className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md"
              onClick={() => setSelected(null)}
            />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E53935]/[0.04] rounded-full blur-[120px] pointer-events-none" />

            {/* Modal card - liquid glass */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              data-lenis-prevent
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain bg-white/[0.04] backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/[0.08] shadow-[0_16px_80px_rgba(0,0,0,0.5)]"
            >
              {/* Top red accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/30 to-transparent rounded-t-3xl" />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] text-[#737373] hover:text-[#E53935] hover:border-[#E53935]/30 hover:bg-[#E53935]/[0.06] transition-all duration-300 cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Video or Image(s) */}
              {selected.video ? (
                <div className="relative aspect-video overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-black">
                  {/* Loading skeleton */}
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#111]">
                      <Loader2 size={32} className="text-[#E53935] animate-spin" />
                      <span className="text-xs text-[#737373] font-body">Cargando video...</span>
                    </div>
                  )}
                  <iframe
                    src={selected.video}
                    title={selected.title}
                    className={`w-full h-full transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    onLoad={() => setVideoLoaded(true)}
                  />
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-[#111] flex items-center justify-center max-h-[50vh]">
                  <img
                    src={
                      selected.images
                        ? selected.images[activeImage]
                        : selected.image
                    }
                    alt={selected.title}
                    className="w-full max-h-[50vh] object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
                </div>
              )}

              {/* Image thumbnails */}
              {!selected.video && selected.images && selected.images.length > 1 && (
                <div className="flex gap-2 px-6 sm:px-8 -mt-8 relative z-10">
                  {selected.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(i)}
                      className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer backdrop-blur-md shrink-0 ${
                        i === activeImage
                          ? 'border-[#E53935] shadow-[0_0_16px_rgba(229,57,53,0.3)] scale-105'
                          : 'border-white/[0.08] opacity-50 hover:opacity-100 hover:border-white/[0.2]'
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
                {/* Tag + Title */}
                <span className="text-xs text-[#E53935] font-body uppercase tracking-widest">
                  {selected.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#f5f5f5] mt-2">
                  {selected.title}
                </h3>

                {/* CTA Link - prominent position */}
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 mt-5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#E53935] text-white text-sm font-body font-semibold hover:bg-[#d32f2f] hover:shadow-[0_0_30px_rgba(229,57,53,0.25)] active:scale-[0.98] transition-all duration-300"
                  >
                    <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    {selected.linkLabel || 'Ver proyecto'}
                  </a>
                )}

                {/* Catalogs grid */}
                {selected.catalogs && selected.catalogs.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5">
                    {selected.catalogs.map((cat) => (
                      <a
                        key={cat.url}
                        href={cat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-[#E53935]/10 hover:border-[#E53935]/30 transition-all duration-300"
                      >
                        <FileText size={16} className="text-[#E53935] shrink-0" />
                        <span className="text-xs font-body text-[#a3a3a3] group-hover:text-[#f5f5f5] transition-colors duration-300 truncate">
                          {cat.label}
                        </span>
                      </a>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#E53935] to-transparent mt-5 mb-5" />

                {/* Description */}
                <p className="text-[#a3a3a3] font-body text-sm sm:text-base leading-relaxed">
                  {selected.fullDesc}
                </p>

                {/* Tags + Tools row */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mt-6 pt-6 border-t border-white/[0.06]">
                  {/* Tags */}
                  <div className="flex-1">
                    <span className="text-[10px] text-[#737373] font-body uppercase tracking-widest">
                      Categorías
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selected.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-body text-[#E53935]/80 bg-[#E53935]/[0.06] border border-[#E53935]/10 rounded-full px-3 py-1"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="flex-1">
                    <span className="text-[10px] text-[#737373] font-body uppercase tracking-widest">
                      Herramientas
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selected.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-body text-[#a3a3a3] bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
