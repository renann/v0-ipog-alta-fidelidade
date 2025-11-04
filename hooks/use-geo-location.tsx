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

export function addGeoToUrl(href: string, location: string | null): string {
  if (!location) return href

  try {
    const url = new URL(href, window.location.origin)
    url.searchParams.set("location", location)
    return url.pathname + url.search + url.hash
  } catch {
    // If URL parsing fails, return original href
    return href
  }
}

export function GeoLocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [hasAttemptedAutoOpen, setHasAttemptedAutoOpen] = useState(false)

  useEffect(() => {
    const savedLocation = localStorage.getItem("ipog-user-location")
    if (savedLocation) {
      setLocation(savedLocation)
    }
  }, [])

  useEffect(() => {
    if (!hasAttemptedAutoOpen && location === null) {
      const timer = setTimeout(() => {
        setDialogOpen(true)
        setHasAttemptedAutoOpen(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [hasAttemptedAutoOpen, location])

  const openDialog = () => {
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
  }

  const setGeoLocation = (newLocation: string) => {
    setLocation(newLocation)
    localStorage.setItem("ipog-user-location", newLocation)
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
