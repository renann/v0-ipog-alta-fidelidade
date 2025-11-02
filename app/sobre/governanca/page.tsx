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
      title: "Conselho Diretor",
      description:
        "Define a visão de futuro e as diretrizes estratégicas que garantem a solidez e o crescimento do IPOG em todo o país.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Conselho Acadêmico",
      description:
        "Zela pela excelência do nosso ensino, garantindo que nossa matriz curricular seja um reflexo direto das práticas mais atuais e exigidas pelo mercado, conectando cada aluno ao sucesso profissional.",
    },
  ]

  const valores = [
    "Transparência e Ética: Fazemos o que é certo. Nossos processos e decisões são claros e abertos, construindo relações de confiança com alunos, colaboradores e parceiros.",
    "Compromisso com Resultados: Somos apaixonados pelo sucesso dos nossos alunos e comprometidos com o resultado do negócio, garantindo uma gestão eficiente que gera valor para toda a sociedade.",
    "Excelência e Inovação: Desafiamos constantemente o status quo para oferecer uma experiência educacional de vanguarda, unindo qualidade reconhecida e metodologias que transformam carreiras.",
  ]

  const politicas = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Política de Privacidade e LGPD",
      description:
        "Garantimos a proteção e o uso responsável dos dados pessoais, em total conformidade com a legislação vigente.",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Código de Conduta e Ética",
      description:
        "Estabelece as diretrizes que orientam nossas relações, reforçando uma cultura de respeito, integridade e colaboração.",
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
              Governança Estratégica: O Alicerce para um Futuro de Impacto
            </h1>
            <p className="text-lg text-muted-foreground">
              Nossa governança é a garantia de que cada decisão, do planejamento acadêmico à gestão corporativa, é
              guiada por um propósito claro: <strong>desenvolver líderes que impactam positivamente a sociedade</strong>
              . Atuamos com integridade e visão de futuro, construindo uma instituição sólida que transforma
              conhecimento em conquistas reais.
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
              Estrutura e Responsabilidade: Decisões que Constroem o Futuro
            </h2>
            <p className="text-lg text-muted-foreground">
              Para garantir uma jornada educacional de excelência e o crescimento sustentável do IPOG, nossa estrutura é
              composta por conselhos que unem visão estratégica e rigor acadêmico,{" "}
              <strong>
                formados por líderes de mercado e pelos mesmos docentes de excelência que guiam nossos alunos em sala de
                aula.
              </strong>{" "}
              Essa organização assegura que nossos valores sejam a base de cada ação, promovendo um ambiente de
              confiança e resultados.
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
                  <h3 className="text-xl font-bold mb-3">{orgao.title}</h3>
                  <p className="text-muted-foreground">{orgao.description}</p>
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
              Gestão Guiada por Valores que Inspiram Conquistas
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Políticas e Integridade</h2>
            <p className="text-lg text-muted-foreground">
              Nosso compromisso com a integridade se reflete em políticas institucionais robustas e acessíveis. Elas
              garantem a conformidade legal, a segurança dos dados e um ambiente ético e respeitoso para toda a nossa
              comunidade acadêmica.
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
                  <h3 className="text-xl font-bold mb-3">{politica.title}</h3>
                  <p className="text-muted-foreground">{politica.description}</p>
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
