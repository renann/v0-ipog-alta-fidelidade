import { Header } from "@/components/header"
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
      descricao: "Programa executivo de liderança e gestão estratégica com foco em inovação e transformação digital.",
      beneficios: [
        "Conteúdos atualizados e interativos",
        "Tutoria online e suporte contínuo",
        "Certificação reconhecida internacionalmente",
        "Networking global com executivos",
      ],
      idealPara: "Executivos e gestores que buscam aprimorar competências de liderança estratégica",
    },
    {
      pais: "Itália",
      instituicao: "Politécnico di Milano",
      descricao: "Programa de design thinking e inovação aplicada com metodologias europeias de excelência.",
      beneficios: [
        "Metodologias práticas e aplicáveis",
        "Professores internacionais renomados",
        "Certificado europeu reconhecido",
        "Projetos hands-on com empresas",
      ],
      idealPara: "Profissionais de inovação, design e gestão de produtos que desejam experiência internacional",
    },
    {
      pais: "Portugal",
      instituicao: "Universidade de Coimbra",
      descricao: "MBA executivo com foco em gestão internacional e desenvolvimento de negócios globais.",
      beneficios: [
        "Formato híbrido flexível",
        "Dupla certificação Brasil-Portugal",
        "Acesso a mercado europeu",
        "Módulos presenciais em Coimbra",
      ],
      idealPara: "Gestores e empreendedores que buscam expandir atuação para mercados internacionais",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Title Section */}
        <section className="w-full border-b bg-muted/30 py-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems items={breadcrumbItems} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">Parcerias Internacionais</h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                As parcerias internacionais do IPOG conectam alunos e ex-alunos a experiências acadêmicas globais,
                ampliando horizontes e fortalecendo competências com o selo das melhores instituições do mundo.
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
                  Inspirando Vidas — Agora no Exterior
                </h2>
                <p className="text-lg text-muted-foreground">Expandindo a jornada IPOG para o contexto internacional</p>
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
                Programas executivos internacionais
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                O IPOG oferece, por meio de seus parceiros, a oportunidade de participação em programas de formação
                executiva e bolsas de estudo no exterior.
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Veja apresentação dos programas</h2>
              <p className="text-lg text-muted-foreground">
                Conheça mais sobre as universidades parceiras e depoimentos de participantes
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
                      <p className="text-sm text-muted-foreground">Vídeo de apresentação</p>
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
