"use client"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface WebStory {
  id: string
  title: string
  category: string
  thumbnail: string
}

const ultimosStories: WebStory[] = [
  {
    id: "1",
    title: "Nova Pós em Inteligência Artificial",
    category: "Lançamento",
    thumbnail: "/placeholder.svg?height=600&width=400&text=IA+e+Machine+Learning",
  },
  {
    id: "2",
    title: "Conquista: Melhor Instituição 2024",
    category: "Destaque",
    thumbnail: "/placeholder.svg?height=600&width=400&text=Prêmio+2024",
  },
  {
    id: "3",
    title: "IPOG Social: Transformando Comunidades",
    category: "Impacto Social",
    thumbnail: "/placeholder.svg?height=600&width=400&text=IPOG+Social",
  },
  {
    id: "4",
    title: "Webinar: Carreira em Direito Digital",
    category: "Evento",
    thumbnail: "/placeholder.svg?height=600&width=400&text=Webinar+Direito",
  },
  {
    id: "5",
    title: "ESG no IPOG: Compromisso Real",
    category: "ESG",
    thumbnail: "/placeholder.svg?height=600&width=400&text=ESG+IPOG",
  },
  {
    id: "6",
    title: "Depoimento: Carreira Internacional",
    category: "Histórias de Sucesso",
    thumbnail: "/placeholder.svg?height=600&width=400&text=Sucesso+Internacional",
  },
]

export function UltimosWebStories() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">Destaques IPOG</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              Novidades, conquistas e histórias que inspiram. Acompanhe o que está acontecendo no IPOG
            </p>
          </div>
          <Link href="/webstories" className="hidden md:block">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {ultimosStories.map((story) => (
            <Link
              key={story.id}
              href="/webstories"
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
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 md:hidden">
          <Link href="/webstories" className="block">
            <Button variant="outline" size="lg" className="w-full gap-2 bg-transparent">
              Ver todos os stories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
