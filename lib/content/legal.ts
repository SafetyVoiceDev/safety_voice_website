// Privacy Policy and Terms of Service copy.
// DRAFT: written from what the app actually does (see PRD §4). Have a lawyer
// review both documents and resolve every TODO before launch.

/** A paragraph, or a bulleted list. */
export type LegalBlock = string | { list: string[] }

export interface LegalSection {
  id: string
  title: string
  blocks: LegalBlock[]
}

export interface LegalDoc {
  title: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  description:
    "How SafetyVoice collects, uses and protects the recordings, reports and account details you trust us with.",
  updated: "October 2, 2026",
  intro:
    "SafetyVoice helps construction teams record toolbox talks and turn them into reports. That means we handle voice recordings from your job sites, so we take this seriously. This policy explains what we collect, why, and the choices you have.",
  sections: [
    {
      id: "information-we-collect",
      title: "Information we collect",
      blocks: [
        "We collect the information you give us and the information the app needs to work:",
        {
          list: [
            "Account details: your name, email address, and sign-in method (email, Google or Apple).",
            "Company and team details: your company name, the projects you create, and the team members you invite.",
            "Recordings: audio of the meetings you choose to record in the app.",
            "Transcripts and reports: the text transcribed from your recordings and the reports created from them, including any edits you make.",
            "Photos: sign-in sheet photos you attach to a report.",
            "Subscription status: which plan you're on and whether it's active. Payment card details are handled by Apple or Google, never by us.",
            "Device information: a notification token so we can send you alerts, and basic technical data needed to keep the app running.",
          ],
        },
      ],
    },
    {
      id: "how-we-use-it",
      title: "How we use your information",
      blocks: [
        {
          list: [
            "To transcribe your recordings and draft your Toolbox Talk reports.",
            "To suggest OSHA and CCOHS clauses that match what was discussed.",
            "To store your reports in the right project and let your team access them.",
            "To export your reports as PDFs.",
            "To manage your account, subscription and free trial.",
            "To send you notifications about your reports and account.",
            "To keep the service secure and fix problems.",
          ],
        },
        "We don't sell your information, and we don't use your recordings or reports for advertising.",
      ],
    },
    {
      id: "recordings",
      title: "Recordings and transcripts",
      blocks: [
        "Recording only starts when you tap the mic, and it stops when you tap it again. If you lose signal, the recording is saved on your device until it can be uploaded and transcribed.",
        "You are responsible for letting the people you record know they are being recorded, and for getting any consent your local laws require.",
        // TODO: confirm whether raw audio is kept after transcription, and for how long.
      ],
    },
    {
      id: "service-providers",
      title: "Service providers",
      blocks: [
        "We use a small number of trusted providers to run SafetyVoice. They process your data only to provide their service to us:",
        {
          list: [
            "Google Firebase: sign-in, database, file storage, cloud processing and push notifications.",
            "Deepgram: speech-to-text transcription of your recordings.",
            // TODO: name the AI provider used to draft reports and suggest clauses.
            "An AI language model provider: drafting reports and suggesting regulation clauses from your transcripts.",
            "RevenueCat, Apple App Store and Google Play: subscriptions and billing.",
            "Google and Apple: sign-in, if you choose those options.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "Who can see your information",
      blocks: [
        "Reports and recordings belong to your company. Team members you invite can see the projects and reports they have access to. We share your information outside SafetyVoice only with the providers listed above, when you export or share a PDF yourself, or when the law requires it.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      blocks: [
        // TODO: confirm retention periods.
        "We keep your account, reports and recordings for as long as your account is active. If you delete a report or close your account, we delete the related data from our systems within a reasonable period, except where we must keep it to meet legal obligations.",
      ],
    },
    {
      id: "security",
      title: "Security",
      blocks: [
        "Data is encrypted in transit and stored with access controls, so only you and your team can reach your company's records. No system is perfectly secure, but we work to protect your information and will tell you promptly if a breach affects you.",
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      blocks: [
        "Depending on where you live (for example under PIPEDA in Canada, or state privacy laws in the U.S.), you may have the right to:",
        {
          list: [
            "Access the personal information we hold about you.",
            "Correct information that is wrong.",
            "Delete your account and personal information.",
            "Withdraw consent to optional processing.",
          ],
        },
        "Email us to make a request. We'll respond within 30 days.",
      ],
    },
    {
      id: "transfers",
      title: "Where your data is stored",
      blocks: [
        // TODO: confirm Firebase region.
        "SafetyVoice serves customers in Canada and the United States. Your information may be stored and processed in either country by us or our service providers.",
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        "SafetyVoice is a workplace tool and isn't meant for anyone under 16. We don't knowingly collect information from children.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        "If we make significant changes, we'll let you know in the app or by email before they take effect. The date at the top of this page shows when it was last updated.",
      ],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  description:
    "The rules for using SafetyVoice, including subscriptions, your content and the limits of AI-generated reports.",
  updated: "October 2, 2026",
  intro:
    "These terms are an agreement between you (and the company you use SafetyVoice for) and SafetyVoice. By creating an account or using the app, you agree to them. If you don't agree, please don't use SafetyVoice.",
  sections: [
    {
      id: "the-service",
      title: "The service",
      blocks: [
        "SafetyVoice lets you record safety meetings, transcribes them, drafts Toolbox Talk reports, suggests OSHA and CCOHS clauses, and exports reports as PDFs. We may improve or change features over time.",
      ],
    },
    {
      id: "accounts",
      title: "Your account",
      blocks: [
        "You must give accurate information when you sign up and keep your login secure. If you create an account for a company, you confirm you're allowed to act for that company. You're responsible for what happens under your account and for the team members you invite.",
      ],
    },
    {
      id: "subscriptions",
      title: "Subscriptions and free trials",
      blocks: [
        // TODO: confirm plans, trial length and refund terms with the business.
        "Plans are billed per company through the Apple App Store or Google Play. Subscriptions renew automatically until you cancel in your store account settings. If you start a free trial, you'll be charged when it ends unless you cancel first. Refunds are handled by Apple or Google under their policies.",
      ],
    },
    {
      id: "your-content",
      title: "Your content",
      blocks: [
        "Your recordings, transcripts, reports and photos belong to you or your company. You give us permission to store and process them only so we can run the service for you, including sending them to the providers listed in our Privacy Policy.",
      ],
    },
    {
      id: "recording-consent",
      title: "Recording consent",
      blocks: [
        "Laws about recording conversations differ by province and state. Before you record, you must tell the people present and get any consent the law requires. You are responsible for meeting these requirements.",
      ],
    },
    {
      id: "ai-reports",
      title: "AI-generated reports and clause suggestions",
      blocks: [
        "Transcripts, drafted reports and clause suggestions are generated automatically and can contain mistakes. They are a starting point, not legal or safety advice.",
        {
          list: [
            "Review and edit every report before you finalize it.",
            "Check suggested clauses against the current regulation text.",
            "You and your company remain responsible for workplace safety and regulatory compliance.",
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      blocks: [
        "Don't use SafetyVoice to:",
        {
          list: [
            "Record people in ways that break the law.",
            "Upload content you don't have the right to share.",
            "Try to break, overload or reverse-engineer the service.",
            "Access another company's data or share your login outside your team.",
          ],
        },
      ],
    },
    {
      id: "termination",
      title: "Cancelling and closing accounts",
      blocks: [
        "You can stop using SafetyVoice and delete your account at any time. We may suspend or close accounts that break these terms. Export any reports you want to keep before you close your account.",
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      blocks: [
        "We work to keep SafetyVoice reliable, but it's provided \"as is\". We can't promise it will always be available or error-free, or that transcripts and suggestions will be complete or accurate.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      blocks: [
        // TODO: lawyer to confirm the cap.
        "To the extent the law allows, SafetyVoice isn't liable for indirect or consequential losses, or for decisions made based on generated reports or clause suggestions. Our total liability is limited to the amount you paid us in the 12 months before the claim.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      blocks: [
        // TODO: set the governing jurisdiction.
        "These terms are governed by the laws of [jurisdiction to be confirmed].",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        "If we make significant changes, we'll let you know in the app or by email before they take effect. If you keep using SafetyVoice after that, you accept the updated terms.",
      ],
    },
  ],
}
