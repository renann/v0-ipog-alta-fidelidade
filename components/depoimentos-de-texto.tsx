"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote, Play } from "lucide-react"

interface DepoimentoBase {
  nome: string
  cargo: string
  area?: string
  ganho?: string
  resultado?: string
}

interface DepoimentoTexto extends DepoimentoBase {
  tipo?: "texto"
  depoimento?: string
  texto?: string
  videoUrl?: never
  thumbnail?: never
  videoThumbnail?: never
}

interface DepoimentoVideo extends DepoimentoBase {
  tipo?: "video"
  videoUrl: string
  thumbnail?: string
  videoThumbnail?: string
  depoimento?: never
  texto?: never
}

type Depoimento = DepoimentoTexto | DepoimentoVideo

interface DepoimentosDeTextoProps {
  title?: string
  titulo?: string
  subtitulo?: string
  depoimentos: Depoimento[]
  corFundo?: string
}

export function DepoimentosDeTexto({
  title,
  titulo,
  subtitulo,
  depoimentos,
  corFundo = "bg-background",
}: DepoimentosDeTextoProps) {
  const tituloFinal = titulo || title || "Depoimentos"

  return (
    <section className={`w-full ${corFundo} py-16 md:py-24`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{tituloFinal}</h2>
          {subtitulo && <p className="mt-4 text-lg text-muted-foreground">{subtitulo}</p>}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {depoimentos.map((item, index) => {
                const isVideo = "videoUrl" in item && item.videoUrl
                const textoDepoimento = !isVideo ? item.depoimento || item.texto || "" : ""
                const ganhoFinal = item.ganho || item.resultado || ""

                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-[480px] border-border bg-card">
                      <CardContent className="flex h-full flex-col p-6">
                        {isVideo ? (
                          <>
                            <div className="relative mb-4 flex-1 overflow-hidden rounded-lg bg-muted aspect-[9/16]">
                              <video
                                className="h-full w-full object-cover"
                                controls
                                poster={item.thumbnail || item.videoThumbnail}
                                preload="metadata"
                              >
                                <source src={item.videoUrl} type="video/mp4" />
                                Seu navegador não suporta vídeos.
                              </video>
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="rounded-full bg-primary/90 p-4">
                                  <Play className="h-8 w-8 text-primary-foreground fill-current" />
                                </div>
                              </div>
                            </div>
                            <div className="mt-auto">
                              <p className="font-semibold text-foreground">{item.nome}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.cargo}
                                {item.area ? ` • ${item.area}` : ""}
                              </p>
                              {ganhoFinal && <p className="mt-2 text-sm font-medium text-primary">{ganhoFinal}</p>}
                            </div>
                          </>
                        ) : (
                          <>
                            <Quote className="mb-4 h-8 w-8 text-muted-foreground" />
                            <p className="mb-6 flex-1 text-sm text-foreground line-clamp-[8]">
                              {textoDepoimento ? `"${textoDepoimento}"` : ""}
                            </p>
                            <div className="mt-auto">
                              <p className="font-semibold text-foreground">{item.nome}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.cargo}
                                {item.area ? ` • ${item.area}` : ""}
                              </p>
                              {ganhoFinal && <p className="mt-2 text-sm font-medium text-primary">{ganhoFinal}</p>}
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
