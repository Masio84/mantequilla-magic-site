import logo from "@/assets/logo.png";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream/80 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <img src={logo} alt="La Mantequilla" className="h-20 w-auto mx-auto" />

        <div className="my-8 h-px bg-cream/15 max-w-md mx-auto" />

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm">
          <div>
            <p className="text-butter font-medium mb-1">Horario</p>
            <p>Mié – Lun · 8am – 2pm</p>
            <p className="text-cream/50 text-xs">Cerrado martes</p>
          </div>
          <div>
            <p className="text-butter font-medium mb-1">Ubicación</p>
            <p>Montes Himalaya 414-A</p>
            <p className="text-cream/50 text-xs">Los Bosques, Aguascalientes</p>
          </div>
          <div>
            <p className="text-butter font-medium mb-1">Contacto</p>
            <a href="https://wa.me/524499048659" className="hover:text-butter">+52 449 904 8659</a>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <a href="https://instagram.com/la_mantequilla_ags" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-butter">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Montes+Himalaya+414-A,+Los+Bosques,+Aguascalientes" target="_blank" rel="noreferrer" aria-label="Google Maps" className="hover:text-butter">
            <MapPin className="h-5 w-5" />
          </a>
          <a href="https://wa.me/524499048659" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-butter">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-10 text-xs text-cream/50">
          © 2025 La Mantequilla Ags. Sabores para compartir.
        </p>
        <p className="text-xs text-cream/40 mt-1">Hecho con ❤️ y mantequilla</p>
      </div>
    </footer>
  );
}
