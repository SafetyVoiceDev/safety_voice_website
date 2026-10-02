import { IconChip } from "@/components/icon-chip"
import { Reveal } from "@/components/reveal"
import { Section, SectionHeading } from "@/components/section"
import { jobSite } from "@/lib/content/landing"

export function JobSiteReady() {
  return (
    <Section labelledBy="jobsite-title">
      <SectionHeading id="jobsite-title" eyebrow="Built for the job site" title={jobSite.title} />
      <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
        {jobSite.points.map((point, i) => (
          <li key={point.body}>
            <Reveal delay={i * 60} className="flex gap-4">
              <IconChip icon={point.icon} />
              <p className="max-w-[40ch] text-muted-foreground">
                <strong className="font-bold text-foreground">{point.title}</strong>{" "}
                {point.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
