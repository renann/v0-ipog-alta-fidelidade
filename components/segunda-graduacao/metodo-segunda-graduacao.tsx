"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle2, Zap, Clock } from "lucide-react"

export function MetodoSegundaGraduacao() {
  const diferenciais = [
    {
      icon: CheckCircle2,
      titulo: "Validação de Conhecimentos",
      descricao: "Reconhece sua experiência profissional e evita repetição desnecessária",
    },
    {
      icon: Zap,
      titulo: "Trilhas Aceleradas",
      descricao: "Otimiza seu tempo de estudo com foco no que realmente importa para sua carreira",
    },
    {
      icon: Clock,
      titulo: "Flexibilidade Total",
      descricao: "Estude no seu ritmo profissional, sem comprometer sua rotina de trabalho",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aproveite sua experiência, acelere sua formação</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Metodologia que reconhece seus conhecimentos prévios e otimiza seu tempo de estudo
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4 items-stretch">
            {diferenciais?.map((diferencial, index) => {
              const Icon = diferencial.icon
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 flex">
                  <Card className="h-full w-full">
                    <CardContent className="p-6 text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                          <Icon className="w-8 h-8 text-foreground" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{diferencial.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{diferencial.descricao}</p>
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
    </section>
  )
}
