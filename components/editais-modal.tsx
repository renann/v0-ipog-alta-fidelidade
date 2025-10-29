"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FileText, Download, Calendar, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditaisModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditaisModal({ open, onOpenChange }: EditaisModalProps) {
  const editais = [
    {
      id: 1,
      title: "Edital de Matrícula 2025.1",
      category: "Matrícula",
      date: "Janeiro 2025",
      icon: FileText,
    },
    {
      id: 2,
      title: "Calendário Acadêmico 2025",
      category: "Calendário",
      date: "Ano Letivo 2025",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Prazos de Inscrição Vestibular",
      category: "Vestibular",
      date: "2025",
      icon: Clock,
    },
    {
      id: 4,
      title: "Regulamento de Graduação",
      category: "Regulamento",
      date: "Atualizado 2025",
      icon: BookOpen,
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Editais e Calendários</DialogTitle>
          <DialogDescription>Acesse os editais e prazos oficiais do IPOG</DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {editais.map((edital) => {
            const Icon = edital.icon
            return (
              <div
                key={edital.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{edital.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-0.5 bg-muted rounded text-xs">{edital.category}</span>
                      <span>•</span>
                      <span>{edital.date}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            Todos os documentos estão em formato PDF. Para dúvidas, entre em contato com a secretaria acadêmica.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
