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
          title="Especialize-se com quem forma líderes há mais de 20 anos"
          description="Pós-graduação prática e aplicável, com professores de mercado e metodologia validada. Escolha entre EAD, Ao Vivo ou Presencial e acelere sua carreira"
          valueBadges={[
            { text: "Aplicação Prática" },
            { text: "Professores de Mercado" },
            { text: "Certificação Reconhecida" },
          ]}
          primaryCTA={{ text: "Encontre sua especialização", href: "/catalogo?categoria=pos-graduacao" }}
          secondaryCTA={{ text: "Monte sua trilha de Pós", onClick: "openAssistantForConsultor" }}
        />

        <Dilema
          title="O mercado muda rápido."
          subtitle="Mas conciliar rotina, aprendizado e investimento parece cada vez mais difícil."
          solucao="A Pós IPOG foi feita para profissionais como você — que buscam avançar sem abrir mão da vida real."
        />
        <Jornadas
          title="Qual é o seu momento de carreira?"
          jornadas={[
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Primeira Pós / Especialização",
              dores: "Quer se destacar, mas sente que ainda falta prática e reconhecimento de mercado.",
              promessa: "Torne-se especialista com quem forma líderes há mais de 20 anos.",
              ganho: "",
              cta: "Descubra sua primeira pós",
              href: "/pos-graduacao/primeira-pos",
            },
            {
              icon: <ArrowRightLeft className="w-8 h-8" />,
              title: "Transição de Área",
              dores: "Busca mudar de área, mas ainda não sabe como validar suas competências.",
              promessa: "Faça uma transição segura com apoio e mentoria de especialistas.",
              ganho: "",
              cta: "Planeje sua transição",
              href: "/pos-graduacao/transicao-area",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Lifelong / Aluno+",
              dores: "Quer continuar evoluindo e se manter atualizado.",
              promessa: "Aprofunde-se com o IPOG+ e mantenha sua curva de aprendizado ativa.",
              ganho: "",
              cta: "Conheça o IPOG+",
              href: "/pos-graduacao/lifelong-learning",
            },
          ]}
          bgColor="bg-muted/30"
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
          title="Mais que uma Pós, um programa de evolução contínua"
          subtitle="O IPOG+ garante benefícios exclusivos para quem continua evoluindo"
          beneficios={[
            {
              icone: <Gem className="w-8 h-8" />,
              titulo: "Descontos exclusivos",
              subtitulo: "em novas formações",
              itens: [],
            },
            {
              icone: <GraduationCap className="w-8 h-8" />,
              titulo: "Mentor de carreira",
              subtitulo: "e empregabilidade",
              itens: [],
            },
            {
              icone: <Globe className="w-8 h-8" />,
              titulo: "Comunidade Alumni+",
              subtitulo: "networking e conexões",
              itens: [],
            },
            {
              icone: <Brain className="w-8 h-8" />,
              titulo: "Acesso antecipado",
              subtitulo: "a novos cursos e certificações",
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
          title="Empregabilidade que transforma carreiras"
          subtitle="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
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
          title="Mais de 20 anos formando profissionais de alto impacto"
          subtitle="Resultados comprovados que transformam carreiras"
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
          title="Professores de mercado • Metodologia validada • Certificação reconhecida"
          subtitle="A marca que transforma carreiras há duas décadas"
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
          title="Especialize-se com quem forma líderes há mais de 20 anos"
          descricao="Escolha entre EAD, Ao Vivo ou Presencial e acelere sua carreira com metodologia validada"
          botaoPrimario={{
            texto: "Encontrar sua especialização",
            href: "/catalogo?categoria=pos-graduacao",
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
