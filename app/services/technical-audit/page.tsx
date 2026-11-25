import type { Metadata } from "next";
import { CtaBand, DetailGrid, PageIntro, PricingSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Technical audit",
  description: "A thorough review of your technical strategy, architecture, processes, and performance by an experienced, impartial Fractional CTO.",
};

export default function TechnicalAuditPage() {
  return (
    <>
      <PageIntro title="Technical audit">
        <p>
          As a business owner, you have a vision for your product or service, and you want to make it a reality and scale. But how do you ensure that your technical team is aligned with your business goals and that your product is scalable, secure, and user-friendly? This is where a CTO Technical Audit is useful.
        </p>
        <p>
          A CTO Technical Audit is a thorough review of your technical strategy, architecture, processes, and performance. It is conducted by an experienced and impartial Fractional CTO. The purpose of a Technical Audit is to find the strengths and weaknesses of your technical operations and provide actionable recommendations for improvement.
        </p>
        <p>
          A CTO audit can be performed at any stage of your product development, from ideation to launch to growth. However, the sooner you conduct a CTO audit, the more benefits you can gain. It helps you avoid costly mistakes, save time and resources, and gain a competitive edge in the market.
        </p>
      </PageIntro>

      <DetailGrid
        title="Technical audit benefits"
        items={[
          {
            title: "Optimize Product Development",
            text: "Improve your development process, adopt best practices, and implement agile methodologies. Assess the quality of your code, efficiency of testing, and reliability of deployment.",
          },
          {
            title: "Enhance Product Security",
            text: "Identify and reduce potential security risks, such as data breaches and cyberattacks. Implement security measures like encryption and authentication to protect your data and users.",
          },
          {
            title: "Improve Product Scalability",
            text: "Evaluate how well your product can handle increasing demand, traffic, or complexity. Design a scalable architecture to ensure your product grows with your business.",
          },
          {
            title: "Increase Product Usability",
            text: "Understand your users' needs and expectations. Improve user experience, interface, and feedback to increase user satisfaction and retention.",
          },
        ]}
      />

      <PricingSection
        text="Technical audit pricing is determined by the organization's size and complexity, as well as the product(s) involved. The following estimates are based on annual revenue, but prices are negotiable and can be tailored to your specific needs."
        tiers={[
          { name: "For companies with less than €100k annual revenue", price: "€1500", unit: "/audit" },
          { name: "For companies with less than €1M annual revenue", price: "€3500", unit: "/audit" },
          { name: "For companies with less than €10M annual revenue", price: "€10'000", unit: "/audit" },
        ]}
      />

      <CtaBand title="Schedule a Free Consultation to uncover your Tech Gaps" text="In our complimentary initial call, we'll assess your technology posture and pinpoint any risky, unusual, or missing areas." />
    </>
  );
}
