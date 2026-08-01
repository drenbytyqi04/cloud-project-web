import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pro Craft Reklama — phone, email, address and a project enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where your brand needs to be seen."
        description="Reach us directly, or send a few details below and we'll come back with a scoped plan within one business day."
      />
      <Contact withService />
      <Faq />
    </>
  );
}
