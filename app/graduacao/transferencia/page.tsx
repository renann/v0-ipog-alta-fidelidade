import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoTransferencia } from "@/components/transferencia/metodo-transferencia"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { ProcessoTransparente } from "@/components/transferencia/processo-transparente"
import { AcaoFinal } from "@/components/acao-final"
import { AlertCircle, Clock, Building, Users, Award } from "lucide-react"
import { Autoridade } from "@/components/autoridade"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

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
          title="Transfira com segurança e clareza total"
          description="Continue sua graduação com melhor estrutura, reconhecimento de créditos e processo ágil. Conclua com qualidade e sem perda de tempo"
          valueBadges={[
            { icon: "BadgeCheck", text: "95% Créditos Reconhecidos" },
            { icon: "BadgeCheck", text: "Processo em 30 Dias" },
            { icon: "BadgeCheck", text: "Estrutura Superior" },
          ]}
          primaryCTA={{ text: "Simule sua transferência", href: "/central-atendimento" }}
          secondaryCTA={{ text: "Ver cursos disponíveis", href: "/catalogo?formacao=graduacao" }}
        />
        <Dilema
          titulo="Transferir não deveria ser um risco"
          subtitulo="Processo transparente, reconhecimento justo e estrutura superior"
          dores={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              titulo: "Medo de perder créditos",
              descricao: "Você investiu tempo e dinheiro. Perder disciplinas é inaceitável",
              solucao: "Reconhecemos até 95% dos seus créditos com análise transparente e criteriosa",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Processo demorado",
              descricao: "Cada semestre parado é prejuízo na sua formação e carreira",
              solucao: "Transferência completa em até 30 dias com suporte dedicado",
            },
            {
              icon: <Building className="h-5 w-5" />,
              titulo: "Estrutura inadequada",
              descricao: "Você quer melhorar, não apenas mudar de lugar",
              solucao: "Infraestrutura moderna, professores qualificados e reconhecimento MEC",
            },
          ]}
        />
        <MetodoTransferencia />
        <Cursos
          badge="GRADUAÇÃO"
          titulo="Escolha o curso que reconhece seus créditos"
          subtitulo="Cursos com maior facilidade de transferência e reconhecimento de disciplinas"
          cursos={[
            {
              nome: "Psicologia",
              duracao: "5 anos",
              descricao:
                "Transfira com segurança. Reconhecemos até 95% dos seus créditos e você continua sua jornada sem perder tempo ou investimento.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao:
                "Processo transparente de análise. Reconhecemos suas disciplinas cursadas e você avança com estrutura de excelência.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
            {
              nome: "Arquitetura e Urbanismo",
              duracao: "5 anos",
              descricao:
                "Transferência ágil em até 30 dias. Reconhecemos seu histórico e você retoma seus estudos rapidamente.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/arquitetura",
            },
          ]}
          ctaText="Ver curso"
          ctaLink="/catalogo?formacao=graduacao"
        />
        <Modalidades
          titulo="Compare as modalidades e escolha a que mais combina com você"
          subtitulo="A mesma graduação de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem precisa de autonomia e flexibilidade total durante a transição",
              beneficios: [
                "Estude no seu ritmo",
                "Plataforma moderna",
                "Suporte acadêmico online",
                "Certificação igual ao presencial",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=ead",
              buttonText: "Encontrar cursos EAD",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza imersão total e networking presencial",
              beneficios: [
                "Laboratórios equipados",
                "Networking presencial",
                "Estrutura moderna",
                "Certificação reconhecida",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=presencial",
              buttonText: "Encontrar cursos Presencial",
            },
          ]}
        />
        <Autoridade
          titulo="Estrutura que justifica sua transferência"
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
        <AcaoFinal
          titulo="Transfira com segurança e clareza total"
          descricao="Reconhecemos até 95% dos seus créditos com processo transparente em até 30 dias. Continue sua graduação com melhor estrutura e sem perda de tempo."
          botaoPrimario={{
            texto: "Simule sua transferência",
            href: "/central-atendimento",
          }}
          botaoSecundario={{
            texto: "Ver cursos disponíveis",
            href: "/catalogo?formacao=graduacao",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
