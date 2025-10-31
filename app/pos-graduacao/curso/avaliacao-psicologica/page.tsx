import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { CursoRestritoBadge } from "@/components/curso-restrito-badge"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Brain } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function AvaliacaoPsicologicaPage() {
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
                { label: "Avaliação Psicológica" },
              ]}
            />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 pb-4">
          <CursoRestritoBadge requiredDegree="Psicologia" />
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
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: openAssistantForConsultor }}
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
              link: "#preco",
              buttonText: "Quero me inscrever",
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
            onClick: openAssistantForConsultor,
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />
        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher Avaliação Psicológica no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Especialização com foco em práticas avançadas, instrumentos atualizados e supervisão clínica de
                excelência.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Práticas Imersivas</h3>
                <p className="text-muted-foreground">
                  Supervisão de casos reais com instrumentos atualizados e reconhecidos pelo CFP.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Atuação Ampliada</h3>
                <p className="text-muted-foreground">
                  Capacitação para atuar em contextos clínicos, organizacionais, jurídicos e educacionais.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Corpo Docente Especializado</h3>
                <p className="text-muted-foreground">
                  Professores com ampla experiência em avaliação psicológica e atuação clínica.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto px-4 pb-4">
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
                Tire suas dúvidas sobre o curso, instrumentos e atuação profissional.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual é a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    A especialização tem duração de 18 meses, com carga horária reconhecida pelo MEC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Quais instrumentos vou aprender?</AccordionTrigger>
                  <AccordionContent>
                    Você aprenderá os principais instrumentos reconhecidos pelo CFP, incluindo testes de inteligência,
                    personalidade, neuropsicológicos e técnicas projetivas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Como funciona a supervisão?</AccordionTrigger>
                  <AccordionContent>
                    A supervisão é realizada com casos reais, com acompanhamento individualizado de professores
                    especialistas em avaliação psicológica.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Preciso ser psicólogo para fazer o curso?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Este curso é restrito a profissionais graduados em Psicologia com registro ativo no CRP.
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

        <div id="preco">
          <CtaFinal monthlyFee="R$ 399,00" duration="18 meses" totalCost="R$ 7.282,00" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
