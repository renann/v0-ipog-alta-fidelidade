"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Target, Users, Award } from "lucide-react"
import Link from "next/link"

export function MetodoPrimeiraPos() {
  const diferenciais = [
    {
      icon: Target,
      titulo: "Aprenda aplicando",
      descricao: "O conteúdo já impacta seu dia a dia desde o primeiro módulo",
    },
    {
      icon: Users,
      titulo: "Apoio docente real",
      descricao: "Mentoria ativa em cada módulo com professores de mercado",
    },
    {
      icon: Award,
      titulo: "Certificação reconhecida",
      descricao: "Chancela IPOG há 20+ anos validada pelo mercado",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diferencie-se no mercado com conteúdo prático e certificação reconhecida
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Teoria aplicada, professores de mercado e metodologia validada
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
            {diferenciais.map((diferencial, index) => {
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

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/pos-graduacao">Conheça como funciona a Pós IPOG</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
