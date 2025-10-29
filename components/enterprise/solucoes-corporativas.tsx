"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Building2, Users, Target, ArrowRight } from "lucide-react"
import { openAssistantWithFlow } from "@/lib/assistant-events"

const solucoes = [
  {
    icon: Building2,
    badge: "PROGRAMAS CORPORATIVOS",
    titulo: "Soluções Customizadas",
    descricao:
      "Programas desenhados sob medida para os desafios específicos da sua organização, combinando diagnóstico estratégico, desenvolvimento executivo e mensuração de impacto.",
    beneficios: [
      "Diagnóstico organizacional completo",
      "Curadoria de conteúdo personalizada",
      "Acompanhamento executivo dedicado",
      "Relatórios de ROI e performance",
    ],
    duracao: "6 a 18 meses",
    formato: "Híbrido (Presencial + Online)",
  },
  {
    icon: Users,
    badge: "DESENVOLVIMENTO DE LIDERANÇAS",
    titulo: "Programas Executivos",
    descricao:
      "Desenvolvimento de lideranças C-Level e alta gestão com foco em competências estratégicas, tomada de decisão e gestão de mudanças organizacionais.",
    beneficios: [
      "Foco em lideranças estratégicas",
      "Networking executivo de alto nível",
      "Cases corporativos reais",
      "Mentoria individual com executivos",
    ],
    duracao: "3 a 12 meses",
    formato: "Presencial + Imersões",
  },
  {
    icon: Target,
    badge: "CONSULTORIA EMPRESARIAL",
    titulo: "Diagnóstico e Implementação",
    descricao:
      "Consultoria estratégica para diagnóstico de competências, desenho de trilhas de aprendizagem e implementação de programas de educação corporativa com mensuração contínua.",
    beneficios: [
      "Mapeamento de gaps de competências",
      "Desenho de trilhas de aprendizagem",
      "Implementação e gestão de programas",
      "Dashboard de indicadores em tempo real",
    ],
    duracao: "Sob demanda",
    formato: "Consultoria + Implementação",
  },
]

export function SolucoesCorporativas() {
  return (
    <section id="solucoes" className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Escolha a solução que acelera a performance da sua empresa
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Programas corporativos estruturados com metodologia 6DS e foco em resultados mensuráveis
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {solucoes.map((solucao, index) => {
                const Icon = solucao.icon
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full min-h-[550px] border-border bg-background">
                      <CardContent className="flex h-full min-h-[550px] flex-col p-6">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <Badge variant="outline" className="mb-4 w-fit text-xs">
                          {solucao.badge}
                        </Badge>
                        <h3 className="mb-3 text-xl font-bold text-foreground">{solucao.titulo}</h3>
                        <p className="mb-6 text-sm text-muted-foreground">{solucao.descricao}</p>

                        <div className="mb-6 flex-1">
                          <p className="mb-3 text-xs font-semibold uppercase text-muted-foreground">Benefícios:</p>
                          <ul className="space-y-2">
                            {solucao.beneficios.map((beneficio, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <span className="mt-1">•</span>
                                <span>{beneficio}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto space-y-4">
                          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                            <span>Duração: {solucao.duracao}</span>
                            <span>•</span>
                            <span>{solucao.formato}</span>
                          </div>
                          <Button className="w-full" onClick={() => openAssistantWithFlow("consultor")}>
                            Solicitar proposta
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
