"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { CtaFinal } from "@/components/cta-final"
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
          primaryCTA={{ text: "Inscrever-se no curso", href: "#preco" }}
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
                buttonText: "Ver detalhes do curso",
                link: "/catalogo?curso=ia-aplicada&modalidade=ead",
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

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <CtaFinal monthlyFee="R$ 299,00" duration="3 meses" totalCost="R$ 997,00" />
        </section>
      </main>
      <Footer />
    </div>
  )
}
