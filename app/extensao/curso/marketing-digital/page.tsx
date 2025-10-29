"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { TrendingUp, Target, Award, Rocket, Zap } from "lucide-react"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function MarketingDigitalPage() {
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
                { label: "Gap Imediato", href: "/extensao/gap-imediato" },
                { label: "Marketing Digital" },
              ]}
            />
          </div>
        </div>
        {/* </CHANGE> */}

        <Hero
          badge="EXTENSÃO • 3 MESES"
          title="Marketing Digital"
          description="Estratégias e ferramentas atuais para resultados rápidos em campanhas digitais"
          valueBadges={[
            { icon: <TrendingUp className="h-5 w-5" />, text: "ROI Rápido" },
            { icon: <Target className="h-5 w-5" />, text: "100% Prático" },
            { icon: <Zap className="h-5 w-5" />, text: "Templates Prontos" },
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
                descricao: "Aprenda estratégias digitais no seu ritmo",
                beneficios: [
                  "Acesso 24/7 ao conteúdo",
                  "Templates e ferramentas prontas",
                  "Suporte de especialistas",
                  "Certificação reconhecida",
                ],
                buttonText: "Ver detalhes do curso",
                link: "/catalogo?curso=marketing-digital&modalidade=ead",
              },
            ]}
            backgroundColor="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Trilha
            titulo="Sua jornada em Marketing Digital"
            subtitulo="3 meses de estratégias práticas e resultados mensuráveis"
            etapas={[
              {
                numero: 1,
                titulo: "Fundamentos Digitais",
                descricao: "Domine os conceitos essenciais do marketing digital",
                duracao: "Mês 1",
                topicos: [
                  "Estratégia de marketing digital",
                  "Funis de conversão",
                  "Google Analytics e métricas",
                  "Primeira campanha prática",
                ],
              },
              {
                numero: 2,
                titulo: "Canais e Ferramentas",
                descricao: "Explore redes sociais, SEO e mídia paga",
                duracao: "Mês 2",
                topicos: [
                  "Social Media Marketing",
                  "SEO e marketing de conteúdo",
                  "Google Ads e Facebook Ads",
                  "Automação de marketing",
                ],
              },
              {
                numero: 3,
                titulo: "Otimização e Resultados",
                descricao: "Maximize ROI e apresente resultados",
                duracao: "Mês 3",
                topicos: [
                  "Análise de dados e otimização",
                  "Growth hacking",
                  "Projeto final com resultados reais",
                  "Certificação e portfólio",
                ],
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Empregabilidade
            titulo="Profissionais de marketing digital conquistam mais"
            subtitulo="Dados reais de quem domina estratégias digitais"
            estatisticas={[
              {
                icone: <TrendingUp className="h-8 w-8" />,
                valor: "89%",
                descricao: "aumentaram conversões",
                ganho: "+45% em resultados",
              },
              {
                icone: <Award className="h-8 w-8" />,
                valor: "82%",
                descricao: "conquistaram promoções",
                ganho: "+R$ 2.500/mês em média",
              },
              {
                icone: <Rocket className="h-8 w-8" />,
                valor: "91%",
                descricao: "aplicaram na primeira semana",
                ganho: "ROI imediato",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <CtaFinal monthlyFee="R$ 249,00" duration="2 meses" totalCost="R$ 598,00" />
        </section>
      </main>
      <Footer />
    </div>
  )
}
