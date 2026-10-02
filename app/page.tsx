import { ComplianceBand } from "./_components/compliance-band"
import { Faq } from "./_components/faq"
import { Features } from "./_components/features"
import { FinalCta } from "./_components/final-cta"
import { Hero } from "./_components/hero"
import { HowItWorks } from "./_components/how-it-works"
import { JobSiteReady } from "./_components/job-site-ready"
import { ProblemStrip } from "./_components/problem-strip"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ProblemStrip />
      <HowItWorks />
      <Features />
      <ComplianceBand />
      <JobSiteReady />
      <Faq />
      <FinalCta />
    </>
  )
}
