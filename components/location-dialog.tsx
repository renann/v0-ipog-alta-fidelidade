"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Check, Search } from "lucide-react"
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
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const { dialogOpen, closeDialog, setGeoLocation } = useGeoLocation()

  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return BRAZILIAN_CITIES

    const query = searchQuery.toLowerCase().trim()
    return BRAZILIAN_CITIES.filter((city) => city.label.toLowerCase().includes(query))
  }, [searchQuery])

  const handleConfirm = () => {
    if (selectedCity) {
      const cityLabel = BRAZILIAN_CITIES.find((city) => city.value === selectedCity)?.label || selectedCity
      setGeoLocation(cityLabel)
      closeDialog()
    }
  }

  const handleCitySelect = (cityValue: string) => {
    setSelectedCity(cityValue)
  }

  const handleDialogClose = (open: boolean) => {
    if (!open) {
      setSearchQuery("")
      setSelectedCity("")
      closeDialog()
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
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
          <div className="space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar cidade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="max-h-[300px] overflow-y-auto rounded-md border">
              {filteredCities.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">Nenhuma cidade encontrada.</div>
              ) : (
                <div className="p-1">
                  {filteredCities.map((city) => (
                    <button
                      key={city.value}
                      type="button"
                      onClick={() => handleCitySelect(city.value)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm transition-colors",
                        "hover:bg-accent hover:text-accent-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        selectedCity === city.value && "bg-accent",
                      )}
                    >
                      <Check
                        className={cn("h-4 w-4 shrink-0", selectedCity === city.value ? "opacity-100" : "opacity-0")}
                      />
                      <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="flex-1 text-left">{city.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button onClick={handleConfirm} disabled={!selectedCity} className="w-full">
            Confirmar localização
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
