"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote, Play } from "lucide-react"

interface TestimonialBase {
  name: string
  role: string
  area?: string
  gain?: string
  result?: string
}

interface TextTestimonial extends TestimonialBase {
  type?: "text"
  testimonial?: string
  text?: string
  videoUrl?: never
  thumbnail?: never
  videoThumbnail?: never
}

interface VideoTestimonial extends TestimonialBase {
  type?: "video"
  videoUrl: string
  thumbnail?: string
  videoThumbnail?: string
  testimonial?: never
  text?: never
}

type Testimonial = TextTestimonial | VideoTestimonial

interface DepoimentosDeTextoProps {
  title?: string
  subtitle?: string
  depoimentos: Testimonial[]
  backgroundColor?: string
}

export function DepoimentosDeTexto({
  title,
  subtitle,
  depoimentos,
  backgroundColor = "bg-background",
}: DepoimentosDeTextoProps) {
  const finalTitle = title || "Depoimentos"

  return (
    <section className={`w-full ${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{finalTitle}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {depoimentos.map((item, index) => {
                const isVideo = "videoUrl" in item && item.videoUrl
                const testimonialText = !isVideo ? item.testimonial || item.text || "" : ""
                const finalGain = item.gain || item.result || ""

                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-border bg-card">
                      <CardContent className="flex flex-col p-6">
                        {isVideo ? (
                          <>
                            <div className="relative mb-4 overflow-hidden rounded-lg bg-muted aspect-[9/16] w-full max-w-[300px] mx-auto">
                              <video
                                className="h-full w-full object-cover"
                                controls
                                poster={item.thumbnail || item.videoThumbnail}
                                preload="metadata"
                              >
                                <source src={item.videoUrl} type="video/mp4" />
                                Seu navegador não suporta vídeos.
                              </video>
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="rounded-full bg-primary/90 p-4">
                                  <Play className="h-8 w-8 text-primary-foreground fill-current" />
                                </div>
                              </div>
                            </div>
                            <div className="mt-auto">
                              <p className="font-semibold text-foreground">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.role}
                                {item.area ? ` • ${item.area}` : ""}
                              </p>
                              {finalGain && <p className="mt-2 text-sm font-medium text-primary">{finalGain}</p>}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="min-h-[400px] flex flex-col">
                              <Quote className="mb-4 h-8 w-8 text-muted-foreground" />
                              <p className="mb-6 flex-1 text-sm text-foreground line-clamp-[8]">
                                {testimonialText ? `"${testimonialText}"` : ""}
                              </p>
                              <div className="mt-auto">
                                <p className="font-semibold text-foreground">{item.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {item.role}
                                  {item.area ? ` • ${item.area}` : ""}
                                </p>
                                {finalGain && <p className="mt-2 text-sm font-medium text-primary">{finalGain}</p>}
                              </div>
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
