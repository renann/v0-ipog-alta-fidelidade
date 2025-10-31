"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MetodoIpog } from "@/components/graduacao/metodo-ipog"
import { Cursos } from "@/components/cursos"
import { Jornadas } from "@/components/jornadas"
import { ResultadosReais } from "@/components/resultados-reais"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { GraduationCap, Briefcase, ArrowRightLeft, TrendingUp, Users, Building2, Award, BookOpen } from "lucide-react"
import { Dilema } from "@/components/dilema"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function GraduacaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Graduação" }]} />
          </div>
        </div>

        <Hero
          badge="GRADUAÇÃO"
          title="Construa sua carreira com ensino de excelência, valor estratégico e experiência prática"
          description="Aprenda com professores de mercado, participe de projetos reais e conecte teoria e prática desde o primeiro dia. Uma formação reconhecida pelo MEC que acelera sua empregabilidade e transforma seu potencial em sucesso."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Qualidade Reconhecida" },
            { icon: <GraduationCap className="h-5 w-5" />, text: "Corpo Docente de Mercado" },
            { icon: <GraduationCap className="h-5 w-5" />, text: "Formatos Flexíveis" },
          ]}
          primaryCTA={{ text: "Encontre seu curso", href: "/catalogo?tipo=graduacao" }}
          secondaryCTA={{ text: "Falar com consultor" }}
        />

        <Dilema
          title="O futuro profissional exige mais que um diploma"
          subtitle="Sabemos que a incerteza sobre o investimento, a grade curricular e a empregabilidade futura são barreiras reais."
          solucao="Por isso, a Graduação IPOG oferece uma jornada de aprendizado estratégica, com foco prático, suporte real e a garantia de uma formação sólida que abre portas no mercado de trabalho."
        />

        <MetodoIpog />

        <Cursos
          badge="GRADUAÇÃO"
          title="Encontre a formação que vai transformar sua carreira"
          cursos={[
            {
              nome: "Psicologia",
              duracao: "5 anos",
              descricao:
                "Ciências humanas e comportamento para transformar vidas através da compreensão do ser humano.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao: "Ciências jurídicas e advocacia com foco em justiça e transformação social.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
            {
              nome: "Arquitetura e Urbanismo",
              duracao: "5 anos",
              descricao: "Projete espaços que transformam vidas e cidades com criatividade e técnica.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/arquitetura",
            },
          ]}
          ctaText="Ver curso"
          footerCTA={{
            text: "Ver todos os cursos disponíveis",
            link: "/catalogo?tipo=graduacao",
          }}
        />

        <Jornadas
          title="Qual é o seu próximo passo?"
          subtitle="O IPOG tem a jornada certa para cada momento da sua carreira. Escolha o caminho que conecta você ao sucesso."
          jornadas={[
            {
              icon: <GraduationCap className="w-8 h-8 text-primary" />,
              titulo: "Primeira Graduação",
              promessa: "Para quem busca: Uma formação sólida para entrar no mercado com confiança.",
              dores: "",
              ganho:
                "Solução IPOG: Conteúdo prático, ferramentas de simulação de bolsas e mensalidades, e projetos reais que garantem empregabilidade desde o início.",
              cta: "Comece sua graduação",
              href: "/graduacao/jovem-ingresso",
            },
            {
              icon: <Briefcase className="w-8 h-8 text-primary" />,
              titulo: "Segunda Graduação",
              promessa: "Para quem busca: Validar sua experiência ou fazer uma transição de carreira segura.",
              dores: "",
              ganho:
                "Solução IPOG: Aproveite disciplinas já cursadas e conquiste um diploma de peso em menos tempo, com um currículo tão prático que você aplica o conhecimento em sua carreira em até 90 dias.",
              cta: "Acelere sua nova formação",
              href: "/graduacao/segunda-graduacao",
            },
            {
              icon: <ArrowRightLeft className="w-8 h-8 text-primary" />,
              titulo: "Transferência Externa",
              promessa: "Para quem busca: Concluir seus estudos em uma instituição com mais qualidade e estrutura.",
              dores: "",
              ganho:
                "Solução IPOG: Aproveite seus créditos com nosso simulador de disciplinas e tempo restante, em um processo ágil e com um plano de estudos personalizado.",
              cta: "Simule sua transferência",
              href: "/catalogo?tipo=graduacao",
            },
          ]}
        />

        <ResultadosReais
          title="A escolha que gera resultados reais na carreira"
          subtitle="Resultados comprovados que transformam carreiras"
          estatisticas={[
            {
              icone: <TrendingUp className="w-12 h-12 text-primary" />,
              valor: "89%",
              label: "Avanço na carreira em menos de 6 meses",
            },
            {
              icone: <Users className="w-12 h-12 text-primary" />,
              valor: "95%",
              label: "Egressos empregados na área de formação",
            },
            {
              icone: <Building2 className="w-12 h-12 text-primary" />,
              valor: "+2.000",
              label: "Empresas com egressos IPOG",
            },
          ]}
          depoimentos={[
            {
              tipo: "simples",
              texto:
                "O IPOG não apenas ensina, ele prepara para o sucesso. A metodologia prática e o foco em empregabilidade foram decisivos para minha promoção em menos de seis meses.",
              nome: "Maria Silva",
              cargo: "Egressa de Administração",
            },
            {
              tipo: "simples",
              texto:
                "Aprender com mestres e doutores que vivem o mercado é um diferencial incomparável. O conhecimento adquirido nas aulas é aplicado diretamente na minha rotina profissional.",
              nome: "João Santos",
              cargo: "Egresso de Psicologia",
            },
          ]}
        />

        <Autoridade
          title="Aprenda com quem o mercado respeita"
          subtitle="Nosso corpo docente é formado por mestres e doutores com vasta experiência prática, prontos para conectar você às exigências reais da sua futura profissão."
          credenciais={[
            { icone: <Award className="w-5 h-5 text-muted-foreground" />, texto: "MEC Credenciado" },
            {
              icone: <Users className="w-5 h-5 text-muted-foreground" />,
              texto: "+100 Professores Mestres e Doutores",
            },
            { icone: <BookOpen className="w-5 h-5 text-muted-foreground" />, texto: "20+ Anos de Experiência" },
            { icone: <GraduationCap className="w-5 h-5 text-muted-foreground" />, texto: "Metodologia Validada" },
          ]}
          professores={[
            {
              nome: "Dr. João Silva",
              bio: "Doutor em Psicologia Clínica, 15 anos de experiência em avaliação psicológica",
              area: "Psicologia Clínica",
            },
            {
              nome: "Dra. Maria Santos",
              bio: "Mestre em Neuropsicologia, especialista em testes projetivos",
              area: "Neuropsicologia",
            },
            {
              nome: "Prof. Carlos Oliveira",
              bio: "PhD em Psicometria, autor de 3 livros sobre avaliação",
              area: "Psicometria",
            },
            {
              nome: "Dra. Ana Costa",
              bio: "Doutora em Psicologia Organizacional, consultora de RH",
              area: "Psicologia Organizacional",
            },
          ]}
          tituloProfessores="Conheça alguns de nossos professores"
          bgColor="bg-muted/30"
        />

        <AcaoFinal
          title="Dê o passo decisivo para sua carreira."
          descricao="A escolha que conecta você ao sucesso. Encontre seu curso e comece a construir um futuro de conquistas com a excelência, a prática e o reconhecimento que só o IPOG oferece."
          botaoPrimario={{
            texto: "Encontre seu curso",
            href: "/catalogo?tipo=graduacao",
          }}
          botaoSecundario={{
            texto: "Falar com consultor",
            onClick: openAssistantForConsultor,
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
