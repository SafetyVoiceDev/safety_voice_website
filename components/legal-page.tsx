import { Eyebrow } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { LegalBlock, LegalDoc } from "@/lib/content/legal"
import { mailto, site } from "@/lib/site"

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>

  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-primary">
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

/** Shared layout for /privacy and /terms: title, contents sidebar, numbered sections. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="container-page py-16 lg:py-24">
      <header className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 text-display font-bold text-balance">{doc.title}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>Last updated {doc.updated}</span>
          {/* TODO: remove once legal review is done. */}
          <Badge variant="secondary">Draft · pending legal review</Badge>
        </div>
        <p className="mt-6 max-w-[65ch] text-lead text-muted-foreground">
          {doc.intro}
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[240px_1fr] lg:gap-16">
        <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-eyebrow font-bold text-muted-foreground uppercase">
            On this page
          </p>
          <ol className="mt-4 space-y-1">
            {doc.sections.map((section) => (
              <li key={section.id}>
                <Button
                  variant="link-plain"
                  size="inline"
                  nativeButton={false}
                  render={<a href={`#${section.id}`} />}
                  className="min-h-9 text-left text-sm font-normal whitespace-normal text-muted-foreground hover:text-foreground"
                >
                  {section.title}
                </Button>
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-[65ch] space-y-12">
          {doc.sections.map((section, i) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`} className="text-h3 font-bold">
                <span className="mr-2 text-primary-ink tabular-nums">{i + 1}.</span>
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            </section>
          ))}

          <section aria-labelledby="contact-title">
            <h2 id="contact-title" className="text-h3 font-bold">
              Contact us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Questions about this page? Email{" "}
              <Button
                variant="link"
                size="inline"
                nativeButton={false}
                render={<a href={mailto} />}
              >
                {site.email}
              </Button>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
