"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TurmaSelectorProps {
  value?: string
  onValueChange?: (value: string) => void
}

const DATAS_DISPONIVEIS = [
  { id: "turma-jan-2025", label: "13 de Janeiro de 2025" },
  { id: "turma-mar-2025", label: "10 de Março de 2025" },
  { id: "turma-mai-2025", label: "12 de Maio de 2025" },
  { id: "turma-ago-2025", label: "04 de Agosto de 2025" },
  { id: "turma-out-2025", label: "06 de Outubro de 2025" },
]

export function TurmaSelector({ value, onValueChange }: TurmaSelectorProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione uma data de início" />
      </SelectTrigger>
      <SelectContent>
        {DATAS_DISPONIVEIS.map((data) => (
          <SelectItem key={data.id} value={data.id}>
            {data.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
