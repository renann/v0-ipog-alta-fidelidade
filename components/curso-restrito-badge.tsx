"use client"

import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Lock } from "lucide-react"

interface CursoRestritoBadgeProps {
  requiredDegree: string
}

export function CursoRestritoBadge({ requiredDegree }: CursoRestritoBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="secondary"
            className="gap-1 border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            <Lock className="h-3 w-3" />
            Curso Restrito
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="text-sm">
            Destinado exclusivamente a profissionais graduados em <strong>{requiredDegree}</strong>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
