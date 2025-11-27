"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"

export interface Modalidade {
  tipo: string
  opcoes: string[]
  link?: string
}

export interface Curso {
  nome: string
  duracao: string
  descricao: string
  modalidade?: string // formato legado (ex: "EAD • Presencial")
  modalidades?: Modalidade[] // novo formato estruturado
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
  isGraduacao?: boolean
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
  isGraduacao = false,
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
                  <Card className="h-full min-h-[420px] border-border bg-background">
                    <CardContent className="flex h-full min-h-[420px] flex-col p-6">
                      <Badge variant="outline" className="mb-4 w-fit text-xs font-bold px-3 py-1 rounded-full">
                        {badge}
                      </Badge>
                      <h3 className="mb-4 text-xl font-bold text-foreground text-balance">{curso.nome}</h3>

                      <div className="mb-4 space-y-2 flex-1">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">Duração:</span> {curso.duracao}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          <span className="font-medium text-foreground">Ideal para:</span> {curso.descricao}
                        </p>
                        {isGraduacao && (
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium text-foreground">Formas de Ingresso:</span> Vestibular, Boletim
                            do ENEM, Portador de Diploma
                          </p>
                        )}
                      </div>

                      <div className="mt-auto">
                        {curso.modalidades ? (
                          // Novo formato estruturado
                          <div className="space-y-3 border-t pt-4">
                            {curso.modalidades.map((modalidade, idx) => (
                              <div key={idx} className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-bold">{modalidade.tipo}</span>
                                <div className="flex flex-wrap gap-1">
                                  {modalidade.opcoes.map((opcao, opIdx) => (
                                    <Badge
                                      key={opIdx}
                                      variant="outline"
                                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                                    >
                                      {opcao}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : curso.modalidade ? (
                          // Formato legado - converte para o novo formato visual
                          <div className="space-y-3 border-t pt-4">
                            {curso.modalidade.split(" • ").map((mod, idx) => (
                              <div key={idx} className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-bold">{mod.trim()}</span>
                                <Badge variant="outline" className="text-xs font-medium px-2 py-0.5 rounded-full">
                                  {mod.trim() === "EAD" ? "ONLINE" : "DIVERSAS"}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        ) : null}

                        <Button className="w-full mt-4" asChild>
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
