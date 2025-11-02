import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  /**
   * Título obrigatório da seção - garante que nenhuma seção fique sem título
   */
  title: string
  /**
   * Conteúdo da seção
   */
  children: ReactNode
  /**
   * ID opcional para navegação/âncoras
   */
  id?: string
  /**
   * Classes CSS adicionais
   */
  className?: string
  /**
   * Cor de fundo da seção
   */
  bgColor?: string
  /**
   * Nível do título (h2, h3, etc)
   * @default "h2"
   */
  titleLevel?: "h2" | "h3" | "h4"
}

export function SectionWrapper({
  title,
  children,
  id,
  className,
  bgColor = "bg-background",
  titleLevel = "h2",
}: SectionWrapperProps) {
  const TitleTag = titleLevel

  return (
    <section id={id} className={cn("w-full py-12 md:py-16", bgColor, className)}>
      <div className="max-w-screen-xl mx-auto px-4">
        <TitleTag className="text-3xl font-bold text-center mb-12">{title}</TitleTag>
        {children}
      </div>
    </section>
  )
}
