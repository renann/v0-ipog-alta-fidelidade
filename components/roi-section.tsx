"use client"

import { TrendingUp, Award, Clock, DollarSign } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface RoiSectionProps {
  titulo?: string
}

export function RoiSection({ titulo = "Retorno Sobre Investimento" }: RoiSectionProps) {
  const stats = [
    {
      icon: TrendingUp,
      value: "47%",
      label: "Aumento médio salarial",
      description: "após conclusão do curso",
    },
    {
      icon: Award,
      value: "73%",
      label: "Conquistaram promoção",
      description: "em até 12 meses",
    },
    {
      icon: Clock,
      value: "8 meses",
      label: "Tempo médio de ROI",
      description: "para recuperar investimento",
    },
    {
      icon: DollarSign,
      value: "R$ 2.8k",
      label: "Aumento médio mensal",
      description: "na remuneração",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">{titulo}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investir na sua educação com o IPOG é investir no seu futuro. Veja os resultados reais dos nossos alunos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col items-center text-center p-8 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow h-full">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-4xl font-bold mb-2 text-black">{stat.value}</div>
                      <div className="text-lg font-semibold mb-2 text-black">{stat.label}</div>
                      <div className="text-sm text-gray-600">{stat.description}</div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-black">Transforme sua carreira com educação de qualidade</h3>
            <p className="text-gray-600 mb-6">
              Mais de 85% dos nossos alunos relatam impacto positivo direto em suas carreiras, seja através de
              promoções, mudanças de área ou aumento salarial. O investimento em educação de qualidade é o melhor
              investimento que você pode fazer.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div>
                <div className="text-2xl font-bold text-black">15 anos</div>
                <div className="text-gray-600">de excelência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">200 mil+</div>
                <div className="text-gray-600">alunos formados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">4.8/5</div>
                <div className="text-gray-600">satisfação dos alunos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
