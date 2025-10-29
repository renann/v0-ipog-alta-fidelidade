"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"
import type { ReactNode } from "react"

interface DoreSolucao {
  icon: ReactNode
  titulo: string
  descricao?: string
  dor?: string
  solucao: string
}

interface DilemaProps {
  titulo: string
  subtitulo: string
  solucao?: string
  imagemUrl?: string
  backgroundColor?: string
  dores?: DoreSolucao[]
  ctaText?: string
  ctaAction?: () => void
  showBorder?: boolean
}

export function Dilema({
  titulo,
  subtitulo,
  solucao,
  imagemUrl,
  backgroundColor = "bg-background",
  dores = [],
  ctaText,
  ctaAction,
  showBorder = false,
}: DilemaProps) {
  if (dores.length > 0) {
    return (
      <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{titulo}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{subtitulo}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dores.map((dor, index) => (
              <Card key={index} className={showBorder ? "border-2" : ""}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">{dor.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center">{dor.titulo}</h3>
                  {dor.descricao && <p className="text-sm text-muted-foreground mb-4 text-center">{dor.descricao}</p>}
                  {dor.dor && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-muted-foreground mb-1">A dor:</p>
                      <p className="text-sm">{dor.dor}</p>
                    </div>
                  )}
                  <div className={dor.descricao || dor.dor ? "pt-4 border-t" : ""}>
                    {dor.dor && <p className="text-sm font-medium text-primary mb-1">A solução:</p>}
                    <p className={`text-sm ${dor.dor ? "font-medium" : "text-muted-foreground"} text-center`}>
                      {dor.solucao}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {ctaText && ctaAction && (
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" onClick={ctaAction}>
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{titulo}</h2>
              <p className="text-muted-foreground mb-4">{subtitulo}</p>
              {solucao && <p className="text-foreground font-medium">{solucao}</p>}
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              {imagemUrl ? (
                <img
                  src={imagemUrl || "/placeholder.svg"}
                  alt={titulo}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <ImageIcon className="w-20 h-20 text-muted-foreground" />
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
