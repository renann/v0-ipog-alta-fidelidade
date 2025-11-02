import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface EtapaAprendizado {
  titulo: string
  descricao: string
  tags: string[]
  beneficios?: string[]
}

interface TrilhaAprendizadoProps {
  titulo?: string
  subtitulo?: string
  etapas: EtapaAprendizado[]
  ctaTexto?: string
  ctaLink?: string
  textoRodape?: string
}

export function TrilhaAprendizado({
  titulo = "Trilha de aprendizado",
  subtitulo = "Veja como evoluir do seu curso atual para os próximos passos e posicionar-se melhor no mercado.",
  etapas,
  ctaTexto = "Conheça os benefícios IPOG +",
  ctaLink = "/programas-beneficios/ipog-plus",
  textoRodape = "Aluno+ é o programa de benefícios de lifelong learning do IPOG.",
}: TrilhaAprendizadoProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{titulo}</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">{subtitulo}</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha vertical */}
            <div
              className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"
              style={{ height: "calc(100% - 80px)" }}
            />

            {/* Etapas */}
            <div className="space-y-8 md:space-y-12">
              {etapas.map((etapa, index) => (
                <div key={index} className="relative pl-12 md:pl-20">
                  {/* Dot na timeline */}
                  <div className="absolute left-0 md:left-4 top-0 w-8 h-8 rounded-full bg-foreground border-4 border-background" />

                  {/* Card */}
                  <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{etapa.titulo}</h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{etapa.descricao}</p>

                    {/* Benefícios (se houver) */}
                    {etapa.beneficios && etapa.beneficios.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {etapa.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-foreground mt-1">•</span>
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {etapa.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-1.5 bg-muted text-sm font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-16 text-center space-y-4">
            <Button size="lg" className="gap-2" asChild>
              <a href={ctaLink}>
                {ctaTexto}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">{textoRodape}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
