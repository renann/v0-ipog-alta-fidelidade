"use client"

import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Footer from "@/components/footer"

// Sample data for units by state
const unitsByState = {
  RS: [
    {
      name: "Unidade Porto Alegre",
      category: "PÓS-GRADUAÇÃO",
      phone: "(51) 3222-2222",
      email: "rs@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Porto+Alegre",
    },
  ],
  SC: [
    {
      name: "Unidade Florianópolis",
      category: "PÓS-GRADUAÇÃO",
      phone: "(48) 3333-3333",
      email: "sc@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Florianopolis",
    },
  ],
  PR: [
    {
      name: "Unidade Curitiba",
      category: "PÓS-GRADUAÇÃO",
      phone: "(41) 3444-4444",
      email: "pr@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Curitiba",
    },
  ],
  SP: [
    {
      name: "Unidade São Paulo",
      category: "PÓS-GRADUAÇÃO",
      phone: "(11) 3555-5555",
      email: "sp@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Sao+Paulo",
    },
    {
      name: "Unidade Campinas",
      category: "GRADUAÇÃO",
      phone: "(19) 3666-6666",
      email: "campinas@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Campinas",
    },
  ],
  RJ: [
    {
      name: "Unidade Rio de Janeiro",
      category: "PÓS-GRADUAÇÃO",
      phone: "(21) 3777-7777",
      email: "rj@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Rio+de+Janeiro",
    },
  ],
  GO: [
    {
      name: "Unidade Goiânia - Sede",
      category: "PÓS-GRADUAÇÃO",
      phone: "(62) 3888-8888",
      email: "go@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Goiania",
    },
    {
      name: "Unidade Goiânia - Campus 2",
      category: "GRADUAÇÃO",
      phone: "(62) 3999-9999",
      email: "goiania2@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Goiania+Campus+2",
    },
    {
      name: "Unidade Goiânia - Extensão",
      category: "EXTENSÃO",
      phone: "(62) 3000-0000",
      email: "extensao.go@ipog.edu.br",
      mapsUrl: "https://maps.google.com/?q=IPOG+Goiania+Extensao",
    },
  ],
}

export default function UnidadesPage() {
  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Title Section */}
        <section className="w-full py-8 border-b">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Unidades IPOG" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 text-balance">
              Conecte-se ao sucesso em todo o Brasil: encontre sua unidade IPOG
            </h1>
            <p className="text-lg text-muted-foreground mt-4 text-balance">
              Conecte-se a uma rede de conhecimento e oportunidades que transforma carreiras em todo o Brasil.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-balance">
              Conectamos conhecimento ao sucesso. Em todo o Brasil.
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-[900px] mx-auto text-balance">
              Com mais de 20 anos de história, construímos uma presença sólida que nos tornou referência nacional, com
              um índice de satisfação de 98% entre nossos alunos. Cada uma de nossas unidades é um centro de excelência,
              onde você tem acesso à nossa metodologia inovadora, a um corpo docente formado por referências de mercado
              e a uma rede de contatos que impulsiona sua trajetória. Oferecemos a mesma qualidade e o compromisso com
              resultados que fazem do IPOG a melhor escolha para o seu futuro, onde quer que você esteja.
            </p>
          </div>
        </section>

        {/* State Selector + Units Section */}
        <section className="w-full py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Tabs defaultValue="RS" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto flex-nowrap mb-8">
                <TabsTrigger value="RS">RS</TabsTrigger>
                <TabsTrigger value="SC">SC</TabsTrigger>
                <TabsTrigger value="PR">PR</TabsTrigger>
                <TabsTrigger value="SP">SP</TabsTrigger>
                <TabsTrigger value="RJ">RJ</TabsTrigger>
                <TabsTrigger value="GO">GO</TabsTrigger>
              </TabsList>

              {Object.entries(unitsByState).map(([state, units]) => (
                <TabsContent key={state} value={state} className="space-y-6">
                  {units.map((unit, index) => (
                    <Card key={index} className="shadow-sm">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2">
                            <Badge variant="secondary" className="text-xs font-semibold">
                              {unit.category}
                            </Badge>
                            <CardTitle className="text-2xl">IPOG {unit.name.replace("Unidade ", "")}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          {/* Phone */}
                          <div className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Telefone</p>
                              <a
                                href={`tel:${unit.phone.replace(/\D/g, "")}`}
                                className="text-base hover:text-primary transition-colors"
                              >
                                {unit.phone}
                              </a>
                            </div>
                          </div>

                          {/* Email */}
                          <div className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">E-mail</p>
                              <a
                                href={`mailto:${unit.email}`}
                                className="text-base hover:text-primary transition-colors"
                              >
                                {unit.email}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Maps Button */}
                        <div className="pt-2 border-t">
                          <Button variant="outline" className="w-full md:w-auto bg-transparent" asChild>
                            <a href={unit.mapsUrl} target="_blank" rel="noopener noreferrer">
                              <MapPin className="h-4 w-4 mr-2" />
                              Ver no Maps
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
