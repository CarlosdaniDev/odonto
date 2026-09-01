export interface FAQItem {
  question: string
  answer: string
}

// Perguntas e respostas reais sobre o funcionamento da clínica.
export const faqItems: FAQItem[] = [
  {
    question: "Quais especialidades a Odonto Medic oferece?",
    answer:
      "Além de odontologia completa — implantes, ortodontia, próteses, endodontia e mais — contamos com especialidades médicas como psiquiatria, cardiologia, endocrinologia, nutrição e fonoaudiologia, tudo em um só lugar.",
  },
  {
    question: "Vocês têm mais de uma unidade?",
    answer:
      "Sim, atendemos em Itaguara e Crucilândia (MG). Você escolhe a unidade mais próxima e agenda direto pelo WhatsApp.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "É simples: clique em um dos botões de WhatsApp da página e fale diretamente com a equipe da unidade escolhida para marcar o melhor horário.",
  },
  {
    question: "A clínica realiza exames de imagem no local?",
    answer:
      "Sim — radiografias, ultrassonografias, tomografia e documentação ortodôntica são feitas na própria clínica, o que agiliza o diagnóstico e o início do tratamento.",
  },
  {
    question: "O que é harmonização orofacial?",
    answer:
      "É um conjunto de procedimentos estéticos faciais, como aplicação de botox, pensado em conjunto com a saúde bucal para equilibrar as proporções do rosto.",
  },
]
