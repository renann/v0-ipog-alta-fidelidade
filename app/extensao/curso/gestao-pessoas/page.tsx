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
          description="Desenvolva competências estratégicas em gestão de talentos, cultura organizacional e liderança de equipes."
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
          titulo="Impacto na carreira"
          subtitulo="Profissionais de RH são cada vez mais estratégicos nas organizações."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "78%",
              descricao: "promovidos após o curso",
              label: "TAXA DE PROMOÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "6-8 m",
              descricao: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+35%",
              descricao: "em média após o curso",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas de RH",
            "Indicações para vagas parceiras",
          ]}
          depoimento={{
            texto: "O curso me deu ferramentas práticas para transformar o RH da minha empresa.",
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
          titulo="Conteúdo Programático"
          subtitulo="Módulos práticos e aplicáveis ao dia a dia do RH"
          etapas={[
            {
              titulo: "Fundamentos de RH Estratégico",
              descricao: "Visão estratégica do RH e seu papel nas organizações modernas",
              beneficios: ["RH como parceiro de negócios", "Indicadores e métricas de RH"],
              badges: ["Módulo 1"],
            },
            {
              titulo: "Atração e Seleção",
              descricao: "Técnicas modernas de recrutamento e seleção de talentos",
              beneficios: ["Employer branding", "Entrevistas por competências"],
              badges: ["Módulo 2"],
            },
            {
              titulo: "Desenvolvimento e Retenção",
              descricao: "Programas de treinamento, desenvolvimento e planos de carreira",
              beneficios: ["Trilhas de desenvolvimento", "Gestão de sucessão"],
              badges: ["Módulo 3"],
            },
            {
              titulo: "Cultura e Engajamento",
              descricao: "Construção de cultura organizacional e estratégias de engajamento",
              beneficios: ["Pesquisas de clima", "Programas de reconhecimento"],
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
                <h2 className="text-3xl font-bold mb-4">Formas de Pagamento</h2>
                <p className="text-muted-foreground">
                  Escolha a melhor opção para você. Parcelamento flexível e descontos especiais.
                </p>
              </div>
              <MetodosPagamento />
            </div>
          </div>
        </section>

        <FormasIngresso />
        <CtaFinal monthlyFee="R$ 299,00" duration="6 meses" totalCost="R$ 1.794,00" />
      </main>
      <Footer />
    </div>
  )
}
