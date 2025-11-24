import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { VirtualAssistant } from "@/components/virtual-assistant"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LocationDialog } from "@/components/location-dialog"
import { GeoLocationProvider } from "@/hooks/use-geo-location"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IPOG - Instituto de Pós-Graduação e Graduação",
  description: "Transforme sua carreira com o IPOG. Mais de 20 anos formando líderes e especialistas.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased`}>
        <GeoLocationProvider>
          <ScrollToTop />
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
