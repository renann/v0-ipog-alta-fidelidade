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
          title="A Competência que Você Precisa, com Aplicação Imediata"
          description="Cursos práticos e direcionados para você solucionar um déficit específico, aplicar o conhecimento na semana seguinte e comprovar o retorno do seu investimento."
          valueBadges={[
            { icon: <Zap className="h-5 w-5" />, text: "Aplicação Imediata" },
            { icon: <Target className="h-5 w-5" />, text: "Templates Prontos para Uso" },
            { icon: <FileText className="h-5 w-5" />, text: "ROI Comprovado" },
          ]}
          primaryCTA={{ text: "Conheça os cursos", href: "#cursos" }}
          secondaryCTA={{ text: "Comece sua jornada", href: "#contato" }}
        />

        <section className="w-full py-12 md:py-16">
          <Dilema
            title="Pressão por resultados imediatos?"
            subtitle="Nossos cursos são desenhados para gerar impacto rápido. Com aprendizado focado, você aplica o conhecimento imediatamente e justifica seu investimento com evidências."
            problems={[
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Falta de tempo para cursos longos?",
                description:
                  "Oferecemos soluções de curta duração que cabem na sua rotina. Estude com flexibilidade total, sem precisar pausar sua carreira.",
                solution: "Cursos de 3-4 meses focados no gap específico que você precisa resolver",
              },
              {
                icon: <Target className="h-5 w-5" />,
                title: "Teoria demais, prática de menos",
                description: "Você precisa aplicar, não apenas entender conceitos",
                solution: "100% hands-on com templates prontos e casos reais do mercado",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: "ROI precisa ser rápido",
                description: "Investimento em educação precisa gerar retorno imediato",
                solution: "Aplique na primeira semana e comprove resultados em até 30 dias",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodoGapImediato />
        </section>

        <section className="w-full py-12 md:py-16">
          <Cursos
            title="Conquiste as Competências para o Seu Próximo Desafio"
            subtitle="Nossos cursos são desenhados para entregar resultados concretos. Escolha a solução que vai impulsionar sua performance imediatamente."
            badge="EXTENSÃO"
            cursos={[
              {
                nome: "Marketing Digital",
                duracao: "3 meses",
                descricao:
                  "Resolva o desafio de gerar resultados rápidos em campanhas digitais. Domine ferramentas e estratégias atuais para otimizar seu investimento e comprovar o impacto das suas ações.",
                modalidade: "EAD",
                link: "/catalogo?tipo=extensao&modalidade=ead",
              },
              {
                nome: "Gestão de Pessoas",
                duracao: "4 meses",
                descricao:
                  "Desenvolva habilidades de liderança prática para engajar equipes, gerenciar conflitos e impulsionar a alta performance. Aplique técnicas imediatas para melhorar o clima e os resultados do seu time.",
                modalidade: "Ao Vivo",
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
              },
              {
                nome: "Compliance",
                duracao: "3 meses",
                descricao:
                  "Implemente programas de conformidade e gestão de riscos de forma ágil e eficaz. Adquira o conhecimento prático para proteger sua empresa e garantir a integridade dos processos desde o primeiro dia.",
                modalidade: "Presencial",
                link: "/catalogo?tipo=extensao&modalidade=presencial",
              },
            ]}
            ctaText="Ver curso"
            ctaLink="/extensao/curso/marketing-digital"
            footerCTA={{
              text: "Ver todos os cursos disponíveis",
              link: "/catalogo?tipo=extensao",
            }}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Modalidades
            title="Formatos que entregam resultado rápido"
            subtitle="Escolha a modalidade que melhor se adapta à sua rotina e necessidade de aplicação imediata"
            modalities={[
              {
                badge: "EXTENSÃO",
                title: "EAD",
                description: "Aprenda no seu ritmo, aplique na sua rotina",
                benefits: [
                  "Soluções que cabem na sua rotina, sem necessidade de deslocamento",
                  "Flexibilidade total com acesso 24/7 para estudar quando e onde quiser",
                  "Aprendizado focado no que gera impacto, com templates para uso imediato",
                  "Certificação universitária reconhecida",
                ],
                buttonText: "Encontrar cursos EAD",
                link: "/catalogo?tipo=extensao&modalidade=ead",
              },
              {
                badge: "EXTENSÃO",
                title: "Ao Vivo",
                description: "Valide suas soluções em tempo real com especialistas",
                benefits: [
                  "Acesso direto a profissionais de mercado para tirar dúvidas na hora",
                  "Feedback especializado que reduz riscos e elimina incertezas técnicas",
                  "Networking qualificado com profissionais em situações semelhantes",
                  "Gravações disponíveis para revisão",
                ],
                buttonText: "Encontrar cursos Ao Vivo",
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
              },
              {
                badge: "EXTENSÃO",
                title: "Presencial",
                description: "Domine habilidades em uma experiência imersiva",
                benefits: [
                  "Vivência hands-on intensiva em laboratórios com infraestrutura de ponta",
                  "Validação imediata de competências com suporte presencial de especialistas",
                  "Networking estruturado que acelera a aplicação do conhecimento no trabalho",
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
            title="Profissionais que resolveram desafios técnicos com rapidez"
            statistics={[
              {
                icon: <Zap className="h-8 w-8" />,
                value: "92%",
                description:
                  "dos profissionais aplicam o conhecimento já na primeira semana, transformando aprendizado em resultado imediato",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                value: "80%",
                description: "relataram aumento de desempenho no trabalho",
              },
              {
                icon: <Target className="h-8 w-8" />,
                value: "87%",
                description: "resolveram desafio técnico em até 30 dias",
              },
            ]}
            testimonials={[
              {
                text: "Precisava implementar uma estratégia de marketing digital urgente. O curso me deu templates prontos e ferramentas práticas. Em 2 semanas já estava aplicando e vendo resultados reais na empresa.",
                author: "Carlos Mendes",
                role: "Gerente de Marketing",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            title="Aprenda com quem Transforma o Mercado"
            subtitle="Especialistas atuantes que trazem cases reais e soluções práticas"
            credentials={[
              {
                icon: <Users className="h-5 w-5" />,
                text: "Metodologia Prática e Interativa",
              },
              {
                icon: <Award className="h-5 w-5" />,
                text: "Professores que são Referência no Mercado",
              },
              {
                icon: <Building className="h-5 w-5" />,
                text: "Certificação que Impulsiona sua Carreira",
              },
            ]}
            professors={[
              {
                name: "Prof. André Martins",
                area: "Marketing Digital",
                bio: "CMO em Startup Unicórnio. Especialista com mais de 15 anos de experiência liderando estratégias digitais em grandes empresas.",
              },
              {
                name: "Profa. Juliana Rocha",
                area: "Gestão de Pessoas",
                bio: "Head de RH em multinacional. Especialista em cultura organizacional e liderança.",
              },
              {
                name: "Dr. Fernando Lima",
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
            title="Pronto para transformar conhecimento em resultado?"
            description="IPOG: A escolha que conecta você ao sucesso."
            primaryButton={{
              text: "Comece sua jornada hoje mesmo",
              href: "/catalogo?tipo=extensao",
            }}
            secondaryButton={{
              text: "Falar com consultor",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
