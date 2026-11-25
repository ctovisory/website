import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaBand, Lead, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description: "Laimonas Sutkus, founder of CTOVISORY and your dedicated Fractional CTO with more than a decade in the IT sector.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-28">
        <Container>
          <SectionHeading as="h1" title="About CTOVISORY" />
          <Image src="/images/laimonas.png" alt="Laimonas Sutkus, Fractional CTO" width={220} height={220} className="mx-auto mt-14 size-[220px] rounded-full" priority />
          <Lead className="mx-auto mt-14 max-w-[560px]">
            <p>
              Hello and welcome! I&apos;m Laimonas Sutkus, the driving force behind ctovisory.com. As the founder and your dedicated fractional CTO, I bring a wealth of experiences gained over more than a decade in the IT sector. Filling roles from a software engineer in a startup to a Chief Technology Officer in a corporation.
            </p>
            <p>
              Throughout the years, I&apos;ve seen the pitfalls and costly errors companies can fall into due to misalignment of what CTO is/does, and what kind of CTO they actually need (if they need one at all). Selecting the wrong kind of CTO can set a company on a trajectory with an entirely misguided technical strategy.
            </p>
            <p>
              Here, I am committed to offering you strategic guidance and expertise. My mission is to ensure that your company navigates the complex world of technology with a steady, experienced hand. Let&apos;s embark on this journey together, transforming challenges into opportunities and visions into realities.
            </p>
          </Lead>
        </Container>
      </section>
      <CtaBand title="Schedule a Free Consultation to elevate your technology" text="In our complimentary initial call, we will discover business needs and propose the most optimal solutions." />
    </>
  );
}
