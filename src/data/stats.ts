// ⚠️ PLACEHOLDER — números de exemplo, ainda não confirmados pela clínica.
// A Odonto Medic não passou dados oficiais de tempo de atuação, total de
// pacientes atendidos ou índice de satisfação — por isso os três primeiros
// itens abaixo são ilustrativos (existem só para mostrar como a seção fica
// visualmente). Troque pelos números reais assim que a clínica confirmar,
// ou remova o item caso ela prefira não divulgar.
// O único valor real aqui é "especialidades", que é a contagem de itens
// cadastrados em src/data/treatments.ts + src/data/healthSpecialties.ts.

import { dentalTreatments } from "./treatments"
import { healthSpecialties } from "./healthSpecialties"

export const stats = [
  { value: "10+", label: "anos de experiência", placeholder: true },
  { value: "5.000+", label: "pacientes atendidos", placeholder: true },
  { value: "98%", label: "de satisfação", placeholder: true },
  {
    value: `${dentalTreatments.length + healthSpecialties.length}+`,
    label: "especialidades médicas e odontológicas",
    placeholder: false,
  },
] as const
