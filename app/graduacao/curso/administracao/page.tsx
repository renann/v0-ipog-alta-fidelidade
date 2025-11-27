import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { MetodosPagamento } from "@/components/metodos-pagamento"
import { CtaFinal } from "@/components/cta-final"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { FormasIngresso } from "@/components/formas-ingresso"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AdministracaoPage() {
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
                { label: "Administração" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          modalidade="EAD / Presencial"
          title="Administração"
          description="Forme-se em Administração e desenvolva competências estratégicas para liderar organizações e impulsionar resultados."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade Total" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Quero me inscrever", onClick: "openAssistantForPrice" }}
          secondaryCTA={{ text: "Baixar grade curricular", href: "#grade" }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher Administração no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Desenvolva uma visão estratégica e aprenda a gerir pessoas, processos e recursos com excelência.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Gestão Estratégica</h3>
                <p className="text-muted-foreground">
                  Aprenda a tomar decisões estratégicas baseadas em dados e análise de mercado.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Liderança e Pessoas</h3>
                <p className="text-muted-foreground">
                  Desenvolva habilidades de liderança e gestão de equipes de alto desempenho.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Empreendedorismo</h3>
                <p className="text-muted-foreground">
                  Aprenda a identificar oportunidades e desenvolver negócios inovadores.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Aprenda com executivos, empreendedores e consultores de mercado
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nosso corpo docente é formado por gestores, executivos e empreendedores com experiência em empresas de
                diversos setores e portes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Executivos de Mercado</h3>
                <p className="text-muted-foreground">
                  Professores que ocupam ou ocuparam cargos de liderança em empresas nacionais e multinacionais.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Empreendedores de Sucesso</h3>
                <p className="text-muted-foreground">
                  Profissionais que fundaram e gerenciam seus próprios negócios, compartilhando experiências reais do
                  mercado.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Consultores Especializados</h3>
                <p className="text-muted-foreground">
                  Especialistas em gestão estratégica, finanças, marketing e operações com experiência em consultoria
                  empresarial.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim da seção de professores */}

        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="O mesmo curso, com diferentes formatos de aprendizado — escolha pelo seu ritmo, rotina e objetivos."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem busca autonomia e flexibilidade total",
              beneficios: [
                "Estude no seu ritmo",
                "Conteúdos atualizados e interativos",
                "Tutoria online e suporte contínuo",
                "Certificação igual ao curso presencial",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza interação e networking",
              beneficios: [
                "Aulas presenciais com cases reais",
                "Interação direta com professores e colegas",
                "Estrutura moderna e laboratórios equipados",
                "Networking acadêmico e profissional",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />

        <Empregabilidade
          title="Empregabilidade após a graduação"
          subtitle="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "85%",
              descricao: "empregados ou promovidos",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "3-5 m",
              descricao: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+50%",
              descricao: "em média após formação",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "A graduação em Administração no IPOG me preparou para o mundo real dos negócios. Aprendi com cases reais e professores que são executivos de grandes empresas. Hoje sou gerente em uma multinacional.",
              autor: "Pedro Henrique",
              cargo: "Gerente de Operações",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "O IPOG me deu a base que eu precisava para empreender. Durante a graduação desenvolvi meu plano de negócios e hoje tenho minha própria empresa com 30 funcionários. A metodologia prática foi essencial.",
              autor: "Larissa Martins",
              cargo: "CEO e Empreendedora",
            },
            {
              texto:
                "Entrei no IPOG como assistente administrativo e saí como analista. A formação me deu as competências que o mercado valoriza e em 6 meses após formado fui promovido a coordenador.",
              autor: "Gustavo Lima",
              cargo: "Coordenador Administrativo",
            },
          ]}
          servicos={[
            { texto: "Revisão de currículo e Linkedin" },
            { texto: "Mentorias com especialistas de mercado" },
            { texto: "Indicações para vagas parceiras" },
          ]}
          botaoCTA={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          bgColor="bg-background"
        />

        <Trilha
          title="Trilha de Aprendizado"
          subtitle="Conheça a estrutura do curso e como você vai evoluir ao longo da graduação"
          etapas={[
            {
              numero: "1",
              titulo: "Fundamentos da Administração",
              descricao: "Base teórica em gestão, economia, contabilidade e fundamentos organizacionais",
              beneficios: ["Compreensão dos principais conceitos de gestão", "Visão sistêmica das organizações"],
              badges: ["1º e 2º semestre"],
            },
            {
              numero: "2",
              titulo: "Gestão de Processos e Pessoas",
              descricao: "Aprofundamento em gestão de recursos humanos, operações e processos organizacionais",
              beneficios: ["Técnicas de gestão de equipes", "Otimização de processos"],
              badges: ["3º e 4º semestre"],
            },
            {
              numero: "3",
              titulo: "Estratégia e Finanças",
              descricao:
                "Desenvolvimento de competências em planejamento estratégico, finanças corporativas e análise de investimentos",
              beneficios: ["Análise financeira avançada", "Planejamento estratégico"],
              badges: ["5º e 6º semestre"],
            },
            {
              numero: "4",
              titulo: "Empreendedorismo e TCC",
              descricao: "Desenvolvimento de projetos empreendedores e Trabalho de Conclusão de Curso",
              beneficios: ["Plano de negócios completo", "Orientação individualizada para TCC"],
              badges: ["7º e 8º semestre"],
              destaque: true,
            },
          ]}
          bgColor="bg-muted/30"
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <MetodosPagamento />
          </div>
        </section>

        <FormasIngresso />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre o curso de Administração</h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre o curso, modalidades e atuação profissional.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>O curso de Administração é reconhecido pelo MEC?</AccordionTrigger>
                <AccordionContent>
                  Sim, o curso de Administração do IPOG é reconhecido pelo MEC e segue todas as diretrizes curriculares
                  nacionais para a formação de administradores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Qual a diferença entre as modalidades EAD e Presencial?</AccordionTrigger>
                <AccordionContent>
                  A modalidade EAD oferece flexibilidade total para estudar no seu ritmo, com conteúdos online e
                  tutoria. A modalidade Presencial proporciona interação direta com professores e colegas, networking e
                  acesso a laboratórios. Ambas têm a mesma certificação e qualidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Quais são as principais áreas de atuação?</AccordionTrigger>
                <AccordionContent>
                  O administrador pode atuar em diversas áreas como gestão de pessoas, finanças, marketing, operações,
                  logística, consultoria empresarial, empreendedorismo, gestão pública e terceiro setor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Preciso ter experiência prévia para fazer o curso?</AccordionTrigger>
                <AccordionContent>
                  Não é necessário ter experiência prévia. O curso foi desenvolvido para formar profissionais desde o
                  início, com uma base sólida de conhecimentos teóricos e práticos em gestão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>O IPOG oferece suporte para colocação no mercado?</AccordionTrigger>
                <AccordionContent>
                  Sim, oferecemos serviços de carreira incluindo revisão de currículo, mentorias com especialistas,
                  indicações para vagas parceiras e orientação profissional durante e após a graduação.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <CtaFinal
          title="Invista na sua carreira com a instituição que é referência nacional."
          description="Taxa de Inscrição: R$ 100,00 | Mensalidades: a partir de R$ 549,00+"
          enrollmentFee="R$ 100,00"
          monthlyFee="R$ 549,00"
          duration="4 anos"
          totalCost="R$ 26.352,00"
          nextClassDate="Novembro"
          promotionDeadline="30 de Outubro"
        />
      </main>
      <Footer />
    </div>
  )
}
