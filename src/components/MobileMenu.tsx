import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { siteConfig, waLink } from "@/config/site"
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeHref: string
}

export function MobileMenu({ open, onClose, activeHref }: MobileMenuProps) {
  useLockBodyScroll(open)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-deep/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-sm flex-col bg-white p-8 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <button
              onClick={onClose}
              aria-label="Fechar menu"
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-navy"
            >
              <X className="h-5 w-5" />
            </button>

            <nav className="mt-10 flex flex-col gap-1" aria-label="Navegação mobile">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`rounded-lg px-3 py-3.5 text-lg font-medium transition-colors ${
                    activeHref === item.href ? "bg-teal-soft text-teal-deep" : "text-navy hover:bg-ivory"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={waLink(siteConfig.units[0].whatsapp, "Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="mt-auto flex items-center justify-center rounded-full bg-teal px-6 py-4 text-center font-semibold text-white shadow-teal"
            >
              Agendar consulta
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
