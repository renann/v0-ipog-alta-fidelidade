import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Ruler } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CtaFinal } from "@/components/cta-final"
import { FormasIngresso } from "@/components/formas-ingresso"

export default function ArquiteturaPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Graduação", href: "/graduacao" },
                { label: "Arquitetura e Urbanismo" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          modalidade="Presencial"
          title="Arquitetura e Urbanismo"
          description="Construa uma carreira de impacto com a graduação em Arquitetura e Urbanismo do IPOG. Uma formação de excelência, com foco em projetos reais e corpo docente de mercado, que prepara você para liderar transformações urbanas e criar espaços que promovem o desenvolvimento humano."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Qualidade Reconhecida pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Metodologia Flexível" },
            { icon: <Award className="h-5 w-5" />, text: "Docentes com Experiência de Mercado" },
          ]}
          primaryCTA={{ text: "Quero me inscrever", onClick: "openAssistantForPrice" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">A Escolha Inteligente para Sua Carreira em Arquitetura</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                No IPOG, sua formação transcende a sala de aula para se tornar um compromisso com o desenvolvimento
                humano. Preparamos você para conceber e executar projetos que não apenas atendem a requisitos técnicos,
                mas que também aperfeiçoam a infraestrutura necessária para o bem-estar da sociedade.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Ruler className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Projetos Reais e Impacto Social</h3>
                <p className="text-muted-foreground">
                  Desenvolva um portfólio robusto com projetos que respondem a desafios reais, desde o primeiro
                  semestre, recebendo mentoria para criar soluções arquitetônicas e urbanísticas que promovem o
                  desenvolvimento e a sustentabilidade.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Domínio das Tecnologias do Futuro</h3>
                <p className="text-muted-foreground">
                  Aprenda a fundo as principais ferramentas do mercado, incluindo AutoCAD, Revit e softwares BIM, para
                  liderar a inovação e entregar projetos com eficiência, precisão e visão de futuro.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Corpo Docente de Referência no Mercado</h3>
                <p className="text-muted-foreground">
                  Aprenda com mestres e doutores que trazem a vivência de grandes obras e projetos para a sala de aula,
                  conectando você com os desafios e as soluções mais atuais da arquitetura e do urbanismo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Aprenda com arquitetos premiados e urbanistas de referência</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nosso corpo docente é formado por arquitetos e urbanistas com projetos premiados, experiência em grandes
                obras e reconhecimento nacional e internacional.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Projetos Premiados</h3>
                <p className="text-muted-foreground">
                  Professores com projetos reconhecidos em concursos nacionais e internacionais de arquitetura e
                  urbanismo.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Grandes Obras</h3>
                <p className="text-muted-foreground">
                  Profissionais que assinam projetos de edifícios icônicos, espaços públicos e intervenções urbanas de
                  impacto.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Formação Acadêmica de Excelência</h3>
                <p className="text-muted-foreground">
                  Mestres e doutores com formação nas melhores universidades do Brasil e do exterior.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim da seção de professores */}

        <Modalidades
          title="Sua Formação, Seu Ritmo"
          subtitle="O mesmo diploma de excelência, em formatos que se adaptam à sua jornada. Escolha a modalidade que impulsiona seus objetivos."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "Graduação EAD",
              descricao: "Para quem busca autonomia e foco prático.",
              beneficios: [
                "Conteúdo Autoral e Exclusivo: Aulas criadas pelos próprios professores, alinhadas com o que o mercado exige.",
                "Suporte Rápido e Eficiente: Professores, tutores e coordenadores à sua disposição para uma jornada com cuidado e atenção.",
                "Flexibilidade Total: Estude no seu ritmo, de onde estiver, e concilie sua formação com a rotina profissional.",
                "Certificação Reconhecida: O mesmo diploma do curso presencial, com o peso da marca IPOG.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Graduação Presencial",
              descricao: "Para quem valoriza a experiência universitária completa.",
              beneficios: [
                "Vivência Prática Intensiva: Aulas em laboratórios modernos e clínicas, com acesso a equipamentos de ponta.",
                "Networking de Alto Valor: Interação direta com professores de mercado e colegas para construir uma rede de contatos sólida.",
                "Infraestrutura Moderna: Um campus planejado para o aprendizado real, que inspira a criatividade e a inovação.",
                "Mentoria Especializada: Acompanhamento próximo para orientar seu desenvolvimento acadêmico e profissional.",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />

        <Empregabilidade
          title="Resultados que Comprovam: O Impacto do IPOG na Sua Carreira"
          subtitle="Mais do que um diploma, entregamos transformação. Nossos alunos conquistam posições de destaque porque nossa metodologia foca em resultados reais e empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "88%",
              descricao: "dos nossos alunos estão empregados ou foram promovidos após a formação.",
              label: "TAXA DE EMPREGABILIDADE*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-7 m",
              descricao: "Tempo para conseguir nova posição no mercado",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+55%",
              descricao: "Aumento salarial médio",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "A graduação em Arquitetura no IPOG me deu as ferramentas práticas que o mercado exige. Antes de me formar, já tinha meu primeiro projeto construído, e hoje tenho meu próprio escritório.",
              autor: "Rafael Mendes",
              cargo: "Arquiteto e Urbanista",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Os laboratórios e a infraestrutura do IPOG são de nível mundial. Aprendi com tecnologias usadas por grandes escritórios, o que me deu vantagem competitiva no mercado. Hoje trabalho em projetos internacionais.",
              autor: "Carolina Ribeiro",
              cargo: "Arquiteta Sênior",
            },
            {
              texto:
                "O IPOG me conectou com profissionais renomados do mercado. Fiz estágio em um escritório de prestígio durante a graduação e hoje sou sócio. A formação prática fez toda a diferença.",
              autor: "Bruno Carvalho",
              cargo: "Sócio de Escritório de Arquitetura",
            },
          ]}
          bgColor="bg-background"
        />

        <Trilha
          title="Matriz Curricular: Sua Jornada de Aprendizado, Semestre a Semestre"
          subtitle="Construa uma base sólida de conhecimento com uma matriz curricular atualizada, que equilibra fundamentos teóricos, domínio de tecnologias e experiência prática. Veja os pilares da sua formação:"
          etapas={[
            {
              numero: "1",
              titulo: "Eixo 1: Fundamentos da Criação (1º e 2º semestres)",
              descricao:
                "Desenvolva sua base teórica e de representação gráfica. Domine o desenho técnico, a plástica e a composição visual, e compreenda a evolução da arquitetura e do urbanismo para criar projetos com propósito e repertório cultural.",
              beneficios: [
                "Disciplinas-chave: História da Arte e da Arquitetura, Desenho de Observação, Plástica e Composição Visual, Geometria Descritiva, Desenho Técnico Arquitetônico I, Introdução ao Urbanismo.",
              ],
              badges: ["1º e 2º semestre"],
            },
            {
              numero: "2",
              titulo: "Eixo 2: Projeto e Tecnologia Construtiva (3º e 4º semestres)",
              descricao:
                "Aplique os fundamentos no desenvolvimento de projetos arquitetônicos, com foco em materiais, técnicas construtivas e conforto ambiental. Domine softwares BIM e prepare-se para os desafios técnicos da profissão, integrando forma, função e estrutura.",
              beneficios: [
                "Disciplinas-chave: Projeto Arquitetônico I e II, Materiais e Técnicas Construtivas, Topografia, Conforto Ambiental (Térmico, Lumínico e Acústico), Sistemas Estruturais I, Computação Gráfica Aplicada (BIM).",
              ],
              badges: ["3º e 4º semestre"],
            },
            {
              numero: "3",
              titulo: "Eixo 3: Urbanismo, Paisagismo e Sustentabilidade (5º e 6º semestres)",
              descricao:
                "Amplie sua visão para a escala da cidade e da paisagem. Aprofunde-se em planejamento urbano, projetos de paisagismo e arquitetura sustentável, compreendendo o impacto social e ambiental de suas intervenções.",
              beneficios: [
                "Disciplinas-chave: Planejamento Urbano e Regional, Projeto de Paisagismo, Arquitetura Sustentável, Instalações Prediais (Hidráulica e Elétrica), Sistemas Estruturais II.",
              ],
              badges: ["5º e 6º semestre"],
            },
            {
              numero: "4",
              titulo: "Eixo 4: Prática Profissional e TFG (7º ao 10º semestres)",
              descricao:
                "Consolide sua formação com o Trabalho Final de Graduação (TFG), estágios supervisionados e disciplinas de gestão de projetos e legislação. Saia preparado para atuar com autonomia e responsabilidade técnica no mercado.",
              beneficios: [
                "Disciplinas-chave: TFG I e II, Estágio Supervisionado, Legislação e Ética Profissional, Gerenciamento de Projetos, Patrimônio Histórico e Restauro.",
              ],
              badges: ["7º ao 10º semestre"],
              destaque: true,
            },
          ]}
          bgColor="bg-muted/30"
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <MetodosPagamento />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre Arquitetura</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Tire suas dúvidas sobre o curso, softwares e atuação profissional.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual é a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    O curso de Arquitetura e Urbanismo tem duração de 5 anos (10 semestres), com carga horária total
                    reconhecida pelo MEC e CAU.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Quais softwares vou aprender?</AccordionTrigger>
                  <AccordionContent>
                    Você aprenderá AutoCAD, Revit, SketchUp, V-Ray, Lumion e outras ferramentas essenciais para o
                    mercado de arquitetura.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Como funciona o TFG?</AccordionTrigger>
                  <AccordionContent>
                    O Trabalho Final de Graduação é desenvolvido nos últimos semestres com orientação individualizada,
                    resultando em um projeto completo para seu portfólio.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Posso atuar como arquiteto após formado?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Após a formação, você deve se registrar no CAU (Conselho de Arquitetura e Urbanismo) para
                    exercer a profissão legalmente.
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

        <FormasIngresso
          title="Comece Sua Jornada no IPOG"
          description="Seja para iniciar sua primeira graduação, usar sua experiência para uma segunda formação ou transferir seu curso, temos o caminho certo para você."
        />

        <CtaFinal
          title="Invista na sua carreira com a instituição que é referência nacional."
          description="Taxa de Inscrição: R$ 100,00 | Mensalidades: a partir de R$ 649,00+"
          enrollmentFee="R$ 100,00"
          monthlyFee="R$ 649,00"
          duration="5 anos"
          totalCost="R$ 38.940,00"
          nextClassDate="Novembro"
          promotionDeadline="30 de Outubro"
        />
      </main>
      <Footer />
    </div>
  )
}
