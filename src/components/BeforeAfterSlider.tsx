import { useCallback, useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"

/**
 * Slider interativo de "antes/depois". IMPORTANTE: como a clínica ainda não
 * nos passou nenhum caso real autorizado, os dois lados usam painéis
 * ilustrativos (sem fotos de pacientes) só para demonstrar a interação —
 * troque `beforeSlot`/`afterSlot` por fotos reais e autorizadas assim que a
 * clínica disponibilizar.
 */
export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-[26px] border border-navy/10 shadow-med"
        onPointerDown={(e) => {
          dragging.current = true
          updateFromClientX(e.clientX)
        }}
        onPointerMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX)
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
        role="slider"
        aria-label="Comparador de antes e depois — arraste para revelar"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5))
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5))
        }}
      >
        {/* DEPOIS — ocupa o fundo inteiro */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-teal-soft to-white">
          <span className="font-display text-sm uppercase tracking-[0.2em] text-teal-deep">Depois</span>
          <span className="mt-2 max-w-[220px] text-center text-xs text-teal-deep/70">
            Espaço reservado para foto real do caso, após autorização do paciente
          </span>
        </div>

        {/* ANTES — recortado pela posição do slider */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy to-navy-deep"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <span className="font-display text-sm uppercase tracking-[0.2em] text-white/80">Antes</span>
          <span className="mt-2 max-w-[220px] text-center text-xs text-white/50">
            Espaço reservado para foto real do caso, após autorização do paciente
          </span>
        </div>

        {/* linha + alça do slider */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-med">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </div>
      </div>

      <p className="mx-auto mt-4 max-w-xl text-center text-xs text-muted">
        Comparador ilustrativo — resultados podem variar de acordo com cada caso. As fotos reais dos
        pacientes serão adicionadas somente mediante autorização.
      </p>
    </div>
  )
}
