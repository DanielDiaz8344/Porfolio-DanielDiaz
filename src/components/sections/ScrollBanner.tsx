import ScrollVelocity from '@/components/reactbits/ScrollVelocity';

export default function ScrollBanner() {
  return (
    <section className="py-6 bg-[#0a0a0a] border-y border-[#1f1f1f] overflow-hidden">
      <ScrollVelocity
        texts={[
          'DISEÑO GRÁFICO • BRANDING • MARKETING DIGITAL • FOTOGRAFÍA • EDICIÓN DE VIDEO • SOCIAL MEDIA •',
        ]}
        velocity={80}
        className="text-[#E53935]/80 font-heading"
        numCopies={4}
      />
    </section>
  );
}
