"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { Trilha } from "@/components/trilha"
import { Modalidades } from "@/components/modalidades"
import { Beneficios } from "@/components/beneficios"
import { Empregabilidade } from "@/components/empregabilidade"
import { DepoimentosDeTexto } from "@/components/depoimentos-de-texto"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import {
  Target,
  TrendingDown,
  BarChart3,
  Lightbulb,
  Users,
  Award,
  Building2,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  TrendingUp,
} from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function CeoPage() {
  const router = useRouter()
  const [, setShowAssistant] = useState(false)

  const openAssistantWithFlow = (flow: string) => {
    console.log("[v0] Opening assistant with flow:", flow)
    setShowAssistant(true)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BreadcrumbWithItems
          items={[{ label: "Início", href: "/" }, { label: "Enterprise", href: "/enterprise" }, { label: "CEO" }]}
        />
        <Hero
          badge="SOLUÇÕES ENTERPRISE"
          title="Educação corporativa estratégica que transforma aprendizado em performance"
          description="Soluções empresariais customizadas que fortalecem cultura, desenvolvem lideranças e comprovam resultados mensuráveis"
          valueBadges={[
            { icon: <Target className="w-5 h-5" />, text: "ROI Comprovado" },
            { icon: <Users className="w-5 h-5" />, text: "Cultura Organizacional" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "Performance Executiva" },
          ]}
          primaryCTA={{
            text: "Solicitar diagnóstico corporativo",
            onClick: () => openAssistantWithFlow("consultor"),
          }}
          secondaryCTA={{
            text: "Conheça o método 6DS",
            onClick: () => router.push("/enterprise#metodo-6ds"),
          }}
          minHeight="600px"
        />

        {/* Dilema do CEO */}
        <Dilema
          titulo="O desafio das organizações: ROI da educação corporativa"
          subtitulo="A velocidade do mercado exige líderes preparados e equipes alinhadas — mas o ROI da educação corporativa ainda é difícil de comprovar"
          dores={[
            {
              icon: <TrendingDown className="w-6 h-6" />,
              titulo: "Programas genéricos e desconectados",
              descricao: "Investimentos em treinamentos que não se conectam com os desafios reais do negócio",
              solucao: "Customização estratégica alinhada aos objetivos corporativos e cultura organizacional",
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              titulo: "Baixo engajamento de líderes",
              descricao: "Dificuldade em manter lideranças engajadas em programas de desenvolvimento contínuo",
              solucao: "Metodologia 6DS com acompanhamento executivo e aplicação prática imediata",
            },
            {
              icon: <Target className="w-6 h-6" />,
              titulo: "Falta de indicadores de performance",
              descricao: "Impossibilidade de mensurar o impacto real dos investimentos em educação corporativa",
              solucao: "Mensuração contínua com relatórios executivos e KPIs de performance organizacional",
            },
          ]}
          imagemUrl="/placeholder.svg?height=500&width=800"
        />

        {/* Método IPOG Enterprise - 6DS */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Curadoria 6DS + Chancela IPOG = Impacto comprovado
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Metodologia proprietária que conecta aprendizado e mensuração com resultados tangíveis
              </p>
            </div>

            <Trilha
              title="Jornada de Transformação Estratégica"
              subtitle=""
              etapas={[
                {
                  numero: "1",
                  titulo: "Diagnóstico Personalizado",
                  descricao:
                    "Análise profunda das competências organizacionais, gaps de liderança e alinhamento com objetivos estratégicos",
                },
                {
                  numero: "2",
                  titulo: "Desenho Sob Medida",
                  descricao:
                    "Programas customizados (MBA Executivo, PDL, Pós Executiva) desenhados especificamente para os desafios da sua organização",
                },
                {
                  numero: "3",
                  titulo: "Desenvolvimento Estratégico",
                  descricao:
                    "Corpo docente de mercado com experiência executiva, cases reais e aplicação prática imediata",
                },
                {
                  numero: "4",
                  titulo: "Mensuração Contínua",
                  descricao:
                    "Relatórios executivos com KPIs de performance, ROI comprovado e acompanhamento de aplicação prática",
                },
              ]}
              textoBotao="Solicitar diagnóstico estratégico"
              onClickBotao={() => openAssistantWithFlow("consultor")}
            />
          </div>
        </section>

        {/* Soluções Corporativas */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Escolha a solução que alinha desenvolvimento à estratégia da empresa
              </h2>
            </div>

            <Modalidades
              titulo="Soluções corporativas com impacto estratégico"
              subtitulo="Programas customizados para diferentes necessidades de desenvolvimento organizacional"
              modalidades={[
                {
                  badge: "MBA EXECUTIVO",
                  titulo: "Desenvolvimento Estratégico de Lideranças Seniores",
                  descricao: "Formação executiva completa para tomadores de decisão e lideranças C-Level",
                  beneficios: [
                    "Visão estratégica de negócios",
                    "Networking executivo qualificado",
                    "Cases corporativos reais",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Solicitar diagnóstico",
                },
                {
                  badge: "PDL CORPORATIVO",
                  titulo: "Programa de Desenvolvimento de Lideranças Customizado",
                  descricao: "Desenvolvimento de competências críticas alinhadas à cultura e estratégia organizacional",
                  beneficios: [
                    "100% customizado para sua empresa",
                    "Foco em competências críticas",
                    "Acompanhamento de performance",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Conhecer PDL",
                },
                {
                  badge: "PÓS EXECUTIVA",
                  titulo: "Especialização Estratégica para Tomadores de Decisão",
                  descricao: "Aprofundamento em áreas estratégicas com foco em resultados e performance organizacional",
                  beneficios: ["Especialização estratégica", "Professores de mercado", "Metodologia aplicada"],
                  link: "/enterprise#solucoes",
                  buttonText: "Ver especializações",
                },
              ]}
            />
          </div>
        </section>

        {/* Modalidades com Impacto Estratégico */}
        <Beneficios
          titulo="Formatos que fortalecem cultura e comprovam resultados"
          subtitulo="Escolha a modalidade que melhor se adapta à estratégia e cultura da sua organização"
          corFundo="bg-muted/30"
          beneficios={[
            {
              icone: <Building2 className="w-8 h-8" />,
              titulo: "Presencial Executivo",
              subtitulo: "Vivência estratégica e networking C-Level",
              itens: [
                "Imersão executiva presencial",
                "Networking qualificado C-Level",
                "Laboratórios de estratégia",
                "Cases corporativos ao vivo",
              ],
            },
            {
              icone: <Lightbulb className="w-8 h-8" />,
              titulo: "Híbrido Corporativo",
              subtitulo: "Flexibilidade com impacto presencial",
              itens: [
                "Encontros presenciais estratégicos",
                "Conteúdo online sob demanda",
                "Flexibilidade para lideranças",
                "Networking híbrido",
              ],
            },
            {
              icone: <GraduationCap className="w-8 h-8" />,
              titulo: "EAD Estratégico",
              subtitulo: "Escalabilidade com acompanhamento executivo",
              itens: [
                "Escalabilidade nacional",
                "Custo-benefício otimizado",
                "Acompanhamento executivo online",
                "Relatórios de performance",
              ],
            },
          ]}
        />

        {/* Resultados Estratégicos Comprovados */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Empresas que escolheram o IPOG Enterprise reportaram ganhos reais de performance
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Resultados mensuráveis que comprovam o impacto estratégico da educação corporativa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">+70%</div>
                <p className="text-lg font-semibold mb-2">Retenção de talentos pós-programa</p>
                <p className="text-sm text-muted-foreground">
                  Aumento significativo na retenção de lideranças após programas executivos
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">+60%</div>
                <p className="text-lg font-semibold mb-2">Aumento em performance de liderança</p>
                <p className="text-sm text-muted-foreground">
                  Melhoria comprovada em indicadores de performance executiva
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-lg font-semibold mb-2">CEOs avaliaram positivamente o impacto</p>
                <p className="text-sm text-muted-foreground">
                  Satisfação total com resultados estratégicos mensuráveis
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Empregabilidade
            titulo="Impacto Estratégico Mensurável"
            subtitulo="Empresas que transformaram sua cultura de liderança com IPOG"
            estatisticas={[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                valor: "500+",
                descricao: "empresas já transformaram sua cultura",
              },
              {
                icon: <Users className="w-8 h-8" />,
                valor: "10mil+",
                descricao: "lideranças desenvolvidas anualmente",
              },
              {
                icon: <Award className="w-8 h-8" />,
                valor: "4.9/5",
                descricao: "avaliação média dos programas executivos",
              },
            ]}
            usarCarrossel={false}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <DepoimentosDeTexto
            titulo="O que CEOs e Diretores Executivos dizem sobre o IPOG Enterprise"
            depoimentos={[
              {
                nome: "Carlos Eduardo Silva",
                cargo: "CEO",
                area: "Tecnologia",
                depoimento:
                  "O programa do IPOG transformou nossa cultura de liderança. Conseguimos mensurar o ROI através de indicadores claros de performance e retenção de talentos.",
                ganho: "Aumento de 65% na retenção de lideranças",
              },
              {
                nome: "Ana Paula Rodrigues",
                cargo: "Diretora Executiva",
                area: "Varejo",
                depoimento:
                  "A customização do programa foi fundamental. O IPOG entendeu nossos desafios estratégicos e desenhou uma solução que gerou impacto real no negócio.",
                ganho: "ROI de 3.2x em 18 meses",
              },
              {
                nome: "Roberto Mendes",
                cargo: "CEO",
                area: "Indústria",
                depoimento:
                  "Finalmente encontramos um parceiro que entende que educação corporativa precisa gerar resultados mensuráveis. Os relatórios executivos são excepcionais.",
                ganho: "Aumento de 58% em performance de liderança",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            titulo="Curadoria executiva com o selo IPOG"
            subtitulo="Professores de mercado, cases corporativos e presença nacional. Mais de 500 empresas já transformaram sua cultura"
            credenciais={[
              { icone: <Award className="w-6 h-6" />, texto: "MEC - Ministério da Educação" },
              { icone: <CheckCircle2 className="w-6 h-6" />, texto: "ISO 9001 - Gestão da Qualidade" },
              { icone: <Building2 className="w-6 h-6" />, texto: "500+ empresas atendidas" },
              { icone: <Briefcase className="w-6 h-6" />, texto: "Professores executivos" },
            ]}
            professores={[
              {
                nome: "Dr. Ricardo Almeida",
                area: "Estratégia Corporativa",
                bio: "Ex-CEO de multinacional, especialista em transformação organizacional e performance executiva",
              },
              {
                nome: "Dra. Juliana Costa",
                area: "Liderança e Cultura",
                bio: "Consultora de cultura organizacional para Fortune 500, especialista em desenvolvimento de lideranças",
              },
              {
                nome: "Dr. Fernando Santos",
                area: "Gestão de Performance",
                bio: "Especialista em mensuração de ROI em educação corporativa e indicadores de performance",
              },
            ]}
          />
        </section>

        {/* Ação Final */}
        <AcaoFinal
          titulo="Transforme o aprendizado em resultado"
          descricao="Solicite um diagnóstico gratuito e descubra como a educação corporativa pode acelerar a performance da sua empresa"
          botaoPrimario={{
            texto: "Solicitar diagnóstico corporativo",
            onClick: () => openAssistantWithFlow("consultor"),
          }}
          botaoSecundario={{
            texto: "Falar com especialista",
            onClick: () => openAssistantWithFlow("consultor"),
          }}
        />

        <Footer />
      </main>
    </>
  )
}
