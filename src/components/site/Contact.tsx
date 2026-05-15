import { MapPin, MessageCircle, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-butter">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-coffee-dark text-balance">
          ¿Quieres visitarnos?
        </h2>
        <p className="mt-6 text-coffee text-lg font-serif italic">
          La mesa está puesta. El café, listo. Solo faltas tú.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Montes+Himalaya+414-A,+Los+Bosques,+Aguascalientes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-coffee-dark text-cream font-medium hover:bg-coffee transition-colors"
          >
            <MapPin className="h-4 w-4" /> Ubicación en Maps
          </a>
          <a
            href="https://wa.me/524499048659"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream text-coffee-dark font-medium hover:bg-background transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="https://instagram.com/la_mantequilla_ags"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-coffee-dark/30 text-coffee-dark hover:bg-coffee-dark hover:text-cream transition-colors"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
