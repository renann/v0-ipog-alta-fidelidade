import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Building2, GraduationCap } from "lucide-react"

export function TrilhasPsicologia() {
  const trilhas = [
    {
      icon: Brain,
      titulo: "Psicologia Clínica",
      descricao: "Aprofunde-se em técnicas terapêuticas, avaliação psicológica e atendimento clínico.",
      areas: ["Psicoterapia", "Avaliação Psicológica", "Saúde Mental"],
      cor: "bg-blue-500/10 text-blue-700",
    },
    {
      icon: Building2,
      titulo: "Psicologia Organizacional",
      descricao: "Desenvolva competências para atuar em RH, gestão de pessoas e desenvolvimento organizacional.",
      areas: ["Recrutamento e Seleção", "Treinamento", "Clima Organizacional"],
      cor: "bg-green-500/10 text-green-700",
    },
    {
      icon: GraduationCap,
      titulo: "Psicologia Escolar",
      descricao: "Prepare-se para atuar no contexto educacional, apoiando o desenvolvimento de estudantes.",
      areas: ["Orientação Educacional", "Dificuldades de Aprendizagem", "Inclusão"],
      cor: "bg-purple-500/10 text-purple-700",
    },
    {
      icon: Heart,
      titulo: "Psicologia Social e Comunitária",
      descricao: "Trabalhe com grupos e comunidades, promovendo saúde mental e bem-estar coletivo.",
      areas: ["Intervenção Comunitária", "Políticas Públicas", "Grupos Vulneráveis"],
      cor: "bg-orange-500/10 text-orange-700",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trilhas de Especialização</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha sua área de atuação e aprofunde seus conhecimentos com trilhas personalizadas que preparam você para
            o mercado de trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trilhas.map((trilha, index) => {
            const Icon = trilha.icon
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full ${trilha.cor} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{trilha.titulo}</h3>
                  <p className="text-muted-foreground mb-4">{trilha.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {trilha.areas.map((area, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
