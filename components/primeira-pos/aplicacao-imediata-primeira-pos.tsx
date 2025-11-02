"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Play } from "lucide-react"
import Link from "next/link"

export function AplicacaoImediataPrimeiraPos() {
  const estatisticas = [
    {
      icon: CheckCircle2,
      valor: "85%",
      descricao: "aplicaram o conteúdo no trabalho em até 30 dias",
    },
    {
      icon: TrendingUp,
      valor: "89%",
      descricao: "relataram avanço de cargo em até 6 meses",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Profissionais que aplicaram o que aprenderam e cresceram rápido
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o impacto real da primeira especialização IPOG
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {estatisticas.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.valor}</div>
                <p className="text-muted-foreground">{stat.descricao}</p>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Play className="w-16 h-16 text-muted-foreground" />
            </div>
            <div>
              <p className="text-lg italic mb-4">
                "A Pós IPOG foi decisiva para minha primeira promoção. Em 3 meses já estava aplicando o conteúdo no meu
                trabalho e em 6 meses recebi a promoção que tanto esperava."
              </p>
              <p className="font-semibold">— Ana Paula, MBA em Gestão 2024</p>
              <p className="text-sm text-muted-foreground">Analista → Coordenadora</p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/pos-graduacao">Veja histórias reais de primeira especialização</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
