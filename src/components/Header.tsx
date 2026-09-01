import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { siteConfig, waLink } from "@/config/site"
import { useActiveSection } from "@/hooks/useActiveSection"
import { Button } from "./Button"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(siteConfig.nav.map((n) => n.href))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-navy/10 bg-ivory/85 shadow-soft backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <a
            href="#hero"
            className={`font-display text-xl tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            ODONTO <span className="italic text-teal-soft">Medic</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-teal-deep ${
                  active === item.href
                    ? "text-teal-deep"
                    : scrolled
                      ? "text-ink/80"
                      : "text-white/85"
                }`}
                aria-current={active === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              variant={scrolled ? "ghost-dark" : "ghost-light"}
              href={waLink(siteConfig.units[0].whatsapp, "Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noreferrer"
              className="!py-2.5 !px-5 text-[0.82rem]"
            >
              Agendar consulta
            </Button>
          </div>

          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              scrolled ? "text-navy" : "text-white"
            }`}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeHref={active} />
    </>
  )
}
