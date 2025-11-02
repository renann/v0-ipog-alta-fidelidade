import { Header } from "@/components/header"
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

export default function GestaoPessoasPage() {
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
                { label: "Gestão de Pessoas" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="EXTENSÃO"
          title="Gestão de Pessoas"
          description="Desenvolva competências estratégicas para liderar equipes, construir culturas de alta performance e impulsionar resultados por meio de pessoas."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Certificado Reconhecido" },
            { icon: <Clock className="h-5 w-5" />, text: "6 meses" },
            { icon: <Award className="h-5 w-5" />, text: "100% Online" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar conteúdo programático", href: "#grade" }}
        />

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que fazer Gestão de Pessoas no IPOG?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Aprenda a atrair, desenvolver e reter talentos com estratégias modernas de RH.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Recrutamento Estratégico</h3>
                <p className="text-muted-foreground">Domine técnicas modernas de atração e seleção de talentos.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Desenvolvimento de Talentos</h3>
                <p className="text-muted-foreground">Aprenda a criar programas de desenvolvimento e sucessão.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Cultura Organizacional</h3>
                <p className="text-muted-foreground">Construa e fortaleça culturas de alta performance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Aprenda com líderes de RH</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nosso corpo docente é formado por diretores de RH, consultores e especialistas com experiência em
                grandes corporações.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Executivos de RH</h3>
                <p className="text-muted-foreground">
                  Professores que ocupam ou ocuparam posições de liderança em RH de empresas nacionais e multinacionais.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Consultores Especializados</h3>
                <p className="text-muted-foreground">
                  Profissionais com experiência em consultoria de RH, implementando transformações em diversas
                  organizações.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Metodologias Atuais</h3>
                <p className="text-muted-foreground">
                  Aprenda as práticas mais modernas de gestão de pessoas, cultura organizacional e people analytics.
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
              title: "Online",
              description: "Aprenda no seu ritmo com conteúdo de alta qualidade",
              benefits: [
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
          subtitle="Profissionais de RH são cada vez mais estratégicos nas organizações."
          statistics={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "78%",
              description: "promovidos após o curso",
              label: "TAXA DE PROMOÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              value: "6-8 m",
              description: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              value: "+35%",
              description: "em média após o curso",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          statisticsLayout="carousel"
          careerServices={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas de RH",
            "Indicações para vagas parceiras",
          ]}
          testimonial={{
            text: "O curso me deu ferramentas práticas para transformar o RH da minha empresa.",
            author: "Aluno IPOG",
          }}
          ctaButton={{
            text: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          note="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />

        <Trilha
          title="Conteúdo Programático"
          subtitle="Módulos práticos e aplicáveis ao dia a dia do RH"
          etapas={[
            {
              title: "Fundamentos de RH Estratégico",
              description: "Visão estratégica do RH e seu papel nas organizações modernas",
              benefits: ["RH como parceiro de negócios", "Indicadores e métricas de RH"],
              badges: ["Módulo 1"],
            },
            {
              title: "Atração e Seleção",
              description: "Técnicas modernas de recrutamento e seleção de talentos",
              benefits: ["Employer branding", "Entrevistas por competências"],
              badges: ["Módulo 2"],
            },
            {
              title: "Desenvolvimento e Retenção",
              description: "Programas de treinamento, desenvolvimento e planos de carreira",
              benefits: ["Trilhas de desenvolvimento", "Gestão de sucessão"],
              badges: ["Módulo 3"],
            },
            {
              title: "Cultura e Engajamento",
              description: "Construção de cultura organizacional e estratégias de engajamento",
              benefits: ["Pesquisas de clima", "Programas de reconhecimento"],
              badges: ["Módulo 4"],
              highlight: true,
            },
          ]}
          ctaButton={{
            text: "Baixar conteúdo programático completo",
            href: "#grade",
            note: "PDF com detalhamento de todos os módulos",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre Gestão de Pessoas</h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre o curso, metodologia e aplicação prática.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Para quem é indicado este curso?</AccordionTrigger>
                <AccordionContent>
                  O curso é ideal para profissionais de RH, gestores, líderes de equipe e empreendedores que desejam
                  desenvolver competências em gestão de pessoas e liderança estratégica.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Qual a carga horária do curso?</AccordionTrigger>
                <AccordionContent>
                  O curso tem carga horária de 40 horas, distribuídas em módulos práticos e teóricos com foco em
                  aplicação imediata no ambiente corporativo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Recebo certificado ao final?</AccordionTrigger>
                <AccordionContent>
                  Sim, ao concluir o curso você recebe certificado de extensão universitária reconhecido pelo MEC, que
                  pode ser utilizado para progressão de carreira e horas complementares.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>O curso é online ou presencial?</AccordionTrigger>
                <AccordionContent>
                  O curso está disponível nas modalidades online ao vivo e presencial. Ambas oferecem a mesma qualidade
                  de conteúdo e certificação, permitindo que você escolha o formato que melhor se adapta à sua rotina.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <CtaFinal monthlyFee="R$ 299,00" duration="6 meses" totalCost="R$ 1.794,00" />
      </main>
      <Footer />
    </div>
  )
}
