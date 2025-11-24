"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { HomeHeader } from "@/components/home-header"
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
      <HomeHeader />
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
          dores={[
            {
              icon: <Target className="w-8 h-8" />,
              titulo: "Gestão de T&D com recursos limitados",
              descricao:
                "O desafio de escalar o desenvolvimento de talentos e gerenciar programas de capacitação com uma equipe enxuta e sem as ferramentas adequadas.",
              solucao:
                "Atuamos como uma extensão do seu RH, com uma plataforma completa de gestão, comunicação e suporte especializado para garantir a execução e o sucesso dos programas.",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              titulo: "Pressão por resultados mensuráveis",
              descricao:
                "A crescente necessidade de apresentar dados concretos que justifiquem os investimentos em T&D e conectem o aprendizado aos resultados de negócio.",
              solucao:
                "Nossos painéis de métricas traduzem o desenvolvimento em performance, fornecendo dashboards executivos com indicadores de engajamento, aplicação e impacto para facilitar a governança e a tomada de decisão.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              titulo: "Baixo engajamento e impacto nos objetivos",
              descricao:
                "Programas genéricos que não se conectam com a realidade da equipe, resultando em baixo engajamento, altas taxas de abandono e desperdício de investimento.",
              solucao:
                "Nossa metodologia combina comunicação integrada, gamificação e certificação digital para criar uma jornada de aprendizado relevante e motivadora, alcançando taxas de adesão de até 85%.",
            },
          ]}
          imagemUrl="/placeholder.svg?height=500&width=800"
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
              beneficios={[
                {
                  icone: <BarChart3 className="w-8 h-8" />,
                  titulo: "Painéis de Métricas",
                  subtitulo: "Acompanhamento visual de engajamento e performance",
                  itens: [
                    "Monitoramento em tempo real do progresso e engajamento.",
                    "Análise de participação para otimizar a jornada de aprendizado.",
                    "Relatórios executivos para decisões estratégicas baseadas em dados.",
                    "Indicadores que conectam o aprendizado à aplicação prática no trabalho.",
                  ],
                },
                {
                  icone: <Target className="w-8 h-8" />,
                  titulo: "Certificação Digital",
                  subtitulo: "Validação automática e reconhecimento profissional",
                  itens: [
                    "Certificação com tecnologia blockchain para máxima segurança e validação.",
                    "Badges digitais para reconhecimento e valorização do colaborador.",
                    "Validação de competências com rastreabilidade de conclusão.",
                    "Integração com perfis profissionais para ampliar a visibilidade das competências.",
                  ],
                },
                {
                  icone: <Users className="w-8 h-8" />,
                  titulo: "Comunicação Integrada",
                  subtitulo: "Templates prontos e suporte contínuo",
                  itens: [
                    "Kit de comunicação completo para reduzir a carga operacional do RH.",
                    "Peças de engajamento para garantir a máxima adesão aos programas.",
                    "Suporte consultivo dedicado, com um especialista para guiar a implantação e garantir a performance do programa.",
                    "Régua de comunicação automatizada para manter os participantes engajados.",
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
                title="Nossa Jornada para o Impacto Estratégico"
                subtitle=""
                etapas={[
                  {
                    numero: "1",
                    titulo: "Diagnóstico Consultivo e Desenho da Solução:",
                    descricao:
                      "Mapeamos seus desafios e metas de negócio para desenhar um programa de desenvolvimento 100% customizado, com KPIs alinhados à sua estratégia.",
                  },
                  {
                    numero: "2",
                    titulo: "Configuração e Comunicação",
                    descricao: "Setup de painéis, templates de comunicação e materiais de engajamento",
                  },
                  {
                    numero: "3",
                    titulo: "Lançamento e Governança:",
                    descricao:
                      "Coordenamos o lançamento do programa e oferecemos suporte contínuo ao RH, com monitoramento em tempo real da performance para garantir o sucesso da iniciativa.",
                  },
                  {
                    numero: "4",
                    titulo: "Engajamento e Certificação",
                    descricao: "Acompanhamento de adesão, gamificação e emissão de certificados digitais",
                  },
                  {
                    numero: "5",
                    titulo: "Análise de Impacto e Melhoria Contínua:",
                    descricao:
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
              modalidades={[
                {
                  badge: "RH",
                  titulo: "Trilhas de Desenvolvimento para o RH Estratégico",
                  descricao:
                    "Capacite sua equipe de RH com competências de ponta, desde a análise de dados de pessoas (People Analytics) até o desenho de estratégias de desenvolvimento e sucessão, transformando o setor em um pilar de resultados para o negócio.",
                  beneficios: [
                    "Gestão estratégica de pessoas",
                    "Métricas e analytics de RH",
                    "Desenvolvimento organizacional",
                  ],
                  link: "/enterprise#solucoes",
                  buttonText: "Explore as trilhas para RH",
                },
                {
                  badge: "Liderança",
                  titulo: "Programas para Desenvolvimento de Lideranças",
                  descricao:
                    "Desenvolva líderes preparados para cenários de alta complexidade, com programas que fortalecem a tomada de decisão estratégica e a gestão de equipes de alta performance.",
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
          title="Formatos com suporte contínuo e métricas comprovadas"
          subtitle="Escolha o formato ideal para sua empresa. Todas as modalidades incluem suporte contínuo e painéis de métricas"
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
            estatisticas={[
              {
                icon: <Users className="w-8 h-8" />,
                valor: "500+",
                descricao: "empresas parceiras",
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

        <AcaoFinal
          title="Implante programas ágeis e comprove engajamento"
          descricao="Solicite um diagnóstico e entenda como as soluções IPOG podem transformar o desenvolvimento da sua equipe."
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
