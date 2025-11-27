import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { Clock, Award, Zap, TrendingUp, Briefcase, Target } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GestaoProjetosAgeisPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Extensão", href: "/extensao" },
                { label: "Gestão de Projetos Ágeis" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO"
          modalidade="EAD / Ao Vivo"
          title="Lidere Projetos Ágeis e Entregue Resultados de Alto Impacto"
          description="Domine Scrum e Kanban em 40 horas de imersão prática e transforme sua gestão com um método validado pelo mercado."
          valueBadges={[
            { icon: <Zap className="h-5 w-5" />, text: "40h de imersão prática" },
            { icon: <Target className="h-5 w-5" />, text: "Ferramentas para aplicação imediata" },
            { icon: <Award className="h-5 w-5" />, text: "Certificação IPOG que o mercado reconhece" },
          ]}
          primaryCTA={{ text: "Quero me inscrever", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", href: "#grade" }}
        />

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Uma formação pensada para resultados imediatos</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Domine as metodologias ágeis mais utilizadas no mercado e transforme a forma como você gerencia projetos
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Aplicação no Dia Seguinte</h3>
                <p className="text-muted-foreground">
                  Aprenda hoje, aplique amanhã. Saia de cada aula com ferramentas e templates prontos para usar
                  imediatamente e gerar impacto no seu trabalho.
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Frameworks que o Mercado Usa</h3>
                <p className="text-muted-foreground">
                  Estude Scrum, Kanban e modelos híbridos com base em casos reais de sucesso, garantindo um aprendizado
                  conectado à prática que o mercado exige.
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Certificação com Peso de Mercado</h3>
                <p className="text-muted-foreground">
                  Receba um certificado com a chancela IPOG, uma marca com mais de 20 anos de história, que valida suas
                  competências e impulsiona seu currículo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Aprenda com Agile Coaches e Scrum Masters certificados</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nosso corpo docente é formado por profissionais certificados em Scrum, Kanban e metodologias ágeis, com
                experiência em transformações ágeis de grandes empresas.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Certificações Internacionais</h3>
                <p className="text-muted-foreground">
                  Professores com certificações CSM, CSPO, PSM, SAFe e outras credenciais reconhecidas mundialmente.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Transformações Ágeis</h3>
                <p className="text-muted-foreground">
                  Profissionais que lideraram implementações de metodologias ágeis em empresas de diversos setores e
                  portes.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Prática de Mercado</h3>
                <p className="text-muted-foreground">
                  Aprenda com quem aplica Scrum e Kanban diariamente em projetos reais e desafiadores.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim da seção de professores */}

        <Modalidades
          title="O mesmo conteúdo, diferentes formatos para sua rotina"
          subtitle="O mesmo conteúdo, diferentes formatos de aprendizado"
          modalidades={[
            {
              badge: "EXTENSÃO",
              titulo: "EAD (Gravado)",
              descricao: "Para quem dita o próprio ritmo.",
              beneficios: [
                "Aulas gravadas disponíveis 24/7;",
                "Estude no seu ritmo;",
                "Suporte online com tutores;",
                "Certificação igual ao presencial.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "EXTENSÃO",
              titulo: "Ao Vivo (Online)",
              descricao: "Para quem busca trocas e networking em tempo real.",
              beneficios: [
                "Aulas online ao vivo;",
                "Interação direta com professor;",
                "Discussão de casos práticos;",
                "Networking com outros profissionais.",
              ],
              link: "#preco",
              buttonText: "Ver próximas turmas",
            },
          ]}
        />

        <Empregabilidade
          title="Resultados que Falam por Si"
          subtitle="Profissionais com certificação em metodologias ágeis têm maior empregabilidade e salários mais altos"
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "92%",
              descricao: "dos alunos aplicam o conhecimento no trabalho",
              label: "APLICAÇÃO PRÁTICA*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "1 sem",
              descricao: "Resultados práticos na primeira semana",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+35%",
              descricao: "de impacto profissional médio após a certificação",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Templates de Scrum e Kanban prontos",
            "Acesso a comunidade de gestores ágeis",
            "Mentoria com especialistas certificados",
          ]}
          depoimentos={[
            {
              tipo: "simples",
              texto: "Implementei Scrum na minha equipe em 2 semanas e a produtividade aumentou 40%.",
              autor: "Aluno IPOG - Gestão de Projetos",
            },
            {
              tipo: "simples",
              texto:
                "O curso me deu as ferramentas para transformar a gestão de projetos da empresa. Resultados visíveis em 30 dias.",
              autor: "Beatriz Almeida",
              cargo: "Scrum Master",
            },
            {
              tipo: "video",
              nome: "Thiago Ferreira",
              cargo: "Agile Coach",
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              thumbnail: "/placeholder.svg?height=400&width=600",
            },
          ]}
          botaoCta={{
            texto: "Falar com um Consultor",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />

        <Trilha
          title="Conteúdo Programático"
          subtitle="Aprenda na prática as metodologias ágeis mais utilizadas no mercado"
          etapas={[
            {
              titulo: "Fundamentos da Gestão Ágil",
              descricao:
                "Construa a base para uma mentalidade que entrega valor contínuo e saiba quando aplicar a abordagem ágil ou tradicional.",
              beneficios: ["Mindset ágil vs tradicional", "Quando usar cada abordagem"],
              badges: ["Módulo 1"],
            },
            {
              titulo: "Scrum na Prática",
              descricao:
                "Execute projetos complexos com o framework mais popular do mercado, dominando papéis, eventos e artefatos para garantir entregas no prazo.",
              beneficios: ["Sprint Planning, Daily, Review e Retrospectiva", "Product Backlog e Sprint Backlog"],
              badges: ["Módulo 2"],
            },
            {
              titulo: "Kanban e Fluxo Contínuo",
              descricao:
                "Otimize processos e aumente a eficiência da sua equipe com o Kanban, aprendendo a gerenciar o fluxo de trabalho de forma visual e contínua.",
              beneficios: ["Quadros Kanban e WIP limits", "Métricas de fluxo e lead time"],
              badges: ["Módulo 3"],
            },
            {
              titulo: "Projeto Prático Supervisionado",
              descricao:
                "Aplique Scrum ou Kanban em um desafio real do seu trabalho, com suporte de especialistas, e construa um case de sucesso para seu portfólio.",
              beneficios: ["Mentoria individualizada", "Apresentação de resultados"],
              badges: ["Módulo 4"],
              destaque: true,
            },
          ]}
          botaoCta={{
            texto: "Baixar conteúdo programático completo",
            href: "#grade",
            observacao: "PDF com detalhamento de todos os módulos",
          }}
          backgroundColor="bg-muted/30"
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Formas de Pagamento</h2>
                <p className="text-muted-foreground">
                  Parcelamento flexível e descontos especiais para pagamento à vista.
                </p>
              </div>
              <MetodosPagamento />
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre Gestão de Projetos Ágeis</h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre o curso, metodologias ágeis e certificações.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Quais metodologias ágeis são ensinadas?</AccordionTrigger>
                <AccordionContent>
                  O curso aborda as principais metodologias ágeis como Scrum, Kanban, Lean, XP (Extreme Programming) e
                  frameworks híbridos, com foco em aplicação prática e adaptação ao contexto organizacional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>O curso prepara para certificações?</AccordionTrigger>
                <AccordionContent>
                  Sim, o conteúdo do curso está alinhado com as principais certificações do mercado como PSM
                  (Professional Scrum Master), PSPO (Professional Scrum Product Owner) e prepara você para os exames de
                  certificação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Preciso ter experiência em gestão de projetos?</AccordionTrigger>
                <AccordionContent>
                  Não é obrigatório, mas é recomendável ter conhecimentos básicos em gestão. O curso é estruturado para
                  atender desde iniciantes até profissionais que desejam migrar de metodologias tradicionais para ágeis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Como são as aulas práticas?</AccordionTrigger>
                <AccordionContent>
                  As aulas incluem simulações de sprints, dinâmicas de equipe, uso de ferramentas ágeis (Jira, Trello,
                  Azure DevOps) e desenvolvimento de projetos reais aplicando os frameworks aprendidos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <CtaFinal monthlyFee="R$ 279,00" duration="40 horas" totalCost="R$ 1.674,00" />
      </main>
      <Footer />
    </div>
  )
}
