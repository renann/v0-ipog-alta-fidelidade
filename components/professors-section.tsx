"use client"

import { useState } from "react"
import { ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { DocenteModal } from "@/components/docente-modal"

const professors = [
  {
    name: "Dr. José Maria Gonçalves",
    area: "Gestão Estratégica",
    description:
      "Especialista em gestão estratégica com mais de 15 anos de experiência em transformação digital e liderança empresarial.",
    tags: ["Gestão Estratégica", "Transformação Digital", "Liderança"],
    foto: "/placeholder.svg?height=200&width=200",
    miniBio:
      "Especialista em gestão estratégica com mais de 15 anos de experiência em transformação digital e liderança empresarial.",
    bioCompleta:
      "Doutor em Administração pela FGV (2015), com especialização em Gestão Estratégica pela Harvard Business School. Atua como consultor empresarial desde 2008, tendo liderado projetos de transformação digital em mais de 50 empresas de médio e grande porte. Professor do IPOG desde 2016, ministra disciplinas de Gestão Estratégica, Liderança e Inovação. Autor de 3 livros sobre gestão e transformação digital.",
    linkedin: "https://linkedin.com/in/josemariagoncalves",
  },
  {
    name: "Dra. Michela Silva",
    area: "Inovação e Empreendedorismo",
    description:
      "Doutora em Administração, consultora empresarial focada em inovação, empreendedorismo e desenvolvimento organizacional.",
    tags: ["Inovação", "Empreendedorismo", "Consultoria"],
    foto: "/placeholder.svg?height=200&width=200",
    miniBio:
      "Doutora em Administração, consultora empresarial focada em inovação, empreendedorismo e desenvolvimento organizacional.",
    bioCompleta:
      "Doutora em Administração pela USP (2018), com MBA em Inovação e Empreendedorismo pela Stanford University. Fundadora de 2 startups de tecnologia e consultora de inovação para empresas Fortune 500. Professora do IPOG desde 2019, especialista em metodologias ágeis, design thinking e desenvolvimento de novos negócios. Palestrante internacional com mais de 100 apresentações em eventos de inovação.",
    linkedin: "https://linkedin.com/in/michelasilva",
  },
  {
    name: "Prof. Carlos Eduardo Mendes",
    area: "Marketing Digital e Estratégia",
    description:
      "Especialista em marketing digital com 12 anos de experiência em estratégias de crescimento e transformação de marcas.",
    tags: ["Marketing Digital", "Growth", "Branding"],
    foto: "/placeholder.svg?height=200&width=200",
    miniBio:
      "Especialista em marketing digital com 12 anos de experiência em estratégias de crescimento e transformação de marcas.",
    bioCompleta:
      "Mestre em Marketing pela ESPM (2016), com MBA em Marketing Digital pela FGV. Liderou estratégias de marketing em startups unicórnio e grandes corporações. Professor do IPOG desde 2018, ministra disciplinas de Marketing Digital, Growth Hacking e Estratégia de Marca. Consultor de marketing para mais de 80 empresas.",
    linkedin: "https://linkedin.com/in/carloseduardomendes",
  },
  {
    name: "Dra. Patricia Rodrigues",
    area: "Gestão de Pessoas e Cultura Organizacional",
    description:
      "Doutora em Psicologia Organizacional com 18 anos de experiência em desenvolvimento humano e cultura corporativa.",
    tags: ["RH Estratégico", "Cultura", "Desenvolvimento"],
    foto: "/placeholder.svg?height=200&width=200",
    miniBio:
      "Doutora em Psicologia Organizacional com 18 anos de experiência em desenvolvimento humano e cultura corporativa.",
    bioCompleta:
      "Doutora em Psicologia Organizacional pela UnB (2013), com pós-doutorado em Comportamento Organizacional pela USP. Diretora de RH em multinacionais por 18 anos. Professor do IPOG desde 2015, especialista em cultura organizacional, engajamento e desenvolvimento de lideranças. Autora de 2 livros sobre gestão de pessoas.",
    linkedin: "https://linkedin.com/in/patriciarodrigues",
  },
  {
    name: "Prof. Ricardo Alves",
    area: "Finanças Corporativas e Controladoria",
    description:
      "Especialista em finanças corporativas com 20 anos de experiência em planejamento financeiro e controladoria estratégica.",
    tags: ["Finanças", "Controladoria", "Planejamento"],
    foto: "/placeholder.svg?height=200&width=200",
    miniBio:
      "Especialista em finanças corporativas com 20 anos de experiência em planejamento financeiro e controladoria estratégica.",
    bioCompleta:
      "MBA em Finanças pela FGV (2010), com certificação CFA (Chartered Financial Analyst). CFO em empresas de médio e grande porte por 20 anos. Professor do IPOG desde 2014, ministra disciplinas de Finanças Corporativas, Controladoria e Análise de Investimentos. Consultor financeiro para empresas em processos de reestruturação.",
    linkedin: "https://linkedin.com/in/ricardoalves",
  },
  {
    name: "Dra. Amanda Costa",
    area: "Direito Empresarial e Compliance",
    description:
      "Advogada especialista em direito empresarial com 14 anos de experiência em compliance, governança corporativa e M&A.",
    tags: ["Direito Empresarial", "Compliance", "Governança"],
    foto: "/placeholder.svg?height=200&width=200",
    miniBio:
      "Advogada especialista em direito empresarial com 14 anos de experiência em compliance, governança corporativa e M&A.",
    bioCompleta:
      "Doutora em Direito Empresarial pela USP (2017), com LLM em Corporate Law pela NYU. Sócia de escritório de advocacia empresarial, especializada em compliance e governança. Professora do IPOG desde 2019, ministra disciplinas de Direito Empresarial, Compliance e Governança Corporativa. Consultora jurídica para empresas listadas na B3.",
    linkedin: "https://linkedin.com/in/amandacosta",
  },
]

export function ProfessorsSection() {
  const [selectedProfessor, setSelectedProfessor] = useState<(typeof professors)[0] | null>(null)

  return (
    <section className="w-full px-4 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Professores atuantes</h2>
            <p className="text-muted-foreground">Aprenda com quem atua e transforma o mercado</p>
          </div>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {professors.map((professor) => (
                <CarouselItem key={professor.name} className="pl-2 md:pl-4 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                  <Card
                    className="h-full hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedProfessor(professor)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted flex items-center justify-center rounded-t-lg">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="font-semibold text-lg">{professor.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{professor.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {professor.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-sm text-foreground hover:underline pt-2 inline-block font-medium">
                          Ver bio completa →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>

      {selectedProfessor && (
        <DocenteModal
          docente={{
            nome: selectedProfessor.name,
            area: selectedProfessor.area,
            miniBio: selectedProfessor.miniBio,
            bioCompleta: selectedProfessor.bioCompleta,
            linkedin: selectedProfessor.linkedin,
            foto: selectedProfessor.foto,
          }}
          open={!!selectedProfessor}
          onOpenChange={(open) => !open && setSelectedProfessor(null)}
        />
      )}
    </section>
  )
}
