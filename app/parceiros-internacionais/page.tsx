import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Globe, Users, Award } from "lucide-react"
import Footer from "@/components/footer"

export default function ParceirosInternacionaisPage() {
  const breadcrumbItems = [{ label: "Início", href: "/" }, { label: "Parcerias Internacionais" }]

  const programas = [
    {
      pais: "Estados Unidos",
      instituicao: "Harvard University",
      descricao:
        "Lidere em cenários de alta complexidade com o programa de gestão e inovação da universidade mais prestigiada do mundo.",
      beneficios: [
        "Metodologia de ponta aplicada a desafios reais de negócio.",
        "Networking de alto nível com líderes globais.",
        "Certificação com o peso e o reconhecimento de Harvard.",
        "Visão estratégica para impulsionar a transformação em sua empresa.",
      ],
      idealPara:
        "Líderes e executivos C-level que desejam transformar o futuro de seus negócios com uma visão global e inovadora.",
    },
    {
      pais: "Itália",
      instituicao: "Politécnico di Milano",
      descricao:
        "Domine o Design Thinking e a inovação aplicada em uma das escolas de design mais influentes da Europa, aprendendo a criar soluções que geram valor real.",
      beneficios: [
        "Imersão em metodologias europeias de excelência.",
        "Aprendizado prático com professores que são referência no mercado.",
        "Certificação com reconhecimento no mercado europeu.",
        "Desenvolvimento de projetos reais com mentoria especializada.",
      ],
      idealPara:
        "Gestores de produto, designers e líderes de inovação focados em criar experiências de alto valor e impacto no mercado.",
    },
    {
      pais: "Portugal",
      instituicao: "Universidade de Coimbra",
      descricao:
        "Prepare-se para liderar negócios no cenário global com um MBA executivo que une a tradição acadêmica de Coimbra à visão prática do mercado europeu.",
      beneficios: [
        "Flexibilidade do formato híbrido, ideal para a rotina executiva.",
        "Dupla certificação que valida sua competência no Brasil e na Europa.",
        "Acesso estratégico ao networking e às oportunidades do mercado europeu.",
        "Experiência imersiva com módulos presenciais em Portugal.",
      ],
      idealPara:
        "Executivos e empreendedores com visão de expansão, que buscam as ferramentas certas para internacionalizar seus negócios com segurança.",
    },
  ]

  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Title Section */}
        <section className="w-full border-b bg-muted/30 py-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems items={breadcrumbItems} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">
              Conexões Globais para uma Carreira de Destaque
            </h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nossas parcerias com as mais renomadas instituições do mundo são a ponte para o seu sucesso global.
                Tenha acesso a programas executivos que transformam sua visão de mercado, fortalecem suas competências e
                abrem portas para uma carreira sem fronteiras.
              </p>
            </div>
          </div>
        </section>

        {/* Inspiração Global - Accordion Section */}
        <section className="w-full py-16 md:py-20 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Sua Trajetória de Sucesso, Agora em Escala Global
                </h2>
                <p className="text-lg text-muted-foreground">
                  A excelência que transforma carreiras no Brasil, potencializada pelas melhores universidades do mundo.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-semibold">Mobilidade acadêmica</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Programas de intercâmbio e mobilidade acadêmica em universidades parceiras ao redor do mundo,
                    permitindo que alunos vivenciem diferentes culturas e metodologias de ensino.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Intercâmbios profissionais
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Oportunidades de estágio e experiências profissionais em empresas internacionais, desenvolvendo
                    competências globais e ampliando a rede de contatos profissionais.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Parcerias educacionais
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Colaborações estratégicas com instituições de ensino superior de renome mundial, garantindo acesso a
                    conteúdos atualizados e certificações internacionalmente reconhecidas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Programas de curta duração
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Cursos intensivos, workshops e programas executivos de curta duração em universidades parceiras,
                    ideais para profissionais que buscam atualização rápida e focada.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Programas Executivos Internacionais */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Programas Executivos de Alto Impacto
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Desenvolva uma visão estratégica e pratique a inovação em programas exclusivos, desenhados para líderes
                que buscam impacto mensurável e reconhecimento internacional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programas.map((programa, index) => (
                <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {programa.pais}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{programa.instituicao}</CardTitle>
                    <CardDescription className="text-base">{programa.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Benefícios
                      </h4>
                      <ul className="space-y-2">
                        {programa.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4" />
                        Ideal para
                      </h4>
                      <p className="text-sm text-muted-foreground">{programa.idealPara}</p>
                    </div>

                    <Button className="w-full mt-auto">Quero saber mais →</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Apresentação dos Programas - Video Section */}
        <section className="w-full py-16 md:py-20 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                A Experiência que Transforma, Contada por Quem Viveu
              </h2>
              <p className="text-lg text-muted-foreground">
                Assista aos vídeos e descubra como nossos programas internacionais impulsionam carreiras e geram
                resultados concretos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { titulo: "Harvard University", pais: "Estados Unidos" },
                { titulo: "Politécnico di Milano", pais: "Itália" },
                { titulo: "Universidade de Coimbra", pais: "Portugal" },
              ].map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Assista ao depoimento e descubra o impacto do programa.
                      </p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{video.titulo}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      {video.pais}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
