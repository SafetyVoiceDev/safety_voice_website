import { IconChip } from "@/components/icon-chip"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { problems } from "@/lib/content/landing"

export function ProblemStrip() {
  return (
    <Section tone="surface" labelledBy="problem-title">
      <h2 id="problem-title" className="sr-only">
        Why paper reporting fails on site
      </h2>
      <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
        {problems.map((item, i) => (
          <li key={item.body}>
            <Reveal delay={i * 60} className="flex gap-4 md:flex-col">
              <IconChip icon={item.icon} />
              <p className="max-w-[40ch]">{item.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
