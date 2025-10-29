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

export default function EnterprisePage() {
  const router = useRouter()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero
          badge="SOLUÇÕES CORPORATIVAS"
          title="Educação corporativa estratégica que transforma aprendizado em performance"
          description="Soluções empresariais customizadas que fortalecem cultura, desenvolvem lideranças e comprovam resultados"
          valueBadges={[
            { icon: <Target className="w-5 h-5" />, text: "ROI Mensurável" },
            { icon: <Award className="w-5 h-5" />, text: "Metodologia 6DS" },
            { icon: <Building2 className="w-5 h-5" />, text: "+500 Empresas Atendidas" },
          ]}
          primaryCTA={{
            text: "Ver soluções Enterprise",
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
          titulo="A velocidade do mercado exige líderes preparados e equipes alinhadas"
          subtitulo="Mas o ROI da educação corporativa ainda é difícil de comprovar"
          backgroundColor="bg-muted/30"
          dores={[
            {
              icon: <TrendingUp className="w-6 h-6 text-primary" />,
              titulo: "Diagnóstico Personalizado",
              solucao: "Mapeamento estratégico das competências organizacionais com foco em gaps críticos",
            },
            {
              icon: <Users className="w-6 h-6 text-primary" />,
              titulo: "Desenvolvimento Executivo",
              solucao: "Programas sob medida com corpo docente de mercado e metodologia aplicada",
            },
            {
              icon: <Target className="w-6 h-6 text-primary" />,
              titulo: "Mensuração Contínua",
              solucao: "Relatórios executivos com indicadores de performance e ROI comprovado",
            },
          ]}
        />

        {/* Método Enterprise - 6DS */}
        <Trilha
          titulo="Curadoria 6DS + Chancela IPOG = Impacto comprovado"
          subtitulo="Jornada corporativa estruturada com diagnóstico, desenvolvimento e mensuração contínua"
          bgColor="bg-background"
          etapas={[
            {
              numero: "1",
              titulo: "Diagnóstico Estratégico",
              descricao:
                "Mapeamento completo das necessidades organizacionais, identificação de gaps de competências e definição de objetivos mensuráveis alinhados à estratégia corporativa.",
              badges: ["Análise de competências", "Mapeamento de gaps", "Definição de KPIs"],
            },
            {
              numero: "2",
              titulo: "Desenho Personalizado",
              descricao:
                "Curadoria de programas sob medida combinando MBA Executivo, Programas de Desenvolvimento de Liderança e Pós-Graduação Corporativa com foco nos desafios específicos da organização.",
              badges: ["Programas customizados", "Trilhas de aprendizagem", "Conteúdo aplicado"],
            },
            {
              numero: "3",
              titulo: "Desenvolvimento Executivo",
              descricao:
                "Implementação com corpo docente executivo, cases corporativos reais e metodologias ativas que garantem aplicação imediata no contexto organizacional.",
              badges: ["Professores de mercado", "Cases reais", "Aplicação prática"],
            },
            {
              numero: "4",
              titulo: "Mensuração de Impacto",
              descricao:
                "Acompanhamento contínuo com relatórios executivos, dashboards de performance e comprovação de ROI através de indicadores tangíveis de mudança comportamental e resultados de negócio.",
              badges: ["Relatórios executivos", "Dashboard de ROI", "Indicadores de performance"],
            },
          ]}
        />

        {/* Soluções Corporativas */}
        <SolucoesCorporativas />

        {/* Duas Perspectivas - CEO vs RH */}
        <Jornadas
          titulo="Soluções para cada tomador de decisão"
          backgroundColor="bg-muted/30"
          jornadas={[
            {
              icon: <Briefcase className="w-8 h-8 text-primary" />,
              titulo: "CEO / Diretor Executivo",
              promessa: "Mensure impacto e garanta ROI real em educação corporativa",
              dores: "Falta de indicadores claros e baixa visibilidade de resultados em programas de desenvolvimento",
              ganho:
                "Relatórios de mensuração executiva, fortalecimento da cultura organizacional e retenção de talentos estratégicos",
              cta: "Solicitar diagnóstico estratégico",
              onClick: () => router.push("/enterprise/ceo"),
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              titulo: "Gestora de RH",
              promessa: "Implemente programas ágeis, práticos e mensuráveis com suporte contínuo",
              dores:
                "Sobrecarga operacional na gestão de programas e dificuldade em comprovar impacto para a liderança",
              ganho:
                "Trilhas estruturadas de curta duração, métricas de engajamento em tempo real e certificação digital automatizada",
              cta: "Agendar demonstração corporativa",
              onClick: () => router.push("/enterprise/rh"),
            },
          ]}
        />

        {/* Resultados e Prova de Impacto */}
        <ResultadosReais
          titulo="Empresas que escolheram o IPOG Enterprise reportaram ganhos reais de performance e engajamento"
          subtitulo="Resultados mensuráveis que comprovam o impacto da educação corporativa estratégica"
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
          titulo="Curadoria executiva com o selo IPOG"
          subtitulo="Professores de mercado, cases corporativos e presença nacional"
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
          titulo="Transforme o aprendizado em resultado"
          descricao="Solicite um diagnóstico gratuito e descubra como a educação corporativa pode acelerar a performance da sua empresa"
          corFundo="bg-muted/30"
          botaoPrimario={{
            texto: "Solicitar diagnóstico corporativo",
            onClick: () => openAssistantWithFlow("consultor"),
            icone: <MessageCircle className="w-5 h-5" />,
          }}
          botaoSecundario={{
            texto: "Falar com especialista em RH corporativo",
            onClick: () => openAssistantWithFlow("consultor"),
            icone: <ArrowRight className="w-5 h-5" />,
          }}
        />

        <Footer />
      </main>
    </>
  )
}
