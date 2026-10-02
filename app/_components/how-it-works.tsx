import { Reveal } from "@/components/reveal"
import { Section, SectionHeading } from "@/components/section"
import { howItWorks } from "@/lib/content/landing"

export function HowItWorks() {
  const { steps } = howItWorks

  return (
    <Section id="how-it-works" labelledBy="how-title">
      <SectionHeading id="how-title" eyebrow="How it works" title={howItWorks.title} />
      <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
        {steps.map((step, i) => (
          <li key={step.n} className="relative">
            {/* Dashed connector: vertical on mobile, horizontal from md up. */}
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute top-12 -bottom-8 left-5 border-l-2 border-dashed border-border md:top-5 md:-right-3 md:bottom-auto md:left-13 md:border-t-2 md:border-l-0"
              />
            )}
            <Reveal delay={i * 60} className="flex gap-4 md:flex-col">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.n}
              </span>
              <div>
                <h3 className="text-h3 font-bold">{step.title}</h3>
                <p className="mt-2 max-w-[40ch] text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
