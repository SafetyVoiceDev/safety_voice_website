import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

import "./globals.css"

// TODO: confirm the Aeonik web license before launch; fall back to Inter if not covered.
const aeonik = localFont({
  src: [
    { path: "./fonts/aeonik-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/aeonik-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#FE5000",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={aeonik.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Button
            variant="default"
            size="header"
            nativeButton={false}
            render={<a href="#main" />}
            className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[60]"
          >
            Skip to content
          </Button>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
