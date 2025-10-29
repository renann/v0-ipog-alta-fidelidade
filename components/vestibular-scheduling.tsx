"use client"

import { useState } from "react"
import { Calendar, Clock, Monitor, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SchedulingOption {
  id: string
  date: string
  time: string
  mode: "remote" | "presencial"
  location?: string
}

interface VestibularSchedulingProps {
  onSchedulingComplete?: (option: SchedulingOption) => void
  selectedOption?: SchedulingOption | null
}

export function VestibularScheduling({
  onSchedulingComplete,
  selectedOption: initialOption,
}: VestibularSchedulingProps) {
  const [selectedOption, setSelectedOption] = useState<SchedulingOption | null>(initialOption || null)
  const [isConfirming, setIsConfirming] = useState(false)

  // Mock available scheduling options
  const availableOptions: SchedulingOption[] = [
    {
      id: "1",
      date: "15-Novembro-2024",
      time: "14:00",
      mode: "remote",
    },
    {
      id: "2",
      date: "20-Novembro-2024",
      time: "10:00",
      mode: "remote",
    },
    {
      id: "3",
      date: "22-Novembro-2024",
      time: "15:00",
      mode: "presencial",
      location: "Unidade Brasília - Asa Sul",
    },
    {
      id: "4",
      date: "25-Novembro-2024",
      time: "09:00",
      mode: "presencial",
      location: "Unidade Brasília - Asa Norte",
    },
  ]

  const handleConfirm = async () => {
    if (!selectedOption) return

    setIsConfirming(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsConfirming(false)
    onSchedulingComplete?.(selectedOption)
  }

  const isConfirmed = !!initialOption

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-gray-900">Escolha data e horário</h3>
        <p className="text-sm text-gray-600">Selecione a melhor opção para realizar seu vestibular</p>
      </div>

      {isConfirmed ? (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600">
            <Check className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Agendamento confirmado!</p>
            <div className="mt-2 space-y-1 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{selectedOption?.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{selectedOption?.time}</span>
              </div>
              <div className="flex items-center gap-2">
                {selectedOption?.mode === "remote" ? (
                  <>
                    <Monitor className="h-4 w-4" />
                    <span>Remoto (Online)</span>
                  </>
                ) : (
                  <>
                    <MapPin className="h-4 w-4" />
                    <span>{selectedOption?.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {availableOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedOption(option)}
                className={cn(
                  "w-full rounded-lg border-2 p-4 text-left transition-all",
                  selectedOption?.id === option.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <Calendar className="h-4 w-4" />
                      <span>{option.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="h-4 w-4" />
                      <span>{option.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      {option.mode === "remote" ? (
                        <>
                          <Monitor className="h-4 w-4" />
                          <span>Remoto (Online)</span>
                        </>
                      ) : (
                        <>
                          <MapPin className="h-4 w-4" />
                          <span>{option.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {selectedOption?.id === option.id && (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <Button onClick={handleConfirm} disabled={!selectedOption || isConfirming} className="w-full" size="lg">
            {isConfirming ? "Confirmando..." : "Confirmar agendamento"}
          </Button>
        </>
      )}
    </div>
  )
}
