import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { siteConfig, waLink } from "@/config/site"

/** Botão flutuante de WhatsApp com uma bolha de chamada que aparece uma vez
 * por sessão, depois de alguns segundos — o mesmo comportamento do site
 * institucional original. Usa um ícone genérico de balão de chat (não o
 * logotipo oficial do WhatsApp) por não ser um recurso de marca licenciado. */
export function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false)
  const primaryUnit = siteConfig.units[0]

  useEffect(() => {
    if (sessionStorage.getItem("wa-bubble-shown")) return
    const timer = setTimeout(() => {
      setShowBubble(true)
      sessionStorage.setItem("wa-bubble-shown", "1")
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="relative max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm text-ink shadow-med"
          >
            <button
              aria-label="Fechar"
              onClick={() => setShowBubble(false)}
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-white shadow-soft"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            Ficou com alguma dúvida? Fale com a gente agora pelo WhatsApp 😊
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={waLink(primaryUnit.whatsapp, "Olá! Vim pelo site e gostaria de agendar uma avaliação.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-[0_10px_30px_rgba(46,168,154,0.45)] transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
