import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Calculator, Mail } from "lucide-react"

export function EngajamentoContinuo() {
  const recursos = [
    {
      icon: Video,
      title: "Mini webinars gratuitos",
      description: "Participe de sessões ao vivo com professores especialistas",
      cta: "Agendar webinar",
    },
    {
      icon: Calculator,
      title: "Simulador de ROI profissional",
      description: "Calcule o retorno do seu investimento em educação",
      cta: "Simular ROI",
    },
    {
      icon: Mail,
      title: "Newsletter A Pragmática em Ação",
      description: "Receba tendências semanais e dicas práticas",
      cta: "Assinar newsletter",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Continue aprendendo com a gente</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recursos gratuitos para manter você atualizado e conectado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recursos.map((recurso, index) => {
            const Icon = recurso.icon
            return (
              <Card key={index} className="p-6 flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{recurso.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 text-center flex-1">{recurso.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {recurso.cta}
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
