import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { SearchPageContent } from "@/components/search/search-page-content"

export default function BuscaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      <div className="w-full py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Busca de Cursos" }]} />
        </div>
      </div>
      <SearchPageContent />
    </div>
  )
}
