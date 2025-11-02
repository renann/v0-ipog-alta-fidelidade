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
      title: "Aulas Ao Vivo com Conteúdo Autoral",
      description:
        "Conecte-se, debata e aprenda em tempo real com professores de mercado e colegas de todo o país. Uma experiência imersiva que fortalece o aprendizado e o networking, como se estivesse na primeira fila da sala de aula.",
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Laboratórios Virtuais e Simulações Práticas",
      description:
        "Aplique o conhecimento hoje mesmo. Nossos ambientes virtuais permitem que você desenvolva habilidades práticas e resolva desafios reais da sua área, transformando teoria em competência.",
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: "Biblioteca Digital Completa",
      description:
        "Acesse um vasto acervo com os melhores títulos, artigos e materiais de apoio para aprofundar seu aprendizado a qualquer hora, de qualquer lugar, inspirando novas ideias.",
    },
    {
      icon: <School className="h-6 w-6" />,
      title: "Flexibilidade para Aprender Como e Onde Quiser",
      description:
        "Participe das aulas presencialmente em nosso campus ou conecte-se ao vivo de qualquer lugar. Nossa tecnologia híbrida garante que você nunca perca o ritmo, adaptando a experiência de aprendizado à sua necessidade.",
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Uma Estrutura Pensada para o Seu Sucesso
            </h1>
            <div className="mt-2 h-1 w-20 bg-primary" />
          </div>
        </div>
      </section>

      {/* Introdução Institucional */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <p className="mx-auto max-w-[700px] text-center text-lg text-muted-foreground">
            Conheça os pilares que conectam você a uma jornada de aprendizado transformadora. Nossa excelência
            acadêmica, validada por <strong>mais de 20 anos de história</strong>, presença nacional e infraestrutura de
            ponta são os alicerces para o seu protagonismo profissional.
          </p>
        </div>
      </section>

      {/* Como Estamos Organizados */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Organização a Serviço da Sua Jornada</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa organização acadêmica e administrativa é construída para um único objetivo: potencializar sua
              experiência. Desde a curadoria do conteúdo com <strong>professores que são referência no mercado</strong>{" "}
              até o suporte contínuo, cada detalhe é pensado para garantir uma formação sólida e alinhada às suas
              ambições.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Uma Rede Nacional de Oportunidades</h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Mais do que unidades, construímos pontes para o seu futuro em todo o Brasil. Nossa presença nacional
              significa acesso a um <strong>networking valioso</strong> e a um ensino de excelência reconhecido de ponta
              a ponta no país, abrindo portas onde quer que sua carreira o leve.
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Campus Sede: Onde a Inovação Acontece
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nosso campus sede em Goiânia é o epicentro da nossa excelência. Mais do que uma estrutura moderna, é
                aqui que nossos <strong>núcleos de pesquisa e coordenações acadêmicas</strong> atuam como verdadeiros
                motores de inovação.
              </p>
              <p className="text-lg text-muted-foreground">
                São eles que desenvolvem as metodologias de ponta e o conteúdo autoral que diferenciam sua formação,
                garantindo uma experiência de aprendizado que integra teoria e prática e prepara você para os desafios
                reais do mercado.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Nossa Estrutura Digital: Flexibilidade e Excelência Onde Você Estiver
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              O ensino IPOG rompe barreiras físicas para <strong>transformar</strong> sua jornada. Nossa plataforma EAD
              foi desenhada para oferecer uma experiência de aprendizado imersiva e flexível, com{" "}
              <strong>conteúdo autoral e exclusivo</strong> e o <strong>suporte rápido e eficiente</strong> que garantem
              a mesma excelência da nossa formação presencial.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Viva a Experiência IPOG</h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Nada melhor do que ver de perto. Explore nossos espaços e sinta a atmosfera de excelência e inovação
              através da perspectiva dos nossos próprios alunos.
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
