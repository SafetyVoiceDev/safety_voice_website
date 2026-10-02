import { Section, SectionHeading } from "@/components/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/lib/content/landing"

export function Faq() {
  return (
    <Section id="faq" tone="surface" labelledBy="faq-title">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="faq-title" eyebrow="FAQ" title={faq.title} />
        <Accordion>
          {faq.items.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                <p>{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
