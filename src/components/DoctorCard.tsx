import { motion } from "framer-motion"
import { waLink, siteConfig } from "@/config/site"
import type { Doctor } from "@/data/doctors"

export function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group text-center"
    >
      <div className="relative mb-5 overflow-hidden rounded-[22px] shadow-med" style={{ aspectRatio: "3/3.7" }}>
        <img
          src={doctor.photo}
          alt={`${doctor.name}, ${doctor.role} da Odonto Medic`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-navy-deep/90 to-transparent p-5 pt-10 text-left transition-transform duration-400 group-hover:translate-y-0">
          <p className="text-sm text-white/85">{doctor.bio}</p>
          <a
            href={waLink(siteConfig.units[0].whatsapp, `Olá! Gostaria de agendar com ${doctor.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-teal-soft underline underline-offset-4"
          >
            Agendar com {doctor.name.split(" ")[0]}
          </a>
        </div>
      </div>
      <h3 className="font-display text-xl text-navy">{doctor.name}</h3>
      <div className="mt-1 text-xs font-bold uppercase tracking-wide text-teal-deep">{doctor.role}</div>
      <div className="mt-1 text-xs text-muted">{doctor.license}</div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {doctor.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-navy/10 bg-ivory px-3 py-1 text-xs text-ink/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
