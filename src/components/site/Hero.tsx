import hero from "@/assets/hero.jpg";
import { ArrowDown, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <img
        src={hero}
        alt="Pan recién horneado, mantequilla y café en La Mantequilla Ags"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/50 to-coffee-dark/85" />

      <div className="relative z-10 text-center px-6 max-w-4xl fade-up">
        <p className="text-butter uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
          The Breakfast Club · Aguascalientes
        </p>
        <h1 className="font-serif text-cream text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-balance">
          La Mantequilla
        </h1>
        <p className="mt-6 text-cream/90 text-lg md:text-2xl font-serif italic">
          Sabores para compartir
        </p>
        <p className="mt-3 text-cream/70 text-sm md:text-base max-w-xl mx-auto">
          Una experiencia en cada bocado.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-butter text-coffee-dark font-medium hover:bg-butter-deep transition-colors"
          >
            Ver Menú <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#ubicacion"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition-colors"
          >
            <MapPin className="h-4 w-4" /> Ubicación
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/60">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
