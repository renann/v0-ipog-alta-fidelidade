import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoTransferencia } from "@/components/transferencia/metodo-transferencia"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { ProcessoTransparente } from "@/components/transferencia/processo-transparente"
import { FormasIngresso } from "@/components/formas-ingresso"
import { AcaoFinal } from "@/components/acao-final"
import { AlertCircle, Clock, Building, Users, Award, TrendingUp, Briefcase } from "lucide-react"
import { Autoridade } from "@/components/autoridade"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Empregabilidade } from "@/components/empregabilidade"

export default function TransferenciaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Graduação", href: "/graduacao" },
                { label: "Transferência" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Dê o próximo passo para uma formação de excelência."
          description="Transfira seu curso com a segurança de um processo ágil, o máximo aproveitamento de créditos e a qualidade de uma instituição referência. Faça a escolha que conecta você ao sucesso."
          valueBadges={[
            { text: "Até 95% de aproveitamento de créditos" },
            { text: "Transferência ágil em até 30 dias" },
            { text: "Corpo docente de mestres e doutores" },
          ]}
          primaryCTA={{ text: "Simule sua transferência", onClick: "openAssistantForConsultor" }}
          secondaryCTA={{ text: "Ver cursos de Graduação", href: "/catalogo?tipo=graduacao" }}
        />
        <Dilema
          titulo="Transferir não deveria ser um risco"
          subtitulo="Processo transparente, reconhecimento justo e estrutura superior"
          dores={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              titulo: "Medo de perder créditos",
              descricao: "Você investiu tempo e dinheiro. Perder disciplinas é inaceitável.",
              solucao:
                "Nosso plano de estudos personalizado garante o máximo aproveitamento do seu histórico. Realizamos uma análise transparente e criteriosa que reconhece até 95% das disciplinas já cursadas.",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Processo demorado",
              descricao: "Cada semestre parado é prejuízo na sua formação e carreira.",
              solucao:
                "Seu tempo é valioso. Com um tutor de transição dedicado e um processo otimizado, garantimos sua inscrição em até 30 dias para que sua formação não pare.",
            },
            {
              icon: <Building className="h-5 w-5" />,
              titulo: "Estrutura inadequada",
              descricao: "Você quer melhorar, não apenas mudar de lugar.",
              solucao:
                "Mude para uma estrutura que impulsiona sua carreira. Conte com laboratórios de ponta, conteúdo autoral exclusivo e o prestígio de uma instituição com nota máxima no MEC.",
            },
          ]}
        />
        <MetodoTransferencia />
        <Cursos
          badge="GRADUAÇÃO"
          title="Continue sua jornada nos cursos mais procurados do mercado."
          subtitle="Cursos com maior facilidade de transferência e reconhecimento de disciplinas."
          cursos={[
            {
              nome: "Psicologia",
              duracao: "5 anos",
              descricao:
                "Continue sua formação com o máximo aproveitamento de créditos e a estrutura de uma instituição referência na área da saúde.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead/transferencia",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao:
                "Faça a transferência com um processo transparente e o suporte de um corpo docente renomado para acelerar sua carreira.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
            {
              nome: "Administração",
              duracao: "4 anos",
              descricao:
                "Retome seus estudos de forma ágil e sem burocracia. Aqui, seu histórico acadêmico é valorizado para você não perder tempo.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/administracao",
            },
          ]}
          ctaText="Ver curso"
          ctaLink="/catalogo?tipo=graduacao"
          footerCTA={{
            text: "Ver todos os cursos disponíveis",
            link: "/catalogo?tipo=graduacao",
          }}
        />
        <Modalidades
          titulo="Compare as modalidades e escolha a que mais combina com você"
          subtitulo="A mesma graduação de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao:
                "Estude com a flexibilidade do EAD e a qualidade IPOG. Tenha acesso a conteúdo autoral exclusivo e conclua sua graduação com foco prático e no seu ritmo.",
              beneficios: [
                "Conteúdo autoral e exclusivo",
                "Flexibilidade para estudar onde e quando quiser",
                "Suporte rápido e eficiente",
                "Diploma com reconhecimento nacional",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=ead",
              buttonText: "Encontrar cursos EAD",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao:
                "Viva uma experiência universitária completa. Transfira seu curso e tenha acesso a uma infraestrutura moderna, mentoria especializada e networking presencial que abre portas.",
              beneficios: [
                "Laboratórios modernos e clínicas",
                "Corpo docente de mestres e doutores",
                "Networking que abre portas",
                "Experiência universitária completa",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=presencial",
              buttonText: "Encontrar cursos Presencial",
            },
          ]}
        />
        <Autoridade
          titulo="Aprenda com quem o mercado respeita."
          subtitulo="Infraestrutura moderna e reconhecimento que fazem diferença na sua formação"
          credenciais={[
            {
              icon: <Building className="h-5 w-5" />,
              texto: "Reconhecimento MEC",
            },
            {
              icon: <Users className="h-5 w-5" />,
              texto: "Professores Mestres e Doutores",
            },
            {
              icon: <Award className="h-5 w-5" />,
              texto: "Infraestrutura Moderna",
            },
          ]}
          professores={[
            {
              nome: "Dr. Carlos Silva",
              area: "Psicologia Clínica",
              bio: "20 anos de experiência em clínica e docência. Mestre e Doutor pela USP.",
            },
            {
              nome: "Dra. Ana Santos",
              area: "Direito Empresarial",
              bio: "Advogada atuante e professora há 15 anos. Especialista em contratos.",
            },
            {
              nome: "Prof. João Oliveira",
              area: "Administração",
              bio: "Consultor empresarial e docente. MBA pela FGV e experiência internacional.",
            },
          ]}
        />
        <ProcessoTransparente />
        <Empregabilidade
          title="Alunos que transferiram e aceleraram suas formações"
          subtitle="Veja como o aproveitamento de créditos e um processo ágil transformaram jornadas acadêmicas."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "91%",
              descricao: "concluíram no prazo estimado",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "30%",
              descricao: "de redução no tempo restante",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "95%",
              descricao: "satisfeitos com a transferência",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "Estava travado na minha antiga faculdade. A transferência para o IPOG foi rápida, aproveitaram todos os meus créditos e ainda consegui reduzir 1 ano da minha formação. Melhor decisão que tomei.",
              autor: "Felipe Rodrigues",
              cargo: "Aluno de Administração",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Transferi do interior para o IPOG e foi como renascer academicamente. A qualidade dos professores, a estrutura e o networking que construí aqui não têm comparação. Já estou empregado antes de me formar.",
              autor: "Gabriela Lima",
              cargo: "Aluna de Psicologia",
            },
            {
              texto:
                "Perdi 2 anos na minha antiga faculdade por problemas de grade. No IPOG, aproveitaram tudo e ainda me deram um plano personalizado. Vou me formar no prazo e com uma formação muito superior.",
              autor: "Thiago Martins",
              cargo: "Aluno de Direito",
            },
          ]}
          bgColor="bg-background"
        />
        <FormasIngresso />
        <AcaoFinal
          titulo="Faça a escolha que conecta você ao sucesso."
          descricao="Inicie sua transferência para o IPOG e conclua sua graduação com mais qualidade, agilidade e o suporte que sua carreira merece."
          botaoPrimario={{
            texto: "Inicie sua transferência agora",
            onClick: "openAssistantForConsultor",
          }}
          botaoSecundario={{
            texto: "Ver cursos de Graduação",
            href: "/catalogo?tipo=graduacao",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
