"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface ModalidadeVideoModalProps {
  isOpen: boolean
  onClose: () => void
  modalidade: {
    title: string
    description: string
    videoUrl?: string
  }
}

export function ModalidadeVideoModal({ isOpen, onClose, modalidade }: ModalidadeVideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{modalidade.title}</DialogTitle>
          <DialogDescription>{modalidade.description}</DialogDescription>
        </DialogHeader>

        <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=480&width=854"
              alt={`Vídeo explicativo sobre ${modalidade.title}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
