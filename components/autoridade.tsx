"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { DocenteModal } from "@/components/docente-modal"
import type { ReactNode } from "react"

interface Credencial {
  icon: ReactNode
  texto: string
}

interface Professor {
  nome: string
  bio: string
  area: string
  avatar?: ReactNode
  tags?: string[]
  foto?: string
  miniBio?: string
  bioCompleta?: string
  linkedin?: string
}

interface AutoridadeProps {
  title: string
  subtitle: string
  credenciais: Credencial[]
  professores: Professor[]
  tituloProfessores?: string
  backgroundColor?: string
}

export function Autoridade({
  title,
  subtitle,
  credenciais,
  professores,
  tituloProfessores = "Conheça alguns de nossos professores executivos",
  backgroundColor = "bg-muted/30",
}: AutoridadeProps) {
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null)

  return (
    <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {credenciais.map((credencial, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  {credencial.icon}
                </div>
                <span className="font-medium">{credencial.texto}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">{tituloProfessores}</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {professores.map((professor, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                  <Card
                    className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedProfessor(professor)}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {professor.avatar || (
                        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                          <div className="w-10 h-10 text-muted-foreground" />
                        </div>
                      )}
                      <h4 className="font-semibold text-lg">{professor.nome}</h4>
                      <p className="text-sm font-medium text-muted-foreground">{professor.area}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{professor.bio}</p>
                      {professor.tags && professor.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-center">
                          {professor.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <span className="text-sm text-foreground hover:underline pt-2 inline-block font-medium">
                        Ver bio completa →
                      </span>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {selectedProfessor && (
        <DocenteModal
          docente={{
            nome: selectedProfessor.nome,
            area: selectedProfessor.area,
            miniBio: selectedProfessor.miniBio || selectedProfessor.bio,
            bioCompleta:
              selectedProfessor.bioCompleta ||
              selectedProfessor.bio +
                " Com vasta experiência acadêmica e profissional, contribui significativamente para a formação de novos profissionais no IPOG.",
            linkedin: selectedProfessor.linkedin,
            foto: selectedProfessor.foto || "/placeholder.svg?height=200&width=200",
          }}
          open={!!selectedProfessor}
          onOpenChange={(open) => !open && setSelectedProfessor(null)}
        />
      )}
    </section>
  )
}
