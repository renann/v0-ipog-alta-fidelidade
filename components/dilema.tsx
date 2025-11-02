"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"
import type { ReactNode } from "react"

interface ProblemSolution {
  icon: ReactNode
  title: string
  description?: string
  problem?: string
  solution: string
}

interface DilemaProps {
  title: string
  subtitle: string
  solution?: string
  imageUrl?: string
  backgroundColor?: string
  problems?: ProblemSolution[]
  ctaText?: string
  ctaAction?: () => void
  showBorder?: boolean
}

export function Dilema({
  title,
  subtitle,
  solution,
  imageUrl,
  backgroundColor = "bg-background",
  problems = [],
  ctaText,
  ctaAction,
  showBorder = false,
}: DilemaProps) {
  if (problems.length > 0) {
    return (
      <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item, index) => (
              <Card key={index} className={showBorder ? "border-2" : ""}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-4 text-center">{item.description}</p>
                  )}
                  {item.problem && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-muted-foreground mb-1">A dor:</p>
                      <p className="text-sm">{item.problem}</p>
                    </div>
                  )}
                  <div className={item.description || item.problem ? "pt-4 border-t" : ""}>
                    {item.problem && <p className="text-sm font-medium text-primary mb-1">A solução:</p>}
                    <p className={`text-sm ${item.problem ? "font-medium" : "text-muted-foreground"} text-center`}>
                      {item.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {ctaText && ctaAction && (
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" onClick={ctaAction}>
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
              <p className="text-muted-foreground mb-4">{subtitle}</p>
              {solution && <p className="text-foreground font-medium">{solution}</p>}
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <ImageIcon className="w-20 h-20 text-muted-foreground" />
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
