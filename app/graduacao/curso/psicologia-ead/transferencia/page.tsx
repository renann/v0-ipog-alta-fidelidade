import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { PropostaValorPsicologia } from "@/components/curso-psicologia/proposta-valor-psicologia"
import { JornadaAcademicaPsicologia } from "@/components/curso-psicologia/jornada-academica-psicologia"
import { Modalidades } from "@/components/modalidades"
import { RetornoInvestimentoPsicologia } from "@/components/curso-psicologia/retorno-investimento-psicologia"
import { EmpregabilidadePsicologia } from "@/components/curso-psicologia/empregabilidade-psicologia"
import { MatrizCurricularPsicologia } from "@/components/curso-psicologia/matriz-curricular-psicologia"
import { TrilhasPsicologia } from "@/components/curso-psicologia/trilhas-psicologia"
import { FaqPsicologia } from "@/components/curso-psicologia/faq-psicologia"
import { CtaFinalPsicologia } from "@/components/curso-psicologia/cta-final-psicologia"
import { GraduationCap, Clock, Award } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function PsicologiaTransferenciaPage() {
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
                { label: "Transferência", href: "/graduacao/transferencia" },
                { label: "Psicologia EAD" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Psicologia EAD"
          description="Forme-se em Psicologia com flexibilidade, qualidade e reconhecimento MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade Total" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", onClick: "openAssistantForPrice" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <PropostaValorPsicologia />
        <JornadaAcademicaPsicologia />
        <Modalidades
          titulo="Escolha a modalidade que combina com você"
          subtitulo="A mesma graduação de excelência, com diferentes formatos de estudo"
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao:
                "Estude com flexibilidade total e qualidade IPOG. Acesse conteúdo autoral exclusivo e conclua sua graduação no seu ritmo.",
              beneficios: [
                "Conteúdo autoral e exclusivo",
                "Estude onde e quando quiser",
                "Suporte rápido e eficiente",
                "Diploma com reconhecimento nacional",
              ],
              link: "/graduacao/curso/psicologia-ead",
              buttonText: "Saiba mais sobre EAD",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao:
                "Viva a experiência universitária completa com infraestrutura moderna, mentoria especializada e networking presencial.",
              beneficios: [
                "Laboratórios e clínicas modernas",
                "Corpo docente de mestres e doutores",
                "Networking presencial",
                "Experiência universitária completa",
              ],
              link: "/graduacao/curso/psicologia-presencial",
              buttonText: "Saiba mais sobre Presencial",
            },
          ]}
        />
        <RetornoInvestimentoPsicologia />
        <EmpregabilidadePsicologia />
        <MatrizCurricularPsicologia />
        <TrilhasPsicologia />
        <FaqPsicologia />
        <CtaFinalPsicologia />
      </main>
      <Footer />
    </div>
  )
}
