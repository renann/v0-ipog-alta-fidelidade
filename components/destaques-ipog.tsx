import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface DestaqueItem {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  href: string
  size?: "small" | "medium" | "large"
}

const destaques: DestaqueItem[] = [
  {
    id: "1",
    title: "IPOG Cast: O futuro da educação digital",
    description: "Conversamos com especialistas sobre as tendências que estão transformando o ensino superior",
    image: "/podcast-microphone-studio.jpg",
    tags: ["IPOG Cast", "Educação"],
    href: "/ipog-cast",
    size: "large",
  },
  {
    id: "2",
    title: "Lançamento: Nova Pós em IA e Machine Learning",
    description: "Primeira turma com bolsas de até 40% para profissionais de tecnologia",
    image: "/artificial-intelligence-technology.jpg",
    tags: ["Lançamento", "Tecnologia"],
    href: "/pos-graduacao/ia-machine-learning",
    size: "medium",
  },
  {
    id: "3",
    title: "IPOG Social: Impacto em comunidades",
    description: "Conheça nossos projetos de responsabilidade social e transformação",
    image: "/community-volunteering-hands.jpg",
    tags: ["IPOG Social", "Impacto"],
    href: "/ipog-social",
    size: "medium",
  },
  {
    id: "4",
    title: "ESG: Compromisso com o futuro sustentável",
    description: "Nossas ações ambientais, sociais e de governança corporativa",
    image: "/sustainability-environment-nature.jpg",
    tags: ["ESG", "Sustentabilidade"],
    href: "/esg",
    size: "small",
  },
  {
    id: "5",
    title: "Prêmio Top of Mind: IPOG é destaque nacional",
    description: "Reconhecimento pelo 5º ano consecutivo como referência em pós-graduação",
    image: "/award-trophy-celebration.jpg",
    tags: ["Destaque", "Prêmio"],
    href: "/premios",
    size: "small",
  },
]

export function DestaquesIPOG() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">Destaques IPOG</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Acompanhe nossos lançamentos, iniciativas e conquistas
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destaques.map((item, index) => {
            // Define column span based on size for masonry effect
            const spanClass =
              item.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : item.size === "medium"
                  ? "md:col-span-1 md:row-span-2"
                  : "md:col-span-1"

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all ${spanClass}`}
              >
                {/* Image Container */}
                <div className="relative w-full h-64 md:h-full min-h-[280px] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-foreground transition-colors ${
                      item.size === "large" ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-white/90 line-clamp-2 mb-3 ${item.size === "large" ? "text-base" : "text-sm"}`}>
                    {item.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
