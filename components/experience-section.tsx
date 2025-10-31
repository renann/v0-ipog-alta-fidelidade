import { Video } from "lucide-react"

interface ExperienceSectionProps {
  titulo?: string
}

export function ExperienceSection({ titulo = "Experiência IPOG" }: ExperienceSectionProps) {
  return (
    <section className="w-full px-4 py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">{titulo}</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Confira algumas histórias de sucesso dos nossos alunos IPOG
            </p>
          </div>
          <div className="aspect-video w-full max-w-4xl mx-auto bg-muted rounded-lg flex items-center justify-center">
            <Video className="h-20 w-20 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
