import { useCallback, useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"

/**
 * Slider interativo de "antes/depois". IMPORTANTE: como a clínica ainda não
 * nos passou nenhum caso real autorizado, as fotos abaixo são um exemplo
 * genérico (banco de imagens), só para demonstrar como a interação fica com
 * fotos de verdade — NÃO é um paciente da Odonto Medic. Troque
 * `resultado-exemplo-antes.jpg` / `resultado-exemplo-depois.jpg` por fotos
 * reais e autorizadas por escrito pelo paciente assim que a clínica
 * disponibilizar um caso.
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
        <div className="absolute inset-0">
          <img
            src="/img/resultado-exemplo-depois.jpg"
            alt="Exemplo ilustrativo de resultado 'depois' — imagem de banco, não é paciente da clínica"
            className="h-full w-full object-cover"
            draggable={false}
          />
          <span className="absolute top-4 right-4 rounded-full bg-navy-deep/70 px-3 py-1 font-display text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Depois
          </span>
        </div>

        {/* ANTES — recortado pela posição do slider */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src="/img/resultado-exemplo-antes.jpg"
            alt="Exemplo ilustrativo de resultado 'antes' — imagem de banco, não é paciente da clínica"
            className="h-full w-full object-cover"
            draggable={false}
          />
          <span className="absolute top-4 left-4 rounded-full bg-navy-deep/70 px-3 py-1 font-display text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Antes
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
        Exemplo ilustrativo (imagem de banco) apenas para demonstrar o comparador — não é um paciente
        da Odonto Medic. Será substituído por um caso real, com autorização por escrito do paciente,
        antes da publicação.
      </p>
    </div>
  )
}
