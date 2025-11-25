import Image from "next/image"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logoSrc = variant === "light" ? "/logo-ipog-light.svg" : "/logo-ipog-dark.svg"

  return (
    <div className={className}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="IPOG - Instituto de Pós-Graduação & Graduação"
        width={200}
        height={28}
        priority
      />
    </div>
  )
}
