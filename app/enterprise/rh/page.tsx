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
import { Target, TrendingUp, Users, BarChart3, CheckCircle2, Award, Shield } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function GestoraRHPage() {
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
          items={[
            { label: "Início", href: "/" },
            { label: "Enterprise", href: "/enterprise" },
            { label: "Gestora de RH" },
          ]}
        />
        <Hero
          badge="SOLUÇÕES PARA RH"
          title="DESENVOLVA LÍDERES E EQUIPES PARA OS DESAFIOS ESTRATÉGICOS DO SEU NEGÓCIO"
          description="Soluções de educação corporativa customizadas, com metodologia comprovada e governança de ponta a ponta. A escolha que conecta sua empresa a resultados de alta performance."
          valueBadges={[
            { icon: <BarChart3 className="w-5 h-5" />, text: "Painéis de Métricas" },
            { icon: <Users className="w-5 h-5" />, text: "85% de Adesão" },
            { icon: <CheckCircle2 className="w-5 h-5" />, text: "Suporte Contínuo" },
          ]}
          primaryCTA={{
            text: "Agende uma demonstração corporativa",
            onClick: () => openAssistantWithFlow("demonstracao-corporativa"),
          }}
          secondaryCTA={{
            text: "Conheça trilhas para RH",
            onClick: () => router.push("/enterprise#solucoes"),
          }}
          minHeight="600px"
        />

        <Dilema
          title="Desafios que impedem a performance da sua equipe"
          subtitle=""
          problems={[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Gestão de T&D com recursos limitados",
              description:
                "O desafio de escalar o desenvolvimento de talentos e gerenciar programas de capacitação com uma equipe enxuta e sem as ferramentas adequadas.",
              solution:
                "Atuamos como uma extensão do seu RH, com uma plataforma completa de gestão, comunicação e suporte especializado para garantir a execução e o sucesso dos programas.",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Pressão por resultados mensuráveis",
              description:
                "A crescente necessidade de apresentar dados concretos que justifiquem os investimentos em T&D e conectem o aprendizado aos resultados de negócio.",
              solution:
                "Nossos painéis de métricas traduzem o desenvolvimento em performance, fornecendo dashboards executivos com indicadores de engajamento, aplicação e impacto para facilitar a governança e a tomada de decisão.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Baixo engajamento e impacto nos objetivos",
              description:
                "Programas genéricos que não se conectam com a realidade da equipe, resultando em baixo engajamento, altas taxas de abandono e desperdício de investimento.",
              solution:
                "Nossa metodologia combina comunicação integrada, gamificação e certificação digital para criar uma jornada de aprendizado relevante e motivadora, alcançando taxas de adesão de até 85%.",
            },
          ]}
          imageUrl="/placeholder.svg?height=500&width=800"
        />

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                A Parceria Estratégica que Garante a Performance do seu Negócio
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Soluções customizadas que integram metodologia, tecnologia e suporte para entregar resultados auditáveis
                e alinhados aos objetivos estratégicos do seu negócio.
              </p>
            </div>

            <Beneficios
              title="Recursos que facilitam implantação"
              subtitle="Ferramentas e suporte para gestores de RH"
              benefits={[
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Painéis de Métricas",
                  subtitle: "Acompanhamento visual de engajamento e performance",
                  items: [
                    "Monitoramento em tempo real do progresso e engajamento.",
                    "Análise de participação para otimizar a jornada de aprendizado.",
                    "Relatórios executivos para decisões estratégicas baseadas em dados.",
                    "Indicadores que conectam o aprendizado à aplicação prática no trabalho.",
                  ],
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Certificação Digital",
                  subtitle: "Validação automática e reconhecimento profissional",
                  items: [
                    "Certificação com tecnologia blockchain para máxima segurança e validação.",
                    "Badges digitais para reconhecimento e valorização do colaborador.",
                    "Validação de competências com rastreabilidade de conclusão.",
                    "Integração com perfis profissionais para ampliar a visibilidade das competências.",
                  ],
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Comunicação Integrada",
                  subtitle: "Templates prontos e suporte contínuo",
                  items: [
                    "Kit de comunicação completo para reduzir a carga operacional do RH.",
                    "Peças de engajamento para garantir a máxima adesão aos programas.",
                    "Suporte consultivo dedicado, com um especialista para guiar a implantação e garantir a performance do programa.",
                    "Régua de comunicação automatizada para manter os participantes engajados.",
                  ],
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Escala Sob Demanda",
                  subtitle: "Flexibilidade para crescer conforme necessidade",
                  items: [
                    "Expansão sem complexidade",
                    "Previsibilidade operacional",
                    "Custos escaláveis",
                    "Suporte para grandes volumes",
                  ],
                },
              ]}
            />

            <div className="mt-12">
              <Trilha
                title="Nossa Jornada para o Impacto Estratégico"
                subtitle=""
                stages={[
                  {
                    number: "1",
                    title: "Diagnóstico Consultivo e Desenho da Solução:",
                    description:
                      "Mapeamos seus desafios e metas de negócio para desenhar um programa de desenvolvimento 100% customizado, com KPIs alinhados à sua estratégia.",
                  },
                  {
                    number: "2",
                    title: "Configuração e Comunicação",
                    description: "Setup de painéis, templates de comunicação e materiais de engajamento",
                  },
                  {
                    number: "3",
                    title: "Lançamento e Governança:",
                    description:
                      "Coordenamos o lançamento do programa e oferecemos suporte contínuo ao RH, com monitoramento em tempo real da performance para garantir o sucesso da iniciativa.",
                  },
                  {
                    number: "4",
                    title: "Engajamento e Certificação",
                    description: "Acompanhamento de adesão, gamificação e emissão de certificados digitais",
                  },
                  {
                    number: "5",
                    title: "Análise de Impacto e Melhoria Contínua:",
                    description:
                      "Apresentamos relatórios executivos com a análise completa dos resultados e geramos insights para otimizar os próximos ciclos de desenvolvimento.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Soluções customizadas para os desafios da sua empresa
              </h2>
            </div>

            <Modalidades
              title="Soluções corporativas com suporte contínuo"
              subtitle="Programas customizados para diferentes necessidades de desenvolvimento organizacional"
              modalities={[
                {
                  badge: "RH",
                  title: "Trilhas de Desenvolvimento para o RH Estratégico",
                  description:
                    "Capacite sua equipe de RH com competências de ponta, desde a análise de dados de pessoas (People Analytics) até o desenho de estratégias de desenvolvimento e sucessão, transformando o setor em um pilar de resultados para o negócio.",
                  benefits: [
                    "Gestão estratégica de pessoas",
                    "Métricas e analytics de RH",
                    "Desenvolvimento organizacional",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Explore as trilhas para RH",
                },
                {
                  badge: "Liderança",
                  title: "Programas para Desenvolvimento de Lideranças",
                  description:
                    "Desenvolva líderes preparados para cenários de alta complexidade, com programas que fortalecem a tomada de decisão estratégica e a gestão de equipes de alta performance.",
                  benefits: [
                    "Liderança estratégica",
                    "Gestão de equipes de alta performance",
                    "Métricas de engajamento",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Conhecer programas de liderança",
                },
                {
                  badge: "Corporativo",
                  title: "Capacitação Corporativa",
                  description: "Programas customizados com baixo custo operacional e suporte contínuo",
                  benefits: ["Programas sob medida", "Implantação ágil", "Suporte contínuo"],
                  link: "/enterprise#solucoes",
                  buttonText: "Conhecer capacitação corporativa",
                },
              ]}
            />
          </div>
        </section>

        {/* Modalidades com Suporte Contínuo */}
        <Beneficios
          title="Formatos com suporte contínuo e métricas comprovadas"
          subtitle="Escolha o formato ideal para sua empresa. Todas as modalidades incluem suporte contínuo e painéis de métricas"
          backgroundColor="bg-muted/30"
          benefits={[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Híbrido Corporativo",
              subtitle: "Flexibilidade com suporte presencial e digital",
              items: [
                "Encontros presenciais estratégicos",
                "Acompanhamento digital contínuo",
                "Networking entre colaboradores",
                "Métricas de engajamento em tempo real",
              ],
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "EAD Corporativo",
              subtitle: "Escalabilidade com acompanhamento digital",
              items: [
                "Acesso 24/7 para colaboradores",
                "Painéis de métricas automatizados",
                "Certificação digital automática",
                "Baixo custo operacional",
              ],
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Presencial Corporativo",
              subtitle: "Vivência prática com facilitação especializada",
              items: [
                "Facilitadores especializados",
                "Aplicação prática imediata",
                "Networking presencial",
                "Acompanhamento pós-programa",
              ],
            },
          ]}
        />

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Resultados que Comprovam Nossa Excelência
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Dados reais que demonstram o impacto das nossas soluções em centenas de empresas parceiras.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">85%</div>
                <p className="text-lg font-semibold mb-2">de adesão média</p>
                <p className="text-sm text-muted-foreground">
                  Supere os benchmarks de mercado e garanta o ROI do seu investimento em T&D.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">78%</div>
                <p className="text-lg font-semibold mb-2">de melhoria em performance</p>
                <p className="text-sm text-muted-foreground">
                  Comprove o impacto do aprendizado na produtividade e nos resultados do negócio.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">92%</div>
                <p className="text-lg font-semibold mb-2">de satisfação com suporte</p>
                <p className="text-sm text-muted-foreground">
                  Conte com uma parceria estratégica que reduz a carga operacional do seu RH.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Empregabilidade
            title="Cases de implantação eficaz"
            subtitle="Mais de 500 empresas parceiras e 15.000 colaboradores capacitados anualmente, uma prova da nossa capacidade de execução em escala nacional e da confiança do mercado."
            statistics={[
              {
                icon: <Users className="w-8 h-8" />,
                value: "500+",
                description: "empresas parceiras",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                value: "15mil+",
                description: "colaboradores capacitados anualmente",
              },
              {
                icon: <Award className="w-8 h-8" />,
                value: "4.8/5",
                description: "avaliação média dos programas",
              },
            ]}
            useCarousel={false}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <DepoimentosDeTexto
            title="O que gestoras de RH dizem sobre a implantação"
            depoimentos={[
              {
                nome: "Mariana Silva",
                cargo: "Gerente de RH",
                area: "Empresa de Tecnologia",
                depoimento:
                  "A implantação foi muito mais fácil do que imaginávamos. Os templates prontos e o suporte contínuo fizeram toda a diferença. Conseguimos engajar 87% dos colaboradores no primeiro ciclo.",
                ganho: "87% de engajamento no primeiro ciclo",
              },
              {
                nome: "Juliana Costa",
                cargo: "Coordenadora de T&D",
                area: "Indústria Farmacêutica",
                depoimento: "Os painéis nos permitiram demonstrar o ROI para a diretoria de forma clara e objetiva.",
                ganho: "ROI comprovado para diretoria",
              },
              {
                nome: "Fernanda Oliveira",
                cargo: "Diretora de Pessoas",
                area: "Varejo Nacional",
                depoimento:
                  "O suporte da equipe IPOG foi fundamental. Eles nos ajudaram em cada etapa, desde o planejamento até a certificação digital. Nossa taxa de conclusão aumentou 65%.",
                ganho: "65% de aumento na conclusão",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            title="Aprenda com Especialistas que Transformam o Mercado"
            subtitle="Chancelas de Qualidade e Credibilidade - Estas certificações validam a excelência acadêmica e a gestão de qualidade do IPOG, reforçando nossa credibilidade como um parceiro estratégico para o desenvolvimento da sua empresa."
            credentials={[
              {
                icon: <Award className="w-6 h-6" />,
                text: "MEC - Ministério da Educação",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                text: "ABED - Associação Brasileira de Educação a Distância",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                text: "ISO 9001 - Gestão da Qualidade",
              },
              {
                icon: <Award className="w-6 h-6" />,
                text: "Great Place to Work",
              },
            ]}
            professors={[
              {
                name: "Dr. Carlos Mendes",
                area: "Gestão de Pessoas",
                bio: "PhD em Psicologia Organizacional, 20 anos de experiência em RH estratégico",
              },
              {
                name: "Dra. Ana Paula Santos",
                area: "Desenvolvimento Organizacional",
                bio: "Especialista em transformação cultural e engajamento de equipes",
              },
              {
                name: "Prof. Roberto Lima",
                area: "Analytics de RH",
                bio: "Consultor em People Analytics e métricas de performance",
              },
            ]}
          />
        </section>

        <AcaoFinal
          title="Implante programas ágeis e comprove engajamento"
          description="Solicite um diagnóstico e entenda como as soluções IPOG podem transformar o desenvolvimento da sua equipe."
          primaryButton={{
            text: "Agendar demonstração corporativa",
            onClick: () => openAssistantWithFlow("demonstracao-corporativa"),
          }}
          secondaryButton={{
            text: "Conhecer trilhas para RH",
            onClick: () => router.push("/enterprise#solucoes"),
          }}
        />

        <Footer />
      </main>
    </>
  )
}
