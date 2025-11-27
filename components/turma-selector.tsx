"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  type Modality,
  formatConfirmedDate,
  formatUnconfirmedDate,
  sortClasses,
  findAlternativeClasses,
  mockClasses,
} from "@/lib/class-types"

interface TurmaSelectorProps {
  courseId: string
  modality: Modality
  unit: string
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

export function TurmaSelector({ courseId, modality, unit, value, onValueChange }: TurmaSelectorProps) {
  const [selectedClass, setSelectedClass] = useState<string | undefined>(value)

  const isOnlineModality = modality === "EAD" || unit === "Online"

  const availableClasses = mockClasses.filter((cls) => {
    const matchesCourse = cls.courseId === courseId
    const matchesModality = cls.modality === modality
    const matchesUnit = isOnlineModality ? true : cls.unit === unit
    const hasSeats = cls.availableSeats > 0

    return matchesCourse && matchesModality && matchesUnit && hasSeats
  })

  // Sort classes (confirmed + nearest first)
  const sortedClasses = sortClasses(availableClasses)

  // Find alternative classes in other modalities
  const alternatives = findAlternativeClasses(courseId, modality, mockClasses)

  const handleValueChange = (classId: string) => {
    setSelectedClass(classId)
    onValueChange?.(classId)
  }

  // No classes available
  if (sortedClasses.length === 0) {
    return (
      <div className="space-y-4">
        <Label>Selecione a data de início</Label>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Nenhuma turma disponível nesta unidade</AlertDescription>
        </Alert>

        {alternatives.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full bg-transparent">
                Ver outras opções
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Turmas disponíveis em outras modalidades</DialogTitle>
                <DialogDescription>
                  Encontramos turmas do mesmo curso em outras modalidades que podem te interessar
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-3 mt-4">
                {alternatives.map((alt) => (
                  <div key={alt.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{alt.modality}</Badge>
                          {alt.status === "confirmed" && (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Confirmada
                            </Badge>
                          )}
                        </div>
                        <p className="font-medium mb-1">
                          {alt.status === "confirmed"
                            ? formatConfirmedDate(alt.startDate)
                            : formatUnconfirmedDate(alt.startDate)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {alt.unit} • {alt.availableSeats} vagas disponíveis
                        </p>
                      </div>
                      <Button size="sm">Selecionar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <Label>Selecione a data de início</Label>
      <Select value={selectedClass} onValueChange={handleValueChange}>
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
    </div>
  )
}
