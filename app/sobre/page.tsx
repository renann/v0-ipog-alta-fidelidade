"use client"

import { Header } from "@/components/header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Beneficios } from "@/components/beneficios"
import { ResultadosComprovados } from "@/components/resultados-comprovados"
import { DepoimentosDeTexto } from "@/components/depoimentos-de-texto"
import { Autoridade } from "@/components/autoridade"
import { Footer } from "@/components/footer"
import { Target, Users, Lightbulb, Award, Shield, BookOpen } from "lucide-react"

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Breadcrumb + Page Title */}
      <section className="w-full py-8 md:py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Sobre nós" }]} className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold">Sobre nós</h1>
        </div>
      </section>

      {/* Introdução Institucional */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl md:text-2xl font-medium text-balance leading-relaxed">
              Há mais de 20 anos, o IPOG transforma carreiras e impulsiona o desenvolvimento profissional de milhares de
              pessoas em todo o Brasil.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Nossa missão é democratizar o acesso à educação de qualidade, conectando conhecimento acadêmico à prática
              de mercado, formando profissionais preparados para os desafios do mundo contemporâneo.
            </p>
          </div>
        </div>
      </section>

      {/* Navegação Interna (Tabs) */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <Tabs defaultValue="historia" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="historia">História</TabsTrigger>
                <TabsTrigger value="governanca">Governança</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
            </div>

            {/* Tab: História */}
            <TabsContent value="historia" className="space-y-12">
              {/* Nossa Trajetória */}
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Nossa trajetória</h2>
                  <p className="text-lg text-muted-foreground">
                    Uma história de crescimento, inovação e compromisso com a excelência educacional
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">2005</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Fundação do IPOG</h3>
                        <p className="text-sm text-muted-foreground">
                          Início das atividades com foco em pós-graduação e especialização profissional, estabelecendo
                          as bases de nossa metodologia de ensino.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">2010</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Expansão Nacional</h3>
                        <p className="text-sm text-muted-foreground">
                          Alcançamos presença em mais de 15 estados brasileiros, consolidando nossa posição como
                          referência em educação continuada.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">2015</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Inovação Digital</h3>
                        <p className="text-sm text-muted-foreground">
                          Lançamento de plataforma EAD de última geração, democratizando o acesso à educação de
                          qualidade em todo o país.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">2025</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Liderança Consolidada</h3>
                        <p className="text-sm text-muted-foreground">
                          Mais de 720 mil formandos, presença em 20+ estados e reconhecimento como uma das principais
                          instituições de ensino do Brasil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab: Governança */}
            <TabsContent value="governanca">
              <Autoridade
                titulo="Nossa Governança"
                subtitulo="Liderança comprometida com excelência e inovação educacional"
                credenciais={[
                  {
                    icone: <Shield className="w-5 h-5 text-primary" />,
                    texto: "Certificação MEC",
                  },
                  {
                    icone: <Award className="w-5 h-5 text-primary" />,
                    texto: "ISO 9001:2015",
                  },
                  {
                    icone: <BookOpen className="w-5 h-5 text-primary" />,
                    texto: "20+ anos de experiência",
                  },
                ]}
                professores={[
                  {
                    nome: "Dr. Carlos Eduardo Silva",
                    bio: "CEO e fundador do IPOG. Doutor em Educação pela USP com mais de 25 anos de experiência em gestão educacional.",
                    area: "CEO",
                  },
                  {
                    nome: "Dra. Maria Fernanda Costa",
                    bio: "Diretora Acadêmica. Doutora em Pedagogia com especialização em metodologias ativas de aprendizagem.",
                    area: "Diretora Acadêmica",
                  },
                  {
                    nome: "Prof. João Pedro Almeida",
                    bio: "Diretor de Inovação. Mestre em Tecnologia Educacional e especialista em transformação digital.",
                    area: "Diretor de Inovação",
                  },
                ]}
                tituloProfessores="Conheça nossa liderança executiva"
                backgroundColor="bg-background"
              />
            </TabsContent>

            {/* Tab: FAQ */}
            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
                  <p className="text-lg text-muted-foreground">
                    Tire suas dúvidas sobre o IPOG e nossos programas educacionais
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>O IPOG é reconhecido pelo MEC?</AccordionTrigger>
                    <AccordionContent>
                      Sim, o IPOG é uma instituição de ensino superior credenciada pelo Ministério da Educação (MEC) e
                      todos os nossos cursos de graduação e pós-graduação são devidamente autorizados e reconhecidos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Quais modalidades de ensino o IPOG oferece?</AccordionTrigger>
                    <AccordionContent>
                      Oferecemos três modalidades: EAD (100% online), Presencial e Híbrido (combinação de aulas online e
                      presenciais). Todas as modalidades mantêm o mesmo padrão de qualidade e são reconhecidas pelo MEC.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Como funciona o processo de matrícula?</AccordionTrigger>
                    <AccordionContent>
                      O processo de matrícula é 100% digital. Após escolher seu curso, você preenche o formulário
                      online, envia a documentação necessária e realiza o pagamento. Nossa equipe acompanha todo o
                      processo e você recebe suporte em cada etapa.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>O IPOG oferece programas de bolsas ou financiamento?</AccordionTrigger>
                    <AccordionContent>
                      Sim, oferecemos diversas opções de bolsas de estudo e parcerias com instituições financeiras para
                      facilitar o acesso à educação. Entre em contato com nossa equipe para conhecer as opções
                      disponíveis para o seu curso.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Qual é o diferencial do corpo docente do IPOG?</AccordionTrigger>
                    <AccordionContent>
                      Nosso corpo docente é formado por professores com titulação acadêmica (mestres e doutores) e
                      experiência prática de mercado. Todos os professores são profissionais atuantes em suas áreas,
                      garantindo que o conteúdo seja atual e aplicável à realidade profissional.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>Como funciona o suporte ao aluno?</AccordionTrigger>
                    <AccordionContent>
                      Oferecemos suporte completo através de múltiplos canais: chat online, e-mail, telefone e WhatsApp.
                      Nossa equipe está disponível para auxiliar em questões acadêmicas, técnicas e administrativas
                      durante todo o seu curso.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Nosso Método e Diferenciais */}
      <Beneficios
        titulo="Nosso método e diferenciais"
        subtitulo="O que nos torna referência em educação de qualidade"
        beneficios={[
          {
            icone: <Target className="w-8 h-8 text-primary" />,
            titulo: "Metodologia Aplicada",
            subtitulo: "Aprendizado focado na prática profissional",
            itens: [
              "Casos reais de mercado",
              "Projetos práticos em cada disciplina",
              "Conexão direta com o mundo corporativo",
              "Aplicação imediata do conhecimento",
            ],
          },
          {
            icone: <Users className="w-8 h-8 text-primary" />,
            titulo: "Professores Executivos",
            subtitulo: "Aprenda com quem atua no mercado",
            itens: [
              "Mestres e doutores qualificados",
              "Experiência prática comprovada",
              "Profissionais atuantes em suas áreas",
              "Network com líderes de mercado",
            ],
          },
          {
            icone: <Lightbulb className="w-8 h-8 text-primary" />,
            titulo: "Inovação Constante",
            subtitulo: "Tecnologia a serviço da educação",
            itens: [
              "Plataforma digital de última geração",
              "Conteúdo sempre atualizado",
              "Metodologias ativas de aprendizagem",
              "Recursos interativos e gamificação",
            ],
          },
        ]}
        corFundo="bg-background"
      />

      {/* Impacto e Presença no Mercado */}
      <ResultadosComprovados titulo="Mais de 20 anos transformando carreiras e empresas" />

      {/* O Que Dizem Nossos Alunos */}
      <DepoimentosDeTexto
        titulo="O que dizem nossos alunos"
        depoimentos={[
          {
            nome: "Ana Paula Santos",
            cargo: "Gerente de Projetos",
            area: "Tecnologia",
            depoimento:
              "O IPOG transformou minha carreira. A metodologia prática e os professores experientes fizeram toda a diferença no meu desenvolvimento profissional.",
            ganho: "Promoção em 6 meses + 40% de aumento salarial",
          },
          {
            nome: "Carlos Eduardo Lima",
            cargo: "Diretor Financeiro",
            area: "Finanças",
            depoimento:
              "A qualidade do ensino e o networking com outros profissionais foram fundamentais para minha transição de carreira. Recomendo fortemente.",
            ganho: "Mudança de área + Nova posição executiva",
          },
          {
            nome: "Mariana Costa",
            cargo: "Coordenadora de RH",
            area: "Recursos Humanos",
            depoimento:
              "Além do conhecimento técnico, o IPOG me proporcionou uma visão estratégica que aplico diariamente na minha empresa. Investimento que valeu cada centavo.",
            ganho: "Promoção para cargo de liderança",
          },
        ]}
        corFundo="bg-muted/30"
      />

      <Footer />
    </main>
  )
}
