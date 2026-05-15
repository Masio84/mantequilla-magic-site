import { Clock, Phone, MapPin, Info } from "lucide-react";

export function Location() {
  return (
    <section id="ubicacion" className="py-24 md:py-32 bg-butter/40 grain">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Ven a vernos</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-coffee-dark text-balance">
            Horario & Ubicación
          </h2>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-coffee-dark">Miércoles a Lunes</p>
                <p className="text-foreground/70">8:00 AM — 2:00 PM</p>
                <p className="text-sm text-foreground/50 mt-1">Cerrado los martes</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-coffee-dark">Montes Himalaya 414-A</p>
                <p className="text-foreground/70">Los Bosques, Aguascalientes, Ags.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
              <a
                href="https://wa.me/524499048659"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-coffee-dark hover:text-accent transition-colors"
              >
                +52 449 904 8659
              </a>
            </div>

            <div className="flex gap-4 p-5 bg-cream rounded-lg border border-butter-deep/30">
              <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-coffee">
                <span className="font-medium">Sin reservaciones —</span> ven cuando quieras.
                La magia llega por orden de aparición.
              </p>
            </div>
          </div>
        </div>

        <div className="aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-cream">
          <iframe
            title="Ubicación La Mantequilla Ags"
            src="https://www.google.com/maps?q=Montes+Himalaya+414-A,+Los+Bosques,+Aguascalientes&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
