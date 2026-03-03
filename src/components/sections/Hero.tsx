import BlurText from '@/components/reactbits/BlurText';
import RotatingText from '@/components/reactbits/RotatingText';
import StarBorder from '@/components/reactbits/StarBorder';
import ClickSpark from '@/components/reactbits/ClickSpark';
import Ribbons from '@/components/reactbits/Ribbons';

export default function Hero() {
  const handleCTA = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Ribbons Background */}
      <div className="absolute inset-0 z-0">
        <Ribbons
          colors={['#E53935', '#8B0000', '#FF6B6B', '#FF2D2D']}
          baseSpring={0.03}
          baseFriction={0.9}
          baseThickness={20}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/80" />

      {/* Content */}
      <ClickSpark sparkColor="#E53935" sparkSize={12} sparkRadius={20} sparkCount={10} duration={500}>
        <div className="relative z-[2] flex flex-col items-center text-center px-6 gap-6 max-w-5xl mx-auto h-screen justify-center">
          {/* Name */}
          <h1 className="font-heading font-bold text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-[#f5f5f5]">
            DANIEL DIAZ
          </h1>

          {/* Rotating Roles */}
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

          {/* Slogan */}
          <BlurText
            text="No solo diseño. Creo marcas."
            className="text-[clamp(1.2rem,3vw,2rem)] font-heading font-medium text-[#f5f5f5]/90"
            delay={150}
            animateBy="words"
            direction="bottom"
          />

          {/* CTA */}
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

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-[#737373] font-body">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#E53935] to-transparent" />
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}
