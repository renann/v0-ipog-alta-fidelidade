import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { DocumentList } from "@/components/document-list"

export default function DocumentosInstitucionaisPage() {
  const atosRegulatorios = [
    {
      id: "1",
      title: "PORTARIA SERES nº 661, DE 22 SETEMBRO DE 2025 - Reconhecimento Recursos Humanos EaD",
      metadata: "PDF · 1,2 MB • Publicado em 22/09/2025",
      downloadUrl: "/documents/portaria-661-2025.pdf",
    },
    {
      id: "2",
      title: "PORTARIA SERES nº 580, DE 15 AGOSTO DE 2025 - Credenciamento Institucional",
      metadata: "PDF · 850 KB • Publicado em 15/08/2025",
      downloadUrl: "/documents/portaria-580-2025.pdf",
    },
    {
      id: "3",
      title: "RESOLUÇÃO CNE/CES nº 1, DE 6 DE ABRIL DE 2018 - Diretrizes Curriculares Nacionais",
      metadata: "PDF · 2,1 MB • Publicado em 06/04/2018",
      downloadUrl: "/documents/resolucao-cne-ces-1-2018.pdf",
    },
    {
      id: "4",
      title: "PORTARIA NORMATIVA MEC nº 11, DE 20 DE JUNHO DE 2017 - Regulamentação EaD",
      metadata: "PDF · 1,5 MB • Publicado em 20/06/2017",
      downloadUrl: "/documents/portaria-normativa-11-2017.pdf",
    },
    {
      id: "5",
      title: "DECRETO Nº 9.057, DE 25 DE MAIO DE 2017 - Regulamenta o art. 80 da LDB",
      metadata: "PDF · 680 KB • Publicado em 25/05/2017",
      downloadUrl: "/documents/decreto-9057-2017.pdf",
    },
  ]

  const outros = [
    {
      id: "6",
      title: "Regimento Interno IPOG - Atualizado 2025",
      metadata: "PDF · 3,2 MB • Publicado em 10/01/2025",
      downloadUrl: "/documents/regimento-interno-2025.pdf",
    },
    {
      id: "7",
      title: "Plano de Desenvolvimento Institucional (PDI) 2024-2028",
      metadata: "PDF · 5,8 MB • Publicado em 15/12/2024",
      downloadUrl: "/documents/pdi-2024-2028.pdf",
    },
    {
      id: "8",
      title: "Projeto Pedagógico Institucional (PPI)",
      metadata: "PDF · 4,1 MB • Publicado em 20/11/2024",
      downloadUrl: "/documents/ppi-2024.pdf",
    },
    {
      id: "9",
      title: "Política de Avaliação Institucional",
      metadata: "PDF · 1,8 MB • Publicado em 05/10/2024",
      downloadUrl: "/documents/politica-avaliacao.pdf",
    },
  ]

  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Title Section */}
        <section className="w-full bg-muted/30 py-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Institucional", href: "/sobre" },
                { label: "Documentos Institucionais" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-balance">
              Transparência e Credibilidade: Nossos Documentos Institucionais
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
              No IPOG, acreditamos que a confiança é a base para grandes conquistas. Por isso, oferecemos acesso
              completo e transparente aos nossos atos regulatórios e documentos institucionais. Consulte os arquivos
              para confirmar nosso compromisso com a excelência e a solidez que fazem do IPOG a escolha certa para o seu
              futuro.
            </p>
          </div>
        </section>

        {/* Documents Section */}
        <section className="w-full py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Tabs defaultValue="atos-regulatorios" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                <TabsTrigger value="atos-regulatorios">Atos regulatórios</TabsTrigger>
                <TabsTrigger value="outros">Outros</TabsTrigger>
              </TabsList>

              <TabsContent value="atos-regulatorios" className="mt-0">
                <DocumentList documents={atosRegulatorios} />
              </TabsContent>

              <TabsContent value="outros" className="mt-0">
                <DocumentList documents={outros} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <a href="/central-atendimento">
                Não encontrou o que buscava? Nossa equipe está à disposição para ajudar.
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
