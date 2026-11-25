import type { Metadata } from "next";
import { BookButton, Container, SectionHeading } from "@/components/sections";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CTOVISORY or book a free consultation with your Fractional CTO.",
};

export default function ContactPage() {
  return (
    <section className="pt-16 md:pt-28">
      <Container className="max-w-[640px]">
        <SectionHeading as="h1" title="Get in touch" />
        <p className="mt-6 text-center text-lg text-body">
          Email{" "}
          <a href={`mailto:${site.email}`} className="text-brand hover:underline">
            {site.email}
          </a>{" "}
          or book a free 30-minute call.
        </p>
        <div className="mt-6 text-center">
          <BookButton />
        </div>
        <div className="mt-16">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
