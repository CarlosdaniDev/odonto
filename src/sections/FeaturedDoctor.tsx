import { Reveal } from "@/components/Reveal"
import { doctors } from "@/data/doctors"
import { siteConfig, waLink } from "@/config/site"
import { Button } from "@/components/Button"

export function FeaturedDoctor() {
  const doctor = doctors.find((d) => d.featured) ?? doctors[0]

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] shadow-med" style={{ aspectRatio: "3/3.8" }}>
            <img
              src={doctor.photo}
              alt={`${doctor.name}, ${doctor.role} da Odonto Medic`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-deep">
            <span className="h-px w-6 bg-current opacity-60" /> Profissional em destaque
          </span>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
            Experiência, precisão e cuidado em cada atendimento.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{doctor.bio}</p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {doctor.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-navy/10 bg-ivory px-3.5 py-1.5 text-sm text-ink/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 text-sm text-muted">
            {doctor.role} · {doctor.license}
          </div>

          <div className="mt-8">
            <Button
              href={waLink(siteConfig.units[0].whatsapp, `Olá! Gostaria de agendar com ${doctor.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              Agendar com {doctor.name.split(" ")[0]}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
