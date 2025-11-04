"use client"

import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, FileText, Building2, AlertCircle, ExternalLink } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CentralAtendimentoPage() {
  const serviceChannels = [
    {
      icon: MessageCircle,
      title: "Fale com a Vic",
      description: "A assistente virtual do IPOG",
      action: "Abrir chat",
      onClick: "openAssistantForConsultor",
    },
    {
      icon: Phone,
      title: "Relacionamento",
      description: "Atendimento ao aluno, dúvidas, sugestões e elogios",
      action: "Acessar formulário",
      href: "/contato",
    },
    {
      icon: FileText,
      title: "Requerimentos",
      description: "Acesse o Catálogo de Serviços",
      action: "Ver serviços",
      href: "/catalogo",
    },
    {
      icon: Building2,
      title: "Relacionamento Enterprise",
      description: "Atendimento para empresas e parcerias corporativas",
      action: "Falar com consultor",
      href: "/enterprise/ceo",
    },
    {
      icon: AlertCircle,
      title: "Ouvidoria",
      description: "Reclamações e denúncias",
      action: "Acessar ouvidoria",
      href: "/contato",
    },
  ]

  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb and Title Section */}
        <section className="w-full bg-muted/30 py-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Institucional", href: "/sobre" },
                { label: "Central de Atendimento" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Central de atendimento</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Estamos prontos para ajudar. Escolha o canal que melhor atende à sua necessidade e fale com a equipe IPOG.
            </p>
          </div>
        </section>

        {/* Service Channels Section */}
        <section className="w-full py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid gap-4 md:gap-6">
              {serviceChannels.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                    {channel.onClick ? (
                      <div
                        onClick={() => {
                          if (typeof window !== "undefined" && (window as any).openAssistantForConsultor) {
                            ;(window as any).openAssistantForConsultor()
                          }
                        }}
                        className="block"
                      >
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{channel.title}</CardTitle>
                            <CardDescription className="text-base">{channel.description}</CardDescription>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardHeader>
                      </div>
                    ) : (
                      <Link href={channel.href} className="block">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{channel.title}</CardTitle>
                            <CardDescription className="text-base">{channel.description}</CardDescription>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardHeader>
                      </Link>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Useful Phones Section */}
        <section className="w-full py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Telefones Úteis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Central de Relacionamento</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Atendimento geral, dúvidas sobre cursos e eventos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+556239455050" className="text-2xl font-semibold text-primary hover:underline">
                    (62) 3945-5050
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Ajuda para se matricular</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    De segunda a sexta, das 8h às 18h (exceto feriados).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+5562996600711" className="text-2xl font-semibold text-primary hover:underline">
                    (62) 99660-0711
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).openAssistantForConsultor) {
                  ;(window as any).openAssistantForConsultor()
                }
              }}
            >
              Em caso de dúvidas, fale conosco
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
