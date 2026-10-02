import { IconChip } from "@/components/icon-chip"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { IconPoint } from "@/lib/content/landing"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  feature: IconPoint
  /** Full-row layout: chip beside the text instead of above it. */
  wide?: boolean
  className?: string
}

export function FeatureCard({ feature, wide, className }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "h-full transition-[border-color,transform] duration-150 md:hover:-translate-y-0.5 md:hover:border-primary/40",
        className
      )}
    >
      <CardHeader className={cn("gap-3", wide && "sm:flex sm:items-center sm:gap-5")}>
        <IconChip icon={feature.icon} className={cn(!wide && "mb-2")} />
        <div className="grid gap-2">
          <CardTitle>
            <h3>{feature.title}</h3>
          </CardTitle>
          <CardDescription>{feature.body}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
