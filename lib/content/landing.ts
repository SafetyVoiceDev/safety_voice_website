// Landing page copy (PRD §3). Edit copy here, not in the components.
// Only claim what ships — see PRD §4 before adding anything.
import {
  FileText,
  Folder,
  Hand,
  HardHat,
  Megaphone,
  Mic,
  Pickaxe,
  Star,
  Toolbox,
  Users,
  WifiOff,
  type LucideIcon,
} from "lucide-react"

export interface NavLink {
  label: string
  href: `/#${string}`
}

export interface IconPoint {
  icon: LucideIcon
  title?: string
  body: string
}

export interface Step {
  n: number
  title: string
  body: string
}

export interface Faq {
  q: string
  a: string
}

export const navLinks: NavLink[] = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
]

export const hero = {
  eyebrow: "Voice-powered safety reporting",
  title: "Talk safety. We'll write the report.",
  lead: "Record your toolbox talk hands-free. SafetyVoice transcribes it, fills in the report and suggests the OSHA and CCOHS clauses that apply, ready to export as a PDF before you leave the site.",
  // TODO: confirm with the business before launch.
  microcopy: "Free trial · No credit card to start",
}

export const problems: IconPoint[] = [
  {
    icon: FileText,
    body: "Paper sign-in sheets and handwritten notes get lost, misfiled or scanned days late.",
  },
  {
    icon: HardHat,
    body: "You can't stop work to type notes on a noisy job site.",
  },
  {
    icon: Toolbox,
    body: "Looking up the right OSHA or CCOHS clause eats hours you don't have.",
  },
]

export const howItWorks = {
  title: "From talk to report in three steps.",
  steps: [
    {
      n: 1,
      title: "Record",
      body: "Open the app and tap the mic. Talk to your crew like you normally do. Sessions run up to 60 minutes.",
    },
    {
      n: 2,
      title: "Assign",
      body: "When you stop, pick the project and meeting type. No digging through folders first.",
    },
    {
      n: 3,
      title: "Review & export",
      body: "Your Toolbox Talk report is pre-filled. Edit anything, attach the sign-in sheet photo, finalize and export to PDF.",
    },
  ] satisfies Step[],
}

export const features = {
  title: "Everything your safety paperwork needs. Nothing it doesn't.",
  items: [
    {
      icon: Mic,
      title: "Hands-free voice capture",
      body: "Real-time transcription tuned for loud, busy job sites. One tap to start, one tap to stop.",
    },
    {
      icon: FileText,
      title: "Auto-filled Toolbox Talk reports",
      body: "Topics discussed, actions to take, injuries reviewed and supervisor remarks are pulled straight from the conversation.",
    },
    {
      icon: Star,
      title: "Clause Assistant",
      body: "Suggests relevant OSHA and CCOHS clauses with references and source text. Add or remove them with a tap.",
    },
    {
      icon: Folder,
      title: "Organized by project",
      body: "Every report lives in its project folder. Search projects and filter by meeting type in seconds.",
    },
    {
      icon: Pickaxe,
      title: "Sign-in sheet photos",
      body: "Snap the clipboard your crew signed. It's stored right alongside the report.",
    },
    {
      icon: Megaphone,
      title: "One-tap PDF export",
      body: "Audit-ready PDFs for clients, insurers and inspectors.",
    },
  ] satisfies IconPoint[],
  offline: {
    icon: WifiOff,
    title: "Works offline",
    body: "If you lose signal, the recording is saved on the device and transcribes automatically when you reconnect.",
  } satisfies IconPoint,
}

export const compliance = {
  title: "Built around OSHA and CCOHS.",
  body: "Reports follow the CCOHS Toolbox Talk template, and the Clause Assistant cites the regulation that matches what was discussed. That makes COR audits and GC pre-qualification easier.",
  // Only numbers that are true in the app.
  stats: ["19 meeting types", "60-min sessions", "PDF in one tap"],
}

export const jobSite = {
  title: "Made for supervisors, not desk jockeys.",
  points: [
    {
      icon: Hand,
      title: "Big buttons, fewer steps.",
      body: "Designed for tablets and gloves-on use.",
    },
    {
      icon: WifiOff,
      title: "Offline-ready.",
      body: "It keeps recording when the signal drops.",
    },
    {
      icon: Users,
      title: "Your whole team.",
      body: "Invite your supervisors and keep every project's records in one place.",
    },
  ] satisfies IconPoint[],
}

export const faq = {
  title: "Questions, answered.",
  items: [
    {
      q: "Which devices does it work on?",
      a: "iPhone and iPad (iOS), and Android phones and tablets.",
    },
    {
      q: "Does it work without internet?",
      a: "Yes. Recordings are saved on your device and transcribed once you're back online.",
    },
    {
      q: "What report types are supported?",
      a: "Every meeting type gets a full transcript. Toolbox Talks also get a structured, auto-filled report.",
    },
    {
      q: "Which regulations does the Clause Assistant cover?",
      a: "OSHA (U.S.) and CCOHS (Canada).",
    },
    {
      q: "Can I edit the report?",
      a: "Yes. Every field is editable. Save as a draft, finalize when ready, and unfinalize if something changes.",
    },
    {
      // TODO: final pricing before launch. Don't publish the PRD's draft numbers.
      q: "How much does it cost?",
      a: "Plans are billed per company, with a free trial.",
    },
  ] satisfies Faq[],
}

export const finalCta = {
  title: "Your next toolbox talk could write itself.",
  contactLabel: "Running a bigger crew? Talk to us",
}
