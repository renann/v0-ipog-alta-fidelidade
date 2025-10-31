import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { Clock, Award, Zap, TrendingUp, Briefcase, Target } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function GestaoProjetosAgeisPage() {
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
                { label: "Gestão de Projetos Ágeis" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO"
          title="Lidere Projetos Ágeis e Entregue Resultados de Alto Impacto"
          description="Domine Scrum e Kanban em 40 horas de imersão prática e transforme sua gestão com um método validado pelo mercado."
          valueBadges={[
            { icon: <Zap className="h-5 w-5" />, text: "40h de imersão prática" },
            { icon: <Target className="h-5 w-5" />, text: "Ferramentas para aplicação imediata" },
            { icon: <Award className="h-5 w-5" />, text: "Certificação IPOG que o mercado reconhece" },
          ]}
          primaryCTA={{ text: "Garanta sua vaga", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Uma formação pensada para resultados imediatos</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Domine as metodologias ágeis mais utilizadas no mercado e transforme a forma como você gerencia projetos
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Aplicação no Dia Seguinte</h3>
                <p className="text-muted-foreground">
                  Aprenda hoje, aplique amanhã. Saia de cada aula com ferramentas e templates prontos para usar
                  imediatamente e gerar impacto no seu trabalho.
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Frameworks que o Mercado Usa</h3>
                <p className="text-muted-foreground">
                  Estude Scrum, Kanban e modelos híbridos com base em casos reais de sucesso, garantindo um aprendizado
                  conectado à prática que o mercado exige.
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Certificação com Peso de Mercado</h3>
                <p className="text-muted-foreground">
                  Receba um certificado com a chancela IPOG, uma marca com mais de 20 anos de história, que valida suas
                  competências e impulsiona seu currículo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modalidades
          title="O mesmo conteúdo, diferentes formatos para sua rotina"
          subtitle="O mesmo conteúdo, diferentes formatos de aprendizado"
          modalidades={[
            {
              badge: "EXTENSÃO",
              titulo: "EAD (Gravado)",
              descricao: "Para quem dita o próprio ritmo.",
              beneficios: [
                "Aulas gravadas disponíveis 24/7;",
                "Estude no seu ritmo;",
                "Suporte online com tutores;",
                "Certificação igual ao presencial.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "EXTENSÃO",
              titulo: "Ao Vivo (Online)",
              descricao: "Para quem busca trocas e networking em tempo real.",
              beneficios: [
                "Aulas online ao vivo;",
                "Interação direta com professor;",
                "Discussão de casos práticos;",
                "Networking com outros profissionais.",
              ],
              link: "#preco",
              buttonText: "Ver próximas turmas",
            },
          ]}
        />

        <Empregabilidade
          titulo="Resultados que Falam por Si"
          subtitulo="Profissionais com certificação em metodologias ágeis têm maior empregabilidade e salários mais altos"
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "92%",
              descricao: "dos alunos aplicam o conhecimento no trabalho",
              label: "APLICAÇÃO PRÁTICA*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "1 sem",
              descricao: "Resultados práticos na primeira semana",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+35%",
              descricao: "de impacto profissional médio após a certificação",
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
              titulo: "Fundamentos da Gestão Ágil",
              descricao:
                "Construa a base para uma mentalidade que entrega valor contínuo e saiba quando aplicar a abordagem ágil ou tradicional.",
              beneficios: ["Mindset ágil vs tradicional", "Quando usar cada abordagem"],
              badges: ["Módulo 1"],
            },
            {
              titulo: "Scrum na Prática",
              descricao:
                "Execute projetos complexos com o framework mais popular do mercado, dominando papéis, eventos e artefatos para garantir entregas no prazo.",
              beneficios: ["Sprint Planning, Daily, Review e Retrospectiva", "Product Backlog e Sprint Backlog"],
              badges: ["Módulo 2"],
            },
            {
              titulo: "Kanban e Fluxo Contínuo",
              descricao:
                "Otimize processos e aumente a eficiência da sua equipe com o Kanban, aprendendo a gerenciar o fluxo de trabalho de forma visual e contínua.",
              beneficios: ["Quadros Kanban e WIP limits", "Métricas de fluxo e lead time"],
              badges: ["Módulo 3"],
            },
            {
              titulo: "Projeto Prático Supervisionado",
              descricao:
                "Aplique Scrum ou Kanban em um desafio real do seu trabalho, com suporte de especialistas, e construa um case de sucesso para seu portfólio.",
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Formas de Pagamento</h2>
                <p className="text-muted-foreground">
                  Parcelamento flexível e descontos especiais para pagamento à vista.
                </p>
              </div>
              <MetodosPagamento />
            </div>
          </div>
        </section>

        <CtaFinal monthlyFee="R$ 279,00" duration="40 horas" totalCost="R$ 1.674,00" />
      </main>
      <Footer />
    </div>
  )
}
