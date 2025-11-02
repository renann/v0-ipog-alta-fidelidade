"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Zap, FileText, Users } from "lucide-react"

export function MetodoGapImediato() {
  const diferenciais = [
    {
      icon: Zap,
      title: "ROI Rápido",
      description: "Resultados em semanas, não meses. Aplicação imediata no seu trabalho",
    },
    {
      icon: FileText,
      title: "Conteúdos Práticos",
      description: "Templates prontos para uso e ferramentas aplicáveis desde o primeiro dia",
    },
    {
      icon: Users,
      title: "Professores Atuantes",
      description: "Especialistas que trabalham no mercado e ensinam o que realmente funciona",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aprendizado direto ao ponto</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cada curso é construído por especialistas atuantes, com foco 100% prático e modelos prontos para uso
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
                      <h3 className="text-xl font-bold mb-3">{diferencial.title}</h3>
                      <p className="text-sm text-muted-foreground">{diferencial.description}</p>
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
