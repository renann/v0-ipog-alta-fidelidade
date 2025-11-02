import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  /**
   * Título obrigatório da seção - garante que nenhuma seção fique sem título
   */
  titulo: string
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
  nivelTitulo?: "h2" | "h3" | "h4"
}

export function SectionWrapper({
  titulo,
  children,
  id,
  className,
  bgColor = "bg-background",
  nivelTitulo = "h2",
}: SectionWrapperProps) {
  const TituloTag = nivelTitulo

  return (
    <section id={id} className={cn("w-full py-12 md:py-16", bgColor, className)}>
      <div className="max-w-screen-xl mx-auto px-4">
        <TituloTag className="text-3xl font-bold text-center mb-12">{titulo}</TituloTag>
        {children}
      </div>
    </section>
  )
}
