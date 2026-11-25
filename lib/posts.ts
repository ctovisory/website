export type Post = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  readingTime: string;
  excerpt: string;
  image: string;
};

// Newest first. Each post body lives in content/blog/<slug>.mdx.
export const posts: Post[] = [
  {
    slug: "fractional-cto-explained-maximizing-your-technology-strategy",
    title: "Fractional CTO Explained: Maximizing Your Technology Strategy",
    date: "2024-06-01",
    readingTime: "5 min read",
    excerpt:
      "A fractional Chief Technology Officer (CTO) is a part-time executive providing strategic guidance and technical expertise.",
    image: "/images/blog/fractional-cto-explained.png",
  },
  {
    slug: "fractional-cto-for-pharma-cros",
    title: "Fractional CTO for Pharma & CROs",
    date: "2024-06-01",
    readingTime: "3 min read",
    excerpt:
      "Pharmaceutical companies are typically non-tech organizations with limited IT setups. Employing a full-time CTO is often too costly.",
    image: "/images/blog/fractional-cto-pharma.png",
  },
  {
    slug: "similar-properties-of-ai-and-crypto-hypes",
    title: "Similar properties of AI and Crypto hypes",
    date: "2024-03-11",
    readingTime: "2 min read",
    excerpt:
      "Above you can see two charts pulled from \"The Google Trends\" platform. The platform shows people's search activity throughout the time.",
    image: "/images/blog/ai-crypto-hype.jpg",
  },
  {
    slug: "s-p500-sectors-market-cap-analysis",
    title: "S&P500 sectors market cap analysis and DotCom bubble 2.0",
    date: "2024-03-10",
    updated: "2024-03-11",
    readingTime: "2 min read",
    excerpt:
      "S&P500 is an index that tracks the top 500 US companies and their stock performance. Companies in the S&P500 cover various sectors.",
    image: "/images/blog/sp500-sectors.png",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
