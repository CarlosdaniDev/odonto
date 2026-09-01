// Dados reais da clínica, centralizados aqui de propósito (ver seção 31 do
// briefing): qualquer edição de telefone, endereço ou link social muda em
// UM lugar só e reflete no site inteiro.

export const siteConfig = {
  name: "Odonto Medic",
  tagline: "Clínica de Especialidades em Itaguara e Crucilândia",
  description:
    "Odonto Medic — odontologia e saúde com tecnologia e excelência. Implantes, ortodontia, próteses, endocrinologia, nutrição e mais, em Itaguara e Crucilândia - MG.",

  email: "contato@odontomedic.com.br", // placeholder — confirmar e-mail oficial com a clínica
  instagram: "https://instagram.com/odontomedic_clinicas",

  units: [
    {
      slug: "itaguara",
      name: "Clínica Itaguara",
      address: "Av. Dr. Antonio Geraldo de Oliveira, 169 — Centro, Itaguara - MG, 35488-000",
      addressQuery:
        "Av.%20Dr.%20Antonio%20Geraldo%20de%20Oliveira%2C%20169%2C%20Centro%2C%20Itaguara%20-%20MG%2C%2035488-000",
      phoneDisplay: "(31) 99919-2584",
      whatsapp: "5531999192584",
    },
    {
      slug: "crucilandia",
      name: "Clínica Crucilândia",
      address: "R. Gabriel Passos, 8 — Crucilândia - MG, 35520-000",
      addressQuery: "R.%20Gabriel%20Passos%2C%208%2C%20Crucil%C3%A2ndia%20-%20MG%2C%2035520-000",
      phoneDisplay: "(31) 98409-3209",
      whatsapp: "5531984093209",
    },
  ],

  openingHours: "Segunda a sexta, 8h às 18h — horários de sábado sob consulta", // confirmar com a clínica

  nav: [
    { label: "Início", href: "#hero" },
    { label: "A Clínica", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Equipe", href: "#equipe" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Contato", href: "#contato" },
  ],
} as const

export function waLink(whatsapp: string, message?: string) {
  const base = `https://wa.me/${whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
