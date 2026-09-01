import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"
import type { Testimonial } from "@/data/testimonials"

export function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex h-full flex-col rounded-[22px] border border-navy/8 bg-white p-7 shadow-soft"
    >
      <Quote className="h-7 w-7 text-gold/50" />
      <div className="mt-3 flex gap-0.5 text-gold">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink/80">"{testimonial.quote}"</p>
      <div className="mt-5 border-t border-navy/8 pt-4">
        <div className="text-sm font-semibold text-navy">{testimonial.name}</div>
        <div className="text-xs text-muted">{testimonial.city}</div>
      </div>
    </motion.div>
  )
}
