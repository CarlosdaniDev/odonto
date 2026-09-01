export interface Doctor {
  slug: string
  name: string
  role: string
  /** registro profissional — placeholder até a clínica confirmar o número real */
  license: string
  photo: string
  bio: string
  tags: string[]
  featured?: boolean
}

// Equipe real da Odonto Medic. Os números de CRO/CRN são placeholders
// explícitos — nunca inventamos um número de registro profissional real.
export const doctors: Doctor[] = [
  {
    slug: "elis-couto",
    name: "Dra. Elis Couto",
    role: "Cirurgiã-Dentista",
    license: "CRO-MG (a confirmar)",
    photo: "/img/elis.jpg",
    bio: "Atua com foco em prótese, radiologia, implantes e harmonização orofacial, acompanhando o paciente do diagnóstico à conclusão do tratamento.",
    tags: ["Prótese", "Radiologia", "Implantes", "Harmonização Orofacial"],
    featured: true,
  },
  {
    slug: "lorena-andrade",
    name: "Lorena Andrade",
    role: "Nutricionista",
    license: "CRN (a confirmar)",
    photo: "/img/lorena.jpg",
    bio: "Planeja acompanhamento nutricional individualizado, com foco em reeducação alimentar e resultados sustentáveis a longo prazo.",
    tags: ["Emagrecimento", "Reeducação alimentar", "Hipertrofia"],
  },
]
