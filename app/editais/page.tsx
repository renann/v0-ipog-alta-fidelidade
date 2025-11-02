import { Header } from "@/components/header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { DocumentList } from "@/components/document-list"

export default function EditaisPage() {
  const processoSeletivo = [
    {
      id: "1",
      title: "Edital de Processo Seletivo - Pós-Graduação 2025.1",
      metadata: "PDF · 1,5 MB • Publicado em 15/01/2025",
      downloadUrl: "/editais/processo-seletivo-pos-2025-1.pdf",
    },
    {
      id: "2",
      title: "Edital de Processo Seletivo - Graduação 2025.1",
      metadata: "PDF · 1,3 MB • Publicado em 10/01/2025",
      downloadUrl: "/editais/processo-seletivo-grad-2025-1.pdf",
    },
    {
      id: "3",
      title: "Edital de Transferência Externa - 2025.1",
      metadata: "PDF · 980 KB • Publicado em 08/01/2025",
      downloadUrl: "/editais/transferencia-externa-2025-1.pdf",
    },
    {
      id: "4",
      title: "Edital de Bolsas de Estudo - Primeiro Semestre 2025",
      metadata: "PDF · 1,1 MB • Publicado em 05/01/2025",
      downloadUrl: "/editais/bolsas-estudo-2025-1.pdf",
    },
    {
      id: "5",
      title: "Edital de Processo Seletivo - Pós-Graduação 2024.2",
      metadata: "PDF · 1,4 MB • Publicado em 15/07/2024",
      downloadUrl: "/editais/processo-seletivo-pos-2024-2.pdf",
    },
  ]

  const monitoramento = [
    {
      id: "6",
      title: "Edital de Monitoria - Direito Civil 2025.1",
      metadata: "PDF · 850 KB • Publicado em 20/01/2025",
      downloadUrl: "/editais/monitoria-direito-civil-2025-1.pdf",
    },
    {
      id: "7",
      title: "Edital de Monitoria - Gestão de Projetos 2025.1",
      metadata: "PDF · 920 KB • Publicado em 18/01/2025",
      downloadUrl: "/editais/monitoria-gestao-projetos-2025-1.pdf",
    },
    {
      id: "8",
      title: "Edital de Monitoria - Psicologia Organizacional 2025.1",
      metadata: "PDF · 780 KB • Publicado em 15/01/2025",
      downloadUrl: "/editais/monitoria-psicologia-org-2025-1.pdf",
    },
    {
      id: "9",
      title: "Edital de Monitoria - Engenharia de Software 2024.2",
      metadata: "PDF · 890 KB • Publicado em 20/07/2024",
      downloadUrl: "/editais/monitoria-eng-software-2024-2.pdf",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Title Section */}
        <section className="w-full bg-muted/30 py-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems
              items={[{ label: "Início", href: "/" }, { label: "Institucional", href: "/sobre" }, { label: "Editais" }]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-balance">Editais e Documentos Oficiais</h1>
            <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
              Acesse os documentos essenciais para formalizar sua jornada de sucesso no IPOG. Encontre aqui, de forma
              clara e organizada, todas as informações que você precisa para dar o próximo passo rumo às suas
              conquistas.
            </p>
          </div>
        </section>

        {/* Editais Section */}
        <section className="w-full py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Tabs defaultValue="processo-seletivo" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                <TabsTrigger value="processo-seletivo">Processo Seletivo</TabsTrigger>
                <TabsTrigger value="monitoramento">Monitoramento</TabsTrigger>
              </TabsList>

              <TabsContent value="processo-seletivo" className="mt-0">
                <DocumentList documents={processoSeletivo} />
              </TabsContent>

              <TabsContent value="monitoramento" className="mt-0">
                <DocumentList documents={monitoramento} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <a href="/central-atendimento">
                Precisa de ajuda com algum documento? Fale com nossos especialistas.
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
