import { Reveal } from "@/components/Reveal"

const indicators = [
  { n: "01", title: "Atendimento humanizado" },
  { n: "02", title: "Tecnologia em cada etapa" },
  { n: "03", title: "Profissionais especializados" },
  { n: "04", title: "Cuidado integral, em um só lugar" },
]

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-deep">
            <span className="h-px w-6 bg-current opacity-60" /> Quem somos
          </span>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
            Mais do que um tratamento. Uma experiência de cuidado.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            A Odonto Medic é uma clínica de especialidades que oferece atendimento odontológico com
            tecnologia, segurança e cuidado humanizado. Realizamos implantes dentários, ortodontia,
            próteses, clínica geral, odontologia estética e exames de imagem na própria clínica, como
            radiografias, tomografia e documentação ortodôntica, proporcionando mais praticidade e
            agilidade aos pacientes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Contamos ainda com profissionais de diversas áreas da saúde, oferecendo um atendimento
            integrado em um só lugar. Nosso compromisso é proporcionar diagnósticos precisos,
            tratamentos personalizados e excelência em cada atendimento.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7">
            {indicators.map((item) => (
              <div key={item.n} className="border-l-2 border-gold/60 pl-4">
                <div className="font-display text-lg text-gold">{item.n}</div>
                <div className="mt-1 text-sm font-semibold text-navy">{item.title}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[26px] shadow-med" style={{ aspectRatio: "3/3.6" }}>
            <img
              src="/img/quemsomos-main.jpg"
              alt="Consultório odontológico moderno e equipado da Odonto Medic"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
