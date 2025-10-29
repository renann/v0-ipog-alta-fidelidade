"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { MonitorPlay, Video, Users } from "lucide-react"
import { GeoLink } from "@/components/geo-link"

export function MetodoPosGraduacao() {
  const modalidades = [
    {
      icon: MonitorPlay,
      title: "EAD (Gravado)",
      description: "Autonomia e flexibilidade total para aprender no seu ritmo",
      href: "/catalogo?formacao=pos-graduacao&modalidade=ead",
    },
    {
      icon: Video,
      title: "Ao Vivo (Online)",
      description: "Mentoria e interação em tempo real com especialistas",
      href: "/catalogo?formacao=pos-graduacao&modalidade=ao-vivo",
    },
    {
      icon: Users,
      title: "Presencial",
      description: "Imersão e networking de alto valor",
      href: "/catalogo?formacao=pos-graduacao&modalidade=presencial",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Conteúdo de mercado, professores atuantes e formatos feitos para você
          </h2>
          <p className="text-muted-foreground">
            Jornada de especialização estruturada com progressão de módulos e aplicação prática
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
                    <GeoLink href={modalidade.href}>
                      <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{modalidade.title}</h3>
                        <p className="text-sm text-muted-foreground">{modalidade.description}</p>
                      </Card>
                    </GeoLink>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {modalidades.map((modalidade, index) => {
            const Icon = modalidade.icon
            return (
              <GeoLink key={index} href={modalidade.href}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{modalidade.title}</h3>
                  <p className="text-sm text-muted-foreground">{modalidade.description}</p>
                </Card>
              </GeoLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
