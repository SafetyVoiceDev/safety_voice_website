import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { finalCta } from "@/lib/content/landing"
import { mailto } from "@/lib/site"

import { StoreButtons } from "./store-buttons"

// The only full-bleed orange on the page. Full width on mobile, rounded inset from lg.
export function FinalCta() {
  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="lg:container-page lg:py-24"
    >
      <div className="flex flex-col items-center bg-primary px-4 py-18 text-center text-primary-foreground lg:rounded-xl lg:py-28">
        <h2
          id="download-title"
          className="max-w-2xl text-h2 font-bold text-balance text-cta-foreground"
        >
          {finalCta.title}
        </h2>
        <StoreButtons tone="onPrimary" className="mt-8 w-full sm:w-auto sm:justify-center" />
        <Button
          variant="link-plain"
          size="inline"
          nativeButton={false}
          render={<a href={mailto} />}
          className="mt-6 min-h-11 text-lg font-bold"
        >
          {finalCta.contactLabel}
          <ArrowRight aria-hidden />
        </Button>
      </div>
    </section>
  )
}
