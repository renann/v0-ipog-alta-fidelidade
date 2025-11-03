"use client"

import { useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Info } from "lucide-react"

interface CicloSelectorProps {
  value: string
  onValueChange: (value: string) => void
}

export function CicloSelector({ value, onValueChange }: CicloSelectorProps) {
  useEffect(() => {
    if (!value) {
      onValueChange("1-semestre")
    }
  }, [value, onValueChange])

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="ciclo">Período de Ingresso *</Label>
        <div className="px-3 py-2 bg-muted rounded-md border">
          <p className="text-sm font-medium">Primeiro semestre</p>
        </div>
        <p className="text-sm text-muted-foreground flex items-start gap-2">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>Você poderá escolher sua turma após o início do ciclo</span>
        </p>
      </div>
    </div>
  )
}
