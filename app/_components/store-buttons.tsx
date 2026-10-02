import { Play, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

interface StoreButtonsProps {
  /** "onPrimary" for the orange final band, where an orange button would vanish. */
  tone?: "default" | "onPrimary"
  className?: string
}

// TODO: swap for the official App Store / Google Play badge artwork (PRD §3.8).
export function StoreButtons({ tone = "default", className }: StoreButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
        className
      )}
    >
      <Button
        variant={tone === "onPrimary" ? "ink" : "cta"}
        size="xl"
        nativeButton={false}
        render={<a href={site.appStoreUrl} />}
      >
        <Smartphone aria-hidden />
        Download for iPhone
      </Button>
      <Button
        variant="outline"
        size="xl"
        nativeButton={false}
        render={<a href={site.playStoreUrl} />}
      >
        <Play aria-hidden />
        Get it on Google Play
      </Button>
    </div>
  )
}
