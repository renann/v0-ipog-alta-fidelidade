"use client"

import { HomeHeader } from "@/components/home-header"
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
import { openAssistantForConsultor } from "@/lib/assistant-events"
import { ShowcaseGridDesktop } from "@/components/showcase-grid-desktop"
import { Award, TrendingUp, Users, Lightbulb } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      <main className="flex-1">
        <div className="lg:hidden">
          <HeroSection />
        </div>

        <div className="hidden lg:block">
          <ShowcaseGridDesktop
            items={[
              {
                tag: "Pós-Graduação",
                title: "Especialize-se com quem o mercado respeita",
                description: "Mais de 20 anos formando especialistas reconhecidos nacionalmente",
                image: "/images/showcase-main.jpg",
                href: "/pos-graduacao",
                size: "large",
                overlay: true,
                tagColor: "primary",
              },
              {
                tag: "Novidade",
                title: "Vestibular IPOG 2025 com bolsas de até 50%",
                description: "Inscrições abertas para graduação EAD e presencial",
                image: "/images/showcase-vestibular.jpg",
                href: "/graduacao",
                size: "small",
                overlay: true,
                tagColor: "secondary",
              },
              {
                tag: "Evento",
                title: "Semana de Carreiras: descubra sua próxima oportunidade",
                description: "Workshops, palestras e networking com líderes de mercado",
                image: "/images/showcase-careers.jpg",
                href: "/eventos",
                size: "small",
                overlay: true,
                tagColor: "wine",
              },
            ]}
          />
        </div>

        <section className="w-full px-8 py-12 md:py-16">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
              IPOG: A escolha inteligente para sua carreira
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              A melhor escolha para quem busca ensino de excelência, qualidade reconhecida e resultados reais na
              carreira
            </p>
          </div>
        </section>

        <section className="w-full px-8 py-12 md:py-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Card 1: Certificação MEC */}
              <div className="flex items-start gap-4 p-6 bg-[#8A212E]/5 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#D71C37]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#D71C37]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-1">Certificação MEC</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Diplomas reconhecidos nacionalmente com validade em todo território brasileiro
                  </p>
                </div>
              </div>

              {/* Card 2: Tradição */}
              <div className="flex items-start gap-4 p-6 bg-[#8A212E]/5 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#D71C37]/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#D71C37]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-1">+20 anos de tradição</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Experiência consolidada formando especialistas e líderes de mercado
                  </p>
                </div>
              </div>

              {/* Card 3: Networking */}
              <div className="flex items-start gap-4 p-6 bg-[#8A212E]/5 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#D71C37]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#D71C37]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-1">Networking qualificado</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Conexões estratégicas com líderes, especialistas e profissionais de destaque
                  </p>
                </div>
              </div>

              {/* Card 4: Metodologia */}
              <div className="flex items-start gap-4 p-6 bg-[#8A212E]/5 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#D71C37]/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[#D71C37]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-1">Metodologia prática</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Aprendizado aplicado com cases reais e projetos voltados ao mercado
                  </p>
                </div>
              </div>
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
          title="Comece sua jornada de transformação profissional"
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
