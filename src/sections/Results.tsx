import { SectionHeading } from "@/components/SectionHeading"
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"

export function Results() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          kicker="Resultados"
          title="Resultados que falam por si"
          description="Arraste para comparar. Resultados podem variar de acordo com cada caso."
        />
        <div className="mx-auto max-w-3xl">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  )
}
