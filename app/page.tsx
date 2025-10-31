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

        <section className="w-full py-6 md:py-8 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                IPOG: A Escolha Inteligente para Sua Carreira
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                A melhor escolha para quem busca ensino de excelência, com valor acessível e resultados reais na
                carreira
              </p>
            </div>
          </div>
        </section>

        <CourseSearch
          title="Ver todos os cursos"
          description="Busque por área de atuação e descubra os melhores cursos para sua carreira"
        />

        <AssistenteTrilha />
        <QuatroVerticais />
        <MetodologiaUnificada />
        <ResultadosComprovados />
        <ProfessorsSection />
        <ExperienceSection />
        <AcaoFinal
          titulo="Comece sua jornada de transformação profissional"
          descricao="Mais de 20 anos formando especialistas e líderes de mercado. Escolha sua formação e acelere sua carreira"
          botaoPrimario={{
            texto: "Ver todos os cursos",
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
