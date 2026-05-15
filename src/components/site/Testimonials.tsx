import { Star } from "lucide-react";

const reviews = [
  {
    name: "María Fernanda",
    text: "El mejor desayuno de Aguascalientes. Cada detalle, desde el café hasta el pan, está hecho con amor. La atmósfera te transporta.",
    source: "Google Reviews",
  },
  {
    name: "Carlos Reyes",
    text: "Vale cada minuto de espera. Los chilaquiles son una experiencia. Se siente como desayunar en casa de la abuela.",
    source: "Google Reviews",
  },
  {
    name: "Ana Lucía",
    text: "Un rinconcito mágico. Los panqués con mantequilla y la atención de los meseros hacen de la mañana algo especial.",
    source: "Instagram",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-coffee-dark text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-butter uppercase tracking-[0.3em] text-xs mb-4">Reseñas</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream text-balance">
            Lo que dicen quienes nos visitan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="p-8 rounded-xl border border-cream/10 bg-cream/5 hover:bg-cream/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-butter text-butter" />
                ))}
              </div>
              <p className="text-cream/85 leading-relaxed font-serif italic">"{r.text}"</p>
              <footer className="mt-6">
                <p className="font-medium text-cream">{r.name}</p>
                <p className="text-xs text-cream/50 mt-1">{r.source}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
