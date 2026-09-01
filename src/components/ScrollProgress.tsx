import { motion, useScroll, useSpring } from "framer-motion"

/** Barrinha fina no topo mostrando o quanto já rolou da página. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold to-teal"
    />
  )
}
