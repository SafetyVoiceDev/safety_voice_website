import { Reveal } from "@/components/reveal"
import { Section, SectionHeading } from "@/components/section"
import { features } from "@/lib/content/landing"

import { FeatureCard } from "./feature-card"

export function Features() {
  return (
    <Section id="features" labelledBy="features-title">
      <SectionHeading id="features-title" eyebrow="Features" title={features.title} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((feature, i) => (
          <li key={feature.title}>
            <Reveal delay={(i % 3) * 60} className="h-full">
              <FeatureCard feature={feature} />
            </Reveal>
          </li>
        ))}
        <li className="sm:col-span-2 lg:col-span-3">
          <Reveal>
            <FeatureCard feature={features.offline} wide />
          </Reveal>
        </li>
      </ul>
    </Section>
  )
}
