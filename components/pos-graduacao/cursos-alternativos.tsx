"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, BookOpen } from "lucide-react"
import Link from "next/link"

export function CursosAlternativos() {
  const alternativeCourses = [
    {
      id: "psicologia-ead",
      name: "Graduação em Psicologia",
      type: "Graduação",
      duration: "5 anos",
      icon: GraduationCap,
      link: "/graduacao/curso/psicologia-ead",
    },
    {
      id: "lideranca",
      name: "Liderança e Gestão de Equipes",
      type: "Extensão",
      duration: "6 meses",
      icon: BookOpen,
      link: "/extensao",
    },
  ]

  return (
    <Card className="border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <CardContent className="p-4 md:p-6">
        <div className="mb-4 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">Ainda não possui graduação?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Conheça nossos cursos de extensão e graduação</p>
        </div>

        <div className="space-y-3">
          {alternativeCourses.map((course) => {
            const Icon = course.icon
            return (
              <div
                key={course.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    <Icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{course.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {course.type} • {course.duration}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={course.link}>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        <Button variant="outline" className="mt-4 w-full bg-transparent" asChild>
          <Link href="/cursos">Ver todas as alternativas</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
