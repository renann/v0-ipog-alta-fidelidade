import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { FormasIngresso } from "@/components/formas-ingresso"
import { CtaFinalCurso } from "@/components/cta-final-curso"
import { Clock, Award, Zap, TrendingUp, Briefcase, Target } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function GestaoProjetosAgeisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-0">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Extensão", href: "/extensao" },
                { label: "Gestão de Projetos Ágeis" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO"
          title="Gestão de Projetos Ágeis"
          description="Aplique Scrum e Kanban na prática e gerencie projetos com agilidade e eficiência em apenas 40 horas."
          valueBadges={[
            { icon: <Zap className="h-5 w-5" />, text: "40h de duração" },
            { icon: <Target className="h-5 w-5" />, text: "100% Prático" },
            { icon: <Award className="h-5 w-5" />, text: "Certificação IPOG" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#inscricao" }}
          secondaryCTA={{ text: "Baixar conteúdo programático", href: "#grade" }}
        />

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que este curso?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Domine as metodologias ágeis mais utilizadas no mercado e transforme a forma como você gerencia projetos
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Aplicação Imediata</h3>
                <p className="text-muted-foreground">
                  Ferramentas e templates prontos para usar no seu trabalho a partir da primeira aula
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Metodologias Validadas</h3>
                <p className="text-muted-foreground">
                  Aprenda Scrum, Kanban e frameworks híbridos com casos reais de empresas
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Certificação Reconhecida</h3>
                <p className="text-muted-foreground">
                  Certificado IPOG que valida suas competências em gestão ágil de projetos
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modalidades
          title="Escolha a modalidade ideal para você"
          subtitle="O mesmo conteúdo, diferentes formatos de aprendizado"
          modalidades={[
            {
              badge: "EXTENSÃO",
              titulo: "EAD",
              descricao: "Para quem busca autonomia e flexibilidade total",
              beneficios: [
                "Aulas gravadas disponíveis 24/7;",
                "Estude no seu ritmo;",
                "Suporte online com tutores;",
                "Certificação igual ao presencial.",
              ],
              link: "#acao-final",
              buttonText: "Se inscrever",
            },
            {
              badge: "EXTENSÃO",
              titulo: "Ao Vivo",
              descricao: "Para quem aprende melhor com interação em tempo real",
              beneficios: [
                "Aulas online ao vivo;",
                "Interação direta com professor;",
                "Discussão de casos práticos;",
                "Networking com outros profissionais.",
              ],
              link: "#acao-final",
              buttonText: "Se inscrever",
            },
          ]}
        />

        <Empregabilidade
          titulo="Impacto na carreira"
          subtitulo="Profissionais com certificação em metodologias ágeis têm maior empregabilidade e salários mais altos"
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "92%",
              descricao: "aplicaram no trabalho",
              label: "APLICAÇÃO PRÁTICA*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "1 sem",
              descricao: "para primeira aplicação",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+35%",
              descricao: "em média após certificação",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Templates de Scrum e Kanban prontos",
            "Acesso a comunidade de gestores ágeis",
            "Mentoria com especialistas certificados",
          ]}
          depoimento={{
            texto: "Implementei Scrum na minha equipe em 2 semanas e a produtividade aumentou 40%.",
            autor: "Aluno IPOG - Gestão de Projetos",
          }}
          botaoCta={{
            texto: "Falar com um Consultor",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />

        <Trilha
          titulo="Conteúdo Programático"
          subtitulo="Aprenda na prática as metodologias ágeis mais utilizadas no mercado"
          etapas={[
            {
              titulo: "Fundamentos de Gestão Ágil",
              descricao: "Entenda os princípios do Manifesto Ágil e quando aplicar metodologias ágeis",
              beneficios: ["Mindset ágil vs tradicional", "Quando usar cada abordagem"],
              badges: ["Módulo 1"],
            },
            {
              titulo: "Scrum na Prática",
              descricao: "Domine o framework Scrum com papéis, eventos e artefatos",
              beneficios: ["Sprint Planning, Daily, Review e Retrospectiva", "Product Backlog e Sprint Backlog"],
              badges: ["Módulo 2"],
            },
            {
              titulo: "Kanban e Fluxo Contínuo",
              descricao: "Implemente Kanban para visualizar e otimizar o fluxo de trabalho",
              beneficios: ["Quadros Kanban e WIP limits", "Métricas de fluxo e lead time"],
              badges: ["Módulo 3"],
            },
            {
              titulo: "Projeto Prático",
              descricao: "Aplique Scrum ou Kanban em um projeto real da sua empresa",
              beneficios: ["Mentoria individualizada", "Apresentação de resultados"],
              badges: ["Módulo 4"],
              destaque: true,
            },
          ]}
          botaoCta={{
            texto: "Baixar conteúdo programático completo",
            href: "#grade",
            observacao: "PDF com detalhamento de todos os módulos",
          }}
          backgroundColor="bg-muted/30"
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Formas de Pagamento</h2>
                <p className="text-muted-foreground">
                  Parcelamento flexível e descontos especiais para pagamento à vista.
                </p>
              </div>
              <MetodosPagamento />
            </div>
          </div>
        </section>

        <FormasIngresso />

        <div id="acao-final">
          <CtaFinalCurso
            titulo="Comece a gerenciar projetos com agilidade"
            descricao="Curso criado para quem busca aplicação imediata, com metodologia prática e certificação reconhecida pelo mercado."
            taxaMatricula="R$ 100,00"
            mensalidade="R$ 299,00"
            duracao="40 horas"
            totalCurso="R$ 1.196,00"
            badge1="Certificação IPOG reconhecida"
            badge2="Comunidade com +70 mil alunos"
            proximasTurmas="Próximas turmas iniciam em Novembro"
            prazoCondicoes="Garanta condições exclusivas até 30 de Outubro"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
