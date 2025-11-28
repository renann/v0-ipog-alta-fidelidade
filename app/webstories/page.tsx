"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface WebStory {
  id: string
  title: string
  category: string
  thumbnail: string
  slides: {
    title: string
    subtitle?: string
    content: string
    image: string
    cta?: {
      text: string
      href: string
    }
  }[]
}

const webStories: WebStory[] = [
  {
    id: "1",
    title: "Nova Pós em Inteligência Artificial",
    category: "Lançamento",
    thumbnail: "/placeholder.svg?height=600&width=400&text=IA+e+Machine+Learning",
    slides: [
      {
        title: "Transforme sua carreira",
        subtitle: "Pós-Graduação em IA",
        content: "A mais completa formação em Inteligência Artificial e Machine Learning do Brasil",
        image: "/placeholder.svg?height=800&width=450&text=IA+Slide+1",
      },
      {
        title: "Grade curricular inovadora",
        content: "12 meses de conteúdo prático com os maiores especialistas do mercado",
        image: "/placeholder.svg?height=800&width=450&text=Grade+Curricular",
      },
      {
        title: "Projetos reais",
        content: "Desenvolva soluções de IA aplicadas a casos reais de empresas parceiras",
        image: "/placeholder.svg?height=800&width=450&text=Projetos+Reais",
        cta: {
          text: "Inscreva-se agora",
          href: "/pos-graduacao/ia-machine-learning",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Conquista: Melhor Instituição 2024",
    category: "Destaque",
    thumbnail: "/placeholder.svg?height=600&width=400&text=Prêmio+2024",
    slides: [
      {
        title: "Reconhecimento nacional",
        subtitle: "Prêmio Top of Mind 2024",
        content: "IPOG é eleita a melhor instituição de pós-graduação do Brasil pelo 5º ano consecutivo",
        image: "/placeholder.svg?height=800&width=450&text=Prêmio+Slide+1",
      },
      {
        title: "Excelência comprovada",
        content: "Mais de 50 mil votos de alunos, ex-alunos e profissionais do mercado",
        image: "/placeholder.svg?height=800&width=450&text=Excelência",
      },
      {
        title: "Compromisso contínuo",
        content: "Nossa missão é seguir transformando vidas através da educação de qualidade",
        image: "/placeholder.svg?height=800&width=450&text=Compromisso",
        cta: {
          text: "Conheça o IPOG",
          href: "/institucional",
        },
      },
    ],
  },
  {
    id: "3",
    title: "IPOG Social: Transformando Comunidades",
    category: "Impacto Social",
    thumbnail: "/placeholder.svg?height=600&width=400&text=IPOG+Social",
    slides: [
      {
        title: "Educação que transforma",
        subtitle: "Projeto IPOG Social",
        content: "Levando educação de qualidade para comunidades em situação de vulnerabilidade",
        image: "/placeholder.svg?height=800&width=450&text=Social+Slide+1",
      },
      {
        title: "Mais de 5 mil beneficiados",
        content: "Cursos gratuitos, mentoria e capacitação profissional para quem mais precisa",
        image: "/placeholder.svg?height=800&width=450&text=Beneficiados",
      },
      {
        title: "Faça parte dessa transformação",
        content: "Seja voluntário ou parceiro e ajude a mudar vidas através da educação",
        image: "/placeholder.svg?height=800&width=450&text=Voluntário",
        cta: {
          text: "Saiba como participar",
          href: "/ipog-social",
        },
      },
    ],
  },
  {
    id: "4",
    title: "Webinar: Carreira em Direito Digital",
    category: "Evento",
    thumbnail: "/placeholder.svg?height=600&width=400&text=Webinar+Direito",
    slides: [
      {
        title: "Webinar gratuito",
        subtitle: "Carreira em Direito Digital",
        content: "Descubra as oportunidades no mercado jurídico mais promissor da atualidade",
        image: "/placeholder.svg?height=800&width=450&text=Webinar+Slide+1",
      },
      {
        title: "Com especialistas renomados",
        content: "Advogados e professores que são referência em LGPD, contratos digitais e regulação tech",
        image: "/placeholder.svg?height=800&width=450&text=Especialistas",
      },
      {
        title: "15 de Dezembro, 19h",
        content: "100% online e gratuito. Garanta sua vaga agora!",
        image: "/placeholder.svg?height=800&width=450&text=Data+Hora",
        cta: {
          text: "Inscrever-se gratuitamente",
          href: "/webinar/direito-digital",
        },
      },
    ],
  },
  {
    id: "5",
    title: "ESG no IPOG: Compromisso Real",
    category: "ESG",
    thumbnail: "/placeholder.svg?height=600&width=400&text=ESG+IPOG",
    slides: [
      {
        title: "Sustentabilidade em ação",
        subtitle: "ESG no DNA do IPOG",
        content: "Compromisso real com práticas ambientais, sociais e de governança",
        image: "/placeholder.svg?height=800&width=450&text=ESG+Slide+1",
      },
      {
        title: "Campus 100% sustentável",
        content: "Energia solar, coleta seletiva e redução de 80% no uso de papel",
        image: "/placeholder.svg?height=800&width=450&text=Campus+Verde",
      },
      {
        title: "Diversidade e inclusão",
        content: "50% de bolsas reservadas para grupos minorizados e ações afirmativas",
        image: "/placeholder.svg?height=800&width=450&text=Diversidade",
        cta: {
          text: "Conheça nossas ações ESG",
          href: "/esg",
        },
      },
    ],
  },
  {
    id: "6",
    title: "Depoimento: Carreira Internacional",
    category: "Histórias de Sucesso",
    thumbnail: "/placeholder.svg?height=600&width=400&text=Sucesso+Internacional",
    slides: [
      {
        title: "De Goiânia para o mundo",
        subtitle: "História de Ana Carolina",
        content: "Como a pós-graduação no IPOG abriu portas para uma carreira internacional",
        image: "/placeholder.svg?height=800&width=450&text=Ana+Slide+1",
      },
      {
        title: "Contratada pela Google",
        content: '"O networking e a qualidade do curso foram decisivos para minha aprovação"',
        image: "/placeholder.svg?height=800&width=450&text=Google",
      },
      {
        title: "Você também pode",
        content: "Milhares de alunos transformaram suas carreiras. Sua história começa aqui",
        image: "/placeholder.svg?height=800&width=450&text=Você+Também",
        cta: {
          text: "Conheça nossos cursos",
          href: "/catalogo",
        },
      },
    ],
  },
]

export default function WebStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<WebStory | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (webStories.length > 0) {
      openStory(webStories[0])
    }
  }, [])

  const openStory = (story: WebStory) => {
    setSelectedStory(story)
    setCurrentSlide(0)
  }

  const closeStory = () => {
    setSelectedStory(null)
    setCurrentSlide(0)
  }

  const nextSlide = () => {
    if (selectedStory && currentSlide < selectedStory.slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Web Stories IPOG</h1>
              <p className="text-muted-foreground text-sm md:text-base mt-1">
                Destaques, novidades e histórias que inspiram
              </p>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                Voltar ao site
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
          {webStories.map((story) => (
            <button
              key={story.id}
              onClick={() => openStory(story)}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-border hover:border-foreground transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            >
              {/* Thumbnail */}
              <Image src={story.thumbnail || "/placeholder.svg"} alt={story.title} fill className="object-cover" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <Badge className="mb-2 text-xs bg-white/20 text-white border-white/30">{story.category}</Badge>
                <h3 className="text-white font-bold text-sm md:text-base line-clamp-2 text-left">{story.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Story Viewer Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeStory}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Progress Bars */}
          <div className="absolute top-4 left-4 right-16 z-50 flex gap-1">
            {selectedStory.slides.map((_, index) => (
              <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    index === currentSlide ? "w-full" : index < currentSlide ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {currentSlide < selectedStory.slides.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Current Slide */}
          <div className="relative w-full max-w-md h-full md:h-[90vh] md:rounded-2xl overflow-hidden">
            <Image
              src={selectedStory.slides[currentSlide].image || "/placeholder.svg"}
              alt={selectedStory.slides[currentSlide].title}
              fill
              className="object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
              {selectedStory.slides[currentSlide].subtitle && (
                <p className="text-white/80 text-sm md:text-base mb-2">{selectedStory.slides[currentSlide].subtitle}</p>
              )}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                {selectedStory.slides[currentSlide].title}
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-6">{selectedStory.slides[currentSlide].content}</p>

              {/* CTA Button */}
              {selectedStory.slides[currentSlide].cta && (
                <Link href={selectedStory.slides[currentSlide].cta!.href} onClick={closeStory}>
                  <Button size="lg" className="w-full bg-white text-foreground hover:bg-white/90">
                    {selectedStory.slides[currentSlide].cta!.text}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Click Areas for Navigation */}
          <div className="absolute inset-0 flex">
            <button onClick={prevSlide} className="flex-1" aria-label="Slide anterior" />
            <button onClick={nextSlide} className="flex-1" aria-label="Próximo slide" />
          </div>
        </div>
      )}
    </div>
  )
}
