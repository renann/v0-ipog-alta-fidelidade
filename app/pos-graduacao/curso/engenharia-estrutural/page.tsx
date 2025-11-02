import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Building2, Users } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { CtaFinal } from "@/components/cta-final"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

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
          title="Pós-Graduação em Engenharia Estrutural e Fundações"
          description="Domine projetos complexos e acelere sua carreira com uma especialização que conecta você à prática, ao mercado e a um networking de alto nível."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Certificação Reconhecida pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Formação em 12 Meses" },
            { icon: <Award className="h-5 w-5" />, text: "Professores que são Referência de Mercado" },
          ]}
          primaryCTA={{ text: "Garanta sua vaga", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        {/* </CHANGE> */}
        <Modalidades
          title="Escolha a modalidade ideal para sua rotina"
          subtitle="A mesma excelência e corpo docente, em formatos pensados para impulsionar sua carreira sem comprometer sua carreira ou sua rotina pessoal."
          modalidades={[
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "Modalidade Presencial",
              descricao: "Acelere sua carreira com networking presencial e aprendizado prático.",
              beneficios: [
                "Aulas com aplicação prática em laboratórios modernos.",
                "Interação direta para tirar dúvidas com professores atuantes no mercado.",
                "Conexões reais que abrem portas para novas oportunidades.",
                "Networking de alto valor com profissionais da sua área.",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />
        <Trilha
          title="Uma jornada de aprendizado pensada para sua evolução"
          subtitle="Conheça a estrutura do curso e como você vai evoluir ao longo da especialização"
          etapas={[
            {
              titulo: "1º ao 3º Mês: Fundamentos Estruturais Sólidos",
              descricao:
                "Domine as bases teóricas e normativas essenciais para projetar com segurança e eficiência, alinhado às melhores práticas do mercado.",
              beneficios: ["Análise de estruturas de concreto e aço", "Normas técnicas e legislação"],
              badges: ["1º ao 3º mês"],
            },
            {
              titulo: "4º ao 8º Mês: Domínio de Projetos Avançados",
              descricao:
                "Desenvolva projetos estruturais complexos, utilizando modelagem computacional e as tecnologias mais atuais para solucionar desafios reais da engenharia.",
              beneficios: ["Modelagem computacional", "Projetos de fundações especiais"],
              badges: ["4º ao 8º mês"],
            },
            {
              titulo: "9º ao 12º Mês: Aplicação Prática e Liderança Técnica",
              descricao:
                "Aplique seu conhecimento em estudos de caso reais, preparando-se para supervisionar obras e liderar projetos com a confiança que o mercado exige.",
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
          titulo="O impacto da sua escolha na sua carreira:"
          subtitulo="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "9 de cada 10",
              descricao: "alunos são promovidos ou recolocados após a formação.",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "Até 8 meses",
              descricao: "é o tempo médio para a promoção.",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+40%",
              descricao: "de aumento salarial em média após a conclusão.",
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
              "O IPOG me deu a confiança e o conhecimento técnico para assumir a liderança em projetos estruturais de grande porte. A conexão com professores de mercado foi o grande diferencial.",
            autor: "Nome do Aluno, Cargo e Empresa",
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
              <h2 className="text-3xl font-bold mb-4">Diferenciais que constroem uma carreira de sucesso</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Aqui, você se conecta à prática que o mercado exige, com uma metodologia validada por mais de 20 anos de
                excelência.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Building2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Conexão com a Prática do Mercado</h3>
                <p className="text-muted-foreground">
                  Vá além da teoria. Desenvolva projetos completos com a supervisão de engenheiros que são referência no
                  mercado.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Domínio das Ferramentas do Mercado</h3>
                <p className="text-muted-foreground">
                  Capacite-se nas plataformas de software mais exigidas, como TQS, Eberick e SAP2000, e torne-se um
                  profissional disputado.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Conteúdo Alinhado às Normas Atuais</h3>
                <p className="text-muted-foreground">
                  Estude com uma matriz curricular sempre atualizada, garantindo que seus projetos estejam em total
                  conformidade com as normas técnicas (NBR) e práticas globais.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Networking de Alto Nível</h3>
                <p className="text-muted-foreground">
                  Aqui, você se conecta com as pessoas certas: um corpo docente que transforma o mercado e colegas que
                  se tornarão parceiros estratégicos para sua carreira.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Aprenda com quem transforma o mercado</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nosso corpo docente é formado por engenheiros estruturais renomados, com vasta experiência em grandes
                projetos e reconhecimento nacional.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Mestres e Doutores Atuantes</h3>
                <p className="text-muted-foreground">
                  Professores com titulação acadêmica de excelência e experiência prática em projetos estruturais de
                  grande porte.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Referências em Grandes Obras</h3>
                <p className="text-muted-foreground">
                  Profissionais que assinam projetos de edifícios, pontes, viadutos e estruturas especiais em todo o
                  Brasil.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Mentoria Personalizada</h3>
                <p className="text-muted-foreground">
                  Acompanhamento próximo para orientar seu desenvolvimento técnico e profissional ao longo de toda a
                  especialização.
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

        <CtaFinal
          title="Esta é a escolha que conecta você ao sucesso."
          description="Uma especialização para quem busca protagonismo, com metodologia aplicada, professores de mercado e o reconhecimento de uma marca com mais de 20 anos de história."
          monthlyFee="R$ 449,00"
          duration="12 meses"
          totalCost="R$ 5.488,00"
          additionalInfo="A taxa de matrícula é o primeiro passo para garantir sua vaga e iniciar o processo de qualificação. Após a aprovação, um de nossos consultores de carreira entrará em contato para apresentar as opções de investimento, incluindo planos de parcelamento e condições especiais."
        />
      </main>
      <Footer />
    </div>
  )
}
