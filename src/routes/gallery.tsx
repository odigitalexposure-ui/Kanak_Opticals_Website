import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { GallerySection } from "@/components/GallerySection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Portfolio · Kanak Optical" },
      { name: "description", content: "Explore the Kanak Optical gallery. View our curated designer frames, state-of-the-art clinic, and premium optical collections in Ramrajatala, Howrah." },
      { property: "og:title", content: "Gallery & Portfolio · Kanak Optical" },
      { property: "og:description", content: "Designer frames, sunglasses and moments from our Ramrajatala store." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <SiteLayout>
      <div className="pt-20">
        <GallerySection />
      </div>
    </SiteLayout>
  );
}
