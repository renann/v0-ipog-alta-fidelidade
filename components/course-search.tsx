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
  title = "O que você quer estudar?",
  description = "Encontre o curso ideal para sua carreira",
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
    <section className="w-full px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#D71921] to-[#8C1E2E] rounded-2xl p-8 md:p-12 space-y-6 shadow-xl">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-white font-['Montserrat']">{title}</h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto text-pretty font-['Montserrat']">
              {description}
            </p>
          </div>

          <div className="flex gap-3">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="flex-1 min-w-0 justify-start h-12 md:h-14 text-base border-2 border-white rounded-xl px-4 bg-white text-[#333333] hover:bg-white hover:border-[#0033A0] font-['Montserrat']"
                >
                  <Search className="h-5 w-5 text-[#666666] mr-3 shrink-0" />
                  <span className={cn("truncate flex-1 text-left", !selectedArea && "text-[#999999]")}>
                    {selectedArea
                      ? areasDeAtuacao.find((area) => area.value === selectedArea)?.label
                      : "Buscar curso, área ou palavra-chave..."}
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-(--radix-popover-trigger-width) max-w-[calc(100vw-2rem)] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Digite para buscar..." className="font-['Montserrat']" />
                  <CommandList>
                    <CommandEmpty className="font-['Montserrat']">Nenhuma área encontrada.</CommandEmpty>
                    <CommandGroup>
                      {areasDeAtuacao.map((area) => (
                        <CommandItem
                          key={area.value}
                          value={area.value}
                          onSelect={(currentValue) => {
                            setSelectedArea(currentValue === selectedArea ? "" : currentValue)
                            setOpen(false)
                          }}
                          className="font-['Montserrat']"
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
              className="shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[#0033A0] hover:bg-[#002080] text-white"
              onClick={handleSearch}
              aria-label="Buscar"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-white/90 font-['Montserrat']">
            <button
              onClick={() => handleFormationClick("Graduação")}
              className="hover:text-white hover:underline transition-colors font-medium"
            >
              Graduação
            </button>
            <span>•</span>
            <button
              onClick={() => handleFormationClick("Pós-graduação")}
              className="hover:text-white hover:underline transition-colors font-medium"
            >
              Pós-Graduação
            </button>
            <span>•</span>
            <button
              onClick={() => handleFormationClick("MBA")}
              className="hover:text-white hover:underline transition-colors font-medium"
            >
              MBA
            </button>
            <span>•</span>
            <button
              onClick={() => handleFormationClick("Extensão")}
              className="hover:text-white hover:underline transition-colors font-medium"
            >
              Extensão
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
