import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | CTOVISORY" },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_GB" },
  alternates: { types: { "application/rss+xml": "/rss.xml" } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} antialiased`}>
      <body className="min-h-screen md:pr-[74px]">
        <div aria-hidden="true" className="grid-lines pointer-events-none fixed inset-y-0 left-1/2 -z-10 hidden w-[940px] -translate-x-[calc(50%+37px)] md:block" />
        <Header />
        <main>{children}</main>
        <Footer />
        <Sidebar />
      </body>
    </html>
  );
}
