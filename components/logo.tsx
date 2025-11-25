import Image from "next/image"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/logo-ipog-full.svg"
        alt="IPOG - Instituto de Pós-Graduação & Graduação"
        width={200}
        height={28}
        priority
        className={variant === "light" ? "brightness-0 invert" : ""}
      />
    </div>
  )
}
