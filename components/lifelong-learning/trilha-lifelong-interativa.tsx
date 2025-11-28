"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X, Plus, ArrowRight, Percent } from "lucide-react"
import Link from "next/link"

const CURSOS_GRADUACAO = [
  "Administração",
  "Direito",
  "Psicologia",
  "Engenharia Civil",
  "Arquitetura e Urbanismo",
  "Ciências Contábeis",
  "Engenharia de Produção",
  "Pedagogia",
  "Biomedicina",
  "Enfermagem",
]

const CURSOS_POS_GRADUACAO = [
  { id: 1, nome: "Avaliação Psicológica", area: "Psicologia" },
  { id: 2, nome: "Neuropsicologia", area: "Psicologia" },
  { id: 3, nome: "Psicologia Organizacional", area: "Psicologia" },
  { id: 4, nome: "Direito Tributário", area: "Direito" },
  { id: 5, nome: "Direito Empresarial", area: "Direito" },
  { id: 6, nome: "Direito Trabalhista e Previdenciário", area: "Direito" },
  { id: 7, nome: "Engenharia Estrutural e Fundações", area: "Engenharia" },
  { id: 8, nome: "Gerenciamento de Projetos", area: "Engenharia" },
  { id: 9, nome: "MBA em Gestão de Pessoas", area: "Administração" },
  { id: 10, nome: "MBA em Finanças Corporativas", area: "Administração" },
  { id: 11, nome: "Controladoria e Finanças", area: "Contabilidade" },
  { id: 12, nome: "Perícia Contábil", area: "Contabilidade" },
  { id: 13, nome: "Educação Infantil e Séries Iniciais", area: "Educação" },
  { id: 14, nome: "Psicopedagogia Institucional", area: "Educação" },
  { id: 15, nome: "Análises Clínicas", area: "Saúde" },
]

interface TrilhaLifelongInterativaProps {
  backgroundColor?: string
}

