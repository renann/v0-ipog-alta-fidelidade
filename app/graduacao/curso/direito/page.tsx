import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { FormasIngresso } from "@/components/formas-ingresso"
import { AcaoFinal } from "@/components/acao-final"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Scale } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function DireitoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <BreadcrumbWithItems
          items={[{ label: "Início", href: "/" }, { label: "Graduação", href: "/graduacao" }, { label: "Direito" }]}
        />
        <Hero
          badge="GRADUAÇÃO"
          title="Direito"
          description="Forme-se em Direito com excelência acadêmica, corpo docente qualificado e reconhecimento MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade Total" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#inscricao" }}
          secondaryCTA={{ text: "Baixar grade curricular", href: "#grade" }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher Direito no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Formação completa com foco em prática jurídica, preparação para OAB e desenvolvimento de competências
                essenciais para o mercado.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Scale className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Preparação para OAB</h3>
                <p className="text-muted-foreground">
                  Metodologia focada na aprovação no Exame da Ordem com simulados e acompanhamento especializado.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Prática Jurídica</h3>
                <p className="text-muted-foreground">
                  Experiência prática desde o início com escritório modelo e casos reais supervisionados.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Corpo Docente de Elite</h3>
                <p className="text-muted-foreground">
                  Professores atuantes no mercado: juízes, promotores, advogados e desembargadores.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="O mesmo curso, com diferentes formatos de aprendizado — escolha pelo seu ritmo, rotina e objetivos."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem busca autonomia e flexibilidade total",
              beneficios: [
                "Estude no seu ritmo;",
                "Conteúdos atualizados e interativos;",
                "Tutoria online e suporte contínuo;",
                "Certificação igual ao curso presencial.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza interação e networking",
              beneficios: [
                "Aulas presenciais com vivências práticas;",
                "Interação direta com professores e colegas;",
                "Estrutura moderna e laboratórios equipados;",
                "Networking acadêmico e profissional.",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />

        <Empregabilidade
          titulo="Empregabilidade após a graduação"
          subtitulo="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "85%",
              descricao: "empregados ou promovidos",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "3-5 m",
              descricao: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+50%",
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
            texto: "A preparação para OAB e o networking foram fundamentais para minha aprovação e primeiro emprego.",
            autor: "Aluno IPOG",
          }}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa de interna."
          bgColor="bg-white"
        />

        <Trilha
          titulo="Trilha de Aprendizado"
          subtitulo="Conheça a estrutura do curso e como você vai evoluir ao longo da graduação"
          etapas={[
            {
              titulo: "Fundamentos do Direito",
              descricao:
                "Base teórica sólida em teoria geral do direito, direito constitucional e história do direito brasileiro",
              beneficios: [
                "Compreensão dos principais conceitos jurídicos",
                "Visão crítica sobre o sistema legal brasileiro",
              ],
              badges: ["1º e 2º semestre"],
            },
            {
              titulo: "Direito Privado e Público",
              descricao:
                "Aprofundamento em direito civil, penal, administrativo e tributário com análise de casos práticos",
              beneficios: ["Domínio das principais áreas do direito", "Análise de jurisprudência"],
              badges: ["3º e 4º semestre"],
            },
            {
              titulo: "Direito Processual e Prática",
              descricao:
                "Desenvolvimento de competências em processo civil, penal e trabalhista com prática em escritório modelo",
              beneficios: ["Experiência em peticionamento", "Simulações de audiências"],
              badges: ["5º e 6º semestre"],
            },
            {
              titulo: "Estágios e Preparação OAB",
              descricao:
                "Prática supervisionada em escritórios e órgãos públicos com preparação intensiva para o Exame da Ordem",
              beneficios: ["300h de estágio supervisionado", "Curso preparatório OAB incluso"],
              badges: ["7º ao 10º semestre"],
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

        <FormasIngresso />
        <AcaoFinal
          titulo="Pronto para começar sua carreira no Direito?"
          subtitulo="Inscreva-se agora e garanta sua vaga no curso de Direito do IPOG"
          botaoPrimario={{
            texto: "Inscrever-se agora",
            href: "/catalogo?formacao=graduacao&curso=direito",
          }}
          botaoSecundario={{
            texto: "Falar com consultor",
            onClick: "openAssistantForConsultor",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
