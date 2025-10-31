import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { TrendingUp, Target, Award, Rocket, Zap, Briefcase } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function MarketingDigitalPage() {
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
                { label: "Marketing Digital" },
              ]}
            />
          </div>
        </div>

        <Hero
          badge="EXTENSÃO"
          title="Marketing Digital"
          description="Estratégias e ferramentas atuais para resultados rápidos em campanhas digitais"
          valueBadges={[
            { icon: <TrendingUp className="h-5 w-5" />, text: "ROI Rápido" },
            { icon: <Target className="h-5 w-5" />, text: "100% Prático" },
            { icon: <Zap className="h-5 w-5" />, text: "Templates Prontos" },
          ]}
          primaryCTA={{ text: "Inscrever-se no curso", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: openAssistantForConsultor }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher Marketing Digital no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Curso prático com foco em resultados mensuráveis e ferramentas atuais do mercado.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Estratégias Práticas</h3>
                <p className="text-muted-foreground">
                  Aprenda estratégias comprovadas de marketing digital com aplicação imediata no seu negócio.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Ferramentas Atuais</h3>
                <p className="text-muted-foreground">
                  Domine Google Ads, Facebook Ads, Google Analytics e ferramentas de automação de marketing.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">ROI Mensurável</h3>
                <p className="text-muted-foreground">
                  Aprenda a medir e otimizar resultados para maximizar o retorno sobre investimento.
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
              descricao: "Aprenda estratégias digitais no seu ritmo",
              beneficios: [
                "Acesso 24/7 ao conteúdo",
                "Templates e ferramentas prontas",
                "Suporte de especialistas",
                "Certificação reconhecida",
              ],
              buttonText: "Quero me inscrever",
              link: "#preco",
            },
          ]}
        />

        <Empregabilidade
          titulo="Profissionais de marketing digital conquistam mais"
          subtitulo="Dados reais de quem domina estratégias digitais"
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "89%",
              descricao: "aumentaram conversões",
              label: "MELHORIA DE RESULTADOS*",
            },
            {
              icon: <Award className="h-8 w-8" />,
              valor: "82%",
              descricao: "conquistaram promoções",
              label: "CRESCIMENTO PROFISSIONAL*",
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              valor: "91%",
              descricao: "aplicaram na primeira semana",
              label: "APLICAÇÃO IMEDIATA*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas de mercado",
            "Indicações para vagas parceiras",
          ]}
          depoimento={{
            texto: "As estratégias de marketing digital aumentaram minhas conversões em 45% no primeiro mês.",
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
          titulo="Sua jornada em Marketing Digital"
          subtitulo="3 meses de estratégias práticas e resultados mensuráveis"
          etapas={[
            {
              titulo: "Fundamentos Digitais",
              descricao: "Domine os conceitos essenciais do marketing digital",
              beneficios: [
                "Estratégia de marketing digital",
                "Funis de conversão",
                "Google Analytics e métricas",
                "Primeira campanha prática",
              ],
              badges: ["Mês 1"],
            },
            {
              titulo: "Canais e Ferramentas",
              descricao: "Explore redes sociais, SEO e mídia paga",
              beneficios: [
                "Social Media Marketing",
                "SEO e marketing de conteúdo",
                "Google Ads e Facebook Ads",
                "Automação de marketing",
              ],
              badges: ["Mês 2"],
            },
            {
              titulo: "Otimização e Resultados",
              descricao: "Maximize ROI e apresente resultados",
              beneficios: [
                "Análise de dados e otimização",
                "Growth hacking",
                "Projeto final com resultados reais",
                "Certificação e portfólio",
              ],
              badges: ["Mês 3"],
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre o curso</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o curso, ferramentas e aplicação prática.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual é a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    O curso de extensão tem duração de 3 meses, com conteúdo prático e aplicável imediatamente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Preciso ter experiência prévia?</AccordionTrigger>
                  <AccordionContent>
                    Não. O curso é estruturado para atender desde iniciantes até profissionais que desejam atualizar
                    seus conhecimentos em marketing digital.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Quais ferramentas vou aprender?</AccordionTrigger>
                  <AccordionContent>
                    Você aprenderá Google Ads, Facebook Ads, Google Analytics, ferramentas de automação de marketing,
                    SEO e muito mais.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Recebo certificado?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Ao concluir o curso, você recebe certificado de extensão reconhecido pelo MEC.
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

        <CtaFinal monthlyFee="R$ 249,00" duration="3 meses" totalCost="R$ 747,00" />
      </main>
      <Footer />
    </div>
  )
}
