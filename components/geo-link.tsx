"use client"

import Link from "next/link"
import { useGeoLocation, addGeoToUrl } from "@/hooks/use-geo-location"
import type { ComponentProps } from "react"

interface GeoLinkProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string
}

export function GeoLink({ href, children, ...props }: GeoLinkProps) {
  const { location } = useGeoLocation()
  const urlWithGeo = addGeoToUrl(href, location)

  return (
    <Link href={urlWithGeo} {...props}>
      {children}
    </Link>
  )
}
