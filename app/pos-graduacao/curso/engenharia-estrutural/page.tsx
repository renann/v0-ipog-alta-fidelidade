import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Building2 } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { CtaFinal } from "@/components/cta-final"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function EngenhariaEstruturalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Pós-Graduação", href: "/pos-graduacao" },
                { label: "Engenharia Estrutural e Fundações" },
              ]}
            />
          </div>
        </div>
        {/* */}
        <Hero
          badge="PÓS-GRADUAÇÃO"
          title="Engenharia Estrutural e Fundações"
          description="Especialize-se em projetos estruturais e fundações com práticas avançadas e reconhecimento MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "12 meses" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: openAssistantForConsultor }}
        />
        {/* </CHANGE> */}
        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="O mesmo curso, com diferentes formatos de aprendizado — escolha pelo seu ritmo, rotina e objetivos."
          modalidades={[
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
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />
        <Trilha
          titulo="Trilha de Aprendizado"
          subtitulo="Conheça a estrutura do curso e como você vai evoluir ao longo da especialização"
          etapas={[
            {
              titulo: "Fundamentos Estruturais",
              descricao: "Base teórica em análise estrutural e dimensionamento",
              beneficios: ["Análise de estruturas de concreto e aço", "Normas técnicas e legislação"],
              badges: ["1º ao 3º mês"],
            },
            {
              titulo: "Projetos Avançados",
              descricao: "Desenvolvimento de projetos estruturais complexos",
              beneficios: ["Modelagem computacional", "Projetos de fundações especiais"],
              badges: ["4º ao 8º mês"],
            },
            {
              titulo: "Práticas Profissionais",
              descricao: "Aplicação prática em projetos reais e estudos de caso",
              beneficios: ["Supervisão de projetos", "Análise de patologias estruturais"],
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
              valor: "90%",
              descricao: "promovidos ou recolocados",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "5-8 m",
              descricao: "para promoção",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+40%",
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
            texto: "A especialização me capacitou para liderar projetos estruturais de grande porte.",
            autor: "Aluno IPOG",
          }}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />
        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher Engenharia Estrutural no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Especialização com foco em projetos complexos, softwares avançados e práticas de mercado.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Building2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Projetos Reais</h3>
                <p className="text-muted-foreground">
                  Desenvolvimento de projetos estruturais complexos com supervisão de engenheiros experientes.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Softwares Avançados</h3>
                <p className="text-muted-foreground">
                  Domínio de ferramentas como SAP2000, TQS, Eberick e softwares de análise estrutural.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Normas Atualizadas</h3>
                <p className="text-muted-foreground">
                  Curso alinhado com as normas técnicas brasileiras (NBR) e práticas internacionais.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Formas de Pagamento</h2>
                <p className="text-muted-foreground">
                  Escolha a melhor opção para você. Parcelamento flexível e descontos especiais.
                </p>
              </div>
              <MetodosPagamento />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre a especialização</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o curso, softwares e atuação profissional.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual é a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    A especialização tem duração de 12 meses, com carga horária reconhecida pelo MEC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Quais softwares vou aprender?</AccordionTrigger>
                  <AccordionContent>
                    Você aprenderá SAP2000, TQS, Eberick e outros softwares essenciais para análise e dimensionamento
                    estrutural.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Como funcionam os projetos práticos?</AccordionTrigger>
                  <AccordionContent>
                    Você desenvolverá projetos estruturais completos com supervisão de engenheiros experientes,
                    incluindo análise, dimensionamento e detalhamento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Preciso ser engenheiro civil?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Este curso é voltado para engenheiros civis e profissionais da área de estruturas com registro
                    no CREA.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#contato">Conversar com um Consultor Acadêmico</a>
              </Button>
            </div>
          </div>
        </section>

        <CtaFinal monthlyFee="R$ 449,00" duration="12 meses" totalCost="R$ 5.488,00" />
      </main>
      <Footer />
    </div>
  )
}
