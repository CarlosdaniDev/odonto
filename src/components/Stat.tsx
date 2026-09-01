import { useCountUp } from "@/hooks/useCountUp"

interface StatProps {
  value: string
  label: string
  light?: boolean
}

export function Stat({ value, label, light = false }: StatProps) {
  const { ref, display } = useCountUp(value)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center sm:text-left">
      <div className={`font-display text-4xl sm:text-5xl ${light ? "text-white" : "text-navy"}`}>
        {display}
      </div>
      <div className={`mt-1.5 text-sm ${light ? "text-white/65" : "text-muted"}`}>{label}</div>
    </div>
  )
}
