"use client"

import { useState } from "react"
import { DocumentUpload } from "@/components/document-upload"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Clock, AlertCircle } from "lucide-react"

interface UploadedFile {
  name: string
  size: number
  type: string
  url: string
}

interface DocumentoGraduacaoUploadProps {
  onDocumentComplete: (file: UploadedFile) => void
  uploadedFile: UploadedFile | null
}

export function DocumentoGraduacaoUpload({ onDocumentComplete, uploadedFile }: DocumentoGraduacaoUploadProps) {
  const [daysRemaining] = useState(60) // Mock: 60 days remaining
  const progressPercentage = ((60 - daysRemaining) / 60) * 100

  // Calculate deadline date (60 days from now)
  const deadlineDate = new Date()
  deadlineDate.setDate(deadlineDate.getDate() + daysRemaining)
  const formattedDeadline = deadlineDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="space-y-4">
      {/* Warning Alert */}
      <Alert className="border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
        <AlertCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        <AlertDescription className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Importante:</strong> Você tem até <strong>{formattedDeadline}</strong> para enviar o comprovante de
          conclusão de graduação.
        </AlertDescription>
      </Alert>

      {/* Progress Bar */}
      {!uploadedFile && (
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Prazo para envio</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{daysRemaining} dias</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      )}

      {/* Document Upload */}
      <DocumentUpload
        label="Comprovante de Conclusão de Graduação"
        description="Diploma ou certificado de conclusão (PDF ou imagem)"
        onUploadComplete={onDocumentComplete}
        uploadedFile={uploadedFile}
      />
    </div>
  )
}
