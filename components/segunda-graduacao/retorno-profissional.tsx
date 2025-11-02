import { Card } from "@/components/ui/card"
import { TrendingUp, Award, Clock } from "lucide-react"

export function RetornoProfissional() {
  const estatisticas = [
    {
      icon: TrendingUp,
      value: "92%",
      description: "dos alunos relataram avanço na carreira em menos de 12 meses",
    },
    {
      icon: Award,
      value: "87%",
      description: "conseguiram promoção ou mudança de área após a formação",
    },
    {
      icon: Clock,
      value: "2,5 anos",
      description: "tempo médio de conclusão vs 4 anos tradicionais",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Profissionais experientes que aceleraram suas carreiras
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {estatisticas?.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            )
          })}
        </div>

        <Card className="p-6 bg-muted/30">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0" />
            <div>
              <p className="text-sm mb-2 italic">
                "Fazer uma segunda graduação no IPOG foi a melhor decisão da minha carreira. Consegui validar minha
                experiência profissional e concluir o curso em tempo recorde. Em 6 meses após a formatura, recebi uma
                promoção significativa."
              </p>
              <p className="text-sm font-semibold">— Carlos Mendes, Administração 2024</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
