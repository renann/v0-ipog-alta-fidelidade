"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoPrimeiraPos } from "@/components/primeira-pos/metodo-primeira-pos"
import { Modalidades } from "@/components/modalidades"
import { Cursos } from "@/components/cursos"
import { ROIPrimeiraPos } from "@/components/primeira-pos/roi-primeira-pos"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { AplicacaoImediataPrimeiraPos } from "@/components/primeira-pos/aplicacao-imediata-primeira-pos"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { GraduationCap, Users, TrendingUp, DollarSign, BookOpen, Clock, Briefcase, Award, Building } from "lucide-react"
import { Autoridade } from "@/components/autoridade"
import { ResultadosReais } from "@/components/resultados-reais"
import dynamic from "next/dynamic"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

const PrimeiraPosContent = dynamic(
  () =>
    Promise.resolve(() => {
      const handleConsultorClick = () => {
        if (typeof window !== "undefined") {
          const event = new CustomEvent("openAssistant", {
            detail: { context: "consultor" },
          })
          window.dispatchEvent(event)
        }
      }

      return (
        <div className="min-h-screen bg-background">
          <Header />
          <main className="w-full">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Pós-Graduação", href: "/pos-graduacao" },
                { label: "Primeira Pós" },
              ]}
            />
            <Hero
              badge="PÓS-GRADUAÇÃO"
              title="Primeira Pós / Especialização"
              description="Torne-se especialista com quem forma líderes há mais de 20 anos."
              valueBadges={[
                { icon: <GraduationCap className="h-5 w-5" />, text: "Certificação MEC" },
                { icon: <Users className="h-5 w-5" />, text: "Professores de Mercado" },
                { icon: <TrendingUp className="h-5 w-5" />, text: "ROI Comprovado" },
              ]}
              primaryCTA={{ text: "Encontrar minha pós", href: "#cursos" }}
              secondaryCTA={{ text: "Falar com consultor", href: "#contato" }}
            />

            <Dilema
              titulo="Medo de investir e não ver retorno?"
              subtitulo="Você quer se especializar, mas teme investir tempo e dinheiro sem resultado"
              dores={[
                {
                  icon: <DollarSign className="h-5 w-5" />,
                  titulo: "Investimento incerto",
                  descricao: "Você quer se especializar, mas teme investir tempo e dinheiro sem resultado",
                  solucao: "ROI comprovado: 30% de aumento médio em 6 meses",
                },
                {
                  icon: <BookOpen className="h-5 w-5" />,
                  titulo: "Excesso de teoria",
                  descricao: "Preocupação com conteúdo distante da realidade do mercado",
                  solucao: "Metodologia prática: 85% aplicam em 30 dias",
                },
                {
                  icon: <Clock className="h-5 w-5" />,
                  titulo: "Falta de tempo",
                  descricao: "Rotina profissional intensa dificulta conciliar estudos",
                  solucao: "Modalidades flexíveis para sua rotina",
                },
              ]}
              ctaText="Tire suas dúvidas com um consultor"
              ctaAction={handleConsultorClick}
            />
            <MetodoPrimeiraPos />

            <Modalidades
              title="Compare as modalidades e escolha a que mais combina com você"
              subtitle="A mesma especialização de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
              modalidades={[
                {
                  badge: "PÓS-GRADUAÇÃO",
                  titulo: "EAD",
                  descricao: "Para quem busca flexibilidade sem abrir mão da qualidade",
                  beneficios: [
                    "Estude quando e onde quiser;",
                    "Conteúdo prático e aplicável ao mercado;",
                    "Mentoria online com especialistas;",
                    "Certificação reconhecida pelo MEC.",
                  ],
                  link: "/catalogo?tipo=pos-graduacao&modalidade=ead",
                  buttonText: "Encontrar cursos EAD",
                },
                {
                  badge: "PÓS-GRADUAÇÃO",
                  titulo: "Ao Vivo",
                  descricao: "Para quem quer interação em tempo real com flexibilidade",
                  beneficios: [
                    "Aulas online ao vivo com professores do mercado;",
                    "Interação em tempo real e networking;",
                    "Gravações disponíveis para revisão;",
                    "Projetos práticos e cases reais.",
                  ],
                  link: "/catalogo?tipo=pos-graduacao&modalidade=ao-vivo",
                  buttonText: "Encontrar cursos Ao Vivo",
                },
                {
                  badge: "PÓS-GRADUAÇÃO",
                  titulo: "Presencial",
                  descricao: "Para quem valoriza imersão e networking presencial",
                  beneficios: [
                    "Aulas presenciais com vivências práticas;",
                    "Networking qualificado com profissionais da área;",
                    "Estrutura moderna e laboratórios equipados;",
                    "Conexões que impulsionam sua carreira.",
                  ],
                  link: "/catalogo?tipo=pos-graduacao&modalidade=presencial",
                  buttonText: "Encontrar cursos Presencial",
                },
              ]}
              backgroundColor="bg-white"
            />

            <Cursos
              title="Especializações ideais para quem está começando"
              subtitle="Cursos pensados para profissionais em início de especialização"
              badge="PÓS-GRADUAÇÃO"
              cursos={[
                {
                  nome: "Avaliação Psicológica",
                  duracao: "18 meses",
                  descricao:
                    "Garanta uma competência fundamental para a psicologia e abra excelentes portas no mercado de trabalho.",
                  modalidade: "Ao Vivo",
                },
                {
                  nome: "Engenharia Estrutural e Fundações: Projeto e Modelagem",
                  duracao: "12 meses",
                  descricao:
                    "A escolha certa para transformar conhecimento técnico em protagonismo no canteiro de obras",
                  modalidade: "Presencial",
                },
                {
                  nome: "Intervenção ABA Aplicada ao TEA",
                  duracao: "12 meses",
                  descricao:
                    "Aprenda como orientar crianças e adultos diagnosticados com TEA e/ou deficiência intelectual, através da análise do comportamento aplicada (ABA).",
                  modalidade: "Ao Vivo",
                },
              ]}
              ctaText="Ver curso"
              backgroundColor="bg-muted/30"
            />

            <ROIPrimeiraPos />
            <Empregabilidade
              titulo="Empregabilidade que transforma carreiras"
              subtitulo="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
              estatisticas={[
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  valor: "87%",
                  descricao: "promovidos ou recolocados em 12 meses",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  valor: "6-9 meses",
                  descricao: "tempo médio para promoção",
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  valor: "+35%",
                  descricao: "aumento salarial médio",
                },
              ]}
              layoutEstatisticas="carousel"
              servicosCarreira={[
                "Revisão de currículo e LinkedIn",
                "Mentorias com especialistas de mercado",
                "Indicações para vagas parceiras",
              ]}
              botaoCta={{
                texto: "Fale com um Consultor de Carreira",
                onClick: handleConsultorClick,
              }}
              bgColor="bg-background"
            />
            <Trilha
              titulo="Sua trilha começa aqui"
              subtitulo="Veja onde sua primeira pós pode te levar"
              etapas={[
                {
                  numero: "1",
                  titulo: "Graduação",
                  descricao: "Base sólida e descoberta profissional",
                },
                {
                  numero: "2",
                  titulo: "Primeira Pós",
                  descricao: "Foco em especialização aplicada",
                  destaque: true,
                },
                {
                  numero: "3",
                  titulo: "MBA / Liderança",
                  descricao: "Consolidação estratégica",
                },
                {
                  numero: "4",
                  titulo: "IPOG+ (Lifelong)",
                  descricao: "Evolução contínua e comunidade Alumni+",
                },
              ]}
              botaoCta={{
                texto: "Monte sua trilha personalizada",
                onClick: handleConsultorClick,
              }}
            />
            <AplicacaoImediataPrimeiraPos />
            <Autoridade
              titulo="Quem forma especialistas há mais de 20 anos"
              subtitulo="Credibilidade construída com resultados comprovados e reconhecimento nacional"
              credenciais={[
                {
                  icon: <Award className="h-5 w-5" />,
                  texto: "20+ anos formando especialistas",
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  texto: "Professores de Mercado",
                },
                {
                  icon: <Building className="h-5 w-5" />,
                  texto: "Reconhecimento MEC",
                },
              ]}
              professores={[
                {
                  nome: "Dr. Ricardo Almeida",
                  area: "Avaliação Psicológica",
                  bio: "Psicólogo clínico há 18 anos. Doutor pela UFMG e supervisor de estágios.",
                  avatar: "RA",
                },
                {
                  nome: "Eng. Marcos Ferreira",
                  area: "Engenharia Estrutural",
                  bio: "Engenheiro civil com projetos em 5 países. Mestre pela Poli-USP.",
                  avatar: "MF",
                },
                {
                  nome: "Dra. Paula Costa",
                  area: "Intervenção ABA",
                  bio: "Especialista em TEA com 12 anos de atuação. Doutora pela UFRJ.",
                  avatar: "PC",
                },
              ]}
            />
            <ResultadosReais
              titulo="Resultados reais de quem começou com a primeira pós"
              subtitulo="Veja o impacto da especialização IPOG na carreira de profissionais como você"
              estatisticas={[
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  valor: "87%",
                  descricao: "promovidos ou recolocados em 12 meses",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  valor: "6-9 meses",
                  descricao: "tempo médio para promoção",
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  valor: "+35%",
                  descricao: "aumento salarial médio",
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  valor: "92%",
                  descricao: "recomendam a especialização",
                },
              ]}
              depoimentos={[
                {
                  nome: "Ana Paula Silva",
                  cargo: "Coordenadora de Projetos",
                  texto:
                    "A pós-graduação IPOG foi decisiva para minha primeira promoção. Em 3 meses já estava aplicando o conteúdo no meu trabalho.",
                },
                {
                  nome: "Carlos Eduardo",
                  cargo: "Analista Sênior",
                  texto:
                    "O networking e a qualidade dos professores fizeram toda a diferença. Consegui minha promoção em 6 meses.",
                },
              ]}
              tipoDepoimento="simples"
              bgColor="bg-muted/30"
            />
            <AcaoFinal
              titulo="Torne-se especialista com ROI comprovado"
              descricao="Primeira pós-graduação com metodologia prática, professores de mercado e certificação MEC. 30% de aumento médio em 6 meses."
              botaoPrimario={{
                texto: "Encontrar minha pós",
                href: "/catalogo?tipo=pos-graduacao",
              }}
              botaoSecundario={{
                texto: "Falar com consultor",
                onClick: handleConsultorClick,
              }}
            />
          </main>
          <Footer />
        </div>
      )
    }),
  { ssr: false },
)

export default function PrimeiraPosPage() {
  return <PrimeiraPosContent />
}
