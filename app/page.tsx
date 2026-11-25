import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { BookButton, Container, CtaBand, Em, Lead, SectionHeading, ServiceCards } from "@/components/sections";
import { button } from "@/lib/ui";

const testimonials = [
  {
    name: "Arūnas Vismantas",
    role: "CEO & Co-Founder",
    company: "SmartVision",
    image: "/images/testimonials/arunas.png",
    quote:
      "We are extremely pleased with our decision to appoint Laimonas as our part-time CTO. His insights into our technology strategy have been spot-on, enabling us to significantly optimize our IT operations.",
  },
  {
    name: "Maciej Wielogórski",
    role: "CEO & Co-Founder",
    company: "CityGlobe & GLD",
    image: "/images/testimonials/maciej.jpg",
    quote:
      "Laimonas is an invaluable piece in our startup venture. He has helped us to define both technology and startup strategies as well as to execute them. We couldn't have achieved this without him.",
  },
];

export default function Home() {
  return (
    <>
      <section className="flex min-h-[min(calc(100svh-140px),720px)] items-center pb-16">
        <Container>
          <h1 className="font-serif text-5xl leading-[1.1] text-black sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            <Em>Starting</Em> &amp; <Em>Scaling</Em>
            <br />
            <span className="font-bold">your tech business</span>
          </h1>
          <p className="mt-6 text-lg tracking-wider text-body md:text-xl">
            Your dedicated Fractional Chief Technology Officer to guide your organisation
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookButton />
            <a href="#trusted-by" className={button("outline")}>
              Learn more <ChevronDown className="size-4" />
            </a>
          </div>
        </Container>
      </section>

      <section id="trusted-by" className="scroll-mt-8 pt-16">
        <Container>
          <SectionHeading title="Trusted by" subtitle="Your success is our success" />
          <div className="mx-auto mt-16 grid max-w-[620px] gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-[28px] border border-neutral-400 bg-paper px-6 py-8 text-center shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
                <Image src={t.image} alt={t.name} width={90} height={90} className="mx-auto size-[90px] rounded-full object-cover ring-4 ring-white shadow-md" />
                <figcaption className="mt-5 font-serif text-ink">
                  <p className="text-xl font-bold">{t.name}</p>
                  <p className="mt-2 text-lg leading-snug">
                    {t.role}
                    <br />
                    {t.company}
                  </p>
                </figcaption>
                <blockquote className="mt-6 text-justify leading-relaxed text-body">{t.quote}</blockquote>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 md:mt-36">
        <Container>
          <SectionHeading
            title="Meet your Fractional CTO"
            subtitle={
              <>
                Meet Laimonas Sutkus - Fractional CTO &amp;
                <br className="hidden md:block" /> Tech advisor for startups and non-tech SMBs
              </>
            }
          />
          <Image src="/images/laimonas.png" alt="Laimonas Sutkus, Fractional CTO" width={154} height={154} className="mx-auto mt-14 size-[154px] rounded-full" />
          <Lead className="mx-auto mt-14 max-w-[510px]">
            <p>Hello! I am a senior CTO with 10+ years in product development, launching startups, and managing tech departments.</p>
            <p>I have co-founded multiple successful B2B SaaS startups and managed large IT teams in a corporate environment.</p>
            <p>
              My main expertise is focused on pre-seed to series-A startups and non-tech small-to-medium-sized businesses. My main industries are fintech, healthtech, pharma, data &amp; AI.
            </p>
            <p>
              Over the years, I&apos;ve witnessed the pitfalls and costly errors companies encounter due to a misalignment in understanding the role and necessity of a CTO. Choosing the wrong kind of CTO can set a company on a completely misguided technical trajectory.
            </p>
            <p>
              I am committed to offering strategic guidance and expertise to help your company navigate the complex world of technology. My mission is to transform challenges into opportunities and visions into realities. Let&apos;s embark on this journey together with a steady, experienced hand.
            </p>
          </Lead>
        </Container>
      </section>

      <section className="mt-28 md:mt-36">
        <Container>
          <SectionHeading title="Services" subtitle="All of your technology needs covered" />
          <div className="mt-14">
            <ServiceCards />
          </div>
        </Container>
      </section>

      <CtaBand title="Schedule a Free Consultation to elevate your technology" text="In our complimentary initial call, we will discover business needs and propose the most optimal solutions." />
    </>
  );
}
