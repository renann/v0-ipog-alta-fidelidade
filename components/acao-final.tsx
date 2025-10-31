"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { ReactNode } from "react"

interface AcaoFinalProps {
  title: string
  descricao: string
  botaoPrimario: {
    texto: string
    href?: string
    onClick?: () => void
    icone?: ReactNode
  }
  botaoSecundario: {
    texto: string
    href?: string
    onClick?: () => void
    icone?: ReactNode
  }
  corFundo?: string
}

export function AcaoFinal({
  title,
  descricao,
  botaoPrimario,
  botaoSecundario,
  corFundo = "bg-background",
}: AcaoFinalProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${corFundo}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <Card className="p-8 md:p-12 bg-muted">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">{descricao}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              {botaoPrimario.href ? (
                <Button size="lg" className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap" asChild>
                  <Link href={botaoPrimario.href}>
                    {botaoPrimario.texto}
                    {botaoPrimario.icone && <span className="ml-2">{botaoPrimario.icone}</span>}
                  </Link>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                  onClick={botaoPrimario.onClick}
                >
                  {botaoPrimario.icone && <span className="mr-2">{botaoPrimario.icone}</span>}
                  {botaoPrimario.texto}
                </Button>
              )}

              {botaoSecundario.href ? (
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                  asChild
                >
                  <Link href={botaoSecundario.href}>
                    {botaoSecundario.icone && <span className="mr-2">{botaoSecundario.icone}</span>}
                    {botaoSecundario.texto}
                  </Link>
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-base w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                  onClick={botaoSecundario.onClick}
                >
                  {botaoSecundario.icone && <span className="mr-2">{botaoSecundario.icone}</span>}
                  {botaoSecundario.texto}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
