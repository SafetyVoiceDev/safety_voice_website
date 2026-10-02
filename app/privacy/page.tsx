import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import { privacyPolicy } from "@/lib/content/legal"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | ${site.name}`,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />
}
