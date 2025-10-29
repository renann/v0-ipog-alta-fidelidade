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

        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                IPOG: A Escolha Inteligente para Sua Carreira
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                A melhor escolha para quem busca ensino de excelência, com valor acessível e resultados reais na
                carreira
              </p>
            </div>
          </div>
        </section>

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
