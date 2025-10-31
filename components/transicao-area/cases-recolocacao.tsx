"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote, Play } from "lucide-react"

interface Case {
  nome: string
  areaAnterior: string
  areaAtual: string
  tempo: string
  depoimento: string
  cargo: string
  videoUrl?: string
  videoThumbnail?: string
}

export function CasesRecolocacao() {
  const cases: Case[] = [
    {
      nome: "Ana Paula Silva",
      areaAnterior: "Administração",
      areaAtual: "Gestão de Pessoas",
      tempo: "10 meses",
      depoimento:
        "Fiz a transição de administração para RH com o apoio do IPOG. A mentoria foi essencial para me reposicionar no mercado.",
      cargo: "Gerente de RH",
    },
    {
      nome: "Carlos Eduardo",
      areaAnterior: "Engenharia",
      areaAtual: "Gestão de Projetos",
      tempo: "8 meses",
      depoimento:
        "Consegui migrar para gestão de projetos e hoje lidero equipes multidisciplinares. O networking do IPOG abriu portas.",
      cargo: "Gerente de Projetos",
    },
    {
      nome: "Mariana Costa",
      areaAnterior: "Marketing",
      areaAtual: "Psicologia Organizacional",
      tempo: "12 meses",
      depoimento:
        "Sempre quis trabalhar com desenvolvimento humano. O IPOG me deu a base técnica e a confiança para mudar de área.",
      cargo: "Analista de Desenvolvimento",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Milhares de profissionais já transformaram suas carreiras com o IPOG
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de profissionais que mudaram de área com o IPOG.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {cases.map((caso, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-[480px] flex flex-col">
                    {caso.videoUrl ? (
                      <>
                        <div className="relative w-full flex-1 bg-muted rounded-lg overflow-hidden group mb-4">
                          {caso.videoThumbnail && (
                            <img
                              src={caso.videoThumbnail || "/placeholder.svg"}
                              alt={caso.nome}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          )}
                          <video
                            src={caso.videoUrl}
                            controls
                            className="absolute inset-0 w-full h-full object-cover"
                            poster={caso.videoThumbnail}
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                              <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                            </div>
                          </div>
                        </div>
                        <div className="border-t pt-4 mt-auto">
                          <p className="font-bold">{caso.nome}</p>
                          <p className="text-sm text-muted-foreground">{caso.cargo}</p>
                          <div className="mt-2 text-xs text-muted-foreground">
                            <p>
                              {caso.areaAnterior} → {caso.areaAtual}
                            </p>
                            <p>Tempo de transição: {caso.tempo}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground mb-4 italic line-clamp-4">
                          &ldquo;{caso.depoimento}&rdquo;
                        </p>
                        <div className="border-t pt-4 mt-auto">
                          <p className="font-bold">{caso.nome}</p>
                          <p className="text-sm text-muted-foreground">{caso.cargo}</p>
                          <div className="mt-2 text-xs text-muted-foreground">
                            <p>
                              {caso.areaAnterior} → {caso.areaAtual}
                            </p>
                            <p>Tempo de transição: {caso.tempo}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
