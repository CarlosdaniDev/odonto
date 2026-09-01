import { MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { IconInstagram } from "./IconInstagram"

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-8 text-white/70">
      <div className="container-page grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl text-white">
            ODONTO <span className="italic text-teal-soft">Medic</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Odontologia e saúde com tecnologia e excelência, em um só lugar, em Itaguara e Crucilândia -
            MG.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Odonto Medic"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-teal hover:text-teal-soft"
          >
            <IconInstagram className="h-4.5 w-4.5" />
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Navegação</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-teal-soft">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Unidades</h4>
          <ul className="mt-4 space-y-4 text-sm">
            {siteConfig.units.map((unit) => (
              <li key={unit.slug} className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-soft" />
                <div>
                  <div className="font-semibold text-white">{unit.name}</div>
                  <div>{unit.address}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-white/60">
                    <Phone className="h-3.5 w-3.5" /> {unit.phoneDisplay}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
        <p>
          © {new Date().getFullYear()} Odonto Medic. Todos os direitos reservados. CNPJ (a inserir) ·
          CRO responsável (a inserir).
        </p>
      </div>
    </footer>
  )
}
