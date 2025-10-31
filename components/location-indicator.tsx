"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useGeoLocation } from "@/hooks/use-geo-location"

export function LocationIndicator() {
  const { location, openDialog } = useGeoLocation()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      onClick={openDialog}
    >
      <MapPin className="h-4 w-4" />
      <span>{location || "Selecione sua cidade"}</span>
    </Button>
  )
}
