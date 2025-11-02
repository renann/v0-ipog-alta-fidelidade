"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { Trilha } from "@/components/trilha"
import { Jornadas } from "@/components/jornadas"
import { ResultadosReais } from "@/components/resultados-reais"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { SolucoesCorporativas } from "@/components/enterprise/solucoes-corporativas"
import { CredenciaisParcerias } from "@/components/enterprise/credenciais-parcerias"
import { TrendingUp, Users, Target, Building2, Award, Briefcase, MessageCircle, ArrowRight } from "lucide-react"
import { openAssistantWithFlow } from "@/lib/assistant-events"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function EnterprisePage() {
  const router = useRouter()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Enterprise" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <Hero
          badge="SOLUÇÕES CORPORATIVAS"
          title="Desenvolva líderes e equipes para os desafios estratégicos do seu negócio"
          description="Aplique soluções personalizadas com metodologia prática, impacto mensurável e a chancela de uma das maiores instituições do Brasil."
          valueBadges={[
            { icon: <Target className="w-5 h-5" />, text: "ROI Comprovado" },
            { icon: <Award className="w-5 h-5" />, text: "Metodologia 6DS" },
            { icon: <Building2 className="w-5 h-5" />, text: "+500 Empresas Parceiras" },
          ]}
          primaryCTA={{
            text: "Conheça as soluções corporativas",
            href: "#solucoes",
          }}
          secondaryCTA={{
            text: "Solicitar diagnóstico corporativo",
            onClick: () => openAssistantWithFlow("consultor"),
            icon: <MessageCircle className="w-5 h-5 ml-2" />,
          }}
        />

        {/* Dilema Corporativo */}
        <Dilema
          title="Sua empresa precisa de performance. Sua equipe, do parceiro certo."
          subtitle="Nós transformamos o investimento em educação em resultados que o seu negócio pode medir."
          backgroundColor="bg-muted/30"
          dores={[
            {
              icon: <TrendingUp className="w-6 h-6 text-primary" />,
              titulo: "Diagnóstico Estratégico",
              solucao: "Mapeamento de competências para focar no que gera mais impacto.",
            },
            {
              icon: <Users className="w-6 h-6 text-primary" />,
              titulo: "Desenvolvimento Sob Medida",
              solucao: "Programas desenhados para os desafios reais da sua empresa.",
            },
            {
              icon: <Target className="w-6 h-6 text-primary" />,
              titulo: "Resultados Mensuráveis",
              solucao: "Dashboards e relatórios que comprovam o ROI do seu investimento.",
            },
          ]}
        />

        {/* Método Enterprise - 6DS */}
        <Trilha
          titulo="METODOLOGIA 6DS E A CHANCELA IPOG: A FÓRMULA PARA O IMPACTO REAL."
          subtitulo="Uma jornada de desenvolvimento corporativo que alinha diagnóstico, implementação e mensuração contínua para garantir performance."
          bgColor="bg-background"
          etapas={[
            {
              numero: "1",
              titulo: "Diagnóstico e Alinhamento Estratégico",
              descricao:
                "Análise aprofundada para identificar gaps de competências e definir KPIs alinhados aos objetivos estratégicos do seu negócio.",
              badges: ["Análise de competências", "Mapeamento de gaps", "Definição de KPIs"],
            },
            {
              numero: "2",
              titulo: "Desenho de Soluções Sob Medida",
              descricao:
                "Criação de programas e trilhas de aprendizagem customizadas, utilizando conteúdo aplicado para resolver os desafios específicos da sua organização.",
              badges: ["Programas customizados", "Trilhas de aprendizagem", "Conteúdo aplicado"],
            },
            {
              numero: "3",
              titulo: "Implementação e Desenvolvimento",
              descricao:
                "Execução com um corpo docente de mercado e metodologias ativas que garantem a aplicação prática e imediata do conhecimento no ambiente de trabalho.",
              badges: ["Professores de mercado", "Cases reais", "Aplicação prática"],
            },
            {
              numero: "4",
              titulo: "Mensuração de Impacto e ROI",
              descricao:
                "Acompanhamento com dashboards de performance e relatórios executivos que demonstram o ROI através de indicadores de negócio e evolução comportamental.",
              badges: ["Relatórios executivos", "Dashboard de ROI", "Indicadores de performance"],
            },
          ]}
        />

        {/* Soluções Corporativas */}
        <SolucoesCorporativas />

        {/* Duas Perspectivas - CEO vs RH */}
        <Jornadas
          title="Respostas diretas para as dores de cada líder"
          backgroundColor="bg-muted/30"
          jornadas={[
            {
              icon: <Briefcase className="w-8 h-8 text-primary" />,
              titulo: "Para o C-Level e Diretor Executivo",
              promessa: "Justifique o investimento em T&D com visibilidade clara dos resultados no negócio",
              dores: "Justificar o investimento em T&D sem visibilidade clara dos resultados no negócio.",
              ganho:
                "Programas com ROI comprovado, relatórios executivos e alinhamento direto com as metas estratégicas da companhia.",
              cta: "Solicitar diagnóstico estratégico",
              onClick: () => router.push("/enterprise/ceo"),
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              titulo: "Para a Gestora de RH e T&D",
              promessa: "Implemente programas de alto impacto com orçamento limitado e prove seu valor",
              dores:
                "Implementar programas de alto impacto com orçamento limitado e provar seu valor para a liderança.",
              ganho:
                "Soluções customizadas, com implantação ágil, suporte contínuo e métricas de engajamento que facilitam a gestão e a comprovação de resultados.",
              cta: "Agendar demonstração corporativa",
              onClick: () => router.push("/enterprise/rh"),
            },
          ]}
        />

        {/* Resultados e Prova de Impacto */}
        <ResultadosReais
          title="O impacto do IPOG Enterprise em números"
          subtitle="Dados que comprovam o retorno sobre o investimento em desenvolvimento estratégico: +70% de Retenção de Talentos: Aumento na retenção de colaboradores-chave após os programas. +60% em Performance de Liderança: Melhoria comprovada nos indicadores de gestão e competências. 100% de Aprovação C-Level: Avaliação máxima do impacto estratégico pelos executivos."
          estatisticas={[
            {
              icone: <TrendingUp className="w-10 h-10 text-primary" />,
              valor: "+70%",
              label: "Retenção de Talentos",
              descricao: "Aumento na retenção pós-programa",
            },
            {
              icone: <Users className="w-10 h-10 text-primary" />,
              valor: "+60%",
              label: "Performance de Liderança",
              descricao: "Melhoria em indicadores de liderança",
            },
            {
              icone: <Target className="w-10 h-10 text-primary" />,
              valor: "100%",
              label: "Aprovação CEO",
              descricao: "Avaliação positiva do impacto estratégico",
            },
            {
              icone: <Building2 className="w-10 h-10 text-primary" />,
              valor: "500+",
              label: "Empresas Atendidas",
              descricao: "Organizações transformadas",
            },
          ]}
          depoimentos={[
            {
              tipo: "antes-depois",
              nome: "Maria Silva",
              cargo: "Diretora de RH - Empresa de Tecnologia",
              antes: "Dificuldade em comprovar ROI dos programas de desenvolvimento e baixo engajamento das lideranças",
              depois:
                "Aumento de 65% no engajamento e relatórios executivos que comprovam impacto direto nos resultados de negócio",
              impacto: "+65% de engajamento e ROI comprovado em 8 meses",
            },
            {
              tipo: "antes-depois",
              nome: "Carlos Mendes",
              cargo: "CEO - Indústria Farmacêutica",
              antes:
                "Investimento alto em educação corporativa sem visibilidade clara de resultados e impacto na cultura",
              depois:
                "Fortalecimento da cultura de inovação, retenção de 85% dos talentos-chave e aumento de 40% na produtividade",
              impacto: "85% de retenção de talentos e +40% de produtividade",
            },
          ]}
        />

        {/* Credenciais e Parcerias */}
        <CredenciaisParcerias />

        {/* Autoridade e Credibilidade */}
        <Autoridade
          title="Curadoria executiva com a chancela IPOG"
          subtitle="Conhecimento aplicado por quem vive o mercado, com cases reais e atuação em todo o Brasil."
          backgroundColor="bg-background"
          credenciais={[
            {
              icone: <Building2 className="w-6 h-6 text-primary" />,
              texto: "Mais de 500 empresas transformadas",
            },
            {
              icone: <Award className="w-6 h-6 text-primary" />,
              texto: "Certificação reconhecida pelo MEC",
            },
            {
              icone: <Users className="w-6 h-6 text-primary" />,
              texto: "Corpo docente executivo atuante",
            },
            {
              icone: <Target className="w-6 h-6 text-primary" />,
              texto: "Metodologia 6DS validada",
            },
            {
              icone: <TrendingUp className="w-6 h-6 text-primary" />,
              texto: "ROI médio de 8 meses",
            },
            {
              icone: <Briefcase className="w-6 h-6 text-primary" />,
              texto: "Presença em todo território nacional",
            },
          ]}
          professores={[
            {
              nome: "Dr. Roberto Andrade",
              area: "Estratégia Corporativa",
              bio: "Ex-VP de Estratégia em multinacional, especialista em transformação organizacional e desenvolvimento de lideranças executivas.",
            },
            {
              nome: "Dra. Juliana Costa",
              area: "Gestão de Pessoas",
              bio: "20 anos de experiência em RH estratégico, consultora de cultura organizacional e engajamento de equipes de alta performance.",
            },
            {
              nome: "Prof. Marcelo Santos",
              area: "Inovação e Mudança",
              bio: "Consultor de inovação corporativa, mentor de programas de transformação digital e desenvolvimento de mindset ágil.",
            },
          ]}
          tituloProfessores="Conheça alguns de nossos professores executivos"
        />

        {/* Ação Final */}
        <AcaoFinal
          title="Vamos transformar aprendizado em performance?"
          descricao="Solicite um diagnóstico estratégico e descubra como a educação corporativa pode acelerar os resultados da sua empresa."
          corFundo="bg-muted/30"
          botaoPrimario={{
            texto: "Solicitar diagnóstico corporativo",
            onClick: () => openAssistantWithFlow("consultor"),
            icone: <MessageCircle className="w-5 h-5" />,
          }}
          botaoSecundario={{
            texto: "Falar com especialista",
            onClick: () => openAssistantWithFlow("consultor"),
            icone: <ArrowRight className="w-5 h-5" />,
          }}
        />

        <Footer />
      </main>
    </>
  )
}
