"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Info } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export function CtaFinalPsicologia() {
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

  return (
    <>
      <section id="preco" className="w-full py-12 md:py-16 bg-gray-100 scroll-mt-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Esta é a escolha que conecta você ao sucesso.
              </h2>
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
                  <p className="text-lg text-gray-600">Taxa de matrícula</p>
                  <p className="text-5xl md:text-6xl font-bold">R$ 100,00</p>
                  <p className="text-sm text-gray-600">Pagamento único para qualificação</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-left">
                      A matrícula garante sua qualificação e análise de perfil. Após aprovação, nossa equipe comercial
                      entrará em contato para apresentar as condições de mensalidade e formas de pagamento.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <p className="text-sm font-medium text-gray-700">Informações sobre o curso:</p>
                  <p className="text-base text-gray-600">Mensalidade: R$ 499,00</p>
                  <p className="text-sm text-gray-600">Duração: 18 meses • Total do curso: R$ 12.582,00</p>
                </div>
              </div>

              <Button size="lg" className="w-full md:w-auto px-12 bg-black hover:bg-gray-800">
                Pagar matrícula agora
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
              <p className="text-base">Próximas turmas iniciam em Novembro</p>
              <p className="text-base font-medium">Garanta condições exclusivas até 30 de Outubro</p>

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
