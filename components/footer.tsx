"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { Logo } from "@/components/logo"
import { openAssistantForConsultor } from "@/lib/assistant-events"
import { GeoLink } from "@/components/geo-link"

export function Footer() {
  return (
    <footer className="w-full bg-zinc-900 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 py-12 text-center">
        <GeoLink href="/">
          <Logo variant="light" className="h-8 w-auto mx-auto mb-6" />
        </GeoLink>
        <p className="text-zinc-300 text-base mb-8 max-w-2xl mx-auto">
          Nullam pellentesque, massa ac volutpat porta, quam leo pretium tortor.
        </p>
        <Button
          size="default"
          className="bg-white hover:bg-white/90 text-black px-6 rounded-full"
          onClick={openAssistantForConsultor}
        >
          Fale com um consultor
          <MessageSquare className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 pb-8">
        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-3">
          <GeoLink
            href="/central-atendimento"
            className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
          >
            Central de atendimento
          </GeoLink>
          <GeoLink
            href="/documentos-institucionais"
            className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
          >
            Documentos Institucionais
          </GeoLink>
          <GeoLink
            href="/editais"
            className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
          >
            Editais
          </GeoLink>
          <GeoLink
            href="/sobre"
            className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
          >
            Institucional
          </GeoLink>
          <GeoLink
            href="/calendario-academico"
            className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
          >
            Acadêmico
          </GeoLink>
          <GeoLink
            href="/faq"
            className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
          >
            Perguntas frequentes
          </GeoLink>
          <button className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors">
            Política de Privacidade
          </button>
          <button className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors">
            Termos de uso
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-8 text-center space-y-4">
        <p className="text-zinc-400 text-sm">© 2025 IPOG Todos os direitos reservados.</p>
        <div className="flex flex-col gap-2 items-center text-sm">
          <button className="text-zinc-400 hover:text-zinc-200 transition-colors">Política de Privacidade</button>
          <button className="text-zinc-400 hover:text-zinc-200 transition-colors">Termos de Uso</button>
          <button className="text-zinc-400 hover:text-zinc-200 transition-colors">LGPD</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
