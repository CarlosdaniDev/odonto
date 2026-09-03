# Odonto Medic — site institucional (React)

Site institucional da Odonto Medic (Itaguara e Crucilândia - MG), construído em
React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React.

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/ pronta para publicar
npm run preview   # serve a pasta dist/ localmente, pra conferir o build final
```

## Estrutura do projeto

```
src/
  components/   componentes reutilizáveis (Header, Button, Gallery, etc.)
  sections/     cada seção da página (Hero, Treatments, Team, FAQ, etc.)
  data/         conteúdo em arrays/objetos (tratamentos, equipe, depoimentos, FAQ)
  config/       dados centrais da clínica (telefones, endereços, links) — site.ts
  hooks/        useCountUp, useActiveSection, useLockBodyScroll
public/
  img/          fotos reais da clínica
  fonts/        Caladea/Carlito (mesmas fontes do site original)
```

Pra trocar qualquer telefone, endereço ou link, o único arquivo que importa é
`src/config/site.ts` — o resto do site lê dali.

## ⚠️ Antes de publicar de verdade — checklist

Alguns conteúdos abaixo são **placeholders** (dados de exemplo), colocados de
propósito só para mostrar como cada seção fica visualmente. Substitua antes de
o site ir ao ar:

- **`src/data/stats.ts`** — "10+ anos de experiência", "5.000+ pacientes" e
  "98% de satisfação" são exemplos. Troque pelos números reais assim que a
  clínica confirmar (o "15+ especialidades" já é real — é a contagem dos
  itens em `treatments.ts` + `healthSpecialties.ts`).
- **`src/data/testimonials.ts`** — depoimentos ilustrativos. Troque por
  avaliações reais e **autorizadas pelos pacientes**.
- **`src/components/BeforeAfterSlider.tsx`** — o comparador de antes/depois
  está usando uma foto de banco de imagens só como exemplo (não é paciente da
  clínica), porque a Odonto Medic ainda não passou nenhum caso real
  autorizado. Troque `public/img/resultado-exemplo-antes.jpg` e
  `resultado-exemplo-depois.jpg` pelas fotos reais assim que tiver um caso
  autorizado por escrito pelo paciente — nunca publique um "antes/depois" que
  não seja de um paciente de verdade da clínica.
- **`src/data/doctors.ts`** — os números de CRO/CRN estão como
  "(a confirmar)". Nunca preencha um número de registro profissional sem
  confirmar com o profissional responsável.
- **Footer** (`src/components/Footer.tsx`) — CNPJ e "CRO responsável" também
  estão como "(a inserir)".
- **`src/config/site.ts`** — o e-mail e o link do Instagram estão marcados
  como placeholder/a confirmar; o `openingHours` (horário de funcionamento)
  também deve ser confirmado com a clínica.
- **`index.html`** — falta o domínio final (canonical, sitemap, robots.txt
  apontam para `SEU-DOMINIO-REAL`) e a imagem do `og:image` deve virar uma
  URL absoluta depois de publicado.

## Publicando

Como é um projeto Vite comum, publica em qualquer serviço de hospedagem
estática (Vercel, Netlify, Cloudflare Pages...): conecte o repositório e use
`npm run build` como comando de build e `dist` como pasta de saída.
