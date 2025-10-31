import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { PropostaValorPsicologia } from "@/components/curso-psicologia/proposta-valor-psicologia"
import { JornadaAcademicaPsicologia } from "@/components/curso-psicologia/jornada-academica-psicologia"
import { Modalidades } from "@/components/modalidades"
import { RetornoInvestimentoPsicologia } from "@/components/curso-psicologia/retorno-investimento-psicologia"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { FaqPsicologia } from "@/components/curso-psicologia/faq-psicologia"
import { GraduationCap, Clock, Award } from "lucide-react"
import { TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { FormasIngresso } from "@/components/formas-ingresso"

export default function PsicologiaEadPage() {
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
                { label: "Psicologia EAD" },
              ]}
            />
          </div>
        </div>
        {/* Fim da adição */}
        <Hero
          badge="GRADUAÇÃO"
          title="Psicologia EAD"
          description="Forme-se em Psicologia com flexibilidade, qualidade e reconhecimento MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade Total" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <PropostaValorPsicologia />
        <JornadaAcademicaPsicologia />
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
        <RetornoInvestimentoPsicologia />
        <Empregabilidade
          titulo="Matricule-se na Graduação IPOG"
          subtitulo="Projeção de evolução salarial após o curso, com base em faixas médias de mercado."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "82%",
              descricao: "empregados ou promovidos",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-6 m",
              descricao: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+45%",
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
              "Participei de uma feira de carreira promovida pelo IPOG e saí com meu primeiro estágio garantido. A conexão com o mercado é real.",
            autor: "Aluno IPOG",
          }}
          botaoCta={{
            texto: "Falar com consultor de carreira",
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
              titulo: "Fundamentos da Psicologia (1º e 2º semestre)",
              descricao:
                "Construa uma base sólida com o estudo das principais correntes teóricas, da Psicanálise à Análise do Comportamento, e compreenda as bases biológicas em Neuroanatomofisiologia.",
              beneficios: [
                "Compreensão dos principais conceitos e teorias",
                "Visão crítica sobre diferentes abordagens",
              ],
              badges: ["1º e 2º semestre"],
            },
            {
              titulo: "Processos e Avaliação (3º e 4º semestre)",
              descricao:
                "Aprofunde-se em Psicologia Social, Escolar e da Saúde Mental, dominando as primeiras Técnicas de Avaliação Psicológica para diagnósticos precisos.",
              beneficios: ["Domínio de instrumentos de avaliação", "Análise de casos práticos"],
              badges: ["3º e 4º semestre"],
            },
            {
              titulo: "Intervenções e Práticas (5º e 6º semestre)",
              descricao:
                "Desenvolva competências de atuação em Psicologia Organizacional e Institucional, aprendendo Técnicas de Grupo e iniciando os estágios básicos supervisionados.",
              beneficios: ["Experiência em supervisão clínica", "Projetos de intervenção comunitária"],
              badges: ["5º e 6º semestre"],
            },
            {
              titulo: "Estágios e TCC (7º ao 10º semestre)",
              descricao:
                "Aplique seu conhecimento em contextos reais com 800h de estágio supervisionado em áreas como Saúde Mental e Práticas Clínicas, enquanto desenvolve seu TCC com orientação individualizada.",
              beneficios: ["800h de estágio supervisionado", "Orientação individualizada para TCC"],
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

        <section className="w-full py-16 px-4" id="preco">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comece agora sua trajetória com o IPOG</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Curso criado para quem busca protagonismo, com metodologia aplicada, professores de mercado e
                acompanhamento próximo em todas as etapas.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-muted/30 p-8 rounded-lg">
              <div className="border-t pt-6">
                <h4 className="text-xl font-semibold mb-4">Taxa de matrícula</h4>
                <div className="bg-background p-6 rounded-lg mb-4">
                  <p className="text-lg font-semibold mb-2">R$ 100,00</p>
                  <p className="text-muted-foreground">
                    A matrícula garante sua qualificação e análise de perfil. Após aprovação, nossa equipe comercial
                    entrará em contato para apresentar as condições de mensalidade e formas de pagamento.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Informações do Curso</h4>
                  <p className="text-muted-foreground">Mensalidade: R$ 499,00</p>
                  <p className="text-muted-foreground">Duração: 5 anos • Total do curso: R$ 29.940,00</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Próximas turmas iniciam em <strong>Novembro</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Garanta condições exclusivas até <strong>30 de Outubro</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqPsicologia />
        <FormasIngresso />
      </main>
      <Footer />
    </div>
  )
}
