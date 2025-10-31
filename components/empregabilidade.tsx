"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface Estatistica {
  icon: ReactNode
  valor: string
  descricao: string
}

interface Depoimento {
  texto: string
  autor: string
}

interface Servico {
  texto: string
}

interface BotaoCTA {
  texto: string
  href?: string
  onClick?: () => void
}

interface EmpregabilidadeProps {
  title: string
  subtitle?: string
  estatisticas: Estatistica[]
  usarCarrossel?: boolean
  servicos?: Servico[]
  depoimento?: Depoimento
  botaoCTA?: BotaoCTA
  corFundo?: string
}

export function Empregabilidade({
  title,
  subtitle,
  estatisticas,
  usarCarrossel = true,
  servicos,
  depoimento,
  botaoCTA,
  corFundo = "bg-background",
}: EmpregabilidadeProps) {
  const renderEstatisticas = () => {
    if (usarCarrossel) {
      return (
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {estatisticas.map((stat, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3">
                  <Card className="p-6 text-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.valor}</div>
                    <p className="text-sm text-muted-foreground">{stat.descricao}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {estatisticas.map((stat, index) => (
          <Card key={index} className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">{stat.icon}</div>
            </div>
            <div className="text-4xl font-bold mb-2">{stat.valor}</div>
            <p className="text-sm text-muted-foreground">{stat.descricao}</p>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <section className={`w-full py-12 md:py-16 ${corFundo}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        {renderEstatisticas()}

        {servicos && servicos.length > 0 && (
          <Card className="p-8 mb-8">
            <h3 className="text-xl font-bold mb-6 text-center">Serviços de Carreira</h3>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {servicos.map((servico, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{servico.texto}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {depoimento && (
          <Card className="p-6 bg-muted/30 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0" />
              <div>
                <p className="text-sm mb-2 italic">{depoimento.texto}</p>
                <p className="text-sm font-semibold">— {depoimento.autor}</p>
              </div>
            </div>
          </Card>
        )}

        {botaoCTA && (
          <div className="text-center">
            {botaoCTA.href ? (
              <Button size="lg" asChild>
                <Link href={botaoCTA.href}>{botaoCTA.texto}</Link>
              </Button>
            ) : (
              <Button size="lg" onClick={botaoCTA.onClick}>
                {botaoCTA.texto}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
