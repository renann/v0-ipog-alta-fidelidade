"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Document {
  id: string
  title: string
  metadata?: string
  downloadUrl: string
}

interface DocumentListProps {
  documents: Document[]
}

export function DocumentList({ documents }: DocumentListProps) {
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const handleDownload = async (doc: Document) => {
    setLoadingId(doc.id)

    // Simulate download delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, this would trigger the actual download
    // window.open(doc.downloadUrl, '_blank')

    setLoadingId(null)
  }

  return (
    <div className="space-y-2">
      {documents.map((doc) => {
        const isLoading = loadingId === doc.id

        return (
          <button
            key={doc.id}
            onClick={() => handleDownload(doc)}
            disabled={isLoading}
            className={cn(
              "w-full flex items-start justify-between gap-4 p-4 rounded-lg border bg-card text-left transition-all",
              "hover:bg-accent hover:border-accent-foreground/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              isLoading && "cursor-wait",
            )}
          >
            <div className="flex-1 min-w-0">
              <h3
                className={cn(
                  "font-medium text-base mb-1 transition-colors",
                  "group-hover:underline",
                  !isLoading && "hover:underline",
                )}
              >
                {doc.title}
              </h3>
              {doc.metadata && <p className="text-sm text-muted-foreground">{doc.metadata}</p>}
            </div>
            <div className="flex-shrink-0 mt-1">
              {isLoading ? (
                <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
              ) : (
                <Download className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
