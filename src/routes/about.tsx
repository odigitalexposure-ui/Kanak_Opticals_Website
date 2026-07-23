import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Users } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kanak Optical · Our Story" },
      { name: "description", content: "Meet Asim Bera and the team behind Kanak Optical — decades of trusted eye care and eyewear expertise in Howrah." },
      { property: "og:title", content: "About Kanak Optical · Our Story" },
      { property: "og:description", content: "Decades of trusted eye care and premium eyewear in Ramrajatala, Howrah." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-hero opacity-70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary">About us</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">
              <span className="text-gradient">A legacy of</span>{" "}
              <span className="text-gradient-gold">clear vision.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Kanak Optical was born from a simple belief — everyone deserves to see the world beautifully.
              For decades, under the care of <span className="text-primary font-semibold">Asim Bera</span>,
              we've been the neighbourhood name for honest advice, precise eye tests and stylish frames
              in Ramrajatala, Howrah.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl elegant"
            >
              <img
                src={gallery3}
                alt="Kanak Optical store interior"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gradient-gold">Our story</h2>
              <p className="text-foreground/80">
                What started as a small optical counter has grown into a trusted destination for premium
                eyewear — Calvin Klein, IDEE, Scott, Ray-Ban and more — paired with modern optometry.
              </p>
              <p className="text-foreground/80">
                We take pride in giving every customer the time they deserve — helping them find frames
                that fit their face, style and lifestyle.
              </p>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "Authentic", desc: "Only genuine branded eyewear." },
              { icon: ShieldCheck, title: "Precise", desc: "Accurate testing every visit." },
              { icon: Heart, title: "Personal", desc: "Care rooted in the community." },
              { icon: Users, title: "10,000+", desc: "Happy customers served." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl glass p-6 text-center transition-transform hover:-translate-y-1"
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
