"use client"

import Link from "next/link"
import { GraduationCap, Award, Zap, Building2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface QuatroVerticaisProps {
  titulo?: string
}

const verticais = [
  {
    icon: GraduationCap,
    tag: "Graduação",
    title: "Formação Superior Completa",
    promessa: "Bacharelado com foco em empregabilidade e desenvolvimento profissional",
    diferenciais: ["Modalidades EAD e Presencial", "Programas de bolsas", "Networking e conexões profissionais"],
    href: "/catalogo?categoria=graduacao",
    color: "bg-muted",
    active: true,
  },
  {
    icon: Award,
    tag: "Pós-Graduação",
    title: "Especialização Profissional",
    promessa: "Aprofunde seus conhecimentos com credibilidade de mais de 20 anos",
    diferenciais: ["Corpo docente qualificado", "Networking executivo", "Certificação reconhecida pelo MEC"],
    href: "/catalogo?categoria=pos-graduacao",
    color: "bg-muted",
    active: true,
  },
  {
    icon: Zap,
    tag: "Extensão",
    title: "Atualização Rápida",
    promessa: "Cursos práticos para aplicação imediata no mercado",
    diferenciais: ["Cursos de curta duração", "Conteúdo aplicável", "Certificação universitária"],
    href: "/catalogo?categoria=extensao",
    color: "bg-muted",
    active: true,
  },
  {
    icon: Building2,
    tag: "Enterprise",
    title: "Soluções Corporativas",
    promessa: "Educação corporativa com resultados mensuráveis",
    diferenciais: ["Metodologia 6DS", "Programas personalizados", "ROI comprovado"],
    href: "/enterprise",
    ctaText: "Solicitar diagnóstico corporativo",
    color: "bg-muted",
    active: true,
  },
]

export function QuatroVerticais({ titulo = "Escolha o caminho que combina com sua trajetória" }: QuatroVerticaisProps) {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="bg-background rounded-[45px_45px_45px_15px] p-8 md:p-12 shadow-sm border border-border">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">{titulo}</h2>
              <p className="text-muted-foreground text-lg">Formação completa para cada momento da sua carreira</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {verticais.map((vertical) => {
                const Icon = vertical.icon
                return (
                  <Card key={vertical.tag} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-12 w-12 rounded-lg ${vertical.color} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="h-6 w-6 text-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-muted-foreground uppercase">{vertical.tag}</p>
                          <h3 className="text-xl font-bold">{vertical.title}</h3>
                        </div>
                      </div>

                      <p className="text-lg font-medium">{vertical.promessa}</p>

                      <div className="space-y-2">
                        {vertical.diferenciais.map((diferencial) => (
                          <div key={diferencial} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-foreground shrink-0" />
                            <span className="text-sm">{diferencial}</span>
                          </div>
                        ))}
                      </div>

                      {vertical.active ? (
                        <Button asChild className="w-full" size="lg">
                          <Link href={vertical.href}>
                            {vertical.ctaText || `Ver cursos de ${vertical.tag}`}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled className="w-full" size="lg">
                          {vertical.ctaText || `Ver cursos de ${vertical.tag}`}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
