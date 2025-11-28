"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Dados dos cursos disponíveis
const cursos = [
  {
    id: "psicologia-ead",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Psicologia",
    duracao: "5 anos",
    modalidades: [{ tipo: "EAD", label: "EAD", turmas: ["Janeiro/2025", "Julho/2025"] }],
  },
  {
    id: "direito",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Direito",
    duracao: "5 anos",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Fevereiro/2025", "Agosto/2025"] },
      { tipo: "Presencial", label: "Presencial", turmas: ["São Paulo", "Rio de Janeiro", "Brasília"] },
    ],
  },
  {
    id: "arquitetura",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Arquitetura e Urbanismo",
    duracao: "5 anos",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Março/2025", "Setembro/2025"] },
      { tipo: "Presencial", label: "Presencial", turmas: ["São Paulo", "Minas Gerais"] },
    ],
  },
  {
    id: "administracao",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Administração",
    duracao: "4 anos",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Janeiro/2025"] },
      { tipo: "Presencial", label: "Presencial", turmas: ["São Paulo", "Rio de Janeiro"] },
    ],
  },
  {
    id: "avaliacao-psicologica",
    tipo: "pos-graduacao",
    tipoLabel: "Pós-graduação",
    nome: "Avaliação Psicológica",
    duracao: "12 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Março/2025", "Setembro/2025"] },
      { tipo: "Ao Vivo", label: "Ao Vivo", turmas: ["Abril/2025"] },
    ],
  },
  {
    id: "engenharia-estrutural",
    tipo: "pos-graduacao",
    tipoLabel: "Pós-graduação",
    nome: "Engenharia Estrutural",
    duracao: "18 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Fevereiro/2025", "Agosto/2025"] },
      { tipo: "Presencial", label: "Presencial", turmas: ["São Paulo", "Rio de Janeiro"] },
    ],
  },
  {
    id: "intervencao-aba",
    tipo: "pos-graduacao",
    tipoLabel: "Pós-graduação",
    nome: "Intervenção ABA",
    duracao: "12 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Janeiro/2025", "Julho/2025"] },
      { tipo: "Ao Vivo", label: "Ao Vivo", turmas: ["Março/2025"] },
    ],
  },
  {
    id: "inteligencia-artificial",
    tipo: "extensao",
    tipoLabel: "Extensão",
    nome: "Inteligência Artificial Aplicada",
    duracao: "3 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Fevereiro/2025", "Maio/2025"] },
      { tipo: "Ao Vivo", label: "Ao Vivo", turmas: ["Março/2025"] },
    ],
  },
  {
    id: "gestao-projetos-ageis",
    tipo: "extensao",
    tipoLabel: "Extensão",
    nome: "Gestão de Projetos Ágeis",
    duracao: "2 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD", turmas: ["Março/2025", "Junho/2025"] },
      { tipo: "Ao Vivo", label: "Ao Vivo", turmas: ["Abril/2025"] },
    ],
  },
  {
    id: "compliance",
    tipo: "extensao",
    tipoLabel: "Extensão",
    nome: "Compliance e Governança",
    duracao: "4 meses",
    modalidades: [{ tipo: "EAD", label: "EAD", turmas: ["Fevereiro/2025", "Agosto/2025"] }],
  },
]

const tiposFormacao = [
  {
    id: "graduacao",
    label: "Graduação",
    icon: GraduationCap,
    description: "Cursos de 4 a 5 anos para sua primeira formação superior",
  },
  {
    id: "pos-graduacao",
    label: "Pós-graduação",
    icon: BookOpen,
    description: "Especializações de 12 a 24 meses para impulsionar sua carreira",
  },
  {
    id: "extensao",
    label: "Extensão",
    icon: Briefcase,
    description: "Cursos rápidos de 2 a 6 meses para atualização profissional",
  },
]

