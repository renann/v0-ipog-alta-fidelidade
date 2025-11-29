"use client"

import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { SearchPageContent } from "@/components/search/search-page-content"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BuscaPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      <div className="w-full py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Busca de Cursos" }]} />
            <button
              onClick={() => router.back()}
              className="md:hidden flex items-center gap-1 text-gray-600 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
          </div>
        </div>
      </div>
      <SearchPageContent />
    </div>
  )
}
