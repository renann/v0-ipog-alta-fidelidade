import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Brain, Zap, Target, TrendingUp, Award, Rocket, Briefcase } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function InteligenciaArtificialAplicadaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Extensão", href: "/extensao" },
                { label: "Inteligência Artificial Aplicada" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO"
          title="Inteligência Artificial Aplicada"
          description="Domine IA generativa, automação e ferramentas emergentes para aplicação imediata no seu trabalho"
          valueBadges={[
            { icon: <Brain className="h-5 w-5" />, text: "IA Generativa" },
            { icon: <Zap className="h-5 w-5" />, text: "Automação Prática" },
            { icon: <Target className="h-5 w-5" />, text: "Aplicação Imediata" },
          ]}
          primaryCTA={{ text: "Inscrever-se no curso", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: openAssistantForConsultor }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher IA Aplicada no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Curso prático com foco em ferramentas de IA generativa e automação para aplicação imediata.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">IA Generativa</h3>
                <p className="text-muted-foreground">
                  Domine ChatGPT, Midjourney e outras ferramentas de IA para criar conteúdo e automatizar processos.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Automação Inteligente</h3>
                <p className="text-muted-foreground">
                  Aprenda a automatizar workflows e aumentar produtividade com integração de APIs de IA.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Aplicação Prática</h3>
                <p className="text-muted-foreground">
                  Projetos reais desde o primeiro dia para aplicar IA no seu contexto profissional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modalidades
          title="Escolha sua modalidade"
          subtitle="Curso disponível em formato EAD para máxima flexibilidade"
          modalidades={[
            {
              badge: "EXTENSÃO",
              titulo: "EAD",
              descricao: "Aprenda no seu ritmo com conteúdo atualizado constantemente",
              beneficios: [
                "Acesso 24/7 ao conteúdo e atualizações",
                "Projetos práticos com IA generativa",
                "Suporte de especialistas em IA",
                "Certificação reconhecida pelo mercado",
              ],
              buttonText: "Quero me inscrever",
              link: "#preco",
            },
          ]}
        />

        <Empregabilidade
          titulo="Profissionais com IA conquistam mais"
          subtitulo="Dados reais de quem domina ferramentas de IA"
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "92%",
              descricao: "aumentaram produtividade",
              label: "GANHO DE EFICIÊNCIA*",
            },
            {
              icon: <Award className="h-8 w-8" />,
              valor: "85%",
              descricao: "conquistaram novas oportunidades",
              label: "CRESCIMENTO PROFISSIONAL*",
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              valor: "88%",
              descricao: "se tornaram referência em IA",
              label: "RECONHECIMENTO*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas de mercado",
            "Indicações para vagas parceiras",
          ]}
          depoimento={{
            texto: "Dominar IA me tornou referência na empresa e abriu portas para novos projetos estratégicos.",
            autor: "Aluno IPOG",
          }}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />

        <Trilha
          titulo="Sua jornada em IA Aplicada"
          subtitulo="4 meses de aprendizado prático com ferramentas de ponta"
          etapas={[
            {
              titulo: "Fundamentos de IA",
              descricao: "Entenda os conceitos essenciais e ferramentas de IA generativa",
              beneficios: [
                "Introdução à IA e Machine Learning",
                "ChatGPT e ferramentas de texto",
                "Midjourney e geração de imagens",
                "Primeiro projeto prático",
              ],
              badges: ["Mês 1"],
            },
            {
              titulo: "Automação com IA",
              descricao: "Automatize processos e aumente produtividade",
              beneficios: [
                "Automação de workflows",
                "Integração de APIs de IA",
                "Análise de dados com IA",
                "Projetos de automação reais",
              ],
              badges: ["Mês 2-3"],
            },
            {
              titulo: "Aplicação Estratégica",
              descricao: "Implemente IA no seu contexto profissional",
              beneficios: [
                "Projeto final aplicado",
                "Ética e governança em IA",
                "Apresentação de resultados",
                "Certificação e portfólio",
              ],
              badges: ["Mês 4"],
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

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre IA</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o curso, ferramentas e aplicação prática.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual é a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    O curso de extensão tem duração de 4 meses, com conteúdo prático e atualizado constantemente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Preciso saber programar?</AccordionTrigger>
                  <AccordionContent>
                    Não. O curso é focado em aplicação prática de ferramentas de IA, sem necessidade de conhecimento
                    prévio em programação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Quais ferramentas vou aprender?</AccordionTrigger>
                  <AccordionContent>
                    Você aprenderá ChatGPT, Midjourney, ferramentas de automação, análise de dados com IA e integração
                    de APIs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">O conteúdo é atualizado?</AccordionTrigger>
                  <AccordionContent>
                    Sim. O curso é constantemente atualizado com as ferramentas e práticas mais recentes de IA
                    generativa.
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

        <CtaFinal monthlyFee="R$ 299,00" duration="4 meses" totalCost="R$ 1.196,00" />
      </main>
      <Footer />
    </div>
  )
}
