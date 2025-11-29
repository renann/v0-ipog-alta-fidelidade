import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { VirtualAssistant } from "@/components/virtual-assistant"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LocationDialog } from "@/components/location-dialog"
import { GeoLocationProvider } from "@/hooks/use-geo-location"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <GeoLocationProvider>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          {children}
          <Analytics />
          <Toaster />
          <VirtualAssistant />
          <Suspense fallback={null}>
            <LocationDialog />
          </Suspense>
        </GeoLocationProvider>
      </body>
    </html>
  )
}
