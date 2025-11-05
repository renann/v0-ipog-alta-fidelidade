"use client"

import { HomeHeader } from "@/components/home-header"
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
      <HomeHeader />

      {/* Breadcrumb + Page Title */}
      <section className="w-full py-8 md:py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Sobre nós" }]} className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold">A escolha que conecta você ao sucesso</h1>
        </div>
      </section>

      {/* Introdução Institucional */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl md:text-2xl font-medium text-balance leading-relaxed">
              Nossa história começou em 2001 com um propósito claro: desenvolver pessoas para impactar positivamente a
              sociedade. Hoje, somos a escolha que conecta mais de 300 mil alunos ao seu sucesso, guiando cada jornada
              com conhecimento sólido e visão estratégica.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Acreditamos que a educação transforma trajetórias. Por isso, conectamos você a professores que são
              referência no mercado e a uma metodologia prática, entregando as ferramentas para que você se torne
              protagonista da sua carreira e alcance novos horizontes.
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
                    Uma história de solidez, compromisso e qualidade, construída passo a passo.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">2001</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">O Início de um Propósito</h3>
                        <p className="text-sm text-muted-foreground">
                          Em Goiânia, nasce o IPOG com o objetivo de levar ensino superior de alta qualidade a
                          profissionais de todo o mercado, firmando nosso compromisso com a excelência.
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
                        <h3 className="font-bold text-lg mb-2">Conquistando o Brasil</h3>
                        <p className="text-sm text-muted-foreground">
                          Expandimos nossa presença para todo o país, tornando-nos referência nacional e levando nossa
                          metodologia prática e efetiva para novas fronteiras.
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
                        <h3 className="font-bold text-lg mb-2">A Revolução Digital</h3>
                        <p className="text-sm text-muted-foreground">
                          Lançamos nossa plataforma EAD, conectando milhares de alunos ao conhecimento e reforçando
                          nosso pioneirismo em inovação educacional.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary text-center leading-tight">Visão</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Nossa Visão</h3>
                        <p className="text-sm text-muted-foreground">
                          Consolidados como uma das maiores instituições do Brasil, seguimos com a visão de oferecer uma
                          experiência educacional de excelência para 1 milhão de alunos até 2034.
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
        title="Nosso método e diferenciais"
        subtitle="O que nos torna referência em educação de qualidade"
        beneficios={[
          {
            icone: <Target className="w-8 h-8 text-primary" />,
            titulo: "Metodologia para Diferenciar",
            subtitulo: "Conhecimento que se aplica hoje e transforma o amanhã.",
            itens: [
              "Teoria e Prática: Unimos teorias e ferramentas em uma metodologia simples e efetiva.",
              "Foco Prático: O que você aprende em aula é pensado para virar ação imediata na sua carreira.",
              "Conteúdo Autoral: Nossas aulas são criadas por quem ensina, alinhadas com as exigências do mercado.",
              "Matriz Curricular Estratégica: Nossos currículos são desenhados para os desafios atuais do mercado, garantindo um aprendizado relevante e com profundidade.",
            ],
          },
          {
            icone: <Users className="w-8 h-8 text-primary" />,
            titulo: "Professores que Transformam",
            subtitulo: "Aprenda com quem já chegou lá e agora mostra o caminho.",
            itens: [
              "Docentes de Mercado: Aprenda com mestres e doutores que são líderes e executivos em suas áreas, trazendo a realidade do mercado para dentro da sala de aula.",
              "Networking de Alto Nível: Conecte-se a profissionais que são referência e construa uma rede que abre portas.",
              "Suporte Eficiente: Receba o apoio de professores, tutores e coordenadores que acompanham sua jornada de perto.",
            ],
          },
          {
            icone: <Lightbulb className="w-8 h-8 text-primary" />,
            titulo: "Inovação que Facilita",
            subtitulo: "Tecnologia que torna o aprendizado mais acessível e eficiente.",
            itens: [
              "Plataforma Intuitiva: Acesse suas aulas, materiais e atividades de forma simples e rápida, de qualquer lugar.",
              "Conteúdo Sempre Atualizado: Nossos cursos acompanham as mudanças do mercado, garantindo que você aprenda o que é relevante agora.",
              "Flexibilidade Total: Estude no seu ritmo, com formatos que se adaptam à sua rotina e aos seus objetivos.",
            ],
          },
        ]}
        corFundo="bg-background"
      />

      {/* Impacto e Presença no Mercado */}
      <ResultadosComprovados titulo="Conhecimento que gera resultados reais" />

      {/* O Que Dizem Nossos Alunos */}
      <DepoimentosDeTexto
        titulo="O que dizem nossos protagonistas"
        depoimentos={[
          {
            nome: "Ana Paula S.",
            cargo: "MBA em Gestão de Projetos",
            area: "",
            depoimento:
              "A decisão foi fácil: eu queria aprender com o professor que é referência na minha área. O networking e a aplicação imediata do conteúdo me garantiram uma promoção em menos de um ano.",
            ganho: "Resultado: Promoção para Gerente Sênior e +40% de aumento salarial.",
          },
          {
            nome: "Carlos Eduardo L.",
            cargo: "Curso de Extensão em Power BI",
            area: "",
            depoimento:
              "Como profissional pragmática, eu precisava de algo que eu possa usar amanhã no meu trabalho. O curso de extensão foi direto ao ponto e o retorno sobre o investimento foi imediato.",
            ganho: "Resultado: Otimização de processos e reconhecimento pela liderança.",
          },
          {
            nome: "Mariana C.",
            cargo: "Pós-Graduação em Neuropsicologia",
            area: "",
            depoimento:
              "Fazer a transição de carreira era um grande desafio. O IPOG me deu a segurança que eu precisava, com uma trilha clara, mentoria e o peso de uma certificação reconhecida pelo mercado.",
            ganho: "Resultado: Transição de carreira bem-sucedida para a área clínica.",
          },
        ]}
        corFundo="bg-muted/30"
      />

      <Footer />
    </main>
  )
}
