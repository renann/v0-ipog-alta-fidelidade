"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  id: number
  title: string
  description: string
  completed: boolean
  active: boolean
}

interface StepProgressProps {
  steps: Step[]
}

export function StepProgress({ steps }: StepProgressProps) {
  return (
    <div className="w-full">
      {/* Mobile: Vertical layout */}
      <div className="flex flex-col gap-4 md:hidden">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-3">
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-semibold transition-colors",
                  step.completed
                    ? "border-green-600 bg-green-600 text-white"
                    : step.active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300 bg-white text-gray-400",
                )}
              >
                {step.completed ? <Check className="h-5 w-5" /> : <span>{step.id}</span>}
              </div>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn("mt-2 h-12 w-0.5 transition-colors", step.completed ? "bg-green-600" : "bg-gray-300")}
                />
              )}
            </div>

            {/* Step content */}
            <div className="flex-1 pt-1">
              <h3
                className={cn(
                  "font-semibold transition-colors",
                  step.completed || step.active ? "text-gray-900" : "text-gray-400",
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "text-sm transition-colors",
                  step.completed || step.active ? "text-gray-600" : "text-gray-400",
                )}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden md:flex md:items-center md:justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              {/* Step indicator */}
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-colors",
                  step.completed
                    ? "border-green-600 bg-green-600 text-white"
                    : step.active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300 bg-white text-gray-400",
                )}
              >
                {step.completed ? <Check className="h-6 w-6" /> : <span className="text-lg">{step.id}</span>}
              </div>

              {/* Step content */}
              <div className="mt-3 text-center">
                <h3
                  className={cn(
                    "text-sm font-semibold transition-colors",
                    step.completed || step.active ? "text-gray-900" : "text-gray-400",
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-xs transition-colors",
                    step.completed || step.active ? "text-gray-600" : "text-gray-400",
                  )}
                >
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={cn("mx-4 h-0.5 flex-1 transition-colors", step.completed ? "bg-green-600" : "bg-gray-300")}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
