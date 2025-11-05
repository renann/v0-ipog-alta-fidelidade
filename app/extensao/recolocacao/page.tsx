"use client"
import { HomeHeader } from "@/components/home-header"
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
      <HomeHeader />
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
            dores={[
              {
                icon: <Target className="h-5 w-5" />,
                titulo: "Recolocação exige foco",
                descricao: "Nós entregamos habilidades que o mercado pede agora.",
                solucao:
                  "Nossa metodologia acelera seu resultado: estudar hoje, aplicar amanhã. Formatos que respeitam seu momento profissional, sem pausa na sua rotina.",
              },
              {
                icon: <Briefcase className="h-5 w-5" />,
                titulo: "Módulos intensivos",
                descricao: "Focados em aplicação imediata.",
                solucao:
                  "Formatos compatíveis com seu dia a dia — online, híbrido ou presencial. Coaching ou suporte para rede de contatos, currículo e entrevista.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                titulo: "Certificação reconhecida",
                descricao: "Com chancela IPOG, reconhecida no mercado.",
                solucao: "Certificação que valida suas novas competências e fortalece seu posicionamento profissional.",
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
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD",
                descricao: "Flexibilidade e mentorias assíncronas para quem precisa conciliar tempo e requalificação",
                beneficios: [
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
                titulo: "Ao Vivo",
                descricao: "Interação em tempo real com mentores para quem quer prática com suporte",
                beneficios: [
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
                titulo: "Presencial",
                descricao: "Imersão intensiva e networking local para quem quer viver a experiência IPOG",
                beneficios: [
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
            estatisticas={[
              {
                icone: <TrendingUp className="h-6 w-6" />,
                valor: "89%",
                descricao: "alcançaram recolocação em até 6 meses",
              },
              {
                icone: <Briefcase className="h-6 w-6" />,
                valor: "92%",
                descricao: "construíram portfólio validado durante o curso",
              },
              {
                icone: <Users className="h-6 w-6" />,
                valor: "85%",
                descricao: "obtiveram novas oportunidades via networking",
              },
            ]}
            depoimentos={[
              {
                tipo: "antes-depois",
                autor: "Mariana Costa",
                cargo: "Gestão de Pessoas • Recolocada em 4 meses",
                avatar: "MC",
                rating: 5,
                antes:
                  "Estava há 8 meses fora do mercado, sem portfólio atualizado e com dificuldade para mostrar minhas competências.",
                depois:
                  "Construí um portfólio sólido durante o curso, fiz conexões valiosas e consegui uma posição de liderança em uma empresa que valoriza desenvolvimento humano. O IPOG foi essencial para minha recolocação.",
              },
              {
                tipo: "simples",
                texto:
                  "Após 10 meses desempregado, o curso me deu as ferramentas e a confiança que eu precisava. Em 3 meses consegui uma posição melhor do que a anterior.",
                autor: "Paulo Henrique",
                cargo: "Especialista em Marketing Digital",
              },
              {
                tipo: "video",
                nome: "Juliana Martins",
                cargo: "Analista de Compliance",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                thumbnail: "/placeholder.svg?height=400&width=600",
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
            credenciais={[
              {
                icone: <Users className="h-5 w-5" />,
                texto: "Mentores com Vivência em Recolocação",
              },
              {
                icone: <Award className="h-5 w-5" />,
                texto: "Consultores de Carreira Certificados",
              },
              {
                icone: <Building className="h-5 w-5" />,
                texto: "Rede de Empresas Parceiras",
              },
            ]}
            professores={[
              {
                nome: "Profa. Beatriz Alves",
                area: "Marketing Digital",
                bio: "Passou por recolocação aos 45 anos. Hoje lidera equipe de marketing em multinacional.",
                avatar: "BA",
              },
              {
                nome: "Prof. Roberto Santos",
                area: "Gestão de Pessoas",
                bio: "Consultor de carreira há 12 anos. Ajudou mais de 300 profissionais na recolocação.",
                avatar: "RS",
              },
              {
                nome: "Dra. Camila Souza",
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
            titulo="Quer ajuda personalizada?"
            descricao="Nosso time de consultoria está pronto para ajudar você a definir o curso ideal e entender as melhores condições."
            botaoPrimario={{
              texto: "Quero ver os cursos",
              href: "/catalogo?tipo=extensao",
            }}
            botaoSecundario={{
              texto: "Agendar conversa",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
