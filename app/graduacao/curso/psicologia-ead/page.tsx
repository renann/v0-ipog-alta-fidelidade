import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { PropostaValorPsicologia } from "@/components/curso-psicologia/proposta-valor-psicologia"
import { JornadaAcademicaPsicologia } from "@/components/curso-psicologia/jornada-academica-psicologia"
import { Modalidades } from "@/components/modalidades"
import { RetornoInvestimentoPsicologia } from "@/components/curso-psicologia/retorno-investimento-psicologia"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { FaqPsicologia } from "@/components/curso-psicologia/faq-psicologia"
import { GraduationCap, Clock, Award } from "lucide-react"
import { TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { FormasIngresso } from "@/components/formas-ingresso"
import { Autoridade } from "@/components/autoridade"
import { CtaFinal } from "@/components/cta-final"

export default function PsicologiaEadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Graduação", href: "/graduacao" },
                { label: "Psicologia EAD" },
              ]}
            />
          </div>
        </div>
        {/* Fim da adição */}
        <Hero
          badge="GRADUAÇÃO"
          title="Psicologia EAD"
          description="Forme-se em Psicologia com flexibilidade, qualidade e reconhecimento MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade Total" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <PropostaValorPsicologia />
        <JornadaAcademicaPsicologia />
        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="O mesmo curso, com diferentes formatos de aprendizado — escolha pelo seu ritmo, rotina e objetivos."
          modalities={[
            {
              badge: "GRADUAÇÃO",
              title: "EAD",
              description: "Para quem busca autonomia e flexibilidade total",
              benefits: [
                "Estude no seu ritmo;",
                "Conteúdos atualizados e interativos;",
                "Tutoria online e suporte contínuo;",
                "Certificação igual ao curso presencial.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              title: "Presencial",
              description: "Para quem valoriza interação e networking",
              benefits: [
                "Aulas presenciais com vivências práticas;",
                "Interação direta com professores e colegas;",
                "Estrutura moderna e laboratórios equipados;",
                "Networking acadêmico e profissional.",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />
        <RetornoInvestimentoPsicologia />
        <Empregabilidade
          title="Inscreva-se no processo seletivo"
          subtitle="Projeção de evolução salarial após o curso, com base em faixas médias de mercado."
          statistics={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "82%",
              description: "empregados ou promovidos",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              value: "4-6 m",
              description: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              value: "+45%",
              description: "em média após formação",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          statisticsLayout="carousel"
          testimonials={[
            {
              text: "A flexibilidade do EAD me permitiu conciliar trabalho, família e estudos. Hoje sou psicóloga clínica e atendo em consultório próprio. O IPOG tornou meu sonho possível.",
              author: "Patrícia Souza",
              role: "Psicóloga Clínica",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              text: "Moro no interior e o EAD do IPOG me deu acesso a professores de referência nacional. A qualidade é a mesma do presencial e hoje trabalho em uma clínica renomada da minha cidade.",
              author: "Ricardo Oliveira",
              role: "Psicólogo Organizacional",
            },
            {
              text: "Trabalho em turno integral e o EAD foi a única forma de realizar meu sonho de ser psicóloga. A plataforma é excelente e o suporte dos professores é incrível. Já estou estagiando na área.",
              author: "Amanda Silva",
              role: "Aluna de Psicologia EAD",
            },
          ]}
          bgColor="bg-background"
        />
        <Trilha
          title="Trilha de Aprendizado"
          subtitle="Conheça a estrutura do curso e como você vai evoluir ao longo da graduação"
          stages={[
            {
              title: "Fundamentos da Psicologia (1º e 2º semestre)",
              description:
                "Construa uma base sólida com o estudo das principais correntes teóricas, da Psicanálise à Análise do Comportamento, e compreenda as bases biológicas em Neuroanatomofisiologia.",
              benefits: ["Compreensão dos principais conceitos e teorias", "Visão crítica sobre diferentes abordagens"],
              badges: ["1º e 2º semestre"],
            },
            {
              title: "Processos e Avaliação (3º e 4º semestre)",
              description:
                "Aprofunde-se em Psicologia Social, Escolar e da Saúde Mental, dominando as primeiras Técnicas de Avaliação Psicológica para diagnósticos precisos.",
              benefits: ["Domínio de instrumentos de avaliação", "Análise de casos práticos"],
              badges: ["3º e 4º semestre"],
            },
            {
              title: "Intervenções e Práticas (5º e 6º semestre)",
              description:
                "Desenvolva competências de atuação em Psicologia Organizacional e Institucional, aprendendo Técnicas de Grupo e iniciando os estágios básicos supervisionados.",
              benefits: ["Experiência em supervisão clínica", "Projetos de intervenção comunitária"],
              badges: ["5º e 6º semestre"],
            },
            {
              title: "Estágios e TCC (7º ao 10º semestre)",
              description:
                "Aplique seu conhecimento em contextos reais com 800h de estágio supervisionado em áreas como Saúde Mental e Práticas Clínicas, enquanto desenvolve seu TCC com orientação individualizada.",
              benefits: ["800h de estágio supervisionado", "Orientação individualizada para TCC"],
              badges: ["7º ao 10º semestre"],
              highlight: true,
            },
          ]}
          ctaButton={{
            text: "Baixar grade curricular completa",
            href: "#grade",
            note: "PDF com detalhamento de todas as disciplinas",
          }}
          backgroundColor="bg-muted/30"
        />

        <Autoridade
          title="Corpo Docente do Curso"
          subtitle="Aprenda com especialistas reconhecidos em Psicologia"
          credentials={[
            "Mestres e Doutores em Psicologia",
            "Experiência clínica e organizacional",
            "Publicações em revistas científicas",
            "Atuação em hospitais e clínicas renomadas",
          ]}
          professors={[
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dra. Ana Carolina Ferreira",
              area: "Psicologia Clínica",
              description:
                "Doutora em Psicologia Clínica pela USP, especialista em Terapia Cognitivo-Comportamental com mais de 15 anos de experiência em atendimento clínico e supervisão.",
              specialties: ["TCC", "Ansiedade", "Depressão"],
              bio: "Doutora em Psicologia Clínica pela Universidade de São Paulo (USP), com especialização em Terapia Cognitivo-Comportamental pelo Beck Institute. Atua há mais de 15 anos em consultório particular e como supervisora clínica. Autora de diversos artigos científicos sobre transtornos de ansiedade e depressão. Coordena o Núcleo de Estudos em TCC do IPOG e ministra cursos de formação para psicólogos.",
              linkedin: "https://linkedin.com/in/ana-carolina-ferreira",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dr. Roberto Almeida Santos",
              area: "Psicologia Organizacional",
              description:
                "Mestre em Psicologia Organizacional, consultor de RH em grandes empresas e especialista em avaliação psicológica e desenvolvimento de lideranças.",
              specialties: ["RH", "Liderança", "Avaliação Psicológica"],
              bio: "Mestre em Psicologia Organizacional pela PUC-SP, com MBA em Gestão de Pessoas. Atua como consultor organizacional há 12 anos, tendo trabalhado com empresas como Ambev, Natura e Magazine Luiza. Especialista em processos de avaliação psicológica, desenvolvimento de lideranças e programas de bem-estar corporativo. Professor convidado em programas de MBA e pós-graduação.",
              linkedin: "https://linkedin.com/in/roberto-almeida-santos",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dra. Juliana Martins Costa",
              area: "Neuropsicologia",
              description:
                "Doutora em Neuropsicologia, especialista em avaliação neuropsicológica e reabilitação cognitiva, com atuação em hospitais e clínicas especializadas.",
              specialties: ["Neuropsicologia", "Reabilitação Cognitiva", "Avaliação"],
              bio: "Doutora em Neuropsicologia pela UNIFESP, com pós-doutorado em Neurociências. Atua no Hospital das Clínicas de São Paulo e em consultório particular. Especialista em avaliação neuropsicológica de crianças, adultos e idosos, com foco em transtornos do neurodesenvolvimento e doenças neurodegenerativas. Coordena o Laboratório de Neuropsicologia do IPOG.",
              linkedin: "https://linkedin.com/in/juliana-martins-costa",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Prof. Dr. Marcelo Henrique Silva",
              area: "Psicanálise",
              description:
                "Doutor em Psicanálise, membro da Sociedade Brasileira de Psicanálise, com vasta experiência em clínica psicanalítica e formação de analistas.",
              specialties: ["Psicanálise", "Clínica", "Formação de Analistas"],
              bio: "Doutor em Psicanálise pela UFRJ, membro efetivo da Sociedade Brasileira de Psicanálise de São Paulo. Atua há 20 anos em consultório particular e como analista didata, formando novos psicanalistas. Autor de três livros sobre teoria psicanalítica contemporânea e articulista regular em revistas especializadas. Coordena grupos de estudos sobre Freud e Lacan.",
              linkedin: "https://linkedin.com/in/marcelo-henrique-silva",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dra. Fernanda Oliveira Ramos",
              area: "Psicologia Social",
              description:
                "Doutora em Psicologia Social, pesquisadora em políticas públicas e saúde mental comunitária, com projetos em comunidades vulneráveis.",
              specialties: ["Psicologia Social", "Políticas Públicas", "Saúde Mental Comunitária"],
              bio: "Doutora em Psicologia Social pela USP, com pesquisas focadas em políticas públicas de saúde mental e intervenções comunitárias. Coordena projetos sociais em comunidades vulneráveis há 10 anos, desenvolvendo programas de prevenção e promoção de saúde mental. Consultora do Ministério da Saúde e autora de publicações sobre psicologia comunitária.",
              linkedin: "https://linkedin.com/in/fernanda-oliveira-ramos",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dr. Paulo Ricardo Mendes",
              area: "Psicologia do Desenvolvimento",
              description:
                "Mestre em Psicologia do Desenvolvimento, especialista em infância e adolescência, com atuação em escolas e clínicas de atendimento infantil.",
              specialties: ["Desenvolvimento Infantil", "Psicologia Escolar", "Adolescência"],
              bio: "Mestre em Psicologia do Desenvolvimento pela UFRGS, especialista em atendimento clínico de crianças e adolescentes. Atua há 14 anos em consultório particular e como psicólogo escolar. Desenvolve programas de orientação a pais e professores sobre desenvolvimento infantil e dificuldades de aprendizagem. Autor de artigos sobre transtornos do neurodesenvolvimento.",
              linkedin: "https://linkedin.com/in/paulo-ricardo-mendes",
            },
          ]}
        />

        <CtaFinal
          title="Invista na sua carreira com a instituição que é referência nacional."
          description="Taxa de Inscrição: R$ 100,00 | Mensalidades: a partir de R$ 499,00+"
          enrollmentFee="R$ 100,00"
          monthlyFee="R$ 499,00"
          duration="5 anos"
          totalCost="R$ 29.940,00"
          nextClassDate="Novembro"
          promotionDeadline="30 de Outubro"
        />

        <FaqPsicologia />
        <FormasIngresso />
      </main>
      <Footer />
    </div>
  )
}
