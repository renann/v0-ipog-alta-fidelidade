"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight, Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
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
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className="flex-1 justify-between h-12 text-base border-gray-200 rounded-xl px-4 bg-transparent"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                    <span className={cn("truncate", !selectedArea && "text-muted-foreground")}>
                      {selectedArea
                        ? areasDeAtuacao.find((area) => area.value === selectedArea)?.label
                        : "Selecione uma área de atuação"}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-(--radix-popover-trigger-width) p-0" align="start">
                <Command>
                  <CommandInput placeholder="Digite para buscar..." />
                  <CommandList>
                    <CommandEmpty>Nenhuma área encontrada.</CommandEmpty>
                    <CommandGroup>
                      {areasDeAtuacao.map((area) => (
                        <CommandItem
                          key={area.value}
                          value={area.label}
                          onSelect={() => {
                            console.log("[v0] Selected area:", area.value, area.label)
                            setSelectedArea(area.value === selectedArea ? "" : area.value)
                            setPopoverOpen(false)
                          }}
                        >
                          <Check
                            className={cn("mr-2 h-4 w-4", selectedArea === area.value ? "opacity-100" : "opacity-0")}
                          />
                          {area.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
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
