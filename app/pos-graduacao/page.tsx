"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { Jornadas } from "@/components/jornadas"
import { MetodoPosGraduacao } from "@/components/pos-graduacao/metodo-pos-graduacao"
import { Cursos } from "@/components/cursos"
import { Beneficios } from "@/components/beneficios"
import { Trilha } from "@/components/trilha"
import { Empregabilidade } from "@/components/empregabilidade"
import { ROIPos } from "@/components/pos-graduacao/roi-pos"
import { ResultadosReais } from "@/components/resultados-reais"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import {
  GraduationCap,
  ArrowRightLeft,
  TrendingUp,
  Clock,
  Briefcase,
  Users,
  Building2,
  Award,
  BookOpen,
  Trophy,
  Gem,
  Globe,
  Brain,
} from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function PosGraduacaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Pós-Graduação" }]} />
          </div>
        </div>

        <Hero
          badge="PÓS-GRADUAÇÃO"
          title="Especialize-se com flexibilidade e impacto imediato"
          description="Aprenda com professores que atuam nas maiores empresas do país, construa um networking de alto nível e conte com a chancela de uma das instituições mais reconhecidas do Brasil para acelerar sua carreira."
          valueBadges={[
            { text: "Nossa metodologia conecta você à prática do mercado." },
            { text: "Nossos docentes transformam o mercado e a sua carreira." },
            { text: "Nosso networking abre as portas para o seu sucesso." },
          ]}
          primaryCTA={{ text: "Conheça nossas especializações", href: "/catalogo?tipo=pos-graduacao" }}
          secondaryCTA={{ text: "Monte sua trilha de Pós", onClick: "openAssistantForConsultor" }}
        />

        <Dilema
          title="Você sabe que precisa de uma especialização para ascender na carreira, mas a incerteza sobre o retorno do investimento e o medo de um curso puramente teórico paralisam sua decisão."
          subtitle="Some a isso o desafio de conciliar uma rotina exigente com os estudos, e o próximo passo parece impossível."
          solucao="O IPOG entende seu momento e desenhou uma pós-graduação com cronograma previsível e aplicação prática imediata, para que seu investimento se transforme em resultados mensuráveis na sua carreira."
        />
        <Jornadas
          title="Qual é o seu momento de carreira?"
          jornadas={[
            {
              icon: <GraduationCap className="w-8 h-8" />,
              titulo: "Primeira Pós / Especialização",
              dores: "Seu objetivo: Diferenciar-se na área com conhecimento prático e assumir projetos mais complexos.",
              promessa: "",
              ganho:
                "A solução IPOG: Aprenda com docentes praticantes, comprove o ROI do seu investimento e ganhe reconhecimento de mercado.",
              cta: "Descubra sua primeira pós",
              href: "/pos-graduacao/primeira-pos",
            },
            {
              icon: <ArrowRightLeft className="w-8 h-8" />,
              titulo: "Transição de Área",
              dores:
                "Seu objetivo: Migrar de carreira com segurança, aplicando novas competências de forma estruturada.",
              promessa: "",
              ganho:
                "A solução IPOG: Conte com trilhas de nivelamento, mentoria de especialistas e projetos aplicados para validar sua transição.",
              cta: "Planeje sua transição",
              href: "/pos-graduacao/transicao-area",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              titulo: "Lifelong / Aluno+",
              dores: "Seu objetivo: Ampliar seu portfólio de especializações e reforçar sua autoridade no mercado.",
              promessa: "",
              ganho:
                "A solução IPOG: Aproveite os benefícios exclusivos do programa IPOG+, com roteiros personalizados e condições especiais para continuar sua jornada.",
              cta: "Conheça o IPOG+",
              href: "/pos-graduacao/lifelong-learning",
            },
          ]}
          backgroundColor="bg-muted/30"
        />
        <MetodoPosGraduacao />

        <Cursos
          title="Escolha a especialização que acelera sua carreira"
          badge="PÓS-GRADUAÇÃO"
          cursos={[
            {
              nome: "Avaliação Psicológica",
              duracao: "18 meses",
              descricao:
                "Garanta uma competência fundamental para a psicologia e abra excelentes portas no mercado de trabalho.",
              modalidade: "Ao Vivo",
              link: "/pos-graduacao/curso/avaliacao-psicologica",
            },
            {
              nome: "Intervenção ABA Aplicada ao Transtorno do Espectro Autista",
              duracao: "12 meses",
              descricao:
                "Aprenda como orientar crianças e adultos diagnosticados com TEA através da análise do comportamento aplicada.",
              modalidade: "Ao Vivo",
              link: "/pos-graduacao/curso/intervencao-aba",
            },
            {
              nome: "Engenharia Estrutural e Fundações",
              duracao: "12 meses",
              descricao: "Transforme conhecimento técnico em protagonismo no canteiro de obras.",
              modalidade: "Presencial",
              link: "/pos-graduacao/curso/engenharia-estrutural",
            },
          ]}
          ctaText="Ver curso"
        />

        <Beneficios
          title="Sua jornada de evolução profissional não para"
          subtitle="O programa IPOG+ é o nosso compromisso com seu crescimento contínuo. Alunos e ex-alunos têm acesso a trilhas personalizadas, condições especiais e uma rede premium para acelerar sua carreira."
          beneficios={[
            {
              icone: <Gem className="w-8 h-8" />,
              titulo: "Especialize-se",
              subtitulo: "Conquiste sua primeira certificação e construa um portfólio sólido.",
              itens: [],
            },
            {
              icone: <GraduationCap className="w-8 h-8" />,
              titulo: "Aprofunde-se",
              subtitulo: "Participe de mentorias e práticas avançadas para ganhar reconhecimento.",
              itens: [],
            },
            {
              icone: <Globe className="w-8 h-8" />,
              titulo: "Lidere",
              subtitulo: "Desenvolva visão estratégica com trilhas e networking executivo.",
              itens: [],
            },
            {
              icone: <Brain className="w-8 h-8" />,
              titulo: "Evolua Sempre",
              subtitulo: "Acesse nossa comunidade exclusiva e benefícios para continuar aprendendo.",
              itens: [],
            },
          ]}
          textoBotao="Conheça os benefícios IPOG+"
          onClickBotao={openAssistantForConsultor}
          corFundo="bg-muted/30"
        />
        <Trilha
          title="Construa sua jornada de especialização e liderança"
          subtitle="Veja como sua evolução acontece dentro do ecossistema IPOG"
          etapas={[
            {
              numero: "1",
              title: "Graduação",
              descricao: "Base e certificação",
              beneficios: ["Portfólio", "Networking"],
            },
            {
              numero: "2",
              title: "Pós-Graduação",
              descricao: "Prática e reconhecimento",
              beneficios: ["Mentoria", "Certificação"],
              destaque: true,
            },
            {
              numero: "3",
              title: "MBA ou Mestrado",
              descricao: "Estratégia e posicionamento",
              beneficios: ["Networking", "Liderança"],
            },
            {
              numero: "4",
              title: "Lifelong / IPOG+",
              descricao: "Mentoria contínua",
              beneficios: ["Mentoria", "Comunidade"],
            },
          ]}
          onClickBotao={openAssistantForConsultor}
          textoBotao="Monte sua trilha"
        />
        <Empregabilidade
          title="O investimento que acelera sua carreira"
          subtitle="No IPOG, seu crescimento é mensurável. Veja como a especialização impacta diretamente seu salário e posição no mercado, com base em dados de nossos egressos."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "87%",
              descricao: "promovidos ou recolocados em 12 meses",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "6-9 meses",
              descricao: "tempo médio para promoção",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+35%",
              descricao: "aumento salarial médio",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de currículo e LinkedIn",
            "Mentorias com especialistas de mercado",
            "Indicações para vagas parceiras",
          ]}
          botaoCta={{
            texto: "Falar com consultor de carreira",
            onClick: openAssistantForConsultor,
          }}
          bgColor="bg-background"
        />
        <ROIPos />
        <ResultadosReais
          title="Resultados que comprovam: a escolha que conecta você ao sucesso."
          subtitle="Nossos alunos confirmam o impacto de uma formação focada em excelência, networking e aplicabilidade."
          estatisticas={[
            {
              icone: <TrendingUp className="w-12 h-12 text-primary" />,
              valor: "89%",
              label: "Avanço na carreira",
              descricao: "Em menos de 6 meses após conclusão",
            },
            {
              icone: <Users className="w-12 h-12 text-primary" />,
              valor: "95%",
              label: "Empregados na área",
              descricao: "Egressos atuando na área de formação",
            },
            {
              icone: <Building2 className="w-12 h-12 text-primary" />,
              valor: "+2.000",
              label: "Empresas parceiras",
              descricao: "Rede de egressos IPOG",
            },
            {
              icone: <Award className="w-12 h-12 text-primary" />,
              valor: "20+",
              label: "Anos de experiência",
              descricao: "Formando especialistas reconhecidos",
            },
          ]}
          depoimentos={[
            {
              tipo: "simples",
              texto:
                "O MBA IPOG foi decisivo para minha promoção. Professores atuantes no mercado fazem toda a diferença na aplicação prática do conhecimento.",
              nome: "Carlos Mendes",
              cargo: "MBA em Gestão - Turma 2023",
            },
            {
              tipo: "simples",
              texto:
                "A especialização em Psicologia Clínica me deu as ferramentas necessárias para atuar com segurança e competência. Networking de alto valor.",
              nome: "Ana Paula Costa",
              cargo: "Psicologia Clínica - Turma 2022",
            },
          ]}
        />
        <Autoridade
          title="Aprenda com quem transforma o mercado"
          subtitle="Nossos professores são profissionais que transformam o mercado. Mestres e doutores que já chegaram ao topo e agora mostram o caminho para você, conectando teoria, prática e a visão de mercado que acelera sua carreira."
          credenciais={[
            { icone: <Award className="w-5 h-5 text-muted-foreground" />, texto: "MEC Credenciado" },
            {
              icone: <Users className="w-5 h-5 text-muted-foreground" />,
              texto: "+100 Professores Mestres e Doutores",
            },
            { icone: <BookOpen className="w-5 h-5 text-muted-foreground" />, texto: "20+ Anos de Experiência" },
            { icone: <GraduationCap className="w-5 h-5 text-muted-foreground" />, texto: "Metodologia Validada" },
            { icone: <Building2 className="w-5 h-5 text-muted-foreground" />, texto: "Parcerias Estratégicas" },
            { icone: <Trophy className="w-5 h-5 text-muted-foreground" />, texto: "Reconhecimento Nacional" },
          ]}
          professores={[
            {
              nome: "Dr. Roberto Almeida",
              bio: "PhD em Gestão Estratégica, 20 anos de experiência em consultoria empresarial",
              area: "MBA em Gestão",
            },
            {
              nome: "Dra. Patricia Lima",
              bio: "Doutora em Psicologia Clínica, especialista em terapia cognitivo-comportamental",
              area: "Psicologia Clínica",
            },
            {
              nome: "Prof. Fernando Santos",
              bio: "Mestre em Direito Tributário, advogado atuante há 15 anos",
              area: "Direito Tributário",
            },
            {
              nome: "Dra. Juliana Ferreira",
              bio: "PhD em Neurociências, pesquisadora e clínica há 12 anos",
              area: "Neuropsicologia",
            },
          ]}
          titleProfessores="Conheça alguns de nossos professores executivos"
          bgColor="bg-muted/30"
        />

        <AcaoFinal
          title="IPOG: A escolha que conecta você ao sucesso."
          descricao="Construa uma carreira de impacto com professores de mercado, networking de alto nível e a credibilidade de uma instituição com mais de 20 anos de excelência."
          botaoPrimario={{
            texto: "Comece sua jornada para o sucesso hoje mesmo.",
            href: "/catalogo?tipo=pos-graduacao",
          }}
          botaoSecundario={{
            texto: "Monte sua trilha de Pós",
            onClick: openAssistantForConsultor,
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
