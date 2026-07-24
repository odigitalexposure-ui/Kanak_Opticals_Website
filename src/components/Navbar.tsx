import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 80) setVisible(true);
      else if (y > last + 6) setVisible(false);
      else if (y < last - 6) setVisible(true);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            scrolled ? "glass elegant" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <Link to="/" className="group flex items-center gap-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-primary-foreground shadow-lg transition-transform group-hover:rotate-12">
                <Eye className="h-5 w-5" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="truncate font-display text-lg font-bold tracking-tight text-gradient sm:text-xl">
                  KANAK OPTICAL
                </span>
                <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:block">
                  Ramrajatala · Howrah
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{l.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/40"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </>
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Book Eye Test
              </Link>
            </nav>

            <button
              className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-border md:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
                  {links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                      activeProps={{ className: "bg-primary/15 text-primary" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
