import Image from "next/image"

import { cn } from "@/lib/utils"

// Both SVGs share a ~2.82:1 aspect ratio.
const WIDTH = 113
const HEIGHT = 40

interface LogoProps {
  /** "auto" swaps to the white wordmark in dark mode; "white" is for dark surfaces. */
  tone?: "auto" | "white"
  className?: string
  priority?: boolean
}

export function Logo({ tone = "auto", className, priority }: LogoProps) {
  const size = cn("h-8 w-auto lg:h-10", className)

  if (tone === "white") {
    return (
      <Image
        src="/images/logo_white.svg"
        alt="SafetyVoice"
        width={WIDTH}
        height={HEIGHT}
        className={size}
        priority={priority}
      />
    )
  }

  return (
    <>
      <Image
        src="/images/logo_colored_no_background.svg"
        alt="SafetyVoice"
        width={WIDTH}
        height={HEIGHT}
        className={cn(size, "dark:hidden")}
        priority={priority}
      />
      <Image
        src="/images/logo_white.svg"
        alt="SafetyVoice"
        width={WIDTH}
        height={HEIGHT}
        className={cn(size, "hidden dark:block")}
        priority={priority}
      />
    </>
  )
}
