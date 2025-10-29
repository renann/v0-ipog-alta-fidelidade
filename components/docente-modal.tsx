"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Linkedin } from "lucide-react"

interface DocenteModalProps {
  docente: {
    nome: string
    area: string
    miniBio: string
    bioCompleta: string
    linkedin?: string
    foto: string
  }
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DocenteModal({ docente, open, onOpenChange }: DocenteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={docente.foto || "/placeholder.svg"}
              alt={docente.nome}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <DialogTitle className="text-2xl">{docente.nome}</DialogTitle>
              <DialogDescription className="text-base text-primary font-medium mt-1">{docente.area}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Mini Description */}
          <p className="text-sm text-muted-foreground italic">{docente.miniBio}</p>

          {/* Full Bio */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Biografia</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{docente.bioCompleta}</p>
          </div>

          {/* External Link */}
          {docente.linkedin && (
            <div className="pt-4 border-t">
              <Button asChild variant="outline" className="w-full gap-2 bg-transparent">
                <a href={docente.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Acesse o perfil profissional
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
