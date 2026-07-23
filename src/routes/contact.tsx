import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kanak Optical · Ramrajatala, Howrah" },
      { name: "description", content: "Visit Kanak Optical at Ramrajatala Station Road, Howrah. Call, email or send an enquiry directly to WhatsApp." },
      { property: "og:title", content: "Contact Kanak Optical" },
      { property: "og:description", content: "Reach us at Ramrajatala Station Road, Howrah — WhatsApp, call or visit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const WA_NUMBER = "919874578821"; // country code + number, no plus / spaces

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  message: z.string().trim().min(5, "Tell us how we can help").max(800),
});

function Contact() {
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
    <SiteLayout>
      <section className="relative pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-hero opacity-70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">
              <span className="text-gradient">Let's talk</span>{" "}
              <span className="text-gradient-gold">eyewear.</span>
            </h1>
            <p className="mt-4 text-foreground/80">Visit our store, ring us up, or send an enquiry — it goes straight to WhatsApp.</p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl glass p-6"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Address</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                <span className="font-semibold text-foreground">KANAK OPTICAL / ASIM BERA</span>
                <br />
                Ramrajatala Station Road, Ramrajatala,
                <br />
                Howrah (Near Ramrajatala Station),
                <br />
                Howrah, West Bengal — 711104
              </p>
            </motion.div>

            {/* Phone / Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl glass p-6"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold text-primary-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Get in touch</h3>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+919874578821" className="hover:text-primary">+91 98745 78821</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:asimbera66710@gmail.com" className="break-all hover:text-primary">
                    asimbera66710@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl glass p-6"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold text-primary-foreground">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Store hours</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li className="flex justify-between gap-4"><span>Mon – Sat</span><span className="text-foreground">10:30 – 21:00</span></li>
                <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-foreground">11:00 – 19:00</span></li>
              </ul>
            </motion.div>
          </div>

          {/* Form + Map */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={onSubmit}
              className="rounded-3xl glass p-6 sm:p-8"
            >
              <h3 className="text-2xl font-bold text-gradient-gold">Send an enquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">Your message opens directly in WhatsApp.</p>

              <div className="mt-6 space-y-4">
                <Field
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  placeholder="Full name"
                />
                <Field
                  label="Phone"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  error={errors.phone}
                  placeholder="+91 …"
                />
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    maxLength={800}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
                >
                  Send via WhatsApp <Send className="h-4 w-4" />
                </button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl elegant"
            >
              <iframe
                title="Kanak Optical location"
                src="https://www.google.com/maps?q=Ramrajatala+Station+Road,+Howrah,+West+Bengal+711104&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[420px] w-full border-0"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
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
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
