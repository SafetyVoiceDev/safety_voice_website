import { Mic } from "lucide-react"

// Waveform bar heights (%), purely decorative.
const bars = [30, 55, 80, 45, 95, 60, 35, 70, 90, 50, 25, 65, 85, 40, 55]

/**
 * CSS stand-in for the app's Record screen.
 * TODO: replace with a real 3x simulator screenshot in a device frame (PRD §5.7).
 */
export function DeviceMock() {
  return (
    <div
      role="img"
      aria-label="The SafetyVoice Record screen, mid-recording at 12:48"
      className="relative mx-auto w-[280px] sm:w-[300px]"
    >
      {/* Flat tint "glow" — no gradients. */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-tint sm:size-[520px]"
      />

      <div className="aspect-[9/19] rounded-xl border-[10px] border-ink bg-background shadow-card">
        <div className="flex h-full flex-col items-center px-6 pt-10 pb-8">
          <p className="text-sm text-muted-foreground">Toolbox Talk</p>
          <p className="mt-1 text-lg font-bold">Riverside Tower · Level 4</p>

          <div className="mt-auto flex flex-col items-center gap-2">
            <span className="flex items-center gap-2 text-sm font-bold text-primary-ink">
              <span className="size-2 rounded-full bg-primary" />
              Recording
            </span>
            <p className="text-5xl font-bold tabular-nums">12:48</p>
          </div>

          <div className="mt-8 flex h-12 w-full items-center justify-center gap-1">
            {bars.map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-primary/50"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="relative mt-auto mb-2 flex size-24 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-primary motion-safe:animate-pulse-ring" />
            <span className="relative flex size-24 items-center justify-center rounded-full bg-primary text-cta-foreground">
              <Mic aria-hidden className="size-10" />
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Tap to stop</p>
        </div>
      </div>
    </div>
  )
}
