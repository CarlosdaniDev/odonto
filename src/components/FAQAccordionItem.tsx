import { Plus } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import type { FAQItem } from "@/data/faq"

interface Props {
  item: FAQItem
  open: boolean
  onToggle: () => void
  id: string
}

export function FAQAccordionItem({ item, open, onToggle, id }: Props) {
  return (
    <div className="border-b border-navy/10">
      <h3>
        <button
          id={`${id}-button`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-lg text-navy">{item.question}</span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              open ? "border-teal bg-teal text-white rotate-45" : "border-gold text-teal-deep"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
