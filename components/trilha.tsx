"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[29px] top-12 bottom-12 w-0.5 bg-gray-300 hidden md:block" />

          <div className="space-y-8">
            {etapas.map((etapa, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="hidden md:flex items-start pt-4 flex-shrink-0">
                  <div className="w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white text-xl font-bold">{etapa.numero}</span>
                  </div>
                </div>

                <Card className="flex-grow p-6 md:p-8 bg-gray-50 border-2">
                  <div className="md:hidden mb-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">{etapa.numero}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3">{etapa.titulo}</h3>
                  <p className="text-gray-700 mb-4">{etapa.descricao}</p>

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
                </Card>
              </div>
            ))}
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
