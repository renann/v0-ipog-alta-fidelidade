"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const areasDeAtuacao = [
  { value: "psicologia", label: "Psicologia" },
  { value: "direito", label: "Direito" },
  { value: "engenharia", label: "Engenharia" },
  { value: "administracao", label: "Administração" },
  { value: "educacao", label: "Educação" },
  { value: "saude", label: "Saúde" },
  { value: "tecnologia", label: "Tecnologia da Informação" },
  { value: "marketing", label: "Marketing" },
  { value: "recursos-humanos", label: "Recursos Humanos" },
  { value: "financas", label: "Finanças" },
  { value: "gestao", label: "Gestão de Projetos" },
  { value: "arquitetura", label: "Arquitetura" },
  { value: "design", label: "Design" },
  { value: "comunicacao", label: "Comunicação" },
  { value: "meio-ambiente", label: "Meio Ambiente" },
]

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [selectedArea, setSelectedArea] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAreas = areasDeAtuacao.filter((area) => area.label.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedArea) {
      params.set("area", selectedArea)
    }
    router.push(`/catalogo?${params.toString()}`)
    onOpenChange(false)
  }

  const handleFormationClick = (formationType: string) => {
    const params = new URLSearchParams()
    params.set("formacao", formationType)
    router.push(`/catalogo?${params.toString()}`)
    onOpenChange(false)
  }

  const handleSelectArea = (areaValue: string) => {
    console.log("[v0] Selecionando área:", areaValue)
    setSelectedArea(areaValue === selectedArea ? "" : areaValue)
    setPopoverOpen(false)
    setSearchQuery("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Buscar cursos</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex gap-3">
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 justify-between h-12 text-base border-gray-200 rounded-xl px-4 bg-transparent hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                    <span className={cn("truncate text-left", !selectedArea && "text-muted-foreground")}>
                      {selectedArea
                        ? areasDeAtuacao.find((area) => area.value === selectedArea)?.label
                        : "Selecione uma área de atuação"}
                    </span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                <div className="flex flex-col">
                  <div className="p-3 border-b">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Digite para buscar..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 h-10 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div className="max-h-[300px] overflow-y-auto">
                    {filteredAreas.length === 0 ? (
                      <div className="py-6 text-center text-sm text-muted-foreground">Nenhuma área encontrada.</div>
                    ) : (
                      <div className="p-1">
                        {filteredAreas.map((area) => (
                          <button
                            key={area.value}
                            onClick={() => handleSelectArea(area.value)}
                            className={cn(
                              "w-full flex items-center gap-2 px-3 py-2.5 text-sm rounded-md hover:bg-gray-100 transition-colors text-left",
                              selectedArea === area.value && "bg-gray-50",
                            )}
                          >
                            <Check
                              className={cn(
                                "h-4 w-4 shrink-0",
                                selectedArea === area.value ? "opacity-100" : "opacity-0",
                              )}
                            />
                            <span>{area.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Button
              size="icon"
              className="shrink-0 h-12 w-12 rounded-xl bg-black hover:bg-black/90"
              onClick={handleSearch}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Buscar por formação:</span>
            <button
              onClick={() => handleFormationClick("Graduação")}
              className="hover:text-foreground transition-colors font-medium"
            >
              Graduação
            </button>
            <span>|</span>
            <button
              onClick={() => handleFormationClick("Pós-graduação")}
              className="hover:text-foreground transition-colors font-medium"
            >
              Pós-graduação
            </button>
            <span>|</span>
            <button
              onClick={() => handleFormationClick("Extensão")}
              className="hover:text-foreground transition-colors font-medium"
            >
              Extensão
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
