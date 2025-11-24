"use client"

import { Monitor, Video, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface MetodologiaUnificadaProps {
  titulo?: string
}

const modalidades = [
  {
    icon: Monitor,
    title: "EAD (Gravado)",
    description: "Flexibilidade total para aprender no seu ritmo",
    features: ["Acesso 24/7", "Conteúdo gravado", "Estude de onde estiver"],
  },
  {
    icon: Video,
    title: "Ao Vivo (Online)",
    description: "Interação em tempo real com especialistas",
    features: ["Aulas síncronas", "Tire dúvidas ao vivo", "Networking online"],
  },
  {
    icon: Users,
    title: "Presencial",
    description: "Imersão e networking de alto valor",
    features: ["Experiência completa", "Networking presencial", "Laboratórios práticos"],
  },
]

export function MetodologiaUnificada({
  titulo = "Metodologia IPOG: teoria + prática + mentoria",
}: MetodologiaUnificadaProps) {
  return (
    <section className="w-full px-4 py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-8 md:space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance">{titulo}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              A mesma excelência acadêmica em todos os formatos
            </p>
          </div>

          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {modalidades.map((modalidade, index) => {
                  const Icon = modalidade.icon
                  return (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%]">
                      <Card className="hover:shadow-lg transition-shadow h-full rounded-lg">
                        <CardContent className="p-6 space-y-4">
                          <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-lg md:text-xl font-bold text-balance">{modalidade.title}</h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                              {modalidade.description}
                            </p>
                          </div>
                          <ul className="space-y-2">
                            {modalidade.features.map((feature) => (
                              <li key={feature} className="text-sm flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {modalidades.map((modalidade) => {
              const Icon = modalidade.icon
              return (
                <Card key={modalidade.title} className="hover:shadow-lg transition-shadow rounded-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-balance">{modalidade.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                        {modalidade.description}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {modalidade.features.map((feature) => (
                        <li key={feature} className="text-sm flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
