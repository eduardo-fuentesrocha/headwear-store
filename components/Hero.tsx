import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden bg-black">
      {/* Video de Fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source
          src="/videos/hero-promo2.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Sombreamiento para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/20" />

      {/* DEGRADADO INFERIOR SÚTIL:
        Degradado suave que se funde directamente con el fondo claro u oscuro
      */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black via-white/25 dark:via-black/30 to-transparent pointer-events-none" />

      {/* Contenido / CTA */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-24">
        <div className="max-w-2xl space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/50 px-3 py-1 rounded-full backdrop-blur-md">
            Colección 2026
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
            You Only <br /> Live Once
          </h1>
          
          <p className="text-neutral-200 text-base sm:text-lg max-w-lg font-light leading-relaxed drop-shadow">
            Diseños exclusivos con bordado artesanal y sello de calidad holográfico.
          </p>

          <div className="pt-4">
            <Link
              href="#products"
              className="inline-flex items-center justify-center bg-white text-black font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Explorar Gorras
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}