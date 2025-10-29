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
                {/* Image area */}
                <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-muted-foreground" />
                </div>

                {/* Navigation arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <CarouselPrevious className="pointer-events-auto static translate-y-0 h-12 w-12 rounded-full bg-white shadow-lg" />
                  <CarouselNext className="pointer-events-auto static translate-y-0 h-12 w-12 rounded-full bg-white shadow-lg" />
                </div>
              </div>

              {/* Content below image */}
              <div className="px-4 py-6 space-y-3">
                <h1 className="text-2xl font-bold leading-tight">{highlight.title}</h1>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
