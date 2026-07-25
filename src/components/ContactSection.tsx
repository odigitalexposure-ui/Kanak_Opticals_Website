import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send, Glasses } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import visiting_card from "@/assets/visiting_card.png"

const WA_NUMBER = "+919433341493";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  message: z.string().trim().min(5, "Tell us how we can help").max(800),
});

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: typeof errors = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as keyof typeof form] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Hello Kanak Optical,%0A%0AName: ${encodeURIComponent(parsed.data.name)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0A%0A${encodeURIComponent(parsed.data.message)}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Get in Touch</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Let's talk</span>{" "}
            <span className="text-gradient-gold">eyewear.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 leading-relaxed">
            Ready to upgrade your vision? Visit our Howrah showroom for a personalized consultation, give us a call, or send an enquiry directly to our WhatsApp for immediate assistance.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl glass p-8 transition-transform hover:-translate-y-1"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold text-primary-foreground shadow-lg">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gradient-gold">Location</h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              <span className="font-semibold text-foreground">Kanak Optical / Asim Bera</span>
              <br />
              Ramrajatala Station Road,
              <br />
              Near Ramrajatala Station,
              <br />
              Howrah, West Bengal — 711104
            </p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl glass p-8 transition-transform hover:-translate-y-1"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold text-primary-foreground shadow-lg">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gradient-gold">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-base font-medium">
              <li>
                <a href="tel:+919874578821" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary" /> +91 9433341493
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5 text-primary" /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:asimbera66710@gmail.com" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors break-all">
                  <Mail className="h-5 w-5 text-primary" /> asimbera66710@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Store Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl glass p-8 transition-transform hover:-translate-y-1"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold text-primary-foreground shadow-lg">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gradient-gold">Store Hours</h3>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Mon – Sat</span>
                <span className="font-semibold text-foreground">10:30 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Sunday</span>
                <span className="font-semibold text-foreground">11:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Digital Visiting Card */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-[420px] overflow-hidden rounded-xl shadow-2xl transition-all hover:scale-[1.02] hover:shadow-purple-500/30"
          style={{
            background: "linear-gradient(135deg, #f8bdfc 0%, #d88aff 50%, #b366ff 100%)",
          }}
        >
          <div className="relative flex min-h-[220px] flex-col p-6 pb-4">
            <div className="absolute right-0 top-0 h-48 w-48 -translate-y-1/4 translate-x-1/4 rounded-full bg-white/30 blur-2xl pointer-events-none" />
            <div className="absolute bottom-8 left-4 h-32 w-32 rounded-full bg-white/30 blur-xl pointer-events-none" />
            <div className="absolute right-12 top-12 flex space-x-2 opacity-20 pointer-events-none">
              <div className="h-4 w-4 rounded-full bg-white"></div>
              <div className="h-4 w-4 rounded-full bg-white"></div>
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </div>

            <div className="z-10 flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/60 bg-white/40 shadow-inner">
                <Glasses className="h-7 w-7 text-purple-900" />
              </div>
              <div className="text-right text-[11px] font-bold leading-relaxed text-purple-950">
                <p>Ph.: 2627-0841</p>
                <p>Mob.: 9433341493</p>
                <p>9874578821</p>
              </div>
            </div>

            <div className="z-10 mt-auto text-center">
              <h1
                className="text-5xl font-extrabold italic tracking-tight"
                style={{ color: "#e3344f", textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }}
              >
                Kanak
              </h1>
              <h2
                className="text-xl font-black tracking-widest text-[#00a8e8]"
                style={{ textShadow: "1px 1px 1px rgba(255,255,255,0.9)" }}
              >
                OPTICAL
              </h2>
            </div>
          </div>

          <div className="relative z-10 bg-[#8b38cc] px-4 py-2 text-center shadow-inner">
            <p className="text-[11px] font-bold tracking-wider text-white">
              Ramrajatala, Station Road, Ramrajatala, Howrah - 711 104
            </p>
          </div>
        </motion.div> */}
        {/* Visiting Card */}
          {/* Visiting Card */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-12 flex justify-center"
>
  <div className="group relative w-md max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-xl backdrop-blur-md">
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <img
      src={visiting_card}
      alt="Kanak Optical Visiting Card"
      className="relative z-10 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  </div>
</motion.div>

        {/* Form + Map */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="rounded-3xl glass p-8 sm:p-10"
          >
            <h3 className="text-3xl font-bold text-gradient-gold">Send an enquiry</h3>
            <p className="mt-2 text-sm text-muted-foreground">Your message opens directly in WhatsApp for quick responses.</p>

            <div className="mt-8 space-y-5">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                error={errors.name}
                placeholder="John Doe"
              />
              <Field
                label="Phone Number"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                error={errors.phone}
                placeholder="+91 9433341493"
              />
              <div>
                <label className="mb-2 block text-sm font-semibold tracking-wide">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  maxLength={800}
                  placeholder="I'd like to book an eye test..."
                  className="w-full rounded-2xl border border-border bg-input/40 px-5 py-4 text-base text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
                {errors.message && <p className="mt-1.5 text-xs font-medium text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-base font-bold text-primary-foreground shadow-xl transition-all hover:scale-[1.02] hover:shadow-primary/25"
              >
                Send via WhatsApp <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl elegant relative"
          >
            <iframe
              title="Kanak Optical Store Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7576537788914!2d88.29415177599927!3d22.588165632398294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02786851eaaac9%3A0x2b4ee6b6fec00efe!2sKanak%20Optical!5e0!3m2!1sen!2sus!4v1784881308205!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7576537788914!2d88.29415177599927!3d22.588165632398294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02786851eaaac9%3A0x2b4ee6b6fec00efe!2sKanak%20Optical!5e0!3m2!1sen!2sus!4v1784881308205!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold tracking-wide">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-input/40 px-5 py-4 text-base text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
      {error && <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
