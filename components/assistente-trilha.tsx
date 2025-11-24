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
    link: "/pos-graduacao",
  },
  {
    icon: RefreshCw,
    title: "Preciso me atualizar",
    description: "Extensão",
    link: "/extensao",
  },
  {
    icon: Building2,
    title: "Sou empresa",
    description: "Enterprise",
    link: "/enterprise",
  },
]

export function AssistenteTrilha() {
  return (
    <section className="w-full px-4 py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
              Qual é o seu momento profissional?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Descubra a formação ideal para sua trajetória
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {personas.map((persona) => {
              const Icon = persona.icon
              const cardContent = (
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4 text-center h-full">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-base md:text-lg text-balance">{persona.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{persona.description}</p>
                  </div>
                </CardContent>
              )

              if (persona.link) {
                return (
                  <Link key={persona.title} href={persona.link} className="group">
                    <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 h-full rounded-lg">
                      {cardContent}
                    </Card>
                  </Link>
                )
              }

              return (
                <Card key={persona.title} className="h-full rounded-lg">
                  {cardContent}
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    // </CHANGE>
  )
}
