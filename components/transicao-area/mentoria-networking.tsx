"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Award, Users, BookOpen, GraduationCap } from "lucide-react"

export function MentoriaNetworking() {
  const professores = [
    {
      nome: "Dr. Roberto Almeida",
      especialidade: "Transição de Carreira",
      experiencia: "15 anos em recolocação profissional",
    },
    {
      nome: "Dra. Juliana Santos",
      especialidade: "Gestão de Pessoas",
      experiencia: "20 anos em RH estratégico",
    },
    {
      nome: "Prof. Marcos Silva",
      especialidade: "Gestão de Projetos",
      experiencia: "18 anos em PMO e consultoria",
    },
  ]

  const credenciais = [
    {
      icon: Award,
      texto: "MEC Credenciado",
    },
    {
      icon: Users,
      texto: "+100 Professores Mestres e Doutores",
    },
    {
      icon: BookOpen,
      texto: "20+ Anos de Experiência",
    },
    {
      icon: GraduationCap,
      texto: "Metodologia Validada",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mentoria, professores de mercado e rede de apoio ativa
          </h2>
          <p className="text-lg text-muted-foreground">
            O IPOG conecta você a quem já trilhou esse caminho de transição.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-center mb-8">Professores Especialistas</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {professores.map((professor, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center h-full">
                    <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4" />
                    <h4 className="font-bold mb-1">{professor.nome}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{professor.especialidade}</p>
                    <p className="text-xs text-muted-foreground">{professor.experiencia}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-bold text-center mb-8">Credibilidade Comprovada</h3>
          <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {credenciais.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="font-medium">{item.texto}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background">
            Participar da comunidade IPOG
          </Button>
        </div>
      </div>
    </section>
  )
}
