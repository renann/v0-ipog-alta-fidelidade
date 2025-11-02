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
          title="Transição de Carreira com Segurança e Método"
          description="Conquiste sua nova área com a segurança de um método validado e o apoio de quem transforma o mercado."
          valueBadges={[
            { icon: <ArrowRightLeft className="h-5 w-5" />, text: "Método Comprovado" },
            { icon: <Users className="h-5 w-5" />, text: "Mentoria Estratégica" },
            { icon: <Target className="h-5 w-5" />, text: "Networking de Alto Impacto" },
          ]}
          primaryCTA={{ text: "Receba seu plano de transição", href: "#cursos" }}
          secondaryCTA={{ text: "Fale com um especialista", href: "#contato" }}
        />

        <Dilema
          title="A segurança que você precisa para dar o próximo passo"
          subtitle="O medo de recomeçar do zero, a insegurança sobre a nova área e a falta de rede de contatos são barreiras reais. Mas é possível fazer essa transição com segurança, apoio e resultados concretos."
          problems={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              title: "Insegurança ao começar do zero?",
              solution:
                "Sua jornada começa com uma trilha de nivelamento e mentoria individualizada para construir confiança e resultados a cada etapa.",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              title: "Não sabe como entrar no novo mercado?",
              solution:
                "Conectamos você a uma rede de profissionais atuantes que abrem portas e aceleram sua inserção na nova carreira.",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              title: "Receio de não ter a base necessária?",
              solution:
                "Nossas trilhas-ponte garantem o conhecimento técnico essencial, com projetos práticos que validam sua nova competência desde o início.",
            },
          ]}
        />
        <MetodoTransicaoArea />

        <Modalidades
          title="Encontre a modalidade ideal para sua jornada"
          subtitle="A mesma especialização de excelência, com diferentes formatos para se adaptar ao seu momento de mudança."
          modalities={[
            {
              badge: "PÓS-GRADUAÇÃO",
              title: "EAD (Gravado)",
              description:
                "A flexibilidade total para você migrar de carreira sem abrir mão da sua rotina. Estude com autonomia e conte com mentoria individualizada e a certificação que o mercado reconhece.",
              benefits: [
                "Estude no seu ritmo e reveja aulas sempre que quiser;",
                "Conteúdos atualizados e interativos;",
                "Tutoria online com suporte contínuo;",
                "Certificação igual ao curso presencial.",
              ],
              buttonText: "Ver cursos EAD",
              link: "/catalogo?tipo=pos-graduacao&modalidade=ead",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              title: "Ao Vivo (Online)",
              description:
                "A disciplina e a interação que aceleram seu aprendizado. Participe de encontros semanais com especialistas, tire dúvidas em tempo real e construa uma rede de contatos nacional sem sair de casa.",
              benefits: [
                "Aulas ao vivo com professores e mentores;",
                "Gravações disponíveis após cada encontro;",
                "Troca com colegas de diversas áreas;",
                "Atividades práticas guiadas.",
              ],
              buttonText: "Ver cursos Ao Vivo",
              link: "/catalogo?tipo=pos-graduacao&modalidade=ao-vivo",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              title: "Presencial",
              description:
                "A imersão que constrói conexões de alto impacto. Participe de práticas intensivas, eventos exclusivos e construa um networking sólido com professores e profissionais que são referência na sua nova área.",
              benefits: [
                "Aulas práticas e discussões presenciais;",
                "Networking direto com profissionais do setor;",
                "Projetos aplicados em grupo;",
                "Certificação reconhecida pelo mercado.",
              ],
              buttonText: "Ver cursos Presencial",
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
          title="Uma jornada estruturada para sua nova carreira"
          subtitle="Um caminho estruturado desde o nivelamento até a recolocação na sua nova área."
          stages={[
            {
              number: "1",
              title: "Nivelamento e Base Sólida",
              description:
                "Construa a base técnica da sua nova carreira com trilhas-ponte, eliminando a insegurança de começar do zero.",
            },
            {
              number: "2",
              title: "Especialização Aplicada",
              description:
                "Aprofunde seus conhecimentos com projetos reais e uma metodologia que conecta você à prática que o mercado exige.",
            },
            {
              number: "3",
              title: "Certificação Profissional",
              description:
                "Conquiste uma certificação com reconhecimento oficial do MEC e validação internacional, um diploma que carrega o peso e a credibilidade de mais de 20 anos do IPOG.",
            },
            {
              number: "4",
              title: "Mentoria de Recolocação",
              description:
                "Receba apoio estratégico para preparar seu portfólio, currículo e se destacar em processos seletivos na nova área.",
            },
            {
              number: "5",
              title: "Acesso à Rede IPOG",
              description:
                "Faça parte de uma comunidade exclusiva de profissionais e tenha acesso a oportunidades e conexões que impulsionam sua trajetória.",
            },
          ]}
          ctaButton={{
            text: "Montar minha trilha de transição",
            href: "/falar-com-consultor",
          }}
          bgColor="bg-background"
        />

        <Empregabilidade
          title="Resultados que comprovam: sua transição é nosso compromisso."
          subtitle="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          statistics={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "78%",
              description: "dos nossos alunos realizam a transição de carreira em até 12 meses após a conclusão.",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              value: "8-12 meses",
              description:
                "é o tempo médio que nossos alunos levam para se estabelecer e alcançar crescimento na nova carreira.",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              value: "100%",
              description: "dos alunos de transição têm acesso a mentoria especializada e à rede de apoio IPOG.",
            },
          ]}
          statisticsLayout="grid"
          testimonial={{
            text: "Consegui fazer a transição de engenharia para gestão de projetos com o apoio da mentoria IPOG.",
            author: "Aluno IPOG",
          }}
          bgColor="bg-background"
        />
        <ROITransicaoArea />
        <CasesRecolocacao />
        <MentoriaNetworking />
        <AcaoFinal
          title="Sua nova carreira começa com a escolha certa."
          description="Receba um plano de transição personalizado e descubra como a mentoria, o networking e a credibilidade IPOG podem acelerar sua jornada profissional."
          primaryButton={{
            text: "Receba seu plano de transição",
            href: "/catalogo?tipo=pos-graduacao",
          }}
          secondaryButton={{
            text: "Fale com um especialista",
            href: "/falar-com-consultor",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
