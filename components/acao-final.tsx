"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { ReactNode } from "react"

interface AcaoFinalProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href?: string
    onClick?: () => void
    icon?: ReactNode
  }
  secondaryButton: {
    text: string
    href?: string
    onClick?: () => void
    icon?: ReactNode
  }
  backgroundColor?: string
}

export function AcaoFinal({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundColor = "bg-background",
}: AcaoFinalProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${backgroundColor}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <Card className="p-8 md:p-12 bg-muted">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              {primaryButton.href ? (
                <Button size="lg" className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap" asChild>
                  <Link href={primaryButton.href}>
                    {primaryButton.text}
                    {primaryButton.icon && <span className="ml-2">{primaryButton.icon}</span>}
                  </Link>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                  onClick={primaryButton.onClick}
                >
                  {primaryButton.icon && <span className="mr-2">{primaryButton.icon}</span>}
                  {primaryButton.text}
                </Button>
              )}

              {secondaryButton.href ? (
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                  asChild
                >
                  <Link href={secondaryButton.href}>
                    {secondaryButton.icon && <span className="mr-2">{secondaryButton.icon}</span>}
                    {secondaryButton.text}
                  </Link>
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.icon && <span className="mr-2">{secondaryButton.icon}</span>}
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
