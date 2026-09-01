import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Treatment } from "@/data/treatments"
import type { Specialty } from "@/data/healthSpecialties"
import { siteConfig, waLink } from "@/config/site"

interface TreatmentCardProps {
  item: Treatment | Specialty
  index: number
  span?: "sm" | "md" | "lg"
}

const spanClasses: Record<string, string> = {
  sm: "sm:col-span-1",
  md: "sm:col-span-1 lg:col-span-1",
  lg: "sm:col-span-2 lg:col-span-2",
}

export function TreatmentCard({ item, index, span = "sm" }: TreatmentCardProps) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-navy/8 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-med ${spanClasses[span]}`}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-soft text-teal-deep transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>

      <div className="mt-6">
        <h3 className="font-display text-lg text-navy">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
      </div>

      <a
        href={waLink(siteConfig.units[0].whatsapp, `Olá! Gostaria de saber mais sobre ${item.name.toLowerCase()}.`)}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 focus-visible:opacity-100"
      >
        Perguntar sobre esse tratamento <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  )
}
