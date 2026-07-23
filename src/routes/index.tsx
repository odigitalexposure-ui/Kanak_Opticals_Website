import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Eye, Sparkles } from "lucide-react";
import storefront from "@/assets/kanak-storefront.png.asset.json";
import { SiteLayout } from "@/components/SiteLayout";

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
          style={{ backgroundImage: `url(${storefront.url})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 -z-10 bg-hero opacity-60 mix-blend-multiply" />

        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col items-start justify-center gap-8 px-4 pb-24 pt-40 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" /> Premium Eyewear · Est. Howrah
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">See the world</span>
            <br />
            <span className="text-gradient-gold">in perfect clarity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg"
          >
            From Calvin Klein to IDEE and Scott — discover designer frames, computer glasses and
            precision lenses, backed by decades of eye-care expertise at Ramrajatala Station Road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Book an Eye Test <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/15"
            >
              View Collection
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 grid w-full max-w-3xl grid-cols-3 gap-3 sm:gap-6"
          >
            {[
              { k: "25+", v: "Years" },
              { k: "10k+", v: "Happy Eyes" },
              { k: "50+", v: "Top Brands" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl glass px-4 py-4 text-center">
                <div className="text-2xl font-bold text-gradient-gold sm:text-3xl">{s.k}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Why Kanak</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">Trusted eye-care,</span>{" "}
            <span className="text-gradient-gold">timeless style.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Eye, title: "Precision Eye Testing", desc: "Modern equipment and experienced optometrists for accurate prescriptions." },
            { icon: Award, title: "Authentic Brands", desc: "Calvin Klein, IDEE, Scott, Ray-Ban and more — 100% genuine eyewear." },
            { icon: Sparkles, title: "Personal Styling", desc: "We help you pick frames that match your face, mood and personality." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:glow"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-8 elegant sm:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_auto] md:items-center">
            <div>
              <h3 className="text-3xl font-bold text-gradient-gold sm:text-4xl">Walk in for a free eye check-up.</h3>
              <p className="mt-3 max-w-xl text-foreground/80">
                Visit our store near Ramrajatala Station — or send us a quick enquiry and we'll get back to you on WhatsApp.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
