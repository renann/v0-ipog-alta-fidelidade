"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface GeoLocationState {
  location: string | null
  dialogOpen: boolean
  setGeoLocation: (location: string) => void
  clearGeoLocation: () => void
  openDialog: () => void
  closeDialog: () => void
}

const GeoLocationContext = createContext<GeoLocationState | undefined>(undefined)

export function GeoLocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const setGeoLocation = (newLocation: string) => {
    setLocation(newLocation)
  }

  const clearGeoLocation = () => {
    setLocation(null)
  }

  const openDialog = () => {
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
  }

  return (
    <GeoLocationContext.Provider
      value={{
        location,
        dialogOpen,
        setGeoLocation,
        clearGeoLocation,
        openDialog,
        closeDialog,
      }}
    >
      {children}
    </GeoLocationContext.Provider>
  )
}

export function useGeoLocation() {
  const context = useContext(GeoLocationContext)

  if (context === undefined) {
    throw new Error("useGeoLocation must be used within a GeoLocationProvider")
  }

  return context
}

export function addGeoToUrl(url: string, geo: string | null): string {
  // Simply return the URL as-is without adding geo parameter
  return url
}
