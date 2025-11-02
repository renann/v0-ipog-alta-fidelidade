"use client"

import { Button } from "@/components/ui/button"
import { Search, BookOpen, Rocket, Award } from "lucide-react"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export function MetodoExtensao() {
  const etapas = [
    {
      icon: Search,
      titulo: "Diagnóstico rápido",
      descricao: "Identifique seu gap técnico ou de mercado em minutos",
      status: "current",
    },
    {
      icon: BookOpen,
      titulo: "Curso de impacto",
      descricao: "Formato rápido e modular: aprenda apenas o essencial",
      status: "future",
    },
    {
      icon: Rocket,
      titulo: "Aplicação imediata",
      descricao: "Atividade prática para aplicar no dia seguinte",
      status: "future",
    },
    {
      icon: Award,
      titulo: "Certificação",
      descricao: "Validação reconhecida e destaque no currículo",
      status: "future",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aprendizado direto ao ponto</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Extensão IPOG combina especialistas de mercado e metodologia ágil para entregar resultado em semanas
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {etapas.map((etapa, index) => {
                const Icon = etapa.icon
                const isCurrent = etapa.status === "current"

                return (
                  <div key={index} className="relative flex items-center gap-4 md:gap-8">
                    {/* Icon */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isCurrent
                          ? "bg-primary/20 text-primary border-2 border-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-background border rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2">{etapa.titulo}</h3>
                      <p className="text-muted-foreground">{etapa.descricao}</p>
                      {isCurrent && (
                        <div className="mt-3">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                            Comece aqui
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" onClick={openAssistantForConsultor}>
            Construa sua trilha
          </Button>
        </div>
      </div>
    </section>
  )
}
