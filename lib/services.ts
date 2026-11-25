import { Compass, GraduationCap, ScanSearch, UserSearch, type LucideIcon } from "lucide-react";

export type ServiceSummary = {
  href: string;
  title: string;
  summary: string;
  priceLabel: string;
  price: string;
  unit: string;
  icon: LucideIcon;
};

export const services: ServiceSummary[] = [
  {
    href: "/services/technical-audit",
    title: "Technical audit",
    summary: "A complete review of your business and technology",
    priceLabel: "Starting at",
    price: "€1500",
    unit: "/audit",
    icon: ScanSearch,
  },
  {
    href: "/services/fractional-cto",
    title: "Fractional CTO",
    summary: "Managing your technology team and strategy",
    priceLabel: "Starting at",
    price: "€2000",
    unit: "/month",
    icon: Compass,
  },
  {
    href: "/services/coaching",
    title: "Tech leadership coaching",
    summary: "Levelling up your tech team and your CTO",
    priceLabel: "Up to",
    price: "€120",
    unit: "/hour",
    icon: GraduationCap,
  },
  {
    href: "/services/technical-recruiting",
    title: "Technical Recruiting",
    summary: "Recruiting technical managers and CTOs",
    priceLabel: "Starting at",
    price: "€5000",
    unit: "/hire",
    icon: UserSearch,
  },
];
