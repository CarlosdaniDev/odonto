import { motion } from "framer-motion"
import { MessageCircle, Sparkles, Users2, Cpu } from "lucide-react"
import { siteConfig, waLink } from "@/config/site"
import { Button } from "@/components/Button"
import { stats } from "@/data/stats"

const floatingChips = [
  { icon: Cpu, label: "Tecnologia avançada" },
  { icon: Sparkles, label: "Atendimento personalizado" },
  { icon: Users2, label: "Profissionais especializados" },
]

export function Hero() {
  const specialtiesStat = stats.find((s) => !s.placeholder)

  return (
    <section id="hero" className="relative overflow-hidden bg-navy pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* grid de fundo bem sutil, só textura */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-teal/20 blur-[120px]"
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-teal-soft"
          >
            Odontologia e saúde em um só lugar
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Cuidar da sua saúde e do seu{" "}
            <em className="relative not-italic text-teal">
              sorriso
              <svg
                aria-hidden
                className="absolute -bottom-1.5 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path d="M2 7c40-8 158-8 196 0" stroke="url(#g)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#b9944a" />
                    <stop offset="1" stopColor="#2ea89a" />
                  </linearGradient>
                </defs>
              </svg>
            </em>
            , com excelência
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Uma clínica de especialidades que reúne odontologia e saúde em um só lugar — tecnologia,
            diagnóstico preciso e atendimento humanizado, do início ao fim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button
              icon={<MessageCircle className="h-4 w-4" />}
              href={waLink(siteConfig.units[0].whatsapp, "Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noreferrer"
            >
              Agendar em Itaguara
            </Button>
            <Button
              variant="ghost-light"
              href={waLink(siteConfig.units[1].whatsapp, "Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noreferrer"
            >
              Agendar em Crucilândia
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[26px] shadow-2xl" style={{ aspectRatio: "4/3.2" }}>
            <img
              src="/img/hero-main.jpg"
              alt="Dentista mostrando uma radiografia para uma paciente na Odonto Medic"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-[-14px] rounded-[34px] border border-gold/50" />
          </div>

          {specialtiesStat && (
            <div className="absolute -bottom-8 -left-6 max-w-[230px] rounded-2xl bg-white p-5 shadow-med sm:-left-10">
              <div className="font-display text-3xl text-teal-deep">{specialtiesStat.value}</div>
              <div className="mt-1 text-xs leading-snug text-muted">
                <strong className="block text-navy">Especialidades</strong>
                médicas e odontológicas em um só endereço
              </div>
            </div>
          )}

          <div className="mt-10 hidden flex-col gap-3 sm:flex">
            {floatingChips.map((chip, i) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                className="ml-auto flex w-fit items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-navy shadow-soft backdrop-blur"
              >
                <chip.icon className="h-3.5 w-3.5 text-teal-deep" />
                {chip.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
