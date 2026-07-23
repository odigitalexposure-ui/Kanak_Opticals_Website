import { Link } from "@tanstack/react-router";
import { Eye, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-primary-foreground shadow-lg">
              <Eye className="h-6 w-6" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="font-display text-2xl font-bold text-gradient">KANAK OPTICAL</span>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Since decades · Howrah
              </span>
            </span>
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            Premium eyewear, expert eye testing and trusted service — right at Ramrajatala Station Road.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:bg-primary/20 hover:text-primary"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Explore</h4>
          <ul className="space-y-2 text-sm">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Reach us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Ramrajatala Station Road, Howrah, WB 711104</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+919874578821" className="hover:text-primary">+91 98745 78821</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:asimbera66710@gmail.com" className="hover:text-primary">asimbera66710@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Banner */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>© {new Date().getFullYear()} Kanak Optical · All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-1">
            <span>Built, developed &amp; designed by</span>
            <a
              href="#"
              className="rounded-full bg-gold px-3 py-1 font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105"
            >
              DeosTeam Kolkata
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
