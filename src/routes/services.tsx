import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicesSection } from "@/components/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Premium Eye Care Services · Kanak Optical" },
      { name: "description", content: "Experience comprehensive eye diagnostics, personalized frame styling, advanced lens technology, and contact lens fittings at Kanak Optical." },
      { property: "og:title", content: "Premium Eye Care Services · Kanak Optical" },
      { property: "og:description", content: "Professional eye testing and premium eyewear services tailored for you." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <div className="pt-20">
        <ServicesSection />
      </div>
    </SiteLayout>
  );
}
