import { cn } from "@/lib/utils"

const tones = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  ink: "bg-ink text-ink-foreground",
} as const

interface SectionProps extends React.ComponentProps<"section"> {
  tone?: keyof typeof tones
  /** id of the section's H2, for `aria-labelledby`. */
  labelledBy: string
}

export function Section({
  tone = "default",
  labelledBy,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn("py-16 lg:py-24", tones[tone], className)}
      {...props}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-eyebrow font-bold text-primary-ink uppercase",
        className
      )}
      {...props}
    />
  )
}

interface SectionHeadingProps {
  id: string
  title: string
  eyebrow?: string
  className?: string
}

export function SectionHeading({
  id,
  title,
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl lg:mb-14", className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2 id={id} className="text-h2 font-bold text-balance">
        {title}
      </h2>
    </div>
  )
}
