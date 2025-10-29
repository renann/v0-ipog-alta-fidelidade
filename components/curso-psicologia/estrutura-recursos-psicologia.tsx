import { Card, CardContent } from "@/components/ui/card"
import { Compass, MessageCircle, Heart, Monitor } from "lucide-react"

export function EstruturaRecursosPsicologia() {
  const recursos = [
    {
      icon: Compass,
      titulo: "Tutoria individualizada",
      descricao: "Acompanhamento próximo e feedback constante.",
    },
    {
      icon: MessageCircle,
      titulo: "Comunidade de alunos",
      descricao: "Fóruns e grupos de estudo colaborativos.",
    },
    {
      icon: Heart,
      titulo: "Mentorias de autoconhecimento",
      descricao: "Encontros online que fortalecem a sua jornada pessoal.",
    },
    {
      icon: Monitor,
      titulo: "Ambiente EAD IPOG",
      descricao: "Plataforma com design leve e experiência fluida em qualquer dispositivo.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Suporte real, mesmo no digital</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O IPOG EAD é reconhecido pela sua metodologia centrada na experiência humana — tecnologia a serviço do
            vínculo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {recursos?.map((recurso, index) => {
            const Icon = recurso.icon
            return (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{recurso.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{recurso.descricao}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden bg-background">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Plataforma EAD IPOG"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
