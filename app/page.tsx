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
import { DepoimentosDeTexto } from "@/components/depoimentos-de-texto"
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
                IPOG: A escolha inteligente para sua carreira
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                A melhor escolha para quem busca ensino de excelência, qualidade reconhecida e resultados reais na
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
        <QuatroVerticais titulo="Escolha o caminho que combina com sua trajetória" />
        <MetodologiaUnificada titulo="Metodologia IPOG: teoria + prática + mentoria" />
        <ResultadosComprovados titulo="Mais de 20 anos transformando carreiras e empresas" />
        <ProfessorsSection />

        <DepoimentosDeTexto
          titulo="Quem escolheu IPOG, ficou na frente"
          depoimentos={[
            {
              texto:
                "O IPOG transformou minha carreira. A metodologia prática e os professores experientes me deram as ferramentas necessárias para alcançar a posição de liderança que sempre sonhei.",
              nome: "Ana Paula Silva",
              cargo: "Gerente de Projetos • Tecnologia",
              resultado: "Promoção em 8 meses",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              nome: "Carlos Eduardo Santos",
              cargo: "Diretor de Operações • Logística",
              resultado: "Novo projeto estratégico",
            },
            {
              texto:
                "A especialização no IPOG me deu credibilidade no mercado. Hoje sou referência na minha área e tenho oportunidades que antes pareciam impossíveis.",
              nome: "Mariana Costa",
              cargo: "Head de RH • Recursos Humanos",
              resultado: "Expansão de escopo",
            },
            {
              texto:
                "Networking de alto nível e conteúdo atualizado. O IPOG me conectou com profissionais que se tornaram parceiros de negócios e abriram portas para novos projetos.",
              nome: "Roberto Mendes",
              cargo: "Consultor Empresarial • Gestão",
              resultado: "Consultoria própria",
            },
          ]}
        />

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
