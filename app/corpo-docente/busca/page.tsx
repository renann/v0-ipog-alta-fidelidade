"use client"

import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Footer from "@/components/footer"
import { DocenteModal } from "@/components/docente-modal"

// Mock data for faculty members
const mockDocentes = [
  {
    id: "1",
    nome: "Dr. José Maria Gonçalves",
    area: "Psicologia Organizacional",
    modalidade: "PÓS-GRADUAÇÃO",
    foto: "/placeholder.svg?height=120&width=120",
    miniBio: "Especialista em comportamento organizacional e gestão de pessoas com mais de 15 anos de experiência.",
    bioCompleta:
      "Doutor em Psicologia pela USP (2011), com especialização em Psicologia Cognitiva pela Universidade de Coimbra. Atua como pesquisador e coordenador de programas de pós-graduação desde 2018, com foco em desenvolvimento organizacional e liderança estratégica.",
    linkedin: "https://linkedin.com/in/exemplo",
  },
  {
    id: "2",
    nome: "Dra. Maria Silva Santos",
    area: "Psicologia Clínica",
    modalidade: "GRADUAÇÃO",
    foto: "/placeholder.svg?height=120&width=120",
    miniBio: "Psicóloga clínica com mestrado em Neuropsicologia e experiência em atendimento e docência.",
    bioCompleta:
      "Mestre em Neuropsicologia pela UFMG (2015), com especialização em Terapia Cognitivo-Comportamental. Atua como docente desde 2016 e mantém consultório particular com foco em transtornos de ansiedade e depressão.",
    linkedin: "https://linkedin.com/in/exemplo",
  },
  {
    id: "3",
    nome: "Prof. Carlos Eduardo Lima",
    area: "Psicologia Social",
    modalidade: "PÓS-GRADUAÇÃO",
    foto: "/placeholder.svg?height=120&width=120",
    miniBio: "Pesquisador em psicologia social e comunitária, com projetos voltados para inclusão social.",
    bioCompleta:
      "Doutor em Psicologia Social pela PUC-SP (2013), com pós-doutorado em Políticas Públicas. Coordena projetos de extensão universitária focados em comunidades vulneráveis e atua como consultor em organizações do terceiro setor.",
    linkedin: "https://linkedin.com/in/exemplo",
  },
  {
    id: "4",
    nome: "Dra. Ana Paula Rodrigues",
    area: "Psicologia do Desenvolvimento",
    modalidade: "GRADUAÇÃO",
    foto: "/placeholder.svg?height=120&width=120",
    miniBio: "Especialista em desenvolvimento infantil e adolescente, com atuação em escolas e clínicas.",
    bioCompleta:
      "Doutora em Psicologia do Desenvolvimento pela UFRJ (2014), com especialização em Avaliação Psicológica. Atua como supervisora de estágios e mantém prática clínica voltada para crianças e adolescentes.",
    linkedin: "https://linkedin.com/in/exemplo",
  },
]

function SearchResultsContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const area = searchParams.get("area") || ""

  const [selectedDocente, setSelectedDocente] = useState<(typeof mockDocentes)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const searchTerm = query || area
  const resultCount = mockDocentes.length

  const handleOpenBio = (docente: (typeof mockDocentes)[0]) => {
    setSelectedDocente(docente)
    setIsModalOpen(true)
  }

  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb Section */}
        <section className="w-full py-4">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Corpo Docente", href: "/corpo-docente" },
                { label: "Busca" },
              ]}
            />
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Conheça os mestres que conectam você ao sucesso.</h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-4xl">
                Mais de 98% de satisfação dos nossos alunos começa aqui. Nosso corpo docente é formado por líderes de
                mercado com experiência prática e um compromisso:{" "}
                <strong>transformar seu potencial em resultados reais</strong>. Use a busca para encontrar o
                especialista que vai impulsionar sua carreira.
              </p>
              {searchTerm && (
                <p className="text-muted-foreground mt-4">
                  Resultados para: <span className="font-medium text-foreground">{searchTerm}</span> ({resultCount}{" "}
                  {resultCount === 1 ? "docente encontrado" : "docentes encontrados"})
                </p>
              )}
            </div>

            {/* Faculty Cards Grid */}
            {resultCount > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockDocentes.map((docente) => (
                  <Card key={docente.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Badge */}
                        <Badge variant="secondary" className="mb-2">
                          {docente.modalidade}
                        </Badge>

                        {/* Photo */}
                        <div className="flex justify-center">
                          <img
                            src={docente.foto || "/placeholder.svg"}
                            alt={docente.nome}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                        </div>

                        {/* Name */}
                        <h3 className="font-semibold text-lg text-center line-clamp-2">{docente.nome}</h3>

                        {/* Area */}
                        <p className="text-sm text-primary text-center font-medium">{docente.area}</p>

                        {/* Mini Bio */}
                        <p className="text-sm text-muted-foreground line-clamp-3">{docente.miniBio}</p>

                        <div className="flex justify-end pt-2">
                          <Button variant="ghost" size="sm" onClick={() => handleOpenBio(docente)} className="gap-2">
                            Conheça o mestre
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum especialista encontrado com os filtros selecionados.{" "}
                  <strong>Tente ampliar sua busca ou fale com um de nossos consultores</strong> para encontrar o
                  professor ideal para sua jornada.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal */}
      {selectedDocente && <DocenteModal docente={selectedDocente} open={isModalOpen} onOpenChange={setIsModalOpen} />}
    </>
  )
}

export default function BuscaDocentePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SearchResultsContent />
    </Suspense>
  )
}
