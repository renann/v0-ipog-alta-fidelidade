"use client"

import { Header } from "@/components/header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Autoridade } from "@/components/autoridade"
import { Beneficios } from "@/components/beneficios"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import { Award, Target, Eye, Heart, Users, Building2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HistoriaPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen">
      <Header />

      {/* Header Contextual */}
      <section className="w-full py-8 md:py-12 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems
            items={[{ label: "Início", href: "/" }, { label: "Sobre o IPOG", href: "/sobre" }, { label: "História" }]}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">IPOG Inspirando vidas</h1>
        </div>
      </section>

      {/* Introdução Narrativa */}
      <section className="w-full py-8 md:py-12 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Desde 2001, o IPOG tem como propósito transformar vidas por meio da educação de excelência. Nossa história
              é construída com base em valores sólidos, compromisso com a inovação e dedicação ao desenvolvimento de
              profissionais que fazem a diferença no mercado e na sociedade.
            </p>
          </div>
        </div>
      </section>

      {/* Navegação Interna (Tabs) */}
      <section className="w-full py-6 bg-background border-b">
        <div className="max-w-screen-xl mx-auto px-4">
          <Tabs value="historia" className="w-full">
            <TabsList className="w-full md:w-auto mx-auto grid grid-cols-3 md:inline-flex">
              <TabsTrigger value="historia" onClick={() => router.push("/sobre/historia")}>
                História
              </TabsTrigger>
              <TabsTrigger value="governanca" onClick={() => router.push("/sobre/governanca")}>
                Governança
              </TabsTrigger>
              <TabsTrigger value="faq" onClick={() => router.push("/sobre/faq")}>
                FAQ
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Nossos Líderes */}
      <Autoridade
        titulo="Nossos líderes"
        subtitulo="Conheça as pessoas que lideram a transformação educacional no IPOG"
        credenciais={[
          {
            icone: <Award className="w-5 h-5 text-primary" />,
            texto: "Mais de 20 anos de experiência",
          },
          {
            icone: <Users className="w-5 h-5 text-primary" />,
            texto: "Equipe multidisciplinar",
          },
          {
            icone: <Building2 className="w-5 h-5 text-primary" />,
            texto: "Presença nacional",
          },
        ]}
        professores={[
          {
            nome: "Leonardo José de Oliveira",
            area: "Reitor do IPOG",
            bio: "Líder visionário com mais de 20 anos de experiência em educação executiva e gestão institucional.",
          },
          {
            nome: "Maria Silva Santos",
            area: "Diretora Acadêmica",
            bio: "Especialista em metodologias ativas e inovação pedagógica, com foco em transformação digital.",
          },
          {
            nome: "Carlos Eduardo Mendes",
            area: "Diretor de Operações",
            bio: "Gestor estratégico com expertise em expansão institucional e excelência operacional.",
          },
          {
            nome: "Ana Paula Rodrigues",
            area: "Diretora de Relacionamento",
            bio: "Profissional dedicada à experiência do aluno e construção de relacionamentos duradouros.",
          },
        ]}
        tituloProfessores="Liderança executiva"
        backgroundColor="bg-background"
      />

      {/* Os 3 Pilares do IPOG */}
      <Beneficios
        titulo="Os 3 Pilares do IPOG"
        subtitulo="Nossos valores fundamentais que guiam cada decisão e ação institucional"
        beneficios={[
          {
            icone: <Target className="w-8 h-8 text-primary" />,
            titulo: "Propósito",
            subtitulo: "Nossa razão de existir",
            itens: [
              "Transformar vidas por meio da educação",
              "Formar profissionais de excelência",
              "Contribuir para o desenvolvimento da sociedade",
              "Inspirar mudanças positivas no mercado",
            ],
          },
          {
            icone: <Eye className="w-8 h-8 text-primary" />,
            titulo: "Visão",
            subtitulo: "Onde queremos chegar",
            itens: [
              "Ser referência nacional em pós-graduação",
              "Liderar a inovação educacional",
              "Expandir o acesso à educação de qualidade",
              "Construir uma comunidade de aprendizado contínuo",
            ],
          },
          {
            icone: <Heart className="w-8 h-8 text-primary" />,
            titulo: "Valores",
            subtitulo: "O que nos move",
            itens: [
              "Excelência acadêmica e pedagógica",
              "Ética e transparência em todas as relações",
              "Inovação constante e adaptação ao mercado",
              "Compromisso com o sucesso dos alunos",
            ],
          },
        ]}
        corFundo="bg-muted/30"
      />

      {/* Nossa Trajetória */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa trajetória</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mais de duas décadas construindo uma história de excelência, inovação e transformação na educação
              executiva brasileira.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2001</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fundação</h3>
                    <p className="text-sm text-muted-foreground">
                      Início das atividades do IPOG em Goiânia, com foco em formação executiva e pós-graduação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2008</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expansão Nacional</h3>
                    <p className="text-sm text-muted-foreground">
                      Abertura de novas unidades em diferentes estados, consolidando presença nacional.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2015</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Inovação Digital</h3>
                    <p className="text-sm text-muted-foreground">
                      Lançamento de plataforma EAD e metodologias híbridas de ensino.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2018</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">100 Mil Alunos</h3>
                    <p className="text-sm text-muted-foreground">
                      Marca histórica de 100 mil alunos formados em todo o Brasil.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2021</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reconhecimento MEC</h3>
                    <p className="text-sm text-muted-foreground">
                      Nota máxima em avaliações do MEC, consolidando excelência acadêmica.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2024</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Líder em Pós-Graduação</h3>
                    <p className="text-sm text-muted-foreground">
                      Reconhecido como uma das maiores instituições de pós-graduação do país.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
