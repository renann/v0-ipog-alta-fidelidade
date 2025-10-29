"use client"

import { useState, useEffect } from "react"
import { Search, GraduationCap, BookOpen, Award, Building2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useRouter, useSearchParams } from "next/navigation"

export function SearchPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedModalidades, setSelectedModalidades] = useState<string[]>(["Todas"])
  const [selectedFormacoes, setSelectedFormacoes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const modalidades = searchParams.get("modalidades")
    const formacoes = searchParams.get("formacoes")
    const query = searchParams.get("q")

    if (modalidades) {
      const modalidadesList = modalidades.split(",")
      setSelectedModalidades(modalidadesList.length > 0 ? modalidadesList : ["Todas"])
    }

    if (formacoes) {
      setSelectedFormacoes(formacoes.split(","))
    }

    if (query) {
      setSearchQuery(query)
    }
  }, [searchParams])

  const modalidades = ["EAD", "Presencial", "Ao Vivo", "Todas"]

  const formacoes = [
    {
      id: "graduacao",
      title: "Graduação",
      icon: GraduationCap,
      href: "/graduacao",
    },
    {
      id: "pos",
      title: "Pós",
      icon: BookOpen,
      href: "#",
    },
    {
      id: "extensao",
      title: "Extensão",
      icon: Award,
      href: "#",
    },
    {
      id: "enterprise",
      title: "Enterprise",
      icon: Building2,
      href: "#",
    },
  ]

  const toggleModalidade = (modalidade: string) => {
    if (modalidade === "Todas") {
      setSelectedModalidades(["Todas"])
    } else {
      const newSelection = selectedModalidades.includes(modalidade)
        ? selectedModalidades.filter((m) => m !== modalidade)
        : [...selectedModalidades.filter((m) => m !== "Todas"), modalidade]

      setSelectedModalidades(newSelection.length === 0 ? ["Todas"] : newSelection)
    }
  }

  const toggleFormacao = (formacaoId: string) => {
    setSelectedFormacoes((prev) =>
      prev.includes(formacaoId) ? prev.filter((f) => f !== formacaoId) : [...prev, formacaoId],
    )
  }

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (!selectedModalidades.includes("Todas")) {
      params.set("modalidades", selectedModalidades.join(","))
    }

    if (selectedFormacoes.length > 0) {
      params.set("formacoes", selectedFormacoes.join(","))
    }

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    router.push(`/catalogo?${params.toString()}`)
  }

  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4 py-4">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Encontre seu curso</h1>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-3">Filtros</h2>
          <div className="flex flex-wrap gap-2">
            {modalidades.map((modalidade) => (
              <button
                key={modalidade}
                onClick={() => toggleModalidade(modalidade)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedModalidades.includes(modalidade)
                    ? "bg-white text-black shadow-sm border-2 border-black"
                    : "bg-transparent text-gray-700 border-2 border-gray-300 hover:border-gray-400"
                }`}
              >
                {modalidade}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="border-t border-gray-300 mb-4" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {formacoes.map((formacao) => {
              const Icon = formacao.icon
              return (
                <Card
                  key={formacao.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedFormacoes.includes(formacao.id)
                      ? "border-2 border-black bg-white"
                      : "border border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => toggleFormacao(formacao.id)}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-base font-semibold">{formacao.title}</h3>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Digite o curso que busca..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base border-gray-300 focus:border-black"
            />
          </div>
        </div>

        {/* Botão de busca */}
        <Button
          onClick={handleSearch}
          className="w-full h-12 text-base font-semibold bg-black hover:bg-gray-800 text-white"
        >
          Buscar cursos
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </main>
  )
}
