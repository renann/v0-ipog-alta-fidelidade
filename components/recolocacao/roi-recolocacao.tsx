"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"

export function ROIRecolocacao() {
  const indicators = [
    {
      label: "RECOLOCAÇÃO IMEDIATA",
      value: "R$ 5.500",
      description: "Posição inicial",
      note: "Baseado em dados de mercado*.",
    },
    {
      label: "6 - 12 MESES",
      value: "R$ 7.500",
      description: "Consolidação",
      note: "Com portfólio comprovado*.",
    },
    {
      label: "1 - 2 ANOS",
      value: "R$ 10.500",
      description: "Posição estratégica",
      note: "Networking ativo*.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quanto vale investir na sua recolocação?</h2>
          <p className="text-lg text-gray-600">
            Projeção de evolução salarial após curso de extensão focado em recolocação profissional.
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
              {indicators?.map((indicator, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-8 bg-white h-full">
                    <p className="text-sm font-medium text-gray-600 mb-2">{indicator.label}</p>
                    <p className="text-4xl md:text-5xl font-bold mb-2">{indicator.value}</p>
                    <p className="text-lg mb-4">{indicator.description}</p>
                    <p className="text-sm text-gray-600">{indicator.note}</p>
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
            Potencial de aumento em até <strong>R$ 5.000/mês</strong> em 2 anos de recolocação estratégica.
          </p>
          <p className="text-sm text-gray-600">
            * Faixas estimadas; resultados variam por região, setor e experiência.
          </p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/falar-com-consultor">Simule seu retorno com o IPOG</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
