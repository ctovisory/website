"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { button } from "@/lib/ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  // The mobile menu stays open only on the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-4 py-6 md:py-8">
        <Link href="/" aria-label="CTOVISORY home">
          <Image src="/images/logo.png" alt="CTOVISORY CTO-as-a-Service" width={211} height={45} priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={`flex items-center gap-1 transition-colors hover:text-brand ${isActive(pathname, item.href) ? "text-brand" : "text-body"}`}>
                  {item.label}
                  <ChevronDown className="size-3.5" />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="w-56 rounded-md border border-neutral-200 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={`block px-4 py-2 transition-colors hover:text-brand ${pathname === child.href ? "text-brand" : "text-body"}`}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={`transition-colors hover:text-brand ${isActive(pathname, item.href) ? "text-brand" : "text-body"}`}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={button("primary", { display: "hidden lg:inline-flex" })}>
          Book a meeting
        </a>

        <button type="button" onClick={() => setOpenOn(open ? null : pathname)} className="text-ink lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-y border-neutral-200 bg-white px-4 pb-6 lg:hidden" aria-label="Mobile">
          <ul className="divide-y divide-neutral-100">
            {nav.map((item) => (
              <li key={item.href} className="py-3">
                <Link href={item.href} className={isActive(pathname, item.href) ? "text-brand" : "text-ink"}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={pathname === child.href ? "text-brand" : "text-body"}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={`${button("primary", { display: "flex" })} mt-4 w-full`}>
            Book a meeting
          </a>
        </nav>
      )}
    </header>
  );
}
