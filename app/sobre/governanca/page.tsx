"use client"

import { Header } from "@/components/header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, FileText, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import Footer from "@/components/footer"

export default function GovernancaPage() {
  const router = useRouter()

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Sobre o IPOG", href: "/sobre" },
    { label: "Governança", href: "/sobre/governanca" },
  ]

  const orgaosGovernanca = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      titulo: "Conselho Diretor",
      descricao: "Responsável pelas decisões estratégicas e direcionamento institucional do IPOG",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      titulo: "Conselho Acadêmico",
      descricao: "Garante a excelência pedagógica e a qualidade dos programas educacionais",
    },
  ]

  const valores = [
    "Transparência em todas as decisões e processos institucionais",
    "Ética como fundamento de todas as relações e práticas",
    "Responsabilidade social e compromisso com a educação de qualidade",
    "Excelência na gestão e governança corporativa",
  ]

  const politicas = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      titulo: "Política de Privacidade e LGPD",
      descricao: "Compromisso com a proteção de dados pessoais e conformidade com a legislação vigente",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      titulo: "Código de Conduta e Ética",
      descricao: "Diretrizes que orientam o comportamento e as relações em toda a instituição",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Header Contextual */}
      <section className="w-full py-8 md:py-12 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <BreadcrumbWithItems items={breadcrumbItems} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Governança com propósito e transparência
            </h1>
            <p className="text-lg text-muted-foreground">
              A governança do IPOG reflete nosso compromisso com a ética, a responsabilidade e a excelência em todas as
              dimensões da gestão educacional.
            </p>
          </div>
        </div>
      </section>

      {/* Navegação Interna - Tabs */}
      <section className="w-full py-6 bg-muted/30 border-b">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center">
            <Tabs value="governanca" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="historia" onClick={() => router.push("/sobre/historia")}>
                  História
                </TabsTrigger>
                <TabsTrigger value="governanca">Governança</TabsTrigger>
                <TabsTrigger value="faq" onClick={() => router.push("/sobre/faq")}>
                  FAQ
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold">Conheça mais</h2>
          </div>
        </div>
      </section>

      {/* Organização Sólida */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Organização sólida para decisões sustentáveis
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossa estrutura de governança é composta por órgãos colegiados que asseguram decisões estratégicas
              alinhadas aos nossos valores e objetivos institucionais, promovendo transparência e responsabilidade em
              todas as ações.
            </p>
          </div>

          {/* Órgãos de Governança */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {orgaosGovernanca.map((orgao, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">{orgao.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{orgao.titulo}</h3>
                  <p className="text-muted-foreground">{orgao.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gestão Guiada por Valores */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              Gestão guiada por valores que inspiram confiança
            </h2>
            <div className="space-y-4">
              {valores.map((valor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance e Transparência */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Compliance e Transparência</h2>
            <p className="text-lg text-muted-foreground">
              Mantemos políticas claras e acessíveis que orientam nossas práticas institucionais, garantindo
              conformidade legal, proteção de dados e conduta ética em todas as relações com alunos, colaboradores e
              parceiros.
            </p>
          </div>

          {/* Políticas */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {politicas.map((politica, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                      {politica.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{politica.titulo}</h3>
                  <p className="text-muted-foreground">{politica.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
