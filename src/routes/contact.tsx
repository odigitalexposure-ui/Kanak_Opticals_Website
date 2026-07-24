import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us · Kanak Optical Howrah" },
      { name: "description", content: "Get in touch with Kanak Optical. Find our store location in Ramrajatala, Howrah, check our hours, call us, or send a direct WhatsApp enquiry." },
      { property: "og:title", content: "Contact Kanak Optical" },
      { property: "og:description", content: "Reach us at Ramrajatala Station Road, Howrah — WhatsApp, call or visit." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="pt-20">
        <ContactSection />
      </div>
    </SiteLayout>
  );
}
