import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { compliance } from "@/lib/content/landing"

// No regulator logos: they would imply endorsement (PRD §3.5).
export function ComplianceBand() {
  return (
    <Section tone="ink" labelledBy="compliance-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-6">
        <div>
          <h2 id="compliance-title" className="text-h2 font-bold text-balance">
            {compliance.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-lead opacity-80">
            {compliance.body}
          </p>
        </div>
        <ul className="flex flex-wrap gap-3 lg:justify-end">
          {compliance.stats.map((stat) => (
            <li key={stat}>
              <Badge variant="secondary" className="h-auto px-4 py-2 text-base">
                {stat}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
