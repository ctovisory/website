import type { Metadata } from "next";
import { CtaBand, DetailGrid, Em, PageIntro, PricingSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Technical recruiting",
  description: "CTO-led technical recruiting: pre-vetted, high-quality candidates with custom assessments, delivered faster and at lower cost.",
};

export default function TechnicalRecruitingPage() {
  return (
    <>
      <PageIntro title="Technical recruiting">
        <p>Streamline your tech recruiting, and reduce time and costs while getting pre-vetted, high-quality candidates tailored to your needs.</p>
        <p>
          Led by an experienced CTO, the process ensures efficient and effective hiring through custom job descriptions, meticulous screening, and tailored technical assessments. Only the top 3-5 candidates, perfectly suited to your technical requirements and company culture, are presented. This approach solves common hiring issues such as high costs, complex job descriptions, and ineffective assessments. We guarantee a higher caliber of candidates and a faster, more efficient hiring process.
        </p>
        <p>Save time, reduce costs, and find the right talent with CTOVISORY.</p>
      </PageIntro>

      <DetailGrid
        title={
          <>
            Technical recruitment <Em>problems</Em>
          </>
        }
        items={[
          { title: "High Costs and Poor Candidates", text: "Are you frustrated with expensive tech hiring processes that yield underwhelming candidates?" },
          { title: "Complicated Job Descriptions", text: "Do aggressive and complex job listings alienate strong candidates?" },
          { title: "Ineffective Tech Assessments", text: "Are your technical assessments only testing memory retention rather than problem-solving skills?" },
          { title: "Time-Consuming Processes", text: "Is your hiring process lengthy and costly, with too many applicants to properly evaluate and high recruiter fees?" },
        ]}
      />

      <DetailGrid
        title={
          <>
            Our <Em>solution</Em>
          </>
        }
        items={[
          { title: "Led by Senior CTO", text: "Tech hiring overseen by experienced CTOs, not traditional recruiters." },
          { title: "Pre-Vetted Candidates", text: "Receive candidates who have been thoroughly vetted for your specific needs." },
          { title: "Custom Assessments", text: "Tailored technical assessments to ensure alignment with your technical requirements and company culture." },
          { title: "High-Quality Candidates", text: "Benefit from a higher caliber of candidate assessment and role fit that typical recruiters can't provide." },
        ]}
      />

      <PricingSection
        text="Technical recruitment pricing is based on the seniority of the position. Pricing consists of a retainer and a success fee. Retainer is always priced at €1000 and different success fees are given below."
        tiers={[
          { name: "Engineer", price: "€5'000", unit: "/hire" },
          { name: "Team lead / manager", price: "€10'000", unit: "/hire" },
          { name: "CTO", price: "€15'000", unit: "/hire" },
        ]}
      />

      <CtaBand title="Schedule a Free Consultation for technical recruiting led by a CTO" text="In our complimentary initial call, we will discuss your team structure and technical recruiting needs." />
    </>
  );
}
