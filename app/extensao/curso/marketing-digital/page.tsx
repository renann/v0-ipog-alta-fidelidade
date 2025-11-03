import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { TrendingUp, Target, Award, Rocket, Briefcase, Sparkles, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Autoridade } from "@/components/autoridade"

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
          title="FORMAÇÃO EM MARKETING DIGITAL COM INTELIGÊNCIA ARTIFICIAL"
          description="Transforme cliques em clientes. Aprenda a criar funis de vendas inteligentes, dominar tráfego pago e usar IA para escalar resultados reais."
          valueBadges={[
            { icon: <Target className="h-5 w-5" />, text: "Domine Meta, Google & TikTok Ads" },
            { icon: <Sparkles className="h-5 w-5" />, text: "Crie conteúdo com IA" },
            { icon: <TrendingUp className="h-5 w-5" />, text: "Funis de Vendas 5.0" },
          ]}
          primaryCTA={{ text: "FALAR COM UM CONSULTOR", onClick: "openAssistantForPrice" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
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
          title="Formato Presencial: Aprendizado Imersivo e Networking de Alto Nível"
          subtitle="Uma jornada prática com encontros presenciais que fortalecem a troca de experiências e aceleram seu desenvolvimento."
          modalidades={[
            {
              badge: "EXTENSÃO",
              titulo: "PRESENCIAL",
              descricao: "Imersão, prática e conexões reais.",
              beneficios: [
                "100 horas de formação",
                "5 módulos práticos",
                "1 final de semana por mês",
                "Metodologia de Sala de Aula Invertida para máxima aplicação prática",
                "Atividades Práticas no Ambiente Virtual",
              ],
              buttonText: "Quero me inscrever",
              link: "#preco",
            },
          ]}
        />

        <Empregabilidade
          titulo="Resultados que comprovam a excelência IPOG"
          subtitulo="Dados reais de uma instituição que transforma carreiras há mais de 20 anos"
          estatisticas={[
            {
              icon: <Award className="h-8 w-8" />,
              valor: "98%",
              descricao: "de satisfação média entre os alunos",
              label: "EXCELÊNCIA COMPROVADA*",
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "+300 mil",
              descricao: "profissionais especializados em todo o Brasil",
              label: "IMPACTO NACIONAL*",
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              valor: "Nota máxima",
              descricao: "de credenciamento no MEC",
              label: "QUALIDADE RECONHECIDA*",
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
              "O curso foi um divisor de águas. As estratégias de funil e tráfego pago que aprendi foram aplicadas imediatamente, e os resultados apareceram na primeira semana. É conhecimento prático que gera retorno rápido.",
            autor: "Profissional de Marketing, Aluno IPOG",
          }}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />

        <Trilha
          titulo="DISCIPLINAS"
          subtitulo="Uma grade curricular completa para você dominar as frentes que mais geram resultado no ambiente digital."
          etapas={[
            {
              titulo: "Máquina de Vendas 5.0",
              descricao: "Funis, Jornada e Psicologia da Conversão",
              beneficios: [
                "Comportamento do consumidor digital",
                "Funis de atração, conversão e retenção",
                "Gatilhos mentais e storytelling",
                "O papel da IA na construção de jornadas personalizadas",
                "CRM e estratégias de qualificação de leads",
                "Inside Sales e Customer Success",
              ],
              badges: ["Módulo 01"],
            },
            {
              titulo: "Tráfego Pago I",
              descricao: "Meta Ads e TikTok Ads para Conversão",
              beneficios: [
                "Estrutura das plataformas: Meta Business e TikTok Ads Manager",
                "Segmentação, públicos personalizados e remarketing",
                "Criativos de alta performance",
                "Campanhas para engajamento, leads e vendas",
                "Testes A/B e otimização",
              ],
              badges: ["Módulo 02"],
            },
            {
              titulo: "Tráfego Pago II",
              descricao: "Google Ads, YouTube e Rede de Pesquisa",
              beneficios: [
                "Tipos de campanha: pesquisa, display, vídeo e Performance Max",
                "Palavras-chave, correspondências e intenção de busca",
                "SEO x SEM: estratégias integradas",
                "Planejamento e estrutura de campanhas",
                "Remarketing e extensões",
                "Monitoramento de conversões e relatórios",
              ],
              badges: ["Módulo 03"],
            },
            {
              titulo: "Conteúdo e Criatividade com IA",
              descricao: "Prompt Engineering, Planejamento e Execução",
              beneficios: [
                "Ferramentas de IA para criação de conteúdo (ChatGPT, Midjourney, Canva AI)",
                "Prompt engineering aplicado ao marketing",
                "Planejamento de conteúdo estratégico",
                "Copywriting persuasivo e storytelling",
                "Produção de vídeos curtos e reels",
                "Análise de tendências e viralização",
              ],
              badges: ["Módulo 04"],
            },
            {
              titulo: "Dados, Métricas e Otimização",
              descricao: "Analytics, BI e Tomada de Decisão Baseada em Dados",
              beneficios: [
                "Google Analytics 4 e Tag Manager",
                "Dashboards e relatórios automatizados",
                "KPIs e métricas de performance",
                "Análise de ROI e ROAS",
                "Testes A/B e otimização contínua",
                "Uso de IA para análise preditiva",
              ],
              badges: ["Módulo 05"],
            },
            {
              titulo: "Projeto Final Integrado",
              descricao: "Aplicação Prática e Apresentação de Resultados",
              beneficios: [
                "Desenvolvimento de estratégia completa de marketing digital",
                "Criação de campanhas reais com orçamento simulado",
                "Apresentação de resultados e aprendizados",
                "Feedback individualizado dos professores",
                "Construção de portfólio profissional",
              ],
              badges: ["Módulo 06"],
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

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Para quem é esta formação?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Para empreendedores, gestores, profissionais de marketing, analistas, social media, criadores de
                conteúdo e profissionais liberais que desejam utilizar o marketing digital com foco em resultados,
                usando o poder da IA como diferencial competitivo.
              </p>
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
                <a href="#contato">Falar com consultor acadêmico</a>
              </Button>
            </div>
          </div>
        </section>

        <Autoridade
          titulo="Aprenda com Profissionais que Gerenciam Milhões em Tráfego Pago"
          subtitulo="Professores com experiência em agências digitais e gestão de campanhas de grandes marcas."
          credenciais={[
            {
              icon: <Award className="h-5 w-5" />,
              texto: "Certificações Google e Meta",
            },
            {
              icon: <Users className="h-5 w-5" />,
              texto: "Gestores de Tráfego Sênior",
            },
            {
              icon: <TrendingUp className="h-5 w-5" />,
              texto: "Especialistas em Growth",
            },
          ]}
          professores={[
            {
              nome: "Dr. Thiago Martins",
              area: "Tráfego Pago",
              bio: "Gestor de tráfego com R$ 10M+ investidos. Certificado Google e Meta.",
              avatar: "TM",
            },
            {
              nome: "Dra. Camila Rodrigues",
              area: "Growth Marketing",
              bio: "Head de Growth em startups unicórnio. Especialista em funis de conversão.",
              avatar: "CR",
            },
            {
              nome: "Dr. André Silva",
              area: "Marketing de Conteúdo",
              bio: "Estrategista de conteúdo. Criador de campanhas virais para grandes marcas.",
              avatar: "AS",
            },
          ]}
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Formas de Pagamento</h2>
              <p className="text-muted-foreground">
                Escolha a melhor opção para você. Parcelamento flexível e descontos especiais.
              </p>
            </div>
            <MetodosPagamento />
          </div>
        </section>

        <CtaFinal
          monthlyFee="R$ 249,00"
          duration="3 meses"
          totalCost="R$ 747,00"
          title="Dê o próximo passo para se destacar no mercado."
          description="Conecte-se com especialistas para tirar suas dúvidas e garantir sua vaga na próxima turma."
          additionalText="Nossos consultores estão prontos para apresentar as melhores condições e mostrar como esta formação irá impulsionar seus resultados."
          ctaText="FALAR COM UM CONSULTOR"
        />
      </main>
      <Footer />
    </div>
  )
}
