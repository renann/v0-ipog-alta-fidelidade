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
          titulo="Matricule-se na Graduação IPOG"
          subtitulo="Projeção de evolução salarial após o curso, com base em faixas médias de mercado."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "82%",
              descricao: "empregados ou promovidos",
              label: "TAXA DE COLOCAÇÃO*",
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
                "A flexibilidade do EAD me permitiu conciliar trabalho, família e estudos. Hoje sou psicóloga clínica e atendo em consultório próprio. O IPOG tornou meu sonho possível.",
              autor: "Patrícia Souza",
              cargo: "Psicóloga Clínica",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Moro no interior e o EAD do IPOG me deu acesso a professores de referência nacional. A qualidade é a mesma do presencial e hoje trabalho em uma clínica renomada da minha cidade.",
              autor: "Ricardo Oliveira",
              cargo: "Psicólogo Organizacional",
            },
            {
              texto:
                "Trabalho em turno integral e o EAD foi a única forma de realizar meu sonho de ser psicóloga. A plataforma é excelente e o suporte dos professores é incrível. Já estou estagiando na área.",
              autor: "Amanda Silva",
              cargo: "Aluna de Psicologia EAD",
            },
          ]}
          bgColor="bg-background"
        />
        <Trilha
          titulo="Trilha de Aprendizado"
          subtitulo="Conheça a estrutura do curso e como você vai evoluir ao longo da graduação"
          etapas={[
            {
              titulo: "Fundamentos da Psicologia (1º e 2º semestre)",
              descricao:
                "Construa uma base sólida com o estudo das principais correntes teóricas, da Psicanálise à Análise do Comportamento, e compreenda as bases biológicas em Neuroanatomofisiologia.",
              beneficios: [
                "Compreensão dos principais conceitos e teorias",
                "Visão crítica sobre diferentes abordagens",
              ],
              badges: ["1º e 2º semestre"],
            },
            {
              titulo: "Processos e Avaliação (3º e 4º semestre)",
              descricao:
                "Aprofunde-se em Psicologia Social, Escolar e da Saúde Mental, dominando as primeiras Técnicas de Avaliação Psicológica para diagnósticos precisos.",
              beneficios: ["Domínio de instrumentos de avaliação", "Análise de casos práticos"],
              badges: ["3º e 4º semestre"],
            },
            {
              titulo: "Intervenções e Práticas (5º e 6º semestre)",
              descricao:
                "Desenvolva competências de atuação em Psicologia Organizacional e Institucional, aprendendo Técnicas de Grupo e iniciando os estágios básicos supervisionados.",
              beneficios: ["Experiência em supervisão clínica", "Projetos de intervenção comunitária"],
              badges: ["5º e 6º semestre"],
            },
            {
              titulo: "Estágios e TCC (7º ao 10º semestre)",
              descricao:
                "Aplique seu conhecimento em contextos reais com 800h de estágio supervisionado em áreas como Saúde Mental e Práticas Clínicas, enquanto desenvolve seu TCC com orientação individualizada.",
              beneficios: ["800h de estágio supervisionado", "Orientação individualizada para TCC"],
              badges: ["7º ao 10º semestre"],
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

        <Autoridade
          titulo="Corpo Docente do Curso"
          subtitulo="Aprenda com especialistas reconhecidos em Psicologia"
          credenciais={[
            "Mestres e Doutores em Psicologia",
            "Experiência clínica e organizacional",
            "Publicações em revistas científicas",
            "Atuação em hospitais e clínicas renomadas",
          ]}
          professores={[
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Ana Carolina Ferreira",
              area: "Psicologia Clínica",
              descricao:
                "Doutora em Psicologia Clínica pela USP, especialista em Terapia Cognitivo-Comportamental com mais de 15 anos de experiência em atendimento clínico e supervisão.",
              especialidades: ["TCC", "Ansiedade", "Depressão"],
              biografia:
                "Doutora em Psicologia Clínica pela Universidade de São Paulo (USP), com especialização em Terapia Cognitivo-Comportamental pelo Beck Institute. Atua há mais de 15 anos em consultório particular e como supervisora clínica. Autora de diversos artigos científicos sobre transtornos de ansiedade e depressão. Coordena o Núcleo de Estudos em TCC do IPOG e ministra cursos de formação para psicólogos.",
              linkedin: "https://linkedin.com/in/ana-carolina-ferreira",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Roberto Almeida Santos",
              area: "Psicologia Organizacional",
              descricao:
                "Mestre em Psicologia Organizacional, consultor de RH em grandes empresas e especialista em avaliação psicológica e desenvolvimento de lideranças.",
              especialidades: ["RH", "Liderança", "Avaliação Psicológica"],
              biografia:
                "Mestre em Psicologia Organizacional pela PUC-SP, com MBA em Gestão de Pessoas. Atua como consultor organizacional há 12 anos, tendo trabalhado com empresas como Ambev, Natura e Magazine Luiza. Especialista em processos de avaliação psicológica, desenvolvimento de lideranças e programas de bem-estar corporativo. Professor convidado em programas de MBA e pós-graduação.",
              linkedin: "https://linkedin.com/in/roberto-almeida-santos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Juliana Martins Costa",
              area: "Neuropsicologia",
              descricao:
                "Doutora em Neuropsicologia, especialista em avaliação neuropsicológica e reabilitação cognitiva, com atuação em hospitais e clínicas especializadas.",
              especialidades: ["Neuropsicologia", "Reabilitação Cognitiva", "Avaliação"],
              biografia:
                "Doutora em Neuropsicologia pela UNIFESP, com pós-doutorado em Neurociências. Atua no Hospital das Clínicas de São Paulo e em consultório particular. Especialista em avaliação neuropsicológica de crianças, adultos e idosos, com foco em transtornos do neurodesenvolvimento e doenças neurodegenerativas. Coordena o Laboratório de Neuropsicologia do IPOG.",
              linkedin: "https://linkedin.com/in/juliana-martins-costa",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Prof. Dr. Marcelo Henrique Silva",
              area: "Psicanálise",
              descricao:
                "Doutor em Psicanálise, membro da Sociedade Brasileira de Psicanálise, com vasta experiência em clínica psicanalítica e formação de analistas.",
              especialidades: ["Psicanálise", "Clínica", "Formação de Analistas"],
              biografia:
                "Doutor em Psicanálise pela UFRJ, membro efetivo da Sociedade Brasileira de Psicanálise de São Paulo. Atua há 20 anos em consultório particular e como analista didata, formando novos psicanalistas. Autor de três livros sobre teoria psicanalítica contemporânea e articulista regular em revistas especializadas. Coordena grupos de estudos sobre Freud e Lacan.",
              linkedin: "https://linkedin.com/in/marcelo-henrique-silva",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Fernanda Oliveira Ramos",
              area: "Psicologia Social",
              descricao:
                "Doutora em Psicologia Social, pesquisadora em políticas públicas e saúde mental comunitária, com projetos em comunidades vulneráveis.",
              especialidades: ["Psicologia Social", "Políticas Públicas", "Saúde Mental Comunitária"],
              biografia:
                "Doutora em Psicologia Social pela USP, com pesquisas focadas em políticas públicas de saúde mental e intervenções comunitárias. Coordena projetos sociais em comunidades vulneráveis há 10 anos, desenvolvendo programas de prevenção e promoção de saúde mental. Consultora do Ministério da Saúde e autora de publicações sobre psicologia comunitária.",
              linkedin: "https://linkedin.com/in/fernanda-oliveira-ramos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Paulo Ricardo Mendes",
              area: "Psicologia do Desenvolvimento",
              descricao:
                "Mestre em Psicologia do Desenvolvimento, especialista em infância e adolescência, com atuação em escolas e clínicas de atendimento infantil.",
              especialidades: ["Desenvolvimento Infantil", "Psicologia Escolar", "Adolescência"],
              biografia:
                "Mestre em Psicologia do Desenvolvimento pela UFRGS, especialista em atendimento clínico de crianças e adolescentes. Atua há 14 anos em consultório particular e como psicólogo escolar. Desenvolve programas de orientação a pais e professores sobre desenvolvimento infantil e dificuldades de aprendizagem. Autor de artigos sobre transtornos do neurodesenvolvimento.",
              linkedin: "https://linkedin.com/in/paulo-ricardo-mendes",
            },
          ]}
        />

        <section className="w-full py-16 px-4" id="preco">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comece agora sua trajetória com o IPOG</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Curso criado para quem busca protagonismo, com metodologia aplicada, professores de mercado e
                acompanhamento próximo em todas as etapas.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-muted/30 p-8 rounded-lg">
              <div className="border-t pt-6">
                <h4 className="text-xl font-semibold mb-4">Taxa de matrícula</h4>
                <div className="bg-background p-6 rounded-lg mb-4">
                  <p className="text-lg font-semibold mb-2">R$ 100,00</p>
                  <p className="text-muted-foreground">
                    A matrícula garante sua qualificação e análise de perfil. Após aprovação, nossa equipe comercial
                    entrará em contato para apresentar as condições de mensalidade e formas de pagamento.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Informações do Curso</h4>
                  <p className="text-muted-foreground">Mensalidade: R$ 499,00</p>
                  <p className="text-muted-foreground">Duração: 5 anos • Total do curso: R$ 29.940,00</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Próximas turmas iniciam em <strong>Novembro</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Garanta condições exclusivas até <strong>30 de Outubro</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqPsicologia />
        <FormasIngresso />
      </main>
      <Footer />
    </div>
  )
}
