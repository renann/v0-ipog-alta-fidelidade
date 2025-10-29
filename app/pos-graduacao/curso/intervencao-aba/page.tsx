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

export default function IntervencaoAbaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <BreadcrumbWithItems
          items={[
            { label: "Início", href: "/" },
            { label: "Pós-Graduação", href: "/pos-graduacao" },
            { label: "Intervenção ABA Aplicada ao TEA" },
          ]}
        />
        <Hero
          badge="PÓS-GRADUAÇÃO"
          title="Intervenção ABA Aplicada ao TEA"
          description="Especialize-se em Análise do Comportamento Aplicada (ABA) para intervenção em Transtorno do Espectro Autista."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "12 meses" },
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
              titulo: "Ao Vivo",
              descricao: "Para quem busca interação em tempo real com flexibilidade",
              beneficios: [
                "Aulas online ao vivo",
                "Interação direta com professores",
                "Gravações disponíveis",
                "Networking com colegas de todo Brasil",
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
              titulo: "Fundamentos da ABA",
              descricao: "Base teórica em Análise do Comportamento Aplicada e TEA",
              beneficios: ["Princípios da Análise do Comportamento", "Características do TEA"],
              badges: ["1º ao 3º mês"],
            },
            {
              titulo: "Técnicas de Intervenção",
              descricao: "Desenvolvimento de habilidades práticas em intervenção ABA",
              beneficios: ["Programas de ensino individualizado", "Manejo comportamental"],
              badges: ["4º ao 8º mês"],
            },
            {
              titulo: "Prática Supervisionada",
              descricao: "Aplicação prática com supervisão especializada",
              beneficios: ["Supervisão de casos reais", "Elaboração de planos de intervenção"],
              badges: ["9º ao 12º mês"],
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
              valor: "85%",
              descricao: "promovidos ou recolocados",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-7 m",
              descricao: "para promoção",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+38%",
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
              "A especialização em ABA transformou minha prática clínica e abriu novas oportunidades profissionais.",
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
          <CtaFinalCurso
            titulo="Comece agora sua trajetória com o IPOG e faça parte de uma comunidade que acredita no poder do aprendizado transformador"
            descricao="Curso criado para quem busca protagonismo, com metodologia aplicada, professores de mercado e acompanhamento próximo em todas as etapas."
            taxaMatricula="R$ 100,00"
            mensalidade="R$ 479,00"
            duracao="12 meses"
            totalCurso="R$ 5.748,00"
            badge1="Cursos reconhecidos pelo MEC"
            badge2="Comunidade com +70 mil alunos"
            proximasTurmas="Próximas turmas iniciam em Novembro"
            prazoCondicoes="Garanta condições exclusivas até 30 de Outubro"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
