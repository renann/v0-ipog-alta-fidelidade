"use client"

import { ImageIcon } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const highlights = [
  {
    id: 1,
    title: "Vestibular IPOG 2025 - Inscrições Abertas",
    description:
      "Comece sua jornada acadêmica com bolsas de até 50%. Graduação EAD e Presencial com empregabilidade garantida.",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 2,
    title: "Nova Turma: MBA em Gestão Estratégica de Negócios",
    description:
      "Pós-graduação com início em março. Aulas ao vivo com professores mestres e doutores atuantes no mercado.",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 3,
    title: "Cursos de Extensão 2025 - Atualize-se Rapidamente",
    description: "Novos cursos de curta duração em Tecnologia, Gestão e Saúde. Certificação reconhecida pelo MEC.",
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
                <div className="aspect-[3/4] md:aspect-[16/9] w-full bg-muted flex items-center justify-center relative min-h-[200px] md:min-h-0 md:max-h-[450px]">
                  <ImageIcon className="h-16 w-16 text-muted-foreground" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12">
                    <div className="max-w-3xl space-y-2 md:space-y-3">
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {highlight.title}
                      </h1>
                      <p className="text-sm md:text-lg text-white/90 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <CarouselPrevious className="pointer-events-auto static translate-y-0 h-12 w-12 rounded-full bg-white shadow-lg" />
                  <CarouselNext className="pointer-events-auto static translate-y-0 h-12 w-12 rounded-full bg-white shadow-lg" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
