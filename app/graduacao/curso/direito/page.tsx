import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Scale, Users, BookOpen, Building } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Autoridade } from "@/components/autoridade"
import { CtaFinal } from "@/components/cta-final"
import { FormasIngresso } from "@/components/formas-ingresso"

export default function DireitoPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[{ label: "Início", href: "/" }, { label: "Graduação", href: "/graduacao" }, { label: "Direito" }]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          modalidade="Presencial"
          title="Graduação em Direito"
          description="Construa uma carreira de impacto com a graduação em Direito do IPOG. Uma formação de excelência, com foco na prática jurídica e corpo docente de mercado, que prepara você para a OAB, para advogar em alto nível ou para os mais concorridos concursos públicos."
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
              <h2 className="text-3xl font-bold mb-4">
                Por que o Direito do IPOG é a escolha que conecta você ao sucesso?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Porque aqui você aprende com os melhores para se tornar um líder no mercado. Nossa metodologia une
                teoria e prática de forma efetiva, com uma estrutura de ponta em localização privilegiada e um corpo
                docente sem igual na região, preparando você para advogar ou prestar os mais concorridos concursos
                públicos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Scale className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Preparação Completa para a OAB</h3>
                <p className="text-muted-foreground">
                  Desenvolva as competências essenciais para o Exame da Ordem desde o 1º período, com metodologias
                  ativas, atividades práticas e uma formação sólida que acelera sua aprovação.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Vivência Prática desde o Primeiro Dia</h3>
                <p className="text-muted-foreground">
                  Atue em casos reais em nosso Núcleo de Práticas Jurídicas (NPJ) e participe de audiências em salas e
                  tribunais do júri simulados. Aqui, a prática transforma seu aprendizado.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Corpo Docente Formado por Renomados Profissionais</h3>
                <p className="text-muted-foreground">
                  Aprenda com mestres, doutores, magistrados e os mais respeitados advogados da região, que trazem a
                  experiência real do mercado para a sala de aula.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modalidades
          title="Uma Formação Flexível, Pensada para a sua Rotina"
          subtitle="O curso de Direito do IPOG combina o melhor dos dois mundos: a interação do presencial com a conveniência do digital, garantindo um aprendizado completo e adaptado à sua vida."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "Encontros Presenciais (Segunda a Quinta)",
              descricao: "Aproveite a interação direta com professores e colegas",
              beneficios: [
                "Aproveite a interação direta com professores e colegas em salas de aula modernas",
                "Construa um networking valioso",
                "Vivencie a prática em nossa infraestrutura de ponta",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Aulas Digitais (Sexta-feira)",
              descricao: "Flexibilidade para assistir no seu horário",
              beneficios: [
                "Tenha a liberdade de assistir às aulas de sexta-feira em nossa moderna plataforma digital",
                "Ao vivo ou gravadas",
                "No horário que for mais produtivo para você",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />

        <Empregabilidade
          title="Resultados que Comprovam"
          subtitle="Nossos egressos brilham nos melhores escritórios de advocacia e concursos públicos do país, comprovando que a formação do IPOG acelera sua carreira."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "98%",
              descricao: "índice de satisfação",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "+300 mil",
              descricao: "alunos no Brasil",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "20 anos",
              descricao: "de tradição",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "A formação em Direito no IPOG me preparou para os desafios reais do mercado. Passei na OAB de primeira e hoje atuo em um dos maiores escritórios do país.",
              autor: "Fernanda Costa",
              cargo: "Advogada Corporativa",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Os professores do IPOG são referências no mercado jurídico. Aprendi com quem realmente atua e isso fez toda diferença na minha aprovação em concurso público. Hoje sou juiz federal.",
              autor: "Marcelo Santos",
              cargo: "Juiz Federal",
            },
            {
              texto:
                "O networking que construí no IPOG foi fundamental. Conheci meus sócios durante a graduação e hoje temos nosso próprio escritório com mais de 50 clientes corporativos.",
              autor: "Juliana Alves",
              cargo: "Sócia de Escritório de Advocacia",
            },
          ]}
          corFundo="bg-background"
        />

        <Trilha
          title="Matriz Curricular: Sua Jornada de Aprendizado, Semestre a Semestre"
          subtitle="Construa uma base sólida de conhecimento com uma matriz curricular atualizada, equilibrando fundamentos teóricos, domínio de tecnologia e vivência prática. Veja os pilares da sua formação:"
          etapas={[
            {
              numero: "1",
              titulo: "Eixo de Formação Fundamental (1º ao 2º Período)",
              descricao:
                "Construa uma base sólida com disciplinas como Teoria Constitucional, Introdução ao Estudo do Direito e Ciência Política, desenvolvendo uma visão crítica e humanística do sistema jurídico.",
              beneficios: [
                "Compreensão dos principais conceitos jurídicos",
                "Visão crítica do sistema jurídico brasileiro",
              ],
              badges: ["1º e 2º semestre"],
            },
            {
              numero: "2",
              titulo: "Eixo de Formação Profissional (3º ao 6º Período)",
              descricao:
                "Aprofunde-se nas grandes áreas do Direito, como Civil, Penal, Empresarial e Trabalhista, aprendendo a analisar doutrinas e jurisprudências de forma harmônica e coerente para solucionar casos complexos.",
              beneficios: ["Domínio das principais áreas do direito", "Análise de jurisprudência"],
              badges: ["3º ao 6º semestre"],
            },
            {
              numero: "3",
              titulo: "Eixo de Formação Prático-Profissional (7º ao 10º Período)",
              descricao:
                "Domine técnicas forenses com disciplinas de Prática Forense, Mediação, Arbitragem. Desenvolva habilidades práticas para o exercício da profissão em um cenário globalizado e tecnológico.",
              beneficios: ["Experiência em peticionamento", "Simulação de audiências"],
              badges: ["7º ao 10º semestre"],
            },
            {
              numero: "4",
              titulo: "Estágio Supervisionado e Trabalho de Conclusão de Curso (a partir do 6º Período)",
              descricao:
                "Aplique seus conhecimentos em situações reais através do Estágio Supervisionado e consolide sua jornada acadêmica com o Trabalho de Conclusão de Curso, pronto para enfrentar os desafios do mercado.",
              beneficios: ["300 horas de estágio supervisionado", "Curso preparatório para OAB incluso"],
              badges: ["6º ao 10º semestre"],
              destaque: true,
            },
          ]}
          bgColor="bg-muted/30"
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes sobre o Curso de Direito</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o curso, modalidades e preparação para OAB.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    O curso de Direito tem duração de 5 anos (10 semestres) com carga horária total reconhecida pelo
                    MEC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">O curso prepara para o Exame da OAB?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Nossa metodologia inclui preparação específica para o Exame da OAB com simulados e
                    acompanhamento especializado ao longo do curso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Como funcionam os estágios?</AccordionTrigger>
                  <AccordionContent>
                    São 300 horas de estágio supervisionado em escritórios de advocacia, órgãos públicos e no escritório
                    modelo da instituição, com acompanhamento de professores experientes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">O diploma EAD tem o mesmo valor?</AccordionTrigger>
                  <AccordionContent>
                    Sim. O diploma EAD tem o mesmo valor e reconhecimento que o presencial, permitindo registro na OAB e
                    exercício da profissão.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Falar com um Consultor Acadêmico</a>
              </Button>
            </div>
          </div>
        </section>

        <FormasIngresso
          title="Escolha Como Iniciar Sua Jornada no IPOG"
          description="Oferecemos diferentes caminhos para você começar sua graduação em Direito. Veja qual se encaixa melhor no seu perfil."
        />

        <Autoridade
          title="Corpo Docente do Curso"
          subtitle="Aprenda com magistrados, advogados e professores de referência"
          credenciais={[
            { icone: <Users className="h-5 w-5" />, texto: "Magistrados e desembargadores em atividade" },
            { icone: <Scale className="h-5 w-5" />, texto: "Advogados de escritórios renomados" },
            { icone: <BookOpen className="h-5 w-5" />, texto: "Mestres e Doutores em Direito" },
            { icone: <Building className="h-5 w-5" />, texto: "Experiência em grandes causas e tribunais superiores" },
          ]}
          professores={[
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Eduardo Carvalho Neto",
              area: "Direito Constitucional",
              bio: "Desembargador do TJ-SP, Doutor em Direito Constitucional pela USP, com mais de 25 anos de magistratura e autor de obras de referência na área.",
              tags: ["Direito Constitucional", "Controle de Constitucionalidade", "Direitos Fundamentais"],
              bioCompleta:
                "Desembargador do Tribunal de Justiça de São Paulo desde 2015, com mais de 25 anos de carreira na magistratura. Doutor em Direito Constitucional pela Universidade de São Paulo (USP) e Mestre pela PUC-SP. Autor de três livros sobre controle de constitucionalidade e direitos fundamentais, amplamente utilizados em cursos de graduação e pós-graduação. Professor convidado em diversos programas de mestrado e cursos preparatórios para magistratura.",
              linkedin: "https://linkedin.com/in/eduardo-carvalho-neto",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Mariana Rodrigues Lima",
              area: "Direito Penal",
              bio: "Juíza Federal, Mestre em Direito Penal, especialista em crimes econômicos e lavagem de dinheiro, com atuação em casos de grande repercussão nacional.",
              tags: ["Direito Penal", "Crimes Econômicos", "Lavagem de Dinheiro"],
              bioCompleta:
                "Juíza Federal desde 2012, com atuação em varas criminais especializadas em crimes contra o sistema financeiro e lavagem de dinheiro. Mestre em Direito Penal pela UERJ, com pesquisa sobre criminalidade econômica. Participou de casos de grande repercussão nacional envolvendo corrupção e organizações criminosas. Ministra cursos de capacitação para magistrados e membros do Ministério Público.",
              linkedin: "https://linkedin.com/in/mariana-rodrigues-lima",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Ricardo Almeida Santos",
              area: "Direito Civil e Empresarial",
              bio: "Sócio de escritório de advocacia corporativa, Doutor em Direito Civil, especialista em contratos complexos e litígios empresariais de alto valor.",
              tags: ["Direito Civil", "Contratos", "Direito Empresarial"],
              bioCompleta:
                "Sócio do escritório Santos & Associados, um dos maiores escritórios de advocacia corporativa do país. Doutor em Direito Civil pela USP, com tese sobre contratos empresariais complexos. Atua há 18 anos em litígios empresariais de alto valor e consultoria jurídica para grandes corporações. Árbitro da Câmara de Arbitragem da B3 e professor de Direito Civil e Empresarial em cursos de pós-graduação.",
              linkedin: "https://linkedin.com/in/ricardo-almeida-santos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Fernando Henrique Costa",
              area: "Direito do Trabalho",
              bio: "Juiz do Trabalho, Mestre em Direito do Trabalho, especialista em relações trabalhistas e reforma trabalhista, com vasta experiência em dissídios coletivos.",
              tags: ["Direito do Trabalho", "Relações Trabalhistas", "Reforma Trabalhista"],
              bioCompleta:
                "Juiz do Trabalho desde 2010, atualmente atuando no Tribunal Regional do Trabalho da 2ª Região (SP). Mestre em Direito do Trabalho pela PUC-SP, com pesquisa sobre reforma trabalhista e seus impactos. Especialista em dissídios coletivos e negociações trabalhistas. Autor de artigos sobre direito do trabalho e professor em cursos preparatórios para juízes do trabalho.",
              linkedin: "https://linkedin.com/in/fernando-henrique-costa",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Patrícia Mendes Oliveira",
              area: "Direito Tributário",
              bio: "Advogada tributarista, Mestre em Direito Tributário, sócia de escritório especializado, com atuação em planejamento tributário e contencioso fiscal.",
              tags: ["Direito Tributário", "Planejamento Tributário", "Contencioso Fiscal"],
              bioCompleta:
                "Sócia do escritório Oliveira Advogados Tributários, especializado em consultoria tributária e contencioso fiscal. Mestre em Direito Tributário pela FGV-SP, com pesquisa sobre reforma tributária. Atua há 15 anos assessorando grandes corporações em planejamento tributário e defesas em processos administrativos e judiciais. Palestrante em congressos nacionais de direito tributário.",
              linkedin: "https://linkedin.com/in/patricia-mendes-oliveira",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Carlos Alberto Ferreira",
              area: "Direito Empresarial",
              bio: "Advogado empresarial, Doutor em Direito Comercial, especialista em fusões e aquisições, recuperação judicial e direito societário.",
              tags: ["Direito Empresarial", "M&A", "Recuperação Judicial"],
              bioCompleta:
                "Sócio-fundador do escritório Ferreira & Associados, com mais de 20 anos de experiência em direito empresarial. Doutor em Direito Comercial pela USP, especialista em operações de fusão e aquisição (M&A) e processos de recuperação judicial. Assessorou mais de 50 operações de M&A e conduziu recuperações judiciais de empresas de médio e grande porte. Professor de Direito Empresarial em programas de MBA.",
              linkedin: "https://linkedin.com/in/carlos-alberto-ferreira",
            },
          ]}
        />

        <CtaFinal
          title="Invista na sua carreira com a instituição que é referência nacional."
          description="Taxa de Matrícula: R$ 100,00 | Mensalidades: a partir de R$ 599,00+"
          enrollmentFee="R$ 100,00"
          monthlyFee="R$ 599,00"
          duration="5 anos"
          totalCost="R$ 35.940,00"
          nextClassDate="Novembro"
          promotionDeadline="30 de Outubro"
        />
      </main>
      <Footer />
    </div>
  )
}
