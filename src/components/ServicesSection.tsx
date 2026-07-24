import { motion } from "framer-motion";
import { Eye, Glasses, Sun, UserCheck } from "lucide-react";

const servicesList = [
  {
    title: "Comprehensive Eye Diagnostics",
    description: "Experience precision with our state-of-the-art computerized eye testing. Our experienced optometrists thoroughly evaluate visual acuity, check for refractive errors, and screen for overall ocular health to ensure your prescription is flawlessly accurate.",
    icon: Eye,
  },
  {
    title: "Bespoke Frame Styling",
    description: "Eyewear is the ultimate personal accessory. Our styling experts offer one-on-one consultations to help you navigate our extensive collection, selecting frames that harmoniously complement your face shape, skin tone, and personal lifestyle.",
    icon: UserCheck,
  },
  {
    title: "Advanced Lens Technology",
    description: "We dispense premium optical lenses tailored to modern demands. From advanced anti-reflective coatings and digital blue-light blockers to seamless progressive lenses, we source high-index materials that provide crystal-clear, comfortable vision.",
    icon: Sun,
  },
  {
    title: "Contact Lens Fitting",
    description: "Prefer a frame-free aesthetic? We provide professional contact lens consultations, precise fittings, and comprehensive training for both daily disposable and monthly wear options, ensuring maximum comfort and optimal eye breathability.",
    icon: Glasses,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Clinical Expertise</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Complete care for</span>{" "}
            <span className="text-gradient-gold">your vision.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            At Kanak Optical, we seamlessly bridge the gap between advanced medical optometry and high-end fashion, bringing you holistic eye care solutions under one roof.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-1 hover:glow"
            >
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">{service.title}</h3>
              <p className="leading-relaxed text-muted-foreground text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
