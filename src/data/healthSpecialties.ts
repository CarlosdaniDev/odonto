import { Brain, HeartPulse, Activity, Waves, Apple, Mic2, type LucideIcon } from "lucide-react"

export interface Specialty {
  slug: string
  name: string
  description: string
  icon: LucideIcon
}

// Especialidades médicas reais atendidas na Odonto Medic, além da odontologia
// (mesma lista já validada no site institucional).
export const healthSpecialties: Specialty[] = [
  {
    slug: "psiquiatria",
    name: "Psiquiatria",
    description: "Acompanhamento da saúde mental com consultas humanizadas e acolhedoras.",
    icon: Brain,
  },
  {
    slug: "cardiologia",
    name: "Cardiologia",
    description: "Avaliação cardiovascular preventiva e acompanhamento contínuo.",
    icon: HeartPulse,
  },
  {
    slug: "endocrinologia",
    name: "Endocrinologia",
    description: "Cuidado com metabolismo, hormônios e condições como diabetes e tireoide.",
    icon: Activity,
  },
  {
    slug: "ultrassonografias",
    name: "Ultrassonografias",
    description: "Exames de imagem realizados na própria clínica, com agilidade no resultado.",
    icon: Waves,
  },
  {
    slug: "nutricao",
    name: "Nutrição",
    description: "Planos alimentares personalizados para cada objetivo e fase da vida.",
    icon: Apple,
  },
  {
    slug: "fonoaudiologia",
    name: "Fonoaudiologia",
    description: "Terapia da fala, voz e funções orofaciais para todas as idades.",
    icon: Mic2,
  },
]
