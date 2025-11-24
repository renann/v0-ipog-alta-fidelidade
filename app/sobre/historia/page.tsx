"use client"

import { HomeHeader } from "@/components/home-header"
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
      <HomeHeader />

      {/* Header Contextual */}
      <section className="w-full py-8 md:py-12 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems
            items={[{ label: "Início", href: "/" }, { label: "Sobre o IPOG", href: "/sobre" }, { label: "História" }]}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            CONECTAMOS CONHECIMENTO AO SUCESSO.
          </h1>
        </div>
      </section>

      {/* Introdução Narrativa */}
      <section className="w-full py-8 md:py-12 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No IPOG, acreditamos que a educação tem o poder de transformar trajetórias. Guiamos cada aluno com
              conhecimento sólido, reflexão crítica e visão estratégica, preparando-os para ir além do esperado.
              Oferecemos mais que aprendizado: fornecemos as ferramentas para que você se torne protagonista da sua
              jornada e alcance novos horizontes.
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
        title="Nossos líderes"
        subtitle="Conheça as pessoas que lideram a transformação educacional no IPOG"
        credenciais={[
          {
            icone: <Award className="w-5 h-5 text-primary" />,
            texto: "+ de 20 anos de solidez",
          },
          {
            icone: <Users className="w-5 h-5 text-primary" />,
            texto: "+ de 300 mil alunos em todo o Brasil",
          },
          {
            icone: <Building2 className="w-5 h-5 text-primary" />,
            texto: "98% de satisfação dos alunos",
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
        title="Os 3 Pilares do IPOG"
        subtitle="Nossos valores fundamentais que guiam cada decisão e ação institucional"
        beneficios={[
          {
            icone: <Target className="w-8 h-8 text-primary" />,
            titulo: "Nosso Propósito",
            subtitulo: "DESENVOLVER PESSOAS PARA IMPACTAR POSITIVAMENTE A SOCIEDADE.",
            itens: [],
          },
          {
            icone: <Eye className="w-8 h-8 text-primary" />,
            titulo: "Nossa Visão",
            subtitulo: "OFERECER UMA EXPERIÊNCIA EDUCACIONAL DE EXCELÊNCIA PARA 1 MILHÃO DE ALUNOS ATÉ 2034.",
            itens: [],
          },
          {
            icone: <Heart className="w-8 h-8 text-primary" />,
            titulo: "Nossos Valores",
            subtitulo: "",
            itens: [
              "VALORIZAMOS AS RELAÇÕES HUMANAS.",
              "COLABORAMOS E COMEMORAMOS.",
              "SOMOS APAIXONADOS PELO ALUNO.",
              "SOMOS COMPROMETIDOS COM O RESULTADO DO NEGÓCIO.",
              "DESAFIAMOS CONSTANTEMENTE O STATUS QUO.",
              "FAZEMOS O QUE É CERTO.",
            ],
          },
        ]}
        corFundo="bg-muted/30"
      />

      {/* Nossa Trajetória */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Uma trajetória de solidez e compromisso</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossa história começou em 2001 com o objetivo de levar ensino superior de qualidade aos profissionais do
              mercado. Hoje, somos referência nacional, com presença em todo o país e mais de 300 mil alunos que
              confiaram em nossa metodologia para construir grandes conquistas.
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
                    <h3 className="font-semibold text-lg mb-2">O Início de um Propósito</h3>
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
                    <h3 className="font-semibold text-lg mb-2">Conquistando o Brasil</h3>
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
                    <h3 className="font-semibold text-lg mb-2">A Revolução Digital</h3>
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
                    <h3 className="font-semibold text-lg mb-2">Marco de 100 mil Vidas Transformadas</h3>
                    <p className="text-sm text-muted-foreground">
                      Alcançamos a marca histórica de 100 mil alunos, consolidando nosso impacto positivo na carreira de
                      profissionais em todo o Brasil.
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
                    <h3 className="font-semibold text-lg mb-2">Referência Nacional em Educação</h3>
                    <p className="text-sm text-muted-foreground">
                      Consolidados como uma das maiores e mais respeitadas instituições de ensino do Brasil, sinônimo de
                      excelência e resultados reais na carreira.
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
