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
import { GraduationCap, Clock, Award } from "lucide-react"
import { TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { FormasIngresso } from "@/components/formas-ingresso"
import { Autoridade } from "@/components/autoridade"
import { CtaFinal } from "@/components/cta-final"
import { Users, BookOpen } from "lucide-react"

export default function PsicologiaEadSegundaGraduacaoPage() {
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
                { label: "Segunda Graduação", href: "/graduacao/segunda-graduacao" },
                { label: "Psicologia EAD" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Graduação em Psicologia EAD para sua Segunda Carreira"
          description="Valide sua experiência, conquiste um diploma de peso e acelere sua transição de carreira com a flexibilidade do EAD e o reconhecimento oficial do MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Diploma Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade para quem já atua" },
            { icon: <Award className="h-5 w-5" />, text: "Professores com Experiência de Mercado" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", onClick: "openAssistantForPrice" }}
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
        <RetornoInvestimentoPsicologia title="O impacto da sua segunda graduação na sua carreira" />
        <Empregabilidade
          title="Inscreva-se no processo seletivo"
          subtitle="Veja o potencial de crescimento ao adicionar o diploma de Psicologia à sua trajetória profissional."
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
                "Eu já atuava em RH, mas sentia falta de uma base teórica sólida. A graduação EAD do IPOG me permitiu conquistar o diploma em Psicologia sem parar de trabalhar. Hoje, aplico o conhecimento diretamente na minha função e abri portas para uma promoção.",
              autor: "Ricardo Oliveira",
              cargo: "Coordenador de DHO",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Após 10 anos em Engenharia, decidi fazer uma transição de carreira para a Psicologia. O modelo EAD do IPOG foi essencial para conciliar os estudos com minha consultoria. O aproveitamento de disciplinas acelerou minha formação e hoje já atendo meus primeiros clientes.",
              autor: "Julia Martins",
              cargo: "Psicóloga e ex-Engenheira",
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
          subtitle="Aprenda com quem une a prática do mercado à excelência acadêmica"
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
          title="Invista na sua transição de carreira com um diploma de peso."
          description="Taxa de Inscrição: R$ 100,00 | Parcelas Mensais: a partir de R$ 499,00+"
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
