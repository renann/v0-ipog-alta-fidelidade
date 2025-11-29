"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, BookOpen, Briefcase, ChevronRight, Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Dados dos cursos disponíveis
const cursos = [
  {
    id: "psicologia-ead",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Psicologia",
    duracao: "5 anos",
    modalidades: [{ tipo: "EAD", label: "EAD" }],
  },
  {
    id: "direito",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Direito",
    duracao: "5 anos",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Presencial", label: "Presencial" },
    ],
  },
  {
    id: "arquitetura",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Arquitetura e Urbanismo",
    duracao: "5 anos",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Presencial", label: "Presencial" },
    ],
  },
  {
    id: "administracao",
    tipo: "graduacao",
    tipoLabel: "Graduação",
    nome: "Administração",
    duracao: "4 anos",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Presencial", label: "Presencial" },
    ],
  },
  {
    id: "avaliacao-psicologica",
    tipo: "pos-graduacao",
    tipoLabel: "Pós-graduação",
    nome: "Avaliação Psicológica",
    duracao: "12 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Ao Vivo", label: "Ao Vivo" },
    ],
  },
  {
    id: "engenharia-estrutural",
    tipo: "pos-graduacao",
    tipoLabel: "Pós-graduação",
    nome: "Engenharia Estrutural",
    duracao: "18 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Presencial", label: "Presencial" },
    ],
  },
  {
    id: "intervencao-aba",
    tipo: "pos-graduacao",
    tipoLabel: "Pós-graduação",
    nome: "Intervenção ABA",
    duracao: "12 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Ao Vivo", label: "Ao Vivo" },
    ],
  },
  {
    id: "inteligencia-artificial",
    tipo: "extensao",
    tipoLabel: "Extensão",
    nome: "Inteligência Artificial Aplicada",
    duracao: "3 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Ao Vivo", label: "Ao Vivo" },
    ],
  },
  {
    id: "gestao-projetos-ageis",
    tipo: "extensao",
    tipoLabel: "Extensão",
    nome: "Gestão de Projetos Ágeis",
    duracao: "2 meses",
    modalidades: [
      { tipo: "EAD", label: "EAD" },
      { tipo: "Ao Vivo", label: "Ao Vivo" },
    ],
  },
  {
    id: "compliance",
    tipo: "extensao",
    tipoLabel: "Extensão",
    nome: "Compliance e Governança",
    duracao: "4 meses",
    modalidades: [{ tipo: "EAD", label: "EAD" }],
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

  // Filtrar cursos pelo tipo selecionado
  const cursosFiltrados = useMemo(() => {
    if (!tipoSelecionado) return []
    return cursos.filter((curso) => curso.tipo === tipoSelecionado)
  }, [tipoSelecionado])

  // Obter curso selecionado
  const curso = useMemo(() => {
    return cursos.find((c) => c.id === cursoSelecionado)
  }, [cursoSelecionado])

  // Reset quando muda o tipo
  const handleTipoChange = (tipo: string) => {
    setTipoSelecionado(tipo)
    setCursoSelecionado(null)
    setModalidadeSelecionada(null)
  }

  // Reset quando muda o curso
  const handleCursoChange = (cursoId: string) => {
    setCursoSelecionado(cursoId)
    setModalidadeSelecionada(null)
  }

  // Ir para checkout
  const handleCheckout = () => {
    if (curso && modalidadeSelecionada) {
      const checkoutUrl = `/checkout?course=${curso.id}&modalidade=${modalidadeSelecionada.toLowerCase()}`
      router.push(checkoutUrl)
    }
  }

  // Verificar progresso
  const step1Complete = !!tipoSelecionado
  const step2Complete = !!cursoSelecionado
  const step3Complete = !!modalidadeSelecionada
  const canCheckout = step1Complete && step2Complete && step3Complete

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero - removida faixa preta, usando fundo neutro */}
        <section className="border-b py-10 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <a href="/" className="hover:text-foreground transition-colors">
                  Home
                </a>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Central de Matrícula</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Central de Matrícula</h1>
              <p className="text-lg text-muted-foreground">
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
              <div className="lg:col-span-2 space-y-10">
                {/* Step 1: Tipo de Formação */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2",
                        step1Complete
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-foreground",
                      )}
                    >
                      {step1Complete ? <Check className="h-4 w-4" /> : "1"}
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
                              ? "border-foreground bg-foreground/5"
                              : "border-border hover:border-foreground/50 hover:bg-muted/50",
                          )}
                        >
                          <Icon
                            className={cn("h-8 w-8 mb-3", isSelected ? "text-foreground" : "text-muted-foreground")}
                          />
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
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2",
                          step2Complete
                            ? "bg-foreground text-background border-foreground"
                            : "bg-background text-foreground border-foreground",
                        )}
                      >
                        {step2Complete ? <Check className="h-4 w-4" /> : "2"}
                      </div>
                      <h2 className="text-xl font-semibold">Selecione o curso</h2>
                    </div>

                    <Select value={cursoSelecionado || ""} onValueChange={handleCursoChange}>
                      <SelectTrigger
                        className={cn(
                          "w-full min-h-[72px] h-auto py-4 px-4 border-2 text-left [&>span]:flex [&>span]:flex-col [&>span]:items-start [&>span]:gap-0.5",
                          cursoSelecionado
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/50",
                        )}
                      >
                        <SelectValue placeholder="Selecione um curso">
                          {curso && (
                            <div className="flex flex-col items-start gap-0.5 py-1">
                              <span className="font-semibold text-base leading-tight">{curso.nome}</span>
                              <span className="text-sm text-muted-foreground leading-tight">
                                {curso.duracao} • {curso.modalidades.map((m) => m.label).join(", ")}
                              </span>
                            </div>
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {cursosFiltrados.map((c) => (
                          <SelectItem key={c.id} value={c.id} className="py-3 cursor-pointer">
                            <div className="flex flex-col items-start gap-1">
                              <span className="font-semibold">{c.nome}</span>
                              <span className="text-sm text-muted-foreground">
                                {c.duracao} • {c.modalidades.map((m) => m.label).join(", ")}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Step 3: Modalidade - removido step 4 de turma */}
                {curso && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2",
                          step3Complete
                            ? "bg-foreground text-background border-foreground"
                            : "bg-background text-foreground border-foreground",
                        )}
                      >
                        {step3Complete ? <Check className="h-4 w-4" /> : "3"}
                      </div>
                      <h2 className="text-xl font-semibold">Escolha a modalidade</h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {curso.modalidades.map((mod) => {
                        const isSelected = modalidadeSelecionada === mod.tipo
                        return (
                          <button
                            key={mod.tipo}
                            onClick={() => setModalidadeSelecionada(mod.tipo)}
                            className={cn(
                              "px-6 py-3 rounded-lg border-2 font-medium transition-all",
                              isSelected
                                ? "border-foreground bg-foreground text-background"
                                : "border-border hover:border-foreground/50",
                            )}
                          >
                            {mod.label}
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

                      <div className="space-y-3">
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
