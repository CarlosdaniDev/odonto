import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/Button"
import { siteConfig, waLink } from "@/config/site"

export function ClinicsContact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32">
      <div className="container-page">
        <SectionHeading
          kicker="Onde estamos"
          title="Nossas clínicas"
          description="Escolha a unidade mais próxima de você e agende seu atendimento pelo WhatsApp."
          light
          watermark="Unidades"
        />

        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/70">
            <Clock className="h-4 w-4 text-teal-soft" />
            {siteConfig.openingHours}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {siteConfig.units.map((unit, i) => (
            <Reveal key={unit.slug} delay={i * 0.1}>
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/5">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    src={`https://www.google.com/maps?q=${unit.addressQuery}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa — ${unit.name}`}
                    aria-label={`Mapa mostrando a localização da ${unit.name}`}
                    className="h-full w-full grayscale-[20%] contrast-[1.05]"
                    style={{ border: 0 }}
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <h3 className="font-display text-xl">{unit.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{unit.address}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                    <Phone className="h-3.5 w-3.5" /> {unit.phoneDisplay}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      icon={<MessageCircle className="h-4 w-4" />}
                      href={waLink(unit.whatsapp, "Olá! Gostaria de agendar uma avaliação.")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Falar no WhatsApp
                    </Button>
                    <Button
                      variant="ghost-light"
                      icon={<Navigation className="h-4 w-4" />}
                      href={`https://www.google.com/maps/dir/?api=1&destination=${unit.addressQuery}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Como chegar
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
