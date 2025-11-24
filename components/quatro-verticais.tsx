"use client"

import Link from "next/link"
import { GraduationCap, Award, Zap, Building2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface QuatroVerticaisProps {
  titulo?: string
}

const verticais = [
  {
    icon: GraduationCap,
    tag: "GRADUAÇÃO",
    title: "Formação Superior Completa",
    promessa: "Bacharelado com foco em empregabilidade e desenvolvimento profissional",
    diferenciais: ["Modalidades EAD e Presencial", "Programas de bolsas", "Networking e conexões profissionais"],
    href: "/catalogo?categoria=graduacao",
    active: true,
  },
  {
    icon: Award,
    tag: "PÓS-GRADUAÇÃO",
    title: "Especialização Profissional",
    promessa: "Aprofunde seus conhecimentos com credibilidade de mais de 20 anos",
    diferenciais: ["Corpo docente qualificado", "Networking executivo", "Certificação reconhecida pelo MEC"],
    href: "/catalogo?categoria=pos-graduacao",
    active: true,
  },
  {
    icon: Zap,
    tag: "EXTENSÃO",
    title: "Atualização Rápida",
    promessa: "Cursos práticos para aplicação imediata no mercado",
    diferenciais: ["Cursos de curta duração", "Conteúdo aplicável", "Certificação universitária"],
    href: "/catalogo?categoria=extensao",
    active: true,
  },
  {
    icon: Building2,
    tag: "ENTERPRISE",
    title: "Soluções Corporativas",
    promessa: "Educação corporativa com resultados mensuráveis",
    diferenciais: ["Metodologia 6DS", "Programas personalizados", "ROI comprovado"],
    href: "/enterprise",
    ctaText: "Solicitar diagnóstico corporativo",
    active: true,
  },
]

export function QuatroVerticais({ titulo = "Caminhos de Formação" }: QuatroVerticaisProps) {
  return (
    <section className="w-full px-4 py-12 md:py-16 bg-[#F2F2F2]">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-10 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <div className="inline-block h-1 w-16 bg-[#D71921] rounded-full mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance text-[#333333] font-['Montserrat']">
              {titulo}
            </h2>
            <p className="text-base md:text-lg text-[#666666] text-pretty leading-relaxed font-['Montserrat']">
              Escolha a vertical ideal para sua carreira
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {verticais.map((vertical) => {
              const Icon = vertical.icon
              return (
                <Card
                  key={vertical.tag}
                  className="bg-white border border-gray-200 hover:border-[#D71921] hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-lg bg-[#FFE5E6] flex items-center justify-center shrink-0">
                        <Icon className="h-7 w-7 text-[#D71921]" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-[#D71921] uppercase tracking-wider font-['Montserrat']">
                          {vertical.tag}
                        </p>
                        <h3 className="text-lg md:text-2xl font-bold text-balance text-[#333333] font-['Montserrat']">
                          {vertical.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base md:text-lg font-medium text-pretty leading-relaxed text-[#333333] font-['Montserrat']">
                      {vertical.promessa}
                    </p>

                    <div className="space-y-3">
                      {vertical.diferenciais.map((diferencial) => (
                        <div key={diferencial} className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-[#D71921] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm md:text-base leading-relaxed text-[#666666] font-['Montserrat']">
                            {diferencial}
                          </span>
                        </div>
                      ))}
                    </div>

                    {vertical.active ? (
                      <Button
                        asChild
                        className="w-full rounded-xl bg-[#D71921] hover:bg-[#B01419] text-white font-bold h-12 font-['Montserrat']"
                        size="lg"
                      >
                        <Link href={vertical.href}>
                          {vertical.ctaText || `Explorar ${vertical.tag}`}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled className="w-full rounded-xl" size="lg">
                        {vertical.ctaText || `Explorar ${vertical.tag}`}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
