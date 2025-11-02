"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Monitor, Video, Building2, Star } from "lucide-react"

export function CarrosselModalidadesPrimeiraPos() {
  const modalities = [
    {
      icon: Monitor,
      name: "EAD (Gravado)",
      description: "Autonomia total para estudar quando quiser",
      indicators: {
        flexibility: 5,
        networking: 2,
        guidedLearning: 3,
        costBenefit: 5,
      },
    },
    {
      icon: Video,
      name: "Ao Vivo (Online)",
      description: "Interação em tempo real com professores",
      indicators: {
        flexibility: 4,
        networking: 4,
        guidedLearning: 5,
        costBenefit: 4,
      },
    },
    {
      icon: Building2,
      name: "Presencial",
      description: "Imersão prática e networking ao vivo",
      indicators: {
        flexibility: 2,
        networking: 5,
        guidedLearning: 5,
        costBenefit: 3,
      },
    },
  ]

  const renderStars = (count: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < count ? "fill-primary text-primary" : "text-muted"}`} />
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o formato ideal para sua rotina</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Três modelos, mesma excelência IPOG</p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4 items-stretch">
            {modalities.map((modality, index) => {
              const Icon = modality.icon
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 flex">
                  <Card className="h-full w-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{modality.name}</h3>
                      <p className="text-sm text-muted-foreground mb-6 text-center">{modality.description}</p>

                      <div className="space-y-3 flex-grow">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Flexibilidade</span>
                          {renderStars(modality.indicators.flexibility)}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Networking</span>
                          {renderStars(modality.indicators.networking)}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Aprendizado guiado</span>
                          {renderStars(modality.indicators.guidedLearning)}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Custo-benefício</span>
                          {renderStars(modality.indicators.costBenefit)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <p className="text-sm text-muted-foreground text-center mt-8">
          💡 Legenda visual neutra, reforçando que cada formato se adapta a uma necessidade
        </p>
      </div>
    </section>
  )
}
