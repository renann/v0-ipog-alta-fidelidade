import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Scale } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

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
              valor: "Formação",
              descricao: "que Acelera sua Carreira",
              label: "IMPACTO*",
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
              "A experiência nos laboratórios de prática jurídica e o contato direto com professores que são juízes e advogados renomados foram decisivos para minha carreira. Saí preparado para um mercado altamente competitivo.",
            autor: "Egresso do curso de Direito",
          }}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa de interna."
          bgColor="bg-white"
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
