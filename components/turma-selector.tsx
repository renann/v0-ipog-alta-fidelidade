"use client"

import { useState } from "react"
import { Calendar, CheckCircle2, AlertCircle, Info } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
    <div className="space-y-4">
      <Label>Selecione a data de início</Label>

      <RadioGroup value={selectedClass} onValueChange={handleValueChange}>
        <div className="space-y-3">
          {sortedClasses.map((cls) => (
            <div
              key={cls.id}
              className={`relative flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                selectedClass === cls.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
              }`}
            >
              <RadioGroupItem value={cls.id} id={cls.id} className="mt-1" />

              <div className="flex-1">
                <Label htmlFor={cls.id} className="cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">
                      {cls.status === "confirmed"
                        ? formatConfirmedDate(cls.startDate)
                        : formatUnconfirmedDate(cls.startDate)}
                    </span>

                    {cls.status === "confirmed" && (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Confirmada
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {cls.availableSeats} vagas disponíveis de {cls.totalSeats}
                  </p>

                  {cls.status === "unconfirmed" && (
                    <div className="mt-2 flex items-start gap-2 text-xs text-muted-foreground">
                      <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>Data exata será confirmada em breve</span>
                    </div>
                  )}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>

      {sortedClasses.some((cls) => cls.status === "unconfirmed") && (
        <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertDescription className="text-blue-900 dark:text-blue-100">
            Para turmas não confirmadas, a data de inauguração (dia/hora) será comunicada por e-mail e WhatsApp após a
            confirmação e 2 dias antes do início.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
