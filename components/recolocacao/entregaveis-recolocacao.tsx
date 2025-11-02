import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, BarChart3, Lightbulb, Layout } from "lucide-react"

export function EntregaveisRecolocacao() {
  const entregaveis = [
    {
      icon: FileText,
      titulo: "Template Profissional de Portfólio",
      descricao: "Modelo estruturado para apresentar seus projetos e cases",
    },
    {
      icon: BarChart3,
      titulo: "Modelo de Relatório Executivo",
      descricao: "Estrutura para apresentar resultados e impacto gerado",
    },
    {
      icon: Lightbulb,
      titulo: "Guia de Aplicação Rápida",
      descricao: "Passo a passo para aplicar o aprendizado imediatamente",
    },
    {
      icon: Layout,
      titulo: "Canvas de Carreira",
      descricao: "Ferramenta visual para organizar metas e oportunidades",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4">Materiais práticos inclusos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Utilize materiais como:</h2>
          <p className="text-lg text-muted-foreground">
            Ao concluir o curso, você pode ter acesso a modelos e materiais aplicáveis — prontos para reforçar seu
            portfólio e impressionar recrutadores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {entregaveis.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{item.descricao}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
