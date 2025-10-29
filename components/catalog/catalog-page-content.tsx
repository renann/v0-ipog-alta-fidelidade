"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export function CatalogPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<{ type: string; value: string }[]>([])

  const modalidadesParam = searchParams.get("modalidades") || searchParams.get("modalidade")
  const formacoesParam = searchParams.get("formacoes") || searchParams.get("formacao") || searchParams.get("tipo")
  const areaParam = searchParams.get("area")
  const queryParam = searchParams.get("q")

  const computedFilters = useMemo(() => {
    const filters: { type: string; value: string }[] = []

    if (formacoesParam) {
      formacoesParam.split(",").forEach((f) => {
        const formacaoNames: Record<string, string> = {
          graduacao: "Graduação",
          pos: "Pós-graduação",
          "pos-graduacao": "Pós-graduação",
          extensao: "Extensão",
          enterprise: "Enterprise",
          Graduação: "Graduação",
          "Pós-graduação": "Pós-graduação",
          Extensão: "Extensão",
        }
        filters.push({ type: "formacao", value: formacaoNames[f] || f })
      })
    }

    if (modalidadesParam) {
      modalidadesParam.split(",").forEach((m) => {
        if (m !== "Todas") {
          const modalidadeNames: Record<string, string> = {
            ead: "EAD",
            "ao-vivo": "Ao Vivo",
            presencial: "Presencial",
            EAD: "EAD",
            "Ao Vivo": "Ao Vivo",
            Presencial: "Presencial",
          }
          filters.push({ type: "modalidade", value: modalidadeNames[m] || m })
        }
      })
    }

    if (areaParam) {
      const areaLabels: Record<string, string> = {
        psicologia: "Psicologia",
        direito: "Direito",
        engenharia: "Engenharia",
        administracao: "Administração",
        educacao: "Educação",
        saude: "Saúde",
        tecnologia: "Tecnologia da Informação",
        marketing: "Marketing",
        "recursos-humanos": "Recursos Humanos",
        financas: "Finanças",
        gestao: "Gestão de Projetos",
        arquitetura: "Arquitetura",
        design: "Design",
        comunicacao: "Comunicação",
        "meio-ambiente": "Meio Ambiente",
      }
      filters.push({ type: "area", value: areaLabels[areaParam] || areaParam })
    }

    return filters
  }, [modalidadesParam, formacoesParam, areaParam])

  useEffect(() => {
    setActiveFilters(computedFilters)
    if (queryParam) {
      setSearchQuery(queryParam)
    }
  }, [computedFilters, queryParam])

  const removeFilter = (index: number) => {
    setActiveFilters((prev) => prev.filter((_, i) => i !== index))
  }

  const handleOpenFilters = () => {
    const modalidades = activeFilters
      .filter((f) => f.type === "modalidade")
      .map((f) => f.value)
      .join(",")
    const formacoes = activeFilters
      .filter((f) => f.type === "formacao")
      .map((f) => {
        const formacaoIds: Record<string, string> = {
          Graduação: "graduacao",
          "Pós-graduação": "pos",
          Extensão: "extensao",
          Enterprise: "enterprise",
        }
        return formacaoIds[f.value] || f.value
      })
      .join(",")
    const area = activeFilters.find((f) => f.type === "area")?.value

    const params = new URLSearchParams()
    if (modalidades) params.set("modalidades", modalidades)
    if (formacoes) params.set("formacoes", formacoes)
    if (area) {
      const areaIds: Record<string, string> = {
        Psicologia: "psicologia",
        Direito: "direito",
        Engenharia: "engenharia",
        Administração: "administracao",
        Educação: "educacao",
        Saúde: "saude",
        "Tecnologia da Informação": "tecnologia",
        Marketing: "marketing",
        "Recursos Humanos": "recursos-humanos",
        Finanças: "financas",
        "Gestão de Projetos": "gestao",
        Arquitetura: "arquitetura",
        Design: "design",
        Comunicação: "comunicação",
        "Meio Ambiente": "meio-ambiente",
      }
      params.set("area", areaIds[area] || area)
    }
    if (searchQuery) params.set("q", searchQuery)

    router.push(`/busca?${params.toString()}`)
  }

  const cursos = [
    {
      tipo: "GRADUAÇÃO",
      nome: "Psicologia",
      duracao: "5 anos",
      idealPara: "Jovens que desejam compreender o comportamento humano e transformar vidas",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar sua escuta em acolhimento, sua percepção em compreensão, sua vocação em profissão.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["JANEIRO"],
          link: "/graduacao/curso/psicologia-ead",
        },
      ],
    },
    {
      tipo: "GRADUAÇÃO",
      nome: "Avaliação Psicológica: Práticas Imersivas Avançadas",
      duracao: "18 meses",
      idealPara: "Lorem ipsum dolor sit amet vaccum ipsis.",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar sua escuta em precisão, sua percepção em evidência, sua atuação em autoridade.",
      modalidades: [
        {
          tipo: "PRESENCIAL",
          opcoes: ["GO", "DF"],
        },
        {
          tipo: "EAD",
          opcoes: ["JANEIRO"],
        },
      ],
    },
    {
      tipo: "PÓS-GRADUAÇÃO",
      nome: "Gestão Estratégica de Pessoas",
      duracao: "12 meses",
      idealPara: "Profissionais que buscam desenvolver competências em gestão de talentos",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar equipes em resultados, pessoas em talentos, sua gestão em liderança.",
      modalidades: [
        {
          tipo: "PRESENCIAL",
          opcoes: ["SP", "RJ"],
        },
        {
          tipo: "EAD",
          opcoes: ["MARÇO"],
        },
      ],
    },
  ]

  return (
    <main className="flex-1 bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Encontre seu curso</h1>

        {/* Barra de busca e filtros */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Psicologia"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base border-gray-300 focus:border-black"
              />
            </div>
            <Button className="h-12 w-12 bg-black hover:bg-gray-800 text-white p-0">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {activeFilters.map((filter, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium bg-white border-gray-300 hover:bg-gray-50"
              >
                {filter.value}
                <button onClick={() => removeFilter(index)} className="ml-2 hover:text-black">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 hover:bg-gray-100"
              onClick={handleOpenFilters}
              title="Abrir filtros"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Lista de cursos */}
        <div className="space-y-6">
          {cursos.map((curso, index) => (
            <Card key={index} className="w-full">
              <CardContent className="p-6 md:p-8">
                <Badge variant="outline" className="w-fit mb-6 text-xs font-bold px-4 py-1.5 rounded-full">
                  {curso.tipo}
                </Badge>

                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">{curso.nome}</h3>

                <div className="mb-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Duração:</span> {curso.duracao}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Ideal para quem:</span> {curso.idealPara}
                  </p>
                </div>

                <p className="text-base mb-8">{curso.textoValor}</p>

                <div className="space-y-4 border-t pt-6">
                  {curso.modalidades.map((modalidade, idx) => {
                    const content = (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-lg font-bold">{modalidade.tipo}</span>
                        <div className="flex items-center gap-2">
                          {modalidade.opcoes.map((opcao, opIdx) => (
                            <Badge key={opIdx} variant="outline" className="text-xs font-medium px-3 py-1 rounded-full">
                              {opcao}
                            </Badge>
                          ))}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </div>
                      </div>
                    )

                    if (modalidade.link) {
                      return (
                        <Link key={idx} href={modalidade.link} className="block hover:opacity-80 transition-opacity">
                          {content}
                        </Link>
                      )
                    }

                    return <div key={idx}>{content}</div>
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
