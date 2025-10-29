import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Play } from "lucide-react"
import Link from "next/link"

export function AplicacaoImediataRecolocacao() {
  const estatisticas = [
    {
      icon: CheckCircle2,
      valor: "83%",
      descricao: "construíram portfólio em até 30 dias",
    },
    {
      icon: TrendingUp,
      valor: "87%",
      descricao: "conseguiram recolocação em até 4 meses",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Profissionais que se recolocaram com o IPOG</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o impacto real dos cursos de extensão focados em recolocação
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
                "Estava há 8 meses fora do mercado. Com o curso de Marketing Digital do IPOG, construí um portfólio
                sólido e em 3 meses consegui uma recolocação melhor que a anterior."
              </p>
              <p className="font-semibold">— Carlos Eduardo, Marketing Digital 2024</p>
              <p className="text-sm text-muted-foreground">Desempregado → Coordenador de Marketing</p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/extensao">Veja histórias reais de recolocação</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
