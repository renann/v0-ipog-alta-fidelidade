"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { MapPin, Check, ChevronsUpDown } from "lucide-react"
import { useGeoLocation } from "@/hooks/use-geo-location"
import { cn } from "@/lib/utils"

const BRAZILIAN_CITIES = [
  { value: "sao-paulo-sp", label: "São Paulo - SP" },
  { value: "rio-de-janeiro-rj", label: "Rio de Janeiro - RJ" },
  { value: "brasilia-df", label: "Brasília - DF" },
  { value: "salvador-ba", label: "Salvador - BA" },
  { value: "fortaleza-ce", label: "Fortaleza - CE" },
  { value: "belo-horizonte-mg", label: "Belo Horizonte - MG" },
  { value: "manaus-am", label: "Manaus - AM" },
  { value: "curitiba-pr", label: "Curitiba - PR" },
  { value: "recife-pe", label: "Recife - PE" },
  { value: "goiania-go", label: "Goiânia - GO" },
  { value: "belem-pa", label: "Belém - PA" },
  { value: "porto-alegre-rs", label: "Porto Alegre - RS" },
  { value: "guarulhos-sp", label: "Guarulhos - SP" },
  { value: "campinas-sp", label: "Campinas - SP" },
  { value: "sao-luis-ma", label: "São Luís - MA" },
  { value: "sao-goncalo-rj", label: "São Gonçalo - RJ" },
  { value: "maceio-al", label: "Maceió - AL" },
  { value: "duque-de-caxias-rj", label: "Duque de Caxias - RJ" },
  { value: "natal-rn", label: "Natal - RN" },
  { value: "teresina-pi", label: "Teresina - PI" },
  { value: "campo-grande-ms", label: "Campo Grande - MS" },
  { value: "nova-iguacu-rj", label: "Nova Iguaçu - RJ" },
  { value: "sao-bernardo-do-campo-sp", label: "São Bernardo do Campo - SP" },
  { value: "joao-pessoa-pb", label: "João Pessoa - PB" },
  { value: "santo-andre-sp", label: "Santo André - SP" },
  { value: "osasco-sp", label: "Osasco - SP" },
  { value: "jaboatao-dos-guararapes-pe", label: "Jaboatão dos Guararapes - PE" },
  { value: "sao-jose-dos-campos-sp", label: "São José dos Campos - SP" },
  { value: "ribeirao-preto-sp", label: "Ribeirão Preto - SP" },
  { value: "uberlandia-mg", label: "Uberlândia - MG" },
  { value: "contagem-mg", label: "Contagem - MG" },
  { value: "sorocaba-sp", label: "Sorocaba - SP" },
  { value: "aracaju-se", label: "Aracaju - SE" },
  { value: "feira-de-santana-ba", label: "Feira de Santana - BA" },
  { value: "cuiaba-mt", label: "Cuiabá - MT" },
  { value: "joinville-sc", label: "Joinville - SC" },
  { value: "juiz-de-fora-mg", label: "Juiz de Fora - MG" },
  { value: "londrina-pr", label: "Londrina - PR" },
  { value: "aparecida-de-goiania-go", label: "Aparecida de Goiânia - GO" },
  { value: "ananindeua-pa", label: "Ananindeua - PA" },
  { value: "porto-velho-ro", label: "Porto Velho - RO" },
  { value: "serra-es", label: "Serra - ES" },
  { value: "niteroi-rj", label: "Niterói - RJ" },
  { value: "belford-roxo-rj", label: "Belford Roxo - RJ" },
  { value: "caxias-do-sul-rs", label: "Caxias do Sul - RS" },
  { value: "macapa-ap", label: "Macapá - AP" },
  { value: "campos-dos-goytacazes-rj", label: "Campos dos Goytacazes - RJ" },
  { value: "florianopolis-sc", label: "Florianópolis - SC" },
  { value: "vila-velha-es", label: "Vila Velha - ES" },
  { value: "maua-sp", label: "Mauá - SP" },
]

export function LocationDialog() {
  const [comboboxOpen, setComboboxOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState("")
  const { dialogOpen, closeDialog, setGeoLocation } = useGeoLocation()

  const handleConfirm = () => {
    if (selectedCity) {
      const cityLabel = BRAZILIAN_CITIES.find((city) => city.value === selectedCity)?.label || selectedCity
      setGeoLocation(cityLabel)
      closeDialog()
    }
  }

  const handleCitySelect = (cityValue: string) => {
    setSelectedCity(cityValue === selectedCity ? "" : cityValue)
    setComboboxOpen(false)
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={closeDialog}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MapPin className="h-5 w-5 text-primary" />
            Qual é a sua localização?
          </DialogTitle>
          <DialogDescription>
            Informe sua cidade para personalizarmos sua experiência e mostrarmos as melhores opções disponíveis na sua
            região.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Popover open={comboboxOpen} onOpenChange={setComboboxOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={comboboxOpen}
                className="w-full justify-between bg-transparent"
              >
                {selectedCity ? (
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {BRAZILIAN_CITIES.find((city) => city.value === selectedCity)?.label}
                  </span>
                ) : (
                  "Selecione sua cidade..."
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popover-trigger-width)] max-w-[500px] p-0" align="start">
              <Command>
                <CommandInput placeholder="Buscar cidade..." />
                <CommandList>
                  <CommandEmpty>Nenhuma cidade encontrada.</CommandEmpty>
                  <CommandGroup>
                    {BRAZILIAN_CITIES.map((city) => (
                      <CommandItem
                        key={city.value}
                        value={city.value}
                        onSelect={(currentValue) => handleCitySelect(currentValue)}
                        className="cursor-pointer"
                      >
                        <Check
                          className={cn("mr-2 h-4 w-4", selectedCity === city.value ? "opacity-100" : "opacity-0")}
                        />
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        {city.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <Button onClick={handleConfirm} disabled={!selectedCity} className="w-full">
            Confirmar localização
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
