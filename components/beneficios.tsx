"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { ReactNode } from "react"

interface Beneficio {
  icone: ReactNode
  titulo: string
  subtitulo: string
  itens: string[]
}

interface BeneficiosProps {
  titulo: string
  subtitulo: string
  beneficios: Beneficio[]
  textoBotao?: string
  onClickBotao?: () => void
  corFundo?: string
}

export function Beneficios({
  titulo,
  subtitulo,
  beneficios,
  textoBotao,
  onClickBotao,
  corFundo = "bg-muted/30",
}: BeneficiosProps) {
  return (
    <section className={`w-full ${corFundo} py-16 md:py-24`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{titulo}</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">{subtitulo}</p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {beneficios.map((beneficio, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border bg-background">
                    <CardContent className="flex flex-col p-6 h-full">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        {beneficio.icone}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{beneficio.titulo}</h3>
                      <p className="mb-4 text-sm font-medium text-muted-foreground">{beneficio.subtitulo}</p>
                      <ul className="space-y-2 flex-1">
                        {beneficio.itens.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {textoBotao && onClickBotao && (
          <div className="mt-8 text-center">
            <Button size="lg" onClick={onClickBotao}>
              {textoBotao}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
