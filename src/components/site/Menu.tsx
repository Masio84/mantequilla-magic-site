import { useState } from "react";
import pancakes from "@/assets/dish-pancakes.jpg";
import waffles from "@/assets/dish-waffles.jpg";
import chilaquiles from "@/assets/dish-chilaquiles.jpg";
import eggs from "@/assets/dish-eggs.jpg";
import bread from "@/assets/dish-bread.jpg";
import cake from "@/assets/dish-cake.jpg";
import coffee from "@/assets/dish-coffee.jpg";
import chocolate from "@/assets/dish-chocolate.jpg";
import juice from "@/assets/dish-juice.jpg";

type Dish = { name: string; desc: string; img: string };

const data: Record<string, Dish[]> = {
  "Desayunos Fuertes": [
    { name: "Panqués de la Casa", desc: "Esponjados, dorados, con mantequilla derretida y miel de maple natural.", img: pancakes },
    { name: "Waffles de Frutos Rojos", desc: "Crocantes por fuera, suaves por dentro. Fresas frescas y crema batida en casa.", img: waffles },
    { name: "Chilaquiles Verdes", desc: "Salsa de tomate verde asado, huevo pochado, queso fresco y crema espesa.", img: chilaquiles },
    { name: "Huevos Benedictinos", desc: "Sobre pan recién horneado, holandesa cremosa y cebollín del huerto.", img: eggs },
  ],
  "Panes & Postres": [
    { name: "Pan del Día", desc: "Hogaza recién salida del horno. Costra crujiente, miga aireada. Para llevar a casa.", img: bread },
    { name: "Pastel de Zanahoria", desc: "Especias suaves, glaseado de queso crema. Receta de la abuela.", img: cake },
  ],
  "Bebidas": [
    { name: "Café de Especialidad", desc: "Grano de productores locales, tostado en lotes pequeños. Métodos al gusto.", img: coffee },
    { name: "Chocolate de Olla", desc: "Cacao mexicano, canela y un toque de piloncillo. Servido en jarrito de barro.", img: chocolate },
    { name: "Jugo del Día", desc: "Frutas frescas exprimidas en el momento. Pregunta por la combinación de hoy.", img: juice },
  ],
};

const tabs = Object.keys(data);

export function Menu() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">La carta</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-coffee-dark text-balance">
            Nuestros Platillos
          </h2>
          <p className="mt-4 text-foreground/70 italic font-serif">Cada plato es una historia</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === t
                  ? "bg-coffee-dark text-cream shadow-md"
                  : "bg-muted text-foreground/70 hover:bg-butter hover:text-coffee-dark"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data[active].map((d) => (
            <article
              key={d.name}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-coffee-dark mb-2">{d.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
