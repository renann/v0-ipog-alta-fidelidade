"use client"

import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight } from "lucide-react"
import Footer from "@/components/footer"

export default function CalendarioAcademicoPage() {
  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Title Section */}
        <section className="w-full bg-white py-8 md:py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Institucional", href: "/sobre" },
                { label: "Calendário Acadêmico", href: "/calendario-academico" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mt-6 mb-4">Calendário Acadêmico</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
              Planeje seu semestre com precisão. Encontre aqui todas as datas e prazos essenciais da sua jornada
              acadêmica no IPOG. Selecione sua modalidade e organize-se para um período de grandes conquistas.
            </p>
          </div>
        </section>

        {/* Tabs + Accordion Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Tabs defaultValue="ead-ao-vivo" className="w-full">
              <TabsList className="w-full md:w-auto grid grid-cols-3 md:flex md:justify-start gap-2 mb-8">
                <TabsTrigger value="ead-ao-vivo" className="text-sm md:text-base">
                  EAD e Ao Vivo
                </TabsTrigger>
                <TabsTrigger value="presencial" className="text-sm md:text-base">
                  Presencial
                </TabsTrigger>
                <TabsTrigger value="geral" className="text-sm md:text-base">
                  Geral
                </TabsTrigger>
              </TabsList>

              {/* EAD e Ao Vivo */}
              <TabsContent value="ead-ao-vivo" className="mt-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="ead-1sem" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Calendário 1º semestre EAD e Ao Vivo
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Confira todas as datas importantes do primeiro semestre para cursos EAD e Ao Vivo, incluindo
                          início das aulas, provas, recessos e eventos institucionais.
                        </p>
                        <Button variant="outline" className="gap-2 bg-transparent" asChild>
                          <a href="#" download>
                            <Download className="h-4 w-4" />
                            Baixar calendário em PDF
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ead-2sem" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Calendário 2º semestre EAD e Ao Vivo
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Confira todas as datas importantes do segundo semestre para cursos EAD e Ao Vivo, incluindo
                          início das aulas, provas, recessos e eventos institucionais.
                        </p>
                        <Button variant="outline" className="gap-2 bg-transparent" asChild>
                          <a href="#" download>
                            <Download className="h-4 w-4" />
                            Baixar calendário em PDF
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Presencial */}
              <TabsContent value="presencial" className="mt-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="presencial-1sem" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Calendário 1º semestre Presencial
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Confira todas as datas importantes do primeiro semestre para cursos Presenciais, incluindo
                          início das aulas, provas, recessos e eventos institucionais.
                        </p>
                        <Button variant="outline" className="gap-2 bg-transparent" asChild>
                          <a href="#" download>
                            <Download className="h-4 w-4" />
                            Baixar calendário em PDF
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="presencial-2sem" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Calendário 2º semestre Presencial
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Confira todas as datas importantes do segundo semestre para cursos Presenciais, incluindo
                          início das aulas, provas, recessos e eventos institucionais.
                        </p>
                        <Button variant="outline" className="gap-2 bg-transparent" asChild>
                          <a href="#" download>
                            <Download className="h-4 w-4" />
                            Baixar calendário em PDF
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Geral */}
              <TabsContent value="geral" className="mt-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="geral-1sem" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Calendário Geral 1º semestre
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Calendário geral do primeiro semestre com datas importantes para todas as modalidades,
                          incluindo eventos institucionais, feriados e recessos.
                        </p>
                        <Button variant="outline" className="gap-2 bg-transparent" asChild>
                          <a href="#" download>
                            <Download className="h-4 w-4" />
                            Baixar calendário em PDF
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="geral-2sem" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Calendário Geral 2º semestre
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Calendário geral do segundo semestre com datas importantes para todas as modalidades,
                          incluindo eventos institucionais, feriados e recessos.
                        </p>
                        <Button variant="outline" className="gap-2 bg-transparent" asChild>
                          <a href="#" download>
                            <Download className="h-4 w-4" />
                            Baixar calendário em PDF
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white rounded-full px-8 gap-2"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).openAssistantForConsultor) {
                  ;(window as any).openAssistantForConsultor()
                }
              }}
            >
              Em caso de dúvidas, fale conosco
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
