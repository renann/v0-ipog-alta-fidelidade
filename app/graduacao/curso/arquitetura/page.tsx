import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { FormasIngresso } from "@/components/formas-ingresso"
import { AcaoFinal } from "@/components/acao-final"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Ruler } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function ArquiteturaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <BreadcrumbWithItems
          items={[
            { label: "Início", href: "/" },
            { label: "Graduação", href: "/graduacao" },
            { label: "Arquitetura e Urbanismo" },
          ]}
        />
        <Hero
          badge="GRADUAÇÃO"
          title="Arquitetura e Urbanismo"
          description="Forme-se em Arquitetura e Urbanismo com visão criativa, técnica e sustentável, reconhecido pelo MEC."
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
              <h2 className="text-3xl font-bold mb-4">Por que escolher Arquitetura no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Formação completa com foco em projetos reais, tecnologias BIM e desenvolvimento sustentável.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Ruler className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Projetos Reais</h3>
                <p className="text-muted-foreground">
                  Desenvolva projetos arquitetônicos e urbanísticos desde o primeiro semestre com orientação
                  especializada.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Tecnologia BIM</h3>
                <p className="text-muted-foreground">
                  Domine as principais ferramentas do mercado: AutoCAD, Revit, SketchUp e softwares de renderização.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
                <p className="text-muted-foreground">
                  Foco em arquitetura sustentável, eficiência energética e certificações ambientais.
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
              valor: "88%",
              descricao: "empregados ou promovidos",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-7 m",
              descricao: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+55%",
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
              "O portfólio desenvolvido durante o curso foi essencial para conseguir meu primeiro projeto como arquiteto.",
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
              titulo: "Fundamentos da Arquitetura",
              descricao:
                "Base teórica em história da arquitetura, desenho técnico e introdução aos softwares de projeto",
              beneficios: [
                "Domínio de desenho técnico e representação gráfica",
                "Compreensão da evolução arquitetônica",
              ],
              badges: ["1º e 2º semestre"],
            },
            {
              titulo: "Projeto e Tecnologia",
              descricao:
                "Desenvolvimento de projetos arquitetônicos com foco em tecnologias construtivas e sistemas estruturais",
              beneficios: ["Projetos residenciais e comerciais", "Domínio de softwares BIM"],
              badges: ["3º e 4º semestre"],
            },
            {
              titulo: "Urbanismo e Sustentabilidade",
              descricao: "Planejamento urbano, paisagismo e arquitetura sustentável com projetos de impacto social",
              beneficios: ["Projetos urbanísticos", "Certificações ambientais"],
              badges: ["5º e 6º semestre"],
            },
            {
              titulo: "TFG e Estágios",
              descricao: "Trabalho Final de Graduação e estágios supervisionados em escritórios e construtoras",
              beneficios: ["Portfólio profissional completo", "Experiência em projetos reais"],
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
          titulo="Pronto para transformar espaços e criar o futuro?"
          subtitulo="Inscreva-se agora e garanta sua vaga no curso de Arquitetura e Urbanismo do IPOG"
          botaoPrimario={{
            texto: "Inscrever-se agora",
            href: "/catalogo?formacao=graduacao&curso=arquitetura",
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
