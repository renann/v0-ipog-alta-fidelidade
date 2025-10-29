"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Users, Route, HeartHandshake } from "lucide-react"

export function MetodoTransicaoArea() {
  const suportes = [
    {
      icon: Users,
      titulo: "Mentoria Individual",
      descricao: "Acompanhamento prático e psicológico durante toda a sua transição de carreira",
    },
    {
      icon: Route,
      titulo: "Trilhas Estruturadas",
      descricao: "Base técnica sólida com plano de evolução personalizado para sua nova área",
    },
    {
      icon: HeartHandshake,
      titulo: "Networking Estratégico",
      descricao: "Conexões que aceleram a entrada na nova área e abrem portas no mercado",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">No IPOG, sua transição é acompanhada de perto</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A cada etapa, há mentores experientes, trilhas personalizadas e uma rede ativa que transforma conhecimento
            em oportunidades reais
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
            {suportes?.map((suporte, index) => {
              const Icon = suporte.icon
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 flex">
                  <Card className="h-full w-full">
                    <CardContent className="p-6 text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                          <Icon className="w-8 h-8 text-foreground" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{suporte.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{suporte.descricao}</p>
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
