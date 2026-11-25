import Link from "next/link";
import { CalendarDays, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

// The red brand bar fixed to the right edge on desktop.
export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 right-0 z-30 hidden w-[74px] flex-col items-center justify-between bg-brand py-8 text-white md:flex">
      <div className="flex flex-col items-center gap-5">
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="CTOVISORY on LinkedIn" className="flex size-9 items-center justify-center rounded-full bg-white text-brand transition-opacity hover:opacity-85">
          <LinkedInIcon className="size-4" />
        </a>
        <a href={site.calendly} target="_blank" rel="noopener noreferrer" aria-label="Book a meeting" className="transition-opacity hover:opacity-85">
          <CalendarDays className="size-8" strokeWidth={1.5} />
        </a>
      </div>
      <Link href="/contact" aria-label="Contact" className="transition-opacity hover:opacity-85">
        <Mail className="size-9" strokeWidth={1.25} />
      </Link>
    </aside>
  );
}
