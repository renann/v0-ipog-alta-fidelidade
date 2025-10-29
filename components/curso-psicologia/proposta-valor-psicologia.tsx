import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Monitor } from "lucide-react"

export function PropostaValorPsicologia() {
  const beneficios = [
    {
      icon: Brain,
      titulo: "Metodologia que conecta mente e emoção",
      descricao:
        "Videoaulas, encontros ao vivo e experiências imersivas que fazem você se enxergar no papel do psicólogo desde o primeiro módulo.",
    },
    {
      icon: Users,
      titulo: "Mentores que inspiram e acompanham",
      descricao: "Professores e tutores com experiência real de consultório, clínica e empresas.",
    },
    {
      icon: Monitor,
      titulo: "Ambiente digital interativo",
      descricao: "Plataforma intuitiva, materiais multimídia e acompanhamento contínuo do seu progresso.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aprenda no seu ritmo, com quem entende de gente</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O IPOG acredita que aprender sobre pessoas começa com uma jornada de autoconhecimento. Aqui, o ensino à
            distância não significa estar sozinho — é um modelo pensado para oferecer flexibilidade com presença,
            autonomia com suporte e teoria com prática viva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {beneficios?.map((beneficio, index) => {
            const Icon = beneficio.icon
            return (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground">{beneficio.descricao}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
