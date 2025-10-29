"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from "lucide-react"

interface CicloSelectorProps {
  value: string
  onValueChange: (value: string) => void
}

export function CicloSelector({ value, onValueChange }: CicloSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="ciclo">Período de Ingresso *</Label>
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger id="ciclo">
            <SelectValue placeholder="Selecione o período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-semestre">1º Semestre</SelectItem>
            <SelectItem value="2-semestre">2º Semestre</SelectItem>
            <SelectItem value="3-semestre">3º Semestre</SelectItem>
            <SelectItem value="4-semestre">4º Semestre</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground flex items-start gap-2">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>Você poderá escolher sua turma após o início do ciclo</span>
        </p>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg space-y-2">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Períodos de matrícula disponíveis</h4>
        <div className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
          <p>• 1º ciclo: Novembro a Fevereiro</p>
          <p>• 2º ciclo: Agosto a Setembro</p>
        </div>
      </div>
    </div>
  )
}
