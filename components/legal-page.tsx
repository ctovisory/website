import type { ReactNode } from "react";
import { Container, SectionHeading } from "@/components/sections";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-16 md:pt-28">
      <Container className="max-w-[760px]">
        <SectionHeading as="h1" title={title} />
        <div className="prose prose-lg mt-12 max-w-none font-light text-body prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-strong:text-ink prose-a:text-brand">
          {children}
        </div>
      </Container>
    </section>
  );
}
