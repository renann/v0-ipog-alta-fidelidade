"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface GeoLocationContextType {
  location: string | null
  dialogOpen: boolean
  openDialog: () => void
  closeDialog: () => void
  setGeoLocation: (location: string) => void
}

const GeoLocationContext = createContext<GeoLocationContextType | undefined>(undefined)

const STORAGE_KEY = "ipog-user-location"

export function GeoLocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    console.log("[v0] GeoLocationProvider: Loading from localStorage")
    const savedLocation = localStorage.getItem(STORAGE_KEY)
    console.log("[v0] GeoLocationProvider: Saved location:", savedLocation)

    if (savedLocation) {
      setLocation(savedLocation)
    }

    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized && !location) {
      console.log("[v0] GeoLocationProvider: No location found, opening dialog")
      setDialogOpen(true)
    }
  }, [isInitialized, location])

  const openDialog = () => {
    console.log("[v0] GeoLocationProvider: Opening dialog manually")
    setDialogOpen(true)
  }

  const closeDialog = () => {
    console.log("[v0] GeoLocationProvider: Closing dialog")
    setDialogOpen(false)
  }

  const setGeoLocation = (newLocation: string) => {
    console.log("[v0] GeoLocationProvider: Setting location:", newLocation)
    setLocation(newLocation)
    localStorage.setItem(STORAGE_KEY, newLocation)
    console.log("[v0] GeoLocationProvider: Location saved to localStorage")
  }

  return (
    <GeoLocationContext.Provider
      value={{
        location,
        dialogOpen,
        openDialog,
        closeDialog,
        setGeoLocation,
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

export function addGeoToUrl(href: string, location: string | null): string {
  if (!location) return href

  try {
    const url = new URL(href, window.location.origin)
    url.searchParams.set("location", location)
    return url.toString()
  } catch {
    return href
  }
}
