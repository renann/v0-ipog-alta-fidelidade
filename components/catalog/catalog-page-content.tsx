"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, X, SlidersHorizontal, ArrowUpDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

type SortOption = "relevancia" | "duracao-asc" | "duracao-desc" | "alfabetica-az" | "alfabetica-za"

export function CatalogPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<{ type: string; value: string }[]>([])
  const [sortBy, setSortBy] = useState<SortOption>("relevancia")
  const [sortDialogOpen, setSortDialogOpen] = useState(false)

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
    const filterToRemove = activeFilters[index]
    const remainingFilters = activeFilters.filter((_, i) => i !== index)

    // Build new URL params based on remaining filters
    const params = new URLSearchParams()

    // Add formacao filters
    const formacoes = remainingFilters
      .filter((f) => f.type === "formacao")
      .map((f) => {
        const formacaoIds: Record<string, string> = {
          Graduação: "graduacao",
          "Pós-graduação": "pos-graduacao",
          Extensão: "extensao",
          Enterprise: "enterprise",
        }
        return formacaoIds[f.value] || f.value
      })
      .join(",")
    if (formacoes) params.set("formacao", formacoes)

    // Add modalidade filters
    const modalidades = remainingFilters
      .filter((f) => f.type === "modalidade")
      .map((f) => {
        const modalidadeIds: Record<string, string> = {
          EAD: "ead",
          "Ao Vivo": "ao-vivo",
          Presencial: "presencial",
        }
        return modalidadeIds[f.value] || f.value
      })
      .join(",")
    if (modalidades) params.set("modalidade", modalidades)

    // Add area filter
    const area = remainingFilters.find((f) => f.type === "area")
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
        Comunicação: "comunicacao",
        "Meio Ambiente": "meio-ambiente",
      }
      params.set("area", areaIds[area.value] || area.value)
    }

    // Keep search query if exists
    if (searchQuery) params.set("q", searchQuery)

    // Navigate to new URL
    const newUrl = params.toString() ? `/catalogo?${params.toString()}` : "/catalogo"
    router.push(newUrl)
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
        Comunicação: "comunicacao",
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
      diferenciais: "Reconhecimento MEC, corpo docente especializado, metodologia prática com supervisão clínica",
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
      nome: "Direito",
      duracao: "5 anos",
      idealPara: "Profissionais que buscam atuar na defesa da justiça e dos direitos",
      diferenciais:
        "Aprovação OAB acima da média nacional, prática jurídica desde o 1º semestre, networking com escritórios parceiros",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar argumentos em justiça, conhecimento em defesa, sua vocação em advocacia.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["FEVEREIRO", "AGOSTO"],
          link: "/graduacao/curso/direito",
        },
        {
          tipo: "PRESENCIAL",
          opcoes: ["SP", "RJ", "DF"],
          link: "/graduacao/curso/direito",
        },
      ],
    },
    {
      tipo: "GRADUAÇÃO",
      nome: "Arquitetura e Urbanismo",
      duracao: "5 anos",
      idealPara: "Criativos que desejam projetar espaços que transformam a vida das pessoas",
      diferenciais: "Ateliês equipados, projetos reais desde o início, parcerias com escritórios renomados",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar ideias em projetos, espaços em experiências, sua criatividade em construção.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["MARÇO", "SETEMBRO"],
          link: "/graduacao/curso/arquitetura",
        },
        {
          tipo: "PRESENCIAL",
          opcoes: ["SP", "MG"],
          link: "/graduacao/curso/arquitetura",
        },
      ],
    },
    {
      tipo: "PÓS-GRADUAÇÃO",
      nome: "Avaliação Psicológica",
      duracao: "12 meses",
      idealPara: "Psicólogos que buscam especialização em técnicas de avaliação",
      diferenciais:
        "Certificação reconhecida pelo CFP, prática com instrumentos atualizados, supervisão de casos reais",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar testes em diagnósticos, dados em compreensão, sua prática em excelência.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["MARÇO", "SETEMBRO"],
          link: "/pos-graduacao/curso/avaliacao-psicologica",
        },
        {
          tipo: "AO VIVO",
          opcoes: ["ABRIL"],
          link: "/pos-graduacao/curso/avaliacao-psicologica",
        },
      ],
    },
    {
      tipo: "PÓS-GRADUAÇÃO",
      nome: "Engenharia Estrutural",
      duracao: "18 meses",
      idealPara: "Engenheiros que desejam especialização em projetos estruturais",
      diferenciais:
        "Softwares profissionais inclusos, projetos estruturais complexos, professores com atuação em grandes obras",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar cálculos em segurança, projetos em solidez, sua engenharia em confiança.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["FEVEREIRO", "AGOSTO"],
          link: "/pos-graduacao/curso/engenharia-estrutural",
        },
        {
          tipo: "PRESENCIAL",
          opcoes: ["SP", "RJ"],
          link: "/pos-graduacao/curso/engenharia-estrutural",
        },
      ],
    },
    {
      tipo: "PÓS-GRADUAÇÃO",
      nome: "Intervenção ABA",
      duracao: "12 meses",
      idealPara: "Profissionais que buscam especialização em análise do comportamento aplicada",
      diferenciais: "Certificação internacional BACB, estágios supervisionados, metodologia baseada em evidências",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar comportamentos em desenvolvimento, intervenções em resultados, sua prática em transformação.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["JANEIRO", "JULHO"],
          link: "/pos-graduacao/curso/intervencao-aba",
        },
        {
          tipo: "AO VIVO",
          opcoes: ["MARÇO"],
          link: "/pos-graduacao/curso/intervencao-aba",
        },
      ],
    },
    {
      tipo: "EXTENSÃO",
      nome: "Inteligência Artificial Aplicada",
      duracao: "3 meses",
      idealPara: "Profissionais que desejam dominar IA e aplicar em seus projetos",
      diferenciais:
        "Projetos práticos com IA generativa, acesso a ferramentas premium, certificado reconhecido pelo mercado",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar dados em insights, algoritmos em soluções, sua carreira em inovação.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["FEVEREIRO", "MAIO"],
          link: "/extensao/curso/inteligencia-artificial-aplicada",
        },
        {
          tipo: "AO VIVO",
          opcoes: ["MARÇO"],
          link: "/extensao/curso/inteligencia-artificial-aplicada",
        },
      ],
    },
    {
      tipo: "EXTENSÃO",
      nome: "Marketing Digital",
      duracao: "2 meses",
      idealPara: "Profissionais que desejam dominar estratégias digitais e aumentar resultados",
      diferenciais: "Cases reais de mercado, ferramentas de análise incluídas, mentoria com especialistas",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar cliques em conversões, audiência em comunidade, sua marca em referência.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["JANEIRO", "ABRIL"],
          link: "/extensao/curso/marketing-digital",
        },
        {
          tipo: "PRESENCIAL",
          opcoes: ["SP", "RJ"],
          link: "/extensao/curso/marketing-digital",
        },
      ],
    },
    {
      tipo: "EXTENSÃO",
      nome: "Gestão de Projetos Ágeis",
      duracao: "2 meses",
      idealPara: "Profissionais que desejam implementar metodologias ágeis em suas equipes",
      diferenciais: "Certificação Scrum incluída, simulações práticas de sprints, networking com agilistas",
      textoValor:
        "Você não está escolhendo apenas um curso. Está escolhendo transformar processos em agilidade, equipes em alta performance, sua gestão em resultados.",
      modalidades: [
        {
          tipo: "EAD",
          opcoes: ["MARÇO", "JUNHO"],
          link: "/extensao/curso/gestao-projetos-ageis",
        },
        {
          tipo: "AO VIVO",
          opcoes: ["ABRIL"],
          link: "/extensao/curso/gestao-projetos-ageis",
        },
      ],
    },
  ]

  const cursosFiltrados = useMemo(() => {
    const filtered = cursos.filter((curso) => {
      // Filtrar por formação
      const formacaoFilters = activeFilters.filter((f) => f.type === "formacao")
      if (formacaoFilters.length > 0) {
        const matchesFormacao = formacaoFilters.some((filter) => {
          return curso.tipo.toUpperCase() === filter.value.toUpperCase()
        })
        if (!matchesFormacao) return false
      }

      // Filtrar por modalidade
      const modalidadeFilters = activeFilters.filter((f) => f.type === "modalidade")
      if (modalidadeFilters.length > 0) {
        const matchesModalidade = modalidadeFilters.some((filter) => {
          return curso.modalidades.some((m) => {
            // Normalizar comparação: "Ao Vivo" deve corresponder a "AO VIVO"
            const modalidadeTipo = m.tipo.toUpperCase().replace(/\s+/g, " ")
            const filterValue = filter.value.toUpperCase().replace(/\s+/g, " ")
            return modalidadeTipo === filterValue
          })
        })
        if (!matchesModalidade) return false
      }

      // Filtrar por busca de texto
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          curso.nome.toLowerCase().includes(query) ||
          curso.idealPara.toLowerCase().includes(query) ||
          curso.textoValor.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }

      return true
    })

    const sorted = [...filtered]

    switch (sortBy) {
      case "duracao-asc":
        sorted.sort((a, b) => {
          const duracaoA = Number.parseInt(a.duracao.match(/\d+/)?.[0] || "0")
          const duracaoB = Number.parseInt(b.duracao.match(/\d+/)?.[0] || "0")
          return duracaoA - duracaoB
        })
        break
      case "duracao-desc":
        sorted.sort((a, b) => {
          const duracaoA = Number.parseInt(a.duracao.match(/\d+/)?.[0] || "0")
          const duracaoB = Number.parseInt(b.duracao.match(/\d+/)?.[0] || "0")
          return duracaoB - duracaoA
        })
        break
      case "alfabetica-az":
        sorted.sort((a, b) => a.nome.localeCompare(b.nome))
        break
      case "alfabetica-za":
        sorted.sort((a, b) => b.nome.localeCompare(a.nome))
        break
      case "relevancia":
      default:
        // Manter ordem original (relevância)
        break
    }

    return sorted
  }, [cursos, activeFilters, searchQuery, sortBy])

  const sortOptions = [
    { value: "relevancia" as SortOption, label: "Relevância" },
    { value: "duracao-asc" as SortOption, label: "Duração (menor para maior)" },
    { value: "duracao-desc" as SortOption, label: "Duração (maior para menor)" },
    { value: "alfabetica-az" as SortOption, label: "Alfabética (A-Z)" },
    { value: "alfabetica-za" as SortOption, label: "Alfabética (Z-A)" },
  ]

  return (
    <main className="flex-1 bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Encontre seu curso</h1>

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
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 hover:bg-gray-100"
              onClick={() => setSortDialogOpen(true)}
              title="Ordenar cursos"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Dialog open={sortDialogOpen} onOpenChange={setSortDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Ordenar cursos</DialogTitle>
              <DialogDescription>Escolha como deseja ordenar os cursos exibidos</DialogDescription>
            </DialogHeader>
            <div className="space-y-2 py-4">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value)
                    setSortDialogOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                    sortBy === option.value
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                  {sortBy === option.value && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {cursosFiltrados.length === 0 ? (
              "Nenhum curso encontrado"
            ) : cursosFiltrados.length === 1 ? (
              "1 curso encontrado"
            ) : (
              <span>
                <span className="font-semibold text-foreground">{cursosFiltrados.length}</span> cursos encontrados
              </span>
            )}
          </p>
        </div>

        <div className="space-y-6">
          {cursosFiltrados.map((curso, index) => (
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
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Diferenciais:</span> {curso.diferenciais}
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
