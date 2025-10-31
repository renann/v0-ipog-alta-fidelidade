"use client"
import { Header } from "@/components/header"
import { Dilema } from "@/components/dilema"
import { MetodoRecolocacao } from "@/components/recolocacao/metodo-recolocacao"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { ResultadosReais } from "@/components/resultados-reais"
import { EntregaveisRecolocacao } from "@/components/recolocacao/entregaveis-recolocacao"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { Users, Briefcase, FileQuestion, TrendingDown, TrendingUp, Award, Building } from "lucide-react"
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

        {/* 2. Dilema da Recolocação */}
        <section className="w-full py-12 md:py-16">
          <Dilema
            titulo="Voltar ao mercado sem portfólio atualizado é arriscado"
            subtitulo="Construa credibilidade com projetos reais e networking estratégico"
            dores={[
              {
                icon: <FileQuestion className="h-5 w-5" />,
                titulo: "Currículo desatualizado",
                descricao: "Experiência passada não comprova suas habilidades atuais",
                solucao: "Projetos práticos que se tornam portfólio comprovado para entrevistas",
              },
              {
                icon: <Users className="h-5 w-5" />,
                titulo: "Rede de contatos limitada",
                descricao: "Recolocação depende de quem você conhece, não apenas do que sabe",
                solucao: "Networking estruturado com profissionais ativos e mentoria de carreira",
              },
              {
                icon: <TrendingDown className="h-5 w-5" />,
                titulo: "Confiança abalada",
                descricao: "Tempo fora do mercado gera insegurança e dúvidas sobre suas capacidades",
                solucao: "Validação constante através de entregas reais e feedback de especialistas",
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
            titulo="Escolha o curso que abre portas para sua nova carreira."
            subtitulo="Cursos práticos com projetos reais que se tornam parte do seu portfólio profissional."
            badge="EXTENSÃO"
            cursos={[
              {
                nome: "Marketing Digital",
                duracao: "4 meses",
                descricao:
                  "Reposicione-se em uma das áreas mais aquecidas do mercado com estratégias práticas e portfólio digital.",
                modalidade: "EAD",
                link: "/extensao/curso/marketing-digital",
              },
              {
                nome: "Gestão de Pessoas",
                duracao: "4 meses",
                descricao:
                  "Lidere com empatia e propósito, desenvolvendo competências essenciais para cargos de liderança.",
                modalidade: "Ao Vivo",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
              {
                nome: "Compliance",
                duracao: "3 meses",
                descricao:
                  "Traga segurança e credibilidade ao seu perfil com conhecimento em governança e conformidade.",
                modalidade: "Presencial",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
            ]}
            ctaText="Ver curso"
            ctaLink="/catalogo?categoria=extensao"
          />
        </section>

        {/* 5. Modalidades Comparativas */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Modalidades
            titulo="Escolha o formato que se adapta à sua rotina."
            subtitulo="O formato não é barreira, mas ferramenta para sua recolocação."
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD",
                descricao: "Flexibilidade e mentorias assíncronas para quem precisa conciliar tempo e requalificação.",
                beneficios: [
                  "Estude no seu ritmo e reveja aulas sempre que quiser",
                  "Conteúdos atualizados e interativos",
                  "Tutoria online com suporte contínuo",
                  "Certificação igual ao curso presencial",
                ],
                link: "/catalogo?categoria=extensao&modalidade=ead",
                buttonText: "Encontrar cursos EAD",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Ao Vivo",
                descricao: "Interação em tempo real com mentores para quem quer prática com suporte.",
                beneficios: [
                  "Aulas ao vivo com professores e mentores",
                  "Gravações disponíveis após cada encontro",
                  "Troca com colegas de diversas áreas",
                  "Atividades práticas guiadas",
                ],
                link: "/catalogo?categoria=extensao&modalidade=ao-vivo",
                buttonText: "Encontrar cursos Ao Vivo",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Presencial",
                descricao: "Imersão intensiva e networking local para quem quer viver a experiência IPOG.",
                beneficios: [
                  "Aulas práticas e discussões presenciais",
                  "Networking direto com profissionais do setor",
                  "Projetos aplicados em grupo",
                  "Certificação reconhecida pelo mercado",
                ],
                link: "/catalogo?categoria=extensao&modalidade=presencial",
                buttonText: "Encontrar cursos Presencial",
              },
            ]}
          />
        </section>

        {/* 6. Resultados Comprovados */}
        <section className="w-full py-12 md:py-16">
          <ResultadosReais
            badge="Resultados Comprovados"
            titulo="Profissionais que se recolocaram com sucesso."
            subtitulo="Histórias reais de transformação e retorno ao mercado com confiança."
            estatisticas={[
              {
                icon: <TrendingUp className="h-6 w-6" />,
                valor: "89%",
                descricao: "alcançaram recolocação em até 6 meses",
              },
              {
                icon: <Briefcase className="h-6 w-6" />,
                valor: "92%",
                descricao: "construíram portfólio validado durante o curso",
              },
              {
                icon: <Users className="h-6 w-6" />,
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
            titulo="Mentores que entendem sua jornada"
            subtitulo="Profissionais experientes que já passaram por recolocação e sabem como te guiar"
            credenciais={[
              {
                icon: <Users className="h-5 w-5" />,
                texto: "Mentores com Vivência em Recolocação",
              },
              {
                icon: <Award className="h-5 w-5" />,
                texto: "Consultores de Carreira Certificados",
              },
              {
                icon: <Building className="h-5 w-5" />,
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
            titulo="Construa seu portfólio e retorne ao mercado com confiança"
            descricao="Projetos práticos, networking estratégico e mentoria de carreira. Recolocação com portfólio comprovado e validação constante."
            botaoPrimario={{
              texto: "Começar minha jornada",
              href: "/catalogo?categoria=extensao",
            }}
            botaoSecundario={{
              texto: "Falar com consultor de carreira",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
