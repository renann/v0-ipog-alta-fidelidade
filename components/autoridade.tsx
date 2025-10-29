"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { ReactNode } from "react"

interface Credencial {
  icone: ReactNode
  texto: string
}

interface Professor {
  nome: string
  bio: string
  area: string
  avatar?: ReactNode
}

interface AutoridadeProps {
  titulo: string
  subtitulo: string
  credenciais: Credencial[]
  professores: Professor[]
  tituloProfessores?: string
  backgroundColor?: string
}

export function Autoridade({
  titulo,
  subtitulo,
  credenciais,
  professores,
  tituloProfessores = "Conheça alguns de nossos professores executivos",
  backgroundColor = "bg-muted/30",
}: AutoridadeProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{titulo}</h2>
          <p className="text-muted-foreground">{subtitulo}</p>
        </div>

        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {credenciais.map((credencial, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  {credencial.icone}
                </div>
                <span className="font-medium">{credencial.texto}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">{tituloProfessores}</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {professores.map((professor, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                  <Card className="p-6 h-full">
                    <div className="flex flex-col items-center text-center">
                      {professor.avatar || (
                        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                          <div className="w-10 h-10 text-muted-foreground" />
                        </div>
                      )}
                      <h4 className="font-semibold text-lg mb-2">{professor.nome}</h4>
                      <p className="text-sm font-medium mb-3">{professor.area}</p>
                      <p className="text-sm text-muted-foreground">{professor.bio}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
