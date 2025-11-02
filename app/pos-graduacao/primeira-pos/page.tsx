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
            <div className="w-full">
              <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
                <BreadcrumbWithItems
                  items={[
                    { label: "Início", href: "/" },
                    { label: "Pós-Graduação", href: "/pos-graduacao" },
                    { label: "Primeira Pós" },
                  ]}
                />
              </div>
            </div>
            <Hero
              badge="PÓS-GRADUAÇÃO"
              title="Especialize-se com Flexibilidade e Impacto Imediato"
              description="Aprenda com os líderes do mercado, construa um networking de alto nível e impulsione sua carreira com a chancela de uma das instituições mais reconhecidas do Brasil."
              valueBadges={[
                { icon: <GraduationCap className="h-5 w-5" />, text: "Certificação Reconhecida pelo MEC" },
                { icon: <Users className="h-5 w-5" />, text: "Docentes que são Referência no Mercado" },
                { icon: <TrendingUp className="h-5 w-5" />, text: "Retorno de Investimento Comprovado" },
              ]}
              primaryCTA={{ text: "Começar minha jornada", href: "#cursos" }}
              secondaryCTA={{ text: "Falar com consultor", href: "#contato" }}
            />

            <Dilema
              title="Medo de investir e não ver retorno na carreira?"
              subtitle="Você quer se especializar, mas teme investir tempo e dinheiro sem resultado concreto"
              problems={[
                {
                  icon: <DollarSign className="h-5 w-5" />,
                  title: "O Investimento que Acelera sua Carreira",
                  description:
                    "Sua especialização é um passo estratégico. No IPOG, ela se traduz em crescimento real e mensurável para sua trajetória profissional.",
                  solution: "ROI Comprovado: 89% dos nossos especialistas relatam avanço de cargo em até 6 meses.",
                },
                {
                  icon: <BookOpen className="h-5 w-5" />,
                  title: "Conhecimento Prático para Resultados Reais",
                  description:
                    "Nossa metodologia conecta você à prática que o mercado exige. O que você aprende em aula é aplicado diretamente nos seus desafios profissionais.",
                  solution: "Aplicação Imediata: 85% dos profissionais aplicam o conteúdo no trabalho em até 30 dias.",
                },
                {
                  icon: <Clock className="h-5 w-5" />,
                  title: "A Flexibilidade que sua Rotina Exige",
                  description:
                    "Concilie sua carreira, estudos e vida pessoal. Oferecemos modalidades de ensino desenhadas para se adaptar ao seu ritmo, sem abrir mão da excelência.",
                  solution: "Escolha entre os formatos EAD, Ao Vivo e Presencial e estude no seu tempo.",
                },
              ]}
              ctaText="Tire suas dúvidas com um consultor"
              ctaAction={handleConsultorClick}
            />
            <MetodoPrimeiraPos />

            <Modalidades
              title="Compare as modalidades e escolha a que mais combina com você"
              subtitle="A mesma especialização de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
              modalities={[
                {
                  badge: "PÓS-GRADUAÇÃO",
                  title: "EAD: Estude no seu Ritmo com Conteúdo Aplicado",
                  description: "Para quem busca flexibilidade sem abrir mão da qualidade",
                  benefits: [
                    "Flexibilidade total para conciliar com sua rotina profissional.",
                    "Conteúdo prático, pensado para aplicação imediata.",
                    "Acesso a professores especialistas e atuantes no mercado.",
                    "Certificação com o reconhecimento e a credibilidade do IPOG.",
                  ],
                  link: "/catalogo?tipo=pos-graduacao&modalidade=ead",
                  buttonText: "Encontrar cursos EAD",
                },
                {
                  badge: "PÓS-GRADUAÇÃO",
                  title: "Ao Vivo: Interação Real sem Sair de Casa",
                  description: "Para quem quer interação em tempo real com flexibilidade",
                  benefits: [
                    "Aulas online e ao vivo para interação direta com professores.",
                    "Networking dinâmico com colegas e especialistas em tempo real.",
                    "Disciplina de encontros semanais com a flexibilidade do online.",
                    "Aulas gravadas para consultar quando e onde quiser.",
                  ],
                  link: "/catalogo?tipo=pos-graduacao&modalidade=ao-vivo",
                  buttonText: "Encontrar cursos Ao Vivo",
                },
                {
                  badge: "PÓS-GRADUAÇÃO",
                  title: "Presencial: Networking de Alto Valor e Vivência Prática",
                  description: "Para quem valoriza imersão e networking presencial",
                  benefits: [
                    "Conexões reais e networking de alto nível com líderes de mercado.",
                    "Imersão completa com aulas e vivências práticas.",
                    "Acesso a laboratórios e infraestrutura de ponta.",
                    "Mentoria e orientação próxima de professores que impulsionam sua carreira.",
                  ],
                  link: "/catalogo?tipo=pos-graduacao&modalidade=presencial",
                  buttonText: "Encontrar cursos Presencial",
                },
              ]}
              backgroundColor="bg-white"
            />

            <Cursos
              title="Especializações Estratégicas para sua Carreira"
              subtitle="Descubra os cursos que te darão o protagonismo para assumir desafios mais complexos e se consolidar como referência na sua área."
              badge="PÓS-GRADUAÇÃO"
              cursos={[
                {
                  nome: "Avaliação Psicológica",
                  duracao: "18 meses",
                  descricao:
                    "Garanta uma competência fundamental para a psicologia e abra excelentes portas no mercado de trabalho.",
                  modalidade: "Ao Vivo",
                  link: "/pos-graduacao/curso/avaliacao-psicologica",
                },
                {
                  nome: "Engenharia Estrutural e Fundações: Projeto e Modelagem",
                  duracao: "12 meses",
                  descricao:
                    "A escolha certa para transformar conhecimento técnico em protagonismo no canteiro de obras",
                  modalidade: "Presencial",
                  link: "/pos-graduacao/curso/engenharia-estrutural",
                },
                {
                  nome: "Intervenção ABA Aplicada ao TEA",
                  duracao: "12 meses",
                  descricao:
                    "Aprenda como orientar crianças e adultos diagnosticados com TEA e/ou deficiência intelectual, através da análise do comportamento aplicada (ABA).",
                  modalidade: "Ao Vivo",
                  link: "/pos-graduacao/curso/intervencao-aba",
                },
              ]}
              ctaText="Ver curso"
              backgroundColor="bg-muted/30"
              footerCTA={{
                text: "Ver todos os cursos disponíveis",
                link: "/catalogo?tipo=pos-graduacao",
              }}
            />

            <ROIPrimeiraPos />
            <Empregabilidade
              title="Empregabilidade que transforma carreiras"
              subtitle="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
              statistics={[
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  value: "87%",
                  description: "promovidos ou recolocados em 12 meses",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  value: "6-9 meses",
                  description: "tempo médio para promoção",
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  value: "+35%",
                  description: "aumento salarial médio",
                },
              ]}
              statisticsLayout="carousel"
              careerServices={[
                "Revisão de currículo e LinkedIn",
                "Mentorias com especialistas de mercado",
                "Indicações para vagas parceiras",
              ]}
              ctaButton={{
                text: "Fale com um Consultor de Carreira",
                onClick: handleConsultorClick,
              }}
              bgColor="bg-background"
            />
            <Trilha
              title="Sua trilha começa aqui"
              subtitle="Veja onde sua primeira pós pode te levar"
              stages={[
                {
                  number: "1",
                  title: "Graduação",
                  description: "Base sólida e descoberta profissional",
                },
                {
                  number: "2",
                  title: "Primeira Pós",
                  description: "Foco em especialização aplicada",
                  highlight: true,
                },
                {
                  number: "3",
                  title: "MBA / Liderança",
                  description: "Consolidação estratégica",
                },
                {
                  number: "4",
                  title: "IPOG+ (Lifelong)",
                  description: "Evolução contínua e comunidade Alumni+",
                },
              ]}
              ctaButton={{
                text: "Monte sua trilha personalizada",
                onClick: handleConsultorClick,
              }}
            />
            <AplicacaoImediataPrimeiraPos />
            <Autoridade
              title="Aprenda com os Profissionais que Lideram o Mercado"
              subtitle="Nosso corpo docente não apenas ensina, mas atua, inova e transforma o mercado. Tenha acesso direto a quem faz a diferença."
              credentials={[
                {
                  icon: <Award className="h-5 w-5" />,
                  text: "20+ anos formando especialistas",
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  text: "Professores de Mercado",
                },
                {
                  icon: <Building className="h-5 w-5" />,
                  text: "Reconhecimento MEC",
                },
              ]}
              professors={[
                {
                  name: "Dr. Ricardo Almeida",
                  area: "Avaliação Psicológica",
                  bio: "Psicólogo clínico há 18 anos. Doutor pela UFMG e supervisor de estágios.",
                  avatar: "RA",
                },
                {
                  name: "Eng. Marcos Ferreira",
                  area: "Engenharia Estrutural",
                  bio: "Engenheiro civil com projetos em 5 países. Mestre pela Poli-USP.",
                  avatar: "MF",
                },
                {
                  name: "Dra. Paula Costa",
                  area: "Intervenção ABA",
                  bio: "Especialista em TEA com 12 anos de atuação. Doutora pela UFRJ.",
                  avatar: "PC",
                },
              ]}
            />
            <ResultadosReais
              title="A Prova Real do Impacto IPOG"
              subtitle="Veja como nossos especialistas transformam conhecimento em avanço profissional com resultados comprovados."
              statistics={[
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  value: "87%",
                  description: "promovidos ou recolocados em 12 meses",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  value: "6-9 meses",
                  description: "tempo médio para promoção",
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  value: "+35%",
                  description: "aumento salarial médio",
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  value: "92%",
                  description: "recomendam a especialização",
                },
              ]}
              testimonials={[
                {
                  name: "Ana Paula Silva",
                  role: "Coordenadora de Projetos",
                  text: "A pós-graduação IPOG foi decisiva para minha primeira promoção. Em 3 meses já estava aplicando o conteúdo no meu trabalho.",
                },
                {
                  name: "Carlos Eduardo",
                  role: "Analista Sênior",
                  text: "O networking e a qualidade dos professores fizeram toda a diferença. Consegui minha promoção em 6 meses.",
                },
              ]}
              type="simples"
              bgColor="bg-muted/30"
            />
            <AcaoFinal
              title="A escolha que conecta você ao sucesso."
              description="Invista em uma especialização com metodologia prática, networking de alto nível e a credibilidade de professores que são referência no mercado. Dê o próximo passo para transformar sua carreira."
              primaryButton={{
                text: "Começar minha jornada",
                href: "/catalogo?tipo=pos-graduacao",
              }}
              secondaryButton={{
                text: "Falar com consultor",
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
