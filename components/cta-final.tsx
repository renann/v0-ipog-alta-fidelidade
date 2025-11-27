"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Info, CreditCard, RefreshCw, Smartphone } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { openAssistantForConsultor } from "@/lib/assistant-events"
import { Badge } from "@/components/ui/badge"

interface CtaFinalProps {
  title?: string
  description?: string
  enrollmentFee?: string
  monthlyFee?: string
  duration?: string
  totalCost?: string
  nextClassDate?: string
  promotionDeadline?: string
  isGraduacao?: boolean
}

export function CtaFinal({
  title = "Esta é a escolha que conecta você ao sucesso.",
  description = "Curso criado para quem busca protagonismo, com metodologia aplicada, professores de mercado e acompanhamento próximo em todas as etapas.",
  enrollmentFee = "R$ 100,00",
  monthlyFee = "R$ 499,00",
  duration = "18 meses",
  totalCost = "R$ 12.582,00",
  nextClassDate = "Novembro",
  promotionDeadline = "30 de Outubro",
  isGraduacao = description.includes("Taxa de Inscrição"),
}: CtaFinalProps) {
  const [isPriceVisible, setIsPriceVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
  })

  const handleRevealPrice = () => {
    setIsModalOpen(true)
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "telefone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhone(value) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simula envio do lead (aqui pode ser integrado com API)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsModalOpen(false)
    setIsPriceVisible(true)
  }

  const taxaLabel = isGraduacao ? "Taxa de inscrição" : "Taxa de matrícula"
  const taxaDescricao = isGraduacao
    ? "A inscrição garante sua qualificação e análise de perfil. Após aprovação, nossa equipe comercial entrará em contato para apresentar as condições de mensalidade e formas de pagamento."
    : "A matrícula garante sua qualificação e análise de perfil. Após aprovação, nossa equipe comercial entrará em contato para apresentar as condições de mensalidade e formas de pagamento."
  const botaoLabel = "Pagar agora"

  const formasPagamento = [
    {
      icon: CreditCard,
      nome: "Cartão parcelado",
      descricao: "Até 18x sem juros",
    },
    {
      icon: RefreshCw,
      nome: "Mensalidade recorrente",
      descricao: "Débito automático mensal",
      badge: "1ª parcela no ato",
    },
    {
      icon: CreditCard,
      nome: "Cartão à vista",
      descricao: "Pagamento único",
      badge: "5% desconto",
      badgeVariant: "success" as const,
    },
    {
      icon: Smartphone,
      nome: "Pix à vista",
      descricao: "Pagamento instantâneo",
      badge: "10% desconto",
      badgeVariant: "success" as const,
    },
  ]

  return (
    <>
      <section id="preco" className="w-full py-12 md:py-16 bg-gray-100 scroll-mt-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">{title}</h2>
            </div>

            <Card className="relative bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-6">
              {!isPriceVisible && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center z-10">
                  <Button size="lg" onClick={handleRevealPrice} className="px-8 bg-black hover:bg-gray-800">
                    Clique para ver o valor deste curso
                  </Button>
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg text-gray-600">{taxaLabel}</p>
                  <p className="text-5xl md:text-6xl font-bold">{enrollmentFee}</p>
                  <p className="text-sm text-gray-600">Pagamento único para qualificação</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-left">{taxaDescricao}</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <p className="text-sm font-medium text-gray-700">Informações sobre o curso:</p>
                  <p className="text-base text-gray-600">Mensalidade: {monthlyFee}</p>
                  <p className="text-sm text-gray-600">
                    Duração: {duration} • Total do curso: {totalCost}
                  </p>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <p className="text-sm font-medium text-gray-700">Formas de pagamento aceitas:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {formasPagamento.map((forma) => (
                      <div key={forma.nome} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg text-left">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <forma.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 flex-wrap">
                            <p className="text-xs font-medium">{forma.nome}</p>
                            {forma.badge && (
                              <Badge
                                variant="secondary"
                                className={`text-[10px] px-1 py-0 ${
                                  forma.badgeVariant === "success" ? "bg-green-100 text-green-800" : ""
                                }`}
                              >
                                {forma.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-[10px] text-muted-foreground">{forma.descricao}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full md:w-auto px-12 bg-black hover:bg-gray-800">
                {botaoLabel}
              </Button>

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">Cursos reconhecidos pelo MEC</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">Comunidade com +70 mil alunos</span>
                </div>
              </div>
            </Card>

            <div className="space-y-4 text-gray-600">
              <p className="text-base">Próximas turmas iniciam em {nextClassDate}</p>
              <p className="text-base font-medium">Garanta condições exclusivas até {promotionDeadline}</p>

              <Button onClick={openAssistantForConsultor} variant="link" className="text-black underline">
                Fale com um consultor IPOG
              </Button>

              <p className="text-sm">Parcelamento facilitado disponível após qualificação</p>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Descubra o valor do curso</DialogTitle>
            <DialogDescription>Preencha seus dados para ver as condições especiais de investimento.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="nomeCompleto">Nome completo *</Label>
              <Input
                id="nomeCompleto"
                name="nomeCompleto"
                placeholder="Digite seu nome completo"
                value={formData.nomeCompleto}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Ver valor do curso"}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Ao enviar, você concorda em receber comunicações do IPOG.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
