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
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-0">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Enterprise", href: "/enterprise" },
                { label: "Gestora de RH" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="SOLUÇÕES PARA RH"
          title="Programas corporativos ágeis, práticos e mensuráveis"
          description="Soluções empresariais com suporte contínuo, painéis de métricas e certificação digital. Implantação fácil e comprovada"
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

        {/* Dilema da Gestora de RH */}
        <Dilema
          titulo="O desafio do RH: implantação e comprovação de impacto"
          subtitulo="Você precisa implantar programas ágeis e práticos, mas enfrenta falta de tempo, estrutura e dificuldade de provar ROI"
          dores={[
            {
              icon: <Target className="w-8 h-8" />,
              titulo: "Falta de tempo e estrutura",
              descricao:
                "Dificuldade em coordenar programas de desenvolvimento sem equipe dedicada e ferramentas adequadas",
              solucao: "Suporte contínuo com templates prontos, comunicação integrada e acompanhamento especializado",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              titulo: "Dificuldade de provar ROI",
              descricao:
                "Desafio em mensurar e demonstrar o impacto real dos programas de capacitação para a liderança",
              solucao:
                "Painéis de métricas com indicadores de engajamento, performance e aplicação prática em tempo real",
            },
            {
              icon: <Users className="w-8 h-8" />,
              titulo: "Baixa adesão dos colaboradores",
              descricao:
                "Programas com baixo engajamento e dificuldade em manter colaboradores motivados até a conclusão",
              solucao: "Comunicação integrada, certificação digital e gamificação que aumentam adesão em até 85%",
            },
          ]}
          imagemUrl="/placeholder.svg?height=500&width=800"
        />

        {/* Método IPOG Enterprise para RH */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Suporte contínuo + Métricas comprovadas = Implantação eficaz
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Metodologia que facilita implantação com painéis de métricas, certificação digital e comunicação
                integrada
              </p>
            </div>

            <Beneficios
              titulo="Recursos que facilitam implantação"
              subtitulo="Ferramentas e suporte para gestores de RH"
              beneficios={[
                {
                  icone: <BarChart3 className="w-8 h-8" />,
                  titulo: "Painéis de Métricas",
                  subtitulo: "Acompanhamento visual de engajamento e performance",
                  itens: [
                    "Dashboard em tempo real",
                    "Indicadores de engajamento",
                    "Relatórios executivos automatizados",
                    "Métricas de aplicação prática",
                  ],
                },
                {
                  icone: <Target className="w-8 h-8" />,
                  titulo: "Certificação Digital",
                  subtitulo: "Validação automática e reconhecimento profissional",
                  itens: [
                    "Certificados com blockchain",
                    "Badges digitais compartilháveis",
                    "Validação automática de conclusão",
                    "Integração com LinkedIn",
                  ],
                },
                {
                  icone: <Users className="w-8 h-8" />,
                  titulo: "Comunicação Integrada",
                  subtitulo: "Templates prontos e suporte contínuo",
                  itens: [
                    "Templates de e-mail prontos",
                    "Materiais de divulgação",
                    "Suporte dedicado para RH",
                    "Comunicação automatizada",
                  ],
                },
                {
                  icone: <TrendingUp className="w-8 h-8" />,
                  titulo: "Escala Sob Demanda",
                  subtitulo: "Flexibilidade para crescer conforme necessidade",
                  itens: [
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
                titulo="Jornada de Implantação e Engajamento"
                subtitulo=""
                etapas={[
                  {
                    numero: "1",
                    titulo: "Diagnóstico e Planejamento",
                    descricao: "Mapeamento de necessidades, definição de KPIs e cronograma de implantação",
                  },
                  {
                    numero: "2",
                    titulo: "Configuração e Comunicação",
                    descricao: "Setup de painéis, templates de comunicação e materiais de engajamento",
                  },
                  {
                    numero: "3",
                    titulo: "Lançamento e Acompanhamento",
                    descricao: "Kick-off do programa com suporte contínuo e monitoramento de métricas",
                  },
                  {
                    numero: "4",
                    titulo: "Engajamento e Certificação",
                    descricao: "Acompanhamento de adesão, gamificação e emissão de certificados digitais",
                  },
                  {
                    numero: "5",
                    titulo: "Mensuração e Otimização",
                    descricao: "Análise de resultados, relatórios executivos e ajustes para próximos ciclos",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Soluções Corporativas para RH */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Escolha a solução que facilita implantação e comprova engajamento
              </h2>
            </div>

            <Modalidades
              titulo=""
              modalidades={[
                {
                  badge: "RH",
                  titulo: "Trilhas para RH",
                  descricao:
                    "Desenvolvimento específico para profissionais de recursos humanos com foco em gestão de pessoas",
                  beneficios: [
                    "Gestão estratégica de pessoas",
                    "Métricas e analytics de RH",
                    "Desenvolvimento organizacional",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Conhecer trilhas para RH",
                },
                {
                  badge: "Liderança",
                  titulo: "Programas de Liderança",
                  descricao: "Desenvolvimento de líderes com métricas de engajamento e aplicação prática",
                  beneficios: [
                    "Liderança estratégica",
                    "Gestão de equipes de alta performance",
                    "Métricas de engajamento",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Conhecer programas de liderança",
                },
                {
                  badge: "Corporativo",
                  titulo: "Capacitação Corporativa",
                  descricao: "Programas customizados com baixo custo operacional e suporte contínuo",
                  beneficios: ["Programas sob medida", "Implantação ágil", "Suporte contínuo"],
                  link: "/enterprise#solucoes",
                  buttonText: "Conhecer capacitação corporativa",
                },
              ]}
            />
          </div>
        </section>

        {/* Modalidades com Suporte Contínuo */}
        <Beneficios
          titulo="Formatos com suporte contínuo e métricas comprovadas"
          subtitulo="Escolha o formato ideal para sua empresa. Todas as modalidades incluem suporte contínuo e painéis de métricas"
          corFundo="bg-muted/30"
          beneficios={[
            {
              icone: <Users className="w-8 h-8" />,
              titulo: "Híbrido Corporativo",
              subtitulo: "Flexibilidade com suporte presencial e digital",
              itens: [
                "Encontros presenciais estratégicos",
                "Acompanhamento digital contínuo",
                "Networking entre colaboradores",
                "Métricas de engajamento em tempo real",
              ],
            },
            {
              icone: <Target className="w-8 h-8" />,
              titulo: "EAD Corporativo",
              subtitulo: "Escalabilidade com acompanhamento digital",
              itens: [
                "Acesso 24/7 para colaboradores",
                "Painéis de métricas automatizados",
                "Certificação digital automática",
                "Baixo custo operacional",
              ],
            },
            {
              icone: <TrendingUp className="w-8 h-8" />,
              titulo: "Presencial Corporativo",
              subtitulo: "Vivência prática com facilitação especializada",
              itens: [
                "Facilitadores especializados",
                "Aplicação prática imediata",
                "Networking presencial",
                "Acompanhamento pós-programa",
              ],
            },
          ]}
        />

        {/* Resultados de Engajamento Comprovados */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Programas que comprovam engajamento e performance
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Estatísticas reais de implantação e resultados mensuráveis
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">85%</div>
                <p className="text-lg font-semibold mb-2">de adesão dos colaboradores</p>
                <p className="text-sm text-muted-foreground">
                  Taxa de engajamento superior à média do mercado corporativo
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">78%</div>
                <p className="text-lg font-semibold mb-2">de melhoria em métricas</p>
                <p className="text-sm text-muted-foreground">
                  Aumento comprovado em indicadores de performance e aplicação prática
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-card">
                <div className="text-5xl font-bold mb-2">92%</div>
                <p className="text-lg font-semibold mb-2">de satisfação com suporte</p>
                <p className="text-sm text-muted-foreground">
                  Gestores de RH avaliam positivamente o acompanhamento e templates fornecidos
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Empregabilidade
            titulo="Cases de implantação eficaz"
            subtitulo="Empresas que transformaram seus programas de desenvolvimento com IPOG"
            estatisticas={[
              {
                icon: <Users className="w-8 h-8" />,
                valor: "500+",
                descricao: "empresas já implantaram com sucesso",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                valor: "15mil+",
                descricao: "colaboradores capacitados anualmente",
              },
              {
                icon: <Award className="w-8 h-8" />,
                valor: "4.8/5",
                descricao: "avaliação média dos programas",
              },
            ]}
            usarCarrossel={false}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <DepoimentosDeTexto
            titulo="O que gestoras de RH dizem sobre a implantação"
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
                depoimento:
                  "Os painéis de métricas nos permitiram demonstrar ROI para a diretoria de forma clara e objetiva. Finalmente conseguimos provar o impacto dos programas de desenvolvimento.",
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
            titulo="Suporte contínuo com o selo IPOG"
            subtitulo="Professores especialistas em RH, cases de implantação e presença nacional. Mais de 500 empresas já implantaram com sucesso"
            credenciais={[
              {
                icone: <Award className="w-6 h-6" />,
                texto: "MEC - Ministério da Educação",
              },
              {
                icone: <Shield className="w-6 h-6" />,
                texto: "ABED - Associação Brasileira de Educação a Distância",
              },
              {
                icone: <CheckCircle2 className="w-6 h-6" />,
                texto: "ISO 9001 - Gestão da Qualidade",
              },
              {
                icone: <Award className="w-6 h-6" />,
                texto: "Great Place to Work",
              },
            ]}
            professores={[
              {
                nome: "Dr. Carlos Mendes",
                area: "Gestão de Pessoas",
                bio: "PhD em Psicologia Organizacional, 20 anos de experiência em RH estratégico",
              },
              {
                nome: "Dra. Ana Paula Santos",
                area: "Desenvolvimento Organizacional",
                bio: "Especialista em transformação cultural e engajamento de equipes",
              },
              {
                nome: "Prof. Roberto Lima",
                area: "Analytics de RH",
                bio: "Consultor em People Analytics e métricas de performance",
              },
            ]}
          />
        </section>

        {/* Ação Final */}
        <AcaoFinal
          titulo="Implante programas ágeis e comprove engajamento"
          descricao="Agende uma demonstração e descubra como facilitar implantação com suporte contínuo e métricas comprovadas"
          botaoPrimario={{
            texto: "Agendar demonstração corporativa",
            onClick: () => openAssistantWithFlow("demonstracao-corporativa"),
          }}
          botaoSecundario={{
            texto: "Conhecer trilhas para RH",
            onClick: () => router.push("/enterprise#solucoes"),
          }}
        />

        <Footer />
      </main>
    </>
  )
}
