"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { HomeHeader } from "@/components/home-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { CheckCircle2, Calendar, Clock, MapPin, Monitor, Building, ArrowRight, AlertCircle } from "lucide-react"
import Link from "next/link"
import { getCourse } from "@/lib/mock-courses"
import { cn } from "@/lib/utils"

interface ScheduleOption {
  id: string
  date: string
  dayOfWeek: string
  time: string
  mode: "online" | "presencial"
  location?: string
  spotsLeft: number
}

const SCHEDULE_OPTIONS: ScheduleOption[] = [
  { id: "1", date: "15/02/2025", dayOfWeek: "Sábado", time: "09:00", mode: "online", spotsLeft: 45 },
  { id: "2", date: "15/02/2025", dayOfWeek: "Sábado", time: "14:00", mode: "online", spotsLeft: 32 },
  { id: "3", date: "22/02/2025", dayOfWeek: "Sábado", time: "09:00", mode: "online", spotsLeft: 50 },
  { id: "4", date: "22/02/2025", dayOfWeek: "Sábado", time: "14:00", mode: "online", spotsLeft: 28 },
  {
    id: "5",
    date: "01/03/2025",
    dayOfWeek: "Sábado",
    time: "09:00",
    mode: "presencial",
    location: "São Paulo - SP",
    spotsLeft: 20,
  },
  {
    id: "6",
    date: "01/03/2025",
    dayOfWeek: "Sábado",
    time: "14:00",
    mode: "presencial",
    location: "São Paulo - SP",
    spotsLeft: 15,
  },
  { id: "7", date: "08/03/2025", dayOfWeek: "Sábado", time: "09:00", mode: "online", spotsLeft: 50 },
  { id: "8", date: "08/03/2025", dayOfWeek: "Sábado", time: "14:00", mode: "online", spotsLeft: 50 },
]

function VestibularOnboardingContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get("course") || ""
  const course = getCourse(courseId)

  const [selectedMode, setSelectedMode] = useState<"online" | "presencial" | "">("")
  const [selectedSchedule, setSelectedSchedule] = useState<string>("")
  const [isConfirmed, setIsConfirmed] = useState(false)

  const filteredOptions = selectedMode ? SCHEDULE_OPTIONS.filter((opt) => opt.mode === selectedMode) : SCHEDULE_OPTIONS

  const selectedOption = SCHEDULE_OPTIONS.find((opt) => opt.id === selectedSchedule)

  const handleConfirm = () => {
    if (selectedSchedule) {
      setIsConfirmed(true)
    }
  }

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <HomeHeader hideMenu={true} />

      <div className="w-full py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems
            items={[
              { label: "Início", href: "/" },
              { label: "Checkout", href: `/checkout?course=${courseId}` },
              { label: "Agendamento Vestibular" },
            ]}
          />
        </div>
      </div>

      <main className="w-full py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-4">
          {!isConfirmed ? (
            <>
              {/* Header */}
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h1 className="mb-3 text-2xl font-bold md:text-3xl">Agende seu Vestibular</h1>
                <p className="mx-auto max-w-xl text-muted-foreground">
                  Sua inscrição no processo seletivo para <strong>{course.title}</strong> foi realizada com sucesso.
                  Agora, escolha a melhor data e horário para realizar sua prova.
                </p>
              </div>

              {/* Course Info */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground">{course.title.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{course.modality}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {course.duration} • {course.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mode Selection */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Modalidade da Prova</CardTitle>
                  <CardDescription>Escolha como você prefere realizar o vestibular</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedMode("online")}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-lg border-2 text-left transition-all",
                        selectedMode === "online"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/50",
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                          selectedMode === "online" ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        <Monitor className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Online</p>
                        <p className="text-sm text-muted-foreground">
                          Realize a prova de qualquer lugar, pelo computador
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedMode("presencial")}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-lg border-2 text-left transition-all",
                        selectedMode === "presencial"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/50",
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                          selectedMode === "presencial" ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        <Building className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Presencial</p>
                        <p className="text-sm text-muted-foreground">Realize a prova em uma de nossas unidades</p>
                      </div>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Selection */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Data e Horário</CardTitle>
                  <CardDescription>
                    {selectedMode
                      ? `Selecione uma das datas disponíveis para prova ${selectedMode}`
                      : "Selecione a modalidade acima para ver as datas disponíveis"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedMode ? (
                    <RadioGroup value={selectedSchedule} onValueChange={setSelectedSchedule}>
                      <div className="space-y-3">
                        {filteredOptions.map((option) => (
                          <label
                            key={option.id}
                            className={cn(
                              "flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all",
                              selectedSchedule === option.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-muted-foreground/50",
                            )}
                          >
                            <div className="flex items-center gap-4">
                              <RadioGroupItem value={option.id} id={option.id} />
                              <div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span className="font-medium">
                                    {option.date} ({option.dayOfWeek})
                                  </span>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" />
                                    {option.time}
                                  </span>
                                  {option.location && (
                                    <span className="flex items-center gap-1">
                                      <MapPin className="h-3.5 w-3.5" />
                                      {option.location}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <Badge variant={option.spotsLeft < 20 ? "destructive" : "secondary"} className="shrink-0">
                              {option.spotsLeft} vagas
                            </Badge>
                          </label>
                        ))}
                      </div>
                    </RadioGroup>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 text-muted-foreground">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <p className="text-sm">
                        Selecione a modalidade da prova (online ou presencial) para visualizar as datas disponíveis.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Confirm Button */}
              <div className="flex flex-col gap-4">
                <Button size="lg" className="w-full" disabled={!selectedSchedule} onClick={handleConfirm}>
                  Confirmar Agendamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Você poderá alterar a data do vestibular até 48h antes da prova
                </p>
              </div>
            </>
          ) : (
            /* Confirmation Screen */
            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>

              <h1 className="mb-3 text-2xl font-bold md:text-3xl">Vestibular Agendado!</h1>
              <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                Sua prova foi agendada com sucesso. Enviamos um e-mail com todas as informações e instruções para o dia
                da prova.
              </p>

              {selectedOption && (
                <Card className="mb-8 text-left">
                  <CardHeader>
                    <CardTitle className="text-lg">Detalhes do Agendamento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Curso</span>
                      <span className="font-medium">{course.title}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Data</span>
                      <span className="font-medium">
                        {selectedOption.date} ({selectedOption.dayOfWeek})
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Horário</span>
                      <span className="font-medium">{selectedOption.time}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Modalidade</span>
                      <Badge variant="secondary">{selectedOption.mode === "online" ? "Online" : "Presencial"}</Badge>
                    </div>
                    {selectedOption.location && (
                      <div className="flex items-center justify-between py-2">
                        <span className="text-muted-foreground">Local</span>
                        <span className="font-medium">{selectedOption.location}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href={`/pos-venda?course=${courseId}&metodo=vestibular`}>
                    Continuar para Pós-Venda
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/">Voltar ao Início</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function VestibularOnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      }
    >
      <VestibularOnboardingContent />
    </Suspense>
  )
}
