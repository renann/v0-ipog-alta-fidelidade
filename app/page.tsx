"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CourseSearch } from "@/components/course-search"
import { AssistenteTrilha } from "@/components/assistente-trilha"
import { QuatroVerticais } from "@/components/quatro-verticais"
import { MetodologiaUnificada } from "@/components/metodologia-unificada"
import { ResultadosComprovados } from "@/components/resultados-comprovados"
import { ProfessorsSection } from "@/components/professors-section"
import { ExperienceSection } from "@/components/experience-section"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { RoiSection } from "@/components/roi-section"
import { useGeoLocation } from "@/hooks/use-geo-location"
import { openAssistantForConsultor } from "@/lib/assistant-events"
import { Hero } from "@/components/hero"
import { Award, TrendingUp, Target } from "lucide-react"

export default function HomePage() {
  const { openDialog } = useGeoLocation()

  useEffect(() => {
    openDialog()
  }, [openDialog])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <Hero
          badge="SMART CHOICE"
          title="IPOG: A Escolha Inteligente para Sua Carreira"
          description="A melhor escolha para quem busca ensino de excelência, com valor acessível e resultados reais na carreira"
          valueBadges={[
            {
              icon: <Award className="w-5 h-5 text-primary" />,
              text: "Excelência Reconhecida",
            },
            {
              icon: <Target className="w-5 h-5 text-primary" />,
              text: "Investimento Acessível",
            },
            {
              icon: <TrendingUp className="w-5 h-5 text-primary" />,
              text: "Resultados Comprovados",
            },
          ]}
          primaryCTA={{
            text: "Explorar cursos",
            href: "/catalogo",
          }}
          secondaryCTA={{
            text: "Falar com consultor",
            onClick: openAssistantForConsultor,
          }}
        />

        <CourseSearch
          title="Encontre seu curso"
          description="Busque por área de atuação e descubra os melhores cursos para sua carreira"
        />

        <AssistenteTrilha />
        <QuatroVerticais />
        <MetodologiaUnificada />
        <ResultadosComprovados />
        <ProfessorsSection />
        <ExperienceSection />
        <RoiSection />
        <AcaoFinal
          titulo="Comece sua jornada de transformação profissional"
          descricao="Mais de 20 anos formando especialistas e líderes de mercado. Escolha sua formação e acelere sua carreira"
          botaoPrimario={{
            texto: "Encontre seu curso",
            href: "/catalogo",
          }}
          botaoSecundario={{
            texto: "Falar com consultor",
            onClick: openAssistantForConsultor,
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
