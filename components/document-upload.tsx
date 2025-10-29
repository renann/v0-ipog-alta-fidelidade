"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface UploadedFile {
  name: string
  size: number
  type: string
  url: string
}

interface DocumentUploadProps {
  label: string
  description: string
  acceptedFormats?: string[]
  maxSizeMB?: number
  onUploadComplete?: (file: UploadedFile) => void
  uploadedFile?: UploadedFile | null
}

export function DocumentUpload({
  label,
  description,
  acceptedFormats = [".pdf", ".jpg", ".jpeg", ".png"],
  maxSizeMB = 5,
  onUploadComplete,
  uploadedFile: initialFile,
}: DocumentUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(initialFile || null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  const validateFile = (file: File): string | null => {
    // Check file type
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()
    if (!acceptedFormats.includes(fileExtension)) {
      return `Formato não aceito. Use: ${acceptedFormats.join(", ")}`
    }

    // Check file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024
    if (file.size > maxSizeBytes) {
      return `Arquivo muito grande. Tamanho máximo: ${maxSizeMB}MB`
    }

    return null
  }

  const handleFile = async (file: File) => {
    setError(null)

    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      return
    }

    setIsUploading(true)

    // Simulate upload delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const uploadedFileData: UploadedFile = {
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    }

    setUploadedFile(uploadedFileData)
    setIsUploading(false)
    onUploadComplete?.(uploadedFileData)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleRemove = () => {
    setUploadedFile(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-3">
      <div>
        <h3 className="font-semibold text-gray-900">{label}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {!uploadedFile ? (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          className={cn(
            "flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors",
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:border-gray-400",
            isUploading && "pointer-events-none opacity-50",
          )}
        >
          <Upload className="mb-3 h-10 w-10 text-gray-400" />
          <p className="mb-2 text-center text-sm font-medium text-gray-700">
            {isUploading ? "Enviando..." : "Arraste o arquivo ou clique para selecionar"}
          </p>
          <p className="mb-4 text-center text-xs text-gray-500">
            {acceptedFormats.join(", ")} (máx. {maxSizeMB}MB)
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            Selecionar arquivo
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedFormats.join(",")}
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600">
            <Check className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="truncate font-medium text-gray-900">{uploadedFile.name}</p>
                <p className="text-sm text-gray-600">{formatFileSize(uploadedFile.size)}</p>
              </div>
              <Button type="button" variant="ghost" size="sm" onClick={handleRemove} className="shrink-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  )
}
