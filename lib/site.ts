// Outbound links and contact details. Fill the TODOs before launch (PRD §8).
export const site = {
  name: "SafetyVoice",
  url: "https://safetyvoice.app", // TODO: confirm production domain
  title: "SafetyVoice | Voice-powered toolbox talk reports",
  description:
    "Record toolbox talks hands-free. SafetyVoice transcribes, fills your report, cites OSHA & CCOHS clauses and exports a PDF.",
  email: "hello@safetyvoice.app", // TODO: confirm contact email
  appStoreUrl: "#", // TODO: App Store URL
  playStoreUrl: "#", // TODO: Google Play URL
  privacyUrl: "/privacy",
  termsUrl: "/terms",
} as const

export const mailto = `mailto:${site.email}`
