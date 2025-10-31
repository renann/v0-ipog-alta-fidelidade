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
          title="Pós-Graduação para Transição de Carreira"
          description="Conquiste sua nova área com a segurança de um método validado e o apoio de quem transforma o mercado. A escolha que conecta você ao sucesso."
          valueBadges={[
            { icon: <ArrowRightLeft className="h-5 w-5" />, text: "Método Comprovado" },
            { icon: <Users className="h-5 w-5" />, text: "Mentoria Estratégica" },
            { icon: <Target className="h-5 w-5" />, text: "Networking de Alto Impacto" },
          ]}
          primaryCTA={{ text: "Receba seu plano de transição", href: "#cursos" }}
          secondaryCTA={{ text: "Fale com um especialista", href: "#contato" }}
        />

        <Dilema
          titulo="A segurança que você precisa para dar o próximo passo"
          subtitulo="O medo de recomeçar do zero, a insegurança sobre a nova área e a falta de rede de contatos são barreiras reais. Mas é possível fazer essa transição com segurança, apoio e resultados concretos"
          dores={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              titulo: "Insegurança ao começar do zero?",
              solucao:
                "Sua jornada começa com uma trilha de nivelamento e mentoria individualizada para construir confiança e resultados a cada etapa.",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              titulo: "Não sabe como entrar no novo mercado?",
              solucao:
                "Conectamos você a uma rede de profissionais atuantes que abrem portas e aceleram sua inserção na nova carreira.",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Receio de não ter a base necessária?",
              solucao:
                "Nossas trilhas-ponte garantem o conhecimento técnico essencial, com projetos práticos que validam sua nova competência desde o início.",
            },
          ]}
        />
        <MetodoTransicaoArea />

        <Modalidades
          titulo="Encontre a modalidade ideal para sua jornada"
          subtitulo="A mesma especialização de excelência, com diferentes formatos para se adaptar ao seu momento de mudança."
          modalidades={[
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "EAD (Gravado)",
              descricao:
                "A flexibilidade total para você migrar de carreira sem abrir mão da sua rotina. Estude com autonomia e conte com mentoria individualizada e a certificação que o mercado reconhece.",
              beneficios: [
                "Estude no seu ritmo e reveja aulas sempre que quiser;",
                "Conteúdos atualizados e interativos;",
                "Tutoria online com suporte contínuo;",
                "Certificação igual ao curso presencial.",
              ],
              buttonText: "Ver cursos EAD",
              link: "/catalogo?categoria=pos-graduacao&modalidade=ead",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "Ao Vivo (Online)",
              descricao:
                "A disciplina e a interação que aceleram seu aprendizado. Participe de encontros semanais com especialistas, tire dúvidas em tempo real e construa uma rede de contatos nacional sem sair de casa.",
              beneficios: [
                "Aulas ao vivo com professores e mentores;",
                "Gravações disponíveis após cada encontro;",
                "Troca com colegas de diversas áreas;",
                "Atividades práticas guiadas.",
              ],
              buttonText: "Ver cursos Ao Vivo",
              link: "/catalogo?categoria=pos-graduacao&modalidade=ao-vivo",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "Presencial",
              descricao:
                "A imersão que constrói conexões de alto impacto. Participe de práticas intensivas, eventos exclusivos e construa um networking sólido com professores e profissionais que são referência na sua nova área.",
              beneficios: [
                "Aulas práticas e discussões presenciais;",
                "Networking direto com profissionais do setor;",
                "Projetos aplicados em grupo;",
                "Certificação reconhecida pelo mercado.",
              ],
              buttonText: "Ver cursos Presencial",
              link: "/catalogo?categoria=pos-graduacao&modalidade=presencial",
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
        />

        <Trilha
          titulo="Uma jornada estruturada para sua nova carreira"
          subtitulo="Um caminho estruturado desde o nivelamento até a recolocação na sua nova área."
          etapas={[
            {
              numero: "1",
              titulo: "Nivelamento e Base Sólida",
              descricao:
                "Construa a base técnica da sua nova carreira com trilhas-ponte, eliminando a insegurança de começar do zero.",
            },
            {
              numero: "2",
              titulo: "Especialização Aplicada",
              descricao:
                "Aprofunde seus conhecimentos com projetos reais e uma metodologia que conecta você à prática que o mercado exige.",
            },
            {
              numero: "3",
              titulo: "Certificação Profissional",
              descricao:
                "Conquiste uma certificação com reconhecimento oficial do MEC e validação internacional, um diploma que carrega o peso e a credibilidade de mais de 20 anos do IPOG.",
            },
            {
              numero: "4",
              titulo: "Mentoria de Recolocação",
              descricao:
                "Receba apoio estratégico para preparar seu portfólio, currículo e se destacar em processos seletivos na nova área.",
            },
            {
              numero: "5",
              titulo: "Acesso à Rede IPOG",
              descricao:
                "Faça parte de uma comunidade exclusiva de profissionais e tenha acesso a oportunidades e conexões que impulsionam sua trajetória.",
            },
          ]}
          botaoCta={{
            texto: "Montar minha trilha de transição",
            href: "/falar-com-consultor",
          }}
          bgColor="bg-background"
        />

        <Empregabilidade
          titulo="Resultados que comprovam: sua transição é nosso compromisso."
          subtitulo="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "78%",
              descricao: "dos nossos alunos realizam a transição de carreira em até 12 meses após a conclusão.",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "8-12 meses",
              descricao:
                "é o tempo médio que nossos alunos levam para se estabelecer e alcançar crescimento na nova carreira.",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "100%",
              descricao: "dos alunos de transição têm acesso a mentoria especializada e à rede de apoio IPOG.",
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
          titulo="Sua nova carreira começa com a escolha certa."
          descricao="Receba um plano de transição personalizado e descubra como a mentoria, o networking e a credibilidade IPOG podem acelerar sua jornada profissional."
          botaoPrimario={{
            texto: "Receba seu plano de transição",
            href: "/catalogo?categoria=pos-graduacao",
          }}
          botaoSecundario={{
            texto: "Fale com um especialista",
            href: "/falar-com-consultor",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