export default function CentralMatriculaPage() {
  const router = useRouter()
  const [tipoSelecionado, setTipoSelecionado] = useState<string | null>(null)
  const [cursoSelecionado, setCursoSelecionado] = useState<string | null>(null)
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState<string | null>(null)
  const [turmaSelecionada, setTurmaSelecionada] = useState<string | null>(null)

  // Filtrar cursos pelo tipo selecionado
  const cursosFiltrados = useMemo(() => {
    if (!tipoSelecionado) return []
    return cursos.filter((curso) => curso.tipo === tipoSelecionado)
  }, [tipoSelecionado])

  // Obter curso selecionado
  const curso = useMemo(() => {
    return cursos.find((c) => c.id === cursoSelecionado)
  }, [cursoSelecionado])

  // Obter modalidade selecionada
  const modalidade = useMemo(() => {
    if (!curso || !modalidadeSelecionada) return null
    return curso.modalidades.find((m) => m.tipo === modalidadeSelecionada)
  }, [curso, modalidadeSelecionada])

  // Reset quando muda o tipo
  const handleTipoChange = (tipo: string) => {
    setTipoSelecionado(tipo)
    setCursoSelecionado(null)
    setModalidadeSelecionada(null)
    setTurmaSelecionada(null)
  }

  // Reset quando muda o curso
  const handleCursoChange = (cursoId: string) => {
    setCursoSelecionado(cursoId)
    setModalidadeSelecionada(null)
    setTurmaSelecionada(null)
  }

  // Reset quando muda a modalidade
  const handleModalidadeChange = (mod: string) => {
    setModalidadeSelecionada(mod)
    setTurmaSelecionada(null)
  }

  // Ir para checkout
  const handleCheckout = () => {
    if (curso && modalidadeSelecionada && turmaSelecionada) {
      const checkoutUrl = `/checkout?course=${curso.id}&modalidade=${modalidadeSelecionada.toLowerCase()}&turma=${encodeURIComponent(turmaSelecionada)}`
      router.push(checkoutUrl)
    }
  }

  // Verificar progresso
  const step1Complete = !!tipoSelecionado
  const step2Complete = !!cursoSelecionado
  const step3Complete = !!modalidadeSelecionada
  const step4Complete = !!turmaSelecionada
  const canCheckout = step1Complete && step2Complete && step3Complete && step4Complete

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground text-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-muted mb-4">
                <a href="/" className="hover:text-background transition-colors">
                  Home
                </a>
                <ChevronRight className="h-4 w-4" />
                <span>Central de Matrícula</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Central de Matrícula</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Selecione seu curso e finalize sua matrícula em poucos passos. Rápido, prático e 100% online.
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Coluna principal - Seleções */}
              <div className="lg:col-span-2 space-y-8">
                {/* Step 1: Tipo de Formação */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                        step1Complete ? "bg-green-500 text-white" : "bg-primary text-primary-foreground",
                      )}
                    >
                      {step1Complete ? <CheckCircle2 className="h-5 w-5" /> : "1"}
                    </div>
                    <h2 className="text-xl font-semibold">Escolha o tipo de formação</h2>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {tiposFormacao.map((tipo) => {
                      const Icon = tipo.icon
                      const isSelected = tipoSelecionado === tipo.id
                      return (
                        <button
                          key={tipo.id}
                          onClick={() => handleTipoChange(tipo.id)}
                          className={cn(
                            "p-4 rounded-lg border-2 text-left transition-all",
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 hover:bg-muted/50",
                          )}
                        >
                          <Icon className={cn("h-8 w-8 mb-3", isSelected ? "text-primary" : "text-muted-foreground")} />
                          <h3 className="font-semibold mb-1">{tipo.label}</h3>
                          <p className="text-xs text-muted-foreground">{tipo.description}</p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 2: Curso */}
                {tipoSelecionado && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                          step2Complete ? "bg-green-500 text-white" : "bg-primary text-primary-foreground",
                        )}
                      >
                        {step2Complete ? <CheckCircle2 className="h-5 w-5" /> : "2"}
                      </div>
                      <h2 className="text-xl font-semibold">Selecione o curso</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {cursosFiltrados.map((c) => {
                        const isSelected = cursoSelecionado === c.id
                        return (
                          <button
                            key={c.id}
                            onClick={() => handleCursoChange(c.id)}
                            className={cn(
                              "p-4 rounded-lg border-2 text-left transition-all",
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50 hover:bg-muted/50",
                            )}
                          >
                            <h3 className="font-semibold mb-1">{c.nome}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{c.duracao}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {c.modalidades.map((m) => (
                                <Badge key={m.tipo} variant="secondary" className="text-xs">
                                  {m.label}
                                </Badge>
                              ))}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Modalidade */}
                {curso && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                          step3Complete ? "bg-green-500 text-white" : "bg-primary text-primary-foreground",
                        )}
                      >
                        {step3Complete ? <CheckCircle2 className="h-5 w-5" /> : "3"}
                      </div>
                      <h2 className="text-xl font-semibold">Escolha a modalidade</h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {curso.modalidades.map((mod) => {
                        const isSelected = modalidadeSelecionada === mod.tipo
                        return (
                          <button
                            key={mod.tipo}
                            onClick={() => handleModalidadeChange(mod.tipo)}
                            className={cn(
                              "px-6 py-3 rounded-lg border-2 font-medium transition-all",
                              isSelected
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50",
                            )}
                          >
                            {mod.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Step 4: Turma/Data de Início */}
                {modalidade && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                          step4Complete ? "bg-green-500 text-white" : "bg-primary text-primary-foreground",
                        )}
                      >
                        {step4Complete ? <CheckCircle2 className="h-5 w-5" /> : "4"}
                      </div>
                      <h2 className="text-xl font-semibold">
                        {modalidadeSelecionada === "Presencial" ? "Escolha a unidade" : "Escolha a turma"}
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {modalidade.turmas.map((turma) => {
                        const isSelected = turmaSelecionada === turma
                        return (
                          <button
                            key={turma}
                            onClick={() => setTurmaSelecionada(turma)}
                            className={cn(
                              "px-5 py-3 rounded-lg border-2 font-medium transition-all flex items-center gap-2",
                              isSelected
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50",
                            )}
                          >
                            {modalidadeSelecionada === "Presencial" ? (
                              <MapPin className="h-4 w-4" />
                            ) : (
                              <Calendar className="h-4 w-4" />
                            )}
                            {turma}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Resumo */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Resumo da seleção</h3>

                      <div className="space-y-4">
                        {/* Tipo */}
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="text-sm text-muted-foreground">Formação</span>
                          <span className="font-medium">
                            {tiposFormacao.find((t) => t.id === tipoSelecionado)?.label || "—"}
                          </span>
                        </div>

                        {/* Curso */}
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="text-sm text-muted-foreground">Curso</span>
                          <span className="font-medium text-right max-w-[180px]">{curso?.nome || "—"}</span>
                        </div>

                        {/* Modalidade */}
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="text-sm text-muted-foreground">Modalidade</span>
                          <span className="font-medium">{modalidadeSelecionada || "—"}</span>
                        </div>

                        {/* Turma */}
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="text-sm text-muted-foreground">
                            {modalidadeSelecionada === "Presencial" ? "Unidade" : "Turma"}
                          </span>
                          <span className="font-medium">{turmaSelecionada || "—"}</span>
                        </div>

                        {/* Duração */}
                        {curso && (
                          <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-sm text-muted-foreground">Duração</span>
                            <span className="font-medium">{curso.duracao}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <Button onClick={handleCheckout} disabled={!canCheckout} className="w-full mt-6" size="lg">
                        Ir para o checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      {!canCheckout && (
                        <p className="text-xs text-muted-foreground text-center mt-3">
                          Complete todas as etapas para continuar
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
