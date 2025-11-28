"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight, Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface CourseSearchProps {
  title?: string
  description?: string
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

export function CourseSearch({
  title = "Encontre seu curso",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed ex ac elit consectetur rhoncus.",
}: CourseSearchProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selectedArea, setSelectedArea] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedArea) {
      params.set("area", selectedArea)
    }
    router.push(`/catalogo?${params.toString()}`)
  }

  const handleFormationClick = (formationType: string) => {
    const params = new URLSearchParams()
    params.set("formacao", formationType)
    router.push(`/catalogo?${params.toString()}`)
  }

  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6">
          <div className="space-y-3 md:text-center">
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <div className="flex gap-3 min-w-0">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="flex-1 min-w-0 justify-between h-12 md:h-14 text-base border-gray-200 rounded-xl px-4 bg-transparent"
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
              <PopoverContent
                className="w-[var(--radix-popover-trigger-width)] max-w-[calc(100vw-2rem)] p-0"
                align="start"
              >
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
                            setSelectedArea(selectedArea === area.value ? "" : area.value)
                            setOpen(false)
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
              className="shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl bg-black hover:bg-black/90"
              onClick={handleSearch}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
            <button
              onClick={() => handleFormationClick("Graduação")}
              className="hover:text-foreground transition-colors"
            >
              Graduação
            </button>
            <span>|</span>
            <button
              onClick={() => handleFormationClick("Pós-graduação")}
              className="hover:text-foreground transition-colors"
            >
              Pós-graduação
            </button>
            <span>|</span>
            <button
              onClick={() => handleFormationClick("Extensão")}
              className="hover:text-foreground transition-colors"
            >
              Extensão
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
