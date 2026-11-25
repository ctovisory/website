import type { Metadata } from "next";
import { CtaBand, DetailGrid, Em, PageIntro } from "@/components/sections";

export const metadata: Metadata = {
  title: "Coaching",
  description: "Tech leadership coaching guided by an experienced CTO coach: build confidence, identify growth areas and level up your leadership.",
};

export default function CoachingPage() {
  return (
    <>
      <PageIntro title="Tech leadership coaching">
        <p>
          Set yourself up for success, unlock your professional growth, and build on your strengths and leadership skills with a tailored coaching and learning program guided by an experienced CTO Coach.
        </p>
      </PageIntro>

      <DetailGrid
        title={
          <>
            How Does <Em>Coaching</Em> Work?
          </>
        }
        items={[
          { title: "Explore and Build Upon Motivations", text: "Delve into your desires and thoughts to foster lasting change and manage stress." },
          { title: "Increase Confidence", text: "Strengthen your skills and decision-making abilities through effective goal-setting and accountability." },
          { title: "Identify Growth Areas", text: "Learn new mental models and tools to access new opportunities and achieve a return on your investment." },
          { title: "Build Specific Skills", text: "Focus on team building, technology, and product strategy to enhance your leadership capabilities." },
        ]}
      />

      <CtaBand title="Schedule a Free Consultation for technical leadership coaching" text="In our complimentary initial call, we will identify individual strengths, weaknesses, and career desires." />
    </>
  );
}
