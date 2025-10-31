"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { ReactNode } from "react"

interface Estatistica {
  icone: ReactNode
  valor: string
  label?: string
  descricao?: string
}

interface DepoimentoSimples {
  tipo: "simples"
  texto: string
  nome: string
  cargo: string
  avatar?: string
}

interface DepoimentoAntesDepois {
  tipo: "antes-depois"
  nome: string
  cargo: string
  antes: string
  depois: string
  impacto: string
  avatar?: string
}

type Depoimento = DepoimentoSimples | DepoimentoAntesDepois

interface ResultadosReaisProps {
  title: string
  subtitle?: string
  estatisticas: Estatistica[]
  depoimentos?: Depoimento[]
  corFundo?: string
}

export function ResultadosReais({ title, subtitle, estatisticas, depoimentos = [], corFundo }: ResultadosReaisProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${corFundo || ""}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{title}</h2>
          {subtitle && <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="mb-12 px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {estatisticas.map((stat, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4">
                  <Card className="p-6 text-center h-full">
                    <div className="flex justify-center mb-4">{stat.icone}</div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.valor}</div>
                    {stat.label && <p className="text-sm font-semibold mb-1">{stat.label}</p>}
                    {stat.descricao && <p className="text-xs text-muted-foreground">{stat.descricao}</p>}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Depoimentos */}
        {depoimentos.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="p-6">
                {depoimento.tipo === "simples" ? (
                  <>
                    <p className="text-sm italic mb-4">{depoimento.texto}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-muted" />
                      <div>
                        <p className="font-semibold text-sm">{depoimento.nome}</p>
                        <p className="text-xs text-muted-foreground">{depoimento.cargo}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <h4 className="font-bold text-lg">{depoimento.nome}</h4>
                      <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase">Antes</span>
                        <p className="text-sm">{depoimento.antes}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase">Depois</span>
                        <p className="text-sm">{depoimento.depois}</p>
                      </div>
                      <div className="pt-3 border-t">
                        <span className="text-xs font-semibold text-primary uppercase">Impacto</span>
                        <p className="text-sm font-semibold">{depoimento.impacto}</p>
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
