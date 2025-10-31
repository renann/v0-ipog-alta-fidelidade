"use client"

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
import { openAssistantWithFlow } from "@/lib/assistant-events"

export default function CeoPage() {
  return (
    <>
      {/* Header Section */}
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
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
            onClick: () => {
              document.getElementById("metodo-6ds")?.scrollIntoView({ behavior: "smooth" })
            },
          }}
          minHeight="600px"
        />

        {/* Dilema do CEO */}
        <Dilema
          titulo="O desafio das organizações: ROI da educação corporativa"
          subtitulo="A velocidade do mercado exige líderes preparados e equipes alinhadas — mas o ROI da educação corporativa ainda é difícil de comprovar"
          backgroundColor="bg-muted/30"
          showBorder={true}
          dores={[
            {
              icon: <TrendingDown className="w-6 h-6" />,
              titulo: "Programas genéricos e desconectados",
              dor: "Investimentos em treinamentos que não se conectam com os desafios reais do negócio",
              solucao: "Customização estratégica alinhada aos objetivos corporativos e cultura organizacional",
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              titulo: "Baixo engajamento de líderes",
              dor: "Dificuldade em manter lideranças engajadas em programas de desenvolvimento contínuo",
              solucao: "Metodologia 6DS com acompanhamento executivo e aplicação prática imediata",
            },
            {
              icon: <Target className="w-6 h-6" />,
              titulo: "Falta de indicadores de performance",
              dor: "Impossibilidade de mensurar o impacto real dos investimentos em educação corporativa",
              solucao: "Mensuração contínua com relatórios executivos e KPIs de performance organizacional",
            },
          ]}
        />

        {/* Método IPOG Enterprise - 6DS */}
        <div id="metodo-6ds">
          <Trilha
            title="Curadoria 6DS + Chancela IPOG = Impacto comprovado"
            subtitle="Metodologia proprietária que conecta aprendizado e mensuração com resultados tangíveis"
            bgColor="bg-background"
            etapas={[
              {
                numero: "1",
                titulo: "Diagnóstico Personalizado",
                descricao:
                  "Análise profunda das competências organizacionais, gaps de liderança e alinhamento com objetivos estratégicos",
                beneficios: [
                  "Mapeamento de competências críticas",
                  "Identificação de gaps de performance",
                  "Alinhamento com estratégia corporativa",
                ],
              },
              {
                numero: "2",
                titulo: "Desenho Sob Medida",
                descricao:
                  "Programas customizados (MBA Executivo, PDL, Pós Executiva) desenhados especificamente para os desafios da sua organização",
                beneficios: [
                  "Curadoria de conteúdo estratégico",
                  "Metodologia aplicada ao contexto corporativo",
                  "Flexibilidade de formatos e modalidades",
                ],
              },
              {
                numero: "3",
                titulo: "Desenvolvimento Estratégico",
                descricao:
                  "Corpo docente de mercado com experiência executiva, cases reais e aplicação prática imediata",
                beneficios: ["Professores executivos atuantes", "Cases corporativos reais", "Networking C-Level"],
              },
              {
                numero: "4",
                titulo: "Mensuração Contínua",
                descricao:
                  "Relatórios executivos com KPIs de performance, ROI comprovado e acompanhamento de aplicação prática",
                beneficios: [
                  "Dashboards executivos de performance",
                  "Indicadores de ROI mensuráveis",
                  "Acompanhamento de aplicação prática",
                ],
              },
            ]}
            textoBotao="Solicitar diagnóstico estratégico"
            onClickBotao={() => openAssistantWithFlow("consultor")}
            observacao="Metodologia validada por mais de 500 empresas que transformaram aprendizado em resultados mensuráveis"
          />
        </div>

        {/* Soluções Corporativas */}
        <Modalidades
          titulo="Escolha a solução que alinha desenvolvimento à estratégia da empresa"
          modalidades={[
            {
              badge: "MBA EXECUTIVO",
              titulo: "Desenvolvimento Estratégico de Lideranças Seniores",
              descricao: "Formação executiva completa para tomadores de decisão e lideranças C-Level",
              beneficios: [
                "Visão estratégica de negócios",
                "Networking executivo qualificado",
                "Cases corporativos reais",
                "Aplicação prática imediata",
                "Mensuração de ROI",
              ],
              onClick: () => openAssistantWithFlow("consultor"),
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
                "Relatórios executivos",
                "Impacto mensurável",
              ],
              onClick: () => openAssistantWithFlow("consultor"),
              buttonText: "Conhecer PDL",
            },
            {
              badge: "PÓS EXECUTIVA",
              titulo: "Especialização Estratégica para Tomadores de Decisão",
              descricao: "Aprofundamento em áreas estratégicas com foco em resultados e performance organizacional",
              beneficios: [
                "Especialização estratégica",
                "Professores de mercado",
                "Metodologia aplicada",
                "Flexibilidade de formatos",
                "ROI comprovado",
              ],
              onClick: () => openAssistantWithFlow("consultor"),
              buttonText: "Ver especializações",
            },
          ]}
          backgroundColor="bg-muted/30"
        />

        {/* Modalidades com Impacto Estratégico */}
        <Beneficios
          titulo="Formatos que fortalecem cultura e comprovam resultados"
          subtitulo="Escolha a modalidade que melhor se adapta à estratégia e cultura da sua organização"
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
                "Mentoria executiva presencial",
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
                "Acompanhamento contínuo",
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
                "Flexibilidade total",
              ],
            },
          ]}
          corFundo="bg-background"
        />

        {/* Resultados Estratégicos Comprovados */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empresas que escolheram o IPOG Enterprise reportaram ganhos reais de performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Resultados mensuráveis que comprovam o impacto estratégico da educação corporativa
            </p>
          </div>
        </section>

        {/* Impacto Estratégico Mensurável */}
        <section className="w-full py-12 md:py-16 bg-background">
          <Empregabilidade
            titulo="Impacto Estratégico Mensurável"
            estatisticas={[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                valor: "+70%",
                descricao: "Retenção de talentos pós-programa",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                valor: "+60%",
                descricao: "Aumento em performance de liderança",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                valor: "100%",
                descricao: "CEOs avaliaram positivamente o impacto estratégico",
              },
            ]}
            usarCarrossel={true}
            corFundo="bg-muted/30"
          />
        </section>

        {/* Depoimentos de CEOs e Diretores Executivos */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
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
            corFundo="bg-muted/30"
          />
        </section>

        {/* Autoridade e Credibilidade Executiva */}
        <section className="w-full py-12 md:py-16 bg-background">
          <Autoridade
            titulo="Curadoria executiva com o selo IPOG"
            subtitulo="Professores de mercado, cases corporativos e presença nacional. Mais de 500 empresas já transformaram sua cultura"
            credenciais={[
              { icone: <Award className="w-5 h-5" />, texto: "15 anos de excelência" },
              { icone: <Building2 className="w-5 h-5" />, texto: "500+ empresas atendidas" },
              { icone: <Users className="w-5 h-5" />, texto: "Presença nacional" },
              { icone: <CheckCircle2 className="w-5 h-5" />, texto: "Metodologia proprietária 6DS" },
              { icone: <Briefcase className="w-5 h-5" />, texto: "Professores executivos" },
              { icone: <TrendingUp className="w-5 h-5" />, texto: "ROI comprovado" },
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
            tituloProfessores="Conheça alguns de nossos professores executivos"
            backgroundColor="bg-muted/30"
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
          corFundo="bg-muted/30"
        />

        <Footer />
      </main>
    </>
  )
}
