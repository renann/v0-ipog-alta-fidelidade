"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle2, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export function EmpregabilidadeRecolocacao() {
  const statistics = [
    {
      icon: TrendingUp,
      value: "87%",
      description: "conseguem recolocação em até 4 meses",
    },
    {
      icon: Award,
      value: "91%",
      description: "relatam aumento de confiança profissional",
    },
  ]

  const services = [
    "Revisão de portfólio e posicionamento profissional",
    "Sessões de mentoria para recolocação",
    "Rede de vagas e conexões estratégicas IPOG",
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recoloque-se com apoio de quem entende o mercado</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Na sua recolocação, o IPOG é o parceiro da sua retomada profissional
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
              {statistics.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <Card className="p-8 text-center h-full">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-4xl font-bold mb-2">{stat.value}</div>
                      <p className="text-muted-foreground">{stat.description}</p>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        <Card className="p-8 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Serviços de Carreira</h3>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/falar-com-consultor">Falar com consultor de carreira</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
