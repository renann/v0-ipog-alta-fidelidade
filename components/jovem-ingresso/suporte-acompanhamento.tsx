"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Award, Users, BookOpen, GraduationCap } from "lucide-react"
import { GeoLink } from "@/components/geo-link"

export function SuporteAcompanhamento() {
  const topicos = [
    { icon: Award, texto: "MEC Credenciado" },
    { icon: Users, texto: "+100 Professores Mestres e Doutores" },
    { icon: BookOpen, texto: "20+ Anos de Experiência" },
    { icon: GraduationCap, texto: "Metodologia Validada" },
  ]

  const professores = [
    {
      nome: "Dr. João Santos",
      area: "Administração",
      bio: "Doutor em Administração, 15 anos de experiência em gestão estratégica e liderança empresarial",
    },
    {
      nome: "Dra. Ana Costa",
      area: "Psicologia",
      bio: "Mestre em Psicologia Organizacional, especialista em desenvolvimento humano e carreira",
    },
    {
      nome: "Dr. Carlos Lima",
      area: "Direito",
      bio: "PhD em Direito Empresarial, advogado atuante e consultor jurídico corporativo",
    },
    {
      nome: "Dra. Paula Oliveira",
      area: "Administração",
      bio: "Doutora em Inovação, consultora empresarial e especialista em empreendedorismo",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Professores de mercado</h2>
          <p className="text-muted-foreground">Aprenda com quem atua e transforma o mercado</p>
        </div>

        <div className="mb-12">
          <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {topicos?.map((topico, index) => {
              const Icon = topico.icon
              return (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="font-medium">{topico.texto}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Conheça alguns de nossos professores</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {professores?.map((professor, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                  <GeoLink href="/corpo-docente/busca" className="block h-full">
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                          <Users className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h4 className="font-semibold text-lg mb-2">{professor.nome}</h4>
                        <p className="text-sm font-medium mb-3">{professor.area}</p>
                        <p className="text-sm text-muted-foreground">{professor.bio}</p>
                      </div>
                    </Card>
                  </GeoLink>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
