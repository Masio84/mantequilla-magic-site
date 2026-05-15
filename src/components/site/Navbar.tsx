import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#historia", label: "Historia" },
  { href: "#menu", label: "Menú" },
  { href: "#ubicacion", label: "Horario & Ubicación" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2" aria-label="La Mantequilla — Inicio">
          <img src={logo} alt="" aria-hidden="true" className="h-10 md:h-12 w-auto -my-2" />
          <span
            className={`font-serif text-lg md:text-xl leading-none transition-colors ${
              scrolled ? "text-coffee-dark" : "text-cream"
            }`}
          >
            La Mantequilla
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-foreground hover:text-accent" : "text-cream hover:text-butter"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/la_mantequilla_ags"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={`p-2 rounded-full transition-colors ${
              scrolled ? "text-foreground hover:text-accent" : "text-cream hover:text-butter"
            }`}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-cream"}`}
            aria-label="Menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
