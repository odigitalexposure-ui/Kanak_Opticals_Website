import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AboutSection } from "@/components/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kanak Optical · Our Heritage & Vision" },
      { name: "description", content: "Discover the legacy of Kanak Optical. Founded by Asim Bera, we offer decades of trusted eye care, premium eyewear, and honest clinical advice in Howrah." },
      { property: "og:title", content: "About Kanak Optical · Our Heritage" },
      { property: "og:description", content: "Decades of trusted eye care and premium eyewear in Ramrajatala, Howrah." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <div className="pt-20">
        <AboutSection />
      </div>
    </SiteLayout>
  );
}
