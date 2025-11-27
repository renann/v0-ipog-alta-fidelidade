"use client"

import { HomeHeader } from "@/components/home-header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoLifelongLearning } from "@/components/lifelong-learning/metodo-lifelong-learning"
import { Modalidades } from "@/components/modalidades"
import { Cursos } from "@/components/cursos"
import { Trilha } from "@/components/trilha"
import { Empregabilidade } from "@/components/empregabilidade"
import { ROILifelongLearning } from "@/components/lifelong-learning/roi-lifelong-learning"
import { DepoimentosDeTexto } from "@/components/depoimentos-de-texto"
import { Beneficios } from "@/components/beneficios"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import {
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  RefreshCw,
  Briefcase,
  TrendingDown,
  Award,
  Calendar,
  Gift,
  Target,
} from "lucide-react"

export default function LifelongLearningPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Pós-Graduação", href: "/pos-graduacao" },
                { label: "Lifelong / Aluno+" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="PÓS-GRADUAÇÃO"
          title="Lifelong Learning / Aluno+"
          description="Continue evoluindo com o IPOG+ e mantenha sua curva de aprendizado sempre ativa."
          valueBadges={[
            { icon: <Sparkles className="h-5 w-5" />, text: "Aprendizado Contínuo" },
            { icon: <TrendingUp className="h-5 w-5" />, text: "Atualização Constante" },
            { icon: <Users className="h-5 w-5" />, text: "Comunidade Exclusiva" },
          ]}
          primaryCTA={{ text: "Começar minha jornada", href: "#cursos" }}
          secondaryCTA={{ text: "Ver benefícios", href: "/programas-beneficios/ipog-plus" }}
        />

        <Dilema
          title="Pouco tempo, muitas responsabilidades — mas a evolução não pode parar"
          subtitle="Evite conteúdos repetidos e escolha trilhas que ampliem seu portfólio com o melhor custo-benefício de tempo."
          dores={[
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Sobrecarga de agenda",
              descricao: "Pouco tempo para estudar com altas responsabilidades profissionais",
              solucao: "Roteiros eficientes e modulares com aproveitamento de estudos anteriores",
            },
            {
              icon: <RefreshCw className="h-5 w-5" />,
              titulo: "Repetição de conteúdo",
              descricao: "Risco de estudar temas que você já domina",
              solucao: "Evolução escalável sem retrabalho — IPOG+ governa sua trilha",
            },
            {
              icon: <TrendingDown className="h-5 w-5" />,
              titulo: "Baixo retorno",
              descricao: "Investimento sem impacto real na carreira",
              solucao: "Benefícios e mentorias que aceleram impacto e networking",
            },
          ]}
          backgroundColor="bg-muted/30"
        />
        <MetodoLifelongLearning />

        <Modalidades
          title="Escolha a modalidade que se encaixa na sua rotina"
          modalidades={[
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem precisa de autonomia e flexibilidade total durante a transição",
              beneficios: [
                "Estude no seu ritmo e reveja aulas sempre que quiser;",
                "Conteúdos atualizados e interativos;",
                "Tutoria online com suporte contínuo;",
                "Certificação igual ao curso presencial.",
              ],
              buttonText: "Encontrar cursos EAD",
              link: "/catalogo?tipo=pos-graduacao&modalidade=ead",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "Ao Vivo",
              descricao: "Para quem busca interação e acompanhamento em tempo real",
              beneficios: [
                "Aulas ao vivo com professores e mentores;",
                "Gravações disponíveis após cada encontro;",
                "Troca com colegas de diversas áreas;",
                "Atividades práticas guiadas.",
              ],
              buttonText: "Encontrar cursos Ao Vivo",
              link: "/catalogo?tipo=pos-graduacao&modalidade=ao-vivo",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza imersão estratégica e networking executivo",
              beneficios: [
                "Encontros presenciais",
                "Projetos práticos",
                "Conexões C-level",
                "Certificação reconhecida",
              ],
              buttonText: "Encontrar cursos Presencial",
              link: "/catalogo?tipo=pos-graduacao&modalidade=presencial",
            },
          ]}
          backgroundColor="bg-muted/30"
        />

        <Cursos
          title="Escolha módulos e especializações que ampliem seu portfólio"
          subtitle="Complemento à sua última pós • Atualizações regulatórias • Liderança & Dados"
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
              nome: "Engenharia Estrutural e Fundações: Projeto e Modelagem",
              duracao: "12 meses",
              descricao: "A escolha certa para transformar conhecimento técnico em protagonismo no canteiro de obras",
              modalidade: "Presencial",
              link: "/pos-graduacao/curso/engenharia-estrutural",
            },
            {
              nome: "Intervenção ABA Aplicada ao Transtorno do Espectro Autista e Desenvolvimento Intelectual",
              duracao: "12 meses",
              descricao:
                "Aprenda como orientar crianças e adultos diagnosticados com TEA e/ou deficiência intelectual, através da análise do comportamento aplicada (ABA).",
              modalidade: "Ao Vivo",
              link: "/pos-graduacao/curso/intervencao-aba",
            },
          ]}
          ctaText="Ver curso"
          footerCTA={{
            text: "Ver todos os cursos disponíveis",
            link: "/catalogo?tipo=pos-graduacao",
          }}
        />

        <Trilha
          title="Sua trilha contínua, sem retrabalho"
          subtitle="Evolução escalável com aproveitamento de estudos anteriores"
          etapas={[
            {
              titulo: "Diagnóstico IPOG+",
              descricao: "Mapa do que você já tem e identificação de gaps estratégicos",
            },
            {
              titulo: "Módulos Complementares",
              descricao: "Evita repetição, foca no ganho marginal e na evolução real",
            },
            {
              titulo: "Mentorias Executivas",
              descricao: "Ajuste fino de estratégia, gestão de times e carreira",
            },
            {
              titulo: "Certificações & Portfólio",
              descricao: "Evidências concretas de impacto e competências desenvolvidas",
            },
            {
              titulo: "Networking & Parcerias",
              descricao: "Oportunidades de co-criação e conexões estratégicas",
            },
          ]}
          backgroundColor="bg-muted/30"
        />
        <Empregabilidade
          title="Evolução que aparece no cargo e na remuneração"
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "82-90%",
              descricao: "Relatam promoção ou expansão de escopo em 6-12 meses",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-6 meses",
              descricao: "Para transição de função ou nível hierárquico",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "100%",
              descricao: "Acesso a serviços de carreira IPOG+ continuados",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de LinkedIn/currículo focada em impacto",
            "Mentorias com executivos convidados",
            "Indicações para vagas parceiras e projetos",
          ]}
          botaoCta={{
            texto: "Consultoria de Carreira IPOG+",
            onClick: "openAssistantForConsultor",
          }}
          bgColor="bg-background"
        />
        <ROILifelongLearning />
        <DepoimentosDeTexto
          titulo="Quem ficou perto do IPOG, ficou na frente"
          depoimentos={[
            {
              nome: "Ana Paula Silva",
              cargo: "Gerente de Projetos",
              area: "Tecnologia",
              depoimento:
                "Com o IPOG+ consegui expandir meu escopo sem repetir conteúdos. A mentoria executiva foi fundamental para minha promoção.",
              ganho: "Promoção em 8 meses",
            },
            {
              nome: "Carlos Eduardo Santos",
              cargo: "Diretor de Operações",
              area: "Logística",
              depoimento:
                "O aproveitamento dos meus estudos anteriores me permitiu focar em áreas estratégicas. Hoje lidero projetos de transformação digital.",
              ganho: "Novo projeto estratégico",
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
            },
            {
              nome: "Mariana Costa",
              cargo: "Head de RH",
              area: "Recursos Humanos",
              depoimento:
                "A trilha personalizada do IPOG+ me ajudou a desenvolver competências em People Analytics sem perder tempo com conteúdos que já dominava.",
              ganho: "Expansão de escopo",
            },
          ]}
        />
        <Beneficios
          title="Vantagens que só quem é IPOG+ tem"
          subtitle=""
          beneficios={[
            {
              icone: <Award className="w-8 h-8" />,
              titulo: "Desconto progressivo & bolsas",
              subtitulo: "Bolsas de fidelidade que valorizam sua jornada contínua com o IPOG",
              itens: [
                "Descontos crescentes a cada nova formação",
                "Bolsas exclusivas para alunos IPOG+",
                "Condições especiais de pagamento",
                "Benefícios acumulativos",
              ],
            },
            {
              icone: <Users className="w-8 h-8" />,
              titulo: "Mentorias masterclass",
              subtitulo: "Agenda trimestral com especialistas e executivos do mercado",
              itens: [
                "Sessões exclusivas com líderes de mercado",
                "Mentorias em grupo e individuais",
                "Acesso a eventos executivos",
                "Networking qualificado",
              ],
            },
            {
              icone: <Calendar className="w-8 h-8" />,
              titulo: "Eventos executivos",
              subtitulo: "Comunidades temáticas e networking estratégico contínuo",
              itens: [
                "Encontros presenciais exclusivos",
                "Comunidades por área de atuação",
                "Webinars com especialistas",
                "Acesso prioritário a eventos IPOG",
              ],
            },
            {
              icone: <Gift className="w-8 h-8" />,
              titulo: "Clube de vantagens",
              subtitulo: "Parceiros exclusivos: idiomas, tech, livros e conferências",
              itens: [
                "Descontos em cursos de idiomas",
                "Acesso a plataformas de tecnologia",
                "Biblioteca digital exclusiva",
                "Ingressos para conferências",
              ],
            },
            {
              icone: <Target className="w-8 h-8" />,
              titulo: "Governança de conteúdo",
              subtitulo: "Planejamento anual da sua trilha com curadoria especializada",
              itens: [
                "Plano de desenvolvimento personalizado",
                "Curadoria de conteúdo especializada",
                "Acompanhamento de evolução",
                "Recomendações estratégicas",
              ],
            },
          ]}
          textoBotao="Quero aderir ao IPOG+"
          onClickBotao={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(
                new CustomEvent("openAssistant", {
                  detail: { origin: "beneficios-lifelong" },
                }),
              )
            }
          }}
          corFundo="bg-muted/30"
        />
        <AcaoFinal
          title="Mantenha sua curva de aprendizado ativa com o IPOG+"
          descricao="Aprofunde-se com roteiros eficientes, evolução escalável e benefícios exclusivos. Aprendizado contínuo sem repetição de conteúdo."
          botaoPrimario={{
            texto: "Começar minha jornada",
            href: "/catalogo?tipo=pos-graduacao",
          }}
          botaoSecundario={{
            texto: "Ver benefícios",
            href: "/programas-beneficios/ipog-plus",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
