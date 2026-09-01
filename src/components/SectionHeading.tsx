import { Reveal } from "./Reveal"

interface SectionHeadingProps {
  kicker: string
  title: string
  description?: string
  align?: "center" | "left"
  light?: boolean
  /** palavra grande e bem apagada no fundo, decorativa — mesmo recurso do
   * site institucional original (data-watermark) */
  watermark?: string
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  light = false,
  watermark,
}: SectionHeadingProps) {
  return (
    <div
      className={`relative mx-auto mb-14 max-w-2xl ${align === "center" ? "text-center" : "text-left ml-0"}`}
    >
      {watermark && (
        <span
          aria-hidden
          className={`pointer-events-none absolute -top-10 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[5.5rem] font-bold sm:text-[8rem] ${
            light ? "text-white/5" : "text-navy/[0.045]"
          }`}
        >
          {watermark}
        </span>
      )}
      <Reveal>
        <span
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${
            light ? "text-teal-soft" : "text-teal-deep"
          }`}
        >
          <span className="h-px w-6 bg-current opacity-60" />
          {kicker}
        </span>
        <h2
          className={`font-display text-3xl leading-tight sm:text-4xl ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>
            {description}
          </p>
        )}
      </Reveal>
    </div>
  )
}
