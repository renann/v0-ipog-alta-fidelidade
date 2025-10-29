"use client"

import { GraduationCap, TrendingUp, RefreshCw, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const personas = [
  {
    icon: GraduationCap,
    title: "Sou estudante",
    description: "Graduação",
    link: "/graduacao",
  },
  {
    icon: TrendingUp,
    title: "Quero me especializar",
    description: "Pós-Graduação",
    link: null,
  },
  {
    icon: RefreshCw,
    title: "Preciso me atualizar",
    description: "Extensão",
    link: null,
  },
  {
    icon: Building2,
    title: "Sou empresa",
    description: "Enterprise",
    link: null,
  },
]

export function AssistenteTrilha() {
  return (
    <section className="w-full px-4 py-12 bg-muted/30">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">Qual é o seu momento profissional?</h2>
            <p className="text-muted-foreground">Descubra a formação ideal para sua trajetória</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {personas.map((persona) => {
              const Icon = persona.icon
              const cardContent = (
                <CardContent className="flex flex-col items-center justify-center p-6 gap-3 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{persona.title}</h3>
                    <p className="text-sm text-muted-foreground">{persona.description}</p>
                  </div>
                </CardContent>
              )

              if (persona.link) {
                return (
                  <Link key={persona.title} href={persona.link}>
                    <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 h-full">
                      {cardContent}
                    </Card>
                  </Link>
                )
              }

              return (
                <Card key={persona.title} className="h-full">
                  {cardContent}
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
