"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoExtensao } from "@/components/extensao/metodo-extensao"
import { Modalidades } from "@/components/modalidades"
import { Cursos } from "@/components/cursos"
import { Jornadas } from "@/components/jornadas"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { Zap, TrendingUp, RefreshCw, Clock, Users, Award, BookOpen } from "lucide-react"
import { ResultadosReais } from "@/components/resultados-reais"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function ExtensaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Extensão" }]} />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO"
          title="Aprenda hoje, aplique amanhã"
          description="Cursos rápidos e práticos para profissionais que precisam de resultados imediatos. Desenvolva habilidades específicas com ROI comprovado"
          valueBadges={[
            { icon: "Zap", text: "ROI Rápido" },
            { icon: "Target", text: "100% Prático" },
            { icon: "Users", text: "Networking Ativo" },
          ]}
          primaryCTA={{ text: "Ver cursos de extensão", href: "/catalogo?tipo=extensao" }}
          secondaryCTA={{ text: "Falar com consultor" }}
        />

        <section className="w-full py-12 md:py-16">
          <Dilema
            titulo="O mercado não espera."
            subtitulo="Novas tecnologias, novas regras, novas exigências — e o tempo para se atualizar nunca é suficiente."
            dores={[
              {
                icon: <Zap className="h-5 w-5" />,
                titulo: "Precisa resolver rápido?",
                solucao: "Cursos de curta duração com aplicação imediata.",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                titulo: "Buscando recolocação?",
                solucao: "Portfólio prático e certificação reconhecida.",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                titulo: "Quer se atualizar?",
                solucao: "Conteúdo 100% atual, direto do mercado.",
              },
            ]}
            backgroundColor="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodoExtensao />
        </section>

        <section className="w-full py-12 md:py-16">
          <Modalidades
            title="Escolha o formato ideal para você"
            subtitle="Três modalidades, mesma qualidade e certificação IPOG"
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD",
                descricao: "Para quem precisa autonomia total e quer aprender no próprio ritmo.",
                beneficios: [
                  "Aulas gravadas e conteúdo prático;",
                  "Aplicação imediata no trabalho;",
                  "Suporte online;",
                  "Certificação igual ao curso presencial.",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ead",
                buttonText: "Encontrar cursos EAD",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Ao Vivo",
                descricao: "Para quem aprende melhor com interação e acompanhamento direto.",
                beneficios: [
                  "Aulas em tempo real;",
                  "Discussão com mentores e especialistas;",
                  "Exercícios aplicados com feedback;",
                  "Networking com colegas de área.",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
                buttonText: "Encontrar cursos Ao Vivo",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Presencial",
                descricao: "Para quem busca imersão e conexões presenciais.",
                beneficios: [
                  "Práticas em laboratório e dinâmicas de grupo;",
                  "Experiência intensiva e real;",
                  "Certificação imediata;",
                  "Rede local de contatos.",
                ],
                link: "/catalogo?tipo=extensao&modalidade=presencial",
                buttonText: "Encontrar cursos Presencial",
              },
            ]}
            bgColor="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Cursos
            badge="EXTENSÃO"
            titulo="Cursos de Extensão"
            subtitulo="Encontre o curso que resolve seu desafio agora"
            cursos={[
              {
                nome: "Gestão de Projetos Ágeis",
                duracao: "40h",
                descricao: "Aplique Scrum e Kanban na prática e gerencie projetos com agilidade e eficiência.",
                modalidade: "EAD • Ao Vivo • Presencial",
              },
              {
                nome: "Inteligência Artificial Aplicada",
                duracao: "60h",
                descricao: "Domine ferramentas de IA e aplique no seu dia a dia profissional com resultados imediatos.",
                modalidade: "EAD • Ao Vivo",
              },
              {
                nome: "Marketing Digital",
                duracao: "80h",
                descricao: "Estratégias práticas de marketing digital para impulsionar resultados e vendas.",
                modalidade: "EAD • Presencial",
              },
            ]}
            ctaText="Ver curso"
            ctaLink="/extensao/curso/gestao-projetos-ageis"
            footerCTA={{
              text: "Ver todos os cursos de Extensão",
              link: "/catalogo?formacao=Extensão",
            }}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Jornadas
            titulo="Três jornadas, um objetivo: resultado rápido"
            jornadas={[
              {
                icon: <Zap className="h-6 w-6" />,
                titulo: "Gap Imediato",
                promessa: "Aprenda a ferramenta ou técnica exata que você precisa aplicar esta semana.",
                dores: "Preciso resolver um desafio técnico urgente, mas não tenho tempo para uma formação longa.",
                ganho: "Domine habilidades específicas com aplicação imediata no trabalho.",
                cta: "Encontre seu curso",
                href: "/extensao/gap-imediato",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                titulo: "Recolocação",
                promessa: "Construa cases práticos e certificações que validam sua nova expertise.",
                dores: "Estou em transição de carreira e preciso de portfólio e confiança para entrevistas.",
                ganho: "Acelere sua recolocação com certificações reconhecidas e portfólio prático.",
                cta: "Acelere sua recolocação",
                href: "/extensao/recolocacao",
              },
              {
                icon: <RefreshCw className="h-6 w-6" />,
                titulo: "Atualização",
                promessa: "Domine as tendências atuais com cursos objetivos e certificação reconhecida.",
                dores: "Minha área evolui rápido e preciso me manter competitivo sem parar de trabalhar.",
                ganho: "Mantenha-se relevante no mercado com conhecimento atualizado.",
                cta: "Mantenha-se atualizado",
                href: "/extensao/atualizacao", // updated link from # to actual page URL
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <ResultadosReais
            titulo="Resultados mensuráveis, em semanas."
            subtitulo="Nossos alunos aplicam o conhecimento rapidamente e veem impacto real em suas carreiras"
            estatisticas={[
              {
                icone: <TrendingUp className="w-8 h-8 text-primary" />,
                valor: "92%",
                descricao: "aplicaram o conteúdo na primeira semana",
              },
              {
                icone: <Award className="w-8 h-8 text-primary" />,
                valor: "80%",
                descricao: "relataram melhoria de desempenho",
              },
              {
                icone: <Users className="w-8 h-8 text-primary" />,
                valor: "68%",
                descricao: "obtiveram reconhecimento interno ou promoção",
              },
              {
                icone: <Clock className="w-8 h-8 text-primary" />,
                valor: "8 semanas",
                descricao: "tempo médio de recolocação",
              },
            ]}
            depoimentos={[
              {
                tipo: "antes-depois",
                nome: "Ana Paula Silva",
                cargo: "Analista de Dados",
                antes: "Sem conhecimento em Power BI",
                depois: "Criou dashboards estratégicos em 2 semanas",
                impacto: "Promoção em 45 dias",
              },
              {
                tipo: "antes-depois",
                nome: "Carlos Mendes",
                cargo: "Gerente de Projetos",
                antes: "Gestão tradicional sem metodologias ágeis",
                depois: "Implementou Scrum na equipe",
                impacto: "Aumento de 40% na produtividade",
              },
            ]}
          />
        </section>
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            titulo="Certificação reconhecida nacionalmente"
            subtitulo="Professores que atuam no mercado. Rede de mais de 50 mil profissionais conectados pela prática"
            credenciais={[
              {
                icone: <Users className="w-6 h-6 text-foreground" />,
                texto: "Professores de mercado",
                descricao: "Especialistas atuantes que ensinam o que realmente funciona",
              },
              {
                icone: <BookOpen className="w-6 h-6 text-foreground" />,
                texto: "Conteúdo 100% prático",
                descricao: "Templates e ferramentas prontas para aplicação imediata",
              },
              {
                icone: <Award className="w-6 h-6 text-foreground" />,
                texto: "Certificação reconhecida",
                descricao: "Validação nacional que agrega valor ao seu currículo",
              },
            ]}
            professores={[
              {
                nome: "Dr. Roberto Silva",
                area: "Marketing Digital",
                bio: "15 anos de experiência em estratégias digitais para grandes empresas",
              },
              {
                nome: "Dra. Ana Costa",
                area: "Gestão de Pessoas",
                bio: "Especialista em liderança e desenvolvimento de equipes de alta performance",
              },
              {
                nome: "Dr. Paulo Mendes",
                area: "Compliance",
                bio: "Consultor em conformidade e gestão de riscos para empresas nacionais",
              },
            ]}
            bgColor="bg-muted/30"
          />
        </section>
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            titulo="Aprenda hoje, aplique amanhã"
            descricao="Cursos rápidos e práticos com ROI comprovado. Desenvolva habilidades específicas que o mercado valoriza"
            botaoPrimario={{
              texto: "Ver cursos de extensão",
              href: "/catalogo?tipo=extensao",
            }}
            botaoSecundario={{
              texto: "Falar com consultor",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
