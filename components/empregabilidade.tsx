"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle2, Play, Quote } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface Statistic {
  icon: ReactNode
  value: string
  description: string
}

interface Testimonial {
  text: string
  author: string
  role?: string
  videoUrl?: string
  videoThumbnail?: string
}

interface Service {
  text: string
}

interface CTAButton {
  text: string
  href?: string
  onClick?: () => void
}

interface EmpregabilidadeProps {
  title: string
  subtitle?: string
  statistics: Statistic[]
  useCarousel?: boolean
  statisticsLayout?: "carousel" | "grid"
  services?: Service[]
  testimonial?: Testimonial
  testimonials?: Testimonial[]
  ctaButton?: CTAButton
  bgColor?: string
}

export function Empregabilidade({
  title,
  subtitle,
  statistics,
  useCarousel = true,
  statisticsLayout = "carousel",
  services,
  testimonial,
  testimonials,
  ctaButton,
  bgColor,
}: EmpregabilidadeProps) {
  const normalizedTestimonials = testimonials || (testimonial ? [testimonial] : [])
  const backgroundColor = bgColor || "bg-background"
  const shouldUseCarousel = statisticsLayout === "carousel" || useCarousel

  const renderStatistics = () => {
    if (shouldUseCarousel) {
      return (
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {statistics.map((stat, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3">
                  <Card className="p-6 text-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {statistics.map((stat, index) => (
          <Card key={index} className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">{stat.icon}</div>
            </div>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.description}</p>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        {renderStatistics()}

        {services && services.length > 0 && (
          <Card className="p-8 mb-8">
            <h3 className="text-xl font-bold mb-6 text-center">Serviços de Carreira</h3>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{service.text}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {normalizedTestimonials.length > 0 && (
          <div className="mb-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {normalizedTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[90%] md:basis-1/2 lg:basis-1/3">
                    <Card className="p-6 h-[480px] flex flex-col bg-muted/30">
                      {testimonial.videoUrl ? (
                        <>
                          <div className="relative w-full flex-1 bg-muted rounded-lg overflow-hidden group mb-4 aspect-[9/16]">
                            {testimonial.videoThumbnail && (
                              <img
                                src={testimonial.videoThumbnail || "/placeholder.svg"}
                                alt={testimonial.author}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            )}
                            <video
                              src={testimonial.videoUrl}
                              controls
                              className="absolute inset-0 w-full h-full object-cover"
                              poster={testimonial.videoThumbnail}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
                              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-auto">
                            <p className="font-semibold text-sm">{testimonial.author}</p>
                            {testimonial.role && <p className="text-xs text-muted-foreground">{testimonial.role}</p>}
                          </div>
                        </>
                      ) : (
                        <>
                          <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                          <p className="text-sm italic mb-4 flex-1 line-clamp-6">&ldquo;{testimonial.text}&rdquo;</p>
                          <div className="mt-auto pt-4 border-t">
                            <p className="font-semibold text-sm">{testimonial.author}</p>
                            {testimonial.role && <p className="text-xs text-muted-foreground">{testimonial.role}</p>}
                          </div>
                        </>
                      )}
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        )}

        {ctaButton && (
          <div className="text-center">
            {ctaButton.href ? (
              <Button size="lg" asChild>
                <Link href={ctaButton.href}>{ctaButton.text}</Link>
              </Button>
            ) : (
              <Button size="lg" onClick={ctaButton.onClick}>
                {ctaButton.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
