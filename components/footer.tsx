import Link from "next/link";
import { LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[960px] flex-col gap-6 px-4 pb-16 pt-24 font-serif text-lg text-[#8a8a8a] sm:flex-row sm:items-end sm:justify-between md:pt-40">
      <div className="space-y-2">
        <p>
          <span className="font-bold">Copyright</span> © <CurrentYear /> ctovisory.com
        </p>
        <p>
          <span className="font-bold">Email</span>{" "}
          <a href={`mailto:${site.email}`} className="hover:text-brand">
            {site.email}
          </a>
        </p>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="CTOVISORY on LinkedIn" className="inline-block pt-1 hover:text-brand md:hidden">
          <LinkedInIcon className="size-5" />
        </a>
      </div>
      <div className="space-y-2 sm:text-right">
        <p>
          <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-brand">
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link href="/terms" className="underline underline-offset-4 hover:text-brand">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
