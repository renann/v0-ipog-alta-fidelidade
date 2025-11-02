"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

interface Etapa {
  numero: string
  title: string
  description: string
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
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {etapas.map((etapa, index) => {
              const isExpanded = expandedCards.has(index)

              return (
                <Card key={index} className="overflow-hidden border-2 hover:border-gray-400 transition-colors">
                  <button
                    onClick={() => toggleCard(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold">{etapa.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 flex-shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-700 mb-4">{etapa.description}</p>

                      {etapa.beneficios && etapa.beneficios.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {etapa.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span>•</span>
                              <span>{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {etapa.badges && etapa.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {etapa.badges.map((badge, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-medium"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>

        {textoBotao && onClickBotao && (
          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white mb-6" onClick={onClickBotao}>
              {textoBotao}
            </Button>
            {observacao && <p className="text-sm text-gray-600 max-w-2xl mx-auto">{observacao}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
