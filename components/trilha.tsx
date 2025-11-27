"use client"

import { Button } from "@/components/ui/button"

interface Etapa {
  numero: string
  titulo: string
  descricao: string
  beneficios?: string[]
  badges?: string[]
  destaque?: boolean
}

interface TrilhaProps {
  title: string
  subtitle: string
  etapas: Etapa[]
  onClickBotao?: () => void
  textoBotao?: string
  observacao?: string
  bgColor?: string
}

export function Trilha({
  title,
  subtitle,
  etapas,
  onClickBotao,
  textoBotao,
  observacao,
  bgColor = "bg-white",
}: TrilhaProps) {
  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground text-balance">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Linha vertical da timeline */}
            <div className="absolute left-4 md:left-6 top-4 w-0.5 bg-border" style={{ height: `calc(100% - 2rem)` }} />

            {/* Etapas */}
            <div className="space-y-6 md:space-y-8">
              {etapas.map((etapa, index) => (
                <div key={index} className="relative pl-12 md:pl-16">
                  {/* Dot na timeline */}
                  <div
                    className={`absolute left-0 md:left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-background ${
                      etapa.destaque ? "bg-foreground text-background" : "bg-muted text-foreground"
                    }`}
                  >
                    {etapa.numero}
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-xl p-5 md:p-6 transition-shadow ${
                      etapa.destaque
                        ? "bg-foreground text-background shadow-lg"
                        : "bg-card border shadow-sm hover:shadow-md"
                    }`}
                  >
                    <h3
                      className={`text-lg md:text-xl font-bold mb-2 ${
                        etapa.destaque ? "text-background" : "text-foreground"
                      }`}
                    >
                      {etapa.titulo}
                    </h3>

                    <p
                      className={`text-sm md:text-base leading-relaxed ${
                        etapa.destaque ? "text-background/80" : "text-muted-foreground"
                      }`}
                    >
                      {etapa.descricao}
                    </p>

                    {/* Benefícios */}
                    {etapa.beneficios && etapa.beneficios.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {etapa.beneficios.map((beneficio, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 text-sm ${
                              etapa.destaque ? "text-background/80" : "text-muted-foreground"
                            }`}
                          >
                            <span className={etapa.destaque ? "text-background" : "text-foreground"}>•</span>
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Badges */}
                    {etapa.badges && etapa.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {etapa.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              etapa.destaque ? "bg-background/20 text-background" : "bg-muted text-foreground"
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {textoBotao && onClickBotao && (
          <div className="text-center mt-12 md:mt-16">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background mb-4"
              onClick={onClickBotao}
            >
              {textoBotao}
            </Button>
            {observacao && <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{observacao}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
