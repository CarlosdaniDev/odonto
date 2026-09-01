export interface Testimonial {
  name: string
  city: string
  rating: number
  quote: string
}

// ⚠️ PLACEHOLDER — nenhum depoimento real foi coletado ainda. Os itens abaixo
// existem só para mostrar como a seção fica visualmente montada; troque por
// avaliações reais e autorizadas pelos pacientes antes de publicar o site.
export const testimonials: Testimonial[] = [
  {
    name: "Nome do paciente",
    city: "Itaguara - MG",
    rating: 5,
    quote:
      "Depoimento ilustrativo — substitua por uma avaliação real, com autorização do paciente, antes de publicar.",
  },
  {
    name: "Nome do paciente",
    city: "Crucilândia - MG",
    rating: 5,
    quote:
      "Depoimento ilustrativo — substitua por uma avaliação real, com autorização do paciente, antes de publicar.",
  },
  {
    name: "Nome do paciente",
    city: "Itaguara - MG",
    rating: 5,
    quote:
      "Depoimento ilustrativo — substitua por uma avaliação real, com autorização do paciente, antes de publicar.",
  },
]
