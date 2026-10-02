import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface IconChipProps {
  icon: LucideIcon
  className?: string
}

/** 48px tinted circle with a 24px orange icon (feature cards, problem strip). */
export function IconChip({ icon: Icon, className }: IconChipProps) {
  return (
    <span
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary",
        className
      )}
    >
      <Icon aria-hidden className="size-6" strokeWidth={2} />
    </span>
  )
}
