import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { FormasIngresso } from "@/components/formas-ingresso"

export default function AdministracaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Graduação", href: "/graduacao" },
                { label: "Administração" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Administração"
          description="Forme-se em Administração e desenvolva competências estratégicas para liderar organizações e impulsionar resultados."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade Total" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", href: "#grade" }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher Administração no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Desenvolva uma visão estratégica e aprenda a gerir pessoas, processos e recursos com excelência.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Gestão Estratégica</h3>
                <p className="text-muted-foreground">
                  Aprenda a tomar decisões estratégicas baseadas em dados e análise de mercado.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Liderança e Pessoas</h3>
                <p className="text-muted-foreground">
                  Desenvolva habilidades de liderança e gestão de equipes de alto desempenho.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Empreendedorismo</h3>
                <p className="text-muted-foreground">
                  Aprenda a identificar oportunidades e desenvolver negócios inovadores.
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
                "Estude no seu ritmo",
                "Conteúdos atualizados e interativos",
                "Tutoria online e suporte contínuo",
                "Certificação igual ao curso presencial",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza interação e networking",
              beneficios: [
                "Aulas presenciais com cases reais",
                "Interação direta com professores e colegas",
                "Estrutura moderna e laboratórios equipados",
                "Networking acadêmico e profissional",
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
          depoimentos={[
            {
              texto:
                "A graduação em Administração no IPOG me preparou para o mundo real dos negócios. Aprendi com cases reais e professores que são executivos de grandes empresas. Hoje sou gerente em uma multinacional.",
              autor: "Pedro Henrique",
              cargo: "Gerente de Operações",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "O IPOG me deu a base que eu precisava para empreender. Durante a graduação desenvolvi meu plano de negócios e hoje tenho minha própria empresa com 30 funcionários. A metodologia prática foi essencial.",
              autor: "Larissa Martins",
              cargo: "CEO e Empreendedora",
            },
            {
              texto:
                "Entrei no IPOG como assistente administrativo e saí como analista. A formação me deu as competências que o mercado valoriza e em 6 meses após formado fui promovido a coordenador.",
              autor: "Gustavo Lima",
              cargo: "Coordenador Administrativo",
            },
          ]}
          servicosCarreira={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas de mercado",
            "Indicações para vagas parceiras",
          ]}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-background"
        />

        <Trilha
          titulo="Trilha de Aprendizado"
          subtitulo="Conheça a estrutura do curso e como você vai evoluir ao longo da graduação"
          etapas={[
            {
              titulo: "Fundamentos da Administração",
              descricao: "Base teórica em gestão, economia, contabilidade e fundamentos organizacionais",
              beneficios: ["Compreensão dos principais conceitos de gestão", "Visão sistêmica das organizações"],
              badges: ["1º e 2º semestre"],
            },
            {
              titulo: "Gestão de Processos e Pessoas",
              descricao: "Aprofundamento em gestão de recursos humanos, operações e processos organizacionais",
              beneficios: ["Técnicas de gestão de equipes", "Otimização de processos"],
              badges: ["3º e 4º semestre"],
            },
            {
              titulo: "Estratégia e Finanças",
              descricao:
                "Desenvolvimento de competências em planejamento estratégico, finanças corporativas e análise de investimentos",
              beneficios: ["Análise financeira avançada", "Planejamento estratégico"],
              badges: ["5º e 6º semestre"],
            },
            {
              titulo: "Empreendedorismo e TCC",
              descricao: "Desenvolvimento de projetos empreendedores e Trabalho de Conclusão de Curso",
              beneficios: ["Plano de negócios completo", "Orientação individualizada para TCC"],
              badges: ["7º e 8º semestre"],
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
            <MetodosPagamento />
          </div>
        </section>

        <FormasIngresso />
        <CtaFinal
          title="Invista na sua carreira com a instituição que é referência nacional."
          description="Taxa de Inscrição: R$ 100,00 | Mensalidades: a partir de R$ 549,00+"
          enrollmentFee="R$ 100,00"
          monthlyFee="R$ 549,00"
          duration="4 anos"
          totalCost="R$ 26.352,00"
          nextClassDate="Novembro"
          promotionDeadline="30 de Outubro"
        />
      </main>
      <Footer />
    </div>
  )
}
