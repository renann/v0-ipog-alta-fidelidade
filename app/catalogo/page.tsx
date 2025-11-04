import { Suspense } from "react"
import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { CatalogPageContent } from "@/components/catalog/catalog-page-content"

export const dynamic = "force-dynamic"

export default function CatalogoPage() {
  return (
    <>
      <HomeHeader />
      <div className="w-full py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Catálogo de Cursos" }]} />
        </div>
      </div>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
          </div>
        }
      >
        <CatalogPageContent />
      </Suspense>
      <Footer />
    </>
  )
}
