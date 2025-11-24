import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { PropostaValorPsicologia } from "@/components/curso-psicologia/proposta-valor-psicologia"
import { JornadaAcademicaPsicologia } from "@/components/curso-psicologia/jornada-academica-psicologia"
import { Modalidades } from "@/components/modalidades"
import { RetornoInvestimentoPsicologia } from "@/components/curso-psicologia/retorno-investimento-psicologia"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { FaqPsicologia } from "@/components/curso-psicologia/faq-psicologia"
import { Clock, Award, FileCheck } from "lucide-react"
import { TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { FormasIngresso } from "@/components/formas-ingresso"
import { Autoridade } from "@/components/autoridade"
import { CtaFinal } from "@/components/cta-final"
import { Users, BookOpen } from "lucide-react"

export default function PsicologiaEadTransferenciaPage() {
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
                { label: "Transferência", href: "/graduacao/transferencia" },
                { label: "Psicologia EAD" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Transfira sua Graduação em Psicologia para o IPOG"
          description="Aproveite seus créditos, economize tempo e conclua sua formação com a qualidade e o reconhecimento que sua carreira merece."
          valueBadges={[
            { icon: <Award className="h-5 w-5" />, text: "Qualidade IPOG Reconhecida" },
            { icon: <FileCheck className="h-5 w-5" />, text: "Aproveitamento de Disciplinas" },
            { icon: <Clock className="h-5 w-5" />, text: "Análise Rápida de Histórico" },
          ]}
          primaryCTA={{ text: "Analisar meu histórico", onClick: "openAssistantForPrice" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <PropostaValorPsicologia />
        <JornadaAcademicaPsicologia />
        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="O mesmo curso, com diferentes formatos de aprendizado — escolha pelo seu ritmo, rotina e objetivos."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem busca autonomia e flexibilidade total",
              beneficios: [
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
              titulo: "Presencial",
              descricao: "Para quem valoriza interação e networking",
              beneficios: [
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
          title="Matricule-se na Graduação IPOG"
          subtitle="Projeção de evolução salarial após o curso, baseada em faixas médias de mercado."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "82%",
              descricao: "empregados ou promovidos",
              label: "TAXA DE EMPREGABILIDADE*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-6 m",
              descricao: "para nova posição",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+45%",
              descricao: "em média após formação",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "Estava insatisfeita na minha antiga faculdade e com medo de perder o que já tinha cursado. O processo de transferência para o IPOG foi surpreendentemente simples. Analisaram meu histórico rápido, aproveitaram quase todas as minhas matérias e hoje sinto que estou no lugar certo para concluir minha formação com qualidade.",
              autor: "Mariana Costa",
              cargo: "Aluna de Transferência - Psicologia EAD",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "A diferença na qualidade do conteúdo e no suporte dos professores foi nítida desde o primeiro semestre. Transferir para o IPOG foi a melhor decisão para não só terminar meu curso, mas para me sentir preparado de verdade para o mercado.",
              autor: "Lucas Andrade",
              cargo: "Aluno de Transferência - Psicologia EAD",
            },
            {
              texto:
                "Trabalho em horário integral e o EAD foi a única forma de realizar meu sonho de ser psicóloga. A plataforma é excelente e o suporte dos professores é incrível. Já estou estagiando na área.",
              autor: "Amanda Silva",
              cargo: "Estudante de Psicologia EAD",
            },
          ]}
          bgColor="bg-background"
        />
        <Trilha
          title="Trilha de Aprendizado"
          subtitle="Conheça a estrutura do curso e como você vai evoluir ao longo da graduação"
          etapas={[
            {
              numero: "1",
              titulo: "Fundamentos da Psicologia (1º e 2º semestre)",
              descricao:
                "Construa uma base sólida com o estudo das principais correntes teóricas, da Psicanálise à Análise do Comportamento, e compreenda as bases biológicas na Neuroanatomofisiologia.",
              beneficios: ["Compreensão dos principais conceitos e teorias", "Visão crítica das diferentes abordagens"],
              badges: ["1º e 2º semestre"],
            },
            {
              numero: "2",
              titulo: "Processos e Avaliação (3º e 4º semestre)",
              descricao:
                "Aprofunde-se em Psicologia Social, Educacional e da Saúde Mental, dominando as primeiras Técnicas de Avaliação Psicológica para diagnósticos precisos.",
              beneficios: ["Domínio de instrumentos de avaliação", "Análise de estudos de caso"],
              badges: ["3º e 4º semestre"],
            },
            {
              numero: "3",
              titulo: "Intervenções e Práticas (5º e 6º semestre)",
              descricao:
                "Desenvolva habilidades de intervenção em Psicologia Organizacional e Institucional, aprendendo Técnicas de Grupo e iniciando estágios básicos supervisionados.",
              beneficios: ["Experiência de estágio clínico supervisionado", "Projetos de intervenção comunitária"],
              badges: ["5º e 6º semestre"],
            },
            {
              numero: "4",
              titulo: "Estágios e TCC (7º ao 10º semestre)",
              descricao:
                "Aplique seus conhecimentos em contextos reais com 800h de estágio supervisionado em áreas como Saúde Mental e Práticas Clínicas, enquanto desenvolve seu TCC com orientação individualizada.",
              beneficios: ["800h de estágio supervisionado", "Orientação individualizada para TCC"],
              badges: ["7º ao 10º semestre"],
              destaque: true,
            },
          ]}
          bgColor="bg-muted/30"
        />

        <Autoridade
          title="Corpo Docente do Curso"
          subtitle="Aprenda com especialistas reconhecidos em Psicologia"
          credenciais={[
            {
              icone: <Award className="h-5 w-5" />,
              texto: "Mestres e Doutores em Psicologia",
            },
            {
              icone: <Users className="h-5 w-5" />,
              texto: "Experiência clínica e organizacional",
            },
            {
              icone: <BookOpen className="h-5 w-5" />,
              texto: "Publicações em revistas científicas",
            },
            {
              icone: <Briefcase className="h-5 w-5" />,
              texto: "Atuação em hospitais e clínicas renomadas",
            },
          ]}
          professores={[
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Ana Carolina Ferreira",
              area: "Psicologia Clínica",
              bio: "Doutora em Psicologia Clínica pela USP, especialista em Terapia Cognitivo-Comportamental com mais de 15 anos de experiência em atendimento clínico e supervisão.",
              tags: ["TCC", "Ansiedade", "Depressão"],
              bioCompleta:
                "Doutora em Psicologia Clínica pela Universidade de São Paulo (USP), com especialização em Terapia Cognitivo-Comportamental pelo Beck Institute. Atua há mais de 15 anos em consultório particular e como supervisora clínica. Autora de diversos artigos científicos sobre transtornos de ansiedade e depressão. Coordena o Núcleo de Estudos em TCC do IPOG e ministra cursos de formação para psicólogos.",
              linkedin: "https://linkedin.com/in/ana-carolina-ferreira",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Roberto Almeida Santos",
              area: "Psicologia Organizacional",
              bio: "Mestre em Psicologia Organizacional, consultor de RH em grandes empresas e especialista em avaliação psicológica e desenvolvimento de lideranças.",
              tags: ["RH", "Liderança", "Avaliação Psicológica"],
              bioCompleta:
                "Mestre em Psicologia Organizacional pela PUC-SP, com MBA em Recursos Humanos. Atua como consultor organizacional há 12 anos, tendo trabalhado com empresas como Ambev, Natura e Magazine Luiza. Especialista em processos de avaliação, desenvolvimento de lideranças e programas de bem-estar corporativo. Professor convidado em MBAs e pós-graduações.",
              linkedin: "https://linkedin.com/in/roberto-almeida-santos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Juliana Martins Costa",
              area: "Neuropsicologia",
              bio: "Doutora em Neuropsicologia, especialista em avaliação neuropsicológica e reabilitação cognitiva, com atuação em hospitais e clínicas especializadas.",
              tags: ["Neuropsicologia", "Reabilitação Cognitiva", "Avaliação"],
              bioCompleta:
                "Doutora em Neuropsicologia pela UNIFESP, com pós-doutorado em Neurociências. Atua no Hospital São Paulo e em consultório particular. Especialista em avaliação neuropsicológica de crianças, adultos e idosos, com foco em transtornos do neurodesenvolvimento e doenças degenerativas. Coordena o Laboratório de Neuropsicologia do IPOG.",
              linkedin: "https://linkedin.com/in/juliana-martins-costa",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Prof. Dr. Marcelo Henrique Silva",
              area: "Psicanálise",
              bio: "Doutor em Psicanálise, membro da Sociedade Brasileira de Psicanálise, com vasta experiência em clínica psicanalítica e formação de analistas.",
              tags: ["Psicanálise", "Clínica", "Formação de Analistas"],
              bioCompleta:
                "Doutor em Psicanálise pela UFRJ, membro efetivo da Sociedade Brasileira de Psicanálise de São Paulo. Atua há 20 anos em consultório particular e como formador de analistas, capacitando novos psicanalistas. Autor de três livros sobre teoria psicanalítica contemporânea e colaborador regular de revistas especializadas. Coordena grupos de estudo sobre Freud e Lacan.",
              linkedin: "https://linkedin.com/in/marcelo-henrique-silva",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Fernanda Oliveira Ramos",
              area: "Psicologia Social",
              bio: "Doutora em Psicologia Social, pesquisadora em políticas públicas e saúde mental comunitária, com projetos em comunidades vulneráveis.",
              tags: ["Psicologia Social", "Políticas Públicas", "Saúde Mental Comunitária"],
              bioCompleta:
                "Doutora em Psicologia Social pela USP, com pesquisas focadas em políticas públicas de saúde mental e intervenções comunitárias. Coordena projetos sociais em comunidades vulneráveis há 10 anos, desenvolvendo programas de prevenção e promoção de saúde mental. Consultora do Ministério da Saúde e autora de publicações sobre psicologia comunitária.",
              linkedin: "https://linkedin.com/in/fernanda-oliveira-ramos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Paulo Ricardo Mendes",
              area: "Psicologia do Desenvolvimento",
              bio: "Mestre em Psicologia do Desenvolvimento, especialista em infância e adolescência, com atuação em escolas e clínicas de atendimento infantil.",
              tags: ["Desenvolvimento Infantil", "Psicologia Escolar", "Adolescência"],
              bioCompleta:
                "Mestre em Psicologia do Desenvolvimento pela UFRGS, especialista em atendimento clínico infantil e adolescente. Atua há 14 anos em consultório particular e como psicólogo escolar. Desenvolve programas para pais e educadores sobre desenvolvimento infantil e dificuldades de aprendizagem. Autor de artigos sobre transtornos do neurodesenvolvimento.",
              linkedin: "https://linkedin.com/in/paulo-ricardo-mendes",
            },
          ]}
        />

        <CtaFinal
          title="Faça a transferência e invista na conclusão da sua carreira."
          description="A taxa de inscrição garante a análise completa do seu histórico escolar por nossa equipe acadêmica. Após a aprovação das equivalências, nossa equipe comercial entrará em contato para apresentar as condições personalizadas para você concluir sua graduação."
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
