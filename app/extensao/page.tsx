"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoExtensao } from "@/components/extensao/metodo-extensao"
import { Modalidades } from "@/components/modalidades"
import { Cursos } from "@/components/cursos"
import { Jornadas } from "@/components/jornadas"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Zap, TrendingUp, RefreshCw, Clock, Users, Award, BookOpen } from "lucide-react"
import { ResultadosReais } from "@/components/resultados-reais"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function ExtensaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Extensão" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <Hero
          badge="EXTENSÃO IPOG"
          title="Expanda seus horizontes profissionais e acadêmicos"
          description="Desenvolva habilidades essenciais com conteúdo focado, metodologia hands-on e a credibilidade de uma certificação IPOG para acelerar seu impacto profissional."
          valueBadges={[
            { icon: <Zap className="w-5 h-5" />, text: "Aplicação Imediata no Trabalho" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "Aprenda na Prática, Gere Resultados" },
            { icon: <Award className="w-5 h-5" />, text: "Certificação de Peso IPOG" },
          ]}
          primaryCTA={{ text: "Encontrar meu curso", href: "/catalogo?tipo=extensao" }}
          secondaryCTA={{ text: "Falar com consultor", onClick: openAssistantForConsultor }}
        />

        {/* Dilema Section */}
        <section className="w-full py-12 md:py-16">
          <Dilema
            title="Sua carreira exige atualização constante, mas a rotina não espera?"
            subtitle="A Extensão IPOG foi desenhada para profissionais que precisam de resultados rápidos, transformando aprendizado em aplicação imediata com uma metodologia que respeita sua agenda."
            problems={[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Teoria excessiva, pouca aplicabilidade",
                solution:
                  "Nossos cursos entregam conteúdo prático, com ferramentas e templates para você usar na semana seguinte.",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Falta de tempo e flexibilidade",
                solution:
                  "Oferecemos formatos EAD, Ao Vivo e Presencial, pensados para se encaixar na sua agenda profissional sem abrir mão da qualidade.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Insegurança sobre o valor do certificado",
                solution:
                  "Receba uma certificação universitária com o peso da marca IPOG, uma instituição com mais de 20 anos de reconhecimento nacional.",
              },
            ]}
            backgroundColor="bg-muted/30"
          />
        </section>

        {/* MetodoExtensao Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodoExtensao />
        </section>

        {/* Modalidades Section */}
        <section className="w-full py-12 md:py-16">
          <Modalidades
            title="Escolha o formato ideal para a sua rotina"
            subtitle="Em qualquer modalidade, você conta com a excelência de conteúdo e a credibilidade da certificação IPOG."
            modalities={[
              {
                badge: "EXTENSÃO",
                title: "EAD (Gravado): Autonomia e Flexibilidade Total",
                description:
                  "Aprenda no seu ritmo, quando e onde quiser, com acesso 24/7 a aulas e materiais práticos. Ideal para quem tem uma agenda imprevisível.",
                benefits: [
                  "Aulas gravadas disponíveis 24/7",
                  "Aprenda no seu ritmo",
                  "Materiais práticos para download",
                  "Certificação IPOG reconhecida",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ead",
                buttonText: "Ver cursos de Extensão - EAD",
              },
              {
                badge: "EXTENSÃO",
                title: "Ao Vivo (Online): Interação e Suporte de Especialistas",
                description:
                  "Participe de aulas síncronas, tire dúvidas em tempo real com professores de mercado e construa networking sem sair de casa.",
                benefits: [
                  "Aulas síncronas com especialistas",
                  "Tire dúvidas em tempo real",
                  "Networking com profissionais da área",
                  "Exercícios práticos com feedback",
                ],
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
                buttonText: "Ver cursos de Extensão - Ao Vivo",
              },
              {
                badge: "EXTENSÃO",
                title: "Presencial: Imersão e Experiência Hands-On",
                description:
                  "Vivencie uma experiência intensiva em laboratórios modernos, valide soluções na prática e fortaleça sua rede de contatos presencialmente.",
                benefits: [
                  "Experiência hands-on intensiva",
                  "Dinâmicas práticas e estudos de caso",
                  "Conexões presenciais fortes",
                  "Certificação imediata",
                ],
                link: "/catalogo?tipo=extensao&modalidade=presencial",
                buttonText: "Ver cursos de Extensão - Presencial",
              },
            ]}
            bgColor="bg-muted/30"
          />
        </section>

        {/* Cursos Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Cursos
            badge="CURSOS EM DESTAQUE"
            title="Encontre sua atualização"
            subtitle="Gestão & Operações • Tecnologia & Dados • Marketing & Vendas • Pessoas & Cultura"
            cursos={[
              {
                nome: "Gestão de Projetos Ágeis",
                duracao: "40h",
                description: "Aplique Scrum e Kanban na prática e gerencie projetos com agilidade e eficiência.",
                modalidade: "EAD • Presencial",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
              {
                nome: "Marketing Digital",
                duracao: "60h",
                description: "Domine estratégias digitais e transforme dados em resultados mensuráveis.",
                modalidade: "EAD • Ao Vivo",
                link: "/extensao/curso/marketing-digital",
              },
              {
                nome: "Inteligência Artificial Aplicada",
                duracao: "80h",
                description: "Implemente soluções de IA no seu negócio e automatize processos estratégicos.",
                modalidade: "Ao Vivo • Presencial",
                link: "/extensao/curso/inteligencia-artificial-aplicada",
              },
            ]}
            ctaText="Ver curso"
            footerCTA={{
              text: "Ver todos os cursos de Extensão",
              link: "/catalogo?tipo=extensao",
            }}
          />
        </section>

        {/* Jornadas Section */}
        <section className="w-full py-12 md:py-16">
          <Jornadas
            title="Soluções direcionadas para seu desafio profissional"
            jornadas={[
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Para Resolver um Gap Imediato",
                promise:
                  "Cursos curtíssimos e práticos, com templates e checklists, para você aplicar a solução na semana seguinte e gerar retorno rápido.",
                problems:
                  "Você precisa resolver um problema específico agora, mas não tem tempo para cursos longos ou teoria excessiva.",
                gain: "Ferramentas prontas, aplicação imediata e resultados mensuráveis em dias, não meses.",
                cta: "Resolver meu gap agora",
                href: "/catalogo?tipo=extensao",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Para Acelerar sua Recolocação",
                promise:
                  "Desenvolva projetos guiados, monte um portfólio tangível e conquiste uma certificação que impressiona recrutadores e abre portas no mercado.",
                problems:
                  "Você está em transição de carreira ou recolocação e precisa provar suas competências de forma tangível.",
                gain: "Portfólio prático, projetos reais e certificação IPOG que validam suas habilidades para o mercado.",
                cta: "Construir meu portfólio",
                href: "/catalogo?tipo=extensao",
              },
              {
                icon: <RefreshCw className="h-6 w-6" />,
                title: "Para se Manter Relevante no Mercado",
                promise:
                  "Domine as ferramentas e habilidades emergentes da sua área. Workshops práticos e conteúdo sempre atualizado para você não ficar para trás.",
                problems:
                  "Você sente que está ficando para trás com as mudanças rápidas do mercado e precisa se atualizar constantemente.",
                gain: "Acesso a conteúdo atualizado, ferramentas emergentes e networking com profissionais da sua área.",
                cta: "Ver cursos de atualização",
                href: "/catalogo?tipo=extensao",
              },
            ]}
          />
        </section>

        {/* ResultadosReais Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <ResultadosReais
            title="O impacto da Extensão IPOG na sua carreira"
            subtitle="Nossos alunos comprovam: o conhecimento adquirido aqui se transforma em resultado mensurável e avanço profissional."
            statistics={[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                value: "92%",
                description: "aplicaram no trabalho na primeira semana",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-primary" />,
                value: "85%",
                description: "geraram portfólio e projetos práticos",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                value: "78%",
                description: "obtiveram promoção ou transição de área",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                value: "50mil+",
                description: "profissionais na rede IPOG",
              },
            ]}
            testimonials={[
              {
                type: "antes-depois",
                name: "Profissional em Operações",
                role: "Egresso IPOG",
                before: "Processos manuais e sem indicadores",
                after: "Usei o material do curso já na semana seguinte",
                impact:
                  "Com os templates do curso, automatizei um relatório que levava horas. O investimento no curso se pagou na primeira semana.",
              },
              {
                type: "antes-depois",
                name: "Profissional em Marketing",
                role: "Egressa IPOG",
                before: "Fora do mercado há 6 meses",
                after: "Entreguei um projeto-piloto do curso",
                impact:
                  "O projeto prático do curso virou meu principal diferencial na entrevista. Consegui a vaga mostrando o que eu era capaz de fazer.",
              },
            ]}
          />
        </section>

        {/* Autoridade Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            title="Quem faz, recomenda"
            subtitle="Docentes de mercado, entregáveis práticos e comunidade ativa de profissionais"
            credentials={[
              {
                icon: <Users className="w-6 h-6 text-foreground" />,
                text: "Docentes de mercado",
                description: "Profissionais atuantes que ensinam o que realmente funciona",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-foreground" />,
                text: "Entregáveis práticos",
                description: "Checklists, templates e projetos que viram portfólio",
              },
              {
                icon: <Award className="w-6 h-6 text-foreground" />,
                text: "Certificação IPOG",
                description: "Reconhecimento nacional com indicação de carga horária",
              },
            ]}
            professors={[
              {
                name: "Dr. Roberto Silva",
                area: "Marketing Digital",
                bio: "15 anos de experiência em estratégias digitais para grandes empresas",
              },
              {
                name: "Dra. Ana Costa",
                area: "Gestão de Pessoas",
                bio: "Especialista em liderança e desenvolvimento de equipes de alta performance",
              },
              {
                name: "Dr. Paulo Mendes",
                area: "Compliance",
                bio: "Consultor em conformidade e gestão de riscos para empresas nacionais",
              },
            ]}
            bgColor="bg-muted/30"
          />
        </section>

        {/* AcaoFinal Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            title="Pronto(a) para transformar conhecimento em resultado?"
            description="Não adie seu crescimento. Encontre o curso de extensão que resolve seu desafio hoje e comece a aplicar o conhecimento imediatamente."
            primaryButton={{
              text: "Escolher meu curso agora",
              href: "/catalogo?tipo=extensao",
            }}
            secondaryButton={{
              text: "Falar com consultor",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Perguntas Frequentes sobre Extensão"
          subtitle="Tire suas dúvidas sobre nossos cursos de extensão universitária"
          items={[
            {
              pergunta: "Qual a diferença entre curso de extensão e pós-graduação?",
              resposta:
                "Cursos de extensão são mais curtos e focados em habilidades específicas, com duração de 20 a 120 horas. Já a pós-graduação é mais longa (mínimo 360h) e oferece uma formação mais aprofundada com certificação de especialista. A extensão é ideal para atualização rápida e aplicação imediata, enquanto a pós é voltada para especialização completa.",
            },
            {
              pergunta: "Preciso ter graduação para fazer curso de extensão?",
              resposta:
                "Não necessariamente. A maioria dos nossos cursos de extensão está aberta para qualquer profissional interessado em desenvolver novas habilidades, independente de ter ou não diploma de graduação. Alguns cursos específicos podem ter pré-requisitos, que são informados na página do curso.",
            },
            {
              pergunta: "Quanto tempo duram os cursos de extensão?",
              resposta:
                "A duração varia de acordo com o curso e pode ir de 20 horas (cursos rápidos para resolver gaps específicos) até 120 horas (cursos mais completos para desenvolvimento de portfólio). Você pode consultar a carga horária específica na página de cada curso.",
            },
            {
              pergunta: "O certificado de extensão tem validade e é reconhecido?",
              resposta:
                "Sim! Os certificados de extensão universitária do IPOG são emitidos por uma instituição credenciada pelo MEC e têm validade nacional. Eles podem ser utilizados para comprovação de horas complementares, processos seletivos, progressão de carreira e enriquecimento de currículo.",
            },
            {
              pergunta: "Posso usar o certificado para horas complementares da graduação?",
              resposta:
                "Sim! Nossos cursos de extensão são certificados como extensão universitária e podem ser utilizados para cumprimento de horas complementares em cursos de graduação. Verifique com a coordenação do seu curso de graduação as regras específicas para aproveitamento.",
            },
            {
              pergunta: "Como funciona o formato EAD nos cursos de extensão?",
              resposta:
                "No formato EAD, você tem acesso a aulas gravadas disponíveis 24/7, materiais complementares para download, exercícios práticos e suporte de tutores. Você estuda no seu ritmo, quando e onde quiser, precisando apenas de conexão com internet. Alguns cursos podem ter encontros síncronos opcionais.",
            },
            {
              pergunta: "Posso fazer vários cursos de extensão ao mesmo tempo?",
              resposta:
                "Sim! Como os cursos de extensão são mais curtos e focados, muitos alunos optam por fazer mais de um curso simultaneamente para desenvolver múltiplas competências. Você pode montar sua própria trilha de aprendizado de acordo com seus objetivos profissionais.",
            },
            {
              pergunta: "Qual a carga horária mínima de um curso de extensão?",
              resposta:
                "Nossos cursos de extensão variam de 20 a 120 horas. Cursos mais curtos (20-40h) são focados em resolver gaps específicos e aplicação imediata. Cursos mais longos (60-120h) permitem desenvolvimento de projetos práticos e construção de portfólio mais robusto.",
            },
            {
              pergunta: "Como funciona a avaliação nos cursos de extensão?",
              resposta:
                "A avaliação varia de acordo com o curso, mas geralmente inclui exercícios práticos, estudos de caso, projetos aplicados e/ou avaliações online. O foco é sempre na aplicação prática do conhecimento. Para receber o certificado, é necessário atingir a nota mínima e a frequência exigida.",
            },
            {
              pergunta: "Qual o investimento médio em um curso de extensão?",
              resposta:
                "O investimento varia de acordo com a carga horária e modalidade do curso. Em média, os valores variam de R$ 200 a R$ 800. Oferecemos condições especiais de pagamento, descontos para pagamento à vista e benefícios para alunos IPOG+. Consulte a página específica de cada curso para valores atualizados.",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
