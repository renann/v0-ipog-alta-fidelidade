"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Play, Quote } from "lucide-react"
import type { ReactNode } from "react"

interface Estatistica {
  icone: ReactNode
  valor: string
  label?: string
  descricao?: string
}

interface DepoimentoSimples {
  tipo: "simples"
  texto: string
  nome: string
  cargo: string
  avatar?: string
  videoUrl?: string
  videoThumbnail?: string
}

interface DepoimentoAntesDepois {
  tipo: "antes-depois"
  nome: string
  cargo: string
  antes: string
  depois: string
  impacto: string
  avatar?: string
  videoUrl?: string
  videoThumbnail?: string
}

type Depoimento = DepoimentoSimples | DepoimentoAntesDepois

interface ResultadosReaisProps {
  title: string
  subtitle?: string
  estatisticas: Estatistica[]
  depoimentos?: Depoimento[]
  corFundo?: string
}

export function ResultadosReais({ title, subtitle, estatisticas, depoimentos = [], corFundo }: ResultadosReaisProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${corFundo || ""}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{title}</h2>
          {subtitle && <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="mb-12 px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {estatisticas.map((stat, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4">
                  <Card className="p-6 text-center h-full">
                    <div className="flex justify-center mb-4">{stat.icone}</div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.valor}</div>
                    {stat.label && <p className="text-sm font-semibold mb-1">{stat.label}</p>}
                    {stat.descricao && <p className="text-xs text-muted-foreground">{stat.descricao}</p>}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Depoimentos */}
        {depoimentos.length > 0 && (
          <div className="px-8 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {depoimentos.map((depoimento, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[90%] md:basis-1/2 lg:basis-1/3">
                    <Card className="p-6 h-[480px] flex flex-col">
                      {depoimento.videoUrl ? (
                        <div className="flex flex-col h-full">
                          <div className="relative w-full flex-1 bg-muted rounded-lg overflow-hidden group mb-4">
                            {depoimento.videoThumbnail && (
                              <img
                                src={depoimento.videoThumbnail || "/placeholder.svg"}
                                alt={depoimento.nome}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            )}
                            <video
                              src={depoimento.videoUrl}
                              controls
                              className="absolute inset-0 w-full h-full object-cover"
                              poster={depoimento.videoThumbnail}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
                              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-auto">
                            <p className="font-semibold text-sm">{depoimento.nome}</p>
                            <p className="text-xs text-muted-foreground">{depoimento.cargo}</p>
                          </div>
                        </div>
                      ) : depoimento.tipo === "simples" ? (
                        <>
                          <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                          <p className="text-sm italic mb-4 flex-1 line-clamp-6">&ldquo;{depoimento.texto}&rdquo;</p>
                          <div className="mt-auto pt-4 border-t">
                            <p className="font-semibold text-sm">{depoimento.nome}</p>
                            <p className="text-xs text-muted-foreground">{depoimento.cargo}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mb-4">
                            <h4 className="font-bold text-lg">{depoimento.nome}</h4>
                            <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                          </div>
                          <div className="space-y-3 flex-1">
                            <div>
                              <span className="text-xs font-semibold text-muted-foreground uppercase">Antes</span>
                              <p className="text-sm line-clamp-2">{depoimento.antes}</p>
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-muted-foreground uppercase">Depois</span>
                              <p className="text-sm line-clamp-2">{depoimento.depois}</p>
                            </div>
                            <div className="pt-3 border-t mt-auto">
                              <span className="text-xs font-semibold text-primary uppercase">Impacto</span>
                              <p className="text-sm font-semibold line-clamp-2">{depoimento.impacto}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}
