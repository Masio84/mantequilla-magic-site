import interior from "@/assets/interior.jpg";

export function About() {
  return (
    <section id="historia" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Nuestra historia</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-coffee-dark text-balance">
            La casa donde la mantequilla lo hace todo mágico
          </h2>
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
            <p>
              En la casa de los abuelos, entre paredes con memoria y aromas que despiertan,
              nació La Mantequilla. Luis Alfonso Aguirre soñó un lugar donde cada platillo
              llevara el amor de un hogar.
            </p>
            <p>
              Cuentan que <em className="text-accent not-italic font-medium">El Viajero</em>,
              un mago que recorre los mercados al amanecer, dejó aquí su receta más preciada:
              ingredientes 100% locales, sin atajos, sin supermercados. Solo lo que crece
              cerca y se hace con calma.
            </p>
            <p className="font-serif italic text-coffee text-lg">
              "Cada bocado, una aventura. Cada mesa, una historia."
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
            <img
              src={interior}
              alt="Interior cálido y acogedor del restaurante"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-butter px-6 py-4 rounded-lg shadow-xl">
            <p className="font-serif text-coffee-dark text-3xl">4.4 ★</p>
            <p className="text-xs text-coffee uppercase tracking-wider">470+ reseñas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
