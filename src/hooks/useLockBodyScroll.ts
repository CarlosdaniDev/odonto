import { useEffect } from "react"

/** Trava o scroll do body enquanto `locked` for true — usado no menu mobile
 * e no lightbox da galeria, pra evitar "scroll fantasma" atrás do overlay. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [locked])
}
