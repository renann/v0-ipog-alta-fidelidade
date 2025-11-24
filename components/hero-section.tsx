"use client"

import { ImageIcon } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const highlights = [
  {
    id: 1,
    badge: "NOVIDADE",
    title: "Vestibular IPOG 2025 com bolsas de até 50%",
    description: "Inscrições abertas para graduação EAD e presencial",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 2,
    badge: "PÓS-GRADUAÇÃO",
    title: "Semana de Carreiras: descubra sua próxima oportunidade",
    description: "Workshops, palestras e networking com líderes de mercado",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 3,
    badge: "EXTENSÃO",
    title: "Cursos de Extensão 2025 - Atualize-se Rapidamente",
    description: "Novos cursos de curta duração em Tecnologia, Gestão e Saúde",
    image: "/placeholder.svg?height=400&width=800",
  },
]

export function HeroSection() {
  return (
    <section className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {highlights.map((highlight) => (
            <CarouselItem key={highlight.id}>
              <div className="relative">
                <div className="aspect-[16/9] md:aspect-[21/9] w-full flex items-center justify-center relative max-h-[300px] md:max-h-[400px]">
                  <ImageIcon className="h-16 w-16 text-muted-foreground" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#D71921]/90 via-[#D71921]/50 to-transparent flex flex-col justify-end p-6 md:p-12">
                    <div className="max-w-3xl space-y-3 md:space-y-4">
                      <Badge className="w-fit bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs font-bold px-3 py-1">
                        {highlight.badge}
                      </Badge>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance font-['Montserrat']">
                        {highlight.title}
                      </h1>
                      <p className="text-sm md:text-lg text-white/95 leading-relaxed text-pretty max-w-2xl font-['Montserrat']">
                        {highlight.description}
                      </p>
                      <Button
                        size="lg"
                        className="bg-white text-[#D71921] hover:bg-gray-100 font-bold rounded-xl font-['Montserrat']"
                      >
                        Conheça nossos cursos
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
