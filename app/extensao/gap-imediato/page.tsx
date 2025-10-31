"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoGapImediato } from "@/components/gap-imediato/metodo-gap-imediato"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { ResultadosReais } from "@/components/resultados-reais"
import { EntregaveisGapImediato } from "@/components/gap-imediato/entregaveis-gap-imediato"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { Zap, Target, FileText, Clock, TrendingUp, Users, Award, Building } from "lucide-react"
import { Autoridade } from "@/components/autoridade"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function GapImediatoPage() {
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
                { label: "Gap Imediato" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="EXTENSÃO"
          title="Gap Imediato"
          description="Aprenda hoje, aplique amanhã. Resolva desafios técnicos urgentes com cursos práticos e ROI rápido."
          valueBadges={[
            { icon: <Zap className="h-5 w-5" />, text: "ROI Rápido" },
            { icon: <Target className="h-5 w-5" />, text: "Conteúdo 100% Prático" },
            { icon: <FileText className="h-5 w-5" />, text: "Templates Prontos" },
          ]}
          primaryCTA={{ text: "Ver cursos", href: "#cursos" }}
          secondaryCTA={{ text: "Falar com consultor", href: "#contato" }}
        />

        <section className="w-full py-12 md:py-16">
          <Dilema
            titulo="Você precisa de resultado agora, não daqui a 6 meses"
            subtitulo="Cursos práticos com aplicação imediata e ROI comprovado"
            dores={[
              {
                icon: <Clock className="h-5 w-5" />,
                titulo: "Urgência técnica",
                descricao: "Seu projeto não pode esperar uma pós-graduação de 18 meses",
                solucao: "Cursos de 3-4 meses focados no gap específico que você precisa resolver",
              },
              {
                icon: <Target className="h-5 w-5" />,
                titulo: "Teoria demais, prática de menos",
                descricao: "Você precisa aplicar, não apenas entender conceitos",
                solucao: "100% hands-on com templates prontos e casos reais do mercado",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                titulo: "ROI precisa ser rápido",
                descricao: "Investimento em educação precisa gerar retorno imediato",
                solucao: "Aplique na primeira semana e comprove resultados em até 30 dias",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodoGapImediato />
        </section>

        <section className="w-full py-12 md:py-16">
          <Cursos
            title="Escolha o curso que resolve seu desafio técnico agora"
            subtitle="Cursos focados em aplicação imediata com templates prontos e professores atuantes"
            badge="EXTENSÃO"
            cursos={[
              {
                nome: "Marketing Digital",
                duracao: "3 meses",
                descricao: "Estratégias e ferramentas atuais para resultados rápidos em campanhas digitais",
                modalidade: "EAD",
                link: "/extensao/curso/marketing-digital",
              },
              {
                nome: "Gestão de Pessoas",
                duracao: "4 meses",
                descricao: "Liderança prática para equipes de alta performance e gestão de conflitos",
                modalidade: "Ao Vivo",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
              {
                nome: "Compliance",
                duracao: "3 meses",
                descricao: "Conformidade e gestão de riscos aplicáveis imediatamente na sua empresa",
                modalidade: "Presencial",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
            ]}
            ctaText="Ver curso"
            ctaLink="/extensao/curso/marketing-digital"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Modalidades
            titulo="Formatos que entregam resultado rápido"
            subtitulo="Escolha a modalidade que melhor se adapta à sua rotina e necessidade de aplicação imediata"
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD",
                descricao: "Flexibilidade total e aplicação imediata",
                beneficios: [
                  "Estude no seu ritmo",
                  "Acesso 24/7 ao conteúdo",
                  "Suporte online dedicado",
                  "Templates prontos para download",
                ],
                buttonText: "Encontrar cursos EAD",
                link: "/catalogo?tipo=extensao&modalidade=ead",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Ao Vivo",
                descricao: "Tire dúvidas em tempo real com especialistas",
                beneficios: [
                  "Aulas ao vivo com professores",
                  "Gravações disponíveis após cada encontro",
                  "Troca com colegas de diversas áreas",
                  "Atividades práticas guiadas",
                ],
                buttonText: "Encontrar cursos Ao Vivo",
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Presencial",
                descricao: "Vivência prática e networking intensivo",
                beneficios: [
                  "Aulas práticas e discussões presenciais",
                  "Networking direto com profissionais do setor",
                  "Projetos aplicados em grupo",
                  "Certificação reconhecida pelo mercado",
                ],
                buttonText: "Encontrar cursos Presencial",
                link: "/catalogo?tipo=extensao&modalidade=presencial",
              },
            ]}
            backgroundColor="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <ResultadosReais
            titulo="Profissionais que resolveram desafios técnicos com rapidez"
            estatisticas={[
              {
                icon: <Zap className="h-8 w-8" />,
                valor: "92%",
                descricao: "aplicaram o conteúdo na primeira semana",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                valor: "80%",
                descricao: "relataram aumento de desempenho no trabalho",
              },
              {
                icon: <Target className="h-8 w-8" />,
                valor: "87%",
                descricao: "resolveram desafio técnico em até 30 dias",
              },
            ]}
            depoimentos={[
              {
                texto:
                  "Precisava implementar uma estratégia de marketing digital urgente. O curso me deu templates prontos e ferramentas práticas. Em 2 semanas já estava aplicando e vendo resultados reais na empresa.",
                autor: "Carlos Mendes",
                cargo: "Gerente de Marketing",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            titulo="Professores que vivem o mercado"
            subtitulo="Especialistas atuantes que trazem cases reais e soluções práticas"
            credenciais={[
              {
                icon: <Users className="h-5 w-5" />,
                texto: "Professores Atuantes no Mercado",
              },
              {
                icon: <Award className="h-5 w-5" />,
                texto: "Cases Reais de Sucesso",
              },
              {
                icon: <Building className="h-5 w-5" />,
                texto: "Certificação Reconhecida",
              },
            ]}
            professores={[
              {
                nome: "Prof. André Martins",
                area: "Marketing Digital",
                bio: "CMO de startup unicórnio. 15 anos liderando estratégias digitais em grandes empresas.",
              },
              {
                nome: "Profa. Juliana Rocha",
                area: "Gestão de Pessoas",
                bio: "Head de RH em multinacional. Especialista em cultura organizacional e liderança.",
              },
              {
                nome: "Dr. Fernando Lima",
                area: "Compliance",
                bio: "Advogado e consultor em governança. 20 anos implementando programas de compliance.",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <EntregaveisGapImediato />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            titulo="Aprenda hoje, aplique amanhã"
            descricao="Cursos práticos de 3-4 meses com templates prontos e ROI rápido. Resolva desafios técnicos urgentes com aplicação imediata."
            botaoPrimario={{
              texto: "Ver cursos",
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
