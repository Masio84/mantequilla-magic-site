import { Wheat, Sparkles, Heart } from "lucide-react";

const items = [
  {
    icon: Wheat,
    title: "Ingredientes Locales",
    text: "100% de productores cercanos. Sin pesticidas, sin supermercados. Solo lo que la tierra nos regala.",
  },
  {
    icon: Sparkles,
    title: "Experiencia Única",
    text: "La experiencia física es sagrada. No entregamos a domicilio. Ven, siéntate y siente.",
  },
  {
    icon: Heart,
    title: "Hecho con Corazón",
    text: "Cada platillo contiene el amor de un hogar. Recetas mágicas, sabores que recuerdas.",
  },
];

export function Values() {
  return (
    <section className="py-20 md:py-28 bg-coffee-dark text-cream grain relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-butter uppercase tracking-[0.3em] text-xs mb-4">Lo que nos hace</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream text-balance">
            Tres ingredientes que nunca faltan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="text-center p-8 rounded-xl border border-cream/10 hover:border-butter/40 hover:bg-cream/5 transition-all"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-butter text-coffee-dark mb-6">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-cream">{it.title}</h3>
              <p className="text-cream/70 leading-relaxed text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
