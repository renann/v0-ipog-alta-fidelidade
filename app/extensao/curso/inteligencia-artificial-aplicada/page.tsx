"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { CtaFinalCurso } from "@/components/cta-final-curso"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Brain, Zap, Target, TrendingUp, Award, Rocket } from "lucide-react"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function InteligenciaArtificialAplicadaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Extensão", href: "/extensao" },
                { label: "Atualização", href: "/extensao/atualizacao" },
                { label: "Inteligência Artificial Aplicada" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO • 4 MESES"
          title="Inteligência Artificial Aplicada"
          description="Domine IA generativa, automação e ferramentas emergentes para aplicação imediata no seu trabalho"
          valueBadges={[
            { icon: <Brain className="h-5 w-5" />, text: "IA Generativa" },
            { icon: <Zap className="h-5 w-5" />, text: "Automação Prática" },
            { icon: <Target className="h-5 w-5" />, text: "Aplicação Imediata" },
          ]}
          primaryCTA={{ text: "Inscrever-se no curso", href: "/catalogo?curso=ia-aplicada" }}
          secondaryCTA={{ text: "Falar com consultor", onClick: openAssistantForConsultor }}
        />

        <section className="w-full py-12 md:py-16">
          <Modalidades
            title="Escolha sua modalidade"
            subtitle="Curso disponível em formato EAD para máxima flexibilidade"
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD Gravado",
                descricao: "Aprenda no seu ritmo com conteúdo atualizado constantemente",
                beneficios: [
                  "Acesso 24/7 ao conteúdo e atualizações",
                  "Projetos práticos com IA generativa",
                  "Suporte de especialistas em IA",
                  "Certificação reconhecida pelo mercado",
                ],
                buttonText: "Se inscrever",
                link: "#acao-final",
              },
            ]}
            backgroundColor="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Trilha
            titulo="Sua jornada em IA Aplicada"
            subtitulo="4 meses de aprendizado prático com ferramentas de ponta"
            etapas={[
              {
                numero: 1,
                titulo: "Fundamentos de IA",
                descricao: "Entenda os conceitos essenciais e ferramentas de IA generativa",
                duracao: "Mês 1",
                topicos: [
                  "Introdução à IA e Machine Learning",
                  "ChatGPT e ferramentas de texto",
                  "Midjourney e geração de imagens",
                  "Primeiro projeto prático",
                ],
              },
              {
                numero: 2,
                titulo: "Automação com IA",
                descricao: "Automatize processos e aumente produtividade",
                duracao: "Mês 2-3",
                topicos: [
                  "Automação de workflows",
                  "Integração de APIs de IA",
                  "Análise de dados com IA",
                  "Projetos de automação reais",
                ],
              },
              {
                numero: 3,
                titulo: "Aplicação Estratégica",
                descricao: "Implemente IA no seu contexto profissional",
                duracao: "Mês 4",
                topicos: [
                  "Projeto final aplicado",
                  "Ética e governança em IA",
                  "Apresentação de resultados",
                  "Certificação e portfólio",
                ],
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Empregabilidade
            titulo="Profissionais com IA conquistam mais"
            subtitulo="Dados reais de quem domina ferramentas de IA"
            estatisticas={[
              {
                icone: <TrendingUp className="h-8 w-8" />,
                valor: "92%",
                descricao: "aumentaram produtividade no trabalho",
                ganho: "+40% de eficiência",
              },
              {
                icone: <Award className="h-8 w-8" />,
                valor: "85%",
                descricao: "conquistaram novas oportunidades",
                ganho: "+R$ 2.800/mês em média",
              },
              {
                icone: <Rocket className="h-8 w-8" />,
                valor: "88%",
                descricao: "se tornaram referência em IA",
                ganho: "Reconhecimento profissional",
              },
            ]}
          />
        </section>

        <section id="acao-final" className="w-full py-12 md:py-16 bg-muted/30">
          <CtaFinalCurso
            titulo="Domine IA e transforme sua carreira"
            descricao="Curso criado para quem busca aplicação imediata de IA, com ferramentas de ponta e metodologia prática."
            taxaMatricula="R$ 100,00"
            mensalidade="R$ 399,00"
            duracao="4 meses"
            totalCurso="R$ 1.696,00"
            badge1="Certificação IPOG reconhecida"
            badge2="Comunidade com +70 mil alunos"
            proximasTurmas="Próximas turmas iniciam em Novembro"
            prazoCondicoes="Garanta condições exclusivas até 30 de Outubro"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
