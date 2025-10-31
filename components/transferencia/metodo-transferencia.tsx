"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle2, Zap, Building2 } from "lucide-react"

export function MetodoTransferencia() {
  const suportes = [
    {
      icon: CheckCircle2,
      titulo: "Reconhecimento de Créditos",
      descricao: "Aproveitamento de até 95% dos créditos com análise transparente em até 15 dias",
    },
    {
      icon: Zap,
      titulo: "Processo Ágil",
      descricao: "Inscrição em até 30 dias com documentação simplificada e suporte dedicado",
    },
    {
      icon: Building2,
      titulo: "Estrutura Superior",
      descricao: "Laboratórios equipados, professores mestres e doutores, plataforma digital avançada",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">No IPOG, sua transferência é transparente e ágil</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Reconhecemos seus créditos, oferecemos melhor infraestrutura e atendimento personalizado durante todo o
            processo
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4 items-stretch">
            {suportes?.map((suporte, index) => {
              const Icon = suporte.icon
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 flex">
                  <Card className="h-full w-full">
                    <CardContent className="p-6 text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                          <Icon className="w-8 h-8 text-foreground" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{suporte.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{suporte.descricao}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
