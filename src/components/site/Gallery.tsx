import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/dish-pancakes.jpg";
import g5 from "@/assets/dish-bread.jpg";
import g6 from "@/assets/dish-coffee.jpg";
import g7 from "@/assets/dish-chocolate.jpg";
import g8 from "@/assets/dish-cake.jpg";
import g9 from "@/assets/dish-chilaquiles.jpg";
import g10 from "@/assets/dish-waffles.jpg";
import g11 from "@/assets/interior.jpg";
import g12 from "@/assets/dish-eggs.jpg";

const photos: { src: string; caption: string }[] = [
  { src: g1, caption: "Mantequilla en mano" },
  { src: g2, caption: "Una mesa, un instante" },
  { src: g3, caption: "El arte del barista" },
  { src: g4, caption: "Panqués que abrazan" },
  { src: g5, caption: "Pan del día" },
  { src: g6, caption: "Café como debe ser" },
  { src: g7, caption: "Chocolate de olla" },
  { src: g8, caption: "Receta de la abuela" },
  { src: g9, caption: "Verde como el campo" },
  { src: g10, caption: "Domingos felices" },
  { src: g11, caption: "La casa que nos vio crecer" },
  { src: g12, caption: "Yema dorada" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Instagram · @la_mantequilla_ags</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-coffee-dark text-balance">
            Nuestros Momentos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee-dark/0 group-hover:bg-coffee-dark/50 transition-colors flex items-end p-3">
                <span className="text-cream text-xs font-serif italic opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] bg-coffee-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream p-2"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            <X className="h-7 w-7" />
          </button>
          <figure className="max-w-4xl">
            <img src={photos[selected].src} alt={photos[selected].caption} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="text-center text-cream/80 mt-4 font-serif italic">
              {photos[selected].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
