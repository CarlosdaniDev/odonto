import { SectionHeading } from "@/components/SectionHeading"
import { DoctorCard } from "@/components/DoctorCard"
import { doctors } from "@/data/doctors"

export function Team() {
  return (
    <section id="equipe" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          kicker="Nossa equipe"
          title="Conheça quem cuida do seu sorriso"
          description="Especialistas em odontologia e saúde, prontos para oferecer o melhor atendimento."
          watermark="Equipe"
        />

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
