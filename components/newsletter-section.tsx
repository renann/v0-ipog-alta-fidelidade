"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

const verticaisOptions = [
  { id: "graduacao", label: "Graduação" },
  { id: "pos-graduacao", label: "Pós-Graduação" },
  { id: "extensao", label: "Extensão" },
  { id: "enterprise", label: "Enterprise (In Company)" },
]

const areasOptions = [
  { id: "negocios", label: "Negócios e Gestão" },
  { id: "tecnologia", label: "Tecnologia e Dados" },
  { id: "saude", label: "Saúde e Bem-estar" },
  { id: "direito", label: "Direito" },
  { id: "engenharia", label: "Engenharia e Arquitetura" },
  { id: "educacao", label: "Educação" },
  { id: "psicologia", label: "Psicologia" },
]

export function NewsletterSection() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedVerticais, setSelectedVerticais] = useState<string[]>([])
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])
  const [isGraduado, setIsGraduado] = useState<string | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !email.trim()) return
    setIsModalOpen(true)
  }

  const handleVerticalToggle = (id: string) => {
    setSelectedVerticais((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))
  }

  const handleAreaToggle = (id: string) => {
    setSelectedAreas((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]))
  }

  const handleFinalSubmit = async (skip = false) => {
    setIsSubmitting(true)

    // Simula envio - aqui você integraria com sua API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const payload = {
      nome,
      email,
      ...(skip
        ? {}
        : {
            verticais: selectedVerticais,
            areas: selectedAreas,
            isGraduado: isGraduado === "sim",
          }),
    }

    console.log("[v0] Newsletter subscription:", payload)

    setIsSubmitting(false)
    setIsModalOpen(false)
    setIsSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setNome("")
      setEmail("")
      setSelectedVerticais([])
      setSelectedAreas([])
      setIsGraduado(undefined)
    }, 3000)
  }

  if (isSuccess) {
    return (
      <section className="w-full bg-zinc-100 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">Inscrição confirmada!</h3>
            <p className="text-zinc-600">
              Você receberá nossas novidades em breve no email <strong>{email}</strong>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="w-full bg-zinc-100 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Texto */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">Receba novidades do IPOG</h3>
              </div>
              <p className="text-zinc-600 text-sm md:text-base">
                Conteúdos exclusivos, novos cursos e oportunidades direto no seu email.
              </p>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="flex-1 max-w-lg">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="flex-1 bg-white border-zinc-300"
                  required
                />
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border-zinc-300"
                  required
                />
                <Button type="submit" className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6">
                  <span className="hidden sm:inline">Inscrever</span>
                  <ArrowRight className="w-4 h-4 sm:ml-2" />
                </Button>
              </div>
              <p className="text-xs text-zinc-500 mt-2">
                Ao se inscrever, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Modal de personalização */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Personalize suas preferências</DialogTitle>
            <DialogDescription>
              Essas informações são opcionais e nos ajudam a enviar conteúdos mais relevantes para você.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Assuntos de Interesse - Verticais */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Quais tipos de formação te interessam?</Label>
              <div className="grid grid-cols-2 gap-2">
                {verticaisOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`vertical-${option.id}`}
                      checked={selectedVerticais.includes(option.id)}
                      onCheckedChange={() => handleVerticalToggle(option.id)}
                    />
                    <Label htmlFor={`vertical-${option.id}`} className="text-sm font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Áreas de Atuação */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Quais áreas te interessam?</Label>
              <div className="grid grid-cols-2 gap-2">
                {areasOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`area-${option.id}`}
                      checked={selectedAreas.includes(option.id)}
                      onCheckedChange={() => handleAreaToggle(option.id)}
                    />
                    <Label htmlFor={`area-${option.id}`} className="text-sm font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Já é graduado */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Você já possui graduação?</Label>
              <RadioGroup value={isGraduado} onValueChange={setIsGraduado} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="graduado-sim" />
                  <Label htmlFor="graduado-sim" className="text-sm font-normal cursor-pointer">
                    Sim
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao" id="graduado-nao" />
                  <Label htmlFor="graduado-nao" className="text-sm font-normal cursor-pointer">
                    Não
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cursando" id="graduado-cursando" />
                  <Label htmlFor="graduado-cursando" className="text-sm font-normal cursor-pointer">
                    Estou cursando
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleFinalSubmit(true)}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Pular e confirmar
            </Button>
            <Button
              type="button"
              onClick={() => handleFinalSubmit(false)}
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800"
            >
              {isSubmitting ? "Enviando..." : "Confirmar inscrição"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
