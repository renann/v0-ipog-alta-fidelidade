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
            href: "/central-atendimento",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
