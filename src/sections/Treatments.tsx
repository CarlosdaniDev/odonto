import { useState } from "react"
import { SectionHeading } from "@/components/SectionHeading"
import { TreatmentCard } from "@/components/TreatmentCard"
import { dentalTreatments } from "@/data/treatments"
import { healthSpecialties } from "@/data/healthSpecialties"

const tabs = [
  { key: "odontologia", label: "Odontologia", items: dentalTreatments },
  { key: "saude", label: "Saúde e bem-estar", items: healthSpecialties },
] as const

export function Treatments() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("odontologia")
  const currentTab = tabs.find((t) => t.key === active)!

  return (
    <section id="tratamentos" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          kicker="O que tratamos"
          title="Tratamentos pensados para cuidar de você"
          description="Da odontologia às especialidades médicas, tudo com planejamento digital e biossegurança."
          watermark="Cuidado"
        />

        <div className="mb-12 flex justify-center">
          <div className="inline-flex gap-1 rounded-full border border-navy/10 bg-white p-1.5 shadow-soft">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === tab.key ? "bg-navy text-white" : "text-muted hover:text-navy"
                }`}
                aria-pressed={active === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {currentTab.items.map((item, i) => (
            <TreatmentCard
              key={item.slug}
              item={item}
              index={i}
              span={"span" in item ? item.span : "sm"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
