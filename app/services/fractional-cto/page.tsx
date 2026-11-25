import type { Metadata } from "next";
import { CtaBand, DetailGrid, Em, PageIntro, PricingSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Fractional CTO",
  description: "A part-time Chief Technology Officer providing strategic technology leadership at a fraction of the cost of a full-time executive.",
};

export default function FractionalCtoPage() {
  return (
    <>
      <PageIntro title="Fractional CTO">
        <p>
          A Fractional Chief Technology Officer (CTO) is a part-time executive who provides strategic technology leadership and efficient technology solutions to organizations. Unlike a full-time CTO, a Fractional CTO works on a part-time basis, offering the same expertise and guidance as a full-time executive but at a fraction of the cost. This makes them an ideal choice for growing companies that need high-level technology leadership but do not yet require a full-time CTO.
        </p>
      </PageIntro>

      <DetailGrid
        title={
          <>
            A Fractional CTO <Em>helps</Em> your organization by
          </>
        }
        items={[
          {
            title: "Guiding Tech Strategy",
            text: "FCTO evaluates your technology vision, assesses market demands, and analyzes the competitive landscape to create a strategic technology roadmap aligned with your business goals. This includes technology transformation strategies, stack optimization, and cost management.",
          },
          {
            title: "Leading Tech Teams",
            text: "FCTO ensures your technology team delivers solutions that meet customer needs and drive business growth. Focusing on technology research and innovation, resource planning, agile development practices, architecture and design, infrastructure optimization, and security compliance.",
          },
          {
            title: "Accelerating Tech Delivery",
            text: "FCTO helps improve time-to-market by implementing agile practices, rescuing stalled projects, maintaining technology products, creating scalable solutions, ensuring smooth and reliable CI/CD pipelines, and integrating cloud technologies.",
          },
        ]}
      />

      <DetailGrid
        title={
          <>
            <Em>Benefits</Em> of Hiring a Fractional CTO
          </>
        }
        items={[
          { title: "Gain Expert Leadership", text: "Benefit from the strategic insights and leadership" },
          { title: "Optimize Processes", text: "Improve operational efficiency and technology processes" },
          { title: "Enhance Team Synergy", text: "Align and optimize your technology team for better performance" },
          { title: "Accelerate Execution", text: "Speed up technology deployment and achieve rapid results" },
          { title: "Cost Effective", text: "Access high-level technology leadership without the cost of a full-time executive" },
        ]}
      />

      <PricingSection
        text="Pricing is structured around the involvement required. Prices are negotiable and can be tailored to your specific needs."
        tiers={[
          {
            name: "Light",
            price: "€2000",
            unit: "/month",
            points: ["Up to 20 hours / month", "Managing up to 5 people", "Preparing strategy", "Advisory & Management", "9 to 6 availability (Europe)"],
          },
          {
            name: "Intense",
            price: "€4000",
            unit: "/month",
            points: ["Up to 40 hours / month", "Managing up to 10 people", "Preparing & Executing strategy", "Advisory & Management", "9 to 6 availability (Europe)"],
          },
          {
            name: "Interim CTO",
            price: "€14'000",
            unit: "/month",
            points: ["Full FTE engagement", "Managing up to 100 people (3-5 reporting layers)", "Preparing & Executing strategy", "Advisory, Management & Hands-on", "9 to 6 availability (Europe)"],
          },
        ]}
      />

      <CtaBand
        title="Schedule a Free Consultation for Fractional CTO Services"
        text="In our complimentary initial call, we'll identify your need for senior IT leadership. Different organizations require different levels of engagement, so let's discover what works best for you."
      />
    </>
  );
}
