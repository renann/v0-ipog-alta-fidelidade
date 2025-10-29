"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { openAssistantWithFlow } from "@/lib/assistant-events"
import { useRouter } from "next/navigation"

export function AcaoFinalHome() {
  const router = useRouter()

  return (
    <section className="w-full px-4 py-16 bg-primary text-primary-foreground">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Comece sua transformação profissional agora</h2>
            <p className="text-lg opacity-90">Encontre a formação ideal para sua trajetória</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => router.push("/catalogo")}>
              Encontrar minha formação ideal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => openAssistantWithFlow("consultor")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
