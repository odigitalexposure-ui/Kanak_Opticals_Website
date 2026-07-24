import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Users } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";

export function AboutSection() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-hero opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Heritage</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">A legacy of</span>{" "}
            <span className="text-gradient-gold">clear vision.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
            Kanak Optical was established with a singular, unwavering mission: to ensure everyone experiences the world with absolute clarity and style. For decades, under the meticulous care and expertise of <span className="text-primary font-semibold">Asim Bera</span>, we have been Howrah's trusted destination for precision eye testing, honest clinical advice, and a globally sourced collection of premium eyewear.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl elegant group"
          >
            <img
              src={gallery3}
              alt="Kanak Optical store interior showcasing premium eyewear collections"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-medium text-gold">Ramrajatala Station Road</p>
              <p className="text-lg font-semibold text-white">Our Flagship Store</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gradient-gold">Our Story & Commitment</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              What began as a humble optical counter has blossomed into a comprehensive, state-of-the-art eye care facility. Today, we proudly house international luxury and lifestyle brands including Calvin Klein, IDEE, Scott, and Ray-Ban, ensuring our patients never have to compromise between optimal vision and modern aesthetics.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Beyond retail, we are a clinic rooted in community trust. We dedicate time to every individual—understanding their digital habits, lifestyle needs, and personal style—to craft optical solutions that truly enhance their daily lives.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "100% Authentic", desc: "Authorized retailer for global brands." },
            { icon: ShieldCheck, title: "Clinical Precision", desc: "Advanced optometric diagnostics." },
            { icon: Heart, title: "Personalized Care", desc: "Tailored styling and fittings." },
            { icon: Users, title: "10,000+ Patients", desc: "A community of trusted vision." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl glass p-6 text-center transition-all hover:-translate-y-1 hover:glow"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gold text-primary-foreground shadow-lg">
                <f.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
