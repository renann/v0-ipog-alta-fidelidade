"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BadgeCheck, ChevronRight } from "lucide-react"
import Link from "next/link"
import { openAssistantForConsultor } from "@/lib/assistant-events"
import type { ReactNode } from "react"

interface ValueBadge {
  icon?: ReactNode
  text: string
}

interface CTA {
  text: string
  href?: string
  onClick?: () => void
  variant?: "default" | "outline"
  icon?: ReactNode
}

interface HeroProps {
  badge: string
  title: string
  description: string
  valueBadges: ValueBadge[]
  primaryCTA: CTA
  secondaryCTA?: CTA
  backgroundImage?: string
  minHeight?: string
}

export function Hero({
  badge,
  title,
  description,
  valueBadges,
  primaryCTA,
  secondaryCTA,
  minHeight = "auto",
}: HeroProps) {
  return (
    <section className="w-full relative" style={{ minHeight }}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-white">
          {/* Placeholder for background image */}
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            {/* Background image placeholder */}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-6">
          <Badge variant="outline" className="text-xs py-1 px-3 font-semibold">
            {badge}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance max-w-4xl">{title}</h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl text-pretty">{description}</p>

        {/* Value Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {valueBadges.map((valueBadge, index) => {
            return (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background">
                {valueBadge.icon || <BadgeCheck className="w-5 h-5" />}
                <span className="text-sm font-medium">{valueBadge.text}</span>
              </div>
            )
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="text-base"
            variant={primaryCTA.variant || "default"}
            asChild={!!primaryCTA.href}
            onClick={primaryCTA.onClick}
          >
            {primaryCTA.href ? (
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                {primaryCTA.icon || <ChevronRight className="w-5 h-5 ml-2" />}
              </Link>
            ) : (
              <>
                {primaryCTA.text}
                {primaryCTA.icon}
              </>
            )}
          </Button>

          {secondaryCTA && (
            <Button
              size="lg"
              variant={secondaryCTA.variant || "outline"}
              className="text-base bg-transparent"
              asChild={!!secondaryCTA.href}
              onClick={secondaryCTA.onClick || openAssistantForConsultor}
            >
              {secondaryCTA.href ? (
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.text}
                  {secondaryCTA.icon}
                </Link>
              ) : (
                <>
                  {secondaryCTA.text}
                  {secondaryCTA.icon}
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
