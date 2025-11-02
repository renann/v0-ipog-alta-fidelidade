"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Clock } from "lucide-react"
import Link from "next/link"

export interface Curso {
  nome: string
  duracao: string
  descricao: string
  modalidade: string
  link?: string
}

export interface CursosProps {
  title: string
  subtitle?: string
  cursos: Curso[]
  badge?: string
  ctaText?: string
  ctaLink?: string
  carouselBasis?: string
  footerCTA?: {
    text: string
    link: string
  }
}

export function Cursos({
  title,
  subtitle,
  cursos,
  badge = "PÓS-GRADUAÇÃO",
  ctaText = "Ver curso",
  ctaLink = "#",
  carouselBasis = "md:basis-1/2 lg:basis-1/3",
  footerCTA,
}: CursosProps) {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground text-pretty">{subtitle}</p>}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {cursos.map((curso, index) => (
                <CarouselItem key={index} className={carouselBasis}>
                  <Card className="h-full min-h-[500px] border-border bg-background">
                    <CardContent className="flex h-full min-h-[500px] flex-col p-6">
                      <Badge variant="outline" className="mb-4 w-fit">
                        {badge}
                      </Badge>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{curso.nome}</h3>
                      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Duração: {curso.duracao}</span>
                      </div>
                      <p className="mb-6 flex-1 text-sm text-muted-foreground">{curso.descricao}</p>
                      <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="gap-1">
                            Modalidade: {curso.modalidade}
                          </Badge>
                        </div>
                        <Button className="w-full" asChild>
                          <Link href={curso.link || ctaLink}>{ctaText}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {footerCTA && (
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href={footerCTA.link}>{footerCTA.text}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
