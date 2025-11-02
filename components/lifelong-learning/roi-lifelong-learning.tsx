"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TrendingUp, Target, BarChart3 } from "lucide-react"

export function ROILifelongLearning() {
  const indicadores = [
    {
      icon: TrendingUp,
      valor: "+22-35%",
      descricao: "Evolução média no pacote total em 12-18 meses",
    },
    {
      icon: Target,
      valor: "3×",
      descricao: "ROI sobre o investimento no primeiro ciclo",
    },
    {
      icon: BarChart3,
      valor: "Pleno → Sênior",
      descricao: "Evolução típica: Especialista → Gestor",
    },
  ]

  return (
    <section className="w-full bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Retorno do seu próximo passo com o IPOG+
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Veja a evolução de remuneração e escopo ao combinar módulos complementares
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4 items-stretch">
              {indicadores.map((item, index) => {
                const Icon = item.icon
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 flex">
                    <Card className="h-full w-full border-border bg-background">
                      <CardContent className="flex flex-col items-center p-6 text-center h-full">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                          <Icon className="h-8 w-8 text-foreground" />
                        </div>
                        <div className="mb-2 text-3xl font-bold text-foreground">{item.valor}</div>
                        <p className="text-sm text-muted-foreground">{item.descricao}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
