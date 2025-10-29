import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { CtaFinalCurso } from "@/components/cta-final-curso"

export default function AvaliacaoPsicologicaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-0">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Pós-Graduação", href: "/pos-graduacao" },
                { label: "Avaliação Psicológica" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="PÓS-GRADUAÇÃO"
          title="Avaliação Psicológica: Práticas Imersivas Avançadas"
          description="Especialize-se em avaliação psicológica com práticas avançadas e reconhecimento MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "18 meses" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#inscricao" }}
          secondaryCTA={{ text: "Baixar grade curricular", href: "#grade" }}
        />
        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="O mesmo curso, com diferentes formatos de aprendizado — escolha pelo seu ritmo, rotina e objetivos."
          modalidades={[
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem busca autonomia e flexibilidade total",
              beneficios: [
                "Estude no seu ritmo",
                "Conteúdos atualizados e interativos",
                "Tutoria online e suporte contínuo",
                "Certificação igual ao curso presencial",
              ],
              link: "#acao-final",
              buttonText: "Se inscrever",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza interação e networking",
              beneficios: [
                "Aulas presenciais com vivências práticas",
                "Interação direta com professores e colegas",
                "Estrutura moderna e laboratórios equipados",
                "Networking acadêmico e profissional",
              ],
              link: "#acao-final",
              buttonText: "Se inscrever",
            },
          ]}
        />
        <Trilha
          titulo="Trilha de Aprendizado"
          subtitulo="Conheça a estrutura do curso e como você vai evoluir ao longo da especialização"
          etapas={[
            {
              titulo: "Fundamentos da Avaliação",
              descricao: "Base teórica em técnicas e instrumentos de avaliação psicológica",
              beneficios: ["Compreensão dos principais testes psicológicos", "Ética e legislação em avaliação"],
              badges: ["1º ao 3º mês"],
            },
            {
              titulo: "Práticas Avançadas",
              descricao: "Aprofundamento em técnicas específicas e contextos de aplicação",
              beneficios: ["Avaliação neuropsicológica", "Laudos e pareceres técnicos"],
              badges: ["4º ao 9º mês"],
            },
            {
              titulo: "Imersão Prática",
              descricao: "Supervisão de casos reais e desenvolvimento de competências práticas",
              beneficios: ["Supervisão clínica especializada", "Estudos de caso complexos"],
              badges: ["10º ao 18º mês"],
              destaque: true,
            },
          ]}
          botaoCta={{
            texto: "Baixar grade curricular completa",
            href: "#grade",
            observacao: "PDF com detalhamento de todas as disciplinas",
          }}
          backgroundColor="bg-muted/30"
        />
        <Empregabilidade
          titulo="Empregabilidade após a especialização"
          subtitulo="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "87%",
              descricao: "promovidos ou recolocados",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "6-9 m",
              descricao: "para promoção",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+35%",
              descricao: "em média após formação",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas de mercado",
            "Indicações para vagas parceiras",
          ]}
          depoimento={{
            texto:
              "A especialização em avaliação psicológica abriu portas para atuar em contextos clínicos e organizacionais.",
            autor: "Aluno IPOG",
          }}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />
        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Formas de Pagamento</h2>
                <p className="text-muted-foreground">
                  Escolha a melhor opção para você. Parcelamento flexível e descontos especiais.
                </p>
              </div>
              <MetodosPagamento />
            </div>
          </div>
        </section>
        <section id="acao-final" className="w-full py-12 md:py-16 bg-muted/30">
          <div id="acao-final">
            <CtaFinalCurso
              titulo="Comece agora sua trajetória com o IPOG e faça parte de uma comunidade que acredita no poder do aprendizado transformador"
              descricao="Curso criado para quem busca protagonismo, com metodologia aplicada, professores de mercado e acompanhamento próximo em todas as etapas."
              taxaMatricula="R$ 100,00"
              mensalidade="R$ 449,00"
              duracao="18 meses"
              totalCurso="R$ 8.082,00"
              badge1="Cursos reconhecidos pelo MEC"
              badge2="Comunidade com +70 mil alunos"
              proximasTurmas="Próximas turmas iniciam em Novembro"
              prazoCondicoes="Garanta condições exclusivas até 30 de Outubro"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
