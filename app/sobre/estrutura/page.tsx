"use client"

import { Header } from "@/components/header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import { Building2, Headphones, FlaskConical, Library, School, MapPin, Play } from "lucide-react"

export default function EstruturaPage() {
  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Sobre o IPOG", href: "/sobre" },
    { label: "Estrutura IPOG" },
  ]

  const organizationalStructure = [
    {
      title: "Direção Acadêmica",
      description:
        "Responsável pela definição de diretrizes pedagógicas, qualidade dos cursos e inovação educacional em todas as modalidades oferecidas pelo IPOG.",
    },
    {
      title: "Coordenação de Pós-Graduação",
      description:
        "Gerencia os programas de pós-graduação lato sensu, garantindo excelência acadêmica, atualização curricular e alinhamento com as demandas do mercado.",
    },
    {
      title: "Núcleo de Educação a Distância (EAD)",
      description:
        "Desenvolve e implementa soluções tecnológicas para ensino online, incluindo plataformas digitais, conteúdos interativos e suporte técnico aos alunos.",
    },
    {
      title: "Coordenação de Graduação",
      description:
        "Supervisiona os cursos de graduação, assegurando conformidade com diretrizes do MEC e promovendo experiências de aprendizado transformadoras.",
    },
    {
      title: "Núcleo de Extensão",
      description:
        "Oferece cursos de curta duração, workshops e programas de atualização profissional para desenvolvimento contínuo de competências.",
    },
    {
      title: "Gestão de Pessoas e Cultura",
      description:
        "Cuida do desenvolvimento dos colaboradores, clima organizacional e fortalecimento da cultura institucional baseada em valores e propósito.",
    },
  ]

  const nationalPresence = [
    {
      city: "São Paulo",
      state: "SP",
      description: "Centro de Educação Executiva e Pós-Graduação",
    },
    {
      city: "Rio de Janeiro",
      state: "RJ",
      description: "Polo Regional de Pós-Graduação",
    },
    {
      city: "Brasília",
      state: "DF",
      description: "Centro de Educação Continuada",
    },
    {
      city: "Belo Horizonte",
      state: "MG",
      description: "Polo Regional de Pós-Graduação",
    },
    {
      city: "Goiânia",
      state: "GO",
      description: "Campus Sede e Centro Administrativo",
    },
    {
      city: "Salvador",
      state: "BA",
      description: "Polo Regional de Pós-Graduação",
    },
  ]

  const eadBenefits = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Auditórios Interativos",
      description: "Salas virtuais com transmissão ao vivo e interação em tempo real com professores e colegas.",
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Laboratórios Virtuais",
      description: "Simulações práticas e ambientes de experimentação para aplicação de conhecimentos.",
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: "Biblioteca Online",
      description: "Acervo digital com milhares de títulos, artigos científicos e materiais complementares.",
    },
    {
      icon: <School className="h-6 w-6" />,
      title: "Salas de Aula Híbridas",
      description: "Flexibilidade para participar presencialmente ou online, conforme sua necessidade.",
    },
  ]

  const studentTours = [
    {
      title: "Tour pelo Campus Goiânia",
      thumbnail: "/placeholder.svg?height=300&width=500",
      videoUrl: "#",
    },
    {
      title: "Biblioteca e Espaços de Estudo",
      thumbnail: "/placeholder.svg?height=300&width=500",
      videoUrl: "#",
    },
    {
      title: "Laboratórios e Salas de Aula",
      thumbnail: "/placeholder.svg?height=300&width=500",
      videoUrl: "#",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Header Contextual */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <BreadcrumbWithItems items={breadcrumbItems} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Nossa Estrutura</h1>
            <div className="mt-2 h-1 w-20 bg-primary" />
          </div>
        </div>
      </section>

      {/* Introdução Institucional */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <p className="mx-auto max-w-[700px] text-center text-lg text-muted-foreground">
            O IPOG se estrutura com excelência acadêmica, presença nacional e infraestrutura moderna para garantir
            experiências de aprendizado de alto impacto.
          </p>
        </div>
      </section>

      {/* Como Estamos Organizados */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Como estamos organizados</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa estrutura organizacional é desenhada para garantir excelência em todas as dimensões da experiência
              educacional.
            </p>
            <Accordion type="single" collapsible defaultValue="item-0">
              {organizationalStructure.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-8">{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Presença Nacional */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Presença nacional</h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Estamos presentes nas principais capitais do Brasil, levando educação de qualidade para todo o país.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nationalPresence.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {location.city} - {location.state}
                      </h3>
                      <p className="text-sm text-muted-foreground">{location.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Goiânia */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Campus Goiânia – GO</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nosso campus sede em Goiânia é o coração administrativo e acadêmico do IPOG. Com infraestrutura moderna,
                auditórios equipados, biblioteca física e digital, e espaços de convivência projetados para estimular a
                colaboração e o networking.
              </p>
              <p className="text-lg text-muted-foreground">
                O campus também abriga nossos núcleos de pesquisa, coordenações acadêmicas e serve como centro de
                inovação educacional, desenvolvendo metodologias e tecnologias que são replicadas em todas as nossas
                unidades.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Campus Goiânia"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do EAD IPOG */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Benefícios do EAD IPOG</h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Nossa infraestrutura digital oferece recursos avançados para uma experiência de aprendizado completa e
              flexível.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {eadBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-background border">
                <div className="rounded-full bg-primary/10 p-3 text-primary">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Guiados pelos Alunos */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Veja alguns tours guiados pelos alunos IPOG
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Conheça nossa infraestrutura através dos olhos de quem vive o dia a dia do IPOG.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studentTours.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-[200px]">
                  <img
                    src={tour.thumbnail || "/placeholder.svg"}
                    alt={tour.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 p-4 group-hover:bg-white transition-colors">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{tour.title}</h3>
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
