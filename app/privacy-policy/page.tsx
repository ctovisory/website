import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import Content from "@/content/legal/privacy-policy.mdx";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <Content />
    </LegalPage>
  );
}
