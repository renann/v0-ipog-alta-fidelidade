import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground">Desculpe, a página que você está procurando não existe ou foi movida.</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ir para Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/catalogo">
              <Search className="mr-2 h-4 w-4" />
              Ver Cursos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
