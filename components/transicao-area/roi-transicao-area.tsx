"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TrendingUp } from "lucide-react"

export function ROITransicaoArea() {
  const salaryEvolution = [
    {
      level: "Júnior (Nova Área)",
      salary: "R$ 4.500",
      description: "Entrada na nova área com especialização",
    },
    {
      level: "Pleno (1-2 anos)",
      salary: "R$ 7.000",
      description: "Consolidação na nova área",
    },
    {
      level: "Sênior (3-4 anos)",
      salary: "R$ 10.500",
      description: "Especialista reconhecido",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O retorno de mudar de área com o IPOG</h2>
          <p className="text-lg text-muted-foreground">
            Compare salários e veja o impacto real da sua especialização na nova carreira.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {salaryEvolution.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-8 text-center h-full">
                    <div className="text-sm text-muted-foreground mb-2">{item.level}</div>
                    <div className="text-4xl font-bold mb-4">{item.salary}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        <Card className="p-8 max-w-3xl mx-auto bg-muted/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-background" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Potencial de crescimento</h3>
              <p className="text-muted-foreground">
                Crescimento médio de +32% em 1–2 anos após transição, com ganho potencial de até R$ 6.500/mês no novo
                cargo. ROI médio de 3× o investimento no primeiro ano.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
