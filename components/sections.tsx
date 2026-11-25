import Link from "next/link";
import { ChevronRight, MessagesSquare } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { button } from "@/lib/ui";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[960px] px-4 ${className}`}>{children}</div>;
}

/** Red emphasis inside serif headings, e.g. "Services for <Em>Investors</Em>". */
export function Em({ children }: { children: ReactNode }) {
  return <span className="text-brand">{children}</span>;
}

export function BookButton({ className = "" }: { className?: string }) {
  return (
    <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={`${button("primary")} ${className}`}>
      Book a meeting
    </a>
  );
}

export function SectionHeading({ title, subtitle, as: Tag = "h2" }: { title: ReactNode; subtitle?: ReactNode; as?: "h1" | "h2" }) {
  return (
    <div className="text-center">
      <Tag className="font-serif text-5xl leading-tight text-ink md:text-6xl">{title}</Tag>
      {subtitle && <p className="mt-3 font-serif text-xl text-ink md:text-2xl">{subtitle}</p>}
    </div>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`space-y-5 text-justify text-lg leading-relaxed text-body ${className}`}>{children}</div>;
}

/** Dark full-width band with a call to book the free consultation. */
export function CtaBand({ title, text }: { title: ReactNode; text: string }) {
  return (
    <section className="mt-24 bg-band py-16 text-center text-white md:mt-32 md:py-20">
      <Container className="max-w-[720px]">
        <h2 className="font-serif text-3xl leading-snug md:text-5xl md:leading-tight">{title}</h2>
        <p className="mx-auto mt-6 max-w-[560px] text-lg leading-relaxed">{text}</p>
        <BookButton className="mt-10" />
      </Container>
    </section>
  );
}

export function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(({ href, title, summary, priceLabel, price, unit, icon: Icon }) => (
        <article key={href} className="flex flex-col items-center rounded-[28px] border border-neutral-400 bg-paper px-3 pb-6 pt-5 text-center shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
          <span className="flex h-16 w-12 items-center justify-center rounded-[22px] border border-brand text-brand">
            <Icon className="size-7" strokeWidth={1.25} />
          </span>
          <h3 className="mt-5 font-serif text-[1.75rem] leading-tight text-ink">{title}</h3>
          <p className="mt-4 text-lg leading-snug text-body">{summary}</p>
          <div className="mt-auto pt-8">
            <p className="text-left font-serif text-sm text-ink">{priceLabel}</p>
            <p className="font-serif text-ink">
              <span className="text-[2rem] font-bold">{price}</span>
              <span className="text-base font-bold text-body">{unit}</span>
            </p>
          </div>
          <Link href={href} className={`${button("outline", { size: "sm" })} mt-4 w-full max-w-[160px] whitespace-nowrap`}>
            Learn more <ChevronRight className="size-4" />
          </Link>
        </article>
      ))}
    </div>
  );
}

type Feature = { title: string; text: string };

/** Three features between thin red rules, used for the audience sections. */
export function FeatureRow({ items, icon: Icon = MessagesSquare }: { items: Feature[]; icon?: typeof MessagesSquare }) {
  return (
    <div className="grid gap-10 border-y border-brand py-12 sm:grid-cols-3 sm:gap-6">
      {items.map((item) => (
        <div key={item.title} className="text-center">
          <Icon className="mx-auto size-9 text-brand" strokeWidth={1.5} />
          <h3 className="mt-4 font-serif text-2xl text-ink">{item.title}</h3>
          <p className="mx-auto mt-5 max-w-[240px] font-normal leading-snug text-ink">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function AudienceSection({ title, text, items }: { title: ReactNode; text: string; items: Feature[] }) {
  return (
    <section className="mt-28 md:mt-36">
      <Container>
        <h2 className="text-center font-serif text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
        <Lead className="mx-auto mt-4 max-w-[560px]">
          <p>{text}</p>
        </Lead>
        <div className="mt-12">
          <FeatureRow items={items} />
        </div>
      </Container>
    </section>
  );
}

type Tier = { name: string; price: string; unit?: string; points?: string[] };

export function PricingSection({ text, tiers }: { text: string; tiers: Tier[] }) {
  return (
    <section className="mt-28 md:mt-36">
      <Container>
        <SectionHeading title="Pricing" />
        <Lead className="mx-auto mt-6 max-w-[560px]">
          <p>{text}</p>
        </Lead>
        <div className={`mt-12 grid gap-6 ${tiers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {tiers.map((tier) => (
            <article key={tier.name} className="flex flex-col rounded-[28px] border border-neutral-400 bg-paper p-8 text-center shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
              <h3 className="font-serif text-xl leading-snug text-ink">{tier.name}</h3>
              <p className="mt-4 font-serif text-ink">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.unit && <span className="text-lg font-bold text-body">{tier.unit}</span>}
              </p>
              {tier.points && (
                <ul className="mt-6 space-y-2 border-t border-brand pt-6 text-body">
                  {tier.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Two-column grid of titled paragraphs, e.g. benefits or problems. */
export function DetailGrid({ title, items }: { title: ReactNode; items: Feature[] }) {
  return (
    <section className="mt-28 md:mt-36">
      <Container>
        <SectionHeading title={title} />
        <div className="mt-12 grid gap-x-12 gap-y-10 border-y border-brand py-12 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-body">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PageIntro({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return (
    <section className="pt-16 md:pt-28">
      <Container>
        <SectionHeading as="h1" title={title} />
        {children && <Lead className="mx-auto mt-10 max-w-[620px]">{children}</Lead>}
      </Container>
    </section>
  );
}
