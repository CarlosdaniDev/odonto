import { ScanLine, ShieldCheck, Sparkle, ThermometerSnowflake } from "lucide-react"
import { Reveal } from "@/components/Reveal"

const features = [
  {
    n: "01",
    icon: ScanLine,
    title: "Exames de imagem no local",
    description: "Radiografias, tomografia e documentação ortodôntica feitas na própria clínica.",
  },
  {
    n: "02",
    icon: Sparkle,
    title: "Planejamento digital",
    description: "Implantes com planejamento digital e cirurgia guiada, com mais previsibilidade.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Biossegurança",
    description: "Protocolos de biossegurança e instrumentais esterilizados em todos os atendimentos.",
  },
  {
    n: "04",
    icon: ThermometerSnowflake,
    title: "Ambiente climatizado",
    description: "Consultórios equipados e climatizados, pensados para o seu conforto.",
  },
]

export function Technology() {
  return (
    <section className="bg-navy py-24 text-white sm:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] shadow-2xl" style={{ aspectRatio: "4/4.6" }}>
            <img
              src="/img/tecnologia.jpg"
              alt="Sala de atendimento da Odonto Medic equipada com tecnologia"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-soft">
              <span className="h-px w-6 bg-current opacity-60" /> Tecnologia
            </span>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Tecnologia que transforma a experiência de cuidar de você
            </h2>
            <p className="mt-5 max-w-lg text-white/70">
              Tecnologia em cada detalhe, com protocolos de biossegurança e instrumentais esterilizados
              para o seu conforto e segurança.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/20 text-teal-soft">
                      <f.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="font-display text-sm text-gold">{f.n}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-white">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
