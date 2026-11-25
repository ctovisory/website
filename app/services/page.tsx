import type { Metadata } from "next";
import { AudienceSection, Container, CtaBand, Em, SectionHeading, ServiceCards } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description: "Technical audits, Fractional CTO, tech leadership coaching and technical recruiting for founders, startups, investors and agencies.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 md:pt-28">
        <Container>
          <SectionHeading as="h1" title="Services" subtitle="All of your technology needs covered" />
          <div className="mt-14">
            <ServiceCards />
          </div>
        </Container>
      </section>

      <AudienceSection
        title={
          <>
            Services for <Em>Visionary Entrepreneurs</Em>
          </>
        }
        text="If you're a non-technical founder with a promising business idea and uncertain about where to begin, we've got you covered. The Fractional CTO model is an ideal fit, providing the expertise you need without the cost of a full-time CTO, especially during the early stages of your venture."
        items={[
          { title: "Roadmap & MVP", text: "Building an MVP and preparing a further product roadmap" },
          { title: "Hiring", text: "Identifying required developers and hiring them" },
          { title: "Fundraising", text: "Assisting in all aspects of fundraising" },
        ]}
      />

      <AudienceSection
        title={
          <>
            Services for <Em>Startups</Em> &amp; <Em>Corporates</Em>
          </>
        }
        text="A Fractional CTO remains invaluable even after your team and product are established. FCTO provides expert assessment of your infrastructure, cybersecurity, and strategy. If you're considering hiring a full-time CTO, our services extend to assisting in that recruitment process, ensuring a seamless transition and sustained growth."
        items={[
          { title: "Scaling", text: "From scaling technology to scaling teams" },
          { title: "Tech audit", text: "Identifying strengths and weaknesses of your tech stack" },
          { title: "Strategy", text: "Preparing IT strategy and executing it" },
        ]}
      />

      <AudienceSection
        title={
          <>
            Services for <Em>Investors</Em>
          </>
        }
        text="Fractional CTOs are key for investors, offering in-depth tech assessments, insights into business feasibility, and awareness of current tech trends for informed decision-making in the dynamic tech landscape."
        items={[
          { title: "Company audit", text: "Identifying companies feasibility for funding" },
          { title: "Pitch review", text: "Reviewing material from technical perspective" },
          { title: "Coaching", text: "Informing about latest industries advancements & startups" },
        ]}
      />

      <AudienceSection
        title={
          <>
            Services for <Em>Agencies</Em>
          </>
        }
        text="Collaborate with us to enhance agency capabilities. Fractional CTOs boost output for development and hiring agencies, as FCTOs with their vast knowledge can quickly identify critical areas or skills."
        items={[
          { title: "Development agency", text: "Bringing tech leadership to combine with your team" },
          { title: "Recruitment agency", text: "Improving a process of hiring engineers and IT managers" },
          { title: "Consulting agency", text: "Enhancing consultancy agency with tech expertise" },
        ]}
      />

      <CtaBand title="Schedule a Free Consultation to elevate your technology" text="In our complimentary initial call, we will discover business needs and propose the most optimal solutions." />
    </>
  );
}
