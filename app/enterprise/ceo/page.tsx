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
          title="Educação Executiva que Garante Alta Performance."
          description="Desenvolva lideranças, fortaleça sua cultura e comprove o impacto no negócio com soluções corporativas desenhadas para os seus desafios estratégicos."
          valueBadges={[
            { icon: <Target className="w-5 h-5" />, text: "ROI Mensurável" },
            { icon: <Users className="w-5 h-5" />, text: "Cultura de Alta Performance" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "Liderança Estratégica" },
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
          title="O desafio das organizações: ROI da educação corporativa"
          subtitle="A velocidade do mercado exige líderes preparados e equipes alinhadas — mas o ROI da educação corporativa ainda é difícil de comprovar"
          problems={[
            {
              icon: <TrendingDown className="w-6 h-6" />,
              title: "O Desafio: Programas de prateleira, sem conexão com o negócio.",
              description:
                "**A Solução IPOG:** Diagnóstico preciso e programas 100% customizados, alinhados à sua estratégia para garantir resultados reais.",
              solution: "",
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "O Desafio: Baixo engajamento das lideranças em programas de desenvolvimento.",
              description:
                "**A Solução IPOG:** Metodologia executiva com aplicação prática imediata e acompanhamento contínuo que garante a adesão e a performance do seu time.",
              solution: "",
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "O Desafio: Dificuldade em mensurar o impacto do investimento em capacitação.",
              description:
                "**A Solução IPOG:** Implementamos uma governança rigorosa com KPIs de negócio e relatórios executivos que comprovam o ROI e o alinhamento do programa à sua estratégia mestra.",
              solution: "",
            },
          ]}
          imageUrl="/placeholder.svg?height=500&width=800"
        />

        {/* Método IPOG Enterprise - 6DS */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Metodologia 6DS e a Chancela IPOG: A Arquitetura do Impacto no seu Negócio
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Unimos uma metodologia de impacto validada pelo mercado à chancela de uma das instituições mais
                reconhecidas do Brasil.
              </p>
            </div>

            <Trilha
              title="Nossa Jornada para o Impacto Estratégico"
              subtitle=""
              stages={[
                {
                  number: "1",
                  title: "Diagnóstico Estratégico:",
                  description:
                    "Análise aprofundada dos seus desafios de negócio, competências e gaps de liderança para garantir alinhamento total com os objetivos da companhia.",
                },
                {
                  number: "2",
                  title: "Desenho da Solução:",
                  description:
                    "Criação de programas corporativos sob medida, desenhados para endereçar os desafios específicos da sua organização e acelerar a performance.",
                },
                {
                  number: "3",
                  title: "Desenvolvimento e Execução:",
                  description:
                    "Implementação com um corpo docente formado por executivos de mercado, que conectam teoria, cases reais e aplicação imediata no seu negócio.",
                },
                {
                  number: "4",
                  title: "Mensuração de Impacto:",
                  description:
                    "Acompanhamento contínuo com relatórios executivos, KPIs de performance e a comprovação do ROI para seus stakeholders.",
                },
              ]}
              buttonText="Solicitar diagnóstico estratégico"
              onClickButton={() => openAssistantWithFlow("consultor")}
            />
          </div>
        </section>

        {/* Soluções Corporativas */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Nossas Soluções para os Desafios Estratégicos do seu Negócio
              </h2>
            </div>

            <Modalidades
              title="Soluções corporativas com impacto estratégico"
              subtitle="Programas customizados para diferentes necessidades de desenvolvimento organizacional"
              modalities={[
                {
                  badge: "MBA EXECUTIVO",
                  title: "Desenvolvimento aprofundado para C-Level e tomadores de decisão.",
                  description: "",
                  benefits: [
                    "Visão estratégica para tomada de decisão complexa",
                    "Networking C-Level de alto impacto",
                    "Aplicação em cases estratégicos",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Solicitar Diagnóstico",
                },
                {
                  badge: "PDL CORPORATIVO",
                  title: "Desenvolvimento de competências de liderança alinhadas à sua cultura.",
                  description: "",
                  benefits: [
                    "Programa 100% customizado",
                    "Foco em competências críticas",
                    "Governança de Resultados e Acompanhamento Executivo",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Conhecer o Programa",
                },
                {
                  badge: "PÓS-GRADUAÇÃO EXECUTIVA",
                  title: "Especialização técnica para líderes que buscam performance.",
                  description: "",
                  benefits: [
                    "Aprofundamento estratégico",
                    "Corpo docente executivo",
                    "Metodologia orientada a resultados",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Ver Especializações",
                },
              ]}
            />
          </div>
        </section>

        {/* Modalidades com Impacto Estratégico */}
        <Beneficios
          title="Formatos que fortalecem cultura e comprovam resultados"
          subtitle="Escolha a modalidade que melhor se adapta à estratégia e cultura da sua organização"
          backgroundColor="bg-muted/30"
          benefits={[
            {
              icon: <Building2 className="w-8 h-8" />,
              title: "Formato Presencial",
              subtitle: "Imersão executiva para networking C-Level.",
              items: [
                "Imersão executiva presencial",
                "Networking qualificado C-Level",
                "Laboratórios de estratégia",
                "Cases corporativos ao vivo",
              ],
            },
            {
              icon: <Lightbulb className="w-8 h-8" />,
              title: "Formato Híbrido",
              subtitle: "Flexibilidade para lideranças, com encontros presenciais estratégicos.",
              items: [
                "Encontros presenciais estratégicos",
                "Conteúdo online sob demanda",
                "Flexibilidade para lideranças",
                "Networking híbrido",
              ],
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Formato Online",
              subtitle: "Escalabilidade nacional com governança executiva e otimização de custos.",
              items: [
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
                Performance Comprovada: O Impacto do IPOG Enterprise no seu Negócio
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Nossos parceiros reportam ganhos mensuráveis que validam o investimento em educação corporativa de
                excelência.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">+70%</div>
                <p className="text-lg font-semibold mb-2">em retenção de lideranças estratégicas formadas pelo IPOG.</p>
                <p className="text-sm text-muted-foreground">
                  Aumento significativo na retenção de lideranças após programas executivos
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">+60%</div>
                <p className="text-lg font-semibold mb-2">de avanço em indicadores de performance executiva.</p>
                <p className="text-sm text-muted-foreground">
                  Melhoria comprovada em indicadores de performance executiva
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-lg font-semibold mb-2">de satisfação C-Level com o impacto gerado nos negócios.</p>
                <p className="text-sm text-muted-foreground">
                  Satisfação total com resultados estratégicos mensuráveis
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Empregabilidade
            title="Impacto Estratégico Mensurável"
            subtitle="Empresas que transformaram sua cultura de liderança com IPOG"
            statistics={[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                value: "500+",
                description: "empresas já transformaram sua cultura",
              },
              {
                icon: <Users className="w-8 h-8" />,
                value: "10mil+",
                description: "lideranças desenvolvidas anualmente",
              },
              {
                icon: <Award className="w-8 h-8" />,
                value: "4.9/5",
                description: "avaliação média dos programas executivos",
              },
            ]}
            useCarousel={false}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <DepoimentosDeTexto
            title="O que CEOs e Diretores Executivos dizem sobre o IPOG Enterprise"
            depoimentos={[
              {
                name: "Carlos Eduardo Silva",
                role: "CEO",
                area: "Tecnologia",
                testimonial:
                  "O IPOG não é um fornecedor, é um parceiro estratégico. Eles transformaram nossa cultura de liderança e, mais importante, comprovaram o ROI com KPIs claros de performance e retenção, o que foi decisivo para o board.",
                gain: "Aumento de 65% na retenção de lideranças",
              },
              {
                name: "Ana Paula Rodrigues",
                role: "Diretora Executiva",
                area: "Varejo",
                testimonial:
                  "A customização do IPOG foi o diferencial. Eles realizaram um diagnóstico profundo dos nossos desafios de negócio e desenharam uma solução que gerou impacto mensurável, muito além dos programas de prateleira que víamos no mercado.",
                gain: "ROI de 3.2x em 18 meses",
              },
              {
                name: "Roberto Mendes",
                role: "CEO",
                area: "Indústria",
                testimonial:
                  "Finalmente encontramos um parceiro que entende que educação executiva precisa de governança. Os relatórios de performance e a mensuração contínua de resultados são de um nível que não havíamos encontrado em nenhum outro lugar.",
                gain: "Aumento de 58% em performance de liderança",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            title="Seu Time Aprenderá com Executivos que Já Enfrentaram os seus Desafios"
            subtitle="Professores de mercado, cases corporativos e presença nacional. Mais de 500 empresas já transformaram sua cultura"
            credentials={[
              { icon: <Award className="w-6 h-6" />, text: "MEC - Ministério da Educação" },
              { icon: <CheckCircle2 className="w-6 h-6" />, text: "ISO 9001 - Gestão da Qualidade" },
              { icon: <Building2 className="w-6 h-6" />, text: "500+ empresas atendidas" },
              { icon: <Briefcase className="w-6 h-6" />, text: "Professores executivos" },
            ]}
            professors={[
              {
                name: "Dr. Ricardo Almeida",
                area: "Estratégia Corporativa",
                bio: "Ex-CEO de multinacional, com experiência comprovada em transformação organizacional e performance executiva.",
              },
              {
                name: "Dra. Juliana Costa",
                area: "Liderança e Cultura",
                bio: "Consultora de cultura para empresas Fortune 500 e especialista no desenvolvimento de lideranças de alta performance.",
              },
              {
                name: "Dr. Fernando Santos",
                area: "Gestão de Performance",
                bio: "Especialista em mensuração de ROI e implementação de KPIs de performance para educação corporativa.",
              },
            ]}
          />
        </section>

        {/* Ação Final */}
        <AcaoFinal
          title="Agende uma Sessão Estratégica e Desenhe o Futuro da sua Liderança."
          description="Solicite um diagnóstico gratuito e descubra como a educação corporativa pode acelerar a performance da sua empresa"
          primaryButton={{
            text: "Solicitar diagnóstico corporativo",
            onClick: () => openAssistantWithFlow("consultor"),
          }}
          secondaryButton={{
            text: "Falar com especialista",
            onClick: () => openAssistantWithFlow("consultor"),
          }}
        />

        <Footer />
      </main>
    </>
  )
}
