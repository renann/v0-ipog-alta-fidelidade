import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
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
          title="Pós-graduação em Intervenção ABA: Lidere a transformação no TEA e Desenvolvimento Intelectual"
          description="Desenvolva programas terapêuticos eficazes e torne-se a referência que o mercado, as escolas e as famílias procuram para intervir no Transtorno do Espectro Autista e Desenvolvimento Intelectual."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Certificação reconhecida pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "432h de imersão teórica e prática" },
            { icon: <Award className="h-5 w-5" />, text: "Aprenda com Doutores e Mestres atuantes no mercado" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <Modalidades
          title="A excelência do IPOG no formato ideal para sua carreira"
          subtitle="Nossa metodologia conecta você à prática que o mercado exige, com a flexibilidade que sua rotina precisa. Escolha a modalidade e comece a transformar seu futuro."
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
          title="Sua jornada para se tornar um especialista em ABA"
          subtitle="Conheça a estrutura do curso e como você vai evoluir ao longo da especialização"
          etapas={[
            {
              numero: "1",
              titulo: "1º ao 3º Mês: Domínio dos Fundamentos",
              descricao:
                "Construa uma base sólida com os princípios da Análise do Comportamento Aplicada (ABA) e as especificidades do TEA, preparando-se para as etapas práticas.",
              beneficios: ["Princípios da Análise do Comportamento", "Características do TEA"],
              badges: ["1º ao 3º mês"],
            },
            {
              numero: "2",
              titulo: "4º ao 8º Mês: Desenvolvimento de Técnicas Avançadas",
              descricao:
                "Aprofunde-se em protocolos de avaliação e intervenção, aprendendo a elaborar Planos de Ensino Individualizados (PEI) e a gerenciar comportamentos de forma eficaz.",
              beneficios: ["Programas de ensino individualizado", "Manejo comportamental"],
              badges: ["4º ao 8º mês"],
            },
            {
              numero: "3",
              titulo: "9º ao 12º Mês: Domínio Clínico Supervisionado",
              descricao:
                "Valide sua expertise através da discussão de casos clínicos reais em vídeo e da construção de planos terapêuticos individualizados, com supervisão direta de especialistas para desenvolver a confiança e a competência técnica que o mercado exige.",
              beneficios: ["Supervisão de casos reais", "Elaboração de planos de intervenção"],
              badges: ["9º ao 12º mês"],
              destaque: true,
            },
          ]}
          textoBotao="Baixar grade curricular completa"
          observacao="PDF com detalhamento de todas as disciplinas"
          bgColor="bg-muted/30"
        />
        <Empregabilidade
          title="Resultados que impulsionam sua carreira:"
          subtitle="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "85%",
              descricao: "dos nossos alunos são promovidos ou se recolocam no mercado.",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-7 m",
              descricao: "para promoção",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+38%",
              descricao: "de aumento salarial em média após a formação.",
            },
          ]}
          layoutEstatisticas="carousel"
          servicos={[
            { texto: "Revisão de currículo e Linkedin" },
            { texto: "Mentorias com especialistas de mercado" },
            { texto: "Indicações para vagas parceiras" },
          ]}
          depoimento={{
            texto:
              "A especialização em ABA transformou minha prática clínica e abriu novas oportunidades profissionais.",
            autor: "Aluna IPOG, Pós-graduação.",
          }}
          botaoCTA={{
            texto: "Fale com um Consultor de Carreira",
          }}
          bgColor="bg-white"
        />
        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Diferenciais que conectam você ao sucesso profissional</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nossa pós-graduação foi desenhada para quem busca mais do que um diploma: uma verdadeira transformação
                de carreira, com foco em aplicabilidade e reconhecimento.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Metodologia com Prática Supervisionada</h3>
                <p className="text-muted-foreground">
                  Aplique seu conhecimento em casos clínicos reais e receba orientação de especialistas para construir
                  sua segurança e repertório técnico.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Diferenciação em um Mercado de Alta Demanda</h3>
                <p className="text-muted-foreground">
                  Prepare-se para atender à crescente procura por especialistas em ABA e posicione-se como um
                  profissional disputado em clínicas, escolas e atendimentos particulares.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Formação com a Chancela IPOG</h3>
                <p className="text-muted-foreground">
                  Receba uma certificação de uma das instituições mais reconhecidas do Brasil, com um currículo que une
                  rigor técnico e alinhamento às melhores práticas globais.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Aprenda com especialistas certificados em ABA</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nosso corpo docente é formado por psicólogos com certificação internacional em ABA, experiência clínica
                comprovada e atuação em casos de referência.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Certificação Internacional</h3>
                <p className="text-muted-foreground">
                  Professores com certificação BCBA (Board Certified Behavior Analyst) e formação em instituições de
                  referência mundial.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Experiência Clínica Comprovada</h3>
                <p className="text-muted-foreground">
                  Profissionais com anos de prática em intervenção ABA, atendendo casos complexos de TEA e
                  desenvolvimento intelectual.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Supervisão Individualizada</h3>
                <p className="text-muted-foreground">
                  Acompanhamento próximo em casos reais para desenvolver sua competência técnica e segurança
                  profissional.
                </p>
              </div>
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

        <CtaFinal
          title="IPOG: A escolha que conecta você ao sucesso."
          description="Faça parte de uma instituição com mais de 20 anos de história, corpo docente renomado e uma metodologia focada em resultados reais para a sua carreira."
          monthlyFee="R$ 429,00"
          duration="12 meses"
          totalCost="R$ 5.248,00"
          additionalInfo="O investimento na sua carreira começa com a taxa de matrícula, que garante sua qualificação no processo seletivo. Após a aprovação, nossa equipe de consultores de carreira apresentará as condições de mensalidade e os planos de pagamento, justificando o retorno sobre o investimento através da nossa metodologia de excelência."
        />
      </main>
      <Footer />
    </div>
  )
}
