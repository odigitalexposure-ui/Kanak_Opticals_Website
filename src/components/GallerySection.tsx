import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import kanak_storefront from "@/assets/kanak_storefront.jpeg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.png";
import g8 from "@/assets/gallery-8.png";
import g9 from "@/assets/gallery-9.png";
import g10 from "@/assets/gallery-10.png"
import g11 from "@/assets/gallery-11.png"
import g12 from "@/assets/gallery-12.png"
import optical_lens from "@/assets/optical_lens.png";

const galleryItems = [
  { src: g1, span: "md:col-span-2 md:row-span-2", alt: "Curated designer eyeglasses on marble display" },
  { src: g2, span: "", alt: "Premium gold-rimmed sunglasses collection" },
  { src: g6, span: "", alt: "Personalized styling and frame fitting" },
  { src: kanak_storefront, span: "md:col-span-2", alt: "Kanak Optical flagship storefront in Ramrajatala" },
  { src: g3, span: "", alt: "Modern optical store interior and frame wall" },
  { src: g4, span: "", alt: "State-of-the-art computerized eye testing" },
  { src: g5, span: "md:col-span-2", alt: "Vibrant collection of modern acetate frames" },
  { src: optical_lens, span: "md:col-span-2", alt: "High-index premium optical lens display" },
  { src: g7, span: "md:col-span-2", alt: "High-index premium optical lens display" },
  { src: g8, span: "md:col-span-2", alt: "High-index premium optical lens display" },
  { src: g9, span: "md:col-span-2", alt: "High-index premium optical lens display" },
  { src: g10, span: "md:col-span-2", alt: "High-index premium optical lens display" },
  { src: g11, span: "md:col-span-2", alt: "High-index premium optical lens display" },
  { src: g12, span: "md:col-span-2", alt: "High-index premium optical lens display" },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === null || prev === 0 ? galleryItems.length - 1 : prev - 1));
  };
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === null || prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-hero opacity-20 mix-blend-multiply" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Portfolio</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Frames,</span>{" "}
            <span className="text-gradient-gold">faces & our store.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 leading-relaxed">
            Take a visual journey through Kanak Optical. Explore our curated collections of designer eyewear, get a glimpse of our clinical facilities, and see the dedicated team ready to serve you.
          </p>
        </motion.div>

        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {galleryItems.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative flex items-center justify-center overflow-hidden rounded-3xl elegant cursor-pointer bg-black/20 ${it.span}`}
              onClick={() => openModal(i)}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {it.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
              onClick={closeModal}
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors sm:right-8 sm:top-8"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors sm:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors sm:right-8"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].alt}
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                />
                <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-white/80">
                  {galleryItems[selectedIndex].alt}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
