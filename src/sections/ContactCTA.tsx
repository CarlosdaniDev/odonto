import { MessageCircle } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/Button"
import { siteConfig, waLink } from "@/config/site"

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-20 text-white">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[100px]"
      />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Seu próximo sorriso começa com uma conversa.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Agende sua avaliação e descubra o cuidado mais adequado para o seu momento.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button
              icon={<MessageCircle className="h-4 w-4" />}
              href={waLink(siteConfig.units[0].whatsapp, "Olá! Gostaria de agendar minha avaliação.")}
              target="_blank"
              rel="noreferrer"
              className="!bg-white !text-teal-deep hover:!bg-white/90"
            >
              Agendar minha avaliação
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
