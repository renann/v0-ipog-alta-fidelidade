import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoTransicaoArea } from "@/components/transicao-area/metodo-transicao-area"
import { Modalidades } from "@/components/modalidades"
import { Cursos } from "@/components/cursos"
import { Trilha } from "@/components/trilha"
import { Empregabilidade } from "@/components/empregabilidade"
import { ROITransicaoArea } from "@/components/transicao-area/roi-transicao-area"
import { CasesRecolocacao } from "@/components/transicao-area/cases-recolocacao"
import { MentoriaNetworking } from "@/components/transicao-area/mentoria-networking"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { ArrowRightLeft, Users, Target, AlertCircle, MapPin, Clock, TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function TransicaoAreaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Pós-Graduação", href: "/pos-graduacao" },
                { label: "Transição de Área" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="PÓS-GRADUAÇÃO"
          title="Transição de Área"
          description="Faça uma transição segura com apoio e mentoria de especialistas."
          valueBadges={[
            { icon: <ArrowRightLeft className="h-5 w-5" />, text: "Transição Segura" },
            { icon: <Users className="h-5 w-5" />, text: "Mentoria Especializada" },
            { icon: <Target className="h-5 w-5" />, text: "Validação de Competências" },
          ]}
          primaryCTA={{ text: "Planejar minha transição", href: "#cursos" }}
          secondaryCTA={{ text: "Falar com mentor", href: "#contato" }}
        />

        <Dilema
          titulo="Mudar de área é um desafio real"
          subtitulo="O medo de recomeçar do zero, a insegurança sobre a nova área e a falta de rede de contatos são barreiras reais. Mas é possível fazer essa transição com segurança, apoio e resultados concretos"
          dores={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              titulo: "Medo de recomeçar do zero",
              solucao: "Mentoria individual e plano de transição estruturado passo a passo",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              titulo: "Insegurança sobre a nova área",
              solucao: "Networking estratégico com profissionais consolidados na área desejada",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Falta de base técnica",
              solucao: "Trilhas com nivelamento e aplicação prática desde o início",
            },
          ]}
        />
        <MetodoTransicaoArea />

        <Modalidades
          title="Escolha a modalidade ideal para sua transição"
          subtitle="A mesma especialização de excelência, com diferentes formatos para se adaptar ao seu momento de mudança."
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
              descricao: "Para quem valoriza imersão total e networking presencial",
              beneficios: [
                "Aulas práticas e discussões presenciais;",
                "Networking direto com profissionais do setor;",
                "Projetos aplicados em grupo;",
                "Certificação reconhecida pelo mercado.",
              ],
              buttonText: "Encontrar cursos Presencial",
              link: "/catalogo?tipo=pos-graduacao&modalidade=presencial",
            },
          ]}
          backgroundColor="bg-muted/30"
        />

        <Cursos
          title="Escolha a especialização que abre portas na sua nova área"
          badge="PÓS-GRADUAÇÃO"
          cursos={[
            {
              nome: "Avaliação Psicológica",
              duracao: "18 meses",
              descricao:
                "Garanta uma competência fundamental para a psicologia e abra excelentes portas no mercado de trabalho.",
              modalidade: "Ao Vivo",
            },
            {
              nome: "Engenharia Estrutural e Fundações: Projeto e Modelagem",
              duracao: "12 meses",
              descricao: "A escolha certa para transformar conhecimento técnico em protagonismo no canteiro de obras",
              modalidade: "Presencial",
            },
            {
              nome: "Intervenção ABA Aplicada ao Transtorno do Espectro Autista e Desenvolvimento Intelectual",
              duracao: "12 meses",
              descricao:
                "Aprenda como orientar crianças e adultos diagnosticados com TEA e/ou deficiência intelectual, através da análise do comportamento aplicada (ABA).",
              modalidade: "Ao Vivo",
            },
          ]}
          ctaText="Ver curso"
        />

        <Trilha
          titulo="Sua jornada de transição, passo a passo"
          subtitulo="Um caminho estruturado desde o nivelamento até a recolocação na sua nova área."
          etapas={[
            {
              numero: "1",
              titulo: "Nivelamento e Fundamentos",
              descricao: "Construção da base técnica da nova área com conteúdo estruturado.",
            },
            {
              numero: "2",
              titulo: "Especialização Aplicada",
              descricao: "Aprofundamento e aplicação prática em projetos reais do mercado.",
            },
            {
              numero: "3",
              titulo: "Certificação Profissional",
              descricao: "Reconhecimento oficial do conhecimento adquirido pelo MEC.",
            },
            {
              numero: "4",
              titulo: "Mentoria de Recolocação",
              descricao: "Preparação de portfólio, currículo e simulação de entrevistas.",
            },
            {
              numero: "5",
              titulo: "Networking Estratégico",
              descricao: "Entrada na comunidade IPOG e acesso a vagas exclusivas.",
            },
          ]}
          botaoCta={{
            texto: "Montar minha trilha de transição",
            href: "/falar-com-consultor",
          }}
          bgColor="bg-background"
        />

        <Empregabilidade
          titulo="Transição com segurança e resultados"
          subtitulo="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "78%",
              descricao: "conseguem transição em até 12 meses",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "8-12 meses",
              descricao: "tempo médio para nova área",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "100%",
              descricao: "acesso a mentoria especializada",
            },
          ]}
          layoutEstatisticas="grid"
          depoimento={{
            texto: "Consegui fazer a transição de engenharia para gestão de projetos com o apoio da mentoria IPOG.",
            autor: "Aluno IPOG",
          }}
          bgColor="bg-background"
        />
        <ROITransicaoArea />
        <CasesRecolocacao />
        <MentoriaNetworking />
        <AcaoFinal
          titulo="Faça uma transição segura com apoio especializado"
          descricao="Mentoria individual, networking estratégico e trilhas com nivelamento. Mude de área com segurança e resultados concretos."
          botaoPrimario={{
            texto: "Planejar minha transição",
            href: "/catalogo?tipo=pos-graduacao",
          }}
          botaoSecundario={{
            texto: "Falar com mentor",
            href: "/falar-com-consultor",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
