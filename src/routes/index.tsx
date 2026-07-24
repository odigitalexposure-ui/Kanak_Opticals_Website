import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import g6 from "@/assets/gallery-6.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanak Optical · Premium Eyewear in Ramrajatala, Howrah" },
      {
        name: "description",
        content:
          "Kanak Optical at Ramrajatala Station Road, Howrah — designer frames, expert eye testing and trusted service since decades.",
      },
      { property: "og:title", content: "Kanak Optical · Premium Eyewear in Howrah" },
      { property: "og:description", content: "Designer frames, expert eye tests and honest service at Ramrajatala Station Road." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${g6})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 -z-10 bg-hero opacity-60 mix-blend-multiply" />

        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col items-start justify-center gap-8 px-4 pb-24 pt-40 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.25em] text-primary font-semibold"
          >
            <Sparkles className="h-4 w-4" /> Premium Eyewear · Est. Howrah
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">See the world</span>
            <br />
            <span className="text-gradient-gold">in perfect clarity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl"
          >
            From Calvin Klein to IDEE and Scott — discover designer frames, advanced optical lenses, and clinical eye-care expertise at Ramrajatala Station Road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Book an Eye Test <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-primary/15 hover:text-primary"
            >
              View Collection
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 grid w-full max-w-3xl grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              { k: "25+", v: "Years" },
              { k: "10k+", v: "Happy Eyes" },
              { k: "50+", v: "Top Brands" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl glass px-4 py-5 text-center transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-gradient-gold sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inserted Landing Page Sections */}
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      
    </SiteLayout>
  );
}
