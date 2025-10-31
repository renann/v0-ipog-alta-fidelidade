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
          badge="EXTENSÃO IPOG"
          title="Atualização que vira resultado"
          description="Cursos curtos, práticos e certificados para fechar gaps, impulsionar recolocação e atualizar competências com agilidade."
          valueBadges={[
            { icon: <Zap className="w-5 h-5" />, text: "Aplicação Imediata" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "100% Prático" },
            { icon: <Award className="w-5 h-5" />, text: "Certificação Reconhecida" },
          ]}
          primaryCTA={{ text: "Ver cursos de Extensão", href: "/catalogo?tipo=extensao" }}
          secondaryCTA={{ text: "Falar com um consultor", onClick: openAssistantForConsultor }}
        />

        <section className="w-full py-12 md:py-16">
          <Dilema
            title="Precisa evoluir, mas falta tempo e clareza?"
            subtitle="No IPOG, a Extensão nasce para aplicar no dia seguinte — com entregáveis práticos e certificação reconhecida."
            dores={[
              {
                icon: <Zap className="h-5 w-5" />,
                titulo: "Muitos cursos parecidos, pouca aplicação real",
                solucao: "Conteúdo de mercado com aplicação imediata no trabalho.",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                titulo: "Agenda lotada e dificuldade de manter ritmo",
                solucao: "Formatos flexíveis que se adaptam à sua rotina.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                titulo: "Dúvida se o certificado tem peso e reconhecimento",
                solucao: "Certificação IPOG reconhecida nacionalmente.",
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
            title="Três formatos, mesma qualidade IPOG"
            subtitle="Transparência de entrega: carga horária, cronograma, materiais, entregáveis e certificação"
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD (gravado)",
                descricao: "Autonomia total e conteúdos on-demand.",
                beneficios: [
                  "Aulas gravadas disponíveis 24/7",
                  "Aprenda no seu ritmo",
                  "Materiais práticos para download",
                  "Certificação IPOG reconhecida",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ead",
                buttonText: "Ver cursos EAD",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Ao vivo (online)",
                descricao: "Interação em tempo real com docente e turma.",
                beneficios: [
                  "Aulas síncronas com especialistas",
                  "Tire dúvidas em tempo real",
                  "Networking com profissionais da área",
                  "Exercícios práticos com feedback",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
                buttonText: "Ver cursos Ao Vivo",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Presencial",
                descricao: "Imersão e networking para acelerar prática.",
                beneficios: [
                  "Experiência hands-on intensiva",
                  "Dinâmicas práticas e estudos de caso",
                  "Conexões presenciais fortes",
                  "Certificação imediata",
                ],
                link: "/catalogo?tipo=extensao&modalidade=presencial",
                buttonText: "Ver cursos Presencial",
              },
            ]}
            bgColor="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Cursos
            badge="CURSOS EM DESTAQUE"
            title="Encontre sua atualização"
            subtitle="Gestão & Operações • Tecnologia & Dados • Marketing & Vendas • Pessoas & Cultura"
            cursos={[
              {
                nome: "Gestão de Projetos Ágeis",
                duracao: "40h",
                descricao: "Aplique Scrum e Kanban na prática e gerencie projetos com agilidade e eficiência.",
                modalidade: "EAD • Presencial",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
              {
                nome: "Marketing Digital",
                duracao: "60h",
                descricao: "Domine estratégias digitais e transforme dados em resultados mensuráveis.",
                modalidade: "EAD • Ao Vivo",
                link: "/extensao/curso/marketing-digital",
              },
              {
                nome: "Inteligência Artificial Aplicada",
                duracao: "80h",
                descricao: "Implemente soluções de IA no seu negócio e automatize processos estratégicos.",
                modalidade: "Ao Vivo • Presencial",
                link: "/extensao/curso/inteligencia-artificial-aplicada",
              },
            ]}
            ctaText="Ver curso"
            footerCTA={{
              text: "Ver todos os cursos de Extensão",
              link: "/catalogo?formacao=extensao",
            }}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Jornadas
            title="Traga a página certa para o seu objetivo"
            jornadas={[
              {
                icon: <Zap className="h-6 w-6" />,
                titulo: "Gap Imediato",
                promessa: "Módulos intensivos para resolver lacunas críticas.",
                dores: "Preciso de uma competência específica agora para um projeto ou desafio urgente.",
                ganho: "Aprenda e aplique ferramentas e técnicas no mesmo dia.",
                cta: "Resolver gap agora",
                href: "/extensao/gap-imediato",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                titulo: "Recolocação",
                promessa: "Competências e portfólio para voltar ao mercado melhor.",
                dores: "Estou em transição e preciso de evidências práticas para entrevistas.",
                ganho: "Construa portfólio e certificação que validam sua expertise.",
                cta: "Acelerar recolocação",
                href: "/extensao/recolocacao",
              },
              {
                icon: <RefreshCw className="h-6 w-6" />,
                titulo: "Atualização",
                promessa: "Tendências, frameworks e ferramentas que importam.",
                dores: "Minha área evolui rápido e preciso me manter competitivo.",
                ganho: "Domine as novidades do mercado sem parar de trabalhar.",
                cta: "Manter-se atualizado",
                href: "/extensao/atualizacao",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <ResultadosReais
            title="O que muda quando você faz Extensão no IPOG"
            subtitle="Aplicação imediata, geração de evidência, mobilidade de carreira e rede de contatos"
            estatisticas={[
              {
                icone: <Zap className="w-8 h-8 text-primary" />,
                valor: "92%",
                descricao: "aplicaram no trabalho na primeira semana",
              },
              {
                icone: <BookOpen className="w-8 h-8 text-primary" />,
                valor: "85%",
                descricao: "geraram portfólio e projetos práticos",
              },
              {
                icone: <TrendingUp className="w-8 h-8 text-primary" />,
                valor: "78%",
                descricao: "obtiveram promoção ou transição de área",
              },
              {
                icone: <Users className="w-8 h-8 text-primary" />,
                valor: "50mil+",
                descricao: "profissionais na rede IPOG",
              },
            ]}
            depoimentos={[
              {
                tipo: "antes-depois",
                nome: "Profissional em Operações",
                cargo: "Egresso IPOG",
                antes: "Processos manuais e sem indicadores",
                depois: "Usei o material do curso já na semana seguinte",
                impacto: "Economizei horas e melhorei indicadores",
              },
              {
                tipo: "antes-depois",
                nome: "Profissional em Marketing",
                cargo: "Egressa IPOG",
                antes: "Fora do mercado há 6 meses",
                depois: "Entreguei um projeto-piloto do curso",
                impacto: "Voltei ao mercado em 30 dias",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            title="Quem faz, recomenda"
            subtitle="Docentes de mercado, entregáveis práticos e comunidade ativa de profissionais"
            credenciais={[
              {
                icone: <Users className="w-6 h-6 text-foreground" />,
                texto: "Docentes de mercado",
                descricao: "Profissionais atuantes que ensinam o que realmente funciona",
              },
              {
                icone: <BookOpen className="w-6 h-6 text-foreground" />,
                texto: "Entregáveis práticos",
                descricao: "Checklists, templates e projetos que viram portfólio",
              },
              {
                icone: <Award className="w-6 h-6 text-foreground" />,
                texto: "Certificação IPOG",
                descricao: "Reconhecimento nacional com indicação de carga horária",
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
            title="Pronto para fechar seu gap?"
            descricao="Escolha o tema, o formato e a data de início — comece a usar o que aprender desde a primeira aula."
            botaoPrimario={{
              texto: "Ver cursos de Extensão",
              href: "/catalogo?tipo=extensao",
            }}
            botaoSecundario={{
              texto: "Iniciar minha inscrição",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
