"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

interface Depoimento {
  nome: string
  cargo: string
  area: string
  depoimento: string
  ganho: string
}

interface DepoimentosDeTextoProps {
  title: string
  depoimentos: Depoimento[]
  corFundo?: string
}

export function DepoimentosDeTexto({ title, depoimentos, corFundo = "bg-background" }: DepoimentosDeTextoProps) {
  return (
    <section className={`w-full ${corFundo} py-16 md:py-24`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
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
              {depoimentos.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border bg-background">
                    <CardContent className="flex flex-col p-6">
                      <Quote className="mb-4 h-8 w-8 text-muted-foreground" />
                      <p className="mb-6 text-sm text-foreground">"{item.depoimento}"</p>
                      <div className="mt-auto">
                        <p className="font-semibold text-foreground">{item.nome}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.cargo} • {item.area}
                        </p>
                        <p className="mt-2 text-sm font-medium text-foreground">{item.ganho}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
