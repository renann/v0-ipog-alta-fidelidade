"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign } from "lucide-react"
import { GeoLink } from "@/components/geo-link"

export function ROIPos() {
  const projections = [
    {
      period: "Após o curso",
      value: "R$ 6.685/mês",
      description: "Júnior → Sênior",
    },
    {
      period: "1-2 anos após",
      value: "+32%",
      description: "crescimento salarial médio",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Retorno de investimento da Pós IPOG</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Projeção de evolução salarial com base em médias de mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projections.map((projection, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {index === 0 ? (
                  <DollarSign className="w-8 h-8 text-primary" />
                ) : (
                  <TrendingUp className="w-8 h-8 text-primary" />
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{projection.period}</p>
              <div className="text-4xl font-bold mb-2">{projection.value}</div>
              <p className="text-muted-foreground">{projection.description}</p>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mb-8">
          * Faixas estimadas, variando por área e tempo de experiência
        </p>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <GeoLink href="/catalogo?formacao=pos-graduacao">Encontre seu curso</GeoLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
