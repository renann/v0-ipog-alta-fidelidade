"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoRecolocacao } from "@/components/recolocacao/metodo-recolocacao"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { ResultadosReais } from "@/components/resultados-reais"
import { EntregaveisRecolocacao } from "@/components/recolocacao/entregaveis-recolocacao"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { Users, Briefcase, TrendingUp, Award, Building, Target, Zap } from "lucide-react"
import { Autoridade } from "@/components/autoridade"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function RecolocacaoPage() {
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
                { label: "Recolocação" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO"
          title="Faça da recolocação uma realidade"
          description="Formações práticas de extensão criadas para você conquistar nova vaga ou cargo. Explore os cursos que conectam seu perfil profissional a novas oportunidades de mercado."
          valueBadges={[
            { icon: <Target className="h-5 w-5" />, text: "Foco em Recolocação" },
            { icon: <Zap className="h-5 w-5" />, text: "Aplicação Imediata" },
            { icon: <Award className="h-5 w-5" />, text: "Certificação IPOG" },
          ]}
          primaryCTA={{ text: "Conhecer cursos para Recolocação", href: "/catalogo?tipo=extensao" }}
          secondaryCTA={{ text: "Agendar conversa", onClick: openAssistantForConsultor }}
        />

        <section className="w-full py-12 md:py-16">
          <Dilema
            title="Por que esta formação garante vantagem?"
            subtitle="Entregas do programa"
            problems={[
              {
                icon: <Target className="h-5 w-5" />,
                title: "Recolocação exige foco",
                description: "Nós entregamos habilidades que o mercado pede agora.",
                solution:
                  "Nossa metodologia acelera seu resultado: estudar hoje, aplicar amanhã. Formatos que respeitam seu momento profissional, sem pausa na sua rotina.",
              },
              {
                icon: <Briefcase className="h-5 w-5" />,
                title: "Módulos intensivos",
                description: "Focados em aplicação imediata.",
                solution:
                  "Formatos compatíveis com seu dia a dia — online, híbrido ou presencial. Coaching ou suporte para rede de contatos, currículo e entrevista.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Certificação reconhecida",
                description: "Com chancela IPOG, reconhecida no mercado.",
                solution:
                  "Certificação que valida suas novas competências e fortalece seu posicionamento profissional.",
              },
            ]}
          />
        </section>

        {/* 3. Método IPOG */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodoRecolocacao />
        </section>

        {/* 4. Cursos em Destaque */}
        <section className="w-full py-12 md:py-16">
          <Cursos
            title="Escolha o curso que abre portas para sua nova carreira"
            subtitle="Cursos práticos com projetos reais que se tornam parte do seu portfólio profissional"
            badge="EXTENSÃO"
            cursos={[
              {
                nome: "Marketing Digital",
                duracao: "4 meses",
                descricao:
                  "Reposicione-se em uma das áreas mais aquecidas do mercado com estratégias práticas e portfólio digital.",
                modalidade: "EAD",
                link: "/catalogo?tipo=extensao&modalidade=ead",
              },
              {
                nome: "Gestão de Pessoas",
                duracao: "4 meses",
                descricao:
                  "Lidere com empatia e propósito, desenvolvendo competências essenciais para cargos de liderança.",
                modalidade: "Ao Vivo",
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
              },
              {
                nome: "Compliance",
                duracao: "3 meses",
                descricao:
                  "Traga segurança e credibilidade ao seu perfil com conhecimento em governança e conformidade.",
                modalidade: "Presencial",
                link: "/catalogo?tipo=extensao&modalidade=presencial",
              },
            ]}
            ctaText="Ver curso"
            ctaLink="/catalogo?tipo=extensao"
            footerCTA={{
              text: "Ver todos os cursos disponíveis",
              link: "/catalogo?tipo=extensao",
            }}
          />
        </section>

        {/* 5. Modalidades Comparativas */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Modalidades
            title="Escolha o formato que se adapta à sua rotina"
            subtitle="O formato não é barreira, mas ferramenta para sua recolocação"
            modalities={[
              {
                badge: "EXTENSÃO",
                title: "EAD",
                description: "Flexibilidade e mentorias assíncronas para quem precisa conciliar tempo e requalificação",
                benefits: [
                  "Estude no seu ritmo e reveja aulas sempre que quiser",
                  "Conteúdos atualizados e interativos",
                  "Tutoria online com suporte contínuo",
                  "Certificação igual ao curso presencial",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ead",
                buttonText: "Encontrar cursos EAD",
              },
              {
                badge: "EXTENSÃO",
                title: "Ao Vivo",
                description: "Interação em tempo real com mentores para quem quer prática com suporte",
                benefits: [
                  "Aulas ao vivo com professores e mentores",
                  "Gravações disponíveis após cada encontro",
                  "Troca com colegas de diversas áreas",
                  "Atividades práticas guiadas",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
                buttonText: "Encontrar cursos Ao Vivo",
              },
              {
                badge: "EXTENSÃO",
                title: "Presencial",
                description: "Imersão intensiva e networking local para quem quer viver a experiência IPOG",
                benefits: [
                  "Aulas práticas e discussões presenciais",
                  "Networking direto com profissionais do setor",
                  "Projetos aplicados em grupo",
                  "Certificação reconhecida pelo mercado",
                ],
                link: "/catalogo?tipo=extensao&modalidade=presencial",
                buttonText: "Encontrar cursos Presencial",
              },
            ]}
          />
        </section>

        {/* 6. Resultados Comprovados */}
        <section className="w-full py-12 md:py-16">
          <ResultadosReais
            badge="Resultados Comprovados"
            title="Profissionais que se recolocaram com sucesso"
            subtitle="Histórias reais de transformação e retorno ao mercado com confiança"
            statistics={[
              {
                icon: <TrendingUp className="h-6 w-6" />,
                value: "89%",
                description: "alcançaram recolocação em até 6 meses",
              },
              {
                icon: <Briefcase className="h-6 w-6" />,
                value: "92%",
                description: "construíram portfólio validado durante o curso",
              },
              {
                icon: <Users className="h-6 w-6" />,
                value: "85%",
                description: "obtiveram novas oportunidades via networking",
              },
            ]}
            testimonials={[
              {
                type: "antes-depois",
                author: "Mariana Costa",
                role: "Gestão de Pessoas • Recolocada em 4 meses",
                avatar: "MC",
                rating: 5,
                before:
                  "Estava há 8 meses fora do mercado, sem portfólio atualizado e com dificuldade para mostrar minhas competências.",
                after:
                  "Construí um portfólio sólido durante o curso, fiz conexões valiosas e consegui uma posição de liderança em uma empresa que valoriza desenvolvimento humano. O IPOG foi essencial para minha recolocação.",
              },
            ]}
            backgroundColor="bg-muted/30"
          />
        </section>

        {/* 7. Ferramentas e Entregáveis */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <EntregaveisRecolocacao />
        </section>

        {/* 9. Autoridade */}
        <section className="w-full py-12 md:py-16">
          <Autoridade
            title="Mentores que entendem sua jornada"
            subtitle="Profissionais experientes que já passaram por recolocação e sabem como te guiar"
            credentials={[
              {
                icon: <Users className="h-5 w-5" />,
                text: "Mentores com Vivência em Recolocação",
              },
              {
                icon: <Award className="h-5 w-5" />,
                text: "Consultores de Carreira Certificados",
              },
              {
                icon: <Building className="h-5 w-5" />,
                text: "Rede de Empresas Parceiras",
              },
            ]}
            professors={[
              {
                name: "Profa. Beatriz Alves",
                area: "Marketing Digital",
                bio: "Passou por recolocação aos 45 anos. Hoje lidera equipe de marketing em multinacional.",
                avatar: "BA",
              },
              {
                name: "Prof. Roberto Santos",
                area: "Gestão de Pessoas",
                bio: "Consultor de carreira há 12 anos. Ajudou mais de 300 profissionais na recolocação.",
                avatar: "RS",
              },
              {
                name: "Dra. Camila Souza",
                area: "Compliance",
                bio: "Advogada e mentora de carreira. Especialista em transição profissional para área jurídica.",
                avatar: "CS",
              },
            ]}
          />
        </section>

        {/* 10. Ação Final */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            title="Quer ajuda personalizada?"
            description="Nosso time de consultoria está pronto para ajudar você a definir o curso ideal e entender as melhores condições."
            primaryButton={{
              text: "Quero ver os cursos",
              href: "/catalogo?tipo=extensao",
            }}
            secondaryButton={{
              text: "Agendar conversa",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
