import BlurText from '@/components/reactbits/BlurText';
import RotatingText from '@/components/reactbits/RotatingText';
import StarBorder from '@/components/reactbits/StarBorder';
import ClickSpark from '@/components/reactbits/ClickSpark';
import Threads from '@/components/reactbits/Threads';

export default function Hero() {
  const handleCTA = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Threads background - spread out to the edges */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.9, 0.15, 0.12]}
          amplitude={1}
          distance={0.6}
          enableMouseInteraction
        />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      {/* Strong center mask so threads don't overlap text */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,#0a0a0a_0%,transparent_100%)] md:bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#0a0a0a_0%,transparent_100%)]" />

      {/* Edge vignette */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />

      {/* Content */}
      <ClickSpark sparkColor="#E53935" sparkSize={12} sparkRadius={20} sparkCount={10} duration={500}>
        <div className="relative z-[5] flex flex-col items-center text-center px-6 gap-6 max-w-5xl mx-auto h-screen justify-center">
          <h1 className="font-heading font-bold text-[clamp(3rem,10vw,8rem)] leading-[0.95] sm:leading-[0.9] tracking-tight text-[#f5f5f5] drop-shadow-[0_0_60px_rgba(229,57,53,0.3)]">
            DANIEL DIAZ
          </h1>

          <div className="flex items-center gap-3 text-[clamp(1rem,2.5vw,1.5rem)] font-body text-[#a3a3a3]">
            <span className="w-3 h-[2px] bg-[#E53935]" />
            <RotatingText
              texts={[
                'Diseñador Gráfico',
                'Editor de Video',
                'Fotógrafo',
                'Social Media Manager',
                'Marketing Digital',
                'Community Manager',
              ]}
              rotationInterval={2500}
              mainClassName="text-[#E53935] font-heading font-semibold"
              staggerDuration={0.03}
              staggerFrom="first"
            />
            <span className="w-3 h-[2px] bg-[#E53935]" />
          </div>

          <BlurText
            text="No solo diseño. Creo marcas."
            className="text-[clamp(1.2rem,3vw,2rem)] font-heading font-medium text-[#f5f5f5]/90"
            delay={150}
            animateBy="words"
            direction="bottom"
          />

          <div className="mt-4">
            <StarBorder
              as="button"
              color="#E53935"
              speed="5s"
              className="cursor-pointer"
              onClick={handleCTA}
            >
              <span className="font-heading font-semibold tracking-wide">Hablemos</span>
            </StarBorder>
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}
