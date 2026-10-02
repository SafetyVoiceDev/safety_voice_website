"use client"

import { useEffect, useRef, useState } from "react"

interface RevealProps extends React.ComponentProps<"div"> {
  /** Stagger offset in ms (60ms steps across cards). */
  delay?: number
}

/**
 * Fades content up on viewport entry. Server markup is fully visible, so the
 * page works without JS; only content still below the fold at mount is hidden.
 * The CSS for `data-reveal` lives in globals.css behind prefers-reduced-motion.
 */
export function Reveal({ delay = 0, className, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle")

  useEffect(() => {
    const el = ref.current
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return

    setState("hidden")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setState("shown")
        observer.disconnect()
      },
      // Huge top margin: content an anchor jump skips over still counts as seen.
      { rootMargin: "100000px 0px -10% 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal={state === "idle" ? undefined : state}
      className={className}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as React.CSSProperties}
      {...props}
    />
  )
}
