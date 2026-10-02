import { Eyebrow } from "@/components/section"
import { hero } from "@/lib/content/landing"

import { DeviceMock } from "./device-mock"
import { StoreButtons } from "./store-buttons"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="overflow-hidden py-16 lg:py-24"
    >
      <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 text-display font-bold text-balance"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[65ch] text-lead text-muted-foreground">
            {hero.lead}
          </p>
          <StoreButtons className="mt-8 w-full sm:w-auto sm:justify-center lg:justify-start" />
          <p className="mt-4 text-sm text-muted-foreground">{hero.microcopy}</p>
        </div>

        <DeviceMock />
      </div>
    </section>
  )
}
