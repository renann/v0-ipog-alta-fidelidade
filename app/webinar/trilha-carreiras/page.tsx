"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  Play,
  Target,
  TrendingUp,
  Award,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function WebinarTrilhaCarreirasPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("[v0] Webinar lead captured:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const speakers = [
    {
      name: "Dr. Ricardo Oliveira",
      role: "Diretor Acadêmico IPOG",
      description: "Especialista em desenvolvimento de carreiras com mais de 20 anos de experiência",
    },
    {
      name: "Profa. Ana Carolina Santos",
      role: "Coordenadora de Pós-Graduação",
      description: "Mentora de mais de 5.000 profissionais em transição de carreira",
    },
  ]

  const topics = [
    {
      icon: Target,
      title: "Autoconhecimento profissional",
      description: "Descubra suas fortalezas e como utilizá-las estrategicamente",
    },
    {
      icon: TrendingUp,
      title: "Tendências do mercado",
      description: "Entenda as profissões em alta e as habilidades mais valorizadas",
    },
    {
      icon: Lightbulb,
      title: "Planejamento estratégico",
      description: "Monte um plano de ação para alcançar seus objetivos profissionais",
    },
    {
      icon: Award,
      title: "Diferenciação competitiva",
      description: "Saiba como se destacar em um mercado cada vez mais competitivo",
    },
  ]

  const benefits = [
    "Certificado de participação",
    "Material complementar exclusivo",
    "Acesso à gravação por 7 dias",
    "Sessão de perguntas ao vivo",
    "E-book: Guia de Planejamento de Carreira",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header simplificado */}
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Logo className="h-8" />
          </Link>
          <span className="text-sm text-muted-foreground hidden sm:block">Webinar Gratuito</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-background">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-background/20 bg-background/10 text-sm mb-6">
                <Play className="w-4 h-4" />
                <span>Webinar Gratuito e Online</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Trilha de Carreiras com o IPOG
              </h1>

              <p className="text-xl md:text-2xl text-background/80 mb-8 leading-relaxed">
                Descubra como planejar e acelerar sua trajetória profissional com estratégias comprovadas por milhares
                de alunos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 text-background/90">
                  <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">Data</p>
                    <p className="font-semibold">15 de Dezembro, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-background/90">
                  <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">Horário</p>
                    <p className="font-semibold">19h00 (Brasília)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-background/70">
                <Users className="w-5 h-5" />
                <span>+2.500 inscritos</span>
              </div>
            </div>

            {/* Form */}
            <div>
              {isSubmitted ? (
                <Card className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Inscrição confirmada!</h2>
                  <p className="text-muted-foreground mb-6">
                    Enviamos um e-mail de confirmação para <strong>{formData.email}</strong> com todas as informações do
                    webinar.
                  </p>
                  <div className="p-4 bg-muted rounded-lg text-left">
                    <p className="text-sm font-medium mb-2">Próximos passos:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>1. Verifique sua caixa de entrada</li>
                      <li>2. Adicione o evento ao seu calendário</li>
                      <li>3. Prepare suas perguntas</li>
                    </ul>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Garanta sua vaga gratuita</h2>
                    <p className="text-muted-foreground">Vagas limitadas para a sessão ao vivo</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          placeholder="Seu nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="pl-10 h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
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
                      <Label htmlFor="telefone">WhatsApp</Label>
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

                    <Button type="submit" size="lg" className="w-full text-base h-14" disabled={isSubmitting}>
                      {isSubmitting ? "Processando..." : "Quero participar gratuitamente"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Ao se inscrever, você concorda com nossa Política de Privacidade.
                    </p>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que você vai aprender</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conteúdo prático e direto ao ponto para transformar sua carreira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
                  <topic.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground text-sm">{topic.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Palestrantes */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem vai apresentar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especialistas com vasta experiência em desenvolvimento de carreiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {speakers.map((speaker, index) => (
              <Card key={index} className="p-6 flex gap-4">
                <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-foreground/50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{speaker.role}</p>
                  <p className="text-sm text-muted-foreground">{speaker.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Além do conteúdo, você recebe</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-background" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-8 text-center bg-foreground text-background">
                <p className="text-lg mb-2">Evento 100% online e gratuito</p>
                <p className="text-5xl font-bold mb-4">15/12</p>
                <p className="text-xl mb-6">às 19h00 (Brasília)</p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Garantir minha vaga
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Não perca essa oportunidade</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que estão transformando suas carreiras com o IPOG
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Inscrever-se agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer simplificado */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo className="h-6" />
            <p className="text-sm text-muted-foreground text-center">
              © 2025 IPOG - Instituto de Pós-Graduação e Graduação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
