import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

/**
 * Anima um número (mantendo prefixo/sufixo do texto original, ex: "5.000+",
 * "98%") quando o elemento entra na viewport. Respeita prefers-reduced-motion
 * mostrando o valor final direto, sem contagem.
 */
export function useCountUp(target: string, durationMs = 1400) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? target : target.replace(/[\d.,]+/, "0"))

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(target)
      return
    }

    const match = target.match(/[\d.,]+/)
    if (!match) {
      setDisplay(target)
      return
    }

    const numStr = match[0]
    const finalNum = parseFloat(numStr.replace(/\./g, "").replace(",", "."))
    const decimals = numStr.includes(",") ? numStr.split(",")[1].length : 0
    const prefix = target.slice(0, match.index)
    const suffix = target.slice((match.index ?? 0) + numStr.length)
    const start = performance.now()

    let raf = 0
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = finalNum * eased
      const formatted =
        decimals > 0
          ? current.toFixed(decimals).replace(".", ",")
          : Math.round(current).toLocaleString("pt-BR")
      setDisplay(`${prefix}${formatted}${suffix}`)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduceMotion, target, durationMs])

  return { ref, display }
}
