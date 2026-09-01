export interface GalleryImage {
  src: string
  alt: string
  big?: boolean
}

// Fotos reais da estrutura da clínica (recortadas das artes promocionais
// oficiais da Odonto Medic — sem logotipo/texto sobreposto).
export const galleryImages: GalleryImage[] = [
  { src: "/img/clinicas.jpg", alt: "Recepção da Odonto Medic", big: true },
  { src: "/img/consultorios.jpg", alt: "Consultório odontológico equipado" },
  { src: "/img/tecnologia.jpg", alt: "Sala de atendimento com tecnologia e conforto" },
]
