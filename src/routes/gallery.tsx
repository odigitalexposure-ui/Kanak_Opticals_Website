import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import storefront from "@/assets/kanak-storefront.png.asset.json";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Kanak Optical Frames & Store" },
      { name: "description", content: "Take a peek inside Kanak Optical — designer frames, sunglasses and our Howrah showroom." },
      { property: "og:title", content: "Kanak Optical Gallery" },
      { property: "og:description", content: "Designer frames, sunglasses and moments from our Ramrajatala store." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: g1, span: "md:col-span-2 md:row-span-2", alt: "Designer eyeglasses on marble" },
  { src: g2, span: "", alt: "Gold-rimmed sunglasses" },
  { src: g6, span: "", alt: "Customer trying on frames" },
  { src: storefront.url, span: "md:col-span-2", alt: "Kanak Optical storefront" },
  { src: g3, span: "", alt: "Store interior with frame wall" },
  { src: g4, span: "", alt: "Eye testing at Kanak Optical" },
  { src: g5, span: "md:col-span-2", alt: "Collection of colorful frames" },
];

function Gallery() {
  return (
    <SiteLayout>
      <section className="relative pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-[400px] bg-hero opacity-60" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Gallery</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">
              <span className="text-gradient">Frames,</span>{" "}
              <span className="text-gradient-gold">faces & our store.</span>
            </h1>
            <p className="mt-4 text-foreground/80">A glimpse into the Kanak Optical experience.</p>
          </motion.div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {items.map((it, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl elegant ${it.span}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {it.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
