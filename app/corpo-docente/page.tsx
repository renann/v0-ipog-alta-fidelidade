"use client"

import { Header } from "@/components/header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"

export default function CorpoDocentePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb Section */}
        <section className="w-full py-4">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Corpo Docente" }]} />
          </div>
        </section>

        {/* Title and Introduction */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Aprenda com quem transforma o mercado
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Mais do que acadêmicos, nosso corpo docente é formado por líderes e especialistas que vivem o que
                ensinam. São mestres e doutores com ampla experiência de mercado, prontos para conectar o conhecimento
                teórico aos desafios reais da sua carreira e impulsionar suas conquistas.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="w-full py-12 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Search by Name */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Buscar por nome</h2>
                  <form action="/sobre/corpo-docente/busca" method="get" className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        name="query"
                        placeholder="Digite o nome do docente"
                        className="pl-10"
                        required
                      />
                    </div>
                    <Button type="submit" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Search by Area */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Buscar por área</h2>
                  <form action="/sobre/corpo-docente/busca" method="get" className="flex gap-2">
                    <Select name="area" required>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Selecione uma área" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psicologia">Psicologia</SelectItem>
                        <SelectItem value="engenharia">Engenharia</SelectItem>
                        <SelectItem value="direito">Direito</SelectItem>
                        <SelectItem value="gestao">Gestão</SelectItem>
                        <SelectItem value="saude">Saúde</SelectItem>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button type="submit" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Support CTA */}
              <div className="text-center pt-4">
                <Button
                  variant="link"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium p-0 h-auto"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).openAssistantForConsultor) {
                      ;(window as any).openAssistantForConsultor()
                    }
                  }}
                >
                  Em caso de dúvidas, fale conosco
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
