"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import Link from "next/link"

interface Jornada {
  icon: ReactNode
  title: string
  promessa: string
  problems: string
  gain: string
  cta: string
  href?: string
  onClick?: () => void
}

interface JornadasProps {
  title: string
  subtitle?: string
  jornadas: Jornada[]
  backgroundColor?: string
}

export function Jornadas({ title, subtitle, jornadas, backgroundColor = "bg-muted/30" }: JornadasProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
        {subtitle && <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">{subtitle}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jornadas.map((jornada, index) => {
            return (
              <Card key={index} className="p-6 flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {jornada.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{jornada.title}</h3>
                <p className="text-sm font-medium mb-3">{jornada.promessa}</p>
                <div className="text-xs text-muted-foreground mb-2">
                  <strong>Resolve:</strong> {jornada.problems}
                </div>
                <div className="text-xs text-muted-foreground mb-4 flex-grow">
                  <strong>Ganho:</strong> {jornada.gain}
                </div>

                {jornada.href ? (
                  <Button className="w-full" asChild>
                    <Link href={jornada.href}>{jornada.cta}</Link>
                  </Button>
                ) : (
                  <Button className="w-full" onClick={jornada.onClick}>
                    {jornada.cta}
                  </Button>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
