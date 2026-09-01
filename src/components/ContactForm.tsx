import { useState, type FormEvent } from "react"
import { Loader2, Send } from "lucide-react"
import { siteConfig, waLink } from "@/config/site"
import { dentalTreatments } from "@/data/treatments"
import { healthSpecialties } from "@/data/healthSpecialties"

interface FormState {
  name: string
  phone: string
  email: string
  interest: string
  message: string
}

const initialState: FormState = { name: "", phone: "", email: "", interest: "", message: "" }

const allInterests = [...dentalTreatments.map((t) => t.name), ...healthSpecialties.map((s) => s.name)]

/**
 * Formulário de agendamento. Sem backend configurado ainda (ver seção 39 do
 * briefing — "preparar integração futura com WhatsApp/Formspree/Resend"), a
 * versão atual monta a mensagem e abre o WhatsApp da unidade já preenchido —
 * assim o formulário funciona de verdade hoje, sem precisar de nenhuma chave
 * de API no frontend. Trocar por um envio real (Formspree/Resend/API própria)
 * é só substituir o conteúdo de handleSubmit.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!values.name.trim()) next.name = "Informe seu nome."
    if (!/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(values.phone.trim())) {
      next.phone = "Informe um telefone válido, com DDD."
    }
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Informe um e-mail válido."
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus("loading")
    const lines = [
      `Olá! Gostaria de solicitar uma avaliação.`,
      `Nome: ${values.name}`,
      values.email ? `E-mail: ${values.email}` : null,
      values.interest ? `Tratamento de interesse: ${values.interest}` : null,
      values.message ? `Mensagem: ${values.message}` : null,
      `Telefone para contato: ${values.phone}`,
    ].filter(Boolean)

    const url = waLink(siteConfig.units[0].whatsapp, lines.join("\n"))
    window.open(url, "_blank", "noreferrer")

    setTimeout(() => {
      setStatus("success")
      setValues(initialState)
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label="Nome" error={errors.name}>
        <input
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          type="text"
          autoComplete="name"
          className={inputClass(!!errors.name)}
        />
      </Field>

      <Field label="Telefone" error={errors.phone}>
        <input
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          type="tel"
          placeholder="(31) 90000-0000"
          autoComplete="tel"
          className={inputClass(!!errors.phone)}
        />
      </Field>

      <Field label="E-mail (opcional)" error={errors.email}>
        <input
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          type="email"
          autoComplete="email"
          className={inputClass(!!errors.email)}
        />
      </Field>

      <Field label="Tratamento de interesse (opcional)">
        <select
          value={values.interest}
          onChange={(e) => setValues({ ...values, interest: e.target.value })}
          className={inputClass(false)}
        >
          <option value="">Selecione…</option>
          {allInterests.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </Field>

      <div className="sm:col-span-2">
        <Field label="Mensagem (opcional)">
          <textarea
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            rows={4}
            className={inputClass(false)}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          Solicitar avaliação
        </button>
        {status === "success" && (
          <span className="text-sm font-medium text-teal-deep">
            Prontinho! Abrimos o WhatsApp com sua mensagem já preenchida.
          </span>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-navy">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-teal ${
    hasError ? "border-red-400" : "border-navy/15"
  }`
}
