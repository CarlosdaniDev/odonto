import {
  Anchor,
  Ruler,
  Puzzle,
  Sparkles,
  Stethoscope,
  Syringe,
  Scissors,
  ScanLine,
  Wand2,
  type LucideIcon,
} from "lucide-react"

export interface Treatment {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  /** controla o tamanho do card no grid assimétrico de desktop */
  span?: "sm" | "md" | "lg"
}

// Lista real de tratamentos odontológicos oferecidos pela Odonto Medic
// (a mesma já usada e validada no site institucional em HTML/CSS/JS).
export const dentalTreatments: Treatment[] = [
  {
    slug: "implantes-dentarios",
    name: "Implantes dentários",
    description: "Reposição de dentes ausentes com implantes de titânio, devolvendo função e estética ao sorriso.",
    icon: Anchor,
    span: "lg",
  },
  {
    slug: "ortodontia",
    name: "Ortodontia",
    description: "Correção do alinhamento dos dentes e da mordida, com aparelhos fixos ou opções estéticas.",
    icon: Ruler,
    span: "md",
  },
  {
    slug: "proteses",
    name: "Próteses",
    description: "Próteses fixas ou removíveis planejadas sob medida para restaurar mastigação e sorriso.",
    icon: Puzzle,
    span: "sm",
  },
  {
    slug: "lentes-de-contato-dental",
    name: "Lentes de contato dental",
    description: "Facetas ultrafinas de porcelana para uniformizar cor, forma e alinhamento do sorriso.",
    icon: Sparkles,
    span: "md",
  },
  {
    slug: "clinica-geral",
    name: "Clínica geral",
    description: "Diagnóstico, prevenção e tratamentos do dia a dia para manter a saúde bucal em dia.",
    icon: Stethoscope,
    span: "sm",
  },
  {
    slug: "endodontia",
    name: "Endodontia",
    description: "Tratamento de canal com técnica atual, priorizando conforto e menor tempo de cadeira.",
    icon: Syringe,
    span: "sm",
  },
  {
    slug: "cirurgias",
    name: "Cirurgias",
    description: "Extrações e pequenas cirurgias orais realizadas com protocolo de segurança e biossegurança.",
    icon: Scissors,
    span: "md",
  },
  {
    slug: "radiologia-odontologica",
    name: "Radiologia odontológica",
    description: "Radiografias e documentação de imagem feitas na própria clínica, agilizando o diagnóstico.",
    icon: ScanLine,
    span: "sm",
  },
  {
    slug: "harmonizacao-orofacial",
    name: "Harmonização orofacial",
    description: "Procedimentos estéticos faciais pensados junto com a saúde bucal para equilibrar o rosto.",
    icon: Wand2,
    span: "lg",
  },
]
