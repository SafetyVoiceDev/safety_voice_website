"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/content/landing"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background transition-colors duration-150",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="cursor-pointer rounded-sm">
          <Logo priority />
        </Link>

        {/* No hamburger on mobile: the page is short enough to scroll. */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  nativeButton={false}
                  render={<Link href={link.href} />}
                  className="text-[0.9375rem]"
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="header"
            nativeButton={false}
            render={<Link href="/#download" />}
          >
            Download
          </Button>
        </div>
      </div>
    </header>
  )
}
