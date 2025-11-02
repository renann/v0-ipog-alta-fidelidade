import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, FileText, Award } from "lucide-react"

interface FormaIngresso {
  icon: React.ReactNode
  titulo: string
  descricao: string
  cta: string
  href: string
}

interface FormasIngressoProps {
  title?: string
  description?: string
}

export function FormasIngresso({
  title = "Formas de ingresso",
  description = "Escolha a melhor forma de ingressar na graduação IPOG",
}: FormasIngressoProps) {
  const formas: FormaIngresso[] = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      titulo: "Vestibular",
      descricao: "Faça nossa prova de ingresso e garanta sua vaga. Processo seletivo ágil e objetivo.",
      cta: "Fazer prova agora",
      href: "/vestibular",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      titulo: "Boletim do ENEM",
      descricao: "Use sua nota do ENEM para ingressar sem precisar fazer vestibular.",
      cta: "Usar nota do ENEM",
      href: "/enem",
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      titulo: "Portador de Diploma",
      descricao: "Já tem diploma de graduação? Ingresse direto sem processo seletivo.",
      cta: "Ingressar com diploma",
      href: "/portador-diploma",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
          {description && <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {formas.map((forma, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6 p-4 rounded-full bg-primary/10">{forma.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{forma.titulo}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{forma.descricao}</p>
              <Button asChild className="w-full">
                <a href={forma.href}>{forma.cta}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
