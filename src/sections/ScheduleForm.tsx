import { SectionHeading } from "@/components/SectionHeading"
import { ContactForm } from "@/components/ContactForm"

export function ScheduleForm() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          kicker="Agendamento"
          title="Prefere que a gente te chame?"
          description="Preencha os dados abaixo — vamos abrir o WhatsApp com sua mensagem pronta para enviar."
        />
        <div className="mx-auto max-w-2xl rounded-[26px] border border-navy/8 bg-ivory p-8 shadow-soft sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
