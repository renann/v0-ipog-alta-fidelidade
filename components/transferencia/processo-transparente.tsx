import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Award } from "lucide-react"

export function ProcessoTransparente() {
  const estatisticas = [
    {
      icon: Award,
      value: "95%",
      description: "dos créditos reconhecidos em média",
    },
    {
      icon: Clock,
      value: "30 dias",
      description: "para conclusão do processo completo",
    },
    {
      icon: TrendingUp,
      value: "18 meses",
      description: "de economia média de estudo",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Estudantes que transferiram com sucesso e economia</h2>
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
                "Transferi para o IPOG e tive 92% dos meus créditos reconhecidos. O processo foi transparente e rápido,
                economizei quase 2 anos de estudo."
              </p>
              <p className="text-sm font-semibold">— Mariana Costa, Administração 2023</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
