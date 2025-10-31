import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Scale } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Autoridade } from "@/components/autoridade"

export default function DireitoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
          title="Graduação em Direito"
          description="Construa uma carreira de impacto com a graduação em Direito do IPOG. Uma formação de excelência, com foco na prática jurídica e corpo docente de mercado, que prepara você para a OAB, para advogar em alto nível ou para os mais concorridos concursos públicos."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Qualidade Reconhecida pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Metodologia Flexível" },
            { icon: <Award className="h-5 w-5" />, text: "Docentes com Experiência de Mercado" },
          ]}
          primaryCTA={{ text: "Garanta sua vaga", href: "#preco" }}
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
          titulo="Resultados que Comprovam"
          subtitulo="Nossos egressos se destacam nos melhores escritórios e concursos públicos do país, comprovando que a formação IPOG acelera a sua carreira."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "98%",
              descricao: "de satisfação",
              label: "SATISFAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "+300 mil",
              descricao: "alunos no Brasil",
              label: "ALUNOS*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "20 anos",
              descricao: "de tradição",
              label: "EXPERIÊNCIA*",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "A formação em Direito no IPOG me preparou para os desafios reais do mercado. Passei na OAB de primeira e hoje trabalho em um dos maiores escritórios de advocacia do país.",
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
          bgColor="bg-background"
        />

        <Trilha
          titulo="Estrutura Curricular"
          subtitulo="Conheça a estrutura do curso e como você vai evoluir ao longo da graduação"
          etapas={[
            {
              titulo: "Eixo de Formação Fundamental (1º ao 2º Período)",
              descricao:
                "Construa uma base sólida com disciplinas como Teoria da Constituição, Introdução ao Estudo do Direito e Ciência Política, desenvolvendo uma visão crítica e humanística do sistema jurídico.",
              beneficios: [
                "Compreensão dos principais conceitos jurídicos",
                "Visão crítica sobre o sistema legal brasileiro",
              ],
              badges: ["1º e 2º semestre"],
            },
            {
              titulo: "Eixo de Formação Profissional (3º ao 6º Período)",
              descricao:
                "Aprofunde-se nas grandes áreas do Direito, como Civil, Penal, Empresarial e do Trabalho, aprendendo a analisar doutrinas e jurisprudências de forma harmoniosa e coerente para solucionar casos complexos.",
              beneficios: ["Domínio das principais áreas do direito", "Análise de jurisprudência"],
              badges: ["3º ao 6º semestre"],
            },
            {
              titulo: "Eixo de Formação Prático-Profissional (7º ao 10º Período)",
              descricao:
                "Domine as técnicas forenses com disciplinas de Prática Forense, Conciliação, Mediação e Arbitragem. Desenvolva habilidades práticas para o exercício da profissão em um cenário globalizado e tecnológico.",
              beneficios: ["Experiência em peticionamento", "Simulações de audiências"],
              badges: ["7º ao 10º semestre"],
            },
            {
              titulo: "Estágio Supervisionado e TCC (a partir do 6º Período)",
              descricao:
                "Aplique seu conhecimento em situações reais por meio do Estágio Supervisionado e consolide sua jornada acadêmica com o Trabalho de Conclusão de Curso, saindo pronto para os desafios do mercado.",
              beneficios: ["300h de estágio supervisionado", "Curso preparatório OAB incluso"],
              badges: ["6º ao 10º semestre"],
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

        <Autoridade
          titulo="Corpo Docente do Curso"
          subtitulo="Aprenda com magistrados, advogados e professores de referência"
          credenciais={[
            "Magistrados e desembargadores em atividade",
            "Advogados de escritórios renomados",
            "Mestres e Doutores em Direito",
            "Experiência em grandes casos e tribunais superiores",
          ]}
          professores={[
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Eduardo Carvalho Neto",
              area: "Direito Constitucional",
              descricao:
                "Desembargador do TJ-SP, Doutor em Direito Constitucional pela USP, com mais de 25 anos de magistratura e autor de obras de referência na área.",
              especialidades: ["Direito Constitucional", "Controle de Constitucionalidade", "Direitos Fundamentais"],
              biografia:
                "Desembargador do Tribunal de Justiça de São Paulo desde 2015, com mais de 25 anos de carreira na magistratura. Doutor em Direito Constitucional pela Universidade de São Paulo (USP) e Mestre pela PUC-SP. Autor de três livros sobre controle de constitucionalidade e direitos fundamentais, amplamente utilizados em cursos de graduação e pós-graduação. Professor convidado em diversos programas de mestrado e preparatórios para magistratura.",
              linkedin: "https://linkedin.com/in/eduardo-carvalho-neto",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Mariana Rodrigues Lima",
              area: "Direito Penal",
              descricao:
                "Juíza Federal, Mestre em Direito Penal, especialista em crimes econômicos e lavagem de dinheiro, com atuação em casos de grande repercussão nacional.",
              especialidades: ["Direito Penal", "Crimes Econômicos", "Lavagem de Dinheiro"],
              biografia:
                "Juíza Federal desde 2012, com atuação em varas criminais especializadas em crimes contra o sistema financeiro e lavagem de dinheiro. Mestre em Direito Penal pela UERJ, com pesquisas sobre criminalidade econômica. Participou de casos de grande repercussão nacional envolvendo corrupção e organizações criminosas. Ministra cursos de formação para magistrados e membros do Ministério Público.",
              linkedin: "https://linkedin.com/in/mariana-rodrigues-lima",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Ricardo Almeida Santos",
              area: "Direito Civil e Processo Civil",
              descricao:
                "Sócio de escritório de advocacia empresarial, Doutor em Direito Civil, especialista em contratos complexos e litígios empresariais de alto valor.",
              especialidades: ["Direito Civil", "Contratos", "Processo Civil"],
              biografia:
                "Sócio do escritório Santos & Associados, um dos maiores escritórios de advocacia empresarial do país. Doutor em Direito Civil pela USP, com tese sobre contratos empresariais complexos. Atua há 18 anos em litígios de alto valor e assessoria jurídica a grandes corporações. Árbitro da Câmara de Arbitragem da B3 e professor de Direito Civil e Processo Civil em cursos de pós-graduação.",
              linkedin: "https://linkedin.com/in/ricardo-almeida-santos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Fernando Henrique Costa",
              area: "Direito Trabalhista",
              descricao:
                "Juiz do Trabalho, Mestre em Direito do Trabalho, especialista em relações sindicais e reforma trabalhista, com vasta experiência em dissídios coletivos.",
              especialidades: ["Direito do Trabalho", "Relações Sindicais", "Reforma Trabalhista"],
              biografia:
                "Juiz do Trabalho desde 2010, atualmente atuando no Tribunal Regional do Trabalho da 2ª Região (SP). Mestre em Direito do Trabalho pela PUC-SP, com pesquisas sobre a reforma trabalhista e seus impactos. Especialista em dissídios coletivos e negociações sindicais. Autor de artigos sobre direito sindical e professor em cursos preparatórios para magistratura do trabalho.",
              linkedin: "https://linkedin.com/in/fernando-henrique-costa",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Patrícia Mendes Oliveira",
              area: "Direito Tributário",
              descricao:
                "Advogada tributarista, Mestre em Direito Tributário, sócia de escritório especializado, com atuação em planejamento tributário e contencioso fiscal.",
              especialidades: ["Direito Tributário", "Planejamento Tributário", "Contencioso Fiscal"],
              biografia:
                "Sócia do escritório Oliveira Advogados Tributários, especializado em consultoria e contencioso fiscal. Mestre em Direito Tributário pela FGV-SP, com pesquisas sobre reforma tributária. Atua há 15 anos assessorando grandes empresas em planejamento tributário e defesas em processos administrativos e judiciais. Palestrante em congressos nacionais de direito tributário.",
              linkedin: "https://linkedin.com/in/patricia-mendes-oliveira",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Carlos Alberto Ferreira",
              area: "Direito Empresarial",
              descricao:
                "Advogado empresarial, Doutor em Direito Comercial, especialista em fusões e aquisições, recuperação judicial e direito societário.",
              especialidades: ["Direito Empresarial", "M&A", "Recuperação Judicial"],
              biografia:
                "Sócio-fundador do escritório Ferreira & Associados, com mais de 20 anos de experiência em direito empresarial. Doutor em Direito Comercial pela USP, especialista em operações de fusões e aquisições (M&A) e processos de recuperação judicial. Assessorou mais de 50 operações de M&A e conduziu recuperações judiciais de empresas de médio e grande porte. Professor de Direito Empresarial em programas de MBA.",
              linkedin: "https://linkedin.com/in/carlos-alberto-ferreira",
            },
          ]}
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre o curso de Direito</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o curso, modalidades e preparação para OAB.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual é a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    O curso de Direito tem duração de 5 anos (10 semestres), com carga horária total reconhecida pelo
                    MEC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">O curso prepara para o Exame da OAB?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Nossa metodologia inclui preparação específica para o Exame da Ordem com simulados e
                    acompanhamento especializado ao longo do curso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Como funcionam os estágios?</AccordionTrigger>
                  <AccordionContent>
                    São 300 horas de estágio supervisionado em escritórios, órgãos públicos e no escritório modelo da
                    instituição, com acompanhamento de professores experientes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">O diploma EAD tem o mesmo valor?</AccordionTrigger>
                  <AccordionContent>
                    Sim. O diploma EAD tem o mesmo valor e reconhecimento do presencial, permitindo registro na OAB e
                    atuação profissional.
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

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Escolha como Começar sua Jornada no IPOG</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Oferecemos diferentes caminhos para você iniciar sua graduação em Direito. Veja qual se encaixa melhor
                no seu perfil.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Vestibular Digital</h3>
                <p className="text-muted-foreground">
                  Ideal para quem concluiu o ensino médio. Realize nossa prova online de forma rápida e segura para
                  garantir sua vaga.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Nota do ENEM</h3>
                <p className="text-muted-foreground">
                  Aproveite seu desempenho no ENEM. Apresente sua nota e ingresse no IPOG sem a necessidade de um novo
                  processo seletivo.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Portador de Diploma ou Transferência</h3>
                <p className="text-muted-foreground">
                  Se você já possui um diploma ou deseja transferir seu curso, aproveite um processo de ingresso
                  simplificado e valide suas disciplinas já cursadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4" id="preco">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">IPOG: A escolha que conecta você ao sucesso.</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Não adie mais o seu futuro. Faça parte de uma instituição com 98% de satisfação e dê o passo decisivo
                para se tornar um profissional de destaque na área jurídica.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-muted/30 p-8 rounded-lg">
              <div className="border-t pt-6">
                <h4 className="text-xl font-semibold mb-4">Taxa de Matrícula</h4>
                <div className="bg-background p-6 rounded-lg mb-4">
                  <p className="text-lg font-semibold mb-2">R$ 100,00</p>
                  <p className="text-muted-foreground">
                    Pagamento único para garantir sua vaga e iniciar a análise do seu perfil. Após a aprovação, nossa
                    equipe apresentará as condições especiais de mensalidade e bolsas de estudo disponíveis.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Informações do Curso</h4>
                  <p className="text-muted-foreground">Duração: 10 semestres (5 anos)</p>
                  <p className="text-muted-foreground">
                    Investimento flexível: Consulte condições especiais e bolsas de até 100% (OVG e Prouni) com nossa
                    equipe.
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Turmas com início em <strong>Novembro</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Garanta sua vaga em turmas com corpo docente renomado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
