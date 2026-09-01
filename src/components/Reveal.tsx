import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /** direção do fade — "up" (padrão), "none" pra só fade sem deslocamento */
  y?: number
}

/** Wrapper de fade-up-ao-rolar usado em quase todas as seções, pra manter o
 * mesmo "ritmo" de entrada no site inteiro sem repetir a mesma config em
 * cada componente. Respeita prefers-reduced-motion automaticamente (o
 * framer-motion reduz a animação sozinho via configuração global no main.tsx
 * não é necessário — aqui usamos viewport once para não reanimar ao rolar
 * pra cima e para baixo). */
export function Reveal({ children, delay = 0, className, y = 18 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
