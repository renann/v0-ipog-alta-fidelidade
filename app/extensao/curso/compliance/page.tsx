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

export default function CompliancePage() {
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
                { label: "Compliance" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="EXTENSÃO"
          title="Compliance"
          description="Domine as práticas de conformidade, gestão de riscos e governança corporativa para proteger organizações."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Certificado Reconhecido" },
            { icon: <Clock className="h-5 w-5" />, text: "6 meses" },
            { icon: <Award className="h-5 w-5" />, text: "100% Online" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", onClick: "openAssistantForPrice" }}
          secondaryCTA={{ text: "Baixar conteúdo programático", href: "#grade" }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que fazer Compliance no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Aprenda a implementar programas de compliance eficazes e proteger organizações de riscos legais e
                reputacionais.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Gestão de Riscos</h3>
                <p className="text-muted-foreground">
                  Identifique, avalie e mitigue riscos corporativos de forma estratégica.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Legislação e Normas</h3>
                <p className="text-muted-foreground">
                  Domine LGPD, Lei Anticorrupção e principais normas de compliance.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Governança Corporativa</h3>
                <p className="text-muted-foreground">
                  Implemente estruturas de governança e controles internos eficazes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Aprenda com especialistas em Compliance</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nosso corpo docente é formado por profissionais com vasta experiência em programas de compliance,
                auditoria e governança corporativa.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Experiência Corporativa</h3>
                <p className="text-muted-foreground">
                  Professores que atuam ou atuaram como compliance officers em grandes empresas nacionais e
                  multinacionais.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Certificações Internacionais</h3>
                <p className="text-muted-foreground">
                  Profissionais com certificações reconhecidas como CCEP, GRCP e especializações em governança e gestão
                  de riscos.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Cases Reais</h3>
                <p className="text-muted-foreground">
                  Aprenda com quem implementou programas de compliance em diversos setores e enfrentou desafios reais do
                  mercado.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim da seção de professores */}

        <Modalidades
          title="Modalidade do curso"
          subtitle="Curso 100% online com flexibilidade total para estudar quando e onde quiser."
          modalidades={[
            {
              badge: "EXTENSÃO",
              titulo: "Online",
              descricao: "Aprenda no seu ritmo com conteúdo de alta qualidade",
              beneficios: [
                "Aulas gravadas disponíveis 24/7",
                "Material didático completo",
                "Suporte de tutores especializados",
                "Certificado digital ao final",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
          ]}
        />

        <Empregabilidade
          title="Impacto na carreira"
          subtitle="Profissionais de compliance são essenciais em todas as organizações modernas."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "80%",
              descricao: "promovidos após o curso",
              label: "TAXA DE PROMOÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "5-7 m",
              descricao: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+40%",
              descricao: "em média após o curso",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas em compliance",
            "Indicações para vagas parceiras",
          ]}
          depoimentos={[
            {
              tipo: "simples",
              texto: "O curso me capacitou para estruturar o programa de compliance da empresa.",
              autor: "Aluno IPOG",
            },
            {
              tipo: "simples",
              texto:
                "Aprendi a implementar controles internos eficazes e reduzir riscos corporativos significativamente.",
              autor: "Maria Santos",
              cargo: "Compliance Officer",
            },
            {
              tipo: "video",
              nome: "Ricardo Oliveira",
              cargo: "Gerente de Compliance",
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              thumbnail: "/placeholder.svg?height=400&width=600",
            },
          ]}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />

        <Trilha
          title="Conteúdo Programático"
          subtitle="Módulos práticos e aplicáveis ao dia a dia do compliance"
          etapas={[
            {
              titulo: "Fundamentos de Compliance",
              descricao: "Conceitos essenciais, legislação e estrutura de programas de compliance",
              beneficios: ["Lei Anticorrupção e LGPD", "Estrutura de programas de compliance"],
              badges: ["Módulo 1"],
            },
            {
              titulo: "Gestão de Riscos",
              descricao: "Metodologias de identificação, avaliação e mitigação de riscos",
              beneficios: ["Matriz de riscos", "Controles internos"],
              badges: ["Módulo 2"],
            },
            {
              titulo: "Due Diligence e Investigações",
              descricao: "Técnicas de due diligence de terceiros e investigações internas",
              beneficios: ["Due diligence de fornecedores", "Investigações corporativas"],
              badges: ["Módulo 3"],
            },
            {
              titulo: "Cultura de Compliance",
              descricao: "Implementação de cultura ética e programas de treinamento",
              beneficios: ["Código de conduta", "Canais de denúncia"],
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
                <p className="text-lg text-muted-foreground">
                  Escolha a melhor opção para você. Parcelamento flexível e descontos especiais.
                </p>
              </div>
              <MetodosPagamento />
            </div>
          </div>
        </section>

        <FormasIngresso />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre Compliance</h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre o curso, legislação e aplicação prática.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Preciso ser advogado para fazer o curso?</AccordionTrigger>
                <AccordionContent>
                  Não. O curso é aberto para profissionais de diversas áreas como administração, contabilidade,
                  auditoria, gestão e áreas correlatas que desejam atuar com compliance e governança corporativa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Quais legislações são abordadas no curso?</AccordionTrigger>
                <AccordionContent>
                  O curso aborda Lei Anticorrupção, LGPD, Lei de Lavagem de Dinheiro, Código de Defesa do Consumidor,
                  normas ISO e principais frameworks de compliance e governança corporativa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>O curso oferece cases práticos?</AccordionTrigger>
                <AccordionContent>
                  Sim, o curso é baseado em metodologia prática com análise de cases reais, simulações de programas de
                  compliance e desenvolvimento de políticas e procedimentos aplicáveis ao dia a dia corporativo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Qual a duração do curso?</AccordionTrigger>
                <AccordionContent>
                  O curso tem carga horária de 40 horas, com aulas concentradas que permitem conciliar com sua rotina
                  profissional e aplicação imediata dos conhecimentos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <CtaFinal monthlyFee="R$ 349,00" duration="6 meses" totalCost="R$ 2.094,00" />
      </main>
      <Footer />
    </div>
  )
}
