"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { EditaisModal } from "@/components/editais-modal"

interface EditaisLinkProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function EditaisLink({ variant = "outline", size = "default", className }: EditaisLinkProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setModalOpen(true)}>
        <FileText className="h-4 w-4" />
        Editais e Calendários
      </Button>
      <EditaisModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
