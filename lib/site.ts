export const site = {
  name: "CTOVISORY",
  url: "https://www.ctovisory.com",
  title: "CTOVISORY | Fractional CTO | CTO-as-a-Service",
  description:
    "Your dedicated Fractional Chief Technology Officer to guide your organisation. Starting & Scaling your tech business.",
  email: "info@ctovisory.com",
  calendly: "https://calendly.com/ctovisory/30min",
  linkedin: "https://www.linkedin.com/company/ctovisory",
};

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/technical-audit", label: "Technical audit" },
      { href: "/services/fractional-cto", label: "Fractional CTO" },
      { href: "/services/technical-recruiting", label: "Technical recruiting" },
      { href: "/services/coaching", label: "Coaching" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
