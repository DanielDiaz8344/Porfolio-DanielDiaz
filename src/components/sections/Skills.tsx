import DecryptedText from '@/components/reactbits/DecryptedText';
import AnimatedContent from '@/components/reactbits/AnimatedContent';

const skills = [
  { name: 'Photoshop', abbr: 'Ps', color: '#31A8FF' },
  { name: 'Illustrator', abbr: 'Ai', color: '#FF9A00' },
  { name: 'Lightroom', abbr: 'Lr', color: '#31A8FF' },
  { name: 'Premiere', abbr: 'Pr', color: '#9999FF' },
  { name: 'After Effects', abbr: 'Ae', color: '#9999FF' },
  { name: 'Figma', abbr: 'Fi', color: '#A259FF' },
  { name: 'Framer', abbr: 'Fr', color: '#0099FF' },
  { name: 'WordPress', abbr: 'Wp', color: '#21759B' },
  { name: 'FlutterFlow', abbr: 'Ff', color: '#02569B' },
  { name: 'CapCut', abbr: 'Cc', color: '#FFFFFF' },
  { name: 'Canva', abbr: 'Cv', color: '#00C4CC' },
  { name: 'HTML/CSS', abbr: '</>', color: '#E44D26' },
  { name: 'ChatGPT', abbr: 'AI', color: '#10A37F' },
  { name: 'Midjourney', abbr: 'Mj', color: '#FFFFFF' },
  { name: 'Branding', abbr: 'Br', color: '#E53935' },
  { name: 'UI/UX', abbr: 'Ux', color: '#FF6B6B' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <DecryptedText
            text="Herramientas y Skills"
            speed={60}
            maxIterations={20}
            sequential
            revealDirection="start"
            animateOn="view"
            className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-[#f5f5f5]"
            encryptedClassName="text-[#E53935]/40"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <AnimatedContent
              key={skill.name}
              distance={50}
              duration={0.5}
              delay={index * 0.05}
              threshold={0.05}
              className="h-full"
            >
              <div className="group relative h-full rounded-xl bg-[#141414] border border-[#1f1f1f] p-5 flex flex-col items-center gap-3 transition-all duration-500 hover:border-[#E53935]/30 hover:bg-[#161616]">
                {/* Abbreviation icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-heading font-bold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,57,53,0.2)]"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                    border: `1px solid ${skill.color}30`,
                  }}
                >
                  {skill.abbr}
                </div>

                {/* Name */}
                <span className="text-sm font-body text-[#737373] group-hover:text-[#a3a3a3] transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
