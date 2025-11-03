"use client"

import { Users, TrendingUp, Building, MapPin, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface ResultadosComprovadosProps {
  titulo?: string
}

const estatisticas = [
  {
    icon: Users,
    valor: "50.000+",
    label: "Profissionais formados",
  },
  {
    icon: TrendingUp,
    valor: "95%",
    label: "De empregabilidade dos egressos",
  },
  {
    icon: Building,
    valor: "500+",
    label: "Empresas atendidas",
  },
  {
    icon: MapPin,
    valor: "20+",
    label: "Estados brasileiros",
  },
  {
    icon: Award,
    valor: "89",
    label: "NPS de satisfação",
  },
]

export function ResultadosComprovados({
  titulo = "Mais de 20 anos transformando carreiras e empresas",
}: ResultadosComprovadosProps) {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">{titulo}</h2>
            <p className="text-muted-foreground text-lg">Resultados que comprovam nossa excelência</p>
          </div>

          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {estatisticas.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2">
                      <Card className="text-center h-full">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex justify-center">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-3xl md:text-4xl font-bold">{stat.valor}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6">
            {estatisticas.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl md:text-4xl font-bold">{stat.valor}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
