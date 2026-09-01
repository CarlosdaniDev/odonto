import { SectionHeading } from "@/components/SectionHeading"
import { Gallery } from "@/components/Gallery"
import { galleryImages } from "@/data/gallery"

export function ClinicGallery() {
  return (
    <section id="estrutura" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          kicker="Nossa estrutura"
          title="Um espaço pensado para você"
          description="Ambientes modernos, equipados e climatizados — clique em uma foto para ver em tela cheia."
          watermark="Estrutura"
        />
        <Gallery images={galleryImages} />
      </div>
    </section>
  )
}
