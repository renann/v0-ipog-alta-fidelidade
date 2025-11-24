"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface ShowcaseItem {
  tag: string
  title: string
  description?: string
  image?: string
  illustration?: string
  href: string
  size: "large" | "small"
  overlay?: boolean
  tagColor?: "primary" | "secondary" | "wine" | "excellence"
}

export interface ShowcaseGridDesktopProps {
  items: ShowcaseItem[]
}

export function ShowcaseGridDesktop({ items }: ShowcaseGridDesktopProps) {
  const largeItem = items.find((item) => item.size === "large")
  const smallItems = items.filter((item) => item.size === "small")

  const getTagColorClasses = (color?: string, hasOverlay?: boolean) => {
    if (hasOverlay) {
      return "bg-white/20 backdrop-blur-sm text-white border-white/30"
    }

    switch (color) {
      case "primary":
        return "bg-[#D71C37] text-white border-[#D71C37]"
      case "wine":
        return "bg-[#481A1F] text-white border-[#481A1F]"
      case "excellence":
        return "bg-[#8A212E] text-white border-[#8A212E]"
      case "secondary":
        return "bg-[#7F7F7F] text-white border-[#7F7F7F]"
      default:
        return "bg-[#D71C37] text-white border-[#D71C37]"
    }
  }

  return (
    <section className="w-full bg-background py-8">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {largeItem && (
            <Link href={largeItem.href} className="lg:col-span-2 group block h-full min-h-[500px] lg:min-h-[600px]">
              <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-tl-[45px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[15px] will-change-transform">
                {largeItem.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 will-change-transform"
                    style={{ backgroundImage: `url(${largeItem.image})` }}
                  />
                )}

                {largeItem.overlay && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                )}

                <div className="relative h-full flex flex-col justify-end p-8 md:p-10 text-white">
                  <Badge
                    variant="secondary"
                    className={`w-fit mb-4 ${getTagColorClasses(largeItem.tagColor, largeItem.overlay)}`}
                  >
                    {largeItem.tag}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{largeItem.title}</h3>
                  {largeItem.description && (
                    <p className="text-lg text-white/90 mb-4 max-w-2xl">{largeItem.description}</p>
                  )}
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Saiba mais</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          )}

          <div className="flex flex-col gap-6">
            {smallItems.map((item, index) => (
              <Link key={index} href={item.href} className="group block h-full min-h-[240px] lg:min-h-[297px]">
                <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-tl-[45px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[15px] will-change-transform">
                  {item.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 will-change-transform"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}

                  {item.illustration && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 will-change-transform"
                      style={{ backgroundImage: `url(${item.illustration})` }}
                    />
                  )}

                  {item.overlay && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  )}

                  <div
                    className={`relative h-full flex flex-col justify-end p-6 ${item.overlay ? "text-white" : "text-foreground"}`}
                  >
                    <Badge
                      variant="secondary"
                      className={`w-fit mb-3 ${getTagColorClasses(item.tagColor, item.overlay)}`}
                    >
                      {item.tag}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">{item.title}</h3>
                    {item.description && (
                      <p className={`text-sm mt-2 ${item.overlay ? "text-white/90" : "text-muted-foreground"}`}>
                        {item.description}
                      </p>
                    )}
                    <div
                      className={`flex items-center gap-2 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity ${item.overlay ? "text-white" : "text-foreground"}`}
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
