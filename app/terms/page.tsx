import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import Content from "@/content/legal/terms.mdx";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <Content />
    </LegalPage>
  );
}
