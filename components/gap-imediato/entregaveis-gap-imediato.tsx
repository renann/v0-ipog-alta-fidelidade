import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, BarChart3, Lightbulb, CheckSquare, Wrench, Map } from "lucide-react"

export function EntregaveisGapImediato() {
  const entregaveis = [
    {
      icon: FileText,
      title: "Templates Profissionais",
      description: "Planilhas, frameworks e checklists prontos para personalizar e aplicar.",
    },
    {
      icon: BarChart3,
      title: "Modelos de Relatório",
      description: "Estruturas para apresentar resultados de forma clara e profissional.",
    },
    {
      icon: Lightbulb,
      title: "Guias de Aplicação",
      description: "Passo a passo para aplicar o aprendizado de forma prática e imediata.",
    },
    {
      icon: CheckSquare,
      title: "Checklists de Diagnóstico",
      description: "Instrumentos de autoavaliação técnica e validação de processos.",
    },
    {
      icon: Wrench,
      title: "Kits de Ferramentas",
      description: "Acesso a recursos, links e ferramentas digitais utilizadas no curso.",
    },
    {
      icon: Map,
      title: "Canvas Estratégicos",
      description: "Modelos visuais para estruturar ações e comunicar decisões.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Materiais práticos inclusos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Utilize materiais prontos para aplicar no seu dia a dia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossos cursos de extensão incluem materiais práticos desenvolvidos por especialistas. Utilize recursos como:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entregaveis.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
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
