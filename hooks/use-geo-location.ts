"use client"

import { create } from "zustand"
import { useEffect } from "react"

interface GeoLocationState {
  location: string | null
  dialogOpen: boolean
  setGeoLocation: (location: string) => void
  clearGeoLocation: () => void
  openDialog: () => void
  closeDialog: () => void
}

export const useGeoLocationStore = create<GeoLocationState>((set) => ({
  location: null,
  dialogOpen: false,
  setGeoLocation: (location: string) => {
    set({ location })
  },
  clearGeoLocation: () => {
    set({ location: null })
  },
  openDialog: () => set({ dialogOpen: true }),
  closeDialog: () => set({ dialogOpen: false }),
}))

export function useGeoLocation() {
  const { location, dialogOpen, setGeoLocation, clearGeoLocation, openDialog, closeDialog } = useGeoLocationStore()

  useEffect(() => {
    if (typeof window === "undefined") return

    const urlParams = new URLSearchParams(window.location.search)
    const geoParam = urlParams.get("geo")
    if (geoParam && geoParam !== location) {
      setGeoLocation(geoParam)
    }
  }, [location, setGeoLocation])

  useEffect(() => {
    if (typeof window === "undefined" || !location) return

    const urlParams = new URLSearchParams(window.location.search)
    const currentGeo = urlParams.get("geo")

    if (currentGeo !== location) {
      urlParams.set("geo", location)
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`
      window.history.replaceState({}, "", newUrl)
    }
  }, [location])

  return {
    location,
    dialogOpen,
    setGeoLocation,
    clearGeoLocation,
    openDialog,
    closeDialog,
  }
}

// Helper function to add geo parameter to any URL
export function addGeoToUrl(url: string, geo: string | null): string {
  if (!geo) return url

  try {
    const urlObj = new URL(url, typeof window !== "undefined" ? window.location.origin : "https://example.com")
    urlObj.searchParams.set("geo", geo)
    return urlObj.pathname + urlObj.search
  } catch {
    // If URL parsing fails, append as query string
    const separator = url.includes("?") ? "&" : "?"
    return `${url}${separator}geo=${encodeURIComponent(geo)}`
  }
}
