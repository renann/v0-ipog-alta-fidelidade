"use client"

import { useState } from "react"
import { ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const filters = ["EAD", "Ao Vivo", "Presencial"]
const areas = [
  { title: "Psicologia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Saúde", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Direito", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Educação", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

export function TrainingAreas() {
  const [activeFilter, setActiveFilter] = useState("EAD")

  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-base font-semibold">Áreas de formação</h2>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className="rounded-full px-6 py-2 text-sm whitespace-nowrap"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {areas.map((area) => (
                <CarouselItem key={area.title} className="pl-2 md:pl-4 basis-[75%] md:basis-[40%]">
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted flex items-center justify-center rounded-t-lg">
                        <div className="w-32 h-32 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                          <ImageIcon className="h-10 w-10 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="p-4 space-y-2 text-center">
                        <h3 className="font-semibold text-base">{area.title}</h3>
                        <p className="text-xs text-muted-foreground">{area.description}</p>
                        <button className="text-xs text-primary hover:underline pt-1">Saiba mais →</button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
