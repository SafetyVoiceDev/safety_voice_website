import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import { termsOfService } from "@/lib/content/legal"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `${termsOfService.title} | ${site.name}`,
  description: termsOfService.description,
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return <LegalPage doc={termsOfService} />
}
