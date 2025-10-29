import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function IpogMaisPsicologia() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <Card className="bg-muted border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seu futuro começa aqui — e continua com o IPOG+</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ao concluir sua graduação, você terá acesso ao programa <strong>IPOG+</strong>, com descontos exclusivos
              para pós-graduação, mentoria de carreira e oportunidades para continuar evoluindo na área da Psicologia.
            </p>
            <Button size="lg">Conheça o IPOG+</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
