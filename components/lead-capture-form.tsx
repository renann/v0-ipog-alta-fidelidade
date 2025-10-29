"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, User, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function LeadCaptureForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Lead captured:", formData)

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Um de nossos consultores acadêmicos entrará em contato em breve.",
      duration: 3000,
    })

    setIsSubmitted(true)
    setIsSubmitting(false)

    setTimeout(() => {
      router.back()
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section className="w-full py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Mensagem enviada com sucesso!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Obrigado pelo seu interesse. Um de nossos consultores acadêmicos entrará em contato em breve.
            </p>
            <p className="text-sm text-muted-foreground mb-6">Você será redirecionado em instantes...</p>
            <Button onClick={() => router.back()} variant="outline" size="lg" className="mt-4">
              Voltar
            </Button>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Fale com um Consultor Acadêmico</h1>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo e nossa equipe entrará em contato para ajudá-lo a escolher o melhor curso para
            sua carreira.
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-base font-medium">
                Nome completo
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-base font-medium">
                Telefone
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                E-mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidade" className="text-base font-medium">
                Cidade
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  placeholder="Digite sua cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Falar com um Consultor"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Ao enviar este formulário, você concorda com nossa Política de Privacidade e aceita receber comunicações
              do IPOG.
            </p>
          </form>
        </Card>
      </div>
    </section>
  )
}
