import { SectionHeading } from "@/components/SectionHeading"
import { TestimonialCard } from "@/components/TestimonialCard"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          kicker="Depoimentos"
          title="A experiência de quem já passou por aqui"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-muted">
          Depoimentos ilustrativos — serão substituídos por avaliações reais e autorizadas pelos
          pacientes.
        </p>
      </div>
    </section>
  )
}
