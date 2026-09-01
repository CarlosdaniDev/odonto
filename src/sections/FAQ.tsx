import { useState } from "react"
import { SectionHeading } from "@/components/SectionHeading"
import { FAQAccordionItem } from "@/components/FAQAccordionItem"
import { faqItems } from "@/data/faq"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading kicker="Dúvidas" title="Perguntas frequentes" watermark="Dúvidas" />
        <div className="mx-auto max-w-2xl">
          {faqItems.map((item, i) => (
            <FAQAccordionItem
              key={item.question}
              id={`faq-${i}`}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
