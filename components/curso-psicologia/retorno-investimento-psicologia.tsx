"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"

export function RetornoInvestimentoPsicologia() {
  const indicadores = [
    {
      label: "APÓS O CURSO",
      valor: "R$ 3.844",
      descricao: "Júnior",
      nota: "Baseado em dados de mercado*.",
    },
    {
      label: "1 - 2 ANOS",
      valor: "R$ 5.200",
      descricao: "Pleno",
      nota: "Trajetória de crescimento*.",
    },
    {
      label: "3 - 6 ANOS",
      valor: "R$ 8.500",
      descricao: "Sênior",
      nota: "Experiência consolidada*.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Retorno de investimento da Graduação IPOG</h2>
          <p className="text-lg text-gray-600">
            Projeção de evolução salarial após o curso, com base em faixas médias de mercado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {indicadores?.map((indicador, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-8 bg-white h-full">
                    <p className="text-sm font-medium text-gray-600 mb-2">{indicador.label}</p>
                    <p className="text-4xl md:text-5xl font-bold mb-2">{indicador.valor}</p>
                    <p className="text-lg mb-4">{indicador.descricao}</p>
                    <p className="text-sm text-gray-600">{indicador.nota}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-lg mb-4">
            Potencial de aumento em até <strong>R$ 6.685/mês</strong> entre Júnior → Sênior.
          </p>
          <p className="text-sm text-gray-600">
            * Faixas estimadas; resultados variam por região, setor e experiência.
          </p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="#preco">Matricule-se na Graduação IPOG</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
