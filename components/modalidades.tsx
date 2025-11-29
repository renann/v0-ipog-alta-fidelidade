"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import { useState } from "react"
import { ModalidadeVideoModal } from "@/components/modalidade-video-modal"

interface Modalidade {
  badge: string
  titulo: string
  descricao: string
  beneficios: string[]
  link: string
  buttonText: string
}

interface ModalidadesProps {
  title: string
  subtitle?: string
  modalidades: Modalidade[]
  backgroundColor?: string
}

export function Modalidades({ title, subtitle, modalidades, backgroundColor = "bg-white" }: ModalidadesProps) {
  const shouldCenter = modalidades.length <= 2
  const [selectedModalidade, setSelectedModalidade] = useState<Modalidade | null>(null)

  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: shouldCenter ? "center" : "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className={shouldCenter ? "justify-center" : ""}>
              {modalidades.map((modalidade, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 flex flex-col h-full min-h-[480px]">
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium mb-4 self-start">
                      {modalidade.badge}
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{modalidade.titulo}</h3>
                    <p className="text-gray-600 mb-6">{modalidade.descricao}</p>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {modalidade.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="text-sm">
                          • {beneficio}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full bg-black hover:bg-gray-800 text-white mt-auto">
                      <Link href={modalidade.link}>{modalidade.buttonText}</Link>
                    </Button>

                    <button
                      onClick={() => setSelectedModalidade(modalidade)}
                      className="text-sm text-primary hover:underline text-center mt-3"
                    >
                      Conheça mais esta modalidade
                    </button>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>

      {selectedModalidade && (
        <ModalidadeVideoModal
          isOpen={!!selectedModalidade}
          onClose={() => setSelectedModalidade(null)}
          modalidade={{
            title: selectedModalidade.titulo,
            description: selectedModalidade.descricao,
          }}
        />
      )}
    </section>
  )
}
