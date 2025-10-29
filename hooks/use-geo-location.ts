"use client"

import { create } from "zustand"

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

  return {
    location,
    dialogOpen,
    setGeoLocation,
    clearGeoLocation,
    openDialog,
    closeDialog,
  }
}

export function addGeoToUrl(url: string, geo: string | null): string {
  // Simply return the URL as-is without adding geo parameter
  return url
}
