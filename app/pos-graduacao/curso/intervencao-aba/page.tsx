import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CursoRestritoBadge } from "@/components/curso-restrito-badge"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Users } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { CtaFinal } from "@/components/cta-final"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function IntervencaoAbaPage() {
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
                { label: "Intervenção ABA Aplicada ao TEA" },
              ]}
            />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 pb-4">
          <CursoRestritoBadge requiredDegree="Psicologia" />
        </div>
        <Hero
          badge="PÓS-GRADUAÇÃO"
          title="Intervenção ABA Aplicada ao TEA"
          description="Especialize-se em Análise do Comportamento Aplicada (ABA) para intervenção em Transtorno do Espectro Autista."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "12 meses" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
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
              link: "#preco",
              buttonText: "Quero me inscrever",
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
        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher Intervenção ABA no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Especialização com foco em práticas baseadas em evidências para intervenção em TEA.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Prática Supervisionada</h3>
                <p className="text-muted-foreground">
                  Supervisão de casos reais com profissionais certificados em ABA e experiência em TEA.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Mercado em Expansão</h3>
                <p className="text-muted-foreground">
                  Alta demanda por profissionais qualificados em ABA em clínicas, escolas e atendimento domiciliar.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Certificação Reconhecida</h3>
                <p className="text-muted-foreground">
                  Curso alinhado com as diretrizes internacionais de certificação em ABA.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto px-4 pb-4">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre ABA</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o curso, metodologia e atuação profissional.
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
                  <AccordionTrigger className="text-left">O que é ABA?</AccordionTrigger>
                  <AccordionContent>
                    ABA (Applied Behavior Analysis) é a Análise do Comportamento Aplicada, uma abordagem científica
                    baseada em evidências para intervenção em TEA e outros transtornos do desenvolvimento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Como funciona a prática supervisionada?</AccordionTrigger>
                  <AccordionContent>
                    Você acompanhará casos reais com supervisão de profissionais certificados, desenvolvendo planos de
                    intervenção individualizados.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Preciso ser psicólogo?</AccordionTrigger>
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

        <CtaFinal monthlyFee="R$ 429,00" duration="12 meses" totalCost="R$ 5.248,00" />
      </main>
      <Footer />
    </div>
  )
}
