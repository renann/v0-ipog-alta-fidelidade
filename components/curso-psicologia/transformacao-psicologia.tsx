import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Puzzle, School } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TransformacaoPsicologia() {
  const areas = [
    {
      icon: Stethoscope,
      titulo: "Clínica e Saúde Mental",
      descricao: "Acompanhamento psicológico e terapias individuais e coletivas.",
    },
    {
      icon: Puzzle,
      titulo: "Gestão de Pessoas e RH",
      descricao: "Desenvolvimento humano e clima organizacional.",
    },
    {
      icon: School,
      titulo: "Educação e Inclusão",
      descricao: "Orientação escolar e mediação socioemocional.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mais do que psicólogo — um profissional preparado para o futuro humano
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ao final do curso, você será capaz de compreender, acolher e intervir nas mais diversas realidades humanas.
            Poderá atuar em clínicas, escolas, empresas e projetos sociais, com base científica, empatia e propósito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {areas?.map((area, index) => {
            const Icon = area.icon
            return (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.titulo}</h3>
                  <p className="text-muted-foreground">{area.descricao}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Ver áreas de atuação
          </Button>
        </div>
      </div>
    </section>
  )
}