export function TrilhaLifelongInterativa({ backgroundColor = "bg-muted/30" }: TrilhaLifelongInterativaProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [graduacao, setGraduacao] = useState("")
  const [posGraduacoes, setPosGraduacoes] = useState<number[]>([])
  const [filtroPos, setFiltroPos] = useState("")

  const calcularDesconto = () => {
    return Math.min(posGraduacoes.length * 10, 50) // 10% por curso, máximo 50%
  }

  const sugerirProximosCursos = () => {
    if (posGraduacoes.length === 0) {
      // Se não fez pós, sugere baseado na graduação
      const areaGraduacao = graduacao.toLowerCase()
      if (areaGraduacao.includes("psicologia")) {
        return CURSOS_POS_GRADUACAO.filter((c) => c.area === "Psicologia")
      }
      if (areaGraduacao.includes("direito")) {
        return CURSOS_POS_GRADUACAO.filter((c) => c.area === "Direito")
      }
      if (areaGraduacao.includes("engenharia") || areaGraduacao.includes("arquitetura")) {
        return CURSOS_POS_GRADUACAO.filter((c) => c.area === "Engenharia")
      }
      if (areaGraduacao.includes("administração") || areaGraduacao.includes("contábeis")) {
        return CURSOS_POS_GRADUACAO.filter((c) => c.area === "Administração" || c.area === "Contabilidade")
      }
      if (areaGraduacao.includes("pedagogia")) {
        return CURSOS_POS_GRADUACAO.filter((c) => c.area === "Educação")
      }
    }

    // Se já fez pós, sugere da mesma área e áreas complementares
    const cursosFeitos = CURSOS_POS_GRADUACAO.filter((c) => posGraduacoes.includes(c.id))
    const areasFeitas = [...new Set(cursosFeitos.map((c) => c.area))]

    return CURSOS_POS_GRADUACAO.filter((c) => !posGraduacoes.includes(c.id) && areasFeitas.includes(c.area)).slice(0, 3)
  }

  const cursosFiltrados = CURSOS_POS_GRADUACAO.filter(
    (curso) => !posGraduacoes.includes(curso.id) && curso.nome.toLowerCase().includes(filtroPos.toLowerCase()),
  )

  const handleAddPos = (cursoId: number) => {
    if (!posGraduacoes.includes(cursoId)) {
      setPosGraduacoes([...posGraduacoes, cursoId])
      setFiltroPos("")
    }
  }

  const handleRemovePos = (cursoId: number) => {
    setPosGraduacoes(posGraduacoes.filter((id) => id !== cursoId))
  }

  const cursosAdicionados = CURSOS_POS_GRADUACAO.filter((c) => posGraduacoes.includes(c.id))
  const sugestoes = sugerirProximosCursos()
  const desconto = calcularDesconto()

  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Monte sua trilha de evolução personalizada
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Conte-nos sua trajetória e descubra os próximos passos com descontos progressivos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Linha vertical da timeline */}
            <div className="absolute left-4 md:left-6 top-4 w-0.5 bg-border" style={{ height: `calc(100% - 2rem)` }} />

            {/* Steps */}
            <div className="space-y-6 md:space-y-8">
              {/* Step 1: Graduação */}
              <div className="relative pl-12 md:pl-16">
                <div
                  className={`absolute left-0 md:left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-background ${
                    currentStep >= 1 ? "bg-foreground text-background" : "bg-muted text-foreground"
                  }`}
                >
                  1
                </div>

                <div
                  className={`rounded-xl p-5 md:p-6 transition-all ${
                    currentStep === 1
                      ? "bg-foreground text-background shadow-lg"
                      : "bg-card border shadow-sm opacity-60"
                  }`}
                >
                  <h3 className={`text-lg md:text-xl font-bold mb-2 ${currentStep === 1 ? "text-background" : ""}`}>
                    Qual é sua graduação?
                  </h3>
                  <p
                    className={`text-sm md:text-base mb-4 ${
                      currentStep === 1 ? "text-background/80" : "text-muted-foreground"
                    }`}
                  >
                    Informe o curso de graduação que você concluiu
                  </p>

                  {currentStep === 1 ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="graduacao" className="text-background">
                          Nome do curso
                        </Label>
                        <Input
                          id="graduacao"
                          placeholder="Ex: Psicologia, Direito, Administração..."
                          value={graduacao}
                          onChange={(e) => setGraduacao(e.target.value)}
                          className="bg-background text-foreground"
                          list="graduacoes"
                        />
                        <datalist id="graduacoes">
                          {CURSOS_GRADUACAO.map((curso) => (
                            <option key={curso} value={curso} />
                          ))}
                        </datalist>
                      </div>
                      <Button
                        onClick={() => graduacao && setCurrentStep(2)}
                        disabled={!graduacao}
                        className="bg-background text-foreground hover:bg-background/90 w-full md:w-auto"
                      >
                        Continuar <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-sm">
                        {graduacao}
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                        Editar
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 2: Pós-Graduações */}
              {currentStep >= 2 && (
                <div className="relative pl-12 md:pl-16">
                  <div
                    className={`absolute left-0 md:left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-background ${
                      currentStep >= 2 ? "bg-foreground text-background" : "bg-muted text-foreground"
                    }`}
                  >
                    2
                  </div>

                  <div
                    className={`rounded-xl p-5 md:p-6 transition-all ${
                      currentStep === 2
                        ? "bg-foreground text-background shadow-lg"
                        : "bg-card border shadow-sm opacity-60"
                    }`}
                  >
                    <h3 className={`text-lg md:text-xl font-bold mb-2 ${currentStep === 2 ? "text-background" : ""}`}>
                      Já fez alguma pós-graduação no IPOG?
                    </h3>
                    <p
                      className={`text-sm md:text-base mb-4 ${
                        currentStep === 2 ? "text-background/80" : "text-muted-foreground"
                      }`}
                    >
                      Adicione os cursos que já concluiu para calcularmos seu desconto progressivo
                    </p>

                    {currentStep === 2 ? (
                      <div className="space-y-4">
                        {/* Cursos adicionados */}
                        {cursosAdicionados.length > 0 && (
                          <div className="space-y-2">
                            <Label className="text-background">Cursos concluídos:</Label>
                            <div className="flex flex-wrap gap-2">
                              {cursosAdicionados.map((curso) => (
                                <Badge key={curso.id} variant="secondary" className="gap-2">
                                  {curso.nome}
                                  <button onClick={() => handleRemovePos(curso.id)} className="hover:text-destructive">
                                    <X className="h-3 w-3" />
                                  </button>
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Campo de busca */}
                        <div className="space-y-2">
                          <Label htmlFor="pos" className="text-background">
                            Buscar curso
                          </Label>
                          <Input
                            id="pos"
                            placeholder="Digite para buscar..."
                            value={filtroPos}
                            onChange={(e) => setFiltroPos(e.target.value)}
                            className="bg-background text-foreground"
                          />

                          {/* Lista de resultados */}
                          {filtroPos && cursosFiltrados.length > 0 && (
                            <div className="max-h-48 overflow-y-auto bg-background rounded-md border">
                              {cursosFiltrados.map((curso) => (
                                <button
                                  key={curso.id}
                                  onClick={() => handleAddPos(curso.id)}
                                  className="w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center justify-between group"
                                >
                                  <div>
                                    <div className="font-medium text-foreground">{curso.nome}</div>
                                    <div className="text-xs text-muted-foreground">{curso.area}</div>
                                  </div>
                                  <Plus className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            onClick={() => setCurrentStep(3)}
                            className="bg-background text-foreground hover:bg-background/90"
                          >
                            {posGraduacoes.length > 0 ? "Ver minha trilha" : "Pular esta etapa"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {cursosAdicionados.length > 0 ? (
                            cursosAdicionados.map((curso) => (
                              <Badge key={curso.id} variant="secondary" className="text-sm">
                                {curso.nome}
                              </Badge>
                            ))
                          ) : (
                            <Badge variant="secondary" className="text-sm">
                              Nenhum curso informado
                            </Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setCurrentStep(2)}>
                          Editar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Sugestões de Evolução */}
              {currentStep >= 3 && sugestoes.length > 0 && (
                <div className="relative pl-12 md:pl-16">
                  <div
                    className={`absolute left-0 md:left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-background ${
                      currentStep >= 3 ? "bg-foreground text-background" : "bg-muted text-foreground"
                    }`}
                  >
                    3
                  </div>

                  <div className="rounded-xl p-5 md:p-6 bg-card border shadow-sm">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Sua trilha de evolução</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                      Baseado em sua trajetória, recomendamos os seguintes cursos
                    </p>

                    <div className="space-y-3">
                      {sugestoes.map((curso, index) => (
                        <div
                          key={curso.id}
                          className="p-4 rounded-lg bg-muted/50 border border-border hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-muted-foreground">PASSO {index + 1}</span>
                                <Badge variant="outline" className="text-xs">
                                  {curso.area}
                                </Badge>
                              </div>
                              <h4 className="font-semibold text-foreground mb-1">{curso.nome}</h4>
                              <p className="text-sm text-muted-foreground">
                                Complementa sua formação em {curso.area.toLowerCase()}
                              </p>
                            </div>
                            {desconto > 0 && (
                              <div className="flex items-center gap-1 text-green-600 dark:text-green-500 shrink-0">
                                <Percent className="h-4 w-4" />
                                <span className="text-sm font-bold">{desconto}% OFF</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {desconto > 0 && (
                      <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
                        <div className="flex items-center gap-2 mb-1">
                          <Percent className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="font-bold text-green-900 dark:text-green-100">
                            Desconto Progressivo Ativo
                          </span>
                        </div>
                        <p className="text-sm text-green-800 dark:text-green-200">
                          Por ter concluído {posGraduacoes.length} curso{posGraduacoes.length > 1 ? "s" : ""} no IPOG,
                          você tem direito a <strong>{desconto}% de desconto</strong> em sua próxima matrícula!
                        </p>
                      </div>
                    )}

                    <Button onClick={() => setCurrentStep(4)} className="w-full mt-6" size="lg">
                      Continuar para matrícula <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: CTA Final */}
              {currentStep >= 4 && (
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 md:left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-background bg-foreground text-background">
                    4
                  </div>

                  <div className="rounded-xl p-5 md:p-6 bg-foreground text-background shadow-lg">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Finalize sua matrícula</h3>
                    <p className="text-sm md:text-base text-background/80 mb-4">
                      Escolha o curso que deseja iniciar e garanta seu desconto exclusivo
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-background text-foreground hover:bg-background/90 flex-1" size="lg">
                        <Link href="/catalogo?tipo=pos-graduacao">Ver todos os cursos</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-background/20 text-background hover:bg-background/10 flex-1 bg-transparent"
                        size="lg"
                      >
                        <Link href="/checkout">Ir para checkout</Link>
                      </Button>
                    </div>

                    <p className="text-xs text-background/60 mt-4 text-center">
                      Dúvidas? Fale com nosso time de consultores educacionais
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
