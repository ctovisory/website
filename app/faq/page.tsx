import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container, CtaBand, Em, Lead, SectionHeading } from "@/components/sections";
import { button } from "@/lib/ui";

export const metadata: Metadata = {
  title: "FAQ",
  description: "What a Fractional CTO does, how an engagement works, the value it brings, and which type of CTO your company needs.",
};

const steps = [
  {
    title: "We set up a discovery call",
    text: "To better understand your needs we set up a 30-60 minute discovery call. Within the given time we will analyze your business needs and also give you feedback on your general tech strategy. The discovery call is completely free of charge!",
  },
  {
    title: "We agree on engagement",
    text: 'After the discovery call, we agree on how engaged your dedicated Fractional CTO should be. For most of our clients, we usually start at around 10-20 hours per week for 3 months, then dial back to around 5 hours per week as a "maintenance" mode.',
  },
  {
    title: "We work together",
    text: "During the engagement period, your dedicated Fractional CTO works with you and completely manages the tech-business side, from preparing an MVP to scaling to 10s or 100s of engineers.",
  },
  {
    title: "We prepare for the transfer",
    text: "As your tech business succeeds and is properly scaled you might choose for an in-house full-time CTO. We will help to hire, onboard, and coach your own full-time CTO.",
  },
];

const values = [
  { title: "Expertise", text: "Extensive tech expertise on best practices, emerging tech, and trends for informed decision-making." },
  { title: "Cost", text: "Cost-effective access to high-level tech leadership, benefiting without the expense of a full-time hire." },
  { title: "Flexibility", text: "Flexible, scalable tech leadership for startups and businesses, ideal for inconsistent tech demands." },
  { title: "Objectivity", text: "Unbiased insights on business, improvements, changes, and aligned tech strategy." },
  { title: "Network", text: "Vast tech network to connect companies with potential partners, vendors, or investors." },
];

const ctoTypes = [
  {
    name: "Startup CTO",
    availability: "9 AM - 6 PM",
    cost: "5000 - 7000 EUR / month",
    equity: "0 - 10 %",
    focus: "Tech-oriented. Rather a team lead or lead developer, but not a CTO.",
    commitment: "Hiring, Bonus system, Insurance, Training, Complicated layoff",
  },
  {
    name: "Regular CTO",
    availability: "9 AM - 6 PM",
    cost: "7000 - 15'000 EUR / month",
    equity: "0 - 5 %",
    focus: "Strategy-oriented. Usually works in corporate and is high-level.",
    commitment: "Hiring, Bonus system, Insurance, Training, Complicated layoff",
  },
  {
    name: "Fractional CTO",
    availability: "9 AM - 6 PM",
    cost: "1000 - 5000 EUR / month",
    equity: "0 %",
    focus: "Tech + Business + Strategy oriented for startups and non-tech SMBs.",
    commitment: "None",
    highlight: true,
  },
];

const rows = [
  { key: "availability", label: "Availability" },
  { key: "cost", label: "Cost" },
  { key: "equity", label: "Equity" },
  { key: "focus", label: "Focus" },
  { key: "commitment", label: "Commitment" },
] as const;

export default function FaqPage() {
  return (
    <>
      <section className="pt-16 md:pt-28">
        <Container>
          <SectionHeading as="h1" title="What do we do?" />
          <Lead className="mx-auto mt-8 max-w-[560px] text-center">
            <p>
              We are a CTO (Chief Technology Officer) for your organization. And we do everything (and beyond) a CTO does. Our Fractional CTO model maximizes value to you while minimizing your costs.
            </p>
          </Lead>
          <div className="mt-10 text-center">
            <Link href="/services" className={button("outline")}>
              Explore all services <ChevronRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="mt-28 md:mt-36">
        <Container>
          <SectionHeading title={<>How does it <Em>work</Em>?</>} />
          <Lead className="mx-auto mt-6 max-w-[560px] text-center">
            <p>You get a dedicated Fractional CTO who is fully available throughout the day and engages on an as-required basis.</p>
          </Lead>
          <ol className="mt-12 grid gap-x-12 gap-y-10 border-y border-brand py-12 md:grid-cols-2">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-6">
                <span className="w-10 shrink-0 font-serif text-6xl font-bold leading-none text-brand">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-body">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="mt-28 md:mt-36">
        <Container>
          <SectionHeading title={<>What is the <Em>value</Em>?</>} />
          <Lead className="mx-auto mt-6 max-w-[560px] text-center">
            <p>CTOVISORY offers fractional or temporary CTO for occasional needs, avoiding inefficient resource allocation for startups and non-tech organizations.</p>
          </Lead>
          <div className="mt-12 grid gap-10 border-y border-brand py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-serif text-2xl text-ink">
                  <Em>{v.title[0]}</Em>
                  {v.title.slice(1)}
                </h3>
                <p className="mt-4 leading-snug text-body">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 md:mt-36">
        <Container>
          <SectionHeading title={<>Which CTO do you <Em>need</Em>?</>} />
          <Lead className="mx-auto mt-6 max-w-[560px] text-center">
            <p>Deciding between different types of CTOs can be a difficult task. For startups and non-tech SMBs, Fractional CTOs are the most cost-effective option.</p>
          </Lead>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ctoTypes.map((cto) => (
              <article
                key={cto.name}
                className={`rounded-[28px] border bg-paper p-8 shadow-[0_1px_4px_rgba(0,0,0,0.12)] ${cto.highlight ? "border-brand ring-1 ring-brand" : "border-neutral-400"}`}
              >
                <h3 className={`text-center font-serif text-2xl ${cto.highlight ? "text-brand" : "text-ink"}`}>{cto.name}</h3>
                <dl className="mt-6 space-y-4">
                  {rows.map((row) => (
                    <div key={row.key} className="border-t border-neutral-200 pt-3">
                      <dt className="font-serif text-sm text-ink">{row.label}</dt>
                      <dd className="mt-1 text-body">{cto[row.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Schedule a Free Consultation if you have more questions"
        text="In our complimentary initial call, we'll discuss any questions you may have, also we will touch on your strategy, business, and team structure."
      />
    </>
  );
}
