import Link from "next/link"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { mailto, site } from "@/lib/site"

const footerLinks = [
  { label: "Privacy", href: site.privacyUrl },
  { label: "Terms", href: site.termsUrl },
  { label: site.email, href: mailto },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink py-10 text-ink-foreground">
      <div className="container-page flex flex-col items-center gap-6 text-center text-sm md:flex-row md:justify-between md:text-left">
        <Link href="/" className="cursor-pointer rounded-sm">
          <Logo tone="white" />
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Button
                variant="link-plain"
                size="inline"
                nativeButton={false}
                render={
                  link.href.startsWith("/") ? (
                    <Link href={link.href} />
                  ) : (
                    <a href={link.href} />
                  )
                }
                className="min-h-11 text-sm"
              >
                {link.label}
              </Button>
            </li>
          ))}
        </ul>
        <p className="opacity-75">© 2026 {site.name}</p>
      </div>
    </footer>
  )
}
