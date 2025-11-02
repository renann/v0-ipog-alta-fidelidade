"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface CursoRestritoBadgeProps {
  requiredDegree: string
}

export function CursoRestritoBadge({ requiredDegree }: CursoRestritoBadgeProps) {
  return (
    <Alert className="border-amber-500 bg-amber-50 dark:border-amber-700 dark:bg-amber-950">
      <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
      <AlertTitle className="text-amber-900 dark:text-amber-100 font-semibold">
        Curso com Requisito Obrigatório
      </AlertTitle>
      <AlertDescription className="text-amber-800 dark:text-amber-200">
        Este curso é destinado exclusivamente a profissionais <strong>graduados em {requiredDegree}</strong> com
        registro ativo no conselho profissional.
      </AlertDescription>
    </Alert>
  )
}
