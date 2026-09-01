import type { AnchorHTMLAttributes, ReactNode } from "react"

type Variant = "primary" | "ghost-light" | "ghost-dark"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2 active:scale-[0.97]"

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-white shadow-[0_10px_30px_rgba(46,168,154,0.35)] hover:bg-teal-deep hover:shadow-[0_14px_36px_rgba(46,168,154,0.45)] hover:-translate-y-0.5",
  "ghost-light": "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
  "ghost-dark": "border border-navy/20 text-navy hover:border-navy/50 hover:bg-navy/5",
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  icon?: ReactNode
  className?: string
  children: ReactNode
}

export function Button({ variant = "primary", icon, className = "", children, ...rest }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {icon}
      {children}
    </a>
  )
}
